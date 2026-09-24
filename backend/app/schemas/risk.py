"""
Risk Assessment Schemas.
Copyright (c) 2026 GeoAlertNER Contributors. All rights reserved.
"""

from typing import List, Optional, Any, Dict
from pydantic import BaseModel, Field, ConfigDict
from datetime import datetime
from backend.app.models.risk_zone import RiskLevel, HazardType


class RiskEvaluateRequest(BaseModel):
    latitude: float = Field(..., ge=-90.0, le=90.0, json_schema_extra={"example": 26.1445})
    longitude: float = Field(..., ge=-180.0, le=180.0, json_schema_extra={"example": 91.7362})
    slope_angle: Optional[float] = Field(None, ge=0.0, le=90.0, description="Slope in degrees (auto-estimated if null)")
    custom_rainfall_mm: Optional[float] = Field(None, ge=0.0, le=2000.0, description="Custom 24h rainfall override")
    rainfall_24h_mm: Optional[float] = Field(None, ge=0.0, le=2000.0, description="Alias for custom_rainfall_mm")
    soil_moisture_m3m3: Optional[float] = Field(None, ge=0.0, le=1.0, description="Custom soil moisture override (0.0 - 1.0)")


class RiskFactorBreakdown(BaseModel):
    rainfall_contribution: float
    slope_contribution: float
    soil_saturation_contribution: float
    elevation_contribution: float
    historical_susceptibility: float


class RiskEvaluateResponse(BaseModel):
    latitude: float
    longitude: float
    risk_score: float = Field(..., ge=0.0, le=100.0, description="AI Hazard probability 0-100%")
    risk_level: RiskLevel
    primary_hazard: HazardType
    evacuation_advised: bool
    factors: RiskFactorBreakdown
    weather_summary: Dict[str, Any]
    action_recommendation: str
    mitigation_actions: Optional[List[str]] = []


class RiskZoneResponse(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    id: int
    zone_code: str
    name: str
    state: str
    district: str
    hazard_type: HazardType
    centroid_lat: float
    centroid_lon: float
    polygon_coordinates: List[List[float]]
    slope_angle: float
    elevation_meters: float
    rainfall_24h_mm: float
    soil_moisture_m3m3: float
    risk_score: float
    risk_level: RiskLevel
    evacuation_advised: bool
    updated_at: datetime


class GeoJSONFeature(BaseModel):
    type: str = "Feature"
    geometry: Dict[str, Any]
    properties: Dict[str, Any]


class GeoJSONFeatureCollection(BaseModel):
    type: str = "FeatureCollection"
    features: List[GeoJSONFeature]
