from typing import List, Optional, Dict, Any
from fastapi import APIRouter, Depends, HTTPException, Query
from sqlalchemy.orm import Session
from backend.app.core.database import get_db
from backend.app.models.risk_zone import RiskZone, RiskLevel
from backend.app.models.sensor import SensorNode
from backend.app.schemas.risk import (
    RiskEvaluateRequest, RiskEvaluateResponse, RiskZoneResponse,
    GeoJSONFeatureCollection, GeoJSONFeature
)
from backend.app.services.ml_risk_engine import ml_risk_engine

router = APIRouter(prefix="/risk", tags=["AI Risk Assessment & Zones"])

@router.get("/summary")
def get_risk_summary(db: Session = Depends(get_db)) -> Dict[str, Any]:
    """Provides high-level dashboard metrics across all monitored zones."""
    zones = db.query(RiskZone).all()
    if not zones:
        return {
            "overall_risk_score": 0,
            "overall_risk_level": "LOW",
            "total_active_alerts": 0,
            "critical_alerts_count": 0,
            "average_soil_moisture": 0.35,
            "average_rainfall_24h_mm": 10.0,
            "zones_monitored": 0,
            "evacuation_active_zones": 0
        }

    avg_score = sum(z.risk_score for z in zones) / len(zones)
    avg_rain = sum(z.rainfall_24h_mm for z in zones) / len(zones)
    avg_moist = sum(z.soil_moisture_m3m3 for z in zones) / len(zones)
    
    crit_alerts = [z for z in zones if z.risk_level == RiskLevel.CRITICAL or z.risk_score >= 70]
    high_alerts = [z for z in zones if z.risk_level in [RiskLevel.HIGH, RiskLevel.CRITICAL] or z.risk_score >= 45]
    evac_zones = [z for z in zones if z.evacuation_advised]

    level = "LOW"
    if avg_score >= 70:
        level = "CRITICAL"
    elif avg_score >= 45:
        level = "HIGH"
    elif avg_score >= 25:
        level = "MODERATE"

    return {
        "overall_risk_score": round(avg_score, 1),
        "overall_risk_level": level,
        "total_active_alerts": len(high_alerts),
        "critical_alerts_count": len(crit_alerts),
        "average_soil_moisture": round(avg_moist, 3),
        "average_rainfall_24h_mm": round(avg_rain, 1),
        "zones_monitored": len(zones),
        "evacuation_active_zones": len(evac_zones)
    }

@router.post("/evaluate", response_model=RiskEvaluateResponse)
async def evaluate_location_risk(request: RiskEvaluateRequest):
    """
    Evaluates real-time hazard risk score (0-100%) for any given GPS coordinate.
    Combines live Open-Meteo rainfall, soil moisture, elevation, and terrain slope.
    """
    try:
        rain_val = request.custom_rainfall_mm if request.custom_rainfall_mm is not None else request.rainfall_24h_mm
        result = await ml_risk_engine.evaluate_coordinates(
            latitude=request.latitude,
            longitude=request.longitude,
            slope_angle=request.slope_angle,
            custom_rainfall_mm=rain_val,
            soil_moisture_override=request.soil_moisture_m3m3
        )
        return result
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Risk evaluation error: {str(e)}")

@router.post("/assess", response_model=RiskEvaluateResponse)
async def assess_risk_alias(request: RiskEvaluateRequest):
    """Alias for /evaluate."""
    return await evaluate_location_risk(request)

@router.get("/zones", response_model=List[RiskZoneResponse])
def get_all_risk_zones(
    state: Optional[str] = Query(None, description="Filter by state (e.g. Assam, Meghalaya)"),
    level: Optional[RiskLevel] = Query(None, description="Filter by severity level"),
    db: Session = Depends(get_db)
):
    """Retrieves all monitored micro-zones with live hazard risk scores."""
    query = db.query(RiskZone)
    if state:
        query = query.filter(RiskZone.state.ilike(f"%{state}%"))
    if level:
        query = query.filter(RiskZone.risk_level == level)
    return query.all()

@router.get("/geojson-heatmap", response_model=GeoJSONFeatureCollection)
def get_risk_geojson_heatmap(db: Session = Depends(get_db)):
    """
    Returns risk micro-zones formatted as standard GeoJSON FeatureCollection
    for direct integration with Leaflet.js, Mapbox GL JS, or MapLibre GL.
    """
    zones = db.query(RiskZone).all()
    features = []

    for z in zones:
        coords = z.polygon_coordinates or []
        # Ensure polygon geometry is closed
        if coords and coords[0] != coords[-1]:
            coords.append(coords[0])

        feature = GeoJSONFeature(
            geometry={
                "type": "Polygon",
                "coordinates": [coords] if coords else []
            },
            properties={
                "id": z.id,
                "zone_code": z.zone_code,
                "name": z.name,
                "state": z.state,
                "district": z.district,
                "hazard_type": z.hazard_type.value,
                "risk_score": z.risk_score,
                "risk_level": z.risk_level.value,
                "rainfall_24h_mm": z.rainfall_24h_mm,
                "slope_angle": z.slope_angle,
                "soil_moisture": z.soil_moisture_m3m3,
                "evacuation_advised": bool(z.evacuation_advised)
            }
        )
        features.append(feature)

    return GeoJSONFeatureCollection(features=features)

@router.post("/ml-predict")
def predict_with_ml_model(
    slope_degrees: float = Query(28.0, description="Terrain slope angle in degrees"),
    rainfall_24h_mm: float = Query(65.0, description="24-hour rainfall accumulation in mm"),
    soil_moisture_m3_m3: float = Query(0.42, description="Volumetric soil moisture (0.10 - 0.65)"),
    elevation_m: float = Query(350.0, description="Elevation in meters"),
    rain_rate_current_mm_hr: float = Query(12.0, description="Current precipitation rate mm/hr"),
    ndvi_vegetation: float = Query(0.45, description="NDVI vegetation index (0.05 - 0.85)"),
    dist_to_drainage_m: float = Query(180.0, description="Distance to river/stream channel in meters"),
    lithology_code: int = Query(3, description="Rock lithology (1=Alluvium, 3=Sedimentary, 5=Friable Shale)"),
    tilt_rate_deg_day: float = Query(0.1, description="Ground tilt rate in deg/day")
) -> Dict[str, Any]:
    """
    Evaluates terrain parameters directly through the trained Machine Learning Random Forest Model.
    Returns multi-class probabilities, continuous risk percentage, and evacuation triggers.
    """
    return ml_risk_engine.ml_predict(
        slope_degrees=slope_degrees,
        rainfall_24h_mm=rainfall_24h_mm,
        soil_moisture_m3_m3=soil_moisture_m3_m3,
        elevation_m=elevation_m,
        rain_rate_current_mm_hr=rain_rate_current_mm_hr,
        ndvi_vegetation=ndvi_vegetation,
        dist_to_drainage_m=dist_to_drainage_m,
        lithology_code=lithology_code,
        tilt_rate_deg_day=tilt_rate_deg_day
    )


