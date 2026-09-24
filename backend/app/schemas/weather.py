from typing import Optional, List
from pydantic import BaseModel, Field

class WeatherMetrics(BaseModel):
    latitude: float
    longitude: float
    elevation: Optional[float] = None
    temperature_c: Optional[float] = None
    relative_humidity: Optional[float] = None
    precipitation_current_mm: float = 0.0
    precipitation_24h_mm: float = 0.0
    rain_intensity_level: str = "NORMAL" # NORMAL, HEAVY, VERY_HEAVY, CLOUDBURST
    soil_moisture_0_to_7cm: float = 0.0 # m3/m3
    soil_moisture_7_to_28cm: float = 0.0 # m3/m3
    surface_pressure_hpa: Optional[float] = None
    wind_speed_kmh: Optional[float] = None
    wind_gusts_kmh: Optional[float] = None
    cloudburst_probability_pct: float = 0.0
    is_live_data: bool = True
    data_source: str = "Open-Meteo & IMD Radar Feeds"

class WeatherForecastHour(BaseModel):
    time: str
    precipitation_mm: float
    soil_moisture: float
    temperature_c: float

class WeatherForecastResponse(BaseModel):
    latitude: float
    longitude: float
    hourly_forecast: List[WeatherForecastHour]
