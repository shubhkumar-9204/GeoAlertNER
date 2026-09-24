import enum
from datetime import datetime, timezone
from sqlalchemy import Column, Integer, String, Float, DateTime, Enum, Boolean, Text
from backend.app.core.database import Base

class ReportCategory(str, enum.Enum):
    LANDSLIDE_BLOCKAGE = "LANDSLIDE_BLOCKAGE"
    ROAD_CRACK = "ROAD_CRACK"
    RIVER_OVERFLOW = "RIVER_OVERFLOW"
    TREE_FALL = "TREE_FALL"
    BRIDGE_DAMAGE = "BRIDGE_DAMAGE"
    FLASH_FLOOD = "FLASH_FLOOD"
    STRANDED_CITIZENS = "STRANDED_CITIZENS"

class ReportStatus(str, enum.Enum):
    PENDING_VERIFICATION = "PENDING_VERIFICATION"
    VERIFIED = "VERIFIED"
    RESOLVED = "RESOLVED"
    REJECTED = "REJECTED"

class CrowdTelemetryReport(Base):
    __tablename__ = "telemetry_reports"

    id = Column(Integer, primary_key=True, index=True)
    report_uuid = Column(String(64), unique=True, index=True) # Used for offline sync deduplication
    category = Column(Enum(ReportCategory), nullable=False)
    description = Column(Text, nullable=True)
    
    latitude = Column(Float, nullable=False)
    longitude = Column(Float, nullable=False)
    state = Column(String(50), nullable=True)
    district = Column(String(50), nullable=True)
    
    image_url = Column(String(2048), nullable=True)
    severity_rating = Column(Integer, default=3) # 1 (Low) to 5 (Critical)
    
    # Offline sync & Reporter
    reporter_name = Column(String(100), default="Anonymous Citizen")
    reporter_phone = Column(String(30), nullable=True)
    is_offline_submitted = Column(Boolean, default=False)
    status = Column(Enum(ReportStatus), default=ReportStatus.PENDING_VERIFICATION)
    upvotes = Column(Integer, default=1)
    
    created_at = Column(DateTime, default=lambda: datetime.now(timezone.utc))
    synced_at = Column(DateTime, default=lambda: datetime.now(timezone.utc))
