"""
Shelter Schemas.
Copyright (c) 2026 GeoAlertNER Contributors. All rights reserved.
"""

from typing import Optional
from pydantic import BaseModel, ConfigDict, Field
from datetime import datetime
from backend.app.models.shelter import ShelterType


class SafeShelterBase(BaseModel):
    name: str = Field(..., max_length=120)
    shelter_type: ShelterType
    state: str = Field(..., max_length=60)
    district: str = Field(..., max_length=80)
    address: Optional[str] = Field(None, max_length=255)
    latitude: float = Field(..., ge=-90.0, le=90.0)
    longitude: float = Field(..., ge=-180.0, le=180.0)
    elevation_meters: float = 0.0
    capacity_total: int = Field(500, ge=1)
    capacity_occupied: int = Field(0, ge=0)
    has_medical_aid: bool = True
    has_food_water: bool = True
    has_power_backup: bool = True
    has_helipad_access: bool = False
    contact_person: Optional[str] = Field(None, max_length=100)
    contact_phone: Optional[str] = Field(None, max_length=30)
    is_active: bool = True


class SafeShelterCreate(SafeShelterBase):
    pass


class SafeShelterResponse(SafeShelterBase):
    model_config = ConfigDict(from_attributes=True)

    id: int
    occupancy_pct: float
    available_capacity: int
    distance_km: Optional[float] = None
    updated_at: datetime
