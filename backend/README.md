# 🛰️ GeoAlertNER Backend Service 

> **AI-Driven Disaster Monitoring, Hazard-Aware Evacuation Routing, Ground Telemetry, and IoT Sensor Simulation Platform for the North Eastern Region (NER), India.**

---

## 📌 Architecture Highlights

1. **AI Landslide & Flash Flood Risk Engine**:
   - Evaluates real-time hazard probabilities ($0-100\%$) by fusing DEM slope angle, 24h rainfall accumulation, deep soil moisture saturation ($0-7\text{cm}$ and $7-28\text{cm}$), and elevation.
2. **Hazard-Aware Evacuation Router ("SafePath Engine")**:
   - Calculates dynamic evacuation corridors to safe relief shelters.
   - Detects active red hazard polygons and automatically recalculates bypass waypoints avoiding danger.
   - Recommends best vehicle mode (e.g., `4x4_RESCUE_VEHICLE`, `FOOT_TRAIL`, `RESCUE_BUS`) based on road gradient.
3. **🧪 Built-In IoT Ground Sensor Simulator**:
   - Built specifically for demo presentations without requiring physical hardware.
   - Simulates physical sensors: Deep Soil Moisture Probes ($m^3/m^3$), Hill Slope Tilt Inclinometers (degrees), Automated Rain Gauges ($mm/hr$), and River Water Levels ($m$).
   - 4 Instant Disaster Scenarios: `NORMAL`, `MONSOON_SURGE`, `LANDSLIDE_IMMINENT`, `CLOUDBURST_FLOOD`.
4. **Live Meteorological & Soil Moisture Feeds**:
   - Direct integration with **Open-Meteo High-Resolution Realtime API**.
5. **Safe Shelter & Assembly Point Directory**:
   - Tracks real-time shelter capacity, medical aid, power backup, and helipad accessibility.
6. **Crowdsourced Ground Telemetry & Offline PWA Sync**:
   - Citizen field report intake (landslide photos, road cracks, river overflow).
   - `/api/v1/telemetry/sync-offline` endpoint to batch-sync reports stored offline on client devices in no-network mountain zones.
7. **NER Emergency Helplines & Disaster Authorities**:
   - Instant directory lookup for National (112), State Disaster Management Authorities (1070 for Assam, Meghalaya, Sikkim, Nagaland, Mizoram, Arunachal Pradesh), District Disaster Control Rooms (1077), and NDRF 1st Battalion HQ.

---

## 🛠️ Tech Stack

- **Framework**: FastAPI (Python 3.10+)
- **ORM & Database**: SQLAlchemy (SQLite for out-of-the-box zero-config run, PostgreSQL + PostGIS ready)
- **Geospatial & AI**: Shapely, Scikit-learn, NumPy, GeoJSON
- **HTTP Client**: HTTPX (Asynchronous)
- **Validation**: Pydantic v2 & Pydantic Settings

---

## 🚀 Quickstart Guide

### 1. Set Up Virtual Environment

```bash
# In c:\Users\Srishti\GeoAlertNER\backend
python -m venv venv

# On Windows:
.\venv\Scripts\activate

# On Linux/macOS:
# source venv/bin/activate
```

### 2. Install Dependencies

```bash
pip install -r requirements.txt
```

### 3. Run the Backend Server

```bash
uvicorn app.main:app --reload --port 8000
```

The server will start at `http://localhost:8000`.
- **Interactive Swagger Documentation**: [http://localhost:8000/docs](http://localhost:8000/docs)
- **Alternative ReDoc UI**: [http://localhost:8000/redoc](http://localhost:8000/redoc)
- **Health Check**: [http://localhost:8000/health](http://localhost:8000/health)

---

## 📡 Key API Endpoints Reference

### 1. 🧪 IoT Sensor Simulator Endpoints (For Demos & Testing)
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/v1/sensors/simulator/status` | Get current simulation state & active scenario |
| `POST` | `/api/v1/sensors/simulator/scenario` | Switch scenario (`NORMAL`, `MONSOON_SURGE`, `LANDSLIDE_IMMINENT`, `CLOUDBURST_FLOOD`) |
| `POST` | `/api/v1/sensors/simulator/tick` | Trigger 1 manual simulation step (updates database) |
| `POST` | `/api/v1/sensors/simulator/start-auto` | Start continuous 5-second background sensor generation |
| `POST` | `/api/v1/sensors/simulator/stop-auto` | Stop continuous background simulation |

### 2. AI Risk Engine & Hazard Map
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `POST` | `/api/v1/risk/evaluate` | Evaluate live 0-100% risk score for custom GPS coordinate |
| `GET` | `/api/v1/risk/zones` | List all monitored micro-hazard zones |
| `GET` | `/api/v1/risk/geojson-heatmap` | Returns GeoJSON polygons for Leaflet / Mapbox heatmap |

### 3. Evacuation & Mobility Router
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `POST` | `/api/v1/evacuation/plan-route` | Hazard-avoiding evacuation path, waypoints, transport recommendation & contacts |

### 4. Safe Shelters & Assembly Points
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/v1/shelters` | List all active safe relief shelters with capacities |
| `GET` | `/api/v1/shelters/nearest` | Find nearest safe shelter from user's current GPS location |

### 5. Weather & Soil Moisture
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/v1/weather/current` | Real-time rainfall, soil moisture (0-7cm, 7-28cm), pressure |
| `GET` | `/api/v1/weather/forecast` | Hourly precipitation forecast |

### 6. Ground Telemetry & Offline Sync
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `POST` | `/api/v1/telemetry/report` | Submit citizen report (photos, hazard, road blockage) |
| `POST` | `/api/v1/telemetry/sync-offline` | Batch sync offline reports queued on citizen device |
| `GET` | `/api/v1/telemetry/reports` | Get recent verified ground reports |

### 7. Emergency Helplines
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/v1/helplines` | Search disaster helplines by State (Assam, Meghalaya, etc.) |
| `GET` | `/api/v1/helplines/nearest` | Get emergency control rooms for local district |
