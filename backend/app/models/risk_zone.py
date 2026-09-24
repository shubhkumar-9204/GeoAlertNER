import enum
from datetime import datetime, timezone
from sqlalchemy import Column, Integer, String, Float, DateTime, Enum, JSON
from backend.app.core.database import Base

class RiskLevel(str, enum.Enum):
    LOW = "LOW"
    MODERATE = "MODERATE"
    HIGH = "HIGH"
    CRITICAL = "CRITICAL"

class HazardType(str, enum.Enum):
    LANDSLIDE = "LANDSLIDE"
    FLASH_FLOOD = "FLASH_FLOOD"
    CLOUDBURST = "CLOUDBURST"
    RIVER_EROSION = "RIVER_EROSION"

class RiskZone(Base):
    __tablename__ = "risk_zones"

    id = Column(Integer, primary_key=True, index=True)
    zone_code = Column(String(50), unique=True, index=True)
    name = Column(String(100), nullable=False)
    state = Column(String(50), nullable=False, index=True) # Assam, Meghalaya, etc.
    district = Column(String(50), nullable=False, index=True)
    hazard_type = Column(Enum(HazardType), default=HazardType.LANDSLIDE)
    
    # Coordinates & Micro-polygon bounds (GeoJSON polygon format)
    centroid_lat = Column(Float, nullable=False)
    centroid_lon = Column(Float, nullable=False)
    polygon_coordinates = Column(JSON, nullable=False) # List of [lon, lat] pairs
    
    # Realtime Factors
    slope_angle = Column(Float, default=0.0) # In degrees (e.g. 35.5)
    elevation_meters = Column(Float, default=0.0)
    rainfall_24h_mm = Column(Float, default=0.0)
    soil_moisture_m3m3 = Column(Float, default=0.0)
    
    # Calculated AI Risk
    risk_score = Column(Float, nullable=False) # 0.0 to 100.0
    risk_level = Column(Enum(RiskLevel), nullable=False)
    
    evacuation_advised = Column(Integer, default=0) # 1 if True, 0 if False
    updated_at = Column(DateTime, default=lambda: datetime.now(timezone.utc), onupdate=lambda: datetime.now(timezone.utc))

