import random
import asyncio
import logging
from datetime import datetime, timezone
from typing import Dict, Any, List
from sqlalchemy.orm import Session
from backend.app.core.database import SessionLocal
from backend.app.models.sensor import SensorNode, SensorType
from backend.app.models.risk_zone import RiskZone, RiskLevel

logger = logging.getLogger(__name__)

class SensorSimulator:
    """
    Real-Time IoT Ground Sensor Simulator for GeoAlertNER.
    Simulates physical mountain sensors:
    - Deep Soil Moisture Probes (m3/m3)
    - Tilt Inclinometers on hill slopes (angular displacement in degrees)
    - Automated Rain Gauges (mm/hr)
    - River Stage Water Level Piezometers (meters)
    - Ground Micro-Vibration Geophones (Gal)
    """

    SCENARIOS = {
        "NORMAL": {
            "name": "Normal Fair Weather",
            "soil_moisture": (0.20, 0.32),
            "tilt_degrees": (0.05, 0.40),
            "rain_gauge": (0.0, 4.0),
            "water_level": (1.2, 2.5),
            "vibration": (0.01, 0.08)
        },
        "MONSOON_SURGE": {
            "name": "Active Monsoon Rains",
            "soil_moisture": (0.42, 0.50),
            "tilt_degrees": (1.2, 2.8),
            "rain_gauge": (18.0, 35.0),
            "water_level": (4.5, 6.2),
            "vibration": (0.25, 0.65)
        },
        "LANDSLIDE_IMMINENT": {
            "name": "ðŸš¨ Critical Landslide Warning (Active Slope Movement)",
            "soil_moisture": (0.54, 0.62),
            "tilt_degrees": (4.5, 7.8),
            "rain_gauge": (40.0, 75.0),
            "water_level": (6.5, 8.9),
            "vibration": (1.2, 3.8)
        },
        "CLOUDBURST_FLOOD": {
            "name": "ðŸŒŠ Flash Flood & Cloudburst Surge",
            "soil_moisture": (0.58, 0.68),
            "tilt_degrees": (2.5, 4.8),
            "rain_gauge": (65.0, 110.0),
            "water_level": (7.8, 10.5),
            "vibration": (0.8, 2.1)
        }
    }

    def __init__(self):
        self.active_scenario = "NORMAL"
        self.auto_running = False
        self.tick_count = 0
        self._task = None

    def get_status(self) -> Dict[str, Any]:
        return {
            "active_scenario": self.active_scenario,
            "scenario_name": self.SCENARIOS[self.active_scenario]["name"],
            "auto_simulation_running": self.auto_running,
            "total_ticks_simulated": self.tick_count,
            "available_scenarios": list(self.SCENARIOS.keys())
        }

    def set_scenario(self, scenario_key: str) -> Dict[str, Any]:
        scenario_key = scenario_key.upper()
        if scenario_key not in self.SCENARIOS:
            raise ValueError(f"Invalid scenario. Choose from: {list(self.SCENARIOS.keys())}")
        self.active_scenario = scenario_key
        logger.info(f"Sensor Simulator switched to scenario: {scenario_key}")
        # Run 1 tick immediately to update DB
        self.tick_sensors()
        return self.get_status()

    def tick_sensors(self) -> List[Dict[str, Any]]:
        """
        Executes one simulation step: updates all sensors in database
        with realistic physical variance based on the active scenario.
        """
        db: Session = SessionLocal()
        updated_nodes = []
        try:
            cfg = self.SCENARIOS[self.active_scenario]
            sensors = db.query(SensorNode).all()
            self.tick_count += 1

            for sensor in sensors:
                old_val = sensor.current_value
                
                # Determine value based on sensor type
                if sensor.sensor_type == SensorType.SOIL_MOISTURE:
                    min_v, max_v = cfg["soil_moisture"]
                    val = round(random.uniform(min_v, max_v), 3)
                elif sensor.sensor_type == SensorType.TILT_INCLINOMETER:
                    min_v, max_v = cfg["tilt_degrees"]
                    val = round(random.uniform(min_v, max_v), 2)
                elif sensor.sensor_type == SensorType.RAIN_GAUGE:
                    min_v, max_v = cfg["rain_gauge"]
                    val = round(random.uniform(min_v, max_v), 1)
                elif sensor.sensor_type == SensorType.WATER_LEVEL:
                    min_v, max_v = cfg["water_level"]
                    val = round(random.uniform(min_v, max_v), 2)
                else: # SEISMIC_VIBRATION / OTHER
                    min_v, max_v = cfg["vibration"]
                    val = round(random.uniform(min_v, max_v), 3)

                sensor.current_value = val
                sensor.is_triggered = (val >= sensor.threshold_critical)
                sensor.last_ping = datetime.now(timezone.utc)
                
                # Slight realistic battery drain
                sensor.battery_percentage = max(10.0, round(sensor.battery_percentage - random.uniform(0.001, 0.01), 2))

                updated_nodes.append({
                    "sensor_code": sensor.sensor_code,
                    "name": sensor.name,
                    "type": sensor.sensor_type.value,
                    "previous_value": old_val,
                    "new_value": val,
                    "unit": sensor.unit,
                    "is_triggered": sensor.is_triggered,
                    "battery": sensor.battery_percentage
                })

            # Also dynamically update Risk Zones in database if critical scenario is active
            if self.active_scenario in ["LANDSLIDE_IMMINENT", "CLOUDBURST_FLOOD"]:
                for rz in db.query(RiskZone).all():
                    if "Khanapara" in rz.name or "Mawkdok" in rz.name:
                        rz.risk_score = round(random.uniform(88.0, 96.5), 1)
                        rz.risk_level = RiskLevel.CRITICAL
                        rz.evacuation_advised = 1
            elif self.active_scenario == "NORMAL":
                for rz in db.query(RiskZone).all():
                    if rz.risk_level == RiskLevel.CRITICAL and "Khanapara" in rz.name:
                        rz.risk_score = 45.0
                        rz.risk_level = RiskLevel.MODERATE
                        rz.evacuation_advised = 0

            db.commit()
            return updated_nodes
        finally:
            db.close()

    async def _auto_loop(self, interval_seconds: int = 5):
        """Continuous background simulation loop."""
        logger.info("Starting background sensor simulation daemon...")
        while self.auto_running:
            try:
                self.tick_sensors()
            except Exception as e:
                logger.error(f"Error during sensor simulation tick: {e}")
            await asyncio.sleep(interval_seconds)

    def start_auto_simulation(self, interval_seconds: int = 5) -> Dict[str, Any]:
        if not self.auto_running:
            self.auto_running = True
            self._task = asyncio.create_task(self._auto_loop(interval_seconds))
            logger.info(f"Automated sensor simulation started (interval: {interval_seconds}s).")
        return self.get_status()

    def stop_auto_simulation(self) -> Dict[str, Any]:
        if self.auto_running:
            self.auto_running = False
            if self._task:
                self._task.cancel()
                self._task = None
            logger.info("Automated sensor simulation stopped.")
        return self.get_status()

sensor_simulator = SensorSimulator()

