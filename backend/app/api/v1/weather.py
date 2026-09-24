"""
Live Weather & Ground Moisture Router.
Copyright (c) 2026 GeoAlertNER Contributors. All rights reserved.
"""

from fastapi import APIRouter, Query
from backend.app.schemas.weather import WeatherMetrics, WeatherForecastResponse
from backend.app.services.weather_service import weather_service

router = APIRouter(prefix="/weather", tags=["Live Weather & Ground Moisture"])


@router.get("/current", response_model=WeatherMetrics)
async def get_current_weather(
    lat: float = Query(26.1445, examples=[26.1445], description="Latitude"),
    lon: float = Query(91.7362, examples=[91.7362], description="Longitude")
):
    """
    Returns real-time meteorological metrics, precipitation rate, 24h accumulation,
    and soil moisture saturation (0-7cm & 7-28cm deep).
    """
    return await weather_service.get_live_metrics(lat, lon)


@router.get("/forecast", response_model=WeatherForecastResponse)
async def get_forecast(
    lat: float = Query(26.1445, examples=[26.1445]),
    lon: float = Query(91.7362, examples=[91.7362]),
    hours: int = Query(12, ge=1, le=48)
):
    """Returns hourly rainfall and soil moisture forecast."""
    return await weather_service.get_forecast(lat, lon, hours)
