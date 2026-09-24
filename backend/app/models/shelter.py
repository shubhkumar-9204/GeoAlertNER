import enum
from datetime import datetime, timezone
from sqlalchemy import Column, Integer, String, Float, DateTime, Enum, Boolean
from backend.app.core.database import Base

class ShelterType(str, enum.Enum):
    RELIEF_CAMP = "RELIEF_CAMP"
    COMMUNITY_HALL = "COMMUNITY_HALL"
    HOSPITAL = "HOSPITAL"
    SCHOOL_SHELTER = "SCHOOL_SHELTER"
    HIGH_GROUND_ASSEMBLY = "HIGH_GROUND_ASSEMBLY"
    HELIPAD = "HELIPAD"

class SafeShelter(Base):
    __tablename__ = "safe_shelters"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(150), nullable=False)
    shelter_type = Column(Enum(ShelterType), default=ShelterType.RELIEF_CAMP)
    state = Column(String(50), nullable=False, index=True)
    district = Column(String(50), nullable=False, index=True)
    address = Column(String(255), nullable=True)
    
    # Location
    latitude = Column(Float, nullable=False)
    longitude = Column(Float, nullable=False)
    elevation_meters = Column(Float, default=0.0)
    
    # Capacity & Resources
    capacity_total = Column(Integer, default=500)
    capacity_occupied = Column(Integer, default=0)
    has_medical_aid = Column(Boolean, default=True)
    has_food_water = Column(Boolean, default=True)
    has_power_backup = Column(Boolean, default=True)
    has_helipad_access = Column(Boolean, default=False)
    
    # Contact
    contact_person = Column(String(100), nullable=True)
    contact_phone = Column(String(30), nullable=True)
    is_active = Column(Boolean, default=True)
    
    updated_at = Column(DateTime, default=lambda: datetime.now(timezone.utc), onupdate=lambda: datetime.now(timezone.utc))
