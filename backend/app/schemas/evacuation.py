"""
Evacuation Schemas.
Copyright (c) 2026 GeoAlertNER Contributors. All rights reserved.
"""

from typing import List, Optional, Dict, Any
from pydantic import BaseModel, Field
from backend.app.schemas.shelter import SafeShelterResponse


class EvacuationPlanRequest(BaseModel):
    user_latitude: float = Field(..., ge=-90.0, le=90.0, json_schema_extra={"example": 26.1400})
    user_longitude: float = Field(..., ge=-180.0, le=180.0, json_schema_extra={"example": 91.7300})
    target_shelter_id: Optional[int] = Field(None, description="Optional target shelter ID (if empty, finds closest available)")
    transport_preference: Optional[str] = Field("ANY", description="FOOT, VEHICLE_4X4, RESCUE_BUS, ANY")
    avoid_high_risk: bool = Field(True, description="Reroute around AI predicted red hazard zones")


class RouteWaypoint(BaseModel):
    latitude: float
    longitude: float
    elevation_meters: Optional[float] = 0.0
    instruction: Optional[str] = None
    hazard_proximity_warning: Optional[str] = None


class TransportRecommendation(BaseModel):
    best_mode: str
    reason: str
    passability_status: str
    estimated_duration_minutes: int
    elevation_gain_meters: float


class EvacuationPlanResponse(BaseModel):
    destination_shelter: SafeShelterResponse
    route_waypoints: List[RouteWaypoint]
    total_distance_km: float
    total_duration_minutes: int
    hazard_zones_avoided_count: int
    hazard_zones_avoided_details: List[str]
    transport_guidance: TransportRecommendation
    emergency_contacts: List[Dict[str, str]]
    route_geojson: Dict[str, Any]
