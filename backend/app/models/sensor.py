import enum
from datetime import datetime, timezone
from sqlalchemy import Column, Integer, String, Float, DateTime, Enum, Boolean
from backend.app.core.database import Base

class SensorType(str, enum.Enum):
    SOIL_MOISTURE = "SOIL_MOISTURE"
    RAIN_GAUGE = "RAIN_GAUGE"
    TILT_INCLINOMETER = "TILT_INCLINOMETER"
    SEISMIC_VIBRATION = "SEISMIC_VIBRATION"
    WATER_LEVEL = "WATER_LEVEL"

class SensorNode(Base):
    __tablename__ = "sensor_nodes"

    id = Column(Integer, primary_key=True, index=True)
    sensor_code = Column(String(50), unique=True, index=True)
    sensor_type = Column(Enum(SensorType), nullable=False)
    name = Column(String(100), nullable=False)
    location_name = Column(String(100), nullable=False)
    latitude = Column(Float, nullable=False)
    longitude = Column(Float, nullable=False)
    
    # Readings
    current_value = Column(Float, default=0.0)
    unit = Column(String(20), default="units")
    threshold_warning = Column(Float, default=50.0)
    threshold_critical = Column(Float, default=80.0)
    is_triggered = Column(Boolean, default=False)
    battery_percentage = Column(Float, default=100.0)
    
    last_ping = Column(DateTime, default=lambda: datetime.now(timezone.utc))
