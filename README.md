# GeoAlertNER ⛰️🚨

<div align="center">

**Multi-Hazard Risk Monitoring & Evacuation Support**
*for the North Eastern Region (NER) of India*

[![Live Demo](https://img.shields.io/badge/🚀%20Live%20Demo-Click%20Here-22c55e?style=for-the-badge)](https://geoalertner.onrender.com)
[![Python](https://img.shields.io/badge/Python-3.11-3776AB?style=flat&logo=python&logoColor=white)](https://python.org)
[![FastAPI](https://img.shields.io/badge/FastAPI-0.110+-009688?style=flat&logo=fastapi&logoColor=white)](https://fastapi.tiangolo.com)
[![scikit-learn](https://img.shields.io/badge/scikit--learn-ML%20Engine-F7931E?style=flat&logo=scikitlearn&logoColor=white)](https://scikit-learn.org)
[![PWA](https://img.shields.io/badge/PWA-Offline--First-5A0FC8?style=flat&logo=pwa&logoColor=white)](https://web.dev/progressive-web-apps/)
[![Tests](https://img.shields.io/badge/Tests-9%2F9%20Passing-brightgreen?style=flat)](test_integration.py)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

</div>

---

## 🎯 What Is This?

**GeoAlertNER** is a disaster-risk monitoring prototype for the landslide- and flood-prone terrain of India's North Eastern Region. It brings together location-based risk assessment, weather information, mapped hazard zones, citizen reports and evacuation support.

> India's NER (Assam, Meghalaya, Sikkim & 5 other states) experiences some of the world's highest rates of landslides and flash floods. Existing warning systems are fragmented, English-only, and require constant internet. **GeoAlertNER** solves this with ML hazard scoring, GIS evacuation routing, offline-first PWA reporting, and multilingual regional voice alerts.

**→ [Try the Live Demo](https://geoalertner.onrender.com)** *(no login required — explore as Guest, or use 1-click demo roles)*

---

## ✨ Key Features

| Feature | Description |
|---|---|
| **📊 Live GIS Dashboard** | Dark-mode Leaflet.js map with GeoJSON hazard zone polygons, shelter markers, and real-time risk heatmap |
| **🧠 AI / ML Risk Engine** | Random Forest + Gradient Boosting ensemble evaluating 9 geological, hydrological & meteorological parameters |
| **🧭 Evacuation Routing** | Hazard-aware corridor planner — dynamically reroutes around critical red zones and flooded valleys |
| **📢 Offline Citizen Reports (PWA)** | Reports queued to IndexedDB in zero-connectivity areas, auto-synced when signal is restored |
| **🔊 Multilingual Voice Alerts** | Regional TTS via Web Speech API in Assamese, Bengali, Hindi & English |
| **🔐 Role-Based Access Control** | Three-tier RBAC: `Admin`, `Field Officer`, `Citizen` — each with tailored views & permissions |
| **📡 IoT Sensor Integration** | Planned for a future release; physical ESP32/LoRaWAN hardware is not connected in the current version |
| **⚡ 14+ REST API Endpoints** | Full FastAPI backend with Pydantic v2 validation, JWT auth, and async-ready design |

---

## 🚀 Quick Demo — Try It Now

Visit **[https://geoalertner.onrender.com](https://geoalertner.onrender.com)** and click **"Try as Citizen"** from the banner — or use one of these 1-click demo logins:

| Role | Email | Password |
|---|---|---|
| 🧑‍🌾 Citizen | `citizen@geoalertner.in` | `Citizen@123` |
| 🛡️ Field Officer | `officer@geoalertner.in` | `Officer@123` |
| 👑 Admin | `admin@geoalertner.in` | `Admin@123` |

> **Note:** Free Render tier spins down after 15 min of inactivity — first request may take ~30s to wake.

---

## 🛠️ Technology Stack

```
Frontend   : Vanilla JS ES6 · HTML5 · CSS3 (Glassmorphism) · Leaflet.js · Chart.js · PWA / Service Worker
Backend    : Python 3.11 · FastAPI · SQLAlchemy · Pydantic v2 · JWT / RBAC · SQLite
ML Engine  : scikit-learn (Random Forest + Gradient Boosting) · NumPy · Pandas · Shapely
DevOps     : Docker · Docker Compose · Nginx · Render.com · render.yaml auto-deploy
Testing    : pytest · pytest-asyncio · httpx · 9/9 integration tests passing
```

---

## 🗺️ Architecture

```
┌────────────────────────────────────────────────────────────────────┐
│                    FRONTEND (PWA — Vanilla JS)                     │
│  Leaflet GIS Map · Chart.js Forecasts · Offline Queue · TTS Alerts │
└──────────────────────────┬─────────────────────────────────────────┘
                           │ REST API (HTTPS)
┌──────────────────────────▼─────────────────────────────────────────┐
│               FASTAPI BACKEND (Python 3.11)                        │
│  Auth & RBAC · Alert Engine · Evacuation Router · Risk API         │
└──────┬────────────────────────────────────────────────┬────────────┘
       │                                                │
┌──────▼───────────────┐                   ┌───────────▼────────────┐
│    ML ENGINE         │                   │   SQLITE DATABASE      │
│  Random Forest       │                   │   Users · Alerts       │
│  Gradient Boosting   │                   │   Reports · Shelters   │
│  9-Feature Scoring   │                   │   Sensors · Sessions   │
└──────────────────────┘                   └────────────────────────┘
```

---

## 📊 ML Hazard Model — Input Features

The AI risk engine evaluates 9 real-world sensor parameters:

| # | Feature | Unit | Source |
|---|---|---|---|
| 1 | Slope Angle | degrees | IoT Tilt Sensor |
| 2 | 24h Rainfall | mm | Rain Gauge / IMD |
| 3 | Soil Moisture | m³/m³ | Ground Sensor |
| 4 | Elevation | metres | DEM |
| 5 | Current Rain Rate | mm/hr | Weather Station |
| 6 | NDVI Vegetation Index | 0–1 | Satellite |
| 7 | Distance to Drainage | metres | GIS Layer |
| 8 | Lithology / Rock Code | 1–5 | Geological Survey |
| 9 | Ground Tilt Rate | °/day | IoT Inclinometer |

Output: **Hazard Probability (%)** + **Risk Category (LOW / MODERATE / HIGH / CRITICAL)** + **Evacuation Advice**

---

## 🚀 Run Locally

### Prerequisites
- Python 3.9+
- (Optional) Docker & Docker Compose for containerized deployment

### Option A — Standalone (Recommended for development)

```powershell
# 1. Clone
git clone https://github.com/shubhkumar-9204/GeoAlertNER.git
cd GeoAlertNER

# 2. Install dependencies
pip install -r requirements.txt

# 3. Start the server (backend + frontend served together)
python -m uvicorn backend.app.main:app --host 0.0.0.0 --port 8000 --reload
```

Open **[http://localhost:8000](http://localhost:8000)** — the full app loads instantly.

### Option B — Docker (Production-like)

```bash
docker compose up --build
```

- Backend API: `http://localhost:8000`
- With Nginx proxy: `http://localhost:80` (using `--profile production`)

---

## 🧪 Run Tests

```powershell
python -m pytest test_integration.py -v
# → 9/9 PASSED ✅
```

---

## 🚧 Roadmap

| Status | Feature |
|---|---|
| ✅ | Live GIS hazard map with Leaflet.js |
| ✅ | AI Risk Scoring Engine (Random Forest + Gradient Boosting) |
| ✅ | Offline-First Citizen Reports (PWA + IndexedDB) |
| ✅ | Hazard-Aware Evacuation Routing |
| ✅ | Multilingual TTS Voice Alerts (4 languages) |
| ✅ | Role-Based Auth (Admin / Officer / Citizen) |
| ✅ | 14+ REST API Endpoints + Swagger Docs |
| ✅ | Docker + Render.com Production Deployment |
| 🔜 | Real IoT Sensor Integration (ESP32 / LoRaWAN hardware) |
| 🔜 | PostgreSQL migration for horizontal scaling |
| 🔜 | Live SMS alerts via Twilio / Indian SMS gateways |
| 🔜 | Train ML engine on labeled historical NER disaster dataset |
| 🔜 | WebSocket real-time push alerts |

---

## 📸 Screenshots

> *Record a short screen capture of the dashboard in action and add it here for maximum LinkedIn impact!*

**Suggested tool:** [ScreenToGif](https://www.screentogif.com/) (free, Windows)

```markdown
![GeoAlertNER Dashboard](docs/screenshot-dashboard.gif)
![AI Risk Engine](docs/screenshot-ai-risk.png)
![Evacuation Routing](docs/screenshot-evacuation.png)
```

---

## 📣 LinkedIn Post Template

Copy & paste to your LinkedIn profile:

```
🚨 Excited to share my first full-stack project: GeoAlertNER ⛰️

An AI-powered Disaster Early Warning & Evacuation System for India's North Eastern Region — one of the world's most landslide and flood-prone areas.

What I built:
✅ FastAPI backend with 14+ REST endpoints, JWT RBAC & Pydantic v2
✅ ML hazard prediction (Random Forest + Gradient Boosting, 9 sensor features)
✅ Real-time GIS map (Leaflet.js with GeoJSON hazard polygons)
✅ Offline-first Citizen Reporting (PWA + IndexedDB)
✅ Hazard-aware Evacuation Routing
✅ Multilingual Voice Alerts (Assamese, Bengali, Hindi, English)
✅ Docker + Render.com Production Deployment
✅ 9/9 Integration Tests Passing

Tech Stack: Python · FastAPI · scikit-learn · Leaflet.js · Vanilla JS · Docker · SQLite

🔗 Live Demo: https://geoalertner.onrender.com
💻 GitHub: https://github.com/shubhkumar-9204/GeoAlertNER

#Python #FastAPI #MachineLearning #GIS #DisasterManagement #FullStack #WebDev #OpenSource #FirstProject
```

---

## 👩‍💻 About

Built as a portfolio demonstration of full-stack engineering, applied machine learning, and geospatial systems — targeting real-world impact in disaster preparedness for India's most geologically vulnerable region.

**API Documentation:** [https://geoalertner.onrender.com/docs](https://geoalertner.onrender.com/docs)

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.
