"""
Sensor Schemas.
Copyright (c) 2026 GeoAlertNER Contributors. All rights reserved.
"""

from typing import Optional
from pydantic import BaseModel, ConfigDict, Field
from datetime import datetime
from backend.app.models.sensor import SensorType


class SensorNodeResponse(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    id: int
    sensor_code: str
    sensor_type: SensorType
    name: str
    location_name: str
    latitude: float
    longitude: float
    current_value: float
    unit: str
    threshold_warning: float
    threshold_critical: float
    is_triggered: bool
    battery_percentage: float
    last_ping: datetime


class SensorIngestPayload(BaseModel):
    sensor_code: str = Field(..., max_length=50)
    value: float
    battery: Optional[float] = Field(100.0, ge=0.0, le=100.0)
