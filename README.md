# GeoAlertNER ⛰️🚨

<div align="center">

**AI-Driven Multi-Hazard Early Warning & Evacuation System**
*for the North Eastern Region (NER) of India*

[![Python](https://img.shields.io/badge/Python-3.9+-3776AB?style=flat&logo=python&logoColor=white)](https://python.org)
[![FastAPI](https://img.shields.io/badge/FastAPI-0.100+-009688?style=flat&logo=fastapi&logoColor=white)](https://fastapi.tiangolo.com)
[![PyTorch](https://img.shields.io/badge/PyTorch-ML%20Engine-EE4C2C?style=flat&logo=pytorch&logoColor=white)](https://pytorch.org)
[![PWA](https://img.shields.io/badge/PWA-Offline--First-5A0FC8?style=flat&logo=pwa&logoColor=white)](https://web.dev/progressive-web-apps/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

</div>

---

## 🌟 Project Overview

**GeoAlertNER** is a full-stack disaster management platform that provides **real-time, AI-powered hazard alerts** for the landslide and flood-prone hilly terrains of India's North Eastern Region (NER). The system leverages a custom PyTorch NER engine, a live GIS map, and offline-first PWA capabilities to help citizens and field officers make faster, safer decisions during emergencies.

This project was built as a high-impact prototype combining machine learning, geospatial systems, and modern web engineering — all in a zero-dependency, offline-capable architecture.

---

## 🚀 Key Features

| Feature | Description |
|---|---|
| **📊 Live GIS Dashboard** | Glassmorphism map powered by Leaflet.js — visualize active hazard zones, safe shelters, and terrain risk in real time |
| **🧠 AI Risk Engine** | PyTorch-based model evaluating geological, hydrological & meteorological parameters to predict disaster probability |
| **🧭 Evacuation Routing** | Hazard-aware corridor planner that dynamically reroutes around flooded valleys and critical red zones |
| **📢 Citizen Reports (PWA)** | Offline-first citizen hazard reporting — data queued locally and synced when connectivity is restored |
| **🔊 Multilingual Voice Alerts** | Regional TTS alerts in Assamese, Bengali, Hindi, and other NER-native languages |
| **🔐 Role-Based Auth** | Three-tier access: `Admin`, `Field Officer`, `Citizen` — each with tailored permissions and dashboard views |
| **📡 IoT Sensor Integration** | **(Planned)** Physical ESP32/LoRaWAN sensor integration for real ground telemetry |

---

## 🛠️ Technology Stack

```
Frontend    : Vanilla JS (ES6 Modules) · HTML5 · CSS3 · Leaflet.js · Chart.js · PWA / Service Worker
Backend     : Python · FastAPI · SQLite (prototype) · JWT Auth
ML Engine   : PyTorch · Custom NER Model for NER entity extraction
Deployment  : Docker · Nginx · docker-compose
```

---

## 🗺️ Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                       FRONTEND (PWA)                            │
│  Leaflet GIS Map · Chart.js · Offline Queue · TTS Alerts        │
└────────────────────────────┬────────────────────────────────────┘
                             │ HTTPS / WebSocket
┌────────────────────────────▼────────────────────────────────────┐
│                   FASTAPI BACKEND                                │
│  Auth & RBAC · Alert Engine · Evacuation Routing · REST API      │
└──────┬───────────────────────────────────────────────┬──────────┘
       │                                               │
┌──────▼──────────┐                        ┌──────────▼──────────┐
│   ML ENGINE      │                        │  SQLITE DATABASE    │
│  PyTorch NER     │                        │  Alerts · Reports   │
│  Risk Scoring    │                        │  Users · Sessions   │
└─────────────────┘                        └─────────────────────┘
```

---

## 📸 Screenshots

> 📌 *Add a GIF recording of the app for maximum impact on LinkedIn and GitHub!*

*   **Dashboard:** Replace with your screenshot → `![Dashboard](docs/screenshot-dashboard.png)`
*   **Evacuation Routing:** `![Evacuation](docs/screenshot-evacuation.png)`
*   **Mobile PWA:** `![Mobile](docs/screenshot-mobile.png)`

---

## 🚀 Getting Started

### Prerequisites
*   Python 3.9+
*   Docker & Docker Compose (optional, for containerized run)

### Option A — Run Locally

**1. Clone the repository:**
```bash
git clone https://github.com/yourusername/GeoAlertNER.git
cd GeoAlertNER
```

**2. Set up environment variables:**
```bash
cp .env.example .env
# Edit .env and fill in your SECRET_KEY and any API keys
```

**3. Install backend dependencies & start the server:**
```bash
pip install -r requirements.txt
python -m backend.app.main
```
Backend will be available at `http://localhost:8000`

**4. Serve the frontend:**
```bash
cd frontend
python -m http.server 5173
```
Open `http://localhost:5173` in your browser.

---

### Option B — Run with Docker

```bash
docker-compose up --build
```

This spins up:
- **API** on `http://localhost:8000`
- **Frontend** via Nginx on `http://localhost:80`

---

## 🚧 Roadmap

| Status | Feature |
|---|---|
| ✅ | Live GIS hazard map with Leaflet.js |
| ✅ | AI Risk Scoring Engine (PyTorch) |
| ✅ | Offline-First Citizen Reports (PWA) |
| ✅ | Hazard-Aware Evacuation Routing |
| ✅ | Multilingual TTS Voice Alerts |
| ✅ | Role-Based Auth (Admin / Officer / Citizen) |
| 🔜 | Real IoT Sensor Integration (ESP32 / LoRaWAN) |
| 🔜 | PostgreSQL migration for production scale |
| 🔜 | Live SMS alerts via Twilio |
| 🔜 | Train ML engine on historical NER disaster data |

---

## 👩‍💻 About

This project was developed as a portfolio demonstration of full-stack engineering, applied machine learning, and geospatial systems — targeting real-world impact in disaster preparedness for India's most geologically vulnerable region.

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.
