from fastapi import APIRouter
from backend.app.api.v1 import risk, evacuation, shelters, weather, telemetry, sensors, helplines, auth

api_router = APIRouter()

api_router.include_router(auth.router)
api_router.include_router(risk.router)
api_router.include_router(evacuation.router)
api_router.include_router(shelters.router)
api_router.include_router(weather.router)
api_router.include_router(telemetry.router)
api_router.include_router(sensors.router)
api_router.include_router(helplines.router)

