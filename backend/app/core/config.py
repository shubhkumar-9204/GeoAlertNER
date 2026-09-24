"""
GeoAlertNER System Configuration and Security Settings.
Copyright (c) 2026 GeoAlertNER Contributors. All rights reserved.
"""

from typing import List, Optional
import os
import logging
from pydantic_settings import BaseSettings, SettingsConfigDict
from pydantic import field_validator

logger = logging.getLogger("geoalertner.config")


class Settings(BaseSettings):
    model_config = SettingsConfigDict(
        case_sensitive=True,
        env_file=".env",
        extra="ignore"
    )

    PROJECT_NAME: str = "GeoAlertNER - AI Disaster Monitoring & Evacuation"
    API_V1_STR: str = "/api/v1"
    SECRET_KEY: str = "supersecretkey-geoalertner-dev"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 60 * 24 * 7  # 7 days
    DEBUG: bool = True
    
    # CORS Origins (configurable for production domain isolation)
    BACKEND_CORS_ORIGINS: List[str] = ["*"]
    
    # Database
    DATABASE_URL: str = "sqlite:///./geoalertner.db"
    
    # Hardware Sensor Telemetry Ingestion Secret
    SENSOR_INGEST_API_KEY: str = "geoalertner-sensor-ingest-key-secret"
    
    # External APIs
    OPEN_METEO_BASE_URL: str = "https://api.open-meteo.com/v1/forecast"
    OPEN_METEO_ELEVATION_URL: str = "https://api.open-meteo.com/v1/elevation"
    OPENROUTESERVICE_API_KEY: Optional[str] = None
    
    # Emergency SMS Gateway
    SMS_GATEWAY_PROVIDER: str = "MOCK"
    SMS_API_KEY: Optional[str] = None
    
    # Default Coordinates (North Eastern Region - NER Center)
    DEFAULT_LATITUDE: float = 26.1445
    DEFAULT_LONGITUDE: float = 91.7362
    
    # NER Bounding Box: [Min Lat, Min Lon, Max Lat, Max Lon]
    NER_BOUNDS: dict = {
        "min_lat": 21.5,
        "max_lat": 29.5,
        "min_lon": 89.5,
        "max_lon": 97.5
    }

    @field_validator("SECRET_KEY")
    @classmethod
    def validate_secret_key(cls, v: str) -> str:
        if not v or len(v) < 16:
            raise ValueError("SECRET_KEY must be at least 16 characters long.")
        return v


settings = Settings()

# Security warning if default dev secret is used when DEBUG is False
if not settings.DEBUG and settings.SECRET_KEY == "supersecretkey-geoalertner-dev":
    logger.critical(
        "SECURITY ALERT: Insecure default SECRET_KEY detected in production environment! "
        "Set a unique SECRET_KEY environment variable immediately."
    )
