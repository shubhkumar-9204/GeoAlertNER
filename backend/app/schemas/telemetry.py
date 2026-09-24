"""
Telemetry Schemas & Sanitization.
Copyright (c) 2026 GeoAlertNER Contributors. All rights reserved.
"""

import html
import re
from typing import Optional, List
from pydantic import BaseModel, Field, field_validator, ConfigDict
from datetime import datetime
from backend.app.models.telemetry import ReportCategory, ReportStatus

SAFE_URL_REGEX = re.compile(r"^(https?://|data:image/)[^\s\"'<>]+$", re.IGNORECASE)


class TelemetryReportCreate(BaseModel):
    report_uuid: Optional[str] = Field(None, max_length=64, description="Client-generated UUID for offline sync idempotency")
    category: ReportCategory
    description: Optional[str] = Field(None, max_length=1000)
    latitude: float = Field(..., ge=-90.0, le=90.0)
    longitude: float = Field(..., ge=-180.0, le=180.0)
    state: Optional[str] = Field("Assam", max_length=60)
    district: Optional[str] = Field(None, max_length=80)
    image_url: Optional[str] = Field(None, max_length=2048)
    severity_rating: int = Field(3, ge=1, le=5)
    reporter_name: Optional[str] = Field("Anonymous Citizen", max_length=100)
    reporter_phone: Optional[str] = Field(None, max_length=30)
    is_offline_submitted: bool = False

    @field_validator("description", "reporter_name", "state", "district")
    @classmethod
    def sanitize_text(cls, v: Optional[str]) -> Optional[str]:
        if v is None:
            return None
        # Strip dangerous HTML tags and escape special characters to eliminate stored XSS risks
        clean = html.escape(v.strip())
        return clean

    @field_validator("image_url")
    @classmethod
    def validate_image_url(cls, v: Optional[str]) -> Optional[str]:
        if not v:
            return None
        clean = v.strip()
        if not SAFE_URL_REGEX.match(clean):
            raise ValueError("image_url must be a valid HTTP/HTTPS URL or base64 image data URI.")
        return clean


class TelemetryBatchSyncRequest(BaseModel):
    reports: List[TelemetryReportCreate] = Field(..., max_length=100)


class TelemetryReportResponse(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    id: int
    report_uuid: Optional[str] = None
    category: ReportCategory
    description: Optional[str] = None
    latitude: float
    longitude: float
    state: Optional[str] = None
    district: Optional[str] = None
    image_url: Optional[str] = None
    severity_rating: int
    reporter_name: str
    is_offline_submitted: bool
    status: ReportStatus
    upvotes: int
    created_at: datetime
    synced_at: datetime


class TelemetryBatchSyncResponse(BaseModel):
    synced_count: int
    failed_count: int
    message: str
