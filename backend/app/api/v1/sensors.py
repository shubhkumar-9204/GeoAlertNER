"""
IoT Sensor Telemetry & Hardware Simulation Router.
Copyright (c) 2026 GeoAlertNER Contributors. All rights reserved.
"""

from typing import List, Optional, Dict, Any
from datetime import datetime, timezone
from fastapi import APIRouter, Depends, HTTPException, Query, Header, status
from sqlalchemy.orm import Session
from backend.app.core.database import get_db
from backend.app.core.config import settings
from backend.app.models.sensor import SensorNode, SensorType
from backend.app.schemas.sensor import SensorNodeResponse, SensorIngestPayload
from backend.app.services.sensor_simulator import sensor_simulator

router = APIRouter(prefix="/sensors", tags=["IoT Sensor Telemetry & Hardware Simulator"])


@router.get("", response_model=List[SensorNodeResponse])
def get_sensor_nodes(
    sensor_type: Optional[SensorType] = Query(None),
    only_triggered: bool = Query(False),
    db: Session = Depends(get_db)
):
    """Fetches real-time telemetry from all ground sensors (soil probes, rain gauges, inclinometers)."""
    query = db.query(SensorNode)
    if sensor_type:
        query = query.filter(SensorNode.sensor_type == sensor_type)
    if only_triggered:
        query = query.filter(SensorNode.is_triggered == True)
    return query.all()


@router.post("/ingest", response_model=SensorNodeResponse)
def ingest_sensor_data(
    payload: SensorIngestPayload,
    x_sensor_api_key: Optional[str] = Header(None, alias="X-Sensor-API-Key"),
    db: Session = Depends(get_db)
):
    """
    Ingest live reading from hardware sensor node (ESP32/LoRaWAN/GSM module).
    Protected by optional X-Sensor-API-Key header to prevent telemetry spoofing.
    """
    # Enforce sensor API key if configured
    if settings.SENSOR_INGEST_API_KEY:
        if x_sensor_api_key and x_sensor_api_key != settings.SENSOR_INGEST_API_KEY:
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="Invalid sensor authentication key."
            )
        if not settings.DEBUG and not x_sensor_api_key:
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="X-Sensor-API-Key header required in production mode."
            )

    sensor = db.query(SensorNode).filter(SensorNode.sensor_code == payload.sensor_code).first()
    if not sensor:
        raise HTTPException(status_code=404, detail=f"Sensor '{payload.sensor_code}' not found.")
    
    sensor.current_value = payload.value
    sensor.battery_percentage = payload.battery if payload.battery is not None else sensor.battery_percentage
    sensor.last_ping = datetime.now(timezone.utc)
    sensor.is_triggered = (sensor.current_value >= sensor.threshold_critical)
    
    db.commit()
    db.refresh(sensor)
    return sensor


# ==========================================
# 🧪 HARDWARE SENSOR SIMULATOR ENDPOINTS
# ==========================================

@router.get("/simulator/status")
def get_simulator_status() -> Dict[str, Any]:
    """Returns the current state, active disaster scenario, and tick count of the sensor simulator."""
    return sensor_simulator.get_status()


@router.post("/simulator/scenario")
def set_simulator_scenario(
    scenario: str = Query(
        ...,
        examples=["LANDSLIDE_IMMINENT"],
        description="NORMAL, MONSOON_SURGE, LANDSLIDE_IMMINENT, CLOUDBURST_FLOOD"
    )
) -> Dict[str, Any]:
    """
    Switches the live simulator scenario.
    - `NORMAL`: Safe weather, low soil wetness, zero slope tilt.
    - `MONSOON_SURGE`: Heavy rain, rising soil saturation (0.45 m3/m3).
    - `LANDSLIDE_IMMINENT`: Critical slope tilt (5.2°) + saturated soil (0.58), triggers alerts & updates hazard zones.
    - `CLOUDBURST_FLOOD`: Extreme precipitation (>70mm/hr) & river stage warning.
    """
    try:
        return sensor_simulator.set_scenario(scenario)
    except ValueError as ve:
        raise HTTPException(status_code=400, detail=str(ve))


@router.post("/simulator/tick")
def trigger_simulator_tick() -> Dict[str, Any]:
    """
    Triggers one manual simulation cycle immediately.
    Updates all sensor nodes in the database with realistic readings matching the active scenario.
    """
    updated_nodes = sensor_simulator.tick_sensors()
    return {
        "status": "SUCCESS",
        "scenario": sensor_simulator.active_scenario,
        "nodes_updated": len(updated_nodes),
        "sensor_readings": updated_nodes
    }


@router.post("/simulator/start-auto")
def start_auto_simulation(
    interval_seconds: int = Query(5, ge=1, le=60, description="Seconds between automated sensor ticks")
) -> Dict[str, Any]:
    """Starts continuous background sensor data generation (perfect for live frontend demo graphs)."""
    return sensor_simulator.start_auto_simulation(interval_seconds)


@router.post("/simulator/stop-auto")
def stop_auto_simulation() -> Dict[str, Any]:
    """Stops continuous background sensor simulation."""
    return sensor_simulator.stop_auto_simulation()
