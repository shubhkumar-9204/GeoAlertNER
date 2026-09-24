"""
GeoAlertNER AI Hazard Risk Assessment Engine.
Copyright (c) 2026 GeoAlertNER Contributors. All rights reserved.
Protected under Anti-Plagiarism and Moral Rights terms (see LICENSE and ATTRIBUTION.md).
"""

import math
import numpy as np
from typing import Dict, Any, Tuple
from backend.app.models.risk_zone import RiskLevel, HazardType
from backend.app.schemas.risk import RiskFactorBreakdown, RiskEvaluateResponse
from backend.app.services.weather_service import weather_service

class MLRiskEngine:
    """
    AI Risk Assessment Engine for Landslide, Flash Flood, and Terrain Hazards in NER.
    Combines Slope Geometry (DEM), 24h Rainfall Accumulation, Soil Moisture Saturation,
    and Historical Susceptibility Index.
    """

    def __init__(self):
        # Weights for Landslide / Flash Flood susceptibility
        self.w_rainfall = 0.35
        self.w_slope = 0.30
        self.w_soil_moisture = 0.20
        self.w_elevation = 0.05
        self.w_historical = 0.10

    def estimate_slope_from_coords(self, lat: float, lon: float) -> float:
        """
        Estimates terrain slope angle in degrees for North Eastern Region coordinates.
        (Higher in Shillong Plateau, Naga Hills, Sikkim Himalayas, lower in Brahmaputra Valley).
        """
        # Hilly coordinates estimation heuristic
        seed = int((abs(lat) * 100 + abs(lon) * 100) % 37)
        if 25.0 <= lat <= 28.5 and 90.0 <= lon <= 96.0:
            # Hilly terrain typical in NER: 18 to 48 degrees
            return round(18.0 + (seed % 28) + (math.sin(lat) * 4), 1)
        return round(5.0 + (seed % 10), 1)

    def calculate_risk(
        self,
        rainfall_24h_mm: float,
        current_rain_rate_mm: float,
        slope_degrees: float,
        soil_moisture: float, # 0.0 to 1.0 (m3/m3)
        elevation_m: float = 200.0,
        historical_score: float = 45.0
    ) -> Tuple[float, RiskFactorBreakdown, RiskLevel, HazardType]:
        """
        Calculates normalized hazard risk score (0 to 100%).
        """
        # 1. Rainfall score (0 to 100)
        # Threshold: 0-20mm (Low), 20-70mm (Moderate), 70-150mm (High), >150mm (Critical)
        rain_score = min(100.0, (rainfall_24h_mm / 150.0) * 80.0 + (current_rain_rate_mm * 2.0))
        
        # 2. Slope score (0 to 100)
        # Threshold: <15 deg (Low), 15-30 deg (Moderate), 30-45 deg (High), >45 deg (Critical)
        if slope_degrees < 10.0:
            slope_score = (slope_degrees / 10.0) * 20.0
        elif slope_degrees < 25.0:
            slope_score = 20.0 + ((slope_degrees - 10.0) / 15.0) * 35.0
        elif slope_degrees < 45.0:
            slope_score = 55.0 + ((slope_degrees - 25.0) / 20.0) * 35.0
        else:
            slope_score = 90.0 + min(10.0, (slope_degrees - 45.0) * 2.0)

        # 3. Soil Saturation score (0 to 100)
        # Soil moisture: 0.15 (dry) to 0.55+ (saturated/liquefaction risk)
        soil_score = min(100.0, max(0.0, ((soil_moisture - 0.20) / 0.35) * 100.0))

        # 4. Elevation Factor (0 to 100)
        elev_score = min(100.0, (elevation_m / 2500.0) * 100.0)

        # Weighted Aggregate
        total_risk = (
            (rain_score * self.w_rainfall) +
            (slope_score * self.w_slope) +
            (soil_score * self.w_soil_moisture) +
            (elev_score * self.w_elevation) +
            (historical_score * self.w_historical)
        )

        total_risk = round(min(100.0, max(0.0, total_risk)), 1)

        breakdown = RiskFactorBreakdown(
            rainfall_contribution=round(rain_score, 1),
            slope_contribution=round(slope_score, 1),
            soil_saturation_contribution=round(soil_score, 1),
            elevation_contribution=round(elev_score, 1),
            historical_susceptibility=round(historical_score, 1)
        )

        # Determine Risk Level
        if total_risk >= 75.0:
            level = RiskLevel.CRITICAL
        elif total_risk >= 50.0:
            level = RiskLevel.HIGH
        elif total_risk >= 25.0:
            level = RiskLevel.MODERATE
        else:
            level = RiskLevel.LOW

        # Primary Hazard Identification
        if slope_degrees >= 25.0 and total_risk >= 45.0:
            primary_hazard = HazardType.LANDSLIDE
        elif current_rain_rate_mm >= 40.0:
            primary_hazard = HazardType.CLOUDBURST
        elif slope_degrees < 15.0 and rainfall_24h_mm >= 60.0:
            primary_hazard = HazardType.FLASH_FLOOD
        else:
            primary_hazard = HazardType.LANDSLIDE

        return total_risk, breakdown, level, primary_hazard

    async def evaluate_coordinates(
        self,
        latitude: float,
        longitude: float,
        slope_angle: float = None,
        custom_rainfall_mm: float = None,
        soil_moisture_override: float = None
    ) -> RiskEvaluateResponse:
        # Fetch live meteorological data
        weather = await weather_service.get_live_metrics(latitude, longitude)
        
        slope = slope_angle if slope_angle is not None else self.estimate_slope_from_coords(latitude, longitude)
        rain_24h = custom_rainfall_mm if custom_rainfall_mm is not None else weather.precipitation_24h_mm
        curr_rain = weather.precipitation_current_mm
        soil_moisture = soil_moisture_override if soil_moisture_override is not None else weather.soil_moisture_0_to_7cm
        elevation = weather.elevation or 180.0

        risk_score, breakdown, level, primary_hazard = self.calculate_risk(
            rainfall_24h_mm=rain_24h,
            current_rain_rate_mm=curr_rain,
            slope_degrees=slope,
            soil_moisture=soil_moisture,
            elevation_m=elevation
        )

        evacuation_advised = (level in [RiskLevel.HIGH, RiskLevel.CRITICAL])

        if level == RiskLevel.CRITICAL:
            action = "ðŸš¨ IMMEDIATE EVACUATION REQUIRED: Extreme slope saturation & torrential rainfall detected. Move to nearest designated relief shelter immediately via hazard-free routes."
            mitigations = [
                "Evacuate to designated safe shelter immediately",
                "Avoid National Highway hill cuts and unpaved slope roads",
                "Follow verified NDRF/SDRF evacuation corridors",
                "Do not attempt to cross flooded causeways or culverts"
            ]
        elif level == RiskLevel.HIGH:
            action = "âš ï¸ PREPARE FOR EVACUATION: High landslide/flood hazard threshold crossed. Avoid mountain roads and pack emergency supplies."
            mitigations = [
                "Pack emergency grab-and-go kit with essentials",
                "Identify nearest safe shelter and active escape route",
                "Monitor IMD real-time rainfall radar alerts",
                "Stay clear of steep cut slopes and retaining walls"
            ]
        elif level == RiskLevel.MODERATE:
            action = "ðŸŸ¡ ACTIVE MONITORING: Elevated soil wetness. Stay alert for official weather updates and monitor local slopes."
            mitigations = [
                "Monitor local drainage and road culverts for blockages",
                "Check daily SDMA/DDMA weather advisory bulletins",
                "Report any newly observed slope cracks on citizen telemetry"
            ]
        else:
            action = "ðŸŸ¢ NORMAL CONDITIONS: Terrain and weather parameters within safe operating thresholds."
            mitigations = [
                "Standard routine monitoring active",
                "All micro-zones within safety thresholds"
            ]

        return RiskEvaluateResponse(
            latitude=latitude,
            longitude=longitude,
            risk_score=risk_score,
            risk_level=level,
            primary_hazard=primary_hazard,
            evacuation_advised=evacuation_advised,
            factors=breakdown,
            weather_summary={
                "precipitation_24h_mm": rain_24h,
                "current_rate_mm": curr_rain,
                "soil_moisture": soil_moisture,
                "slope_degrees": slope,
                "elevation_m": elevation,
                "intensity": weather.rain_intensity_level
            },
            action_recommendation=action,
            mitigation_actions=mitigations
        )

    def ml_predict(
        self,
        slope_degrees: float,
        rainfall_24h_mm: float,
        soil_moisture_m3_m3: float,
        elevation_m: float = 300.0,
        rain_rate_current_mm_hr: float = 0.0,
        ndvi_vegetation: float = 0.50,
        dist_to_drainage_m: float = 250.0,
        lithology_code: int = 3,
        tilt_rate_deg_day: float = 0.0
    ) -> Dict[str, Any]:
        """
        Runs inference using the trained Random Forest Ensemble model from ml/hazard_model.pkl.
        Falls back smoothly to analytical heuristics if weights are not yet present.
        """
        import os, sys, pickle
        base_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "..", "..", "ml"))
        if base_dir not in sys.path:
            sys.path.insert(0, base_dir)
        import engine
        model_path = os.path.join(base_dir, "hazard_model.pkl")

        if os.path.exists(model_path):
            try:
                with open(model_path, "rb") as f:
                    bundle = pickle.load(f)
                regressor = bundle["regressor"]
                classifier = bundle["classifier"]
                features = bundle["features"]

                row_dict = {
                    "slope_degrees": slope_degrees,
                    "elevation_m": elevation_m,
                    "rainfall_24h_mm": rainfall_24h_mm,
                    "rain_rate_current_mm_hr": rain_rate_current_mm_hr,
                    "soil_moisture_m3_m3": soil_moisture_m3_m3,
                    "ndvi_vegetation": ndvi_vegetation,
                    "dist_to_drainage_m": dist_to_drainage_m,
                    "lithology_code": lithology_code,
                    "tilt_rate_deg_day": tilt_rate_deg_day
                }
                row_arr = np.array([[row_dict[feat] for feat in features]])

                pred_score = round(max(0.0, min(100.0, float(regressor.predict(row_arr)[0]))), 1)
                pred_cat = str(classifier.predict(row_arr)[0])
                probas = classifier.predict_proba(row_arr)[0]
                probabilities = {
                    cls: round(float(prob), 3)
                    for cls, prob in zip(classifier.classes_, probas)
                }

                return {
                    "source": "RANDOM_FOREST_ENSEMBLE",
                    "predicted_risk_score_pct": pred_score,
                    "predicted_risk_category": pred_cat,
                    "class_probabilities": probabilities,
                    "evacuation_advised": pred_cat in ["HIGH", "CRITICAL"],
                    "parameters_evaluated": row_dict
                }
            except Exception:
                pass

        # Fallback to analytical calculation
        total_risk, breakdown, level, primary_hazard = self.calculate_risk(
            rainfall_24h_mm=rainfall_24h_mm,
            current_rain_rate_mm=rain_rate_current_mm_hr,
            slope_degrees=slope_degrees,
            soil_moisture=soil_moisture_m3_m3,
            elevation_m=elevation_m
        )
        return {
            "source": "ANALYTICAL_HEURISTIC",
            "predicted_risk_score_pct": total_risk,
            "predicted_risk_category": level.value,
            "class_probabilities": {level.value: 1.0},
            "evacuation_advised": level in [RiskLevel.HIGH, RiskLevel.CRITICAL],
            "parameters_evaluated": {
                "slope_degrees": slope_degrees,
                "rainfall_24h_mm": rainfall_24h_mm,
                "soil_moisture_m3_m3": soil_moisture_m3_m3
            }
        }

ml_risk_engine = MLRiskEngine()

