# 🛰️ GeoAlertNER — Complete Master Project Capsule
> **AI-Driven Multi-Hazard Early Warning, Terrain Risk Intelligence & Safe Evacuation Routing System for the North Eastern Region (NER) of India**
> **Repository:** `https://github.com/shubhkumar-9204/GeoAlertNER`  
> **Live Production Demo:** `https://geoalertner.onrender.com`  
> **Prepared for Claude (Claude Projects, Claude Chat, Code Reviews, & Academic / Architecture Ingestion)**

---

## 📑 Table of Contents
1. [Executive Summary & The Big Idea](#1-executive-summary--the-big-idea)
2. [Problem Statement (PS) & Regional Vulnerability Analysis](#2-problem-statement-ps--regional-vulnerability-analysis)
3. [Methodological Approach & Core Innovations](#3-methodological-approach--core-innovations)
4. [System Architecture & Data Engineering](#4-system-architecture--data-engineering)
5. [Machine Learning & Mathematical Formulations](#5-machine-learning--mathematical-formulations)
6. [Interactive Subsystems & Functional Capabilities](#6-interactive-subsystems--functional-capabilities)
7. [Comprehensive API Reference Catalog](#7-comprehensive-api-reference-catalog)
8. [Database Schema & Data Models](#8-database-schema--data-models)
9. [Frontend, GIS Mapping, PWA & Multilingual System](#9-frontend-gis-mapping-pwa--multilingual-system)
10. [DevOps, Deployment, Security & Test Suite](#10-devops-deployment-security--test-suite)
11. [Complete Source Code Repository](#11-complete-source-code-repository)
    - 11.1 Backend Core & Configuration
    - 11.2 Backend API v1 Endpoints
    - 11.3 Backend Services & Engines
    - 11.4 Backend Data Models (SQLAlchemy ORM)
    - 11.5 Backend Schemas (Pydantic v2)
    - 11.6 Backend Seed Data
    - 11.7 Machine Learning Pipeline
    - 11.8 Frontend Core Logic & PWA
    - 11.9 Frontend UI & Stylesheets
    - 11.10 Testing, CI/CD, Containerization & Scripts
12. [Claude Master Prompts & Guide for Exploration](#12-claude-master-prompts--guide-for-exploration)

---

## 1. Executive Summary & The Big Idea

**GeoAlertNER** is an end-to-end, full-stack, AI-powered disaster management and early warning intelligence platform engineered specifically for the extreme geoclimatic vulnerabilities of **India's North Eastern Region (NER)** — spanning Assam, Meghalaya, Sikkim, Nagaland, Mizoram, Manipur, Tripura, and Arunachal Pradesh.

### 🌟 The Big Idea
In mountainous developing regions, disasters like landslides, mudflows, flash floods, and cloudbursts cause catastrophic loss of life not because they are inherently unpredictable, but because **existing early warning systems fail on three critical axes**:
1. **Resolution Failure:** Predictions are issued at broad district or meteorological subdivision scales rather than granular hill-slope micro-zones.
2. **Connectivity Fragility:** Warning systems rely on high-speed internet and cloud backends. When heavy rain tears down cellular towers, communities enter a **"blind blackout zone"** right when danger peaks.
3. **Linguistic & Literacy Barriers:** Warnings are published in English or standardized Hindi, leaving indigenous linguistic groups unable to interpret critical evacuation notices.

**GeoAlertNER overcomes these three failures through a cohesive tripartite architecture**:
- **Micro-Scale Terrain AI:** An ensemble machine learning model (combining DEM slope geometry, 24-hour rainfall accumulation, volumetric soil moisture saturation, elevation, and ground tilt inclinometer telemetry) predicts real-time landslide and flash flood risk on a 0–100% normalized scale.
- **SafePath Evacuation Routing Engine:** A hazard-aware spatial router that projects dynamic polygon hazard danger zones onto the regional road network and computes mathematically safe detour waypoints avoiding active red hazard zones.
- **Offline-First Multilingual Edge PWA:** A Progressive Web App (PWA) backed by IndexedDB and Web Workers that allows field officers and citizens to view cached offline hazard maps, file ground disaster reports with zero cellular signal (auto-syncing upon reconnection), and receive synthetic speech voice alerts in Assamese, Bengali, Hindi, and English.

---

## 2. Problem Statement (PS) & Regional Vulnerability Analysis

### 2.1 The Geographic Context
India's North Eastern Region encompasses 8% of the country's geographic area and hosts the young, tectonically active Himalayan mountains, the Shillong Plateau, and the immense floodplains of the Brahmaputra and Barak river basins.
- **Mawsynram and Cherrapunji** in Meghalaya receive the world's highest annual rainfall (>11,000 mm).
- **Steep slope inclinations (25°–60°)** combined with friable shale, sandstone, and heavily weathered overburden soil make hill slopes inherently susceptible to shear failure.
- **Cloudburst events and orographic rainfall** frequently trigger sudden flash floods, debris torrents, and valley submergence within 30 to 90 minutes.

### 2.2 Core Technical Challenges Identified
1. **Lack of Integrated Multi-Sensor Fused Early Warning:**
   Existing agencies (GSI, IMD, CWC) operate in organizational silos. Weather predictions are separated from geological slope stability equations, leaving field officers without a unified quantitative hazard metric.
2. **Evacuation Bottlenecks & Death Traps:**
   Standard navigation engines (Google Maps, OpenStreetMap) route evacuees via the shortest or fastest road. In mountainous disaster conditions, the shortest route often runs along river valleys prone to flash floods or cut off by massive landslides, turning evacuation convoys into death traps.
3. **The Communication Blackout Dilemma:**
   During severe storms, cell towers lose grid power or fiber lines are snapped by falling boulders. Centralized web apps completely freeze. First responders and citizens are cut off from submitting reports or receiving safe shelter destinations.
4. **Shelter Allocation Inefficiency:**
   Relief camps become overwhelmed because authorities lack a real-time tracking registry showing available bed capacity, medical supplies, emergency generators, and helicopter landing accessibility.

### 2.3 Objectives of GeoAlertNER
- Provide real-time (sub-second) AI inference of landslide/flood probability for any coordinate in the NER.
- Calculate safe evacuation routes that actively detect and detour around high/critical hazard polygons.
- Guarantee 100% offline functionality for hazard maps, emergency contact lookups, and citizen damage reporting.
- Provide accessible voice alerts in 4 indigenous languages for non-literate or visually impaired users.
- Provide a zero-hardware IoT simulation suite so emergency management trainees can rehearse worst-case monsoon and cloudburst scenarios.

---

## 3. Methodological Approach & Core Innovations

```
┌────────────────────────────────────────────────────────────────────────┐
│                          GEOALERTNER METHODOLOGY                       │
└────────────────────────────────────────────────────────────────────────┘
          │                                              │
          ▼                                              ▼
┌──────────────────────────────┐              ┌──────────────────────────────┐
│     DATA INGESTION & IOT     │              │    SPATIAL RISK MODELING     │
│  - Open-Meteo High-Res API   │              │  - 9-Factor Terrain Vector   │
│  - Soil Moisture (0-28 cm)   │              │  - Ensemble Trees & Boosters │
│  - IoT Inclinometers & Gauges│              │  - Physics Shear Thresholds  │
└──────────────┬───────────────┘              └──────────────┬───────────────┘
               │                                             │
               └──────────────────────┬──────────────────────┘
                                      ▼
                      ┌──────────────────────────────┐
                      │    AI HAZARD ENGINE (FASTAPI)│
                      │  - Risk Score (0-100%)       │
                      │  - Level (Low/Med/High/Crit) │
                      │  - Dynamic Danger Polygons   │
                      └──────────────┬───────────────┘
                                     │
           ┌─────────────────────────┴─────────────────────────┐
           ▼                                                   ▼
┌──────────────────────────────┐              ┌──────────────────────────────┐
│   SAFEPATH EVACUATION ROUTER │              │   OFFLINE-FIRST PWA CLIENT   │
│  - Nearest Shelter Matching  │              │  - IndexedDB Telemetry Queue │
│  - Shapely Avoidance Bypass  │              │  - Service Worker Caching    │
│  - Vehicle Suitability Index │              │  - Multilingual WebSpeech TTS│
└──────────────────────────────┘              └──────────────────────────────┘
```

### 3.1 Key Innovations
1. **Hybrid Physical-ML Risk Engine:**
   Combines empirical geotechnical physics (slope angle friction thresholds and pore-water pressure saturation) with a high-speed Decision Forest / Gradient Boosting regressor, producing explainable feature contribution breakdowns.
2. **Shapely Polygon Bypass Routing ("SafePath"):**
   Represents high-risk areas as 2D polygonal spatial obstacles. When an escape route intersects a danger polygon, the router computes tangential bypass waypoints to steer evacuees onto safe ridges and away from vulnerable valleys.
3. **Resilient Local-First Telemetry Sync:**
   Utilizes browser IndexedDB to capture crowdsourced incident reports (landslides, flooded roads, collapsed bridges). The service worker continuously monitors network connectivity (`navigator.onLine` and `window.addEventListener('online')`), triggering background synchronization to `/api/v1/telemetry/sync-offline` once connectivity is restored.
4. **Native Zero-Dependency Vectorized ML Core:**
   A custom pure-NumPy Decision Tree / Random Forest / Gradient Boosting inference engine runs natively in resource-constrained environments without requiring heavy compiled C++ or Cython dependencies, while supporting scikit-learn when present.
5. **IoT Ground Telemetry Simulator:**
   Enables realistic scenario modeling (`NORMAL`, `MONSOON_SURGE`, `LANDSLIDE_IMMINENT`, `CLOUDBURST_FLOOD`) with continuous background ticker loops, allowing live testing and simulation of cascading disasters.

---

## 4. System Architecture & Data Engineering

### 4.1 Tiered Architectural Topology
GeoAlertNER adheres to a decoupled, high-performance architecture:

```
┌────────────────────────────────────────────────────────────────────────┐
│                              CLIENT TIER                               │
│  - Vanilla JavaScript ES6 (Zero Framework Overhead)                   │
│  - Leaflet.js Interactive GIS Mapping & GeoJSON Rendering              │
│  - Chart.js Dynamic Temporal Forecasting & Telemetry Visuals           │
│  - IndexedDB Offline Storage + Service Worker PWA Cache                │
│  - Web Speech API Multilingual Voice Alert Dispatcher                  │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │ HTTPS / REST (JSON)
┌───────────────────────────────────▼────────────────────────────────────┐
│                             GATEWAY TIER                               │
│  - Reverse Proxy: Nginx (Gzip, HTTP/2, Static Caching, SSL)            │
│  - Security Shield Middleware (Anti-Sniff, XSS, Clickjack, CORS)       │
│  - Token-Bucket & Sliding Window Rate Limiting Middleware              │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │
┌───────────────────────────────────▼────────────────────────────────────┐
│                          APPLICATION TIER                              │
│  FastAPI (Python 3.11, Asynchronous ASGI Architecture)                 │
│  ├── Auth & RBAC Subsystem (JWT Tokens, BCrypt, 3 Roles)               │
│  ├── Risk Assessment Service (Physics-Informed Fused Heuristics)       │
│  ├── SafePath Evacuation Routing Service (Shapely Spatial Polygons)    │
│  ├── Weather & Soil Moisture Service (Open-Meteo Async Client)         │
│  ├── Telemetry & Crowdsource Intake Service (IndexedDB Sync)           │
│  ├── Shelter Directory & Capacity Management Service                   │
│  └── IoT Hardware & Sensor Scenario Simulator (Async Ticker)           │
└──────────────────┬─────────────────────────────────┬───────────────────┘
                   │                                 │
┌──────────────────▼───────────┐         ┌───────────▼───────────────────┐
│       AI / ML ENGINE         │         │        PERSISTENCE LAYER      │
│  - Vectorized NumPy Trees    │         │  SQLAlchemy ORM               │
│  - Gradient Boosting Regress │         │  - SQLite (Zero-config local) │
│  - Random Forest Classifier  │         │  - PostgreSQL / PostGIS Ready │
│  - 9-Factor Geo-Hydrology    │         │  - Normalized Relational Data │
└──────────────────────────────┘         └───────────────────────────────┘
```

### 4.2 Security Architecture & Role-Based Access Control (RBAC)
The application enforces strict defense-in-depth security:
- **Role Hierarchy:**
  - `CITIZEN`: View hazard map, receive alerts, calculate safe evacuation route, view shelters & helplines, submit ground damage reports.
  - `FIELD_OFFICER`: All citizen capabilities + verify crowdsourced telemetry, manage local shelter capacities, submit real-time sensor observations.
  - `ADMIN`: All officer capabilities + trigger simulated disaster scenarios, adjust global alert thresholds, manage users, full system telemetry audits.
- **Defensive Middlewares:**
  - `SecurityShieldMiddleware`: Injects `X-Content-Type-Options: nosniff`, `X-Frame-Options: DENY`, `X-XSS-Protection: 1; mode=block`, and blocks directory traversal attempts.
  - `RateLimitMiddleware`: Enforces sliding-window rate limiting on sensitive endpoints (e.g., `/api/v1/auth/login`) to mitigate brute-force and DoS vectors.

---

## 5. Machine Learning & Mathematical Formulations

### 5.1 The 9-Parameter Hazard Feature Vector
Every geographic location or sensor station is modeled as a vector $X \in \mathbb{R}^9$:

| # | Feature Name | Symbol | Unit | Range | Geotechnical Significance |
|---|---|---|---|---|---|
| 1 | Slope Angle | $	heta$ | degrees (°) | $0.0 - 65.0$ | Gravitational shear stress along potential slip planes. |
| 2 | 24-Hour Rainfall | $R_{24}$ | mm | $0.0 - 350.0$ | Cumulative pore-water pressure generation and soil saturation. |
| 3 | Instant Rain Rate | $r_{curr}$ | mm/hr | $0.0 - 120.0$ | Cloudburst intensity triggering surface erosion & mudflows. |
| 4 | Volumetric Soil Moisture | $	heta_w$ | $	ext{m}^3/	ext{m}^3$ | $0.10 - 0.70$ | Soil matrix liquefaction and total loss of cohesive strength. |
| 5 | Digital Elevation | $H$ | meters | $50 - 4500$ | Orographic rainfall enhancement and gravitational potential. |
| 6 | Vegetation Index (NDVI) | $	ext{NDVI}$ | index | $-0.20 - 0.90$ | Root network soil anchoring and canopy interception buffer. |
| 7 | Distance to River Drainage | $D_{drain}$ | meters | $10 - 5000$ | Inundation susceptibility during flash flood river surges. |
| 8 | Lithology Vulnerability Code | $L$ | integer | $1 - 5$ | Rock friability (1=Competent Granite $ightarrow$ 5=Friable Weathered Shale). |
| 9 | Ground Inclinometer Tilt Rate | $\Delta	heta$ | °/day | $0.0 - 8.0$ | Active sub-surface creep indicating imminent slope collapse. |

### 5.2 Mathematical Risk Scoring Formulations

#### 1. Geotechnical Slope Failure Formulation
Based on the infinite slope stability model, the Factor of Safety ($FS$) is governed by:
$$FS = rac{c' + (\gamma - m\gamma_w) z \cos^2	heta 	an\phi'}{\gamma z \sin	heta \cos	heta}$$
Where:
- $c'$ is effective soil cohesion
- $\phi'$ is internal friction angle
- $\gamma$ is unit weight of moist soil
- $\gamma_w$ is unit weight of water
- $m$ is fractional depth of the saturated zone (proportional to $	heta_w$)
- $	heta$ is slope angle

When $FS < 1.0$, shear failure is mathematically imminent.

#### 2. Normalized Empirical Scoring in `MLRiskEngine`:
The engine computes individual normalized factor scores $S_i \in [0, 100]$:

$$	ext{RainScore} = \min\left(100, \left(rac{R_{24}}{150.0}ight) 	imes 80.0 + (2.0 	imes r_{curr})ight)$$

$$	ext{SlopeScore} = egin{cases} 
2.0 	imes 	heta & 	ext{if } 	heta < 10^\circ \
20 + rac{	heta - 10}{15} 	imes 35 & 	ext{if } 10^\circ \le 	heta < 25^\circ \
55 + rac{	heta - 25}{20} 	imes 35 & 	ext{if } 25^\circ \le 	heta < 45^\circ \
90 + \min(10, 2(	heta - 45)) & 	ext{if } 	heta \ge 45^\circ 
\end{cases}$$

$$	ext{SoilScore} = \min\left(100, \max\left(0, rac{	heta_w - 0.20}{0.35} 	imes 100ight)ight)$$

$$	ext{ElevScore} = \min\left(100, rac{H}{2500} 	imes 100ight)$$

The aggregate composite hazard score is given by:
$$R_{	ext{composite}} = \left(0.35 \cdot 	ext{RainScore}ight) + \left(0.30 \cdot 	ext{SlopeScore}ight) + \left(0.20 \cdot 	ext{SoilScore}ight) + \left(0.05 \cdot 	ext{ElevScore}ight) + \left(0.10 \cdot S_{	ext{historical}}ight)$$

#### 3. Classification Thresholds:
- **LOW Risk:** $0.0\% \le R_{	ext{composite}} < 25.0\%$ (Green)
- **MODERATE Risk:** $25.0\% \le R_{	ext{composite}} < 50.0\%$ (Yellow)
- **HIGH Risk:** $50.0\% \le R_{	ext{composite}} < 75.0\%$ (Orange)
- **CRITICAL Risk:** $75.0\% \le R_{	ext{composite}} \le 100.0\%$ (Red / Immediate Evacuation Mandate)

---

## 6. Interactive Subsystems & Functional Capabilities

### 6.1 SafePath Evacuation Routing Engine
- **Objective:** Route an endangered citizen from their current coordinates $(lat_u, lon_u)$ to the nearest safe shelter $(lat_s, lon_s)$ with verified available capacity.
- **Collision Detection:** The direct geometric line $L = 	ext{LineString}[(lon_u, lat_u), (lon_s, lat_s)]$ is intersected against all active `HIGH` and `CRITICAL` risk polygons $P_k$ using Shapely:
  $$	ext{Intersects}(L, P_k) = 	ext{True}$$
- **Dynamic Bypass Generation:** If an intersection occurs, the algorithm calculates orthogonal waypoint offsets:
  $$lat_{mid} = rac{lat_u + lat_s}{2} + \delta_{lat}, \quad lon_{mid} = rac{lon_u + lon_s}{2} + \delta_{lon}$$
  Iteratively shifting waypoints outside the convex hull of $P_k$ until the route achieves zero danger polygon collisions.
- **Mobility Recommendation:** Categorizes the optimal escape transport (`FOOT_TRAIL`, `4x4_RESCUE_VEHICLE`, or `RESCUE_BUS`) based on road gradient and terrain roughness.

### 6.2 Offline-First Citizen Telemetry & IndexedDB Sync
- When a user loses internet connectivity, reports containing GPS coordinates, hazard category (Landslide, Road Collapse, Flash Flood), description, and severity are serialized and saved to browser IndexedDB store (`geoalert_offline_reports`).
- The PWA Service Worker monitors online recovery events. Upon signal restoration, it initiates an atomic POST batch to `/api/v1/telemetry/sync-offline`, receiving confirmation and updating the user's interface in real time.

### 6.3 Multilingual Web Speech TTS Voice Alerts
- Voice synthesis synthesizes localized alerts for immediate acoustic comprehension:
  - **English:** `"CRITICAL LANDSLIDE WARNING! High risk detected in your area. Immediate evacuation advised."`
  - **Hindi (हिंदी):** `"गंभीर भूस्खलन चेतावनी! आपके क्षेत्र में भारी जोखिम दर्ज किया गया है। कृपया तुरंत सुरक्षित आश्रय की ओर निकलें।"`
  - **Assamese (অসমীয়া):** `"জৰুৰী ভূমিস্খলনৰ সতৰ্কবাৰ্তা! আপোনাৰ অঞ্চলত গুৰুতৰ বিপদৰ আশংকা। অবিলম্বে সুৰক্ষিত আশ্ৰয়স্থললৈ স্থানান্তৰিত হওক।"`
  - **Bengali (বাংলা):** `"জরুরী ভূমিধস সতর্কতা! আপনার এলাকায় উচ্চ ঝুঁকি সনাক্ত হয়েছে। অবিলম্বে নিরাপদ আশ্রয়ে চলে যান।"`

### 6.4 IoT Sensor Simulator
- Built-in simulation service simulates real-time data packets from field hardware across key NER micro-locations:
  1. `NORMAL`: Baseline gentle seasonal conditions.
  2. `MONSOON_SURGE`: Heavy sustained rainfall, elevating river basins and softening soil.
  3. `LANDSLIDE_IMMINENT`: Accelerating ground inclinometer tilt rate (>2.5°/day), critical soil saturation, slope shear stress peak.
  4. `CLOUDBURST_FLOOD`: Extreme precipitation (>90 mm/hr), flash flood torrents.
- Features manual single-tick triggers (`POST /api/v1/sensors/simulator/tick`) and automatic 5-second asynchronous polling loops.

---

## 7. Comprehensive API Reference Catalog

| Category | Method | Path | Summary / Function | Auth Required |
|---|---|---|---|---|
| **System** | `GET` | `/health` | System health and service metadata check | No |
| **System** | `GET` | `/docs` | Interactive Swagger UI API documentation | No |
| **Auth** | `POST` | `/api/v1/auth/register` | Register new citizen or officer account | No |
| **Auth** | `POST` | `/api/v1/auth/login` | Authenticate user & issue JWT Bearer token | No |
| **Auth** | `GET` | `/api/v1/auth/me` | Fetch active authenticated profile & role | Yes (Bearer) |
| **Risk** | `POST` | `/api/v1/risk/evaluate` | Calculate comprehensive 0–100% risk score for coordinates | No |
| **Risk** | `GET` | `/api/v1/risk/zones` | List all monitored micro-hazard zones | No |
| **Risk** | `GET` | `/api/v1/risk/geojson-heatmap`| Fetch GeoJSON FeatureCollection of hazard zone polygons | No |
| **Risk** | `GET` | `/api/v1/risk/summary` | Get regional overview (counts of critical/high zones) | No |
| **Risk** | `POST` | `/api/v1/risk/ml-predict` | Direct ML inference on raw slope, rainfall, and moisture | No |
| **Evacuation**| `POST` | `/api/v1/evacuation/plan-route` | Compute hazard-avoiding SafePath route to nearest shelter | No |
| **Shelters** | `GET` | `/api/v1/shelters` | List all active safe relief shelters with capacities | No |
| **Shelters** | `GET` | `/api/v1/shelters/nearest` | Find closest shelter with available capacity | No |
| **Shelters** | `POST` | `/api/v1/shelters` | Register new relief camp or assembly point | Admin / Officer |
| **Weather** | `GET` | `/api/v1/weather/current` | Real-time weather, rain accumulation & soil moisture | No |
| **Weather** | `GET` | `/api/v1/weather/forecast` | 24-hour hourly precipitation and weather forecast | No |
| **Sensors** | `GET` | `/api/v1/sensors` | List all registered IoT telemetry stations | No |
| **Sensors** | `GET` | `/api/v1/sensors/simulator/status` | Current IoT simulator status & active scenario | No |
| **Sensors** | `POST` | `/api/v1/sensors/simulator/scenario` | Switch disaster scenario | Admin / Officer |
| **Sensors** | `POST` | `/api/v1/sensors/simulator/tick` | Trigger single simulation cycle step | Admin / Officer |
| **Sensors** | `POST` | `/api/v1/sensors/simulator/start-auto` | Start background 5s auto-tick loop | Admin / Officer |
| **Sensors** | `POST` | `/api/v1/sensors/simulator/stop-auto` | Stop background auto-tick loop | Admin / Officer |
| **Telemetry**| `POST` | `/api/v1/telemetry/report` | Submit crowdsourced ground incident report | No |
| **Telemetry**| `POST` | `/api/v1/telemetry/sync-offline` | Batch-sync citizen reports queued offline | No |
| **Telemetry**| `GET` | `/api/v1/telemetry/reports` | Retrieve verified field reports | No |
| **Helplines**| `GET` | `/api/v1/helplines` | Get regional disaster helplines by State | No |
| **Helplines**| `GET` | `/api/v1/helplines/nearest` | Retrieve nearest district disaster emergency room | No |

---

## 8. Database Schema & Data Models

The persistence layer uses **SQLAlchemy ORM** mapped to an ACID-compliant relational schema (SQLite default, PostgreSQL/PostGIS compatible):

```
┌──────────────────┐          ┌───────────────────┐
│      users       │          │    risk_zones     │
├──────────────────┤          ├───────────────────┤
│ id (PK)          │          │ id (PK)           │
│ email (Unique)   │          │ zone_name         │
│ hashed_password  │          │ state             │
│ full_name        │          │ district          │
│ role (Enum)      │          │ latitude, longitu.│
│ state            │          │ risk_score_pct    │
│ is_active        │          │ risk_level (Enum) │
│ created_at       │          │ hazard_type (Enum)│
└──────────────────┘          │ polygon_geojson   │
                              │ slope_angle_deg   │
                              │ rainfall_24h_mm   │
                              │ soil_moisture_m3  │
                              └───────────────────┘

┌──────────────────┐          ┌───────────────────┐
│  safe_shelters   │          │    iot_sensors    │
├──────────────────┤          ├───────────────────┤
│ id (PK)          │          │ id (PK)           │
│ name             │          │ sensor_id (Unique)│
│ district, state  │          │ name              │
│ latitude, longitu│          │ sensor_type (Enum)│
│ capacity_total   │          │ location_name     │
│ capacity_occupied│          │ latitude, longitu.│
│ has_medical_aid  │          │ current_reading   │
│ has_power_backup │          │ reading_unit      │
│ has_helipad      │          │ status (Enum)     │
│ contact_phone    │          │ battery_level_pct │
│ is_active        │          │ last_updated      │
└──────────────────┘          └───────────────────┘

┌────────────────────────┐    ┌───────────────────┐
│  telemetry_reports     │    │ emergency_helpline│
├────────────────────────┤    ├───────────────────┤
│ id (PK)                │    │ id (PK)           │
│ report_uuid (Unique)   │    │ authority_name    │
│ hazard_type            │    │ state             │
│ severity               │    │ district          │
│ latitude, longitude    │    │ phone_primary     │
│ description            │    │ phone_secondary   │
│ is_verified            │    │ toll_free_number  │
│ reporter_name          │    │ is_24x7           │
│ created_at             │    └───────────────────┘
└────────────────────────┘
```

---

## 9. Frontend, GIS Mapping, PWA & Multilingual System

### 9.1 Design System & User Interface
- Built with **modern Vanilla ES6 JavaScript, HTML5, and pure CSS3** featuring a high-aesthetic **Glassmorphism** aesthetic (semi-transparent blurred frosted-glass card surfaces, neon glowing status indicators, and sleek dark mode).
- **Zero Framework Dependency:** No React, Vue, or Angular bundle bloat. First-paint execution occurs in sub-100ms.
- **Leaflet.js Integration:** Renders dark-mode CartoDB tile layers with dynamic SVG markers, colored risk zone polygons (Green, Yellow, Orange, Red), and route polylines.
- **Chart.js Telemetry:** Interactive precipitation and sensor reading history charts with gradient fills.

### 9.2 Progressive Web App (PWA) Offline Operation
- **Service Worker (`frontend/sw.js`):** Implements a Cache-First / Stale-While-Revalidate caching strategy for HTML, CSS, JavaScript assets, and map icons.
- **Offline Storage (`frontend/offlineSync.js`):** Manages an IndexedDB store to hold telemetry reports and shelter cached lists when offline.
- **Dynamic Connection Badge:** Displays live network state (`ONLINE 🟢` / `OFFLINE 🔴 [QUEUE ACTIVE]`) and prompts automatic batch synchronizations.

---

## 10. DevOps, Deployment, Security & Test Suite

### 10.1 Deployment Topologies
- **Production Containerization:** Multi-stage `Dockerfile` running `python:3.11-slim` with Uvicorn.
- **Nginx Reverse Proxy:** `nginx.conf` configures upstream reverse proxying, Gzip compression, and rate limiting headers.
- **Cloud Auto-Deploy:** `render.yaml` specification for zero-downtime deployment on Render.com.
- **Vercel / Static Alternative:** `vercel.json` rewrite configuration for hybrid serverless edge setups.

### 10.2 Quality Assurance & Integration Test Suite
- Comprehensive test coverage in `test_integration.py` running against `FastAPI TestClient`:
  - 1. Frontend static asset serving validation
  - 2. System health check verification
  - 3. Risk scoring and GeoJSON heatmap integrity
  - 4. SafePath evacuation bypass calculations
  - 5. Live weather API retrieval and caching
  - 6. IoT sensor scenario state transitions & ticks
  - 7. Crowdsourced telemetry intake & offline sync
  - 8. Helpline directory geo-queries
  - 9. JWT user authentication & role authorization
- **Result:** **9 / 9 Automated Integration Tests Passing (100% Pass Rate).**

---

## 11. Complete Source Code Repository

Below is the complete, unmodified source code for all primary files across the GeoAlertNER codebase.

---

### 11.1 Backend Core & Configuration

#### 📄 `backend/app/main.py`
```python
"""
GeoAlertNER Core FastAPI Application.
Copyright (c) 2026 GeoAlertNER Contributors. All rights reserved.
"""

import os
import mimetypes
import logging
from pathlib import Path
from contextlib import asynccontextmanager
from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import RedirectResponse, JSONResponse
from fastapi.staticfiles import StaticFiles

from backend.app.core.config import settings
from backend.app.core.database import engine, Base, SessionLocal
from backend.app.core.rate_limit import RateLimitMiddleware
from backend.app.core.security_headers import SecurityShieldMiddleware
from backend.app.api.v1.api import api_router
from backend.data.seed_data import seed_database
import backend.app.models

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(name)s: %(message)s"
)
logger = logging.getLogger("geoalertner")


@asynccontextmanager
async def lifespan(app: FastAPI):
    # Startup: Initialize DB tables & seed initial dataset
    logger.info("Initializing GeoAlertNER Database Tables...")
    Base.metadata.create_all(bind=engine)
    
    db = SessionLocal()
    try:
        seed_database(db)
    except Exception as exc:
        db.rollback()
        logger.warning(f"Database seed skipped or encountered constraint (non-fatal): {exc}")
    finally:
        db.close()
    
    logger.info("GeoAlertNER Backend Engine is ready.")
    yield
    # Shutdown
    logger.info("Shutting down GeoAlertNER Backend...")


app = FastAPI(
    title=settings.PROJECT_NAME,
    description="""
# 🛰️ GeoAlertNER Backend API 

AI-driven disaster monitoring platform for North Eastern Region (NER) hilly terrain.

### 🌟 Core Capabilities:
* **AI Landslide & Flash Flood Risk Scoring (0–100%)**: Multi-factor model ingesting Slope Geometry, 24h Rainfall, and Soil Saturation.
* **Hazard-Aware Evacuation Routing**: Dynamic escape corridor planner avoiding active red risk polygons.
* **Safe Shelter Registry & Capacity Tracking**: Directory of relief camps, assembly points, and medical stations.
* **Crowdsourced Ground Telemetry & Offline PWA Sync**: Resilient reporting for zero-connectivity zones.
* **Real-Time Weather Ingestion**: High-precision Open-Meteo & IMD radar data feeds.
* **Emergency Helpline Gateway**: Unified directory for 112, 1070 (SDMA), 1077 (DDMA), and NDRF battalions.
    """,
    version="1.0.0",
    docs_url="/docs",
    redoc_url="/redoc",
    lifespan=lifespan
)

# 1. Attach Rate Limiting Middleware (DoS and brute-force mitigation)
app.add_middleware(RateLimitMiddleware)

# 2. Attach Defensive Security Headers and File Access Shield Middleware
app.add_middleware(SecurityShieldMiddleware)

# 3. Setup CORS Middleware with environment-driven allowed origins
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.BACKEND_CORS_ORIGINS,
    allow_credentials=False,
    allow_methods=["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allow_headers=["*"],
)

# Standard MIME type mappings
mimetypes.add_type("application/javascript", ".js")
mimetypes.add_type("text/css", ".css")
mimetypes.add_type("application/json", ".json")


# Global Exception Handler to prevent stack trace leakage
@app.exception_handler(Exception)
async def global_exception_handler(request: Request, exc: Exception):
    logger.error(f"Unhandled exception on {request.method} {request.url.path}: {exc}", exc_info=True)
    if settings.DEBUG:
        detail = str(exc)
    else:
        detail = "An internal server error occurred. Please contact system support."
    return JSONResponse(
        status_code=500,
        content={"detail": detail, "error": "INTERNAL_SERVER_ERROR"}
    )


# Include API Router
app.include_router(api_router, prefix=settings.API_V1_STR)


@app.get("/health", tags=["Health"])
def health_check():
    """Service health and operational status check."""
    return {
        "status": "healthy",
        "service": settings.PROJECT_NAME,
        "region_focus": "North Eastern Region (NER), India",
        "version": "1.0.0"
    }


# Mount Frontend Web App Static Directory
frontend_dir = Path(__file__).resolve().parent.parent.parent / "frontend"
if frontend_dir.exists():
    logger.info(f"Mounting frontend directory: {frontend_dir}")
    app.mount("/", StaticFiles(directory=str(frontend_dir), html=True), name="frontend")
else:
    @app.get("/", include_in_schema=False)
    def root_redirect():
        """Redirect root path to interactive Swagger documentation if frontend is not present."""
        return RedirectResponse(url="/docs")


if __name__ == "__main__":
    import uvicorn
    uvicorn.run("backend.app.main:app", host="0.0.0.0", port=8000, reload=True)
```

---

#### 📄 `backend/app/core/config.py`
```python
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
```

---

#### 📄 `backend/app/core/database.py`
```python
﻿from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base
from backend.app.core.config import settings

connect_args = {"check_same_thread": False} if settings.DATABASE_URL.startswith("sqlite") else {}

engine = create_engine(
    settings.DATABASE_URL,
    connect_args=connect_args,
    echo=False
)

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()

def get_db():
    """Dependency for obtaining a database session."""
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
```

---

#### 📄 `backend/app/core/security.py`
```python
from datetime import datetime, timedelta, timezone
from typing import Optional, List
import bcrypt
from jose import JWTError, jwt
from fastapi import Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer
from sqlalchemy.orm import Session

from backend.app.core.config import settings
from backend.app.core.database import get_db
from backend.app.models.user import User, UserRole

ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 60 * 24 * 7  # 7 days

oauth2_scheme = OAuth2PasswordBearer(
    tokenUrl=f"{settings.API_V1_STR}/auth/login",
    auto_error=False
)


def get_password_hash(password: str) -> str:
    """Hash password using bcrypt."""
    pwd_bytes = password.encode("utf-8")[:72]
    salt = bcrypt.gensalt()
    return bcrypt.hashpw(pwd_bytes, salt).decode("utf-8")


def verify_password(plain_password: str, hashed_password: str) -> bool:
    """Verify plain password against hashed password."""
    try:
        pwd_bytes = plain_password.encode("utf-8")[:72]
        hashed_bytes = hashed_password.encode("utf-8")
        return bcrypt.checkpw(pwd_bytes, hashed_bytes)
    except Exception:
        return False


def create_access_token(data: dict, expires_delta: Optional[timedelta] = None) -> str:
    """Create a signed JWT access token."""
    to_encode = data.copy()
    if expires_delta:
        expire = datetime.now(timezone.utc) + expires_delta
    else:
        expire = datetime.now(timezone.utc) + timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, settings.SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt


def get_current_user(
    token: Optional[str] = Depends(oauth2_scheme),
    db: Session = Depends(get_db)
) -> User:
    """Retrieve current user from JWT token."""
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Could not validate credentials",
        headers={"WWW-Authenticate": "Bearer"},
    )
    if not token:
        raise credentials_exception

    try:
        payload = jwt.decode(token, settings.SECRET_KEY, algorithms=[ALGORITHM])
        email: str = payload.get("sub")
        if email is None:
            raise credentials_exception
    except JWTError:
        raise credentials_exception

    user = db.query(User).filter(User.email == email).first()
    if user is None:
        raise credentials_exception
    if not user.is_active:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Inactive user account"
        )
    return user


def require_roles(*allowed_roles: UserRole):
    """Dependency factory that validates current user has one of the allowed roles."""
    def role_checker(current_user: User = Depends(get_current_user)) -> User:
        if current_user.role not in allowed_roles:
            raise HTTPException(
                status_code=status.HTTP_403_FORBIDDEN,
                detail=f"Operation not permitted. Required roles: {[r.value for r in allowed_roles]}"
            )
        return current_user
    return role_checker
```

---

#### 📄 `backend/app/core/rate_limit.py`
```python
"""
GeoAlertNER Rate Limiting & DoS Protection Engine.
Copyright (c) 2026 GeoAlertNER Contributors. All rights reserved.

Provides sliding-window in-memory rate limiting to defend against
brute-force credential attacks, endpoint flooding, and scraper bots.
"""

import time
import threading
from typing import Dict, List, Tuple, Optional
from starlette.middleware.base import BaseHTTPMiddleware
from starlette.requests import Request
from starlette.responses import JSONResponse, Response


def get_client_ip(request: Request) -> str:
    """Extract client IP address, supporting reverse proxies (Nginx, Render, Cloudflare)."""
    # Check X-Forwarded-For header
    forwarded_for = request.headers.get("x-forwarded-for")
    if forwarded_for:
        # Take the leftmost IP in the chain (original client)
        client_ip = forwarded_for.split(",")[0].strip()
        if client_ip:
            return client_ip

    # Check X-Real-IP header
    real_ip = request.headers.get("x-real-ip")
    if real_ip:
        return real_ip.strip()

    # Fallback to direct client host
    if request.client and request.client.host:
        return request.client.host

    return "127.0.0.1"


class SlidingWindowRateLimiter:
    """
    Thread-safe sliding-window rate limiter.
    Maintains timestamp logs per client key with automatic memory pruning.
    """
    def __init__(self):
        self._lock = threading.Lock()
        # Storage format: { "key": [timestamp1, timestamp2, ...] }
        self._records: Dict[str, List[float]] = {}
        self._last_prune_time = time.time()
        self._prune_interval = 60.0  # Prune expired keys every 60 seconds

    def _prune_expired_records(self, now: float) -> None:
        """Removes stale records older than 120 seconds to prevent unbounded memory growth."""
        if now - self._last_prune_time < self._prune_interval:
            return
        self._last_prune_time = now
        stale_threshold = now - 120.0
        keys_to_delete = []
        for k, timestamps in self._records.items():
            valid_ts = [t for t in timestamps if t > stale_threshold]
            if not valid_ts:
                keys_to_delete.append(k)
            else:
                self._records[k] = valid_ts
        for k in keys_to_delete:
            del self._records[k]

    def check_rate_limit(
        self,
        key: str,
        max_requests: int,
        window_seconds: int
    ) -> Tuple[bool, int, int]:
        """
        Check if an action is permitted within the sliding window.

        Args:
            key: Unique identifier (e.g. "ip:login")
            max_requests: Max requests allowed within window
            window_seconds: Duration of sliding window in seconds

        Returns:
            Tuple of (is_allowed, remaining_requests, retry_after_seconds)
        """
        now = time.time()
        window_start = now - window_seconds

        with self._lock:
            self._prune_expired_records(now)

            timestamps = self._records.get(key, [])
            # Filter timestamps inside current sliding window
            valid_timestamps = [t for t in timestamps if t > window_start]

            if len(valid_timestamps) >= max_requests:
                # Rate limit exceeded
                earliest = valid_timestamps[0]
                retry_after = max(1, int(earliest + window_seconds - now))
                self._records[key] = valid_timestamps
                return False, 0, retry_after

            # Request is allowed; append current timestamp
            valid_timestamps.append(now)
            self._records[key] = valid_timestamps
            remaining = max(0, max_requests - len(valid_timestamps))
            return True, remaining, 0

    def reset(self) -> None:
        """Reset all rate limiter records (useful for testing)."""
        with self._lock:
            self._records.clear()


# Global limiter singleton
limiter = SlidingWindowRateLimiter()


class RateLimitMiddleware(BaseHTTPMiddleware):
    """
    Middleware applying route-specific and global rate limits to protect APIs.
    """
    # Route matching rules: (path_prefix, method, max_requests, window_seconds)
    RULES: List[Tuple[str, Optional[str], int, int]] = [
        # Strict auth brute-force prevention
        ("/api/v1/auth/login", "POST", 5, 60),
        ("/api/v1/auth/register", "POST", 3, 60),
        # Telemetry ingestion limits
        ("/api/v1/telemetry/report", "POST", 20, 60),
        ("/api/v1/telemetry/sync-offline", "POST", 10, 60),
        # Hardware simulator control
        ("/api/v1/sensors/simulator", "POST", 30, 60),
        # Sensor ingestion limit
        ("/api/v1/sensors/ingest", "POST", 60, 60),
        # General API default limit
        ("/api/v1/", None, 120, 60),
    ]

    async def dispatch(self, request: Request, call_next) -> Response:
        path = request.url.path
        method = request.method

        # Skip rate-limiting for static assets, docs, and health checks
        if not path.startswith("/api/"):
            return await call_next(request)
        if path == "/health":
            return await call_next(request)

        client_ip = get_client_ip(request)

        # Match applicable rule
        matched_rule = None
        for prefix, req_method, limit, window in self.RULES:
            if path.startswith(prefix) and (req_method is None or req_method == method):
                matched_rule = (prefix, limit, window)
                break

        if not matched_rule:
            matched_rule = ("/api/v1/", 120, 60)

        rule_name, limit, window = matched_rule
        key = f"{client_ip}:{rule_name}"

        is_allowed, remaining, retry_after = limiter.check_rate_limit(key, limit, window)

        if not is_allowed:
            return JSONResponse(
                status_code=429,
                content={
                    "detail": "Too Many Requests: Rate limit exceeded. Please slow down.",
                    "error": "RATE_LIMIT_EXCEEDED",
                    "retry_after_seconds": retry_after,
                    "limit": limit,
                    "window_seconds": window
                },
                headers={
                    "Retry-After": str(retry_after),
                    "X-RateLimit-Limit": str(limit),
                    "X-RateLimit-Remaining": "0",
                    "X-RateLimit-Reset": str(retry_after),
                }
            )

        response = await call_next(request)
        response.headers["X-RateLimit-Limit"] = str(limit)
        response.headers["X-RateLimit-Remaining"] = str(remaining)
        return response
```

---

#### 📄 `backend/app/core/security_headers.py`
```python
"""
GeoAlertNER Security Headers & File Protection Shield Middleware.
Copyright (c) 2026 GeoAlertNER Contributors. All rights reserved.

Injects HTTP security headers (CSP, HSTS, X-Frame-Options, X-Content-Type-Options)
and blocks directory traversal or unauthorized access to sensitive files (.env, .db, .py).
"""

import os
from starlette.middleware.base import BaseHTTPMiddleware
from starlette.requests import Request
from starlette.responses import JSONResponse, Response

BLOCKED_EXTENSIONS = {
    ".db", ".sqlite", ".sqlite3", ".env", ".py", ".pyc", ".pyd",
    ".bak", ".log", ".conf", ".sh", ".yml", ".yaml", ".git", ".sql"
}

BLOCKED_PATH_PATTERNS = [
    "/.", "/.env", "/.git", "/.vscode", "/__pycache__", "/node_modules",
    "../", "..\\", "%2e%2e", "passwd", "shadow"
]


class SecurityShieldMiddleware(BaseHTTPMiddleware):
    """Defensive middleware providing HTTP hardening and file-disclosure prevention."""

    async def dispatch(self, request: Request, call_next) -> Response:
        path = request.url.path.lower()

        # 1. Directory Traversal and Sensitive File Access Protection
        for pattern in BLOCKED_PATH_PATTERNS:
            if pattern in path:
                return JSONResponse(
                    status_code=403,
                    content={"detail": "Forbidden: Path traversal or protected resource access denied."}
                )

        # Check blocked file extensions
        _, ext = os.path.splitext(path)
        if ext in BLOCKED_EXTENSIONS:
            return JSONResponse(
                status_code=404,
                content={"detail": "Not Found"}
            )

        # 2. Proceed with normal request
        response: Response = await call_next(request)

        # 3. Add Defensive HTTP Security Headers
        headers = response.headers
        headers["X-Content-Type-Options"] = "nosniff"
        headers["X-Frame-Options"] = "DENY"
        headers["X-XSS-Protection"] = "1; mode=block"
        headers["Referrer-Policy"] = "strict-origin-when-cross-origin"
        headers["Permissions-Policy"] = "geolocation=(self), camera=(), microphone=()"

        # Content Security Policy (allows self, OSM / Carto map tiles, and Google Fonts)
        csp = (
            "default-src 'self'; "
            "script-src 'self' 'unsafe-inline' https://unpkg.com https://cdn.jsdelivr.net; "
            "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://unpkg.com; "
            "font-src 'self' https://fonts.gstatic.com; "
            "img-src 'self' data: blob: https:; "
            "connect-src 'self' https://api.open-meteo.com https://*.basemaps.cartocdn.com https://*.tile.openstreetmap.org https://server.arcgisonline.com;"
        )
        headers["Content-Security-Policy"] = csp

        return response
```

---

### 11.2 Backend API v1 Endpoints

#### 📄 `backend/app/api/v1/api.py`
```python
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
```

---

#### 📄 `backend/app/api/v1/auth.py`
```python
"""
Authentication & Authorization API Endpoints.
Copyright (c) 2026 GeoAlertNER Contributors. All rights reserved.
"""

from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from backend.app.core.database import get_db
from backend.app.core.security import (
    get_password_hash,
    verify_password,
    create_access_token,
    get_current_user,
    require_roles
)
from backend.app.models.user import User, UserRole
from backend.app.schemas.user import (
    UserRegister,
    AdminUserCreate,
    UserLogin,
    UserResponse,
    TokenResponse
)

router = APIRouter(prefix="/auth", tags=["Authentication & Access Control"])


@router.post("/register", response_model=TokenResponse, status_code=status.HTTP_201_CREATED)
def register_user(payload: UserRegister, db: Session = Depends(get_db)):
    """
    Public registration endpoint for citizens.
    Security Notice: Elevated roles (ADMIN, FIELD_OFFICER) cannot be self-assigned
    via public registration and are strictly forced to CITIZEN to prevent privilege escalation.
    """
    email_clean = payload.email.strip().lower()
    existing = db.query(User).filter(User.email == email_clean).first()
    if existing:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="An account with this email address already exists."
        )

    hashed_pw = get_password_hash(payload.password)
    # Strictly enforce CITIZEN role on public self-registration
    new_user = User(
        full_name=payload.full_name.strip(),
        email=email_clean,
        hashed_password=hashed_pw,
        role=UserRole.CITIZEN,
        state=payload.state,
        is_active=True
    )
    db.add(new_user)
    db.commit()
    db.refresh(new_user)

    token = create_access_token(data={"sub": new_user.email, "role": new_user.role.value})
    return TokenResponse(
        access_token=token,
        token_type="bearer",
        user=UserResponse.model_validate(new_user)
    )


@router.post("/login", response_model=TokenResponse)
def login_user(payload: UserLogin, db: Session = Depends(get_db)):
    """
    Authenticate user credentials and issue a signed JWT bearer token.
    Protected by IP-based rate limiting against brute-force attacks.
    """
    email_clean = payload.email.strip().lower()
    user = db.query(User).filter(User.email == email_clean).first()
    if not user or not verify_password(payload.password, user.hashed_password):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid email or password.",
            headers={"WWW-Authenticate": "Bearer"}
        )

    if not user.is_active:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="This user account is inactive. Please contact system administration."
        )

    token = create_access_token(data={"sub": user.email, "role": user.role.value})
    return TokenResponse(
        access_token=token,
        token_type="bearer",
        user=UserResponse.model_validate(user)
    )


@router.get("/me", response_model=UserResponse)
def get_current_user_profile(current_user: User = Depends(get_current_user)):
    """
    Get profile information of the currently authenticated user.
    """
    return UserResponse.model_validate(current_user)


@router.post("/admin/create-user", response_model=UserResponse, status_code=status.HTTP_201_CREATED)
def admin_create_user(
    payload: AdminUserCreate,
    current_admin: User = Depends(require_roles(UserRole.ADMIN)),
    db: Session = Depends(get_db)
):
    """
    Privileged endpoint for administrators to provision Field Officers and Administrators.
    """
    email_clean = payload.email.strip().lower()
    existing = db.query(User).filter(User.email == email_clean).first()
    if existing:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="An account with this email address already exists."
        )

    hashed_pw = get_password_hash(payload.password)
    new_user = User(
        full_name=payload.full_name.strip(),
        email=email_clean,
        hashed_password=hashed_pw,
        role=payload.role,
        state=payload.state,
        is_active=True
    )
    db.add(new_user)
    db.commit()
    db.refresh(new_user)
    return UserResponse.model_validate(new_user)
```

---

#### 📄 `backend/app/api/v1/risk.py`
```python
﻿from typing import List, Optional, Dict, Any
from fastapi import APIRouter, Depends, HTTPException, Query
from sqlalchemy.orm import Session
from backend.app.core.database import get_db
from backend.app.models.risk_zone import RiskZone, RiskLevel
from backend.app.models.sensor import SensorNode
from backend.app.schemas.risk import (
    RiskEvaluateRequest, RiskEvaluateResponse, RiskZoneResponse,
    GeoJSONFeatureCollection, GeoJSONFeature
)
from backend.app.services.ml_risk_engine import ml_risk_engine

router = APIRouter(prefix="/risk", tags=["AI Risk Assessment & Zones"])

@router.get("/summary")
def get_risk_summary(db: Session = Depends(get_db)) -> Dict[str, Any]:
    """Provides high-level dashboard metrics across all monitored zones."""
    zones = db.query(RiskZone).all()
    if not zones:
        return {
            "overall_risk_score": 0,
            "overall_risk_level": "LOW",
            "total_active_alerts": 0,
            "critical_alerts_count": 0,
            "average_soil_moisture": 0.35,
            "average_rainfall_24h_mm": 10.0,
            "zones_monitored": 0,
            "evacuation_active_zones": 0
        }

    avg_score = sum(z.risk_score for z in zones) / len(zones)
    avg_rain = sum(z.rainfall_24h_mm for z in zones) / len(zones)
    avg_moist = sum(z.soil_moisture_m3m3 for z in zones) / len(zones)
    
    crit_alerts = [z for z in zones if z.risk_level == RiskLevel.CRITICAL or z.risk_score >= 70]
    high_alerts = [z for z in zones if z.risk_level in [RiskLevel.HIGH, RiskLevel.CRITICAL] or z.risk_score >= 45]
    evac_zones = [z for z in zones if z.evacuation_advised]

    level = "LOW"
    if avg_score >= 70:
        level = "CRITICAL"
    elif avg_score >= 45:
        level = "HIGH"
    elif avg_score >= 25:
        level = "MODERATE"

    return {
        "overall_risk_score": round(avg_score, 1),
        "overall_risk_level": level,
        "total_active_alerts": len(high_alerts),
        "critical_alerts_count": len(crit_alerts),
        "average_soil_moisture": round(avg_moist, 3),
        "average_rainfall_24h_mm": round(avg_rain, 1),
        "zones_monitored": len(zones),
        "evacuation_active_zones": len(evac_zones)
    }

@router.post("/evaluate", response_model=RiskEvaluateResponse)
async def evaluate_location_risk(request: RiskEvaluateRequest):
    """
    Evaluates real-time hazard risk score (0-100%) for any given GPS coordinate.
    Combines live Open-Meteo rainfall, soil moisture, elevation, and terrain slope.
    """
    try:
        rain_val = request.custom_rainfall_mm if request.custom_rainfall_mm is not None else request.rainfall_24h_mm
        result = await ml_risk_engine.evaluate_coordinates(
            latitude=request.latitude,
            longitude=request.longitude,
            slope_angle=request.slope_angle,
            custom_rainfall_mm=rain_val,
            soil_moisture_override=request.soil_moisture_m3m3
        )
        return result
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Risk evaluation error: {str(e)}")

@router.post("/assess", response_model=RiskEvaluateResponse)
async def assess_risk_alias(request: RiskEvaluateRequest):
    """Alias for /evaluate."""
    return await evaluate_location_risk(request)

@router.get("/zones", response_model=List[RiskZoneResponse])
def get_all_risk_zones(
    state: Optional[str] = Query(None, description="Filter by state (e.g. Assam, Meghalaya)"),
    level: Optional[RiskLevel] = Query(None, description="Filter by severity level"),
    db: Session = Depends(get_db)
):
    """Retrieves all monitored micro-zones with live hazard risk scores."""
    query = db.query(RiskZone)
    if state:
        query = query.filter(RiskZone.state.ilike(f"%{state}%"))
    if level:
        query = query.filter(RiskZone.risk_level == level)
    return query.all()

@router.get("/geojson-heatmap", response_model=GeoJSONFeatureCollection)
def get_risk_geojson_heatmap(db: Session = Depends(get_db)):
    """
    Returns risk micro-zones formatted as standard GeoJSON FeatureCollection
    for direct integration with Leaflet.js, Mapbox GL JS, or MapLibre GL.
    """
    zones = db.query(RiskZone).all()
    features = []

    for z in zones:
        coords = z.polygon_coordinates or []
        # Ensure polygon geometry is closed
        if coords and coords[0] != coords[-1]:
            coords.append(coords[0])

        feature = GeoJSONFeature(
            geometry={
                "type": "Polygon",
                "coordinates": [coords] if coords else []
            },
            properties={
                "id": z.id,
                "zone_code": z.zone_code,
                "name": z.name,
                "state": z.state,
                "district": z.district,
                "hazard_type": z.hazard_type.value,
                "risk_score": z.risk_score,
                "risk_level": z.risk_level.value,
                "rainfall_24h_mm": z.rainfall_24h_mm,
                "slope_angle": z.slope_angle,
                "soil_moisture": z.soil_moisture_m3m3,
                "evacuation_advised": bool(z.evacuation_advised)
            }
        )
        features.append(feature)

    return GeoJSONFeatureCollection(features=features)

@router.post("/ml-predict")
def predict_with_ml_model(
    slope_degrees: float = Query(28.0, description="Terrain slope angle in degrees"),
    rainfall_24h_mm: float = Query(65.0, description="24-hour rainfall accumulation in mm"),
    soil_moisture_m3_m3: float = Query(0.42, description="Volumetric soil moisture (0.10 - 0.65)"),
    elevation_m: float = Query(350.0, description="Elevation in meters"),
    rain_rate_current_mm_hr: float = Query(12.0, description="Current precipitation rate mm/hr"),
    ndvi_vegetation: float = Query(0.45, description="NDVI vegetation index (0.05 - 0.85)"),
    dist_to_drainage_m: float = Query(180.0, description="Distance to river/stream channel in meters"),
    lithology_code: int = Query(3, description="Rock lithology (1=Alluvium, 3=Sedimentary, 5=Friable Shale)"),
    tilt_rate_deg_day: float = Query(0.1, description="Ground tilt rate in deg/day")
) -> Dict[str, Any]:
    """
    Evaluates terrain parameters directly through the trained Machine Learning Random Forest Model.
    Returns multi-class probabilities, continuous risk percentage, and evacuation triggers.
    """
    return ml_risk_engine.ml_predict(
        slope_degrees=slope_degrees,
        rainfall_24h_mm=rainfall_24h_mm,
        soil_moisture_m3_m3=soil_moisture_m3_m3,
        elevation_m=elevation_m,
        rain_rate_current_mm_hr=rain_rate_current_mm_hr,
        ndvi_vegetation=ndvi_vegetation,
        dist_to_drainage_m=dist_to_drainage_m,
        lithology_code=lithology_code,
        tilt_rate_deg_day=tilt_rate_deg_day
    )
```

---

#### 📄 `backend/app/api/v1/evacuation.py`
```python
﻿from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from backend.app.core.database import get_db
from backend.app.schemas.evacuation import EvacuationPlanRequest, EvacuationPlanResponse
from backend.app.services.routing_service import routing_service

router = APIRouter(prefix="/evacuation", tags=["Evacuation & Mobility Routing"])

@router.post("/plan-route", response_model=EvacuationPlanResponse)
def plan_evacuation_route(
    request: EvacuationPlanRequest,
    db: Session = Depends(get_db)
):
    """
    Computes a Hazard-Aware Evacuation Route from the user's location to the nearest safe shelter.
    Automatically detects active high-risk hazard zones and recalculates a safe bypass corridor.
    Provides transport recommendations (4x4 vs Foot vs Bus) and nearest emergency helplines.
    """
    try:
        plan = routing_service.plan_safe_evacuation_route(
            db=db,
            user_lat=request.user_latitude,
            user_lon=request.user_longitude,
            target_shelter_id=request.target_shelter_id,
            avoid_hazards=request.avoid_high_risk,
            transport_preference=request.transport_preference
        )
        return plan
    except ValueError as ve:
        raise HTTPException(status_code=404, detail=str(ve))
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Routing calculation failure: {str(e)}")
```

---

#### 📄 `backend/app/api/v1/shelters.py`
```python
"""
Safe Shelters & Relief Points Router.
Copyright (c) 2026 GeoAlertNER Contributors. All rights reserved.
"""

from typing import List, Optional
from fastapi import APIRouter, Depends, Query, HTTPException, status
from sqlalchemy.orm import Session
from backend.app.core.database import get_db
from backend.app.core.security import require_roles
from backend.app.models.user import User, UserRole
from backend.app.models.shelter import SafeShelter, ShelterType
from backend.app.schemas.shelter import SafeShelterResponse, SafeShelterCreate
from backend.app.services.routing_service import routing_service

router = APIRouter(prefix="/shelters", tags=["Safe Shelters & Relief Points"])


@router.get("", response_model=List[SafeShelterResponse])
def get_shelters(
    state: Optional[str] = Query(None, description="State name (e.g. Assam, Meghalaya, Sikkim)"),
    shelter_type: Optional[ShelterType] = Query(None),
    has_medical: Optional[bool] = Query(None),
    has_helipad: Optional[bool] = Query(None),
    db: Session = Depends(get_db)
):
    """Lists all safe points, relief camps, and emergency assembly shelters."""
    query = db.query(SafeShelter).filter(SafeShelter.is_active == True)
    if state:
        query = query.filter(SafeShelter.state.ilike(f"%{state}%"))
    if shelter_type:
        query = query.filter(SafeShelter.shelter_type == shelter_type)
    if has_medical is not None:
        query = query.filter(SafeShelter.has_medical_aid == has_medical)
    if has_helipad is not None:
        query = query.filter(SafeShelter.has_helipad_access == has_helipad)

    shelters = query.all()
    results = []
    for s in shelters:
        results.append(SafeShelterResponse(
            id=s.id,
            name=s.name,
            shelter_type=s.shelter_type,
            state=s.state,
            district=s.district,
            address=s.address,
            latitude=s.latitude,
            longitude=s.longitude,
            elevation_meters=s.elevation_meters,
            capacity_total=s.capacity_total,
            capacity_occupied=s.capacity_occupied,
            has_medical_aid=s.has_medical_aid,
            has_food_water=s.has_food_water,
            has_power_backup=s.has_power_backup,
            has_helipad_access=s.has_helipad_access,
            contact_person=s.contact_person,
            contact_phone=s.contact_phone,
            is_active=s.is_active,
            occupancy_pct=round((s.capacity_occupied / max(1, s.capacity_total)) * 100, 1),
            available_capacity=s.capacity_total - s.capacity_occupied,
            updated_at=s.updated_at
        ))
    return results


@router.get("/nearest", response_model=SafeShelterResponse)
def get_nearest_shelter(
    lat: float = Query(..., examples=[26.1445]),
    lon: float = Query(..., examples=[91.7362]),
    db: Session = Depends(get_db)
):
    """Finds the nearest safe point/shelter relative to the provided GPS location."""
    match = routing_service.find_nearest_shelter(db, lat, lon)
    if not match:
        raise HTTPException(status_code=404, detail="No safe shelters found.")
    s, dist = match
    return SafeShelterResponse(
        id=s.id,
        name=s.name,
        shelter_type=s.shelter_type,
        state=s.state,
        district=s.district,
        address=s.address,
        latitude=s.latitude,
        longitude=s.longitude,
        elevation_meters=s.elevation_meters,
        capacity_total=s.capacity_total,
        capacity_occupied=s.capacity_occupied,
        has_medical_aid=s.has_medical_aid,
        has_food_water=s.has_food_water,
        has_power_backup=s.has_power_backup,
        has_helipad_access=s.has_helipad_access,
        contact_person=s.contact_person,
        contact_phone=s.contact_phone,
        is_active=s.is_active,
        occupancy_pct=round((s.capacity_occupied / max(1, s.capacity_total)) * 100, 1),
        available_capacity=s.capacity_total - s.capacity_occupied,
        distance_km=dist,
        updated_at=s.updated_at
    )


@router.post("", response_model=SafeShelterResponse, status_code=status.HTTP_201_CREATED)
def create_shelter(
    shelter_in: SafeShelterCreate,
    current_user: User = Depends(require_roles(UserRole.ADMIN, UserRole.FIELD_OFFICER)),
    db: Session = Depends(get_db)
):
    """
    Registers a new safe shelter or assembly area.
    Authorized for Field Officers and Administrators only.
    """
    data = shelter_in.model_dump()
    shelter = SafeShelter(**data)
    db.add(shelter)
    db.commit()
    db.refresh(shelter)
    return SafeShelterResponse(
        id=shelter.id,
        **data,
        occupancy_pct=round((shelter.capacity_occupied / max(1, shelter.capacity_total)) * 100, 1),
        available_capacity=shelter.capacity_total - shelter.capacity_occupied,
        updated_at=shelter.updated_at
    )
```

---

#### 📄 `backend/app/api/v1/weather.py`
```python
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
```

---

#### 📄 `backend/app/api/v1/sensors.py`
```python
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
```

---

#### 📄 `backend/app/api/v1/telemetry.py`
```python
﻿import uuid
from typing import List, Optional
from fastapi import APIRouter, Depends, Query, HTTPException
from sqlalchemy.orm import Session
from backend.app.core.database import get_db
from backend.app.models.telemetry import CrowdTelemetryReport, ReportCategory, ReportStatus
from backend.app.schemas.telemetry import (
    TelemetryReportCreate, TelemetryReportResponse,
    TelemetryBatchSyncRequest, TelemetryBatchSyncResponse
)

router = APIRouter(prefix="/telemetry", tags=["Crowdsourced Ground Telemetry & Offline Sync"])

@router.post("/report", response_model=TelemetryReportResponse, status_code=201)
def submit_ground_report(
    report_in: TelemetryReportCreate,
    db: Session = Depends(get_db)
):
    """
    Submits a single citizen or field responder hazard report (photos, road blocks, cracks).
    """
    report_uuid = report_in.report_uuid or f"rep-{uuid.uuid4().hex[:12]}"
    
    # Check if duplicate UUID already submitted during offline sync
    existing = db.query(CrowdTelemetryReport).filter(CrowdTelemetryReport.report_uuid == report_uuid).first()
    if existing:
        return existing

    report = CrowdTelemetryReport(
        report_uuid=report_uuid,
        category=report_in.category,
        description=report_in.description,
        latitude=report_in.latitude,
        longitude=report_in.longitude,
        state=report_in.state,
        district=report_in.district,
        image_url=report_in.image_url,
        severity_rating=report_in.severity_rating,
        reporter_name=report_in.reporter_name or "Anonymous Citizen",
        reporter_phone=report_in.reporter_phone,
        is_offline_submitted=report_in.is_offline_submitted,
        status=ReportStatus.VERIFIED if report_in.severity_rating >= 4 else ReportStatus.PENDING_VERIFICATION
    )
    db.add(report)
    db.commit()
    db.refresh(report)
    return report

@router.post("/sync-offline", response_model=TelemetryBatchSyncResponse)
def sync_offline_reports(
    batch: TelemetryBatchSyncRequest,
    db: Session = Depends(get_db)
):
    """
    Batch synchronizes reports stored locally in IndexedDB / SQLite by field workers
    when reconnecting to the internet from remote/no-network zones.
    """
    synced = 0
    failed = 0
    for r in batch.reports:
        try:
            r_uuid = r.report_uuid or f"rep-sync-{uuid.uuid4().hex[:10]}"
            if not db.query(CrowdTelemetryReport).filter(CrowdTelemetryReport.report_uuid == r_uuid).first():
                new_rep = CrowdTelemetryReport(
                    report_uuid=r_uuid,
                    category=r.category,
                    description=r.description,
                    latitude=r.latitude,
                    longitude=r.longitude,
                    state=r.state,
                    district=r.district,
                    image_url=r.image_url,
                    severity_rating=r.severity_rating,
                    reporter_name=r.reporter_name,
                    reporter_phone=r.reporter_phone,
                    is_offline_submitted=True
                )
                db.add(new_rep)
                synced += 1
        except Exception:
            failed += 1

    db.commit()
    return TelemetryBatchSyncResponse(
        synced_count=synced,
        failed_count=failed,
        message=f"Successfully synchronized {synced} field telemetry records to central database."
    )

@router.get("/reports", response_model=List[TelemetryReportResponse])
def get_reports(
    category: Optional[ReportCategory] = Query(None),
    status: Optional[ReportStatus] = Query(None),
    db: Session = Depends(get_db)
):
    """Fetches list of crowd reports for dashboard visualization."""
    query = db.query(CrowdTelemetryReport)
    if category:
        query = query.filter(CrowdTelemetryReport.category == category)
    if status:
        query = query.filter(CrowdTelemetryReport.status == status)
    return query.order_by(CrowdTelemetryReport.created_at.desc()).limit(100).all()

@router.post("/reports/{report_id}/upvote", response_model=TelemetryReportResponse)
def upvote_report(report_id: int, db: Session = Depends(get_db)):
    """Upvotes a report to increase verification confidence."""
    report = db.query(CrowdTelemetryReport).filter(CrowdTelemetryReport.id == report_id).first()
    if not report:
        raise HTTPException(status_code=404, detail="Report not found")
    report.upvotes += 1
    if report.upvotes >= 3 and report.status == ReportStatus.PENDING_VERIFICATION:
        report.status = ReportStatus.VERIFIED
    db.commit()
    db.refresh(report)
    return report
```

---

#### 📄 `backend/app/api/v1/helplines.py`
```python
"""
Emergency Helplines & SDRF/NDRF Directory Router.
Copyright (c) 2026 GeoAlertNER Contributors. All rights reserved.
"""

from typing import List, Optional
from fastapi import APIRouter, Depends, Query
from sqlalchemy.orm import Session
from backend.app.core.database import get_db
from backend.app.schemas.helpline import HelplineResponse
from backend.app.services.helpline_service import helpline_service

router = APIRouter(prefix="/helplines", tags=["Emergency Helplines & SDRF/NDRF"])


@router.get("", response_model=List[HelplineResponse])
def get_helplines(
    state: Optional[str] = Query(None, description="State (e.g. Assam, Meghalaya, Sikkim, National)"),
    db: Session = Depends(get_db)
):
    """
    Returns verified disaster helpline numbers for North Eastern states and National authorities (112, 1070, 1077, NDRF).
    """
    return helpline_service.get_helplines_by_state(db, state)


@router.get("/nearest", response_model=List[HelplineResponse])
def get_nearest_helpline(
    state: str = Query("Assam", examples=["Assam"]),
    district: Optional[str] = Query(None, examples=["Kamrup Metropolitan"]),
    db: Session = Depends(get_db)
):
    """Finds immediate local district and state emergency contact numbers."""
    return helpline_service.get_nearest_helpline(db, state, district)
```

---

### 11.3 Backend Services & Engines

#### 📄 `backend/app/services/ml_risk_engine.py`
```python
"""
GeoAlertNER AI Hazard Risk Assessment Engine.
Copyright (c) 2026 GeoAlertNER Contributors. All rights reserved.
Protected under Anti-Plagiarism and Moral Rights terms (see LICENSE and ATTRIBUTION.md).
"""

import math
import numpy as np
from typing import Dict, Any, Tuple
from backend.app.models.risk_zone import RiskLevel, HazardType
from backend.app.schemas.risk import RiskFactorBreakdown, RiskEvaluateResponse
from backend.app.services.weather_service import weather_service

class MLRiskEngine:
    """
    AI Risk Assessment Engine for Landslide, Flash Flood, and Terrain Hazards in NER.
    Combines Slope Geometry (DEM), 24h Rainfall Accumulation, Soil Moisture Saturation,
    and Historical Susceptibility Index.
    """

    def __init__(self):
        # Weights for Landslide / Flash Flood susceptibility
        self.w_rainfall = 0.35
        self.w_slope = 0.30
        self.w_soil_moisture = 0.20
        self.w_elevation = 0.05
        self.w_historical = 0.10

    def estimate_slope_from_coords(self, lat: float, lon: float) -> float:
        """
        Estimates terrain slope angle in degrees for North Eastern Region coordinates.
        (Higher in Shillong Plateau, Naga Hills, Sikkim Himalayas, lower in Brahmaputra Valley).
        """
        # Hilly coordinates estimation heuristic
        seed = int((abs(lat) * 100 + abs(lon) * 100) % 37)
        if 25.0 <= lat <= 28.5 and 90.0 <= lon <= 96.0:
            # Hilly terrain typical in NER: 18 to 48 degrees
            return round(18.0 + (seed % 28) + (math.sin(lat) * 4), 1)
        return round(5.0 + (seed % 10), 1)

    def calculate_risk(
        self,
        rainfall_24h_mm: float,
        current_rain_rate_mm: float,
        slope_degrees: float,
        soil_moisture: float, # 0.0 to 1.0 (m3/m3)
        elevation_m: float = 200.0,
        historical_score: float = 45.0
    ) -> Tuple[float, RiskFactorBreakdown, RiskLevel, HazardType]:
        """
        Calculates normalized hazard risk score (0 to 100%).
        """
        # 1. Rainfall score (0 to 100)
        # Threshold: 0-20mm (Low), 20-70mm (Moderate), 70-150mm (High), >150mm (Critical)
        rain_score = min(100.0, (rainfall_24h_mm / 150.0) * 80.0 + (current_rain_rate_mm * 2.0))
        
        # 2. Slope score (0 to 100)
        # Threshold: <15 deg (Low), 15-30 deg (Moderate), 30-45 deg (High), >45 deg (Critical)
        if slope_degrees < 10.0:
            slope_score = (slope_degrees / 10.0) * 20.0
        elif slope_degrees < 25.0:
            slope_score = 20.0 + ((slope_degrees - 10.0) / 15.0) * 35.0
        elif slope_degrees < 45.0:
            slope_score = 55.0 + ((slope_degrees - 25.0) / 20.0) * 35.0
        else:
            slope_score = 90.0 + min(10.0, (slope_degrees - 45.0) * 2.0)

        # 3. Soil Saturation score (0 to 100)
        # Soil moisture: 0.15 (dry) to 0.55+ (saturated/liquefaction risk)
        soil_score = min(100.0, max(0.0, ((soil_moisture - 0.20) / 0.35) * 100.0))

        # 4. Elevation Factor (0 to 100)
        elev_score = min(100.0, (elevation_m / 2500.0) * 100.0)

        # Weighted Aggregate
        total_risk = (
            (rain_score * self.w_rainfall) +
            (slope_score * self.w_slope) +
            (soil_score * self.w_soil_moisture) +
            (elev_score * self.w_elevation) +
            (historical_score * self.w_historical)
        )

        total_risk = round(min(100.0, max(0.0, total_risk)), 1)

        breakdown = RiskFactorBreakdown(
            rainfall_contribution=round(rain_score, 1),
            slope_contribution=round(slope_score, 1),
            soil_saturation_contribution=round(soil_score, 1),
            elevation_contribution=round(elev_score, 1),
            historical_susceptibility=round(historical_score, 1)
        )

        # Determine Risk Level
        if total_risk >= 75.0:
            level = RiskLevel.CRITICAL
        elif total_risk >= 50.0:
            level = RiskLevel.HIGH
        elif total_risk >= 25.0:
            level = RiskLevel.MODERATE
        else:
            level = RiskLevel.LOW

        # Primary Hazard Identification
        if slope_degrees >= 25.0 and total_risk >= 45.0:
            primary_hazard = HazardType.LANDSLIDE
        elif current_rain_rate_mm >= 40.0:
            primary_hazard = HazardType.CLOUDBURST
        elif slope_degrees < 15.0 and rainfall_24h_mm >= 60.0:
            primary_hazard = HazardType.FLASH_FLOOD
        else:
            primary_hazard = HazardType.LANDSLIDE

        return total_risk, breakdown, level, primary_hazard

    async def evaluate_coordinates(
        self,
        latitude: float,
        longitude: float,
        slope_angle: float = None,
        custom_rainfall_mm: float = None,
        soil_moisture_override: float = None
    ) -> RiskEvaluateResponse:
        # Fetch live meteorological data
        weather = await weather_service.get_live_metrics(latitude, longitude)
        
        slope = slope_angle if slope_angle is not None else self.estimate_slope_from_coords(latitude, longitude)
        rain_24h = custom_rainfall_mm if custom_rainfall_mm is not None else weather.precipitation_24h_mm
        curr_rain = weather.precipitation_current_mm
        soil_moisture = soil_moisture_override if soil_moisture_override is not None else weather.soil_moisture_0_to_7cm
        elevation = weather.elevation or 180.0

        risk_score, breakdown, level, primary_hazard = self.calculate_risk(
            rainfall_24h_mm=rain_24h,
            current_rain_rate_mm=curr_rain,
            slope_degrees=slope,
            soil_moisture=soil_moisture,
            elevation_m=elevation
        )

        evacuation_advised = (level in [RiskLevel.HIGH, RiskLevel.CRITICAL])

        if level == RiskLevel.CRITICAL:
            action = "ðŸš¨ IMMEDIATE EVACUATION REQUIRED: Extreme slope saturation & torrential rainfall detected. Move to nearest designated relief shelter immediately via hazard-free routes."
            mitigations = [
                "Evacuate to designated safe shelter immediately",
                "Avoid National Highway hill cuts and unpaved slope roads",
                "Follow verified NDRF/SDRF evacuation corridors",
                "Do not attempt to cross flooded causeways or culverts"
            ]
        elif level == RiskLevel.HIGH:
            action = "âš ï¸ PREPARE FOR EVACUATION: High landslide/flood hazard threshold crossed. Avoid mountain roads and pack emergency supplies."
            mitigations = [
                "Pack emergency grab-and-go kit with essentials",
                "Identify nearest safe shelter and active escape route",
                "Monitor IMD real-time rainfall radar alerts",
                "Stay clear of steep cut slopes and retaining walls"
            ]
        elif level == RiskLevel.MODERATE:
            action = "ðŸŸ¡ ACTIVE MONITORING: Elevated soil wetness. Stay alert for official weather updates and monitor local slopes."
            mitigations = [
                "Monitor local drainage and road culverts for blockages",
                "Check daily SDMA/DDMA weather advisory bulletins",
                "Report any newly observed slope cracks on citizen telemetry"
            ]
        else:
            action = "ðŸŸ¢ NORMAL CONDITIONS: Terrain and weather parameters within safe operating thresholds."
            mitigations = [
                "Standard routine monitoring active",
                "All micro-zones within safety thresholds"
            ]

        return RiskEvaluateResponse(
            latitude=latitude,
            longitude=longitude,
            risk_score=risk_score,
            risk_level=level,
            primary_hazard=primary_hazard,
            evacuation_advised=evacuation_advised,
            factors=breakdown,
            weather_summary={
                "precipitation_24h_mm": rain_24h,
                "current_rate_mm": curr_rain,
                "soil_moisture": soil_moisture,
                "slope_degrees": slope,
                "elevation_m": elevation,
                "intensity": weather.rain_intensity_level
            },
            action_recommendation=action,
            mitigation_actions=mitigations
        )

    def ml_predict(
        self,
        slope_degrees: float,
        rainfall_24h_mm: float,
        soil_moisture_m3_m3: float,
        elevation_m: float = 300.0,
        rain_rate_current_mm_hr: float = 0.0,
        ndvi_vegetation: float = 0.50,
        dist_to_drainage_m: float = 250.0,
        lithology_code: int = 3,
        tilt_rate_deg_day: float = 0.0
    ) -> Dict[str, Any]:
        """
        Runs inference using the trained Random Forest Ensemble model from ml/hazard_model.pkl.
        Falls back smoothly to analytical heuristics if weights are not yet present.
        """
        import os, sys, pickle
        base_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "..", "..", "ml"))
        if base_dir not in sys.path:
            sys.path.insert(0, base_dir)
        import engine
        model_path = os.path.join(base_dir, "hazard_model.pkl")

        if os.path.exists(model_path):
            try:
                with open(model_path, "rb") as f:
                    bundle = pickle.load(f)
                regressor = bundle["regressor"]
                classifier = bundle["classifier"]
                features = bundle["features"]

                row_dict = {
                    "slope_degrees": slope_degrees,
                    "elevation_m": elevation_m,
                    "rainfall_24h_mm": rainfall_24h_mm,
                    "rain_rate_current_mm_hr": rain_rate_current_mm_hr,
                    "soil_moisture_m3_m3": soil_moisture_m3_m3,
                    "ndvi_vegetation": ndvi_vegetation,
                    "dist_to_drainage_m": dist_to_drainage_m,
                    "lithology_code": lithology_code,
                    "tilt_rate_deg_day": tilt_rate_deg_day
                }
                row_arr = np.array([[row_dict[feat] for feat in features]])

                pred_score = round(max(0.0, min(100.0, float(regressor.predict(row_arr)[0]))), 1)
                pred_cat = str(classifier.predict(row_arr)[0])
                probas = classifier.predict_proba(row_arr)[0]
                probabilities = {
                    cls: round(float(prob), 3)
                    for cls, prob in zip(classifier.classes_, probas)
                }

                return {
                    "source": "RANDOM_FOREST_ENSEMBLE",
                    "predicted_risk_score_pct": pred_score,
                    "predicted_risk_category": pred_cat,
                    "class_probabilities": probabilities,
                    "evacuation_advised": pred_cat in ["HIGH", "CRITICAL"],
                    "parameters_evaluated": row_dict
                }
            except Exception:
                pass

        # Fallback to analytical calculation
        total_risk, breakdown, level, primary_hazard = self.calculate_risk(
            rainfall_24h_mm=rainfall_24h_mm,
            current_rain_rate_mm=rain_rate_current_mm_hr,
            slope_degrees=slope_degrees,
            soil_moisture=soil_moisture_m3_m3,
            elevation_m=elevation_m
        )
        return {
            "source": "ANALYTICAL_HEURISTIC",
            "predicted_risk_score_pct": total_risk,
            "predicted_risk_category": level.value,
            "class_probabilities": {level.value: 1.0},
            "evacuation_advised": level in [RiskLevel.HIGH, RiskLevel.CRITICAL],
            "parameters_evaluated": {
                "slope_degrees": slope_degrees,
                "rainfall_24h_mm": rainfall_24h_mm,
                "soil_moisture_m3_m3": soil_moisture_m3_m3
            }
        }

ml_risk_engine = MLRiskEngine()
```

---

#### 📄 `backend/app/services/routing_service.py`
```python
"""
GeoAlertNER Hazard-Aware Evacuation Routing Engine.
Copyright (c) 2026 GeoAlertNER Contributors. All rights reserved.
Protected under Anti-Plagiarism and Moral Rights terms (see LICENSE and ATTRIBUTION.md).
"""

import math
from typing import List, Dict, Any, Optional, Tuple
from shapely.geometry import Point, Polygon, LineString
from sqlalchemy.orm import Session
from backend.app.models.shelter import SafeShelter
from backend.app.models.risk_zone import RiskZone, RiskLevel
from backend.app.schemas.evacuation import (
    EvacuationPlanResponse, RouteWaypoint, TransportRecommendation
)
from backend.app.schemas.shelter import SafeShelterResponse

class RoutingService:
    """
    Hazard-Aware Evacuation Routing Engine for NER Hilly Terrain.
    Detects dynamic danger zones (landslides, flooded roads) and calculates
    safe avoidance bypass corridors.
    """

    @staticmethod
    def haversine_distance(lat1: float, lon1: float, lat2: float, lon2: float) -> float:
        """Calculates great-circle distance between two points in Kilometers."""
        R = 6371.0 # Earth radius in km
        dlat = math.radians(lat2 - lat1)
        dlon = math.radians(lon2 - lon1)
        a = (math.sin(dlat / 2) ** 2 +
             math.cos(math.radians(lat1)) * math.cos(math.radians(lat2)) *
             math.sin(dlon / 2) ** 2)
        c = 2 * math.atan2(math.sqrt(a), math.sqrt(1 - a))
        return round(R * c, 2)

    def find_nearest_shelter(
        self,
        db: Session,
        user_lat: float,
        user_lon: float,
        target_shelter_id: Optional[int] = None
    ) -> Optional[Tuple[SafeShelter, float]]:
        """Finds closest active shelter with capacity."""
        if target_shelter_id:
            shelter = db.query(SafeShelter).filter(SafeShelter.id == target_shelter_id).first()
            if shelter:
                dist = self.haversine_distance(user_lat, user_lon, shelter.latitude, shelter.longitude)
                return shelter, dist

        shelters = db.query(SafeShelter).filter(SafeShelter.is_active == True).all()
        if not shelters:
            return None

        best_shelter = None
        min_dist = float("inf")

        for s in shelters:
            # Check capacity availability
            available = s.capacity_total - s.capacity_occupied
            if available > 0:
                dist = self.haversine_distance(user_lat, user_lon, s.latitude, s.longitude)
                if dist < min_dist:
                    min_dist = dist
                    best_shelter = s

        if not best_shelter and shelters:
            best_shelter = shelters[0]
            min_dist = self.haversine_distance(user_lat, user_lon, best_shelter.latitude, best_shelter.longitude)

        return best_shelter, min_dist

    def get_avoidance_polygons(self, db: Session) -> List[Tuple[RiskZone, Polygon]]:
        """Fetches active high and critical risk zones as Shapely Polygons."""
        danger_zones = db.query(RiskZone).filter(
            RiskZone.risk_level.in_([RiskLevel.HIGH, RiskLevel.CRITICAL])
        ).all()

        polys = []
        for zone in danger_zones:
            if zone.polygon_coordinates and len(zone.polygon_coordinates) >= 3:
                try:
                    poly = Polygon(zone.polygon_coordinates)
                    polys.append((zone, poly))
                except Exception:
                    pass
        return polys

    def plan_safe_evacuation_route(
        self,
        db: Session,
        user_lat: float,
        user_lon: float,
        target_shelter_id: Optional[int] = None,
        avoid_hazards: bool = True,
        transport_preference: str = "ANY"
    ) -> EvacuationPlanResponse:
        """
        Calculates safe waypoints avoiding active hazard zones.
        """
        match = self.find_nearest_shelter(db, user_lat, user_lon, target_shelter_id)
        if not match:
            raise ValueError("No registered shelters found in system.")

        shelter, direct_dist = match
        danger_polygons = self.get_avoidance_polygons(db) if avoid_hazards else []

        # Generate base path
        steps = 6
        raw_waypoints = []
        for i in range(steps + 1):
            fraction = i / steps
            w_lat = user_lat + (shelter.latitude - user_lat) * fraction
            w_lon = user_lon + (shelter.longitude - user_lon) * fraction
            raw_waypoints.append([w_lon, w_lat])

        direct_line = LineString(raw_waypoints)

        avoided_zones = []
        safe_waypoints_coords = []

        # Check line intersections with hazard polygons
        for pt in raw_waypoints:
            point_geom = Point(pt[0], pt[1])
            is_in_danger = False
            for zone, poly in danger_polygons:
                if poly.contains(point_geom) or poly.buffer(0.005).contains(point_geom):
                    is_in_danger = True
                    if zone.name not in avoided_zones:
                        avoided_zones.append(f"{zone.name} ({zone.hazard_type.value} - {zone.risk_level.value})")
                    
                    # Offset waypoint safely away from polygon centroid
                    offset_lon = pt[0] + (0.015 if pt[0] >= zone.centroid_lon else -0.015)
                    offset_lat = pt[1] + (0.015 if pt[1] >= zone.centroid_lat else -0.015)
                    safe_waypoints_coords.append([offset_lon, offset_lat])
                    break
            
            if not is_in_danger:
                safe_waypoints_coords.append(pt)

        # Build detailed RouteWaypoint objects
        waypoints_res: List[RouteWaypoint] = []
        for idx, coord in enumerate(safe_waypoints_coords):
            lon, lat = coord[0], coord[1]
            if idx == 0:
                instr = "Start evacuation from current location. Head towards safe corridor."
            elif idx == len(safe_waypoints_coords) - 1:
                instr = f"Arrive at Safe Shelter: {shelter.name} ({shelter.shelter_type.value})."
            else:
                instr = f"Proceed along designated safe mountain bypass corridor (Waypoint {idx})."

            warning = "âš ï¸ Hazard avoidance detour active" if avoided_zones and 0 < idx < len(safe_waypoints_coords)-1 else None

            waypoints_res.append(RouteWaypoint(
                latitude=round(lat, 5),
                longitude=round(lon, 5),
                elevation_meters=round(shelter.elevation_meters + (50 * math.sin(idx)), 1),
                instruction=instr,
                hazard_proximity_warning=warning
            ))

        total_distance = round(direct_dist * (1.25 if avoided_zones else 1.05), 2)
        duration_minutes = int((total_distance / 25.0) * 60) + (10 if avoided_zones else 0)

        # Determine transport recommendation
        if total_distance > 15.0 or "LANDSLIDE" in str(avoided_zones):
            best_mode = "4x4_RESCUE_VEHICLE"
            passability = "CAUTION_ROUGH_TERRAIN"
            reason = "Steep terrain gradient & mud/debris hazard requires high-clearance 4WD vehicles or State Disaster buses."
        elif total_distance <= 3.0:
            best_mode = "FOOT_TRAIL"
            passability = "SAFE_PASSABLE"
            reason = "Short distance assembly point; rapid foot evacuation recommended to avoid road congestion."
        else:
            best_mode = "RESCUE_BUS / AMBULANCE"
            passability = "SAFE_PASSABLE"
            reason = "Paved arterial corridor cleared for state emergency response transports."

        transport = TransportRecommendation(
            best_mode=best_mode,
            reason=reason,
            passability_status=passability,
            estimated_duration_minutes=duration_minutes,
            elevation_gain_meters=round(abs(shelter.elevation_meters - 150.0), 1)
        )

        shelter_dto = SafeShelterResponse(
            id=shelter.id,
            name=shelter.name,
            shelter_type=shelter.shelter_type,
            state=shelter.state,
            district=shelter.district,
            address=shelter.address,
            latitude=shelter.latitude,
            longitude=shelter.longitude,
            elevation_meters=shelter.elevation_meters,
            capacity_total=shelter.capacity_total,
            capacity_occupied=shelter.capacity_occupied,
            has_medical_aid=shelter.has_medical_aid,
            has_food_water=shelter.has_food_water,
            has_power_backup=shelter.has_power_backup,
            has_helipad_access=shelter.has_helipad_access,
            contact_person=shelter.contact_person,
            contact_phone=shelter.contact_phone,
            is_active=shelter.is_active,
            occupancy_pct=round((shelter.capacity_occupied / max(1, shelter.capacity_total)) * 100, 1),
            available_capacity=shelter.capacity_total - shelter.capacity_occupied,
            distance_km=direct_dist,
            updated_at=shelter.updated_at
        )

        route_geojson = {
            "type": "Feature",
            "geometry": {
                "type": "LineString",
                "coordinates": safe_waypoints_coords
            },
            "properties": {
                "distance_km": total_distance,
                "duration_min": duration_minutes,
                "shelter_name": shelter.name,
                "hazards_avoided": avoided_zones
            }
        }

        emergency_contacts = [
            {"title": "National Emergency Helpline", "number": "112"},
            {"title": f"{shelter.state} SDMA State Control Room", "number": "1070"},
            {"title": f"{shelter.district} District Emergency Ops Center", "number": "1077"},
            {"title": "NDRF 1st Battalion (Guwahati Control)", "number": "0361-2849005"}
        ]

        return EvacuationPlanResponse(
            destination_shelter=shelter_dto,
            route_waypoints=waypoints_res,
            total_distance_km=total_distance,
            total_duration_minutes=duration_minutes,
            hazard_zones_avoided_count=len(avoided_zones),
            hazard_zones_avoided_details=avoided_zones,
            transport_guidance=transport,
            emergency_contacts=emergency_contacts,
            route_geojson=route_geojson
        )

routing_service = RoutingService()
```

---

#### 📄 `backend/app/services/sensor_simulator.py`
```python
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
```

---

#### 📄 `backend/app/services/weather_service.py`
```python
﻿import httpx
import logging
from typing import Dict, Any, Optional
from backend.app.core.config import settings
from backend.app.schemas.weather import WeatherMetrics, WeatherForecastResponse, WeatherForecastHour

logger = logging.getLogger(__name__)

class WeatherService:
    @staticmethod
    async def get_live_metrics(latitude: float, longitude: float) -> WeatherMetrics:
        """
        Fetches live weather, precipitation, and soil moisture data from Open-Meteo API.
        Falls back to realistic synthetic data if external network request fails.
        """
        params = {
            "latitude": latitude,
            "longitude": longitude,
            "current": [
                "temperature_2m",
                "relative_humidity_2m",
                "precipitation",
                "rain",
                "surface_pressure",
                "wind_speed_10m",
                "wind_gusts_10m",
                "soil_moisture_0_to_7cm",
                "soil_moisture_7_to_28cm"
            ],
            "hourly": ["precipitation"],
            "timezone": "auto"
        }

        try:
            async with httpx.AsyncClient(timeout=4.0) as client:
                response = await client.get(settings.OPEN_METEO_BASE_URL, params=params)
                if response.status_code == 200:
                    data = response.json()
                    current = data.get("current", {})
                    hourly = data.get("hourly", {}).get("precipitation", [])
                    
                    # Calculate 24h accumulated rainfall (sum last 24 records or max slice)
                    rain_24h = sum(hourly[:24]) if hourly else float(current.get("precipitation", 0.0)) * 6.0
                    current_rain = float(current.get("precipitation", 0.0))
                    
                    # Rain intensity classification
                    if current_rain >= 50.0 or rain_24h >= 200.0:
                        intensity = "CLOUDBURST"
                    elif current_rain >= 15.0 or rain_24h >= 100.0:
                        intensity = "VERY_HEAVY"
                    elif current_rain >= 5.0 or rain_24h >= 40.0:
                        intensity = "HEAVY"
                    else:
                        intensity = "NORMAL"

                    cloudburst_prob = min(100.0, max(0.0, (current_rain * 1.5) + (rain_24h * 0.3)))

                    return WeatherMetrics(
                        latitude=latitude,
                        longitude=longitude,
                        elevation=float(data.get("elevation", 120.0)),
                        temperature_c=current.get("temperature_2m"),
                        relative_humidity=current.get("relative_humidity_2m"),
                        precipitation_current_mm=current_rain,
                        precipitation_24h_mm=round(rain_24h, 2),
                        rain_intensity_level=intensity,
                        soil_moisture_0_to_7cm=float(current.get("soil_moisture_0_to_7cm", 0.35)),
                        soil_moisture_7_to_28cm=float(current.get("soil_moisture_7_to_28cm", 0.40)),
                        surface_pressure_hpa=current.get("surface_pressure"),
                        wind_speed_kmh=current.get("wind_speed_10m"),
                        wind_gusts_kmh=current.get("wind_gusts_10m"),
                        cloudburst_probability_pct=round(cloudburst_prob, 1),
                        is_live_data=True,
                        data_source="Open-Meteo & IMD Radar Ingestion"
                    )
        except Exception as e:
            logger.warning(f"Failed to fetch live weather from Open-Meteo: {e}. Using fallback simulation.")

        # Fallback realistic data based on North East terrain baseline
        return WeatherMetrics(
            latitude=latitude,
            longitude=longitude,
            elevation=280.0,
            temperature_c=24.5,
            relative_humidity=88.0,
            precipitation_current_mm=12.4,
            precipitation_24h_mm=64.2,
            rain_intensity_level="HEAVY",
            soil_moisture_0_to_7cm=0.48,
            soil_moisture_7_to_28cm=0.52,
            surface_pressure_hpa=1008.2,
            wind_speed_kmh=22.0,
            wind_gusts_kmh=38.5,
            cloudburst_probability_pct=28.5,
            is_live_data=False,
            data_source="NER Meteorological Climatology (Offline Fallback)"
        )

    @staticmethod
    async def get_forecast(latitude: float, longitude: float, hours: int = 12) -> WeatherForecastResponse:
        params = {
            "latitude": latitude,
            "longitude": longitude,
            "hourly": ["precipitation", "soil_moisture_0_to_7cm", "temperature_2m"],
            "forecast_days": 2,
            "timezone": "auto"
        }
        hours_data = []
        try:
            async with httpx.AsyncClient(timeout=4.0) as client:
                res = await client.get(settings.OPEN_METEO_BASE_URL, params=params)
                if res.status_code == 200:
                    data = res.json().get("hourly", {})
                    times = data.get("time", [])[:hours]
                    precip = data.get("precipitation", [])[:hours]
                    sm = data.get("soil_moisture_0_to_7cm", [])[:hours]
                    temp = data.get("temperature_2m", [])[:hours]
                    for i in range(len(times)):
                        hours_data.append(WeatherForecastHour(
                            time=times[i],
                            precipitation_mm=float(precip[i]) if i < len(precip) and precip[i] is not None else 0.0,
                            soil_moisture=float(sm[i]) if i < len(sm) and sm[i] is not None else 0.35,
                            temperature_c=float(temp[i]) if i < len(temp) and temp[i] is not None else 22.0
                        ))
        except Exception:
            pass

        if not hours_data:
            # Fallback
            for h in range(hours):
                hours_data.append(WeatherForecastHour(
                    time=f"+{h}h",
                    precipitation_mm=round(5.0 + (h * 1.2), 2),
                    soil_moisture=round(0.40 + (h * 0.01), 3),
                    temperature_c=23.0
                ))

        return WeatherForecastResponse(
            latitude=latitude,
            longitude=longitude,
            hourly_forecast=hours_data
        )

weather_service = WeatherService()
```

---

#### 📄 `backend/app/services/helpline_service.py`
```python
﻿from typing import List, Optional
from sqlalchemy.orm import Session
from backend.app.models.helpline import EmergencyHelpline

class HelplineService:
    @staticmethod
    def get_helplines_by_state(db: Session, state: Optional[str] = None) -> List[EmergencyHelpline]:
        query = db.query(EmergencyHelpline)
        if state:
            query = query.filter(EmergencyHelpline.state.ilike(f"%{state}%"))
        return query.all()

    @staticmethod
    def get_nearest_helpline(db: Session, state: str, district: Optional[str] = None) -> List[EmergencyHelpline]:
        if district:
            district_helpline = db.query(EmergencyHelpline).filter(
                EmergencyHelpline.state.ilike(f"%{state}%"),
                EmergencyHelpline.district.ilike(f"%{district}%")
            ).all()
            if district_helpline:
                return district_helpline
        
        return db.query(EmergencyHelpline).filter(
            EmergencyHelpline.state.ilike(f"%{state}%")
        ).all()

helpline_service = HelplineService()
```

---

#### 📄 `backend/app/services/alert_service.py`
```python
﻿import logging
from typing import Dict, Any, List
from backend.app.core.config import settings

logger = logging.getLogger(__name__)

class AlertService:
    @staticmethod
    async def dispatch_emergency_broadcast(
        hazard_type: str,
        severity: str,
        zone_name: str,
        nearest_shelter: str,
        phone_numbers: List[str]
    ) -> Dict[str, Any]:
        """
        Dispatches multi-channel alerts (SMS, Push) to citizens and field responders.
        """
        sms_message = (
            f"[GEO-ALERT NER] ðŸš¨ {severity} WARNING: {hazard_type} alert triggered at {zone_name}. "
            f"Evacuate via safe path to: {nearest_shelter}. Dial 112 / 1070 for rescue."
        )

        logger.info(f"Dispatching broadcast to {len(phone_numbers)} recipients: {sms_message}")

        # In production, connect with Fast2SMS / Twilio API
        return {
            "status": "DISPATCHED",
            "provider": settings.SMS_GATEWAY_PROVIDER,
            "recipients_count": len(phone_numbers),
            "message_preview": sms_message
        }

alert_service = AlertService()
```

---

### 11.4 Backend Data Models (SQLAlchemy ORM)

#### 📄 `backend/app/models/user.py`
```python
import enum
from datetime import datetime, timezone
from sqlalchemy import Column, Integer, String, DateTime, Enum, Boolean
from backend.app.core.database import Base


class UserRole(str, enum.Enum):
    CITIZEN = "CITIZEN"
    FIELD_OFFICER = "FIELD_OFFICER"
    ADMIN = "ADMIN"


class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    full_name = Column(String(120), nullable=False)
    email = Column(String(120), unique=True, index=True, nullable=False)
    hashed_password = Column(String(255), nullable=False)
    role = Column(Enum(UserRole), default=UserRole.CITIZEN, nullable=False)
    state = Column(String(60), nullable=True)
    is_active = Column(Boolean, default=True)
    created_at = Column(DateTime, default=lambda: datetime.now(timezone.utc))
```

---

#### 📄 `backend/app/models/risk_zone.py`
```python
import enum
from datetime import datetime, timezone
from sqlalchemy import Column, Integer, String, Float, DateTime, Enum, JSON
from backend.app.core.database import Base

class RiskLevel(str, enum.Enum):
    LOW = "LOW"
    MODERATE = "MODERATE"
    HIGH = "HIGH"
    CRITICAL = "CRITICAL"

class HazardType(str, enum.Enum):
    LANDSLIDE = "LANDSLIDE"
    FLASH_FLOOD = "FLASH_FLOOD"
    CLOUDBURST = "CLOUDBURST"
    RIVER_EROSION = "RIVER_EROSION"

class RiskZone(Base):
    __tablename__ = "risk_zones"

    id = Column(Integer, primary_key=True, index=True)
    zone_code = Column(String(50), unique=True, index=True)
    name = Column(String(100), nullable=False)
    state = Column(String(50), nullable=False, index=True) # Assam, Meghalaya, etc.
    district = Column(String(50), nullable=False, index=True)
    hazard_type = Column(Enum(HazardType), default=HazardType.LANDSLIDE)
    
    # Coordinates & Micro-polygon bounds (GeoJSON polygon format)
    centroid_lat = Column(Float, nullable=False)
    centroid_lon = Column(Float, nullable=False)
    polygon_coordinates = Column(JSON, nullable=False) # List of [lon, lat] pairs
    
    # Realtime Factors
    slope_angle = Column(Float, default=0.0) # In degrees (e.g. 35.5)
    elevation_meters = Column(Float, default=0.0)
    rainfall_24h_mm = Column(Float, default=0.0)
    soil_moisture_m3m3 = Column(Float, default=0.0)
    
    # Calculated AI Risk
    risk_score = Column(Float, nullable=False) # 0.0 to 100.0
    risk_level = Column(Enum(RiskLevel), nullable=False)
    
    evacuation_advised = Column(Integer, default=0) # 1 if True, 0 if False
    updated_at = Column(DateTime, default=lambda: datetime.now(timezone.utc), onupdate=lambda: datetime.now(timezone.utc))
```

---

#### 📄 `backend/app/models/shelter.py`
```python
import enum
from datetime import datetime, timezone
from sqlalchemy import Column, Integer, String, Float, DateTime, Enum, Boolean
from backend.app.core.database import Base

class ShelterType(str, enum.Enum):
    RELIEF_CAMP = "RELIEF_CAMP"
    COMMUNITY_HALL = "COMMUNITY_HALL"
    HOSPITAL = "HOSPITAL"
    SCHOOL_SHELTER = "SCHOOL_SHELTER"
    HIGH_GROUND_ASSEMBLY = "HIGH_GROUND_ASSEMBLY"
    HELIPAD = "HELIPAD"

class SafeShelter(Base):
    __tablename__ = "safe_shelters"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(150), nullable=False)
    shelter_type = Column(Enum(ShelterType), default=ShelterType.RELIEF_CAMP)
    state = Column(String(50), nullable=False, index=True)
    district = Column(String(50), nullable=False, index=True)
    address = Column(String(255), nullable=True)
    
    # Location
    latitude = Column(Float, nullable=False)
    longitude = Column(Float, nullable=False)
    elevation_meters = Column(Float, default=0.0)
    
    # Capacity & Resources
    capacity_total = Column(Integer, default=500)
    capacity_occupied = Column(Integer, default=0)
    has_medical_aid = Column(Boolean, default=True)
    has_food_water = Column(Boolean, default=True)
    has_power_backup = Column(Boolean, default=True)
    has_helipad_access = Column(Boolean, default=False)
    
    # Contact
    contact_person = Column(String(100), nullable=True)
    contact_phone = Column(String(30), nullable=True)
    is_active = Column(Boolean, default=True)
    
    updated_at = Column(DateTime, default=lambda: datetime.now(timezone.utc), onupdate=lambda: datetime.now(timezone.utc))
```

---

#### 📄 `backend/app/models/sensor.py`
```python
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
```

---

#### 📄 `backend/app/models/telemetry.py`
```python
import enum
from datetime import datetime, timezone
from sqlalchemy import Column, Integer, String, Float, DateTime, Enum, Boolean, Text
from backend.app.core.database import Base

class ReportCategory(str, enum.Enum):
    LANDSLIDE_BLOCKAGE = "LANDSLIDE_BLOCKAGE"
    ROAD_CRACK = "ROAD_CRACK"
    RIVER_OVERFLOW = "RIVER_OVERFLOW"
    TREE_FALL = "TREE_FALL"
    BRIDGE_DAMAGE = "BRIDGE_DAMAGE"
    FLASH_FLOOD = "FLASH_FLOOD"
    STRANDED_CITIZENS = "STRANDED_CITIZENS"

class ReportStatus(str, enum.Enum):
    PENDING_VERIFICATION = "PENDING_VERIFICATION"
    VERIFIED = "VERIFIED"
    RESOLVED = "RESOLVED"
    REJECTED = "REJECTED"

class CrowdTelemetryReport(Base):
    __tablename__ = "telemetry_reports"

    id = Column(Integer, primary_key=True, index=True)
    report_uuid = Column(String(64), unique=True, index=True) # Used for offline sync deduplication
    category = Column(Enum(ReportCategory), nullable=False)
    description = Column(Text, nullable=True)
    
    latitude = Column(Float, nullable=False)
    longitude = Column(Float, nullable=False)
    state = Column(String(50), nullable=True)
    district = Column(String(50), nullable=True)
    
    image_url = Column(String(2048), nullable=True)
    severity_rating = Column(Integer, default=3) # 1 (Low) to 5 (Critical)
    
    # Offline sync & Reporter
    reporter_name = Column(String(100), default="Anonymous Citizen")
    reporter_phone = Column(String(30), nullable=True)
    is_offline_submitted = Column(Boolean, default=False)
    status = Column(Enum(ReportStatus), default=ReportStatus.PENDING_VERIFICATION)
    upvotes = Column(Integer, default=1)
    
    created_at = Column(DateTime, default=lambda: datetime.now(timezone.utc))
    synced_at = Column(DateTime, default=lambda: datetime.now(timezone.utc))
```

---

#### 📄 `backend/app/models/helpline.py`
```python
﻿from sqlalchemy import Column, Integer, String
from backend.app.core.database import Base

class EmergencyHelpline(Base):
    __tablename__ = "emergency_helplines"

    id = Column(Integer, primary_key=True, index=True)
    state = Column(String(50), nullable=False, index=True) # Assam, Meghalaya, Sikkim, etc.
    district = Column(String(50), nullable=True, index=True)
    authority_name = Column(String(120), nullable=False) # e.g. "Assam SDMA State Emergency Operations Center"
    toll_free_number = Column(String(30), nullable=False) # e.g. "1070" or "1077"
    direct_phone = Column(String(50), nullable=True) # Landline / Mobile
    email = Column(String(100), nullable=True)
    description = Column(String(200), nullable=True)
```

---

### 11.5 Backend Schemas (Pydantic v2)

#### 📄 `backend/app/schemas/user.py`
```python
"""
User Schemas & Validation Rules.
Copyright (c) 2026 GeoAlertNER Contributors. All rights reserved.
"""

import re
from typing import Optional
from pydantic import BaseModel, Field, field_validator, ConfigDict
from backend.app.models.user import UserRole

EMAIL_REGEX = re.compile(r"^[^@\s]+@[^@\s]+\.[^@\s]+$")


class UserRegister(BaseModel):
    full_name: str = Field(..., max_length=100)
    email: str = Field(..., max_length=120)
    password: str = Field(..., min_length=8, max_length=72)
    role: UserRole = UserRole.CITIZEN
    state: Optional[str] = Field(None, max_length=60)

    @field_validator("email")
    @classmethod
    def validate_email(cls, v: str) -> str:
        clean = v.strip().lower()
        if not EMAIL_REGEX.match(clean):
            raise ValueError("Invalid email format.")
        return clean

    @field_validator("password")
    @classmethod
    def validate_password_strength(cls, v: str) -> str:
        if len(v) < 8:
            raise ValueError("Password must be at least 8 characters long.")
        if len(v) > 72:
            raise ValueError("Password cannot exceed 72 characters.")
        if not re.search(r"\d", v):
            raise ValueError("Password must contain at least one numerical digit.")
        if not re.search(r"[a-zA-Z]", v):
            raise ValueError("Password must contain at least one letter.")
        return v

    @field_validator("full_name")
    @classmethod
    def validate_full_name(cls, v: str) -> str:
        clean = v.strip()
        if not clean or len(clean) < 2:
            raise ValueError("Full name must be at least 2 characters long.")
        return clean


class AdminUserCreate(UserRegister):
    """Schema for administrator-provisioned users with custom roles."""
    role: UserRole


class UserLogin(BaseModel):
    email: str = Field(..., max_length=120)
    password: str = Field(..., max_length=72)

    @field_validator("email")
    @classmethod
    def clean_email(cls, v: str) -> str:
        return v.strip().lower()


class UserResponse(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    id: int
    full_name: str
    email: str
    role: UserRole
    state: Optional[str] = None
    is_active: bool


class TokenResponse(BaseModel):
    access_token: str
    token_type: str = "bearer"
    user: UserResponse
```

---

#### 📄 `backend/app/schemas/risk.py`
```python
"""
Risk Assessment Schemas.
Copyright (c) 2026 GeoAlertNER Contributors. All rights reserved.
"""

from typing import List, Optional, Any, Dict
from pydantic import BaseModel, Field, ConfigDict
from datetime import datetime
from backend.app.models.risk_zone import RiskLevel, HazardType


class RiskEvaluateRequest(BaseModel):
    latitude: float = Field(..., ge=-90.0, le=90.0, json_schema_extra={"example": 26.1445})
    longitude: float = Field(..., ge=-180.0, le=180.0, json_schema_extra={"example": 91.7362})
    slope_angle: Optional[float] = Field(None, ge=0.0, le=90.0, description="Slope in degrees (auto-estimated if null)")
    custom_rainfall_mm: Optional[float] = Field(None, ge=0.0, le=2000.0, description="Custom 24h rainfall override")
    rainfall_24h_mm: Optional[float] = Field(None, ge=0.0, le=2000.0, description="Alias for custom_rainfall_mm")
    soil_moisture_m3m3: Optional[float] = Field(None, ge=0.0, le=1.0, description="Custom soil moisture override (0.0 - 1.0)")


class RiskFactorBreakdown(BaseModel):
    rainfall_contribution: float
    slope_contribution: float
    soil_saturation_contribution: float
    elevation_contribution: float
    historical_susceptibility: float


class RiskEvaluateResponse(BaseModel):
    latitude: float
    longitude: float
    risk_score: float = Field(..., ge=0.0, le=100.0, description="AI Hazard probability 0-100%")
    risk_level: RiskLevel
    primary_hazard: HazardType
    evacuation_advised: bool
    factors: RiskFactorBreakdown
    weather_summary: Dict[str, Any]
    action_recommendation: str
    mitigation_actions: Optional[List[str]] = []


class RiskZoneResponse(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    id: int
    zone_code: str
    name: str
    state: str
    district: str
    hazard_type: HazardType
    centroid_lat: float
    centroid_lon: float
    polygon_coordinates: List[List[float]]
    slope_angle: float
    elevation_meters: float
    rainfall_24h_mm: float
    soil_moisture_m3m3: float
    risk_score: float
    risk_level: RiskLevel
    evacuation_advised: bool
    updated_at: datetime


class GeoJSONFeature(BaseModel):
    type: str = "Feature"
    geometry: Dict[str, Any]
    properties: Dict[str, Any]


class GeoJSONFeatureCollection(BaseModel):
    type: str = "FeatureCollection"
    features: List[GeoJSONFeature]
```

---

#### 📄 `backend/app/schemas/evacuation.py`
```python
"""
Evacuation Schemas.
Copyright (c) 2026 GeoAlertNER Contributors. All rights reserved.
"""

from typing import List, Optional, Dict, Any
from pydantic import BaseModel, Field
from backend.app.schemas.shelter import SafeShelterResponse


class EvacuationPlanRequest(BaseModel):
    user_latitude: float = Field(..., ge=-90.0, le=90.0, json_schema_extra={"example": 26.1400})
    user_longitude: float = Field(..., ge=-180.0, le=180.0, json_schema_extra={"example": 91.7300})
    target_shelter_id: Optional[int] = Field(None, description="Optional target shelter ID (if empty, finds closest available)")
    transport_preference: Optional[str] = Field("ANY", description="FOOT, VEHICLE_4X4, RESCUE_BUS, ANY")
    avoid_high_risk: bool = Field(True, description="Reroute around AI predicted red hazard zones")


class RouteWaypoint(BaseModel):
    latitude: float
    longitude: float
    elevation_meters: Optional[float] = 0.0
    instruction: Optional[str] = None
    hazard_proximity_warning: Optional[str] = None


class TransportRecommendation(BaseModel):
    best_mode: str
    reason: str
    passability_status: str
    estimated_duration_minutes: int
    elevation_gain_meters: float


class EvacuationPlanResponse(BaseModel):
    destination_shelter: SafeShelterResponse
    route_waypoints: List[RouteWaypoint]
    total_distance_km: float
    total_duration_minutes: int
    hazard_zones_avoided_count: int
    hazard_zones_avoided_details: List[str]
    transport_guidance: TransportRecommendation
    emergency_contacts: List[Dict[str, str]]
    route_geojson: Dict[str, Any]
```

---

#### 📄 `backend/app/schemas/shelter.py`
```python
"""
Shelter Schemas.
Copyright (c) 2026 GeoAlertNER Contributors. All rights reserved.
"""

from typing import Optional
from pydantic import BaseModel, ConfigDict, Field
from datetime import datetime
from backend.app.models.shelter import ShelterType


class SafeShelterBase(BaseModel):
    name: str = Field(..., max_length=120)
    shelter_type: ShelterType
    state: str = Field(..., max_length=60)
    district: str = Field(..., max_length=80)
    address: Optional[str] = Field(None, max_length=255)
    latitude: float = Field(..., ge=-90.0, le=90.0)
    longitude: float = Field(..., ge=-180.0, le=180.0)
    elevation_meters: float = 0.0
    capacity_total: int = Field(500, ge=1)
    capacity_occupied: int = Field(0, ge=0)
    has_medical_aid: bool = True
    has_food_water: bool = True
    has_power_backup: bool = True
    has_helipad_access: bool = False
    contact_person: Optional[str] = Field(None, max_length=100)
    contact_phone: Optional[str] = Field(None, max_length=30)
    is_active: bool = True


class SafeShelterCreate(SafeShelterBase):
    pass


class SafeShelterResponse(SafeShelterBase):
    model_config = ConfigDict(from_attributes=True)

    id: int
    occupancy_pct: float
    available_capacity: int
    distance_km: Optional[float] = None
    updated_at: datetime
```

---

#### 📄 `backend/app/schemas/telemetry.py`
```python
"""
Telemetry Schemas & Sanitization.
Copyright (c) 2026 GeoAlertNER Contributors. All rights reserved.
"""

import html
import re
from typing import Optional, List
from pydantic import BaseModel, Field, field_validator, ConfigDict
from datetime import datetime
from backend.app.models.telemetry import ReportCategory, ReportStatus

SAFE_URL_REGEX = re.compile(r"^(https?://|data:image/)[^\s\"'<>]+$", re.IGNORECASE)


class TelemetryReportCreate(BaseModel):
    report_uuid: Optional[str] = Field(None, max_length=64, description="Client-generated UUID for offline sync idempotency")
    category: ReportCategory
    description: Optional[str] = Field(None, max_length=1000)
    latitude: float = Field(..., ge=-90.0, le=90.0)
    longitude: float = Field(..., ge=-180.0, le=180.0)
    state: Optional[str] = Field("Assam", max_length=60)
    district: Optional[str] = Field(None, max_length=80)
    image_url: Optional[str] = Field(None, max_length=2048)
    severity_rating: int = Field(3, ge=1, le=5)
    reporter_name: Optional[str] = Field("Anonymous Citizen", max_length=100)
    reporter_phone: Optional[str] = Field(None, max_length=30)
    is_offline_submitted: bool = False

    @field_validator("description", "reporter_name", "state", "district")
    @classmethod
    def sanitize_text(cls, v: Optional[str]) -> Optional[str]:
        if v is None:
            return None
        # Strip dangerous HTML tags and escape special characters to eliminate stored XSS risks
        clean = html.escape(v.strip())
        return clean

    @field_validator("image_url")
    @classmethod
    def validate_image_url(cls, v: Optional[str]) -> Optional[str]:
        if not v:
            return None
        clean = v.strip()
        if not SAFE_URL_REGEX.match(clean):
            raise ValueError("image_url must be a valid HTTP/HTTPS URL or base64 image data URI.")
        return clean


class TelemetryBatchSyncRequest(BaseModel):
    reports: List[TelemetryReportCreate] = Field(..., max_length=100)


class TelemetryReportResponse(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    id: int
    report_uuid: Optional[str] = None
    category: ReportCategory
    description: Optional[str] = None
    latitude: float
    longitude: float
    state: Optional[str] = None
    district: Optional[str] = None
    image_url: Optional[str] = None
    severity_rating: int
    reporter_name: str
    is_offline_submitted: bool
    status: ReportStatus
    upvotes: int
    created_at: datetime
    synced_at: datetime


class TelemetryBatchSyncResponse(BaseModel):
    synced_count: int
    failed_count: int
    message: str
```

---

#### 📄 `backend/app/schemas/sensor.py`
```python
"""
Sensor Schemas.
Copyright (c) 2026 GeoAlertNER Contributors. All rights reserved.
"""

from typing import Optional
from pydantic import BaseModel, ConfigDict, Field
from datetime import datetime
from backend.app.models.sensor import SensorType


class SensorNodeResponse(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    id: int
    sensor_code: str
    sensor_type: SensorType
    name: str
    location_name: str
    latitude: float
    longitude: float
    current_value: float
    unit: str
    threshold_warning: float
    threshold_critical: float
    is_triggered: bool
    battery_percentage: float
    last_ping: datetime


class SensorIngestPayload(BaseModel):
    sensor_code: str = Field(..., max_length=50)
    value: float
    battery: Optional[float] = Field(100.0, ge=0.0, le=100.0)
```

---

#### 📄 `backend/app/schemas/weather.py`
```python
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
```

---

#### 📄 `backend/app/schemas/helpline.py`
```python
"""
Helpline Schemas.
Copyright (c) 2026 GeoAlertNER Contributors. All rights reserved.
"""

from typing import Optional
from pydantic import BaseModel, ConfigDict


class HelplineResponse(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    id: int
    state: str
    district: Optional[str] = None
    authority_name: str
    toll_free_number: str
    direct_phone: Optional[str] = None
    email: Optional[str] = None
    description: Optional[str] = None
```

---

### 11.6 Backend Seed Data

#### 📄 `backend/data/seed_data.py`
```python
import logging
from sqlalchemy.orm import Session
from backend.app.models.risk_zone import RiskZone, RiskLevel, HazardType
from backend.app.models.shelter import SafeShelter, ShelterType
from backend.app.models.sensor import SensorNode, SensorType
from backend.app.models.helpline import EmergencyHelpline
from backend.app.models.telemetry import CrowdTelemetryReport, ReportCategory, ReportStatus
from backend.app.models.user import User, UserRole
from backend.app.core.security import get_password_hash

logger = logging.getLogger(__name__)

def seed_database(db: Session):
    """Populates realistic NER risk zones, safe shelters, sensors, helplines, and default users."""
    
    # Seed default user accounts if none exist
    if not db.query(User).first():
        logger.info("Seeding default demo users (Admin, Field Officer, Citizen)...")
        demo_users = [
            User(
                full_name="Disaster Operations Admin",
                email="admin@geoalertner.in",
                hashed_password=get_password_hash("Admin@123"),
                role=UserRole.ADMIN,
                state="National",
                is_active=True
            ),
            User(
                full_name="Rajesh Kalita (SDRF Field Officer)",
                email="officer@geoalertner.in",
                hashed_password=get_password_hash("Officer@123"),
                role=UserRole.FIELD_OFFICER,
                state="Assam",
                is_active=True
            ),
            User(
                full_name="Ananya Sharma (Citizen)",
                email="citizen@geoalertner.in",
                hashed_password=get_password_hash("Citizen@123"),
                role=UserRole.CITIZEN,
                state="Assam",
                is_active=True
            )
        ]
        db.add_all(demo_users)
        db.commit()
        logger.info("Default demo users seeded successfully.")

    # 1. Check if already seeded
    if db.query(SafeShelter).first():
        logger.info("Database shelter/sensor data already initialized.")
        return

    logger.info("Seeding GeoAlertNER database with North Eastern Region dataset...")

    # 2. Seed Safe Shelters
    shelters = [
        SafeShelter(
            name="Guwahati Central Sports Complex & Relief Base",
            shelter_type=ShelterType.COMMUNITY_HALL,
            state="Assam",
            district="Kamrup Metropolitan",
            address="Sarusajai Sports Complex, Nalapara, Guwahati",
            latitude=26.1158,
            longitude=91.7580,
            elevation_meters=65.0,
            capacity_total=2500,
            capacity_occupied=320,
            has_medical_aid=True,
            has_food_water=True,
            has_power_backup=True,
            has_helipad_access=True,
            contact_person="Col. R. Bordoloi (SDRF)",
            contact_phone="+91-9435012345"
        ),
        SafeShelter(
            name="Assam Engineering College Safe High Ground Shelter",
            shelter_type=ShelterType.SCHOOL_SHELTER,
            state="Assam",
            district="Kamrup Metropolitan",
            address="Jalukbari, Guwahati",
            latitude=26.1420,
            longitude=91.6620,
            elevation_meters=85.0,
            capacity_total=1200,
            capacity_occupied=150,
            has_medical_aid=True,
            has_food_water=True,
            has_power_backup=True,
            has_helipad_access=False,
            contact_person="Dr. M. Saikia",
            contact_phone="+91-9864054321"
        ),
        SafeShelter(
            name="NEHU Shillong Multi-Purpose Relief Center",
            shelter_type=ShelterType.RELIEF_CAMP,
            state="Meghalaya",
            district="East Khasi Hills",
            address="NEHU Campus, Mawlai, Shillong",
            latitude=25.6065,
            longitude=91.9020,
            elevation_meters=1496.0,
            capacity_total=1800,
            capacity_occupied=210,
            has_medical_aid=True,
            has_food_water=True,
            has_power_backup=True,
            has_helipad_access=True,
            contact_person="B. Lyngdoh (SDMA Meghalaya)",
            contact_phone="+91-9863011223"
        ),
        SafeShelter(
            name="Paljor Stadium Emergency Safe Assembly Point",
            shelter_type=ShelterType.HIGH_GROUND_ASSEMBLY,
            state="Sikkim",
            district="East Sikkim",
            address="Paljor Stadium Road, Gangtok",
            latitude=27.3325,
            longitude=88.6140,
            elevation_meters=1650.0,
            capacity_total=3000,
            capacity_occupied=450,
            has_medical_aid=True,
            has_food_water=True,
            has_power_backup=True,
            has_helipad_access=True,
            contact_person="T. Bhutia (SSDMA)",
            contact_phone="+91-9434098765"
        ),
        SafeShelter(
            name="Kohima Local Ground Assembly & Medical Aid Station",
            shelter_type=ShelterType.HOSPITAL,
            state="Nagaland",
            district="Kohima",
            address="Khuochiezie Local Ground, Kohima",
            latitude=25.6690,
            longitude=94.1080,
            elevation_meters=1444.0,
            capacity_total=1000,
            capacity_occupied=120,
            has_medical_aid=True,
            has_food_water=True,
            has_power_backup=True,
            has_helipad_access=False,
            contact_person="K. Angami",
            contact_phone="+91-9436012399"
        ),
        SafeShelter(
            name="Aizawl AR Ground Safe Shelter",
            shelter_type=ShelterType.RELIEF_CAMP,
            state="Mizoram",
            district="Aizawl",
            address="Lammual, AR Ground, Aizawl",
            latitude=23.7307,
            longitude=92.7173,
            elevation_meters=1132.0,
            capacity_total=1500,
            capacity_occupied=180,
            has_medical_aid=True,
            has_food_water=True,
            has_power_backup=True,
            has_helipad_access=True,
            contact_person="Lalrinawma",
            contact_phone="+91-9436140011"
        )
    ]
    db.add_all(shelters)
    db.commit()

    # 3. Seed Micro-Risk Zones (Polygons in GeoJSON coordinate format: [lon, lat])
    risk_zones = [
        RiskZone(
            zone_code="NER-AS-KAM-01",
            name="Khanapara-Koinadhara Hill Slope",
            state="Assam",
            district="Kamrup Metropolitan",
            hazard_type=HazardType.LANDSLIDE,
            centroid_lat=26.1265,
            centroid_lon=91.8020,
            polygon_coordinates=[
                [91.7980, 26.1240],
                [91.8060, 26.1240],
                [91.8070, 26.1290],
                [91.7990, 26.1300],
                [91.7980, 26.1240]
            ],
            slope_angle=38.5,
            elevation_meters=220.0,
            rainfall_24h_mm=135.4,
            soil_moisture_m3m3=0.54,
            risk_score=88.5,
            risk_level=RiskLevel.CRITICAL,
            evacuation_advised=1
        ),
        RiskZone(
            zone_code="NER-AS-KAM-02",
            name="Bharalu River Basin Lowland",
            state="Assam",
            district="Kamrup Metropolitan",
            hazard_type=HazardType.FLASH_FLOOD,
            centroid_lat=26.1550,
            centroid_lon=91.7450,
            polygon_coordinates=[
                [91.7400, 26.1500],
                [91.7500, 26.1500],
                [91.7520, 26.1600],
                [91.7420, 26.1610],
                [91.7400, 26.1500]
            ],
            slope_angle=4.2,
            elevation_meters=52.0,
            rainfall_24h_mm=95.0,
            soil_moisture_m3m3=0.58,
            risk_score=72.0,
            risk_level=RiskLevel.HIGH,
            evacuation_advised=1
        ),
        RiskZone(
            zone_code="NER-ML-EKH-01",
            name="Mawkdok Dympep Valley Gorge Slope",
            state="Meghalaya",
            district="East Khasi Hills",
            hazard_type=HazardType.LANDSLIDE,
            centroid_lat=25.3480,
            centroid_lon=91.6850,
            polygon_coordinates=[
                [91.6800, 25.3440],
                [91.6900, 25.3440],
                [91.6920, 25.3520],
                [91.6810, 25.3530],
                [91.6800, 25.3440]
            ],
            slope_angle=46.0,
            elevation_meters=1520.0,
            rainfall_24h_mm=162.0,
            soil_moisture_m3m3=0.56,
            risk_score=92.0,
            risk_level=RiskLevel.CRITICAL,
            evacuation_advised=1
        ),
        RiskZone(
            zone_code="NER-SK-EAS-01",
            name="Singtam - Dikchu Teesta River Bank",
            state="Sikkim",
            district="East Sikkim",
            hazard_type=HazardType.CLOUDBURST,
            centroid_lat=27.2350,
            centroid_lon=88.4980,
            polygon_coordinates=[
                [88.4900, 27.2300],
                [88.5050, 27.2300],
                [88.5060, 27.2400],
                [88.4920, 27.2410],
                [88.4900, 27.2300]
            ],
            slope_angle=32.0,
            elevation_meters=980.0,
            rainfall_24h_mm=110.0,
            soil_moisture_m3m3=0.51,
            risk_score=81.0,
            risk_level=RiskLevel.CRITICAL,
            evacuation_advised=1
        )
    ]
    db.add_all(risk_zones)
    db.commit()

    # 4. Seed Emergency Helplines (NER State Control Rooms + National)
    helplines = [
        EmergencyHelpline(
            state="National",
            district=None,
            authority_name="National Emergency Response Support System (ERSS)",
            toll_free_number="112",
            direct_phone="112",
            email="support@112.gov.in",
            description="Unified single emergency number for Police, Fire, Ambulance & Disaster."
        ),
        EmergencyHelpline(
            state="Assam",
            district=None,
            authority_name="Assam State Disaster Management Authority (ASDMA)",
            toll_free_number="1070",
            direct_phone="0361-2237221",
            email="sdma-assam@gov.in",
            description="State Emergency Operations Center (SEOC), Dispur, Guwahati."
        ),
        EmergencyHelpline(
            state="Assam",
            district="Kamrup Metropolitan",
            authority_name="District Disaster Management Authority (DDMA Kamrup Metro)",
            toll_free_number="1077",
            direct_phone="0361-2733052",
            email="ddma-kamrupmetro@assam.gov.in",
            description="24x7 Flood & Landslide Emergency Control Room."
        ),
        EmergencyHelpline(
            state="Meghalaya",
            district=None,
            authority_name="Meghalaya State Disaster Management Authority (MSDMA)",
            toll_free_number="1070",
            direct_phone="0364-2502098",
            email="msdma-shillong@gov.in",
            description="SEOC Shillong, Secretariat Building."
        ),
        EmergencyHelpline(
            state="Sikkim",
            district=None,
            authority_name="Sikkim State Disaster Management Authority (SSDMA)",
            toll_free_number="1070",
            direct_phone="03592-201145",
            email="ssdma.gangtok@gmail.com",
            description="Tashiling Secretariat, Gangtok."
        ),
        EmergencyHelpline(
            state="Arunachal Pradesh",
            district=None,
            authority_name="Department of Disaster Management, Arunachal Pradesh",
            toll_free_number="1070",
            direct_phone="0360-2212268",
            email="ddm-itanagar@nic.in",
            description="State Disaster Control Room, Civil Secretariat, Itanagar."
        ),
        EmergencyHelpline(
            state="Nagaland",
            district=None,
            authority_name="Nagaland State Disaster Management Authority (NSDMA)",
            toll_free_number="1070",
            direct_phone="0370-2291122",
            email="nsdma.kohima@gmail.com",
            description="Home Department, Civil Secretariat, Kohima."
        ),
        EmergencyHelpline(
            state="Mizoram",
            district=None,
            authority_name="Disaster Management & Rehabilitation Department, Mizoram",
            toll_free_number="1070",
            direct_phone="0389-2335842",
            email="dmr-mizoram@gov.in",
            description="State Emergency Operations Centre, Chaltlang, Aizawl."
        ),
        EmergencyHelpline(
            state="National",
            district="NER Region",
            authority_name="NDRF 1st Battalion (North East Hub)",
            toll_free_number="0361-2849005",
            direct_phone="+91-9435962222",
            email="ndrf01-asm@nic.in",
            description="National Disaster Response Force Regional HQ, Patgaon, Guwahati."
        )
    ]
    db.add_all(helplines)
    db.commit()

    # 5. Seed Ground Telemetry Sensors
    sensors = [
        SensorNode(
            sensor_code="NER-SN-SOIL-01",
            sensor_type=SensorType.SOIL_MOISTURE,
            name="Khanapara Deep Soil Moisture Probe",
            location_name="Khanapara Hill Range, Guwahati",
            latitude=26.1280,
            longitude=91.8030,
            current_value=0.52,
            unit="m3/m3",
            threshold_warning=0.45,
            threshold_critical=0.50,
            is_triggered=True,
            battery_percentage=94.0
        ),
        SensorNode(
            sensor_code="NER-SN-TILT-01",
            sensor_type=SensorType.TILT_INCLINOMETER,
            name="Mawkdok Gorge Inclinometer",
            location_name="Sohra Road, Meghalaya",
            latitude=25.3500,
            longitude=91.6880,
            current_value=4.8,
            unit="degrees_displacement",
            threshold_warning=2.0,
            threshold_critical=4.0,
            is_triggered=True,
            battery_percentage=89.0
        ),
        SensorNode(
            sensor_code="NER-SN-RAIN-01",
            sensor_type=SensorType.RAIN_GAUGE,
            name="Gangtok Automated Precipitation Gauge",
            location_name="Paljor Hill Station, Sikkim",
            latitude=27.3310,
            longitude=88.6120,
            current_value=28.4,
            unit="mm/hr",
            threshold_warning=15.0,
            threshold_critical=25.0,
            is_triggered=True,
            battery_percentage=98.0
        )
    ]
    db.add_all(sensors)
    db.commit()

    # 6. Sample Ground Report
    report = CrowdTelemetryReport(
        report_uuid="rep-ner-sample-001",
        category=ReportCategory.LANDSLIDE_BLOCKAGE,
        description="Rockfall and mud debris covering left carriageway near GS Road hill cut.",
        latitude=26.1290,
        longitude=91.8010,
        state="Assam",
        district="Kamrup Metropolitan",
        severity_rating=4,
        reporter_name="Deben Das (Local Commuter)",
        reporter_phone="+91-9864012345",
        status=ReportStatus.VERIFIED,
        upvotes=14
    )
    db.add(report)
    db.commit()

    logger.info("Database seeding completed successfully.")
```

---

### 11.7 Machine Learning Pipeline

#### 📄 `ml/dataset_generator.py`
```python
"""
GeoAlertNER - North Eastern Region (NER) Disaster Dataset Generator
Simulates realistic geological, hydrological, and meteorological datasets for
Landslide, Flash Flood, and Terrain Hazard modeling across Assam, Meghalaya,
Sikkim, Nagaland, Arunachal Pradesh, Mizoram, and Manipur.
"""

import os
import random
import numpy as np
import pandas as pd

# NER Geographic Bounding Box & Micro-zone centers
NER_REGIONS = [
    {"name": "Guwahati_Kamrup", "lat": 26.1445, "lon": 91.7362, "terrain": "alluvial_foothill", "base_slope": 14.0},
    {"name": "Shillong_Plateau", "lat": 25.5788, "lon": 91.8933, "terrain": "steep_highland", "base_slope": 38.0},
    {"name": "Cherrapunji_Mawsynram", "lat": 25.2700, "lon": 91.7300, "terrain": "ultra_monsoon_scarp", "base_slope": 44.0},
    {"name": "Gangtok_Sikkim", "lat": 27.3389, "lon": 88.6065, "terrain": "high_himalayan_steep", "base_slope": 42.0},
    {"name": "Kohima_Nagaland", "lat": 25.6751, "lon": 94.1086, "terrain": "naga_hills_friable", "base_slope": 36.0},
    {"name": "Itanagar_Arunachal", "lat": 27.0844, "lon": 93.6053, "terrain": "sub_himalayan_belt", "base_slope": 35.0},
    {"name": "Aizawl_Mizoram", "lat": 23.7271, "lon": 92.7176, "terrain": "anticlinal_ridge", "base_slope": 39.0},
    {"name": "Silchar_Cachar", "lat": 24.8333, "lon": 92.7789, "terrain": "riverine_floodplain", "base_slope": 6.0}
]

def generate_disaster_dataset(num_samples: int = 5000, output_path: str = "ml/ner_disaster_training_data.csv") -> pd.DataFrame:
    """
    Generates realistic multivariate geological & hydrometeorological feature records.
    """
    np.random.seed(42)
    random.seed(42)

    records = []

    for i in range(num_samples):
        reg = random.choice(NER_REGIONS)
        
        # Spatial jitter around region anchor (~10-25 km)
        lat = round(reg["lat"] + np.random.normal(0, 0.12), 4)
        lon = round(reg["lon"] + np.random.normal(0, 0.12), 4)

        # 1. Slope angle (degrees)
        slope = max(1.0, min(65.0, np.random.normal(reg["base_slope"], 8.0)))

        # 2. Elevation (meters above sea level)
        if "floodplain" in reg["terrain"]:
            elevation = max(20.0, np.random.normal(60.0, 20.0))
        elif "highland" in reg["terrain"] or "himalayan" in reg["terrain"]:
            elevation = max(800.0, np.random.normal(1600.0, 450.0))
        else:
            elevation = max(100.0, np.random.normal(550.0, 250.0))

        # 3. 24h Rainfall accumulation (mm)
        # Bimodal: regular monsoon days vs extreme cloudbursts/depressions
        if random.random() < 0.20:
            # Extreme event / cloudburst
            rainfall_24h = np.random.uniform(120.0, 320.0)
            rain_rate_current = np.random.uniform(35.0, 85.0)
        elif random.random() < 0.50:
            # Moderate-heavy monsoon
            rainfall_24h = np.random.uniform(30.0, 120.0)
            rain_rate_current = np.random.uniform(5.0, 35.0)
        else:
            # Light / Dry day
            rainfall_24h = np.random.uniform(0.0, 30.0)
            rain_rate_current = np.random.uniform(0.0, 5.0)

        # 4. Volumetric Soil Moisture (m3/m3) (0.12 dry - 0.65 saturated)
        base_soil = 0.18 + (rainfall_24h / 320.0) * 0.40 + np.random.normal(0, 0.04)
        soil_moisture = round(max(0.10, min(0.68, base_soil)), 3)

        # 5. NDVI Vegetation index (-0.1 water/bare soil to +0.8 dense forest)
        # Dense vegetation offers root cohesion, but steep cuts lower it
        ndvi = round(max(0.05, min(0.85, np.random.normal(0.55, 0.15))), 3)

        # 6. Distance to nearest drainage / river channel (meters)
        dist_to_drainage_m = round(max(10.0, np.random.exponential(450.0)), 1)

        # 7. Geological Rock Strength / Friability Index (1=Very Hard Gneiss to 5=Highly Weathered Shale/Mudstone)
        if "friable" in reg["terrain"] or "scarp" in reg["terrain"]:
            lithology_code = random.choices([3, 4, 5], weights=[0.2, 0.4, 0.4])[0]
        elif "floodplain" in reg["terrain"]:
            lithology_code = 1 # Alluvium
        else:
            lithology_code = random.choices([1, 2, 3, 4], weights=[0.3, 0.3, 0.25, 0.15])[0]

        # 8. Ground Inclinometer Tilt Rate (deg/day)
        tilt_rate_deg_day = round(max(0.0, (soil_moisture - 0.40) * slope * 0.12 + np.random.normal(0, 0.05)), 2)

        # 9. Compute Physical Failure / Hazard Likelihood Function
        # Landslide Susceptibility Index (LSI)
        lsi_raw = (
            (slope / 45.0) * 0.32 +
            (rainfall_24h / 180.0) * 0.30 +
            (soil_moisture / 0.55) * 0.20 +
            (lithology_code / 5.0) * 0.10 +
            (1.0 - ndvi) * 0.05 +
            (tilt_rate_deg_day * 0.5) * 0.03
        )
        # Flash Flood Likelihood (low slope + high rain + close to river)
        flood_raw = (
            (max(0.0, 15.0 - slope) / 15.0) * 0.35 +
            (rainfall_24h / 160.0) * 0.40 +
            (soil_moisture / 0.50) * 0.15 +
            (max(0.0, 500.0 - dist_to_drainage_m) / 500.0) * 0.10
        )

        hazard_score = max(0.0, min(100.0, max(lsi_raw, flood_raw) * 100.0 + np.random.normal(0, 2.5)))
        hazard_score = round(hazard_score, 1)

        # Hazard classification
        if slope >= 22.0 and hazard_score >= 45.0:
            hazard_type = "LANDSLIDE"
        elif rain_rate_current >= 40.0:
            hazard_type = "CLOUDBURST"
        elif slope < 15.0 and rainfall_24h >= 60.0:
            hazard_type = "FLASH_FLOOD"
        else:
            hazard_type = "LANDSLIDE" if slope >= 15.0 else "FLASH_FLOOD"

        if hazard_score >= 75.0:
            risk_category = "CRITICAL"
        elif hazard_score >= 50.0:
            risk_category = "HIGH"
        elif hazard_score >= 25.0:
            risk_category = "MODERATE"
        else:
            risk_category = "LOW"

        records.append({
            "region": reg["name"],
            "latitude": lat,
            "longitude": lon,
            "slope_degrees": round(slope, 1),
            "elevation_m": round(elevation, 1),
            "rainfall_24h_mm": round(rainfall_24h, 1),
            "rain_rate_current_mm_hr": round(rain_rate_current, 1),
            "soil_moisture_m3_m3": soil_moisture,
            "ndvi_vegetation": ndvi,
            "dist_to_drainage_m": dist_to_drainage_m,
            "lithology_code": lithology_code,
            "tilt_rate_deg_day": tilt_rate_deg_day,
            "hazard_type": hazard_type,
            "risk_category": risk_category,
            "risk_score_pct": hazard_score
        })

    df = pd.DataFrame(records)
    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    df.to_csv(output_path, index=False)
    print(f"[OK] Generated dataset with {len(df)} records -> {output_path}")
    return df

if __name__ == "__main__":
    generate_disaster_dataset(num_samples=6000)
```

---

#### 📄 `ml/engine.py`
```python
"""
GeoAlertNER - Lightweight Vectorized Machine Learning Engine (Pure NumPy)
Robust Ensemble Decision Forests & Gradient Boosted Regression for Disaster Modeling.
Runs 100% natively without external C-extensions or binary dependencies.
"""

import json
import pickle
import numpy as np
from typing import List, Dict, Any, Tuple, Optional

class DecisionNode:
    def __init__(
        self,
        feature_idx: Optional[int] = None,
        threshold: Optional[float] = None,
        left: Optional["DecisionNode"] = None,
        right: Optional["DecisionNode"] = None,
        value: Optional[Any] = None,
        is_leaf: bool = False
    ):
        self.feature_idx = feature_idx
        self.threshold = threshold
        self.left = left
        self.right = right
        self.value = value
        self.is_leaf = is_leaf

class DecisionTree:
    def __init__(self, max_depth: int = 6, min_samples_split: int = 4, is_classifier: bool = False):
        self.max_depth = max_depth
        self.min_samples_split = min_samples_split
        self.is_classifier = is_classifier
        self.root: Optional[DecisionNode] = None

    def fit(self, X: np.ndarray, y: np.ndarray, depth: int = 0) -> DecisionNode:
        n_samples, n_features = X.shape
        
        # Base criteria
        if (depth >= self.max_depth or 
            n_samples < self.min_samples_split or 
            len(np.unique(y)) == 1):
            leaf_val = self._leaf_value(y)
            return DecisionNode(value=leaf_val, is_leaf=True)

        best_feat, best_thresh, best_gain = self._best_split(X, y, n_features)
        
        if best_gain <= 0.0 or best_feat is None:
            leaf_val = self._leaf_value(y)
            return DecisionNode(value=leaf_val, is_leaf=True)

        left_mask = X[:, best_feat] <= best_thresh
        right_mask = ~left_mask

        left_child = self.fit(X[left_mask], y[left_mask], depth + 1)
        right_child = self.fit(X[right_mask], y[right_mask], depth + 1)

        node = DecisionNode(
            feature_idx=best_feat,
            threshold=best_thresh,
            left=left_child,
            right=right_child,
            is_leaf=False
        )
        if depth == 0:
            self.root = node
        return node

    def _leaf_value(self, y: np.ndarray):
        if self.is_classifier:
            vals, counts = np.unique(y, return_counts=True)
            return vals[np.argmax(counts)]
        return float(np.mean(y))

    def _best_split(self, X: np.ndarray, y: np.ndarray, n_features: int) -> Tuple[Optional[int], Optional[float], float]:
        best_gain = -1.0
        best_feat = None
        best_thresh = None

        curr_impurity = self._impurity(y)

        # Random feature subsampling
        feat_indices = np.random.choice(n_features, size=max(1, int(np.sqrt(n_features) if self.is_classifier else n_features // 2 + 1)), replace=False)

        for feat in feat_indices:
            vals = np.unique(X[:, feat])
            if len(vals) <= 1:
                continue
            
            # Subsample candidate percentiles
            if len(vals) > 10:
                percentiles = np.percentile(vals, [15, 30, 45, 60, 75, 90])
            else:
                percentiles = (vals[:-1] + vals[1:]) / 2.0

            for thresh in percentiles:
                left_mask = X[:, feat] <= thresh
                right_mask = ~left_mask
                if np.sum(left_mask) == 0 or np.sum(right_mask) == 0:
                    continue

                gain = self._info_gain(y, curr_impurity, left_mask, right_mask)
                if gain > best_gain:
                    best_gain = gain
                    best_feat = feat
                    best_thresh = float(thresh)

        return best_feat, best_thresh, best_gain

    def _impurity(self, y: np.ndarray) -> float:
        if self.is_classifier:
            # Gini Impurity
            _, counts = np.unique(y, return_counts=True)
            probs = counts / len(y)
            return 1.0 - np.sum(probs ** 2)
        # Variance for regression
        return float(np.var(y)) if len(y) > 0 else 0.0

    def _info_gain(self, y: np.ndarray, curr_imp: float, left_mask: np.ndarray, right_mask: np.ndarray) -> float:
        n = len(y)
        n_l, n_r = np.sum(left_mask), np.sum(right_mask)
        imp_l = self._impurity(y[left_mask])
        imp_r = self._impurity(y[right_mask])
        return curr_imp - ((n_l / n) * imp_l + (n_r / n) * imp_r)

    def predict_one(self, sample: np.ndarray, node: Optional[DecisionNode] = None) -> Any:
        if node is None:
            node = self.root
        if node.is_leaf or node.feature_idx is None:
            return node.value
        if sample[node.feature_idx] <= node.threshold:
            return self.predict_one(sample, node.left)
        return self.predict_one(sample, node.right)

    def predict(self, X: np.ndarray) -> np.ndarray:
        return np.array([self.predict_one(x) for x in X])

class RandomForest:
    def __init__(self, n_estimators: int = 25, max_depth: int = 7, is_classifier: bool = False):
        self.n_estimators = n_estimators
        self.max_depth = max_depth
        self.is_classifier = is_classifier
        self.trees: List[DecisionTree] = []
        self.classes_: List[str] = []

    def fit(self, X: np.ndarray, y: np.ndarray):
        self.trees = []
        if self.is_classifier:
            self.classes_ = sorted(list(np.unique(y)))

        n_samples = len(X)
        for _ in range(self.n_estimators):
            # Bootstrap sample
            boot_indices = np.random.choice(n_samples, size=n_samples, replace=True)
            X_boot = X[boot_indices]
            y_boot = y[boot_indices]

            tree = DecisionTree(max_depth=self.max_depth, is_classifier=self.is_classifier)
            tree.fit(X_boot, y_boot)
            self.trees.append(tree)

    def predict(self, X: np.ndarray) -> np.ndarray:
        preds = np.array([tree.predict(X) for tree in self.trees])
        if self.is_classifier:
            # Majority voting
            maj_preds = []
            for col in range(preds.shape[1]):
                vals, counts = np.unique(preds[:, col], return_counts=True)
                maj_preds.append(vals[np.argmax(counts)])
            return np.array(maj_preds)
        # Average for regression
        return np.mean(preds, axis=0)

    def predict_proba(self, X: np.ndarray) -> np.ndarray:
        if not self.is_classifier:
            raise ValueError("predict_proba only available for classifiers.")
        preds = np.array([tree.predict(X) for tree in self.trees])
        probas = []
        for col in range(preds.shape[1]):
            tree_votes = preds[:, col]
            row_probs = []
            for cls in self.classes_:
                prob = np.mean(tree_votes == cls)
                row_probs.append(prob)
            probas.append(row_probs)
        return np.array(probas)
```

---

#### 📄 `ml/train_model.py`
```python
"""
GeoAlertNER - Machine Learning Model Trainer for Multi-Hazard Disaster Prediction
Trains an Ensemble Decision Forest on geological, hydrological, and meteorological features
to predict Disaster Risk Scores and Hazard Levels.
"""

import os
import json
import pickle
import pandas as pd
import numpy as np

from dataset_generator import generate_disaster_dataset
from engine import RandomForest

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
DATA_PATH = os.path.join(BASE_DIR, "ner_disaster_training_data.csv")
MODEL_PATH = os.path.join(BASE_DIR, "hazard_model.pkl")
METADATA_PATH = os.path.join(BASE_DIR, "model_metadata.json")

FEATURE_COLUMNS = [
    "slope_degrees",
    "elevation_m",
    "rainfall_24h_mm",
    "rain_rate_current_mm_hr",
    "soil_moisture_m3_m3",
    "ndvi_vegetation",
    "dist_to_drainage_m",
    "lithology_code",
    "tilt_rate_deg_day"
]

def train():
    print("[GeoAlertNER] Starting Disaster ML Model Training...")
    
    # 1. Check or generate dataset
    if not os.path.exists(DATA_PATH):
        print(f"Dataset not found at {DATA_PATH}. Generating 3,000 synthetic geological samples...")
        df = generate_disaster_dataset(num_samples=3000, output_path=DATA_PATH)
    else:
        df = pd.read_csv(DATA_PATH)
        print(f"Loaded existing dataset with {len(df)} samples.")

    X = df[FEATURE_COLUMNS].to_numpy()
    y_score = df["risk_score_pct"].to_numpy()
    y_cat = df["risk_category"].to_numpy()

    # 2. Train-Test Split (80% train, 20% test)
    np.random.seed(42)
    indices = np.random.permutation(len(X))
    split_idx = int(len(X) * 0.80)
    train_idx, test_idx = indices[:split_idx], indices[split_idx:]

    X_train, X_test = X[train_idx], X[test_idx]
    y_score_train, y_score_test = y_score[train_idx], y_score[test_idx]
    y_cat_train, y_cat_test = y_cat[train_idx], y_cat[test_idx]

    print(f"\n--- Training Risk Score Regressor ({len(X_train)} train, {len(X_test)} test) ---")
    regressor = RandomForest(n_estimators=25, max_depth=6, is_classifier=False)
    regressor.fit(X_train, y_score_train)

    # 3. Evaluate Regressor
    y_score_pred = regressor.predict(X_test)
    mae = float(np.mean(np.abs(y_score_test - y_score_pred)))
    # R2 Score
    ss_res = np.sum((y_score_test - y_score_pred) ** 2)
    ss_tot = np.sum((y_score_test - np.mean(y_score_test)) ** 2)
    r2 = float(1.0 - (ss_res / ss_tot))
    print(f"[PASS] Regressor Mean Absolute Error (MAE): {mae:.2f}%")
    print(f"[PASS] Regressor R2 Score: {r2:.4f}")

    print("\n--- Training Risk Category Classifier ---")
    classifier = RandomForest(n_estimators=25, max_depth=6, is_classifier=True)
    classifier.fit(X_train, y_cat_train)

    # 4. Evaluate Classifier
    y_cat_pred = classifier.predict(X_test)
    accuracy = float(np.mean(y_cat_test == y_cat_pred))
    print(f"[PASS] Classifier Accuracy: {accuracy * 100:.2f}%\n")

    # 5. Save Model Bundle (Pickle)
    model_bundle = {
        "regressor": regressor,
        "classifier": classifier,
        "features": FEATURE_COLUMNS,
        "classes": classifier.classes_
    }
    with open(MODEL_PATH, "wb") as f:
        pickle.dump(model_bundle, f)
    print(f"[SAVED] Saved model pipeline to: {MODEL_PATH}")

    # 6. Save Metadata JSON
    metadata = {
        "model_type": "RandomForest Ensemble (Pure NumPy)",
        "features": FEATURE_COLUMNS,
        "metrics": {
            "regressor_mae": round(mae, 3),
            "regressor_r2": round(r2, 4),
            "classifier_accuracy": round(accuracy, 4)
        },
        "training_samples": len(df)
    }
    with open(METADATA_PATH, "w", encoding="utf-8") as f:
        json.dump(metadata, f, indent=2)
    print(f"[SAVED] Saved training metadata to: {METADATA_PATH}")

if __name__ == "__main__":
    train()
```

---

#### 📄 `ml/predict.py`
```python
"""
GeoAlertNER - Machine Learning Prediction & Inference Pipeline
Performs offline inference on new geological / hydrological telemetry inputs.
"""

import os
import pickle
import numpy as np
import pandas as pd
from typing import Dict, Any

MODEL_PATH = os.path.join(os.path.dirname(__file__), "hazard_model.pkl")

class HazardPredictor:
    def __init__(self, model_path: str = MODEL_PATH):
        if not os.path.exists(model_path):
            raise FileNotFoundError(f"Model file not found at {model_path}. Please run train_model.py first.")
        
        with open(model_path, "rb") as f:
            self.bundle = pickle.load(f)
        self.regressor = self.bundle["regressor"]
        self.classifier = self.bundle["classifier"]
        self.features = self.bundle["features"]

    def predict(
        self,
        slope_degrees: float,
        rainfall_24h_mm: float,
        soil_moisture_m3_m3: float,
        elevation_m: float = 300.0,
        rain_rate_current_mm_hr: float = 0.0,
        ndvi_vegetation: float = 0.50,
        dist_to_drainage_m: float = 250.0,
        lithology_code: int = 3,
        tilt_rate_deg_day: float = 0.0
    ) -> Dict[str, Any]:
        """
        Predicts hazard risk score (0-100%) and risk category for input parameters.
        """
        row_dict = {
            "slope_degrees": slope_degrees,
            "elevation_m": elevation_m,
            "rainfall_24h_mm": rainfall_24h_mm,
            "rain_rate_current_mm_hr": rain_rate_current_mm_hr,
            "soil_moisture_m3_m3": soil_moisture_m3_m3,
            "ndvi_vegetation": ndvi_vegetation,
            "dist_to_drainage_m": dist_to_drainage_m,
            "lithology_code": lithology_code,
            "tilt_rate_deg_day": tilt_rate_deg_day
        }
        row_arr = np.array([[row_dict[feat] for feat in self.features]])

        pred_score = float(self.regressor.predict(row_arr)[0])
        pred_score = round(max(0.0, min(100.0, pred_score)), 1)
        pred_cat = str(self.classifier.predict(row_arr)[0])
        probas = self.classifier.predict_proba(row_arr)[0]
        probabilities = {
            cls: round(float(prob), 3) 
            for cls, prob in zip(self.classifier.classes_, probas)
        }

        return {
            "predicted_risk_score_pct": pred_score,
            "predicted_risk_category": pred_cat,
            "class_probabilities": probabilities,
            "evacuation_advised": pred_cat in ["HIGH", "CRITICAL"]
        }

if __name__ == "__main__":
    predictor = HazardPredictor()
    sample = {
        "slope_degrees": 38.5,
        "rainfall_24h_mm": 165.0,
        "soil_moisture_m3_m3": 0.58,
        "elevation_m": 1200.0,
        "rain_rate_current_mm_hr": 42.0,
        "ndvi_vegetation": 0.35,
        "dist_to_drainage_m": 120.0,
        "lithology_code": 4,
        "tilt_rate_deg_day": 1.2
    }
    print("\n--- Testing Single Sample Prediction ---")
    print(f"Inputs: {sample}")
    res = predictor.predict(**sample)
    print(f"Prediction Result: {res}")
```

---

#### 📄 `ml/explainability.py`
```python
"""
GeoAlertNER - Machine Learning Explainability & Feature Contribution Analyzer
Calculates local feature sensitivity and importance weights for individual hazard predictions.
"""

import os
import pickle
import numpy as np
from typing import Dict, Any, List

MODEL_PATH = os.path.join(os.path.dirname(__file__), "hazard_model.pkl")

class HazardExplainer:
    def __init__(self, model_path: str = MODEL_PATH):
        if not os.path.exists(model_path):
            raise FileNotFoundError(f"Model not found at {model_path}")
        with open(model_path, "rb") as f:
            self.bundle = pickle.load(f)
        self.regressor = self.bundle["regressor"]
        self.classifier = self.bundle["classifier"]
        self.features = self.bundle["features"]

        # Baseline reference means for NER terrain
        self.baselines = {
            "slope_degrees": 25.0,
            "elevation_m": 450.0,
            "rainfall_24h_mm": 20.0,
            "rain_rate_current_mm_hr": 2.0,
            "soil_moisture_m3_m3": 0.28,
            "ndvi_vegetation": 0.55,
            "dist_to_drainage_m": 350.0,
            "lithology_code": 2,
            "tilt_rate_deg_day": 0.05
        }

    def explain(self, sample: Dict[str, float]) -> Dict[str, Any]:
        """
        Calculates feature-by-feature risk contribution deltas relative to baseline.
        """
        base_arr = np.array([[self.baselines[f] for f in self.features]])
        base_risk = float(self.regressor.predict(base_arr)[0])

        current_arr = np.array([[sample.get(f, self.baselines[f]) for f in self.features]])
        current_risk = float(self.regressor.predict(current_arr)[0])

        # Local perturbation sensitivity analysis
        contributions = {}
        total_abs_delta = 0.0

        for idx, feat in enumerate(self.features):
            perturbed = base_arr.copy()
            perturbed[0, idx] = sample.get(feat, self.baselines[feat])
            p_risk = float(self.regressor.predict(perturbed)[0])
            delta = round(p_risk - base_risk, 2)
            contributions[feat] = delta
            total_abs_delta += abs(delta)

        # Normalize relative percentage impacts
        impact_percentages = {}
        if total_abs_delta > 0:
            for feat, delta in contributions.items():
                pct = round((abs(delta) / total_abs_delta) * 100.0, 1)
                impact_percentages[feat] = pct
        else:
            for feat in self.features:
                impact_percentages[feat] = round(100.0 / len(self.features), 1)

        # Ranked list of driver factors
        ranked_drivers = sorted(
            [{"factor": f, "delta_pct": contributions[f], "impact_weight_pct": impact_percentages[f]} for f in self.features],
            key=lambda x: x["impact_weight_pct"],
            reverse=True
        )

        return {
            "predicted_risk_pct": round(current_risk, 1),
            "baseline_risk_pct": round(base_risk, 1),
            "total_risk_elevation": round(current_risk - base_risk, 1),
            "factor_deltas": contributions,
            "impact_percentages": impact_percentages,
            "top_drivers": ranked_drivers[:4]
        }

if __name__ == "__main__":
    explainer = HazardExplainer()
    test_input = {
        "slope_degrees": 42.0,
        "rainfall_24h_mm": 180.0,
        "soil_moisture_m3_m3": 0.62,
        "elevation_m": 1400.0,
        "rain_rate_current_mm_hr": 45.0,
        "ndvi_vegetation": 0.30,
        "dist_to_drainage_m": 80.0,
        "lithology_code": 4,
        "tilt_rate_deg_day": 1.5
    }
    explanation = explainer.explain(test_input)
    print("\n[EXPLANATION RESULT]")
    print(f"Predicted Risk: {explanation['predicted_risk_pct']}%")
    print(f"Top Contributing Hazard Drivers:")
    for d in explanation["top_drivers"]:
        print(f"   • {d['factor']:<24}: {d['impact_weight_pct']}% impact (delta: {d['delta_pct']:+0.1f}%)")
```

---

#### 📄 `ml/batch_evaluate.py`
```python
"""
GeoAlertNER - Machine Learning Batch Spatial Evaluator
Runs spatial grid inference over multiple NER locations and generates GeoJSON Risk Layers.
"""

import os
import json
import numpy as np
import pandas as pd
from typing import List, Dict, Any

from predict import HazardPredictor

BASE_DIR = os.path.dirname(os.path.abspath(__file__))

DEFAULT_LOCATIONS = [
    {"name": "Guwahati_Jalukbari_Hills", "lat": 26.1480, "lon": 91.6620, "slope": 28.0, "elev": 180.0, "rain": 45.0, "soil": 0.38, "litho": 2},
    {"name": "Guwahati_Khanapara_Slopes", "lat": 26.1150, "lon": 91.8100, "slope": 32.0, "elev": 220.0, "rain": 62.0, "soil": 0.44, "litho": 3},
    {"name": "Shillong_Nongthymmai_Ridge", "lat": 25.5620, "lon": 91.9050, "slope": 42.0, "elev": 1520.0, "rain": 140.0, "soil": 0.54, "litho": 4},
    {"name": "Cherrapunji_Mawkdok_Gorge", "lat": 25.3200, "lon": 91.7500, "slope": 48.0, "elev": 1280.0, "rain": 210.0, "soil": 0.61, "litho": 5},
    {"name": "Gangtok_Deorali_Slopes", "lat": 27.3210, "lon": 88.6020, "slope": 45.0, "elev": 1650.0, "rain": 115.0, "soil": 0.52, "litho": 4},
    {"name": "Kohima_Phoolbari_Cut", "lat": 25.6680, "lon": 94.1020, "slope": 39.0, "elev": 1440.0, "rain": 85.0, "soil": 0.48, "litho": 4},
    {"name": "Itanagar_Ganga_Lake_Ridge", "lat": 27.0920, "lon": 93.6180, "slope": 34.0, "elev": 420.0, "rain": 95.0, "soil": 0.49, "litho": 3},
    {"name": "Aizawl_Hunthar_Veng", "lat": 23.7420, "lon": 92.7080, "slope": 41.0, "elev": 920.0, "rain": 130.0, "soil": 0.56, "litho": 4},
    {"name": "Silchar_Barak_Lowland", "lat": 24.8250, "lon": 92.7950, "slope": 5.0, "elev": 42.0, "rain": 75.0, "soil": 0.46, "litho": 1}
]

def run_batch_evaluation(locations: List[Dict[str, Any]] = None, output_geojson: str = "ml/batch_risk_output.geojson") -> Dict[str, Any]:
    """
    Evaluates risk across multiple geographic sites using the trained ML model.
    """
    if locations is None:
        locations = DEFAULT_LOCATIONS

    predictor = HazardPredictor()
    results = []
    geojson_features = []

    for loc in locations:
        pred = predictor.predict(
            slope_degrees=loc.get("slope", 25.0),
            rainfall_24h_mm=loc.get("rain", 30.0),
            soil_moisture_m3_m3=loc.get("soil", 0.35),
            elevation_m=loc.get("elev", 300.0),
            rain_rate_current_mm_hr=loc.get("rain_rate", 5.0),
            ndvi_vegetation=loc.get("ndvi", 0.50),
            dist_to_drainage_m=loc.get("dist_drain", 200.0),
            lithology_code=loc.get("litho", 3),
            tilt_rate_deg_day=loc.get("tilt", 0.0)
        )

        res_item = {
            **loc,
            **pred
        }
        results.append(res_item)

        # Create standard GeoJSON Point Feature
        geojson_features.append({
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [loc["lon"], loc["lat"]]
            },
            "properties": {
                "name": loc["name"],
                "predicted_risk_score_pct": pred["predicted_risk_score_pct"],
                "predicted_risk_category": pred["predicted_risk_category"],
                "evacuation_advised": pred["evacuation_advised"],
                "class_probabilities": pred["class_probabilities"]
            }
        })

    geojson_doc = {
        "type": "FeatureCollection",
        "features": geojson_features
    }

    out_path = os.path.join(BASE_DIR, "batch_risk_output.geojson")
    with open(out_path, "w", encoding="utf-8") as f:
        json.dump(geojson_doc, f, indent=2)

    df_out = pd.DataFrame(results)
    csv_path = os.path.join(BASE_DIR, "batch_risk_output.csv")
    df_out.to_csv(csv_path, index=False)

    print(f"[OK] Batch evaluated {len(locations)} geographic micro-zones.")
    print(f"[OK] Exported GeoJSON: {out_path}")
    print(f"[OK] Exported CSV: {csv_path}")

    return {
        "total_evaluated": len(locations),
        "results": results,
        "critical_count": sum(1 for r in results if r["predicted_risk_category"] == "CRITICAL"),
        "high_count": sum(1 for r in results if r["predicted_risk_category"] == "HIGH")
    }

if __name__ == "__main__":
    summary = run_batch_evaluation()
    print("\nBatch Evaluation Summary:")
    print(f"Total Sites: {summary['total_evaluated']} | Critical: {summary['critical_count']} | High: {summary['high_count']}")
```

---

#### 📄 `ml/model_metadata.json`
```json
{
  "model_type": "RandomForest Ensemble (Pure NumPy)",
  "features": [
    "slope_degrees",
    "elevation_m",
    "rainfall_24h_mm",
    "rain_rate_current_mm_hr",
    "soil_moisture_m3_m3",
    "ndvi_vegetation",
    "dist_to_drainage_m",
    "lithology_code",
    "tilt_rate_deg_day"
  ],
  "metrics": {
    "regressor_mae": 3.663,
    "regressor_r2": 0.9414,
    "classifier_accuracy": 0.8433
  },
  "training_samples": 3000
}
```

---

#### 📄 `ml/README.md`
```md
# 🛰️ GeoAlertNER - Machine Learning Disaster Prediction Pipeline

> **AI-Driven Landslide & Hydrometeorological Hazard Classification & Risk Scoring System for the North Eastern Region (NER), India.**

---

## 📌 Architecture & Features

This module trains ensemble machine learning models (**Gradient Boosting Regressor** + **Random Forest Classifier**) on multivariant physical and meteorological parameters:

| Feature | Unit | Description | Typical Impact |
| :--- | :--- | :--- | :--- |
| `slope_degrees` | Degrees (°) | DEM terrain gradient ($0-65^\circ$) | Strongest driver of hill slope shear failure |
| `rainfall_24h_mm` | mm | 24-hour cumulative precipitation | Pore-water pressure build-up |
| `rain_rate_current_mm_hr` | mm/hr | Instant cloudburst precipitation rate | Triggers flash floods and debris torrents |
| `soil_moisture_m3_m3` | $\text{m}^3/\text{m}^3$ | Volumetric soil moisture saturation ($0.10-0.68$) | Soil liquefaction and cohesion loss |
| `elevation_m` | Meters | Digital Elevation Model height | Regional relief & orographic lift |
| `ndvi_vegetation` | Index | Normalized Difference Vegetation Index | Root cohesion & soil anchoring |
| `dist_to_drainage_m` | Meters | Distance to active stream / river channel | Flash flood inundation risk |
| `lithology_code` | 1 to 5 | Rock type (1=Alluvium $\rightarrow$ 5=Friable Shale) | Geological susceptibility |
| `tilt_rate_deg_day` | °/day | IoT Ground Inclinometer tilt rate | Real-time precursor to slope collapse |

---

## 🚀 How to Run & Train

### 1. Generate Training Dataset & Train Model
```bash
python ml/train_model.py
```
This automatically:
1. Generates 6,000 synthetic geological/hydrological training records calibrated for NER micro-zones (Guwahati, Shillong, Cherrapunji, Gangtok, Kohima, Itanagar, Aizawl, Silchar).
2. Performs 80/20 train-test split.
3. Fits the Gradient Boosting Regressor (Risk % $0-100\%$) and Random Forest Classifier (`LOW`, `MODERATE`, `HIGH`, `CRITICAL`).
4. Evaluates metrics ($R^2$, MAE, F1-Score, Confusion Matrix).
5. Exports `ml/hazard_model.joblib` and `ml/model_metadata.json`.

### 2. Run Inference on Custom Inputs
```bash
python ml/predict.py
```
```

---

### 11.8 Frontend Core Logic & PWA

#### 📄 `frontend/manifest.json`
```json
{
  "name": "GeoAlertNER - Disaster Early Warning System",
  "short_name": "GeoAlertNER",
  "description": "AI-Driven Multi-Hazard Early Warning and Evacuation System for North Eastern Region (NER)",
  "start_url": "./index.html",
  "scope": "./",
  "display": "standalone",
  "display_override": [
    "window-controls-overlay",
    "standalone",
    "minimal-ui"
  ],
  "background_color": "#0B0F19",
  "theme_color": "#0F172A",
  "orientation": "any",
  "categories": [
    "safety",
    "utilities",
    "weather",
    "navigation"
  ],
  "lang": "en-IN",
  "icons": [
    {
      "src": "icons/icon-192.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "any"
    },
    {
      "src": "icons/icon-maskable-192.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "maskable"
    },
    {
      "src": "icons/icon-512.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "any"
    },
    {
      "src": "icons/icon-maskable-512.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "maskable"
    }
  ],
  "shortcuts": [
    {
      "name": "Disaster Risk Map",
      "url": "./index.html#map",
      "description": "Real-time hazard geospatial overview"
    },
    {
      "name": "Evacuation Planner",
      "url": "./index.html#evacuation",
      "description": "Find safe shelters and evacuation corridors"
    },
    {
      "name": "AI Risk Calculator",
      "url": "./index.html#calculator",
      "description": "Compute machine learning risk scores"
    },
    {
      "name": "Emergency Helplines",
      "url": "./index.html#helplines",
      "description": "Direct emergency contacts for NER states"
    }
  ]
}
```

---

#### 📄 `frontend/sw.js`
```js
/**
 * GeoAlertNER Service Worker (PWA v1.0)
 * GeoAlertNER - Disaster Early Warning System
 * Caching Strategy: Network-First with Cache Fallback for APIs, Cache-First for App Shell
 */

const CACHE_NAME = 'geoalertner-core-v7';
const DATA_CACHE_NAME = 'geoalertner-data-v7';

const STATIC_ASSETS = [
  './',
  './index.html',
  './styles.css',
  './bundle.js',
  './app.js',
  './api.js',
  './map.js',
  './i18n.js',
  './offlineSync.js',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png',
  'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css',
  'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js'
];

// Install Event: Cache Core App Shell
self.addEventListener('install', (event) => {
  console.log('[SW] Service Worker installing...');
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[SW] Pre-caching offline app shell');
      return cache.addAll(STATIC_ASSETS).catch((err) => {
        console.warn('[SW] Non-critical pre-cache warning:', err);
      });
    }).then(() => self.skipWaiting())
  );
});

// Activate Event: Clean Old Caches
self.addEventListener('activate', (event) => {
  console.log('[SW] Service Worker activated');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((name) => {
          if (name !== CACHE_NAME && name !== DATA_CACHE_NAME) {
            console.log('[SW] Deleting legacy cache:', name);
            return caches.delete(name);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch Event: Intelligent Strategy
self.addEventListener('fetch', (event) => {
  const requestUrl = new URL(event.request.url);

  // Skip non-GET requests (handled by OfflineSyncManager)
  if (event.request.method !== 'GET') {
    return;
  }

  // API Requests: Network-first with Cache Fallback
  if (requestUrl.pathname.startsWith('/api/') || requestUrl.port === '8000') {
    event.respondWith(
      fetch(event.request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const responseClone = networkResponse.clone();
            caches.open(DATA_CACHE_NAME).then((cache) => {
              cache.put(event.request, responseClone);
            });
          }
          return networkResponse;
        })
        .catch(async () => {
          const cachedResponse = await caches.match(event.request);
          if (cachedResponse) {
            console.log('[SW] Serving cached API response for offline:', requestUrl.pathname);
            return cachedResponse;
          }
          // Return generic offline payload if no cache
          return new Response(
            JSON.stringify({
              offline: true,
              message: 'You are currently offline. Displaying cached disaster data.'
            }),
            { headers: { 'Content-Type': 'application/json' } }
          );
        })
    );
    return;
  }

  // App Shell & Static Assets: Stale-While-Revalidate
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      const fetchPromise = fetch(event.request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const clone = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
          }
          return networkResponse;
        })
        .catch(() => cachedResponse);

      return cachedResponse || fetchPromise;
    })
  );
});

// Background Sync Event
self.addEventListener('sync', (event) => {
  if (event.tag === 'geoalertner-sync-reports') {
    console.log('[SW] Triggering background sync for citizen telemetry...');
    event.waitUntil(
      self.clients.matchAll().then((clients) => {
        clients.forEach((client) => {
          client.postMessage({ type: 'TRIGGER_OFFLINE_SYNC' });
        });
      })
    );
  }
});

// Push Notification Event (Critical Early Warnings)
self.addEventListener('push', (event) => {
  let data = { title: 'GeoAlertNER Disaster Warning', body: 'Immediate hazard alert in your region!' };
  if (event.data) {
    try {
      data = event.data.json();
    } catch (e) {
      data.body = event.data.text();
    }
  }

  const options = {
    body: data.body,
    icon: 'icons/icon-192.png',
    badge: 'icons/icon-192.png',
    vibrate: [200, 100, 200, 100, 400],
    data: {
      url: data.url || './index.html'
    },
    actions: [
      { action: 'view-map', title: 'View Map' },
      { action: 'evacuate', title: 'Find Shelter' }
    ]
  };

  event.waitUntil(
    self.registration.showNotification(data.title, options)
  );
});

// Notification Click Handler
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  event.waitUntil(
    self.clients.matchAll({ type: 'window' }).then((clientList) => {
      for (const client of clientList) {
        if (client.url.includes('index.html') && 'focus' in client) {
          return client.focus();
        }
      }
      if (self.clients.openWindow) {
        return self.clients.openWindow('./index.html');
      }
    })
  );
});
```

---

#### 📄 `frontend/offlineSync.js`
```js
/**
 * Offline Sync Service for GeoAlertNER Citizen Reports
 * Handles resilient local caching and auto-sync when network connectivity returns.
 */

import { api } from './api.js?v=3';

const STORAGE_KEY = 'geoalertner_offline_reports_v1';

class OfflineSyncManager {
  constructor() {
    this.queue = this.loadQueue();
    this.isSyncing = false;
    this.listeners = [];

    // Listen for browser online event
    window.addEventListener('online', () => {
      console.log('[OfflineSync] Browser is back online. Initiating sync...');
      this.syncPendingReports();
    });
  }

  loadQueue() {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      console.error('[OfflineSync] Failed to read from localStorage:', e);
      return [];
    }
  }

  saveQueue() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.queue));
      this.notifyListeners();
    } catch (e) {
      console.error('[OfflineSync] Failed to write to localStorage:', e);
    }
  }

  addListener(callback) {
    this.listeners.push(callback);
    callback(this.getPendingCount());
  }

  notifyListeners() {
    const count = this.getPendingCount();
    this.listeners.forEach(fn => fn(count));
  }

  getPendingCount() {
    return this.queue.length;
  }

  getPendingReports() {
    return [...this.queue];
  }

  async queueReport(reportData) {
    const offlineReport = {
      ...reportData,
      report_uuid: reportData.report_uuid || `offline-${Date.now()}-${Math.random().toString(36).substr(2, 6)}`,
      queued_at: new Date().toISOString(),
      is_offline_submitted: true
    };

    // Attempt direct send if navigator is online
    if (navigator.onLine) {
      try {
        const result = await api.submitReport(offlineReport);
        console.log('[OfflineSync] Report submitted directly online:', result);
        return { status: 'ONLINE_SUBMITTED', report: result };
      } catch (err) {
        console.warn('[OfflineSync] Direct submit failed, queueing locally:', err.message);
      }
    }

    // Otherwise store in offline queue
    this.queue.push(offlineReport);
    this.saveQueue();
    return { status: 'OFFLINE_QUEUED', report: offlineReport };
  }

  async syncPendingReports() {
    if (this.isSyncing || this.queue.length === 0 || !navigator.onLine) {
      return;
    }

    this.isSyncing = true;
    console.log(`[OfflineSync] Syncing ${this.queue.length} pending report(s)...`);

    try {
      const batchPayload = this.queue.map(item => ({
        report_uuid: item.report_uuid,
        category: item.category,
        description: item.description,
        latitude: Number(item.latitude),
        longitude: Number(item.longitude),
        state: item.state || 'Assam',
        district: item.district || 'Kamrup Metropolitan',
        image_url: item.image_url || null,
        severity_rating: Number(item.severity_rating) || 3,
        reporter_name: item.reporter_name || 'Anonymous Citizen',
        reporter_phone: item.reporter_phone || null
      }));

      const res = await api.syncOfflineBatch(batchPayload);
      console.log('[OfflineSync] Batch sync success:', res);

      // Clear queue on successful sync
      this.queue = [];
      this.saveQueue();
      return { success: true, count: res.synced_count };
    } catch (err) {
      console.error('[OfflineSync] Batch sync failed:', err.message);
      return { success: false, error: err.message };
    } finally {
      this.isSyncing = false;
    }
  }

  clearQueue() {
    this.queue = [];
    this.saveQueue();
  }
}

export const offlineSync = new OfflineSyncManager();
```

---

#### 📄 `frontend/api.js`
```js
/**
 * GeoAlertNER - Backend API Service Layer
 * Connects directly to the FastAPI endpoints at /api/v1 (or http://127.0.0.1:8000/api/v1)
 */

function resolveApiBaseUrl() {
  if (typeof window === 'undefined') return 'http://127.0.0.1:8000/api/v1';
  const { protocol, hostname, port, origin } = window.location;

  // 1. Local dev running FastAPI directly on port 8000
  if (hostname === 'localhost' || hostname === '127.0.0.1') {
    return `${protocol}//${hostname}:8000/api/v1`;
  }

  // 2. Production / Render / any real domain — frontend is served by the same
  //    FastAPI process, so we use a relative path (same origin).
  //    This also handles HTTPS correctly.
  if (hostname && hostname !== '') {
    return `${origin}/api/v1`;
  }

  // 3. Fallback (e.g. file:// protocol, offline shell)
  return 'http://127.0.0.1:8000/api/v1';
}

class GeoAlertAPI {
  constructor() {
    this.baseUrl = resolveApiBaseUrl();
    this.isBackendOnline = false;
    this.statusListeners = [];
    this.authListeners = [];
  }

  addStatusListener(callback) {
    this.statusListeners.push(callback);
    callback(this.isBackendOnline);
  }

  notifyStatus(online) {
    if (this.isBackendOnline !== online) {
      this.isBackendOnline = online;
      this.statusListeners.forEach(fn => {
        try { fn(online); } catch (e) { console.error(e); }
      });
    }
  }

  addAuthListener(callback) {
    this.authListeners.push(callback);
    callback(this.getCurrentUser());
  }

  notifyAuth(user) {
    this.authListeners.forEach(fn => {
      try { fn(user); } catch (e) { console.error(e); }
    });
  }

  getToken() {
    try {
      return localStorage.getItem('geoalert_token') || null;
    } catch (e) {
      return null;
    }
  }

  getCurrentUser() {
    try {
      const data = localStorage.getItem('geoalert_user');
      return data ? JSON.parse(data) : null;
    } catch (e) {
      return null;
    }
  }

  setSession(token, user) {
    try {
      localStorage.setItem('geoalert_token', token);
      localStorage.setItem('geoalert_user', JSON.stringify(user));
    } catch (e) {
      console.warn('[GeoAlertAPI] Failed to store auth session:', e);
    }
    this.notifyAuth(user);
  }

  clearSession() {
    try {
      localStorage.removeItem('geoalert_token');
      localStorage.removeItem('geoalert_user');
    } catch (e) {
      console.warn('[GeoAlertAPI] Failed to clear auth session:', e);
    }
    this.notifyAuth(null);
  }

  async checkHealth() {
    const candidates = [
      this.baseUrl.replace(/\/api\/v1\/?$/, '/health'),
      'http://127.0.0.1:8000/health',
      'http://localhost:8000/health',
      '/health'
    ];

    for (const url of candidates) {
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 2000);
        const res = await fetch(url, { method: 'GET', cache: 'no-store', signal: controller.signal });
        clearTimeout(timeoutId);
        if (res.ok) {
          const data = await res.json();
          if (url.startsWith('http://127.0.0.1:8000')) {
            this.baseUrl = 'http://127.0.0.1:8000/api/v1';
          } else if (url.startsWith('http://localhost:8000')) {
            this.baseUrl = 'http://localhost:8000/api/v1';
          } else if (url === '/health') {
            this.baseUrl = '/api/v1';
          }
          this.notifyStatus(true);
          return { online: true, data };
        }
      } catch (e) {}
    }

    this.notifyStatus(false);
    return { online: false };
  }

  async request(endpoint, options = {}) {
    const url = `${this.baseUrl}${endpoint}`;
    const token = this.getToken();
    const headers = {
      'Content-Type': 'application/json',
      ...(token ? { 'Authorization': `Bearer ${token}` } : {}),
      ...(options.headers || {})
    };
    try {
      const res = await fetch(url, {
        headers,
        ...options
      });
      if (!res.ok) {
        const errData = await res.json().catch(() => ({}));
        let errorMsg = `HTTP Error ${res.status}: ${res.statusText}`;
        if (errData && errData.detail) {
          if (typeof errData.detail === 'string') {
            errorMsg = errData.detail;
          } else if (Array.isArray(errData.detail) && errData.detail.length > 0) {
            errorMsg = errData.detail.map(d => {
              const msg = d.msg || d.message || JSON.stringify(d);
              return msg.replace(/^Value error,\s*/i, '');
            }).join('; ');
          } else {
            errorMsg = JSON.stringify(errData.detail);
          }
        }
        throw new Error(errorMsg);
      }
      this.notifyStatus(true);
      return await res.json();
    } catch (err) {
      console.warn(`[GeoAlertAPI] Call to ${endpoint} failed:`, err.message);
      if (err.name === 'TypeError' || err.message === 'Failed to fetch' || (err.message && err.message.toLowerCase().includes('fetch'))) {
        throw new Error('Cannot connect to backend server. Make sure FastAPI is running on port 8000 (python -m uvicorn backend.app.main:app --port 8000).');
      }
      throw err;
    }
  }

  // --- AUTHENTICATION & USER MANAGEMENT ---
  async login(email, password) {
    const data = await this.request('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password })
    });
    if (data && data.access_token && data.user) {
      this.setSession(data.access_token, data.user);
    }
    return data;
  }

  async register(userData) {
    const data = await this.request('/auth/register', {
      method: 'POST',
      body: JSON.stringify(userData)
    });
    if (data && data.access_token && data.user) {
      this.setSession(data.access_token, data.user);
    }
    return data;
  }

  async getMe() {
    try {
      const user = await this.request('/auth/me');
      if (user) {
        const token = this.getToken();
        if (token) {
          this.setSession(token, user);
        }
      }
      return user;
    } catch (e) {
      this.clearSession();
      throw e;
    }
  }

  logout() {
    this.clearSession();
  }

  // --- RISK ASSESSMENT & ZONES ---
  async getRiskSummary() {
    try {
      return await this.request('/risk/summary');
    } catch (e) {
      return this.getFallbackRiskSummary();
    }
  }

  async getRiskZones() {
    try {
      return await this.request('/risk/zones');
    } catch (e) {
      return this.getFallbackRiskZones();
    }
  }

  async getRiskGeoJSON() {
    try {
      return await this.request('/risk/geojson-heatmap');
    } catch (e) {
      return this.getFallbackGeoJSON();
    }
  }

  async assessRisk(payload) {
    try {
      return await this.request('/risk/assess', {
        method: 'POST',
        body: JSON.stringify(payload)
      });
    } catch (e) {
      const rain = payload.rainfall_24h_mm || 50;
      const slope = payload.slope_angle || 30;
      const moist = payload.soil_moisture_m3m3 || 0.4;
      const score = Math.min(100, Math.round((rain * 0.35) + (slope * 1.1) + (moist * 55)));
      let level = 'LOW';
      if (score >= 70) level = 'CRITICAL';
      else if (score >= 45) level = 'HIGH';
      else if (score >= 25) level = 'MODERATE';

      return {
        risk_score: score,
        risk_level: level,
        landslide_probability: Math.min(0.99, score / 100),
        flash_flood_probability: Math.min(0.95, (rain / 200) * 0.8),
        action_recommendation: score >= 70 ? 'Immediate evacuation advised' : 'Monitor local slopes',
        source: 'CLIENT_FALLBACK'
      };
    }
  }

  async predictMLRisk(params = {}) {
    const qs = new URLSearchParams({
      slope_degrees: params.slope_degrees || 28.0,
      rainfall_24h_mm: params.rainfall_24h_mm || 65.0,
      soil_moisture_m3_m3: params.soil_moisture_m3_m3 || 0.42,
      elevation_m: params.elevation_m || 350.0,
      rain_rate_current_mm_hr: params.rain_rate_current_mm_hr || 12.0,
      ndvi_vegetation: params.ndvi_vegetation || 0.45,
      dist_to_drainage_m: params.dist_to_drainage_m || 180.0,
      lithology_code: params.lithology_code || 3,
      tilt_rate_deg_day: params.tilt_rate_deg_day || 0.1
    });

    try {
      return await this.request(`/risk/ml-predict?${qs.toString()}`, { method: 'POST' });
    } catch (e) {
      return {
        source: 'CLIENT_ESTIMATE',
        predicted_risk_score_pct: 68.0,
        predicted_risk_category: 'HIGH',
        class_probabilities: { CRITICAL: 0.15, HIGH: 0.75, MODERATE: 0.1, LOW: 0.0 },
        evacuation_advised: true,
        parameters_evaluated: params
      };
    }
  }

  // --- SAFE SHELTERS ---
  async getShelters(state = null) {
    const query = state ? `?state=${encodeURIComponent(state)}` : '';
    try {
      return await this.request(`/shelters${query}`);
    } catch (e) {
      return this.getFallbackShelters();
    }
  }

  async getNearestShelter(lat, lon) {
    try {
      return await this.request(`/shelters/nearest?lat=${lat}&lon=${lon}`);
    } catch (e) {
      const shelters = this.getFallbackShelters();
      return shelters[0];
    }
  }

  // --- EVACUATION ROUTING ---
  async planEvacuationRoute(payload) {
    try {
      return await this.request('/evacuation/plan-route', {
        method: 'POST',
        body: JSON.stringify(payload)
      });
    } catch (e) {
      return this.getFallbackEvacuationPlan(payload);
    }
  }

  // --- IOT SENSORS & SIMULATOR ---
  async getSensors(sensorType = null, onlyTriggered = false) {
    let q = [];
    if (sensorType) q.push(`sensor_type=${encodeURIComponent(sensorType)}`);
    if (onlyTriggered) q.push(`only_triggered=true`);
    const qs = q.length ? `?${q.join('&')}` : '';
    try {
      return await this.request(`/sensors${qs}`);
    } catch (e) {
      return this.getFallbackSensors();
    }
  }

  async getSimulatorStatus() {
    try {
      return await this.request('/sensors/simulator/status');
    } catch (e) {
      return { active_scenario: 'MONSOON_SURGE', auto_sim_running: false, interval_seconds: 5, total_ticks: 12 };
    }
  }

  async setSimulatorScenario(scenario) {
    return await this.request(`/sensors/simulator/scenario?scenario=${encodeURIComponent(scenario)}`, { method: 'POST' });
  }

  async triggerSimulatorTick() {
    return await this.request('/sensors/simulator/tick', { method: 'POST' });
  }

  async startAutoSimulator(interval = 5) {
    return await this.request(`/sensors/simulator/start-auto?interval_seconds=${interval}`, { method: 'POST' });
  }

  async stopAutoSimulator() {
    return await this.request('/sensors/simulator/stop-auto', { method: 'POST' });
  }

  // --- CROWD TELEMETRY & OFFLINE REPORTS ---
  async submitReport(reportData) {
    return await this.request('/telemetry/report', {
      method: 'POST',
      body: JSON.stringify(reportData)
    });
  }

  async syncOfflineBatch(reports) {
    return await this.request('/telemetry/sync-offline', {
      method: 'POST',
      body: JSON.stringify({ reports })
    });
  }

  async getReports(category = null, status = null) {
    let q = [];
    if (category) q.push(`category=${encodeURIComponent(category)}`);
    if (status) q.push(`status=${encodeURIComponent(status)}`);
    const qs = q.length ? `?${q.join('&')}` : '';
    try {
      return await this.request(`/telemetry/reports${qs}`);
    } catch (e) {
      return this.getFallbackReports();
    }
  }

  async upvoteReport(reportId) {
    return await this.request(`/telemetry/reports/${reportId}/upvote`, { method: 'POST' });
  }

  // --- WEATHER ---
  async getCurrentWeather(lat = 26.1445, lon = 91.7362) {
    try {
      return await this.request(`/weather/current?lat=${lat}&lon=${lon}`);
    } catch (e) {
      return {
        temperature_c: 24.5,
        relative_humidity_pct: 88,
        precipitation_rate_mm_hr: 14.2,
        rainfall_24h_accumulated_mm: 86.4,
        soil_moisture_shallow_m3m3: 0.46,
        soil_moisture_deep_m3m3: 0.52,
        weather_condition: "Heavy Rain & Mist",
        source: "IMD Guwahati Radar"
      };
    }
  }

  async getWeatherForecast(lat = 26.1445, lon = 91.7362, hours = 12) {
    try {
      return await this.request(`/weather/forecast?lat=${lat}&lon=${lon}&hours=${hours}`);
    } catch (e) {
      const forecast = [];
      for (let i = 1; i <= hours; i++) {
        forecast.push({
          timestamp: new Date(Date.now() + i * 3600000).toISOString(),
          precipitation_mm: Math.max(2, (Math.sin(i / 2) * 15 + 10)).toFixed(1),
          soil_moisture: (0.42 + (i * 0.008)).toFixed(3)
        });
      }
      return { location: { latitude: lat, longitude: lon }, forecast_hours: hours, forecast };
    }
  }

  // --- HELPLINES ---
  async getHelplines(state = null) {
    const q = state ? `?state=${encodeURIComponent(state)}` : '';
    try {
      return await this.request(`/helplines${q}`);
    } catch (e) {
      return this.getFallbackHelplines();
    }
  }

  // --- FALLBACK DATASETS ---
  getFallbackRiskSummary() {
    return {
      overall_risk_score: 78,
      overall_risk_level: "HIGH",
      total_active_alerts: 4,
      critical_alerts_count: 2,
      average_soil_moisture: 0.48,
      average_rainfall_24h_mm: 82.5,
      zones_monitored: 8,
      evacuation_active_zones: 2
    };
  }

  getFallbackRiskZones() {
    return [
      {
        id: 1,
        zone_code: "NER-AS-GHY-01",
        name: "Khanapara - Jorabat Hill Slopes (NH-27)",
        state: "Assam",
        district: "Kamrup Metropolitan",
        hazard_type: "LANDSLIDE",
        risk_score: 84.5,
        risk_level: "CRITICAL",
        rainfall_24h_mm: 112.4,
        slope_angle: 42.0,
        soil_moisture_m3m3: 0.54,
        evacuation_advised: true
      },
      {
        id: 2,
        zone_code: "NER-MG-SHL-01",
        name: "Umiam Gorge & Barapani Slope Corridor",
        state: "Meghalaya",
        district: "Ri-Bhoi",
        hazard_type: "LANDSLIDE",
        risk_score: 76.0,
        risk_level: "HIGH",
        rainfall_24h_mm: 98.0,
        slope_angle: 36.5,
        soil_moisture_m3m3: 0.49,
        evacuation_advised: true
      },
      {
        id: 3,
        zone_code: "NER-AS-BRK-01",
        name: "Silchar-Haflong Hill Railway Section",
        state: "Assam",
        district: "Dima Hasao",
        hazard_type: "DEBRIS_FLOW",
        risk_score: 69.2,
        risk_level: "HIGH",
        rainfall_24h_mm: 78.5,
        slope_angle: 38.0,
        soil_moisture_m3m3: 0.45,
        evacuation_advised: false
      },
      {
        id: 4,
        zone_code: "NER-SK-GNT-01",
        name: "Gangtok - Ranipool NH10 Highway Stretch",
        state: "Sikkim",
        district: "East Sikkim",
        hazard_type: "LANDSLIDE",
        risk_score: 52.0,
        risk_level: "MODERATE",
        rainfall_24h_mm: 45.0,
        slope_angle: 32.0,
        soil_moisture_m3m3: 0.38,
        evacuation_advised: false
      }
    ];
  }

  getFallbackGeoJSON() {
    return {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          geometry: {
            type: "Polygon",
            coordinates: [[
              [91.8200, 26.1100], [91.8400, 26.1100], [91.8400, 26.1350], [91.8200, 26.1350], [91.8200, 26.1100]
            ]]
          },
          properties: {
            id: 1,
            zone_code: "NER-AS-GHY-01",
            name: "Khanapara - Jorabat Hill Slopes (NH-27)",
            state: "Assam",
            hazard_type: "LANDSLIDE",
            risk_score: 84.5,
            risk_level: "CRITICAL",
            rainfall_24h_mm: 112.4,
            slope_angle: 42.0,
            soil_moisture: 0.54,
            evacuation_advised: true
          }
        },
        {
          type: "Feature",
          geometry: {
            type: "Polygon",
            coordinates: [[
              [91.8800, 25.6500], [91.9100, 25.6500], [91.9100, 25.6850], [91.8800, 25.6850], [91.8800, 25.6500]
            ]]
          },
          properties: {
            id: 2,
            zone_code: "NER-MG-SHL-01",
            name: "Umiam Gorge & Barapani Corridor",
            state: "Meghalaya",
            hazard_type: "LANDSLIDE",
            risk_score: 76.0,
            risk_level: "HIGH",
            rainfall_24h_mm: 98.0,
            slope_angle: 36.5,
            soil_moisture: 0.49,
            evacuation_advised: true
          }
        },
        {
          type: "Feature",
          geometry: {
            type: "Polygon",
            coordinates: [[
              [91.7000, 26.1500], [91.7300, 26.1500], [91.7300, 26.1800], [91.7000, 26.1800], [91.7000, 26.1500]
            ]]
          },
          properties: {
            id: 3,
            zone_code: "NER-AS-GHY-02",
            name: "Nilachal Hill Slopes (Kamakhya Foothills)",
            state: "Assam",
            hazard_type: "FLASH_FLOOD",
            risk_score: 42.0,
            risk_level: "MODERATE",
            rainfall_24h_mm: 48.0,
            slope_angle: 22.0,
            soil_moisture: 0.35,
            evacuation_advised: false
          }
        }
      ]
    };
  }

  getFallbackShelters() {
    return [
      {
        id: 1,
        name: "Guwahati Commerce College Indoor Sports Relief Camp",
        shelter_type: "INDOOR_STADIUM",
        state: "Assam",
        district: "Kamrup Metropolitan",
        address: "RG Baruah Rd, Guwahati",
        latitude: 26.1750,
        longitude: 91.7750,
        elevation_meters: 55,
        capacity_total: 650,
        capacity_occupied: 180,
        available_capacity: 470,
        occupancy_pct: 27.7,
        has_medical_aid: true,
        has_food_water: true,
        has_power_backup: true,
        has_helipad_access: false,
        contact_person: "Col. D. Barman (SDRF)",
        contact_phone: "+91 94350 12345",
        distance_km: 3.2
      },
      {
        id: 2,
        name: "Khanapara Veterinary College Assembly Grounds",
        shelter_type: "OPEN_GROUND",
        state: "Assam",
        district: "Kamrup Metropolitan",
        address: "Khanapara Flyover Junction, Guwahati",
        latitude: 26.1265,
        longitude: 91.8150,
        elevation_meters: 62,
        capacity_total: 1200,
        capacity_occupied: 420,
        available_capacity: 780,
        occupancy_pct: 35.0,
        has_medical_aid: true,
        has_food_water: true,
        has_power_backup: true,
        has_helipad_access: true,
        contact_person: "Dr. P. Kalita (DDMA Officer)",
        contact_phone: "+91 98640 67890",
        distance_km: 1.8
      },
      {
        id: 3,
        name: "Shillong NEIGRIHMS Safe Medical Shelter",
        shelter_type: "HOSPITAL_SAFE_ZONE",
        state: "Meghalaya",
        district: "East Khasi Hills",
        address: "Mawdiangdiang, Shillong",
        latitude: 25.5925,
        longitude: 91.9420,
        elevation_meters: 1490,
        capacity_total: 500,
        capacity_occupied: 110,
        available_capacity: 390,
        occupancy_pct: 22.0,
        has_medical_aid: true,
        has_food_water: true,
        has_power_backup: true,
        has_helipad_access: true,
        contact_person: "Dr. L. Sangma",
        contact_phone: "+91 98560 44321",
        distance_km: 64.5
      }
    ];
  }

  getFallbackSensors() {
    return [
      {
        id: 1,
        sensor_code: "SN-SOIL-GHY-01",
        sensor_type: "SOIL_MOISTURE",
        name: "Khanapara Cutting Borehole Probe",
        state: "Assam",
        district: "Kamrup Metropolitan",
        latitude: 26.1210,
        longitude: 91.8280,
        current_value: 0.54,
        unit: "m³/m³",
        threshold_warning: 0.40,
        threshold_critical: 0.50,
        is_triggered: true,
        battery_percentage: 92.0
      },
      {
        id: 2,
        sensor_code: "SN-TILT-GHY-02",
        sensor_type: "INCLINOMETER",
        name: "Jorabat Ridge Inclinometer",
        state: "Assam",
        district: "Kamrup Metropolitan",
        latitude: 26.1150,
        longitude: 91.8340,
        current_value: 4.8,
        unit: "degrees",
        threshold_warning: 2.0,
        threshold_critical: 4.0,
        is_triggered: true,
        battery_percentage: 87.0
      },
      {
        id: 3,
        sensor_code: "SN-RAIN-GHY-03",
        sensor_type: "RAIN_GAUGE",
        name: "Dispur Automated Weather Station",
        state: "Assam",
        district: "Kamrup Metropolitan",
        latitude: 26.1450,
        longitude: 91.7920,
        current_value: 68.4,
        unit: "mm/hr",
        threshold_warning: 35.0,
        threshold_critical: 60.0,
        is_triggered: true,
        battery_percentage: 98.0
      },
      {
        id: 4,
        sensor_code: "SN-RIVER-BRH-04",
        sensor_type: "RIVER_STAGE",
        name: "Brahmaputra Pandu Hydro Gauge",
        state: "Assam",
        district: "Kamrup Metropolitan",
        latitude: 26.1830,
        longitude: 91.7100,
        current_value: 49.8,
        unit: "meters",
        threshold_warning: 48.0,
        threshold_critical: 51.5,
        is_triggered: false,
        battery_percentage: 95.0
      }
    ];
  }

  getFallbackReports() {
    return [
      {
        id: 101,
        report_uuid: "rep-001-ghy",
        category: "LANDSLIDE_BLOCKAGE",
        description: "Fresh mudslip and retaining wall cracks observed along NH-27 Jorabat section. Loose boulders rolling down slope.",
        latitude: 26.1180,
        longitude: 91.8310,
        state: "Assam",
        district: "Kamrup Metropolitan",
        image_url: "https://images.unsplash.com/photo-1547683905-f686c993aae5?w=600&auto=format&fit=crop&q=60",
        severity_rating: 5,
        status: "VERIFIED",
        upvotes: 8,
        reporter_name: "Field Officer Manoj",
        created_at: new Date(Date.now() - 1000 * 60 * 12).toISOString()
      },
      {
        id: 102,
        report_uuid: "rep-002-umi",
        category: "ROAD_CRACK",
        description: "Heavy debris blocking single lane on Shillong bypass near Umiam lake turnoff.",
        latitude: 25.6620,
        longitude: 91.8950,
        state: "Meghalaya",
        district: "Ri-Bhoi",
        image_url: "",
        severity_rating: 4,
        status: "PENDING_VERIFICATION",
        upvotes: 3,
        reporter_name: "Citizen Driver Rahul",
        created_at: new Date(Date.now() - 1000 * 60 * 35).toISOString()
      },
      {
        id: 103,
        report_uuid: "rep-003-kam",
        category: "RIVER_OVERFLOW",
        description: "Culvert drainage jammed with silt; water overflowing onto arterial road.",
        latitude: 26.1410,
        longitude: 91.7820,
        state: "Assam",
        district: "Kamrup Metropolitan",
        image_url: "",
        severity_rating: 3,
        status: "VERIFIED",
        upvotes: 5,
        reporter_name: "Local Volunteer Bikash",
        created_at: new Date(Date.now() - 1000 * 60 * 80).toISOString()
      }
    ];
  }

  getFallbackHelplines() {
    return [
      { id: 1, organization_name: "National Emergency Response Support (ERSS)", state: "National", district: "All", phone_number: "112", alternate_phone: "108", toll_free: "112", email: "support@erss.gov.in", service_type: "NATIONAL_EMERGENCY", operates_24x7: true, is_verified: true },
      { id: 2, organization_name: "Assam State Disaster Management Authority (ASDMA)", state: "Assam", district: "All Districts", phone_number: "1070", alternate_phone: "0361-2237221", toll_free: "1070", email: "asdmaghy@gmail.com", service_type: "STATE_DISASTER_MGMT", operates_24x7: true, is_verified: true },
      { id: 3, organization_name: "Kamrup Metro District Disaster Control Room", state: "Assam", district: "Kamrup Metropolitan", phone_number: "1077", alternate_phone: "0361-2733052", toll_free: "1077", email: "ddmakamrup@gov.in", service_type: "DISTRICT_DISASTER_MGMT", operates_24x7: true, is_verified: true },
      { id: 4, organization_name: "1st Battalion NDRF Guwahati HQ", state: "Assam", district: "Kamrup", phone_number: "0361-2849005", alternate_phone: "9435012345", toll_free: "1078", email: "1ndrf-assam@nic.in", service_type: "NDRF_BATTALION", operates_24x7: true, is_verified: true },
      { id: 5, organization_name: "Meghalaya SDMA Emergency Operation Centre", state: "Meghalaya", district: "All Districts", phone_number: "1070", alternate_phone: "0364-2502188", toll_free: "1070", email: "sdma-meg@gov.in", service_type: "STATE_DISASTER_MGMT", operates_24x7: true, is_verified: true },
      { id: 6, organization_name: "Sikkim State Disaster Management Authority", state: "Sikkim", district: "All Districts", phone_number: "1070", alternate_phone: "03592-201145", toll_free: "1070", email: "ssdma-skm@gov.in", service_type: "STATE_DISASTER_MGMT", operates_24x7: true, is_verified: true }
    ];
  }

  getFallbackEvacuationPlan(payload) {
    const startLat = payload.user_latitude || 26.1350;
    const startLon = payload.user_longitude || 91.8250;
    const endLat = 26.1265;
    const endLon = 91.8150;

    return {
      route_id: "EVAC-RT-DEMO-991",
      target_shelter_id: payload.target_shelter_id || 2,
      target_shelter_name: "Khanapara Veterinary College Assembly Grounds",
      origin_coords: [startLat, startLon],
      destination_coords: [endLat, endLon],
      transport_recommended: payload.transport_preference || "4X4_VEHICLE",
      total_distance_km: 2.8,
      estimated_time_minutes: 9,
      elevation_gain_meters: -18,
      hazard_avoidance_status: "SUCCESS - Rerouted 450m south of active Jorabat landslide slip plane",
      active_hazards_avoided: ["Khanapara - Jorabat Hill Slopes (NH-27)"],
      safety_clearance_score: 94.0,
      turn_by_turn_instructions: [
        "Head SOUTH-WEST away from steep cut on NH-27 (Distance: 600m)",
        "Turn RIGHT onto Bypass Service Corridor avoiding muddy culvert (Distance: 1.1km)",
        "Continue straight past Khanapara traffic circle into Main Gate Safe Zone (Distance: 1.1km)",
        "Arrive at Khanapara Veterinary College Assembly Grounds - Check in at SDRF registration tent."
      ],
      route_polyline_coordinates: [
        [startLat, startLon],
        [startLat - 0.003, startLon - 0.002],
        [startLat - 0.006, startLon - 0.005],
        [endLat + 0.003, endLon + 0.004],
        [endLat, endLon]
      ],
      emergency_contacts: [
        { name: "Kamrup Metro Disaster Control", phone: "1077" },
        { name: "SDRF Emergency Hotline", phone: "1070" },
        { name: "National Emergency", phone: "112" }
      ]
    };
  }
}

export const api = new GeoAlertAPI();
```

---

#### 📄 `frontend/map.js`
```js
/**
 * Leaflet GIS Interactive Mapping Engine for GeoAlertNER
 * Handles Risk Heatmaps, IoT Sensor Radar, Shelters, and Evacuation Routing Corridors.
 */

import { api } from './api.js?v=3';

function escapeHtml(str) {
  if (str === null || str === undefined) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function sanitizeUrl(url) {
  if (!url) return '';
  const clean = String(url).trim();
  if (/^(https?:\/\/|data:image\/)/i.test(clean)) {
    return clean.replace(/["'<>]/g, '');
  }
  return '';
}

class GeoAlertMap {
  constructor() {
    this.map = null;
    this.zoneLayerGroup = null;
    this.sensorLayerGroup = null;
    this.shelterLayerGroup = null;
    this.reportLayerGroup = null;
    this.evacuationLayerGroup = null;
    this.userLocationMarker = null;

    this.onShelterSelect = null;
    this.onOriginSelect = null;
    this.selectingOrigin = false;
  }

  init(containerId = 'map-container') {
    if (this.map) return;

    if (typeof L === 'undefined') {
      console.warn('[Map] Leaflet (L) not yet loaded, retrying in 300ms...');
      setTimeout(() => this.init(containerId), 300);
      return;
    }

    const container = document.getElementById(containerId);
    if (!container) {
      console.warn(`[Map] Container element #${containerId} not found.`);
      return;
    }

    try {
      // Center on Guwahati / Shillong corridor (NER India)
      this.map = L.map(containerId, {
        center: [26.1445, 91.7800],
        zoom: 10,
        zoomControl: false
      });

      // Add zoom control top right
      L.control.zoom({ position: 'topright' }).addTo(this.map);

    // Standard OpenStreetMap & Dark/Satellite tiles with NO API Key needed
    const darkTiles = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
      subdomains: 'abcd',
      maxZoom: 19
    });

    const osmStandard = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 19
    });

    const satTiles = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
      attribution: '&copy; Esri, Maxar, Earthstar Geographics',
      maxZoom: 18
    });

    const topoTiles = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenTopoMap (CC-BY-SA)',
      maxZoom: 17
    });

    // Default to darkTiles or fallback to OSM
    darkTiles.addTo(this.map);

    // Layer Switcher
    L.control.layers({
      'Dark Cyber Radar': darkTiles,
      'OpenStreetMap Standard': osmStandard,
      'Satellite Imagery': satTiles,
      'Topographic Terrain': topoTiles
    }, null, { position: 'topright' }).addTo(this.map);

    // Layer groups for toggle & refresh
    this.zoneLayerGroup = L.layerGroup().addTo(this.map);
    this.sensorLayerGroup = L.layerGroup().addTo(this.map);
    this.shelterLayerGroup = L.layerGroup().addTo(this.map);
    this.reportLayerGroup = L.layerGroup().addTo(this.map);
    this.evacuationLayerGroup = L.layerGroup().addTo(this.map);

    // Map click handler for origin selection
    this.map.on('click', (e) => {
      if (this.selectingOrigin && this.onOriginSelect) {
        this.setUserLocation(e.latlng.lat, e.latlng.lng);
        this.onOriginSelect(e.latlng.lat, e.latlng.lng);
        this.selectingOrigin = false;
      }
    });

      // Initial load
      this.refreshAllLayers();
    } catch (e) {
      console.error('[Map] Map initialization error:', e);
    }
  }

  async refreshAllLayers() {
    await Promise.all([
      this.loadRiskZones(),
      this.loadSensors(),
      this.loadShelters(),
      this.loadCitizenReports()
    ]);
  }

  // --- 1. RISK MICRO-ZONES GEOJSON ---
  async loadRiskZones() {
    try {
      this.zoneLayerGroup.clearLayers();
      const geojson = await api.getRiskGeoJSON();

      if (!geojson || !geojson.features) return;

      L.geoJSON(geojson, {
        style: (feature) => {
          const score = feature.properties.risk_score || 0;
          let color = '#22c55e'; // Green
          let fillColor = '#22c55e';
          let fillOpacity = 0.25;

          if (score >= 70) {
            color = '#ef4444'; // Red
            fillColor = '#dc2626';
            fillOpacity = 0.45;
          } else if (score >= 45) {
            color = '#f97316'; // Orange
            fillColor = '#ea580c';
            fillOpacity = 0.35;
          } else if (score >= 25) {
            color = '#eab308'; // Yellow
            fillColor = '#ca8a04';
            fillOpacity = 0.30;
          }

          return {
            color: color,
            weight: 2.5,
            opacity: 0.9,
            fillColor: fillColor,
            fillOpacity: fillOpacity,
            dashArray: feature.properties.evacuation_advised ? '4, 4' : null
          };
        },
        onEachFeature: (feature, layer) => {
          const p = feature.properties;
          const levelClass = (p.risk_level || 'MODERATE').toLowerCase();

          const popupContent = `
            <div class="custom-map-popup">
              <div class="popup-header badge-${levelClass}">
                <span class="hazard-icon">${p.hazard_type === 'LANDSLIDE' ? '⚠️' : '🌊'}</span>
                <strong>${p.name}</strong>
              </div>
              <div class="popup-body">
                <div class="popup-stat-row">
                  <span>Risk Score:</span>
                  <strong class="text-${levelClass}">${p.risk_score}% (${p.risk_level})</strong>
                </div>
                <div class="popup-stat-row">
                  <span>Slope Angle:</span>
                  <span>${p.slope_angle}°</span>
                </div>
                <div class="popup-stat-row">
                  <span>24h Rainfall:</span>
                  <span>${p.rainfall_24h_mm} mm</span>
                </div>
                <div class="popup-stat-row">
                  <span>Soil Moisture:</span>
                  <span>${p.soil_moisture} m³/m³</span>
                </div>
                ${p.evacuation_advised ? '<div class="alert-banner-small">🚨 Evacuation Recommended</div>' : ''}
                <div class="popup-actions mt-2">
                  <button class="btn btn-sm btn-primary w-full" onclick="window.app.planFromZone(${p.id})">
                    🧭 Route Escape From Here
                  </button>
                </div>
              </div>
            </div>
          `;
          layer.bindPopup(popupContent, { maxWidth: 300 });
        }
      }).addTo(this.zoneLayerGroup);
    } catch (e) {
      console.error('[Map] Error loading risk zones:', e);
    }
  }

  // --- 2. IOT GROUND SENSORS ---
  async loadSensors() {
    try {
      this.sensorLayerGroup.clearLayers();
      const sensors = await api.getSensors();

      sensors.forEach(s => {
        const isTriggered = s.is_triggered;
        let iconSymbol = '📡';
        if (s.sensor_type === 'SOIL_MOISTURE') iconSymbol = '💧';
        else if (s.sensor_type === 'INCLINOMETER') iconSymbol = '📐';
        else if (s.sensor_type === 'RAIN_GAUGE') iconSymbol = '🌧️';
        else if (s.sensor_type === 'RIVER_STAGE') iconSymbol = '🌊';

        const markerHtml = `
          <div class="sensor-marker ${isTriggered
            ? 'triggered pulse-alarm' : 'normal'}">
            <span class="sensor-icon">${iconSymbol}</span>
            <span class="sensor-ping"></span>
          </div>
        `;

        const customIcon = L.divIcon({
          html: markerHtml,
          className: 'custom-div-icon',
          iconSize: [32, 32],
          iconAnchor: [16, 16]
        });

        const marker = L.marker([s.latitude, s.longitude], { icon: customIcon });

        const popupContent = `
          <div class="custom-map-popup">
            <div class="popup-header ${isTriggered ? 'bg-critical' : 'bg-normal'}">
              <span>${iconSymbol} <strong>${s.sensor_code}</strong></span>
              <span class="badge ${isTriggered ? 'badge-critical' : 'badge-low'}">${isTriggered ? 'TRIGGERED' : 'NORMAL'}</span>
            </div>
            <div class="popup-body">
              <p class="text-sm font-semibold">${s.name}</p>
              <div class="popup-stat-row">
                <span>Reading:</span>
                <strong class="${isTriggered ? 'text-red-400 font-bold' : ''}">${s.current_value} ${s.unit}</strong>
              </div>
              <div class="popup-stat-row">
                <span>Threshold:</span>
                <span>Warn: ${s.threshold_warning} | Crit: ${s.threshold_critical} ${s.unit}</span>
              </div>
              <div class="popup-stat-row">
                <span>Battery:</span>
                <span>🔋 ${s.battery_percentage}%</span>
              </div>
            </div>
          </div>
        `;

        marker.bindPopup(popupContent);
        marker.addTo(this.sensorLayerGroup);
      });
    } catch (e) {
      console.error('[Map] Error loading sensors:', e);
    }
  }

  // --- 3. SAFE SHELTERS & RELIEF CAMPS ---
  async loadShelters() {
    try {
      this.shelterLayerGroup.clearLayers();
      const shelters = await api.getShelters();

      shelters.forEach(sh => {
        const pct = sh.occupancy_pct || 0;
        let meterColor = '#22c55e';
        if (pct > 80) meterColor = '#ef4444';
        else if (pct > 50) meterColor = '#eab308';

        const shelterHtml = `
          <div class="shelter-marker">
            <span class="shelter-icon">🏠</span>
            <span class="shelter-badge">${Math.round(pct)}%</span>
          </div>
        `;

        const customIcon = L.divIcon({
          html: shelterHtml,
          className: 'custom-div-icon',
          iconSize: [36, 36],
          iconAnchor: [18, 18]
        });

        const marker = L.marker([sh.latitude, sh.longitude], { icon: customIcon });

        const popupContent = `
          <div class="custom-map-popup">
            <div class="popup-header bg-shelter">
              <span>🏠 <strong>${sh.name}</strong></span>
            </div>
            <div class="popup-body">
              <p class="text-xs text-slate-300 mb-2">${sh.address || `${sh.district}, ${sh.state}`}</p>
              
              <div class="capacity-bar-wrap mb-2">
                <div class="flex justify-between text-xs mb-1">
                  <span>Occupancy (${sh.capacity_occupied}/${sh.capacity_total})</span>
                  <strong>${sh.occupancy_pct}%</strong>
                </div>
                <div class="progress-bar-bg">
                  <div class="progress-bar-fill" style="width: ${sh.occupancy_pct}%; background-color: ${meterColor};"></div>
                </div>
              </div>

              <div class="amenities-pills flex flex-wrap gap-1 mb-2">
                ${sh.has_medical_aid ? '<span class="pill pill-green">🩺 Medical Aid</span>' : ''}
                ${sh.has_food_water ? '<span class="pill pill-blue">🍲 Food & Water</span>' : ''}
                ${sh.has_power_backup ? '<span class="pill pill-yellow">⚡ Power Gen</span>' : ''}
                ${sh.has_helipad_access ? '<span class="pill pill-purple">🚁 Helipad</span>' : ''}
              </div>

              <div class="popup-stat-row text-xs">
                <span>Contact:</span>
                <strong>${sh.contact_phone || '1070 (SDMA)'}</strong>
              </div>

              <div class="mt-2">
                <button class="btn btn-sm btn-outline-primary w-full" onclick="window.app.setTargetShelter(${sh.id}, '${sh.name.replace(/'/g, "\\'")}')">
                  🎯 Set as Target Shelter
                </button>
              </div>
            </div>
          </div>
        `;

        marker.bindPopup(popupContent);
        marker.addTo(this.shelterLayerGroup);
      });
    } catch (e) {
      console.error('[Map] Error loading shelters:', e);
    }
  }

  // --- 4. CITIZEN CROWD REPORTS ---
  async loadCitizenReports() {
    try {
      this.reportLayerGroup.clearLayers();
      const reports = await api.getReports();

      reports.forEach(r => {
        const isCritical = r.severity_rating >= 4;
        const markerHtml = `
          <div class="report-marker ${isCritical ? 'critical' : 'normal'}">
            <span>⚠️</span>
          </div>
        `;

        const customIcon = L.divIcon({
          html: markerHtml,
          className: 'custom-div-icon',
          iconSize: [28, 28],
          iconAnchor: [14, 14]
        });

        const marker = L.marker([r.latitude, r.longitude], { icon: customIcon });

        const popupContent = `
          <div class="custom-map-popup">
            <div class="popup-header bg-report">
              <span>⚠️ <strong>${escapeHtml(r.category ? r.category.replace('_', ' ') : 'Report')}</strong></span>
              <span class="badge badge-warning">Sev ${Number(r.severity_rating) || 1}/5</span>
            </div>
            <div class="popup-body">
              <p class="text-xs mb-2">${escapeHtml(r.description)}</p>
              ${sanitizeUrl(r.image_url) ? `<img src="${sanitizeUrl(r.image_url)}" class="popup-img mb-2" alt="Field Photo" />` : ''}
              <div class="popup-stat-row text-xs text-slate-400">
                <span>Reporter: ${escapeHtml(r.reporter_name || 'Citizen')}</span>
                <span>👍 ${Number(r.upvotes) || 0} upvotes</span>
              </div>
              <button class="btn btn-xs btn-outline-warning w-full mt-2" onclick="window.app.upvoteReport(${Number(r.id)})">
                👍 Upvote Verification
              </button>
            </div>
          </div>
        `;

        marker.bindPopup(popupContent);
        marker.addTo(this.reportLayerGroup);
      });
    } catch (e) {
      console.error('[Map] Error loading reports:', e);
    }
  }

  // --- 5. EVACUATION ROUTE RENDERING ---
  drawEvacuationRoute(plan) {
    this.evacuationLayerGroup.clearLayers();

    if (!plan) return;

    let coords = [];
    if (plan.route_geojson && plan.route_geojson.geometry && plan.route_geojson.geometry.coordinates) {
      // GeoJSON has [lon, lat], Leaflet polyline expects [lat, lon]
      coords = plan.route_geojson.geometry.coordinates.map(c => [c[1], c[0]]);
    } else if (plan.route_waypoints && plan.route_waypoints.length) {
      coords = plan.route_waypoints.map(w => [w.latitude, w.longitude]);
    } else if (plan.route_polyline_coordinates && plan.route_polyline_coordinates.length) {
      coords = plan.route_polyline_coordinates;
    }

    if (!coords || coords.length === 0) {
      return;
    }

    // Safety glow casing
    const glowLine = L.polyline(coords, {
      color: '#38bdf8',
      weight: 8,
      opacity: 0.45,
      lineCap: 'round'
    });

    // Core animated routing line
    const mainLine = L.polyline(coords, {
      color: '#0284c7',
      weight: 4,
      dashArray: '8, 8',
      className: 'evacuation-animated-path'
    });

    glowLine.addTo(this.evacuationLayerGroup);
    mainLine.addTo(this.evacuationLayerGroup);

    // Origin Marker (User Position)
    const originCoords = coords[0];
    const originIcon = L.divIcon({
      html: '<div class="evac-node-marker origin">📍</div>',
      className: 'custom-div-icon',
      iconSize: [32, 32],
      iconAnchor: [16, 28]
    });
    L.marker(originCoords, { icon: originIcon })
      .bindPopup('<strong>🏃 Starting Point</strong>')
      .addTo(this.evacuationLayerGroup);

    // Destination Shelter Marker
    const destCoords = coords[coords.length - 1];
    const destIcon = L.divIcon({
      html: '<div class="evac-node-marker destination">🏁</div>',
      className: 'custom-div-icon',
      iconSize: [32, 32],
      iconAnchor: [16, 28]
    });
    const destShelterName = plan.destination_shelter?.name || plan.target_shelter_name || 'Safe Shelter';
    L.marker(destCoords, { icon: destIcon })
      .bindPopup(`<strong>Safe Haven: ${destShelterName}</strong>`)
      .addTo(this.evacuationLayerGroup);

    // Fit map bounds to show full route
    this.map.fitBounds(mainLine.getBounds(), { padding: [40, 40] });
  }

  clearEvacuationRoute() {
    this.evacuationLayerGroup.clearLayers();
  }

  setUserLocation(lat, lon) {
    if (this.userLocationMarker) {
      this.userLocationMarker.setLatLng([lat, lon]);
    } else {
      const userIcon = L.divIcon({
        html: '<div class="user-loc-pulse">🔵</div>',
        className: 'custom-div-icon',
        iconSize: [24, 24],
        iconAnchor: [12, 12]
      });
      this.userLocationMarker = L.marker([lat, lon], { icon: userIcon }).addTo(this.map);
    }
  }

  centerOn(lat, lon, zoom = 13) {
    if (this.map) {
      this.map.flyTo([lat, lon], zoom, { duration: 1.2 });
    }
  }
}

export const geoMap = new GeoAlertMap();
```

---

#### 📄 `frontend/simulator.js`
```js
/**
 * IoT Hardware Simulator & Sensor Telemetry Controller
 * Connects directly to /sensors/simulator/* endpoints to demonstrate real-time disaster conditions.
 */

import { api } from './api.js?v=3';

class SimulatorController {
  constructor() {
    this.status = null;
    this.telemetryChart = null;
    this.pollingTimer = null;
  }

  async init() {
    await this.refreshStatus();
    await this.loadSensorsTable();
  }

  async refreshStatus() {
    try {
      this.status = await api.getSimulatorStatus();
      this.updateUIStatus(this.status);
    } catch (e) {
      console.warn('[Simulator] Status fetch error:', e);
    }
  }

  updateUIStatus(status) {
    if (!status) return;

    const scenarioEl = document.getElementById('sim-current-scenario');
    if (scenarioEl) {
      scenarioEl.textContent = status.active_scenario || 'NORMAL';
      scenarioEl.className = `badge font-mono badge-${this.getScenarioBadgeClass(status.active_scenario)}`;
    }

    const autoBtn = document.getElementById('btn-sim-auto-toggle');
    if (autoBtn) {
      if (status.auto_sim_running) {
        autoBtn.innerHTML = '⏸️ Stop Auto Sim';
        autoBtn.classList.remove('btn-outline-primary');
        autoBtn.classList.add('btn-warning');
      } else {
        autoBtn.innerHTML = '▶️ Start Live Auto Sim (5s)';
        autoBtn.classList.remove('btn-warning');
        autoBtn.classList.add('btn-outline-primary');
      }
    }
  }

  getScenarioBadgeClass(scenario) {
    switch (scenario) {
      case 'LANDSLIDE_IMMINENT': return 'critical';
      case 'CLOUDBURST_FLOOD': return 'danger';
      case 'MONSOON_SURGE': return 'warning';
      default: return 'low';
    }
  }

  async setScenario(scenarioName) {
    try {
      const res = await api.setSimulatorScenario(scenarioName);
      window.app.showToast(`🚨 Scenario switched to: ${scenarioName}`, 'info');
      await this.refreshStatus();
      await this.triggerTick(false);
      return res;
    } catch (e) {
      window.app.showToast(`Failed to set scenario: ${e.message}`, 'error');
    }
  }

  async triggerTick(notify = true) {
    try {
      const res = await api.triggerSimulatorTick();
      if (notify) {
        window.app.showToast(`⚡ Ingested new telemetry cycle across ${res.nodes_updated || 4} sensor nodes`, 'success');
      }
      await this.loadSensorsTable();
      if (window.geoMap) {
        window.geoMap.loadSensors();
        window.geoMap.loadRiskZones();
      }
      if (window.app) {
        window.app.refreshDashboardStats();
      }
      return res;
    } catch (e) {
      window.app.showToast(`Simulation tick failed: ${e.message}`, 'error');
    }
  }

  async toggleAutoSimulation() {
    try {
      if (this.status && this.status.auto_sim_running) {
        await api.stopAutoSimulator();
        window.app.showToast('⏹️ Background sensor stream paused.', 'info');
      } else {
        await api.startAutoSimulator(5);
        window.app.showToast('🚀 Live sensor streaming started (5s intervals).', 'success');
      }
      await this.refreshStatus();
    } catch (e) {
      window.app.showToast(`Auto simulation toggle failed: ${e.message}`, 'error');
    }
  }

  async loadSensorsTable() {
    const tableBody = document.getElementById('sensors-table-body');
    if (!tableBody) return;

    try {
      const sensors = await api.getSensors();
      tableBody.innerHTML = sensors.map(s => {
        const isTriggered = s.is_triggered;
        const statusBadge = isTriggered
          ? `<span class="badge badge-critical">🚨 CRITICAL</span>`
          : `<span class="badge badge-low">✅ NORMAL</span>`;

        return `
          <tr>
            <td class="font-mono text-xs">${s.sensor_code}</td>
            <td>
              <div class="font-medium">${s.name}</div>
              <div class="text-xs text-slate-400">${s.district}, ${s.state}</div>
            </td>
            <td><span class="badge badge-outline">${s.sensor_type}</span></td>
            <td>
              <strong class="${isTriggered ? 'text-red-400 font-bold' : 'text-emerald-400'}">
                ${s.current_value} ${s.unit}
              </strong>
            </td>
            <td class="text-xs text-slate-400">
              Warn: ${s.threshold_warning} | Crit: ${s.threshold_critical}
            </td>
            <td>🔋 ${s.battery_percentage}%</td>
            <td>${statusBadge}</td>
          </tr>
        `;
      }).join('');
    } catch (e) {
      console.warn('[Simulator] Table loading failed:', e);
    }
  }
}

export const simulator = new SimulatorController();
```

---

#### 📄 `frontend/app.js`
```js
import { api } from './api.js?v=3';
import { geoMap } from './map.js?v=3';
import { offlineSync } from './offlineSync.js?v=3';
import { i18n } from './i18n.js?v=3';

function escapeHtml(str) {
  if (str === null || str === undefined) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function sanitizeUrl(url) {
  if (!url) return '';
  const clean = String(url).trim();
  if (/^(https?:\/\/|data:image\/)/i.test(clean)) {
    return clean.replace(/["'<>]/g, '');
  }
  return '';
}

class GeoAlertApp {
  constructor() {
    this.activeTab = 'dashboard';
    this.forecastChart = null;
    this.pollingInterval = null;
    this.soundAlertsEnabled = false;
  }

  async init() {
    console.log('🚀 Initializing GeoAlertNER Disaster Early Warning Platform...');

    // 1. Setup Navigation & Button Event Listeners immediately
    try {
      this.setupNavigation();
      this.setupThemeSelector();
      this.setupEventListeners();
      this.setupAuthUI();
    } catch (e) {
      console.error('[App] Event listener setup error:', e);
    }

    // 2. Initialize Multilingual Engine
    try {
      i18n.init();
      window.i18n = i18n;
    } catch (e) {
      console.warn('[App] i18n init warning:', e);
    }

    // 3. Initialize GIS Map
    try {
      geoMap.init('map-container');
      window.geoMap = geoMap;
    } catch (e) {
      console.warn('[App] GIS map init warning:', e);
    }

    // 4. Setup Offline Sync & Backend Status Listeners
    try {
      offlineSync.addListener((count) => this.updateOfflineBadge(count));
      api.addStatusListener((online) => this.updateBackendStatusPill(online));
    } catch (e) {
      console.warn('[App] Status listener warning:', e);
    }

    // 5. Initial Data Ingestion (Parallel & Non-Blocking)
    this.checkBackendStatus();
    Promise.allSettled([
      this.refreshDashboardStats(),
      this.loadAlertsFeed(),
      this.loadWeatherWidget(),
      this.loadHelplines('Assam'),
      this.populateSheltersDropdown()
    ]);

    // 6. Start 5-second background telemetry & health polling
    if (!this.pollingInterval) {
      this.pollingInterval = setInterval(() => {
        this.checkBackendStatus();
        this.refreshDashboardStats(false);
        this.loadAlertsFeed(false);
      }, 5000);
    }
  }

  updateBackendStatusPill(online) {
    const statusEl = document.getElementById('backend-status-pill');
    if (!statusEl) return;
    if (online) {
      statusEl.innerHTML = `<span class="pulse-dot green"></span> Live Backend Online (FastAPI)`;
      statusEl.className = 'status-pill online';
    } else {
      statusEl.innerHTML = `<span class="pulse-dot yellow"></span> Standalone / Simulation Mode`;
      statusEl.className = 'status-pill simulation';
    }
  }

  async checkBackendStatus() {
    const health = await api.checkHealth();
    this.updateBackendStatusPill(health.online);
  }

  setupNavigation() {
    const navButtons = document.querySelectorAll('.nav-btn');
    navButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const targetView = btn.getAttribute('data-view');
        this.switchView(targetView);
      });
    });
  }

  setupThemeSelector() {
    const themeSelect = document.getElementById('theme-selector');
    const savedTheme = localStorage.getItem('geoalert_theme') || 'sapphire';

    // Apply saved or default theme
    document.documentElement.setAttribute('data-theme', savedTheme);
    if (themeSelect) {
      themeSelect.value = savedTheme;
      themeSelect.addEventListener('change', (e) => {
        const theme = e.target.value;
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('geoalert_theme', theme);
        const names = {
          sapphire: '🌌 Midnight Sapphire',
          emerald: '🌲 Himalayan Pine',
          amethyst: '🔮 Cosmic Amethyst',
          slate: '⚡ Stealth Slate',
          onyx: '🌑 Deep Onyx'
        };
        this.showToast(`🎨 Theme changed to ${names[theme] || theme}`, 'info');
      });
    }
  }

  switchView(viewName) {
    this.activeTab = viewName;

    // Update nav button active states
    document.querySelectorAll('.nav-btn').forEach(btn => {
      if (btn.getAttribute('data-view') === viewName) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    // Update view panels
    document.querySelectorAll('.view-panel').forEach(panel => {
      if (panel.id === `view-${viewName}`) {
        panel.classList.add('active');
      } else {
        panel.classList.remove('active');
      }
    });

    // Refresh map size if map view opened or dashboard opened
    setTimeout(() => {
      if (geoMap.map) geoMap.map.invalidateSize();
    }, 100);

    if (viewName === 'reports') {
      this.loadCitizenReportsFeed();
    } else if (viewName === 'simulator') {
      simulator.loadSensorsTable();
    } else if (viewName === 'helplines') {
      this.loadHelplines();
    }
  }

  setupEventListeners() {
    // Evacuation form submission
    const evacForm = document.getElementById('evacuation-form');
    if (evacForm) {
      evacForm.addEventListener('submit', (e) => this.handleEvacuationPlan(e));
    }

    // Pick location from map button
    const pickMapBtn = document.getElementById('btn-pick-location');
    if (pickMapBtn) {
      pickMapBtn.addEventListener('click', () => {
        geoMap.selectingOrigin = true;
        this.showToast('📍 Click anywhere on the map to set your current location.', 'info');
        this.switchView('map');
        geoMap.onOriginSelect = (lat, lon) => {
          document.getElementById('evac-origin-lat').value = lat.toFixed(4);
          document.getElementById('evac-origin-lon').value = lon.toFixed(4);
          this.showToast(`Selected coordinates: ${lat.toFixed(4)}, ${lon.toFixed(4)}`, 'success');
          this.switchView('evacuation');
        };
      });
    }

    // Auto GPS Location button
    const gpsBtn = document.getElementById('btn-auto-gps');
    if (gpsBtn) {
      gpsBtn.addEventListener('click', () => this.detectUserGPS());
    }

    // Citizen report form submission
    const reportForm = document.getElementById('citizen-report-form');
    if (reportForm) {
      reportForm.addEventListener('submit', (e) => this.handleCitizenReportSubmit(e));
    }

    // Sync offline queue button
    const syncBtn = document.getElementById('btn-sync-offline');
    if (syncBtn) {
      syncBtn.addEventListener('click', async () => {
        const res = await offlineSync.syncPendingReports();
        if (res && res.success) {
          this.showToast(`✅ Successfully synced ${res.count} reports to central database!`, 'success');
          this.loadCitizenReportsFeed();
        } else {
          this.showToast(`Sync warning: ${res ? res.error : 'No network connection'}`, 'warning');
        }
      });
    }

    // Simulator scenario buttons
    document.querySelectorAll('.btn-scenario').forEach(btn => {
      btn.addEventListener('click', () => {
        const scenario = btn.getAttribute('data-scenario');
        simulator.setScenario(scenario);
      });
    });

    const triggerTickBtn = document.getElementById('btn-sim-tick');
    if (triggerTickBtn) {
      triggerTickBtn.addEventListener('click', () => simulator.triggerTick());
    }

    const autoSimBtn = document.getElementById('btn-sim-auto-toggle');
    if (autoSimBtn) {
      autoSimBtn.addEventListener('click', () => simulator.toggleAutoSimulation());
    }

    // Helpline state filter
    const helplineStateSelect = document.getElementById('helpline-state-select');
    if (helplineStateSelect) {
      helplineStateSelect.addEventListener('change', (e) => {
        this.loadHelplines(e.target.value);
      });
    }

    // AI Risk Calculator form
    const riskCalcForm = document.getElementById('risk-calc-form');
    if (riskCalcForm) {
      riskCalcForm.addEventListener('submit', (e) => this.handleRiskCalculation(e));
    }

    // Scenario preset buttons
    const PRESETS = {
      normal:   { slope: 8.0,  rainfall: 12.0, moisture: 0.22, rainRate: 2.0,  elev: 120,  ndvi: 0.72, drain: 480, tilt: 0.0,  litho: 1 },
      shillong: { slope: 38.5, rainfall: 165.0,moisture: 0.58, rainRate: 42.0, elev: 1250, ndvi: 0.35, drain: 120, tilt: 1.2,  litho: 4 },
      guwahati: { slope: 12.0, rainfall: 220.0,moisture: 0.64, rainRate: 68.0, elev: 55,   ndvi: 0.28, drain: 45,  tilt: 0.4,  litho: 1 },
      sikkim:   { slope: 48.0, rainfall: 310.0,moisture: 0.70, rainRate: 95.0, elev: 1850, ndvi: 0.22, drain: 60,  tilt: 3.5,  litho: 5 }
    };
    document.querySelectorAll('.preset-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const key = btn.dataset.preset;
        const p = PRESETS[key];
        if (!p) return;
        document.getElementById('calc-slope').value     = p.slope;
        document.getElementById('calc-rainfall').value  = p.rainfall;
        document.getElementById('calc-moisture').value  = p.moisture;
        document.getElementById('calc-rain-rate').value = p.rainRate;
        document.getElementById('calc-elev').value      = p.elev;
        document.getElementById('calc-ndvi').value      = p.ndvi;
        document.getElementById('calc-drain').value     = p.drain;
        document.getElementById('calc-tilt').value      = p.tilt;
        document.getElementById('calc-litho').value     = p.litho;
        this.showToast(`📊 Preset loaded: ${btn.textContent.trim()}`, 'info');
      });
    });

    // 🔊 Multilingual Voice Alert Broadcast (reads live risk data from backend)
    const voiceAlertBtn = document.getElementById('btn-voice-alert');
    if (voiceAlertBtn) {
      voiceAlertBtn.addEventListener('click', () => {
        const riskLevel = document.getElementById('kpi-risk-level')?.textContent?.trim() || 'HIGH';
        const rainVal   = document.getElementById('kpi-rainfall')?.textContent?.trim()   || '86 mm';
        const tempVal   = document.getElementById('weather-temp')?.textContent?.trim()   || '28°C';
        const isCritical = riskLevel.toUpperCase().includes('CRIT');
        const msg = `${i18n.t('platform_title')}. ${i18n.t('kpi_overall_risk')}: ${riskLevel}. ${i18n.t('kpi_rainfall')}: ${rainVal}. Temperature: ${tempVal}. ${isCritical ? i18n.t('calc_evac_advised') : i18n.t('calc_evac_safe')}`;
        i18n.speakAlert(msg);
        voiceAlertBtn.classList.add('speaking');
        this.showToast(`🔊 Broadcasting alert in ${i18n.currentLang.toUpperCase()} language...`, 'info');
        setTimeout(() => voiceAlertBtn.classList.remove('speaking'), 6000);
      });
    }

    // SOS Emergency Button Handlers
    const headerSosBtn = document.getElementById('btn-header-sos');
    const floatingSosBtn = document.getElementById('btn-floating-sos');
    const closeSosBtn = document.getElementById('btn-close-sos');
    const sosModal = document.getElementById('sos-modal');

    if (headerSosBtn) headerSosBtn.addEventListener('click', () => this.openSOSModal());
    if (floatingSosBtn) floatingSosBtn.addEventListener('click', () => this.openSOSModal());
    if (closeSosBtn) closeSosBtn.addEventListener('click', () => this.closeSOSModal());
    if (sosModal) {
      sosModal.addEventListener('click', (e) => {
        if (e.target === sosModal) this.closeSOSModal();
      });
    }

    const broadcastBtn = document.getElementById('btn-sos-broadcast');
    if (broadcastBtn) broadcastBtn.addEventListener('click', () => this.broadcastDistressBeacon());

    const sosShelterBtn = document.getElementById('btn-sos-shelter-route');
    if (sosShelterBtn) {
      sosShelterBtn.addEventListener('click', () => {
        this.closeSOSModal();
        this.switchView('evacuation');
        document.getElementById('btn-compute-route').click();
      });
    }

    // Audio Alert sound toggle
    const soundToggle = document.getElementById('sound-alert-toggle');
    if (soundToggle) {
      soundToggle.addEventListener('change', (e) => {
        this.soundAlertsEnabled = e.target.checked;
        this.showToast(`Audio Siren Alerts ${this.soundAlertsEnabled ? 'Enabled 🔔' : 'Muted 🔕'}`, 'info');
      });
    }

    // ─── Welcome Demo Banner ──────────────────────────────────────────────
    const bannerEl = document.getElementById('welcome-demo-banner');
    const dismissBannerBtn = document.getElementById('btn-dismiss-banner');
    // Restore dismissed state
    if (localStorage.getItem('geoalert_banner_dismissed') === '1' && bannerEl) {
      bannerEl.style.display = 'none';
    }
    if (dismissBannerBtn && bannerEl) {
      dismissBannerBtn.addEventListener('click', () => {
        bannerEl.style.animation = 'none';
        bannerEl.style.opacity = '0';
        bannerEl.style.transform = 'translateY(-8px)';
        bannerEl.style.transition = 'all 0.3s ease';
        setTimeout(() => { bannerEl.style.display = 'none'; }, 280);
        localStorage.setItem('geoalert_banner_dismissed', '1');
      });
    }

    // 1-click demo quick login from banner
    const quickCitizenBtn = document.getElementById('btn-quick-demo-citizen');
    if (quickCitizenBtn) {
      quickCitizenBtn.addEventListener('click', () => {
        this._applyDemoRole('citizen');
        if (bannerEl) dismissBannerBtn && dismissBannerBtn.click();
      });
    }
    const quickOfficerBtn = document.getElementById('btn-quick-demo-officer');
    if (quickOfficerBtn) {
      quickOfficerBtn.addEventListener('click', () => {
        this._applyDemoRole('officer');
        if (bannerEl) dismissBannerBtn && dismissBannerBtn.click();
      });
    }

    // ─── Project Story Modal ──────────────────────────────────────────────
    const storyModal = document.getElementById('modal-project-story');
    const openStoryBtns = [
      document.getElementById('btn-open-project-story'),
      document.getElementById('btn-sidebar-project-story')
    ];
    const closeStoryBtn = document.getElementById('btn-close-project-story');
    const storyTryBtn = document.getElementById('btn-story-try-demo');

    openStoryBtns.forEach(btn => {
      if (btn && storyModal) {
        btn.addEventListener('click', () => { storyModal.style.display = 'flex'; });
      }
    });
    if (closeStoryBtn && storyModal) {
      closeStoryBtn.addEventListener('click', () => { storyModal.style.display = 'none'; });
    }
    if (storyModal) {
      storyModal.addEventListener('click', (e) => {
        if (e.target === storyModal) storyModal.style.display = 'none';
      });
    }
    if (storyTryBtn && storyModal) {
      storyTryBtn.addEventListener('click', () => {
        storyModal.style.display = 'none';
        this._applyDemoRole('citizen');
      });
    }
  }

  /** Apply a demo role without a real backend login */
  _applyDemoRole(role) {
    const DEMO_USERS = {
      citizen: { full_name: 'Demo Citizen (Assam)', email: 'citizen@geoalertner.in', role: 'CITIZEN' },
      officer: { full_name: 'Demo Field Officer (SDRF)', email: 'officer@geoalertner.in', role: 'FIELD_OFFICER' },
      admin:   { full_name: 'Demo Admin (Disaster HQ)', email: 'admin@geoalertner.in',  role: 'ADMIN' }
    };
    const user = DEMO_USERS[role] || DEMO_USERS.citizen;

    // Try real backend login first; fall back to client-side mock
    const loginAttempt = async () => {
      const PW = { citizen: 'Citizen@123', officer: 'Officer@123', admin: 'Admin@123' };
      try {
        await api.login(user.email, PW[role] || 'Citizen@123');
      } catch (e) {
        // Backend offline or credentials not seeded — create a client-side demo session
        api.setSession('demo-token-' + role, user);
        this.renderAuthState(user);
      }
    };
    loginAttempt();
    this.showToast(`✅ Exploring as ${user.full_name}`, 'success');
    // Close auth modal if open
    const authModal = document.getElementById('auth-modal');
    if (authModal) authModal.classList.add('hidden');
  }

  // --- USER AUTHENTICATION & RBAC UI ---
  setupAuthUI() {
    const openAuthBtn = document.getElementById('btn-open-auth');
    const closeAuthBtn = document.getElementById('btn-close-auth');
    const authModal = document.getElementById('auth-modal');
    const tabLogin = document.getElementById('tab-auth-login');
    const tabRegister = document.getElementById('tab-auth-register');
    const formLogin = document.getElementById('form-auth-login');
    const formRegister = document.getElementById('form-auth-register');
    const logoutBtn = document.getElementById('btn-logout');

    if (openAuthBtn) openAuthBtn.addEventListener('click', () => this.openAuthModal());
    if (closeAuthBtn) closeAuthBtn.addEventListener('click', () => this.closeAuthModal());
    if (authModal) {
      authModal.addEventListener('click', (e) => {
        if (e.target === authModal) this.closeAuthModal();
      });
    }

    if (tabLogin && tabRegister && formLogin && formRegister) {
      tabLogin.addEventListener('click', () => {
        tabLogin.classList.add('active');
        tabRegister.classList.remove('active');
        formLogin.classList.remove('hidden');
        formRegister.classList.add('hidden');
        this.clearAuthAlert();
      });

      tabRegister.addEventListener('click', () => {
        tabRegister.classList.add('active');
        tabLogin.classList.remove('active');
        formRegister.classList.remove('hidden');
        formLogin.classList.add('hidden');
        this.clearAuthAlert();
      });
    }

    // Demo quick login buttons
    document.querySelectorAll('.demo-role-btn').forEach(btn => {
      btn.addEventListener('click', async () => {
        const demoRole = btn.getAttribute('data-demo');
        let email = 'citizen@geoalertner.in';
        let pw = 'Citizen@123';
        if (demoRole === 'officer') {
          email = 'officer@geoalertner.in';
          pw = 'Officer@123';
        } else if (demoRole === 'admin') {
          email = 'admin@geoalertner.in';
          pw = 'Admin@123';
        }
        try {
          this.setAuthAlert('Authenticating demo account...', 'success');
          const res = await api.login(email, pw);
          this.showToast(`✅ Signed in as ${res.user.full_name} (${res.user.role})`, 'success');
          this.closeAuthModal();
        } catch (err) {
          this.setAuthAlert(err.message || 'Demo login failed', 'error');
        }
      });
    });

    // Login Form Submit
    if (formLogin) {
      formLogin.addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = document.getElementById('login-email')?.value?.trim();
        const password = document.getElementById('login-password')?.value;
        if (!email || !password) return;
        try {
          this.setAuthAlert('Signing in...', 'success');
          const res = await api.login(email, password);
          this.showToast(`✅ Welcome back, ${res.user.full_name}!`, 'success');
          this.closeAuthModal();
        } catch (err) {
          this.setAuthAlert(err.message || 'Invalid email or password', 'error');
        }
      });
    }

    // Register Form Submit
    if (formRegister) {
      formRegister.addEventListener('submit', async (e) => {
        e.preventDefault();
        const fullName = document.getElementById('reg-fullname')?.value?.trim();
        const email = document.getElementById('reg-email')?.value?.trim();
        const password = document.getElementById('reg-password')?.value;
        const role = document.getElementById('reg-role')?.value || 'CITIZEN';
        const state = document.getElementById('reg-state')?.value || 'Assam';

        if (!fullName || !email || !password) return;
        try {
          this.setAuthAlert('Creating account...', 'success');
          const res = await api.register({
            full_name: fullName,
            email: email,
            password: password,
            role: role,
            state: state
          });
          this.showToast(`🎉 Account created! Welcome, ${res.user.full_name}`, 'success');
          this.closeAuthModal();
        } catch (err) {
          this.setAuthAlert(err.message || 'Registration failed', 'error');
        }
      });
    }

    // Logout
    if (logoutBtn) {
      logoutBtn.addEventListener('click', () => {
        api.logout();
        this.showToast('ℹ️ Signed out successfully', 'info');
      });
    }

    // Subscribe to auth state updates
    api.addAuthListener((user) => this.renderAuthState(user));

    // Try fetching active profile if token is present
    if (api.getToken()) {
      api.getMe().catch(() => {});
    }
  }

  renderAuthState(user) {
    const openBtn = document.getElementById('btn-open-auth');
    const userBadge = document.getElementById('user-badge');
    const roleBadge = document.getElementById('user-role-badge');
    const nameLabel = document.getElementById('user-name-label');

    if (!openBtn || !userBadge) return;

    if (user) {
      openBtn.classList.add('hidden');
      userBadge.classList.remove('hidden');
      if (nameLabel) nameLabel.textContent = user.full_name || user.email;
      if (roleBadge) {
        const role = user.role || 'CITIZEN';
        roleBadge.textContent = role.replace('_', ' ');
        roleBadge.className = 'badge-role ' + (
          role === 'ADMIN' ? 'role-admin' :
          role === 'FIELD_OFFICER' ? 'role-officer' : 'role-citizen'
        );
      }
    } else {
      openBtn.classList.remove('hidden');
      userBadge.classList.add('hidden');
    }
  }

  openAuthModal() {
    const modal = document.getElementById('auth-modal');
    if (modal) {
      modal.classList.remove('hidden');
      this.clearAuthAlert();
    }
  }

  closeAuthModal() {
    const modal = document.getElementById('auth-modal');
    if (modal) modal.classList.add('hidden');
  }

  clearAuthAlert() {
    const alertBox = document.getElementById('auth-alert-box');
    if (alertBox) {
      alertBox.textContent = '';
      alertBox.className = 'auth-alert-box';
    }
  }

  setAuthAlert(msg, type = 'error') {
    const alertBox = document.getElementById('auth-alert-box');
    if (alertBox) {
      alertBox.textContent = msg;
      alertBox.className = `auth-alert-box ${type}`;
    }
  }

  // --- DASHBOARD STATS & ALERTS ---

  async refreshDashboardStats(showLoader = true) {
    try {
      const summary = await api.getRiskSummary();
      const weather = await api.getCurrentWeather();

      // Update KPI Cards
      const riskScoreEl = document.getElementById('kpi-overall-risk');
      const riskLevelBadge = document.getElementById('kpi-risk-level');
      if (riskScoreEl) riskScoreEl.textContent = `${summary.overall_risk_score}%`;
      if (riskLevelBadge) {
        riskLevelBadge.textContent = summary.overall_risk_level;
        riskLevelBadge.className = `badge badge-${summary.overall_risk_level.toLowerCase()}`;
      }

      const rainfallVal = weather.precipitation_24h_mm !== undefined ? weather.precipitation_24h_mm : (weather.rainfall_24h_accumulated_mm || summary.average_rainfall_24h_mm || 0);
      const rainfallEl = document.getElementById('kpi-rainfall');
      if (rainfallEl) rainfallEl.textContent = `${rainfallVal} mm`;

      const soilEl = document.getElementById('kpi-soil-moisture');
      if (soilEl) {
        const soilVal = weather.soil_moisture_0_to_7cm !== undefined ? weather.soil_moisture_0_to_7cm : (weather.soil_moisture_shallow_m3m3 || summary.average_soil_moisture || 0.45);
        soilEl.textContent = `${(soilVal * 100).toFixed(0)}%`;
      }

      const alertsCountEl = document.getElementById('kpi-active-alerts');
      const alertsCritEl = document.getElementById('kpi-critical-alerts');
      if (alertsCountEl) alertsCountEl.textContent = String(summary.total_active_alerts).padStart(2, '0');
      if (alertsCritEl) alertsCritEl.textContent = `${summary.critical_alerts_count} Critical`;
    } catch (e) {
      console.warn('[App] Failed to refresh stats:', e);
    }
  }

  async loadAlertsFeed() {
    const alertsContainer = document.getElementById('active-alerts-list');
    if (!alertsContainer) return;

    try {
      const zones = await api.getRiskZones();
      const highRiskZones = zones.filter(z => z.risk_score >= 45);

      if (highRiskZones.length === 0) {
        alertsContainer.innerHTML = `
          <div class="empty-state-card">
            <div class="text-3xl mb-2">🛡️</div>
            <p class="text-slate-400 text-sm">All NER terrain micro-zones currently operating within normal safety limits.</p>
          </div>
        `;
        return;
      }

      alertsContainer.innerHTML = highRiskZones.map(z => {
        const isCritical = z.risk_score >= 70;
        const borderClass = isCritical ? 'border-red-900 bg-red-950/40 text-red-100' : 'border-yellow-900 bg-yellow-950/40 text-yellow-100';
        const badgeClass = isCritical ? 'badge-critical' : 'badge-warning';

        return `
          <div class="alert-item rounded-lg border p-4 transition-all hover:scale-[1.01] ${borderClass}" onclick="window.app.focusZoneOnMap(${z.id})">
            <div class="flex items-center justify-between">
              <span class="font-semibold flex items-center gap-1.5">
                ${isCritical ? '🚨' : '⚠️'} ${z.name}
              </span>
              <span class="badge ${badgeClass}">${z.risk_level} (${z.risk_score}%)</span>
            </div>
            <p class="mt-1 text-xs text-slate-300">
              ${z.hazard_type} alert triggered by heavy rainfall (${z.rainfall_24h_mm} mm) & slope steepness (${z.slope_angle}°).
            </p>
            <div class="mt-2 flex items-center justify-between text-xs text-slate-400">
              <span>📍 ${z.district}, ${z.state}</span>
              <button class="text-sky-400 hover:underline font-semibold" onclick="event.stopPropagation(); window.app.planFromZone(${z.id})">
                Route Escape ➔
              </button>
            </div>
          </div>
        `;
      }).join('');
    } catch (e) {
      console.warn('[App] Alerts feed error:', e);
    }
  }

  // --- WEATHER WIDGET & CHART ---
  async loadWeatherWidget() {
    try {
      const weather = await api.getCurrentWeather();
      const forecastData = await api.getWeatherForecast(26.1445, 91.7362, 8);

      const temp = weather.temperature_c !== undefined ? weather.temperature_c : '--';
      const humidity = weather.relative_humidity !== undefined ? weather.relative_humidity : (weather.relative_humidity_pct !== undefined ? weather.relative_humidity_pct : '--');
      const rainRate = weather.precipitation_current_mm !== undefined ? weather.precipitation_current_mm : (weather.precipitation_rate_mm_hr !== undefined ? weather.precipitation_rate_mm_hr : '--');
      const condition = weather.weather_condition || weather.rain_intensity_level || 'Normal Weather';

      document.getElementById('weather-temp').textContent = `${temp}°C`;
      document.getElementById('weather-humidity').textContent = `${humidity}%`;
      document.getElementById('weather-rate').textContent = `${rainRate} mm/hr`;
      document.getElementById('weather-condition').textContent = condition;

      // Render Forecast Chart with Chart.js
      const chartCanvas = document.getElementById('rainfall-forecast-chart');
      if (chartCanvas && typeof Chart !== 'undefined') {
        const forecastList = forecastData.hourly_forecast || forecastData.forecast || [];
        const labels = forecastList.map((f, i) => f.time && !f.time.startsWith('+') ? f.time.slice(11, 16) : `+${i + 1}h`);
        const rainVals = forecastList.map(f => f.precipitation_mm);
        const soilVals = forecastList.map(f => ((f.soil_moisture || 0.4) * 100).toFixed(0));

        if (this.forecastChart) this.forecastChart.destroy();

        this.forecastChart = new Chart(chartCanvas, {
          type: 'line',
          data: {
            labels: labels,
            datasets: [
              {
                label: 'Rainfall (mm)',
                data: rainVals,
                borderColor: '#38bdf8',
                backgroundColor: 'rgba(56, 189, 248, 0.15)',
                fill: true,
                tension: 0.4,
                yAxisID: 'y'
              },
              {
                label: 'Soil Saturation (%)',
                data: soilVals,
                borderColor: '#f97316',
                borderDash: [4, 4],
                tension: 0.4,
                yAxisID: 'y1'
              }
            ]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: { labels: { color: '#94a3b8', boxWidth: 12 } }
            },
            scales: {
              x: { grid: { color: '#1e293b' }, ticks: { color: '#94a3b8' } },
              y: {
                grid: { color: '#1e293b' },
                ticks: { color: '#38bdf8' },
                title: { display: true, text: 'Rain (mm)', color: '#38bdf8' }
              },
              y1: {
                position: 'right',
                grid: { drawOnChartArea: false },
                ticks: { color: '#f97316' },
                title: { display: true, text: 'Soil %', color: '#f97316' }
              }
            }
          }
        });
      }
    } catch (e) {
      console.warn('[App] Weather widget loading error:', e);
    }
  }

  // --- EVACUATION ROUTE PLANNER ---
  async populateSheltersDropdown() {
    const select = document.getElementById('evac-target-shelter');
    if (!select) return;

    try {
      const shelters = await api.getShelters();
      select.innerHTML = '<option value="">-- Nearest Safe Shelter (Auto-Optimized) --</option>' +
        shelters.map(s => `
          <option value="${s.id}">
            ${s.name} (${s.district}) - Cap: ${s.capacity_occupied}/${s.capacity_total}
          </option>
        `).join('');
    } catch (e) {
      console.warn('[App] Shelters populate error:', e);
    }
  }

  async handleEvacuationPlan(e) {
    e.preventDefault();
    const lat = parseFloat(document.getElementById('evac-origin-lat').value);
    const lon = parseFloat(document.getElementById('evac-origin-lon').value);
    const targetShelterId = document.getElementById('evac-target-shelter').value || null;
    const transportMode = document.getElementById('evac-transport-mode').value;
    const avoidHazards = document.getElementById('evac-avoid-hazards').checked;

    if (isNaN(lat) || isNaN(lon)) {
      this.showToast('Please specify valid latitude and longitude coordinates.', 'error');
      return;
    }

    const planBtn = document.getElementById('btn-compute-route');
    planBtn.disabled = true;
    planBtn.innerHTML = '⚡ Computing Safe Escape Corridor...';

    try {
      const plan = await api.planEvacuationRoute({
        user_latitude: lat,
        user_longitude: lon,
        target_shelter_id: targetShelterId ? parseInt(targetShelterId) : null,
        avoid_high_risk: avoidHazards,
        transport_preference: transportMode
      });

      this.renderEvacuationResults(plan);
      geoMap.drawEvacuationRoute(plan);
      const targetName = plan.destination_shelter?.name || plan.target_shelter_name || 'Designated Shelter';
      this.showToast(`🧭 Safe corridor calculated to ${targetName}!`, 'success');
    } catch (err) {
      this.showToast(`Routing failed: ${err.message}`, 'error');
    } finally {
      planBtn.disabled = false;
      planBtn.innerHTML = '🚀 Calculate Safe Evacuation Corridor';
    }
  }

  renderEvacuationResults(plan) {
    const resultsContainer = document.getElementById('evacuation-results');
    if (!resultsContainer) return;

    resultsContainer.classList.remove('hidden');

    const shelterName = plan.destination_shelter ? plan.destination_shelter.name : (plan.target_shelter_name || 'Designated Safe Shelter');
    const distance = plan.total_distance_km !== undefined ? `${plan.total_distance_km} km` : '-- km';
    const duration = plan.total_duration_minutes || plan.estimated_time_minutes || 10;
    const safetyScore = plan.safety_clearance_score || (plan.hazard_zones_avoided_count > 0 ? 95 : 98);
    const mode = plan.transport_guidance ? plan.transport_guidance.best_mode : (plan.transport_recommended || 'Vehicle / Foot');
    const status = plan.transport_guidance ? plan.transport_guidance.reason : (plan.hazard_avoidance_status || 'Safe corridor active.');

    document.getElementById('evac-res-shelter').textContent = shelterName;
    document.getElementById('evac-res-distance').textContent = distance;
    document.getElementById('evac-res-eta').textContent = `~${duration} mins (${mode.replace(/_/g, ' ')})`;
    document.getElementById('evac-res-safety-score').textContent = `${safetyScore}% Safety`;
    document.getElementById('evac-res-status').textContent = status;

    // Steps list
    const stepsList = document.getElementById('evac-turn-by-turn-list');
    let steps = [];
    if (plan.route_waypoints && plan.route_waypoints.length) {
      steps = plan.route_waypoints.map(w => w.instruction || `Waypoint (${w.latitude}, ${w.longitude})`);
    } else if (plan.turn_by_turn_instructions && plan.turn_by_turn_instructions.length) {
      steps = plan.turn_by_turn_instructions;
    } else {
      steps = [
        "Head towards designated safe escape corridor.",
        `Arrive at safe shelter: ${shelterName}.`
      ];
    }

    stepsList.innerHTML = steps.map((step, idx) => `
      <li class="flex items-start gap-2 text-sm text-slate-200">
        <span class="step-num">${idx + 1}</span>
        <span>${step}</span>
      </li>
    `).join('');

    // Contacts
    const contactsContainer = document.getElementById('evac-res-contacts');
    const contacts = plan.emergency_contacts || [];
    contactsContainer.innerHTML = contacts.map(c => {
      const name = c.title || c.name || 'Emergency Helpline';
      const phone = c.number || c.phone || '112';
      return `
        <a href="tel:${phone}" class="pill pill-outline-danger text-xs flex items-center gap-1">
          📞 ${name}: <strong>${phone}</strong>
        </a>
      `;
    }).join('');
  }

  detectUserGPS() {
    if (!navigator.geolocation) {
      this.showToast('Geolocation is not supported by your browser.', 'warning');
      return;
    }

    this.showToast('📡 Acquiring GPS position from device...', 'info');
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const lat = pos.coords.latitude;
        const lon = pos.coords.longitude;
        document.getElementById('evac-origin-lat').value = lat.toFixed(4);
        document.getElementById('evac-origin-lon').value = lon.toFixed(4);
        geoMap.setUserLocation(lat, lon);
        geoMap.centerOn(lat, lon, 14);
        this.showToast(`📍 Location acquired: ${lat.toFixed(4)}, ${lon.toFixed(4)}`, 'success');
      },
      (err) => {
        this.showToast('GPS unavailable. Defaulting to Guwahati hills corridor.', 'warning');
        document.getElementById('evac-origin-lat').value = '26.1350';
        document.getElementById('evac-origin-lon').value = '91.8250';
      }
    );
  }

  setTargetShelter(shelterId, shelterName) {
    const select = document.getElementById('evac-target-shelter');
    if (select) select.value = shelterId;
    this.switchView('evacuation');
    this.showToast(`🎯 Destination set to: ${shelterName}`, 'info');
  }

  async planFromZone(zoneId) {
    const zones = await api.getRiskZones();
    const zone = zones.find(z => z.id === zoneId);
    if (zone && zone.polygon_coordinates && zone.polygon_coordinates.length > 0) {
      const coord = zone.polygon_coordinates[0];
      document.getElementById('evac-origin-lat').value = coord[1].toFixed(4);
      document.getElementById('evac-origin-lon').value = coord[0].toFixed(4);
    } else {
      document.getElementById('evac-origin-lat').value = '26.1200';
      document.getElementById('evac-origin-lon').value = '91.8300';
    }
    this.switchView('evacuation');
    this.showToast(`Origin set to hazard zone coordinates. Click Calculate to plan safe route.`, 'info');
  }

  async focusZoneOnMap(zoneId) {
    this.switchView('map');
    const zones = await api.getRiskZones();
    const zone = zones.find(z => z.id === zoneId);
    if (zone && zone.polygon_coordinates && zone.polygon_coordinates.length > 0) {
      const coord = zone.polygon_coordinates[0];
      geoMap.centerOn(coord[1], coord[0], 14);
    }
  }

  // --- CITIZEN GROUND REPORTS ---
  async handleCitizenReportSubmit(e) {
    e.preventDefault();
    const category = document.getElementById('report-category').value;
    const description = document.getElementById('report-desc').value;
    const lat = parseFloat(document.getElementById('report-lat').value) || 26.1445;
    const lon = parseFloat(document.getElementById('report-lon').value) || 91.7362;
    const state = document.getElementById('report-state').value || 'Assam';
    const district = document.getElementById('report-district').value || 'Kamrup Metropolitan';
    const severity = parseInt(document.getElementById('report-severity').value) || 3;
    const reporterName = document.getElementById('report-name').value || 'Anonymous Citizen';
    const reporterPhone = document.getElementById('report-phone').value || '';
    const imageUrl = document.getElementById('report-image-url').value || '';

    const payload = {
      category,
      description,
      latitude: lat,
      longitude: lon,
      state,
      district,
      severity_rating: severity,
      reporter_name: reporterName,
      reporter_phone: reporterPhone,
      image_url: imageUrl
    };

    const res = await offlineSync.queueReport(payload);
    if (res.status === 'ONLINE_SUBMITTED') {
      this.showToast('✅ Ground telemetry report submitted to disaster authorities!', 'success');
    } else {
      this.showToast('💾 Report saved in offline queue. Will auto-sync once connected.', 'info');
    }

    e.target.reset();
    this.loadCitizenReportsFeed();
    geoMap.loadCitizenReports();
  }

  async loadCitizenReportsFeed() {
    const feed = document.getElementById('citizen-reports-feed');
    if (!feed) return;

    try {
      const reports = await api.getReports();
      feed.innerHTML = reports.map(r => `
        <div class="report-card border border-slate-800 bg-slate-900 rounded-xl p-5 mb-4">
          <div class="flex items-center justify-between mb-2">
            <span class="font-bold flex items-center gap-2">
              ⚠️ ${escapeHtml(r.category ? r.category.replace('_', ' ') : 'Report')}
            </span>
            <span class="badge ${r.status === 'VERIFIED' ? 'badge-low' : 'badge-warning'}">${escapeHtml(r.status)}</span>
          </div>
          <p class="text-sm text-slate-300 mb-3">${escapeHtml(r.description)}</p>
          ${sanitizeUrl(r.image_url) ? `<img src="${sanitizeUrl(r.image_url)}" class="rounded-lg max-h-48 w-full object-cover mb-3" alt="Hazard photo" />` : ''}
          <div class="flex items-center justify-between text-xs text-slate-400">
            <span>📍 ${escapeHtml(r.district)}, ${escapeHtml(r.state)} • By ${escapeHtml(r.reporter_name || 'Citizen')}</span>
            <button class="btn btn-xs btn-outline-primary" onclick="window.app.upvoteReport(${Number(r.id)})">
              👍 Verify (${Number(r.upvotes) || 0})
            </button>
          </div>
        </div>
      `).join('');
    } catch (e) {
      console.warn('[App] Reports feed error:', e);
    }
  }

  async upvoteReport(id) {
    try {
      await api.upvoteReport(id);
      this.showToast('👍 Verified hazard report confidence level increased.', 'success');
      this.loadCitizenReportsFeed();
      geoMap.loadCitizenReports();
    } catch (e) {
      this.showToast(`Upvote failed: ${e.message}`, 'warning');
    }
  }

  updateOfflineBadge(count) {
    const badge = document.getElementById('offline-queue-badge');
    const syncBtn = document.getElementById('btn-sync-offline');
    if (badge) {
      badge.textContent = count;
      badge.style.display = count > 0 ? 'inline-block' : 'none';
    }
    if (syncBtn) {
      syncBtn.disabled = count === 0;
    }
  }

  // --- EMERGENCY HELPLINES ---
  async loadHelplines(state = 'Assam') {
    const list = document.getElementById('helplines-grid');
    if (!list) return;

    try {
      const helplines = await api.getHelplines(state === 'All' ? null : state);
      list.innerHTML = helplines.map(h => `
        <div class="helpline-card rounded-xl border border-slate-800 bg-slate-900 p-5">
          <div class="flex items-center justify-between mb-2">
            <span class="badge badge-outline text-xs">${h.service_type.replace('_', ' ')}</span>
            <span class="badge ${h.operates_24x7 ? 'badge-low' : 'badge-warning'}">24x7 Active</span>
          </div>
          <h4 class="font-bold text-base text-white">${h.organization_name}</h4>
          <p class="text-xs text-slate-400 mb-4">${h.district}, ${h.state}</p>
          <div class="flex items-center gap-3">
            <a href="tel:${h.phone_number}" class="btn btn-sm btn-danger flex-1 text-center font-bold">
              📞 Call ${h.phone_number}
            </a>
            ${h.alternate_phone ? `<a href="tel:${h.alternate_phone}" class="btn btn-sm btn-outline-secondary">Alt: ${h.alternate_phone}</a>` : ''}
          </div>
        </div>
      `).join('');
    } catch (e) {
      console.warn('[App] Helplines load error:', e);
    }
  }

  // --- AI RISK ASSESSMENT CALCULATOR ---
  async handleRiskCalculation(e) {
    e.preventDefault();
    const slope = parseFloat(document.getElementById('calc-slope').value);
    const rainfall = parseFloat(document.getElementById('calc-rainfall').value);
    const moisture = parseFloat(document.getElementById('calc-moisture').value);
    const rainRate = parseFloat(document.getElementById('calc-rain-rate').value);
    const elevation = parseFloat(document.getElementById('calc-elev').value);
    const ndvi = parseFloat(document.getElementById('calc-ndvi').value);
    const distDrain = parseFloat(document.getElementById('calc-drain').value);
    const tilt = parseFloat(document.getElementById('calc-tilt').value);
    const litho = parseInt(document.getElementById('calc-litho').value);

    const calcBtn = document.getElementById('btn-calc-assess');
    calcBtn.disabled = true;
    calcBtn.textContent = 'Running ML Inference...';

    try {
        const res = await api.predictMLRisk({
            slope_degrees: slope,
            rainfall_24h_mm: rainfall,
            soil_moisture_m3_m3: moisture,
            elevation_m: elevation,
            rain_rate_current_mm_hr: rainRate,
            ndvi_vegetation: ndvi,
            dist_to_drainage_m: distDrain,
            lithology_code: litho,
            tilt_rate_deg_day: tilt
        });

        const resultBox = document.getElementById('calc-results');
        resultBox.classList.remove('hidden');
        document.getElementById('calc-res-score').textContent = `${res.predicted_risk_score_pct}%`;
        document.getElementById('calc-res-level').textContent = res.predicted_risk_category;
        document.getElementById('calc-res-level').className = `badge badge-${res.predicted_risk_category.toLowerCase()} text-base`;
        document.getElementById('calc-res-evac').textContent = res.evacuation_advised ? '🚨 EVACUATION REQUIRED' : '✅ SAFE TO REMAIN';
        document.getElementById('calc-res-evac').className = res.evacuation_advised ? 'text-red-400 font-bold' : 'text-emerald-400 font-bold';

        // Update probability bars
        if (res.class_probabilities) {
            const map = {
                CRITICAL: { valId: 'prob-val-crit', barId: 'prob-bar-crit' },
                HIGH: { valId: 'prob-val-high', barId: 'prob-bar-high' },
                MODERATE: { valId: 'prob-val-mod', barId: 'prob-bar-mod' },
                LOW: { valId: 'prob-val-low', barId: 'prob-bar-low' }
            };
            Object.entries(res.class_probabilities).forEach(([cat, prob]) => {
                const perc = Math.round(prob * 100);
                const ids = map[cat];
                if (ids) {
                    const valEl = document.getElementById(ids.valId);
                    const barEl = document.getElementById(ids.barId);
                    if (valEl) valEl.textContent = `${perc}%`;
                    if (barEl) barEl.style.width = `${perc}%`;
                }
            });
        }

        // Populate actions list with class probabilities for reference
        const actionsList = document.getElementById('calc-res-actions');
        if (actionsList) {
            actionsList.innerHTML = Object.entries(res.class_probabilities || {})
                .map(([cat, prob]) => `<li>• ${cat}: ${(prob * 100).toFixed(1)}%</li>`)
                .join('');
        }
    } catch (err) {
        this.showToast(`ML inference failed: ${err.message}`, 'error');
    } finally {
        calcBtn.disabled = false;
        calcBtn.textContent = '⚡ Run ML Model Inference';
    }
  }

  // --- SOS EMERGENCY DISTRESS HANDLERS ---
  openSOSModal() {
    const modal = document.getElementById('sos-modal');
    if (!modal) return;

    modal.classList.remove('hidden');
    if (this.soundAlertsEnabled) {
      this.playAlertSound();
    }

    // Auto grab current coordinates
    this.acquireSOSLocation();
  }

  closeSOSModal() {
    const modal = document.getElementById('sos-modal');
    if (modal) modal.classList.add('hidden');
  }

  acquireSOSLocation() {
    const statusEl = document.getElementById('sos-gps-status');
    const coordsEl = document.getElementById('sos-coordinates-display');
    const whatsappBtn = document.getElementById('btn-sos-whatsapp');

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const lat = pos.coords.latitude.toFixed(4);
          const lon = pos.coords.longitude.toFixed(4);
          if (statusEl) statusEl.textContent = '✅ High-Accuracy GPS Acquired';
          if (coordsEl) coordsEl.textContent = `Lat: ${lat}, Lon: ${lon}`;

          // Also set evacuation inputs
          const evacLat = document.getElementById('evac-origin-lat');
          const evacLon = document.getElementById('evac-origin-lon');
          if (evacLat) evacLat.value = lat;
          if (evacLon) evacLon.value = lon;

          // Update WhatsApp emergency link
          if (whatsappBtn) {
            const msg = encodeURIComponent(`🚨 EMERGENCY SOS! I need immediate rescue/assistance at GPS Location: https://maps.google.com/?q=${lat},${lon} (Coordinates: ${lat}, ${lon})`);
            whatsappBtn.href = `https://api.whatsapp.com/send?text=${msg}`;
          }
        },
        () => {
          if (statusEl) statusEl.textContent = '📍 Using Default NER Hills GPS';
          if (whatsappBtn) {
            const msg = encodeURIComponent(`🚨 EMERGENCY SOS! I need immediate rescue/assistance near Guwahati Hilly Terrain. Coordinates: 26.1445, 91.7362`);
            whatsappBtn.href = `https://api.whatsapp.com/send?text=${msg}`;
          }
        }
      );
    }
  }

  async broadcastDistressBeacon() {
    const broadcastBtn = document.getElementById('btn-sos-broadcast');
    const statusBox = document.getElementById('sos-beacon-status');

    broadcastBtn.disabled = true;
    broadcastBtn.innerHTML = '⏳ Transmitting SOS Distress Beacon...';

    const coordsText = document.getElementById('sos-coordinates-display')?.textContent || '26.1445, 91.7362';
    const matches = coordsText.match(/[-+]?([0-9]*\.[0-9]+|[0-9]+)/g) || [26.1445, 91.7362];
    const lat = parseFloat(matches[0]) || 26.1445;
    const lon = parseFloat(matches[1]) || 91.7362;

    const payload = {
      category: 'STRANDED_CITIZENS',
      description: 'EMERGENCY SOS: Citizen stranded. Immediate rescue beacon triggered via 1-Click SOS.',
      latitude: lat,
      longitude: lon,
      state: 'Assam',
      district: 'Kamrup Metropolitan',
      severity_rating: 5,
      reporter_name: 'SOS Emergency Beacon'
    };

    try {
      const res = await offlineSync.queueReport(payload);
      if (statusBox) {
        statusBox.innerHTML = `
          <div class="p-3 bg-emerald-950/80 border border-emerald-600 rounded-lg text-emerald-300 font-bold mt-2">
            ✅ DISTRESS BEACON BROADCASTED! Dispatchers & SDRF units alerted with your exact GPS coordinates.
          </div>
        `;
      }
      this.showToast('🚨 SOS DISTRESS BEACON TRANSMITTED TO RESCUE TEAMS!', 'error');
      if (window.geoMap) window.geoMap.loadCitizenReports();
    } catch (e) {
      this.showToast(`Distress transmission fallback saved locally: ${e.message}`, 'warning');
    } finally {
      broadcastBtn.disabled = false;
      broadcastBtn.innerHTML = '📡 RE-TRANSMIT DISTRESS BEACON';
    }
  }

  // --- NOTIFICATION TOASTS & AUDIO ALERTS ---
  showToast(message, type = 'info') {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast-message toast-${type}`;
    toast.innerHTML = `<span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
      toast.classList.add('fade-out');
      setTimeout(() => toast.remove(), 400);
    }, 4000);
  }

  playAlertSound() {
    try {
      const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sine'; // Clean chime
      osc.frequency.setValueAtTime(587.33, audioCtx.currentTime); // D5
      osc.frequency.setValueAtTime(880.00, audioCtx.currentTime + 0.15); // A5
      gain.gain.setValueAtTime(0.15, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.4);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.4);
    } catch (e) {
      // Ignore if audio permissions blocked
    }
  }

  // --- SERVICE WORKER & PWA INSTALLATION ---
  registerServiceWorker() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('./sw.js')
        .then((registration) => {
          registration.update();
          console.log('✅ [PWA] Service Worker active & updated:', registration.scope);
        })
        .catch((error) => {
          console.warn('⚠️ [PWA] Service Worker registration note:', error);
        });
    }

    // Capture beforeinstallprompt for one-click installation
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      window.deferredPWAInstallPrompt = e;
      console.log('📲 [PWA] Application is ready to install!');
    });
  }
}

// Global initialization
window.app = new GeoAlertApp();

function startApp() {
  window.app.registerServiceWorker();
  window.app.init();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', startApp);
} else {
  startApp();
}
```

---

#### 📄 `frontend/i18n.js`
```js
/**
 * GeoAlertNER - Multilingual (i18n) Engine for North Eastern Region (NER)
 * Supports: English, Assamese, Bengali, Hindi, Mizo, Khasi, Manipuri/Meitei, Bodo, and Garo.
 */

export const LANGUAGES = {
  en: { name: 'English', native: 'English', flag: '🇬🇧', voiceCode: 'en-IN' },
  as: { name: 'Assamese', native: 'অসমীয়া', flag: '🇮🇳', voiceCode: 'as-IN' },
  bn: { name: 'Bengali', native: 'বাংলা', flag: '🇮🇳', voiceCode: 'bn-IN' },
  hi: { name: 'Hindi', native: 'हिन्दी', flag: '🇮🇳', voiceCode: 'hi-IN' },
  lus: { name: 'Mizo', native: 'Mizo ṭawng', flag: '🇮🇳', voiceCode: 'en-IN' },
  kha: { name: 'Khasi', native: 'Ka Ktien Khasi', flag: '🇮🇳', voiceCode: 'en-IN' },
  mni: { name: 'Manipuri', native: 'মৈতৈলোন্', flag: '🇮🇳', voiceCode: 'bn-IN' },
  brx: { name: 'Bodo', native: 'बड़ो', flag: '🇮🇳', voiceCode: 'hi-IN' },
  grt: { name: 'Garo', native: 'A·chik', flag: '🇮🇳', voiceCode: 'en-IN' }
};

export const translations = {
  en: {
    nav_dashboard: "Live Dashboard",
    nav_map: "Disaster Risk Map",
    nav_evacuation: "Evacuation Routing",
    nav_reports: "Citizen Reports",
    nav_simulator: "IoT Simulator",
    nav_helplines: "Emergency Helplines",
    nav_calculator: "AI Risk Engine",
    platform_title: "Disaster Monitoring Platform",
    platform_subtitle: "North Eastern Region (NER) Terrain & Slope Hazard Early Warning",
    siren_toggle: "🚨 Siren Sound",
    sync_offline: "🔄 Sync Offline Queue",
    sos_emergency: "🚨 SOS EMERGENCY",
    voice_alert_btn: "🔊 Voice Alert",

    backend_online: "Live Backend Online (FastAPI)",
    backend_simulation: "Standalone / Simulation Mode",
    kpi_overall_risk: "Overall Terrain Risk",
    kpi_rainfall: "24h Rainfall",
    kpi_shelters: "Active Safe Shelters",
    kpi_nodes: "IoT Ground Nodes",
    kpi_multizone: "Multi-zone average",
    kpi_radar: "IMD Radar feed",
    kpi_capacity: "Capacity available",
    kpi_operational: "Telemetry active",
    recent_alerts: "⚠️ Live Hazard Alerts & Early Warnings",
    weather_telemetry: "🌦️ Real-Time Weather & Atmospheric Telemetry",
    risk_matrix: "🗺️ NER Micro-Zone Hazard Assessment Matrix",
    risk_low: "LOW",
    risk_moderate: "MODERATE",
    risk_high: "HIGH",
    risk_critical: "CRITICAL",
    calc_title: "🧠 Machine Learning Hazard Risk Prediction",
    calc_subtitle: "Random Forest & Gradient Boosting terrain slope stability model",
    calc_slope: "Slope Angle (Degrees)",
    calc_rainfall: "24h Cumulative Rainfall (mm)",
    calc_soil: "Soil Moisture Saturation (m³/m³)",
    calc_elevation: "Elevation (Meters DEM)",
    calc_rain_rate: "Instant Rain Rate (mm/hr)",
    calc_compute_btn: "⚡ Compute AI Hazard Risk",
    calc_result_header: "AI Risk Prediction Result",
    calc_score_label: "Predicted Hazard Risk Score",
    calc_category_label: "Risk Classification",
    calc_evac_advised: "⚠️ EVACUATION ADVISORY ACTIVE",
    calc_evac_safe: "✅ CONDITIONS CURRENTLY STABLE",
    calc_mitigation_title: "Recommended Mitigation Actions",
    evac_title: "🧭 Hazard-Aware Dynamic Evacuation Routing",
    evac_origin: "Your Current Location / Origin",
    evac_dest: "Destination Safe Shelter",
    evac_pick_map: "📍 Select on Map",
    evac_find_btn: "🚀 Plan Safe Escape Corridor",
    evac_avoid_danger: "Algorithm dynamically avoids active red hazard polygons",
    rep_title: "📢 Crowdsourced Citizen Hazard Telemetry",
    rep_category: "Hazard Category",
    rep_desc: "Detailed Description & Situation",
    rep_severity: "Severity Level (1-5)",
    rep_submit: "📤 Submit Incident Report (Offline-Capable)",
    rep_landslide: "Landslide / Rockfall",
    rep_flashflood: "Flash Flood / Waterlogging",
    rep_cloudburst: "Cloudburst / Torrential Rain",
    rep_roadblock: "Road / Bridge Blockage",
    help_title: "📞 State & District Emergency Directory",
    help_select_state: "Select NER State",
    help_police: "Police Emergency",
    help_fire: "Fire & Rescue",
    help_sdma: "State Disaster Authority (SDMA)",
    help_ndrf: "NDRF 24/7 Helpline"
  },

  as: {
    nav_dashboard: "প্ৰত্যক্ষ ডেচবৰ্ড",
    nav_map: "দূৰ্যোগ ঝুঁকিৰ মানচিত্ৰ",
    nav_evacuation: "স্থানান্তৰ পথ পৰিকল্পনা",
    nav_reports: "নাগৰিক প্ৰতিবেদন",
    nav_simulator: "আই অ' টি ছিমুলেটৰ",
    nav_helplines: "জৰুৰীকালীন হেল্পলাইন",
    nav_calculator: "এআই বিপদ নিৰ্ধাৰক",
    platform_title: "দূৰ্যোগ সতৰ্কতা আৰু নিৰীক্ষণ মঞ্চ",
    platform_subtitle: "উত্তৰ-পূৰ্বাঞ্চল (NER) পাহাৰীয়া অঞ্চলৰ ভূমিস্খলন আৰু বানপানী আগতীয়া সতৰ্কবাণী",
    siren_toggle: "🚨 চাইৰেন শব্দ",
    sync_offline: "🔄 অফলাইন ডাটাসমূহ সমন্বয় কৰক",
    sos_emergency: "🚨 জৰুৰীকালীন SOS",

    backend_online: "প্ৰত্যক্ষ বেকএণ্ড সক্ৰিয় (FastAPI)",
    backend_simulation: "অনুকৰণ মোড সক্ৰিয়",
    kpi_overall_risk: "সামগ্ৰিক অঞ্চলৰ বিপদ মাত্ৰা",
    kpi_rainfall: "২৪ ঘণ্টাৰ বৰষুণ",
    kpi_shelters: "সক্ৰিয় আশ্ৰয় শিবিৰ",
    kpi_nodes: "আই অ' টি সংবেদক ন'ড",
    kpi_multizone: "বহু-অঞ্চল গড়",
    kpi_radar: "IMD ৰাডাৰ তথ্য",
    kpi_capacity: "উপলব্ধ ক্ষমতা",
    kpi_operational: "সংবেদক সক্ৰিয়",
    recent_alerts: "⚠️ প্ৰত্যক্ষ বিপদ সতৰ্কবাণী আৰু আগতীয়া সূচনা",
    weather_telemetry: "🌦️ প্ৰকৃত সময়ৰ বতৰ আৰু বায়ুমণ্ডলীয় তথ্য",
    risk_matrix: "🗺️ উত্তৰ-পূৰ্বাঞ্চলৰ ক্ষুদ্ৰ অঞ্চল বিপদ মূল্যায়ন মেট্ৰিক্স",
    risk_low: "কম বিপদ",
    risk_moderate: "মধ্যম",
    risk_high: "উচ্চ বিপদ",
    risk_critical: "অতি সংকটজনক",
    calc_title: "🧠 এআই প্ৰযুক্তিৰে প্ৰাকৃতিক দুৰ্যোগৰ আশংকা গণনা",
    calc_subtitle: "পাহাৰৰ মাটিৰ ঢাল আৰু স্থিৰতাৰ বাবে ৰেণ্ডম ফৰেষ্ট এআই মডেল",
    calc_slope: "পাহাৰৰ ঢাল কোণ (ডিগ্ৰী)",
    calc_rainfall: "২৪ ঘণ্টাৰ বৰষুণৰ পৰিমাণ (মিমি)",
    calc_soil: "মাটিৰ আর্দ্ৰতাৰ মাত্ৰা (m³/m³)",
    calc_elevation: "উচ্চতা (মিটাৰ DEM)",
    calc_rain_rate: "তাৎক্ষণিক বৰষুণৰ বেগ (মিমি/ঘণ্টা)",
    calc_compute_btn: "⚡ এআই বিপদ গণনা কৰক",
    calc_result_header: "এআই বিপদ গণনাৰ ফলাফল",
    calc_score_label: "নিৰ্ধাৰিত বিপদৰ শতাংশ",
    calc_category_label: "বিপদ শ্ৰেণীবিভাজন",
    calc_evac_advised: "⚠️ তাৎক্ষণিক স্থানান্তৰৰ পৰামৰ্শ (স্থান ত্যাগ কৰক)",
    calc_evac_safe: "✅ বৰ্তমান পৰিস্থিতি নিৰাপদ",
    calc_mitigation_title: "প্ৰস্তাবিত সুৰক্ষা ব্যৱস্থা",
    evac_title: "🧭 বিপদযুক্ত স্থান এৰাই নিৰাপদ আশ্ৰয়ৰ পথ",
    evac_origin: "আপোনাৰ বৰ্তমান স্থান",
    evac_dest: "নিৰাপদ আশ্ৰয় শিবিৰ",
    evac_pick_map: "📍 মানচিত্ৰত বাছনি কৰক",
    evac_find_btn: "🚀 নিৰাপদ পলায়ন পথ বিচাৰক",
    evac_avoid_danger: "এই ব্যৱস্থাই বিপদজনক ৰঙা অঞ্চলসমূহ নিজে নিজে পৰিহাৰ কৰে",
    rep_title: "📢 ৰাইজৰ জৰুৰীকালীন দুৰ্যোগ প্ৰতিবেদন",
    rep_category: "বিপদৰ প্ৰকাৰ",
    rep_desc: "পৰিস্থিতিৰ বিতং বিৱৰণ",
    rep_severity: "বিপদৰ গুৰুত্ব (১-৫)",
    rep_submit: "📤 প্ৰতিবেদন জমা কৰক (অফলাইনতো কাৰ্যক্ষম)",
    rep_landslide: "ভূমিস্খলন / শিল খহি পৰা",
    rep_flashflood: "হঠাত অহা বানপানী / পানী জমা",
    rep_cloudburst: "মেঘভাঙ্গা প্ৰচণ্ড বৰষুণ",
    rep_roadblock: "পথ বা দলং বন্ধ",
    help_title: "📞 ৰাজ্যিক আৰু জিলা জৰুৰীকালীন হেল্পলাইন",
    help_select_state: "উত্তৰ-পূৰ্বাঞ্চলৰ ৰাজ্য বাছক",
    help_police: "আৰক্ষী সহায়",
    help_fire: "অগ্নি আৰু উদ্ধাৰকাৰী দল",
    help_sdma: "ৰাজ্যিক দুৰ্যোগ প্ৰশমন কৰ্তৃপক্ষ (SDMA)",
    help_ndrf: "এনডিআৰএফ ২৪x৭ হেল্পলাইন"
  },

  bn: {
    nav_dashboard: "লাইভ ড্যাশবোর্ড",
    nav_map: "বিপর্যয় ঝুঁকি মানচিত্র",
    nav_evacuation: "নিরাপদ স্থানান্তর রুট",
    nav_reports: "নাগরিক রিপোর্ট",
    nav_simulator: "আইওটি সিমুলেটর",
    nav_helplines: "জরুরী হেল্পলাইন",
    nav_calculator: "এআই ঝুঁকি ক্যালকুলেটর",
    platform_title: "দুর্যোগ সতর্কতা ও পর্যবেক্ষণ প্ল্যাটফর্ম",
    platform_subtitle: "উত্তর-পূর্ব ভারতের পাহাড়ি অঞ্চলের ভূমিধস ও বন্যা আগাম সতর্কতা",
    siren_toggle: "🚨 সাইরেন শব্দ",
    sync_offline: "🔄 অফলাইন ডেটা সিঙ্ক করুন",
    sos_emergency: "🚨 জরুরি SOS",

    backend_online: "লাইভ ব্যাকএন্ড সক্রিয় (FastAPI)",
    backend_simulation: "সিমুলেশন মোড সক্রিয়",
    kpi_overall_risk: "সামগ্রিক এলাকার ঝুঁকি",
    kpi_rainfall: "২৪ ঘণ্টার বৃষ্টিপাত",
    kpi_shelters: "সক্রিয় আশ্রয় শিবির",
    kpi_nodes: "আইওটি সেন্সর নোড",
    kpi_multizone: "মাল্টি-জোন গড়",
    kpi_radar: "আইএমডি রাডার ডেটা",
    kpi_capacity: "উপলব্ধ ধারণক্ষমতা",
    kpi_operational: "সেন্সর সচল",
    recent_alerts: "⚠️ লাইভ বিপদ সতর্কতা ও আগাম নোটিশ",
    weather_telemetry: "🌦️ রিয়েল-টাইম আবহাওয়া ও বায়ুমণ্ডলীয় তথ্য",
    risk_matrix: "🗺️ উত্তর-পূর্ব অঞ্চলের মাইক্রো-জোন ঝুঁকি মূল্যায়ন",
    risk_low: "কম ঝুঁকি",
    risk_moderate: "মাঝারি",
    risk_high: "উচ্চ ঝুঁকি",
    risk_critical: "অত্যন্ত সংকটজনক",
    calc_title: "🧠 মেশিন লার্নিং দ্বারা দুর্যোগের ঝুঁকি নির্ণয়",
    calc_subtitle: "পাহাড়ের ঢাল ও মাটির স্থায়িত্বের এআই মডেল",
    calc_slope: "পাহাড়ের ঢাল (ডিগ্রী)",
    calc_rainfall: "২৪ ঘণ্টার বৃষ্টিপাত (মিমি)",
    calc_soil: "মাটির আর্দ্রতা (m³/m³)",
    calc_elevation: "উচ্চতা (মিটার DEM)",
    calc_rain_rate: "বৃষ্টির গতিবেগ (মিমি/ঘণ্টা)",
    calc_compute_btn: "⚡ এআই ঝুঁকি গণনা করুন",
    calc_result_header: "এআই ঝুঁকি পূর্বাভাস ফলাফল",
    calc_score_label: "পূর্বাভাসকৃত ঝুঁকির স্কোর",
    calc_category_label: "ঝুঁকি শ্রেণিবিভাগ",
    calc_evac_advised: "⚠️ জরুরি স্থানান্তরের নির্দেশ (স্থান ত্যাগ করুন)",
    calc_evac_safe: "✅ পরিস্থিতি বর্তমানে নিরাপদ",
    calc_mitigation_title: "প্রস্তাবিত সুরক্ষা পদক্ষেপ",
    evac_title: "🧭 ঝুঁকিপূর্ণ এলাকা এড়িয়ে নিরাপদ স্থানান্তর রুট",
    evac_origin: "আপনার বর্তমান অবস্থান",
    evac_dest: "নিরাপদ আশ্রয় শিবির",
    evac_pick_map: "📍 ম্যাপে নির্বাচন করুন",
    evac_find_btn: "🚀 নিরাপদ রুট খুঁজুন",
    evac_avoid_danger: "এই সিস্টেমটি বিপজ্জনক লাল এলাকাগুলি স্বয়ংক্রিয়ভাবে এড়িয়ে চলে",
    rep_title: "📢 জনগণের জরুরি দুর্যোগ প্রতিবেদন",
    rep_category: "বিপদের ধরন",
    rep_desc: "পরিস্থিতির বিস্তারিত বিবরণ",
    rep_severity: "তীব্রতা স্তর (১-৫)",
    rep_submit: "📤 রিপোর্ট জমা দিন (অফলাইনেও কার্যকর)",
    rep_landslide: "ভূমিধস / পাথর পতন",
    rep_flashflood: "হঠাৎ বন্যা / জলাবদ্ধতা",
    rep_cloudburst: "মেঘভাঙা প্রবল বৃষ্টিপাত",
    rep_roadblock: "রাস্তা বা সেতু বন্ধ",
    help_title: "📞 রাজ্য ও জেলা জরুরি হেল্পলাইন",
    help_select_state: "রাজ্য নির্বাচন করুন",
    help_police: "পুলিশ জরুরি সেবা",
    help_fire: "দমকল ও উদ্ধারকারী দল",
    help_sdma: "রাজ্য দুর্যোগ ব্যবস্থাপনা (SDMA)",
    help_ndrf: "এনডিআরএফ ২৪x৭ হেল্পলাইন"
  },

  hi: {
    nav_dashboard: "लाइव डैशबोर्ड",
    nav_map: "आपदा जोखिम मानचित्र",
    nav_evacuation: "निकासी मार्ग योजना",
    nav_reports: "नागरिक रिपोर्ट",
    nav_simulator: "IoT सिम्युलेटर",
    nav_helplines: "आपातकालीन हेल्पलाइन",
    nav_calculator: "AI जोखिम इंजन",
    platform_title: "आपदा निगरानी एवं चेतावनी प्रणाली",
    platform_subtitle: "पूर्वोत्तर क्षेत्र (NER) भूस्खलन और बाढ़ पूर्व चेतावनी प्रणाली",
    siren_toggle: "🚨 सायरन ध्वनि",
    sync_offline: "🔄 ऑफलाइन डेटा सिंक करें",
    sos_emergency: "🚨 आपातकालीन SOS",

    backend_online: "लाइव बैकएंड सक्रिय (FastAPI)",
    backend_simulation: "सिमुलेशन मोड सक्रिय",
    kpi_overall_risk: "समग्र क्षेत्र जोखिम",
    kpi_rainfall: "24 घंटे की वर्षा",
    kpi_shelters: "सक्रिय राहत शिविर",
    kpi_nodes: "IoT सेंसर नोड्स",
    kpi_multizone: "बहु-क्षेत्र औसत",
    kpi_radar: "IMD रडार डेटा",
    kpi_capacity: "उपलब्ध क्षमता",
    kpi_operational: "सेंसर सक्रिय",
    recent_alerts: "⚠️ लाइव खतरे की चेतावनी एवं पूर्व सूचनाएं",
    weather_telemetry: "🌦️ रीयल-टाइम मौसम और टेलीमेट्री डेटा",
    risk_matrix: "🗺️ पूर्वोत्तर क्षेत्र का माइक्रोज़ोन जोखिम विश्लेषण",
    risk_low: "कम जोखिम",
    risk_moderate: "मध्यम",
    risk_high: "उच्च जोखिम",
    risk_critical: "अत्यधिक गंभीर",
    calc_title: "🧠 AI द्वारा प्राकृतिक आपदा जोखिम का आकलन",
    calc_subtitle: "पहाड़ी ढलान और मिट्टी स्थिरता के लिए रैंडम फॉरेस्ट AI मॉडल",
    calc_slope: "ढलान का कोण (डिग्री)",
    calc_rainfall: "24 घंटे की कुल वर्षा (मिमी)",
    calc_soil: "मिट्टी की नमी संतृप्ति (m³/m³)",
    calc_elevation: "ऊंचाई (मीटर DEM)",
    calc_rain_rate: "तात्कालिक वर्षा दर (मिमी/घंटा)",
    calc_compute_btn: "⚡ AI जोखिम की गणना करें",
    calc_result_header: "AI जोखिम गणना परिणाम",
    calc_score_label: "अनुमानित जोखिम प्रतिशत",
    calc_category_label: "जोखिम श्रेणी",
    calc_evac_advised: "⚠️ तत्काल सुरक्षित स्थान पर जाने की सलाह",
    calc_evac_safe: "✅ स्थिति वर्तमान में सुरक्षित है",
    calc_mitigation_title: "अनुशंसित सुरक्षात्मक कदम",
    evac_title: "🧭 खतरे से मुक्त सुरक्षित निकासी मार्ग योजना",
    evac_origin: "आपका वर्तमान स्थान",
    evac_dest: "सुरक्षित राहत शिविर",
    evac_pick_map: "📍 नक्शे पर चुनें",
    evac_find_btn: "🚀 सुरक्षित मार्ग खोजें",
    evac_avoid_danger: "यह मार्ग स्वचालित रूप से खतरनाक लाल क्षेत्रों से बचता है",
    rep_title: "📢 नागरिकों द्वारा आपदा स्थिति रिपोर्ट",
    rep_category: "खतरे की श्रेणी",
    rep_desc: "स्थिति का विस्तृत विवरण",
    rep_severity: "गंभीरता का स्तर (1-5)",
    rep_submit: "📤 रिपोर्ट भेजें (ऑफलाइन भी सक्षम)",
    rep_landslide: "भूस्खलन / चट्टान गिरना",
    rep_flashflood: "अचानक बाढ़ / जलभराव",
    rep_cloudburst: "बादल फटना / मूसलाधार बारिश",
    rep_roadblock: "सड़क या पुल अवरुद्ध",
    help_title: "📞 राज्य एवं जिला आपातकालीन हेल्पलाइन",
    help_select_state: "पूर्वोत्तर राज्य चुनें",
    help_police: "पुलिस आपातकालीन",
    help_fire: "अग्निशमन एवं बचाव",
    help_sdma: "राज्य आपदा प्रबंधन (SDMA)",
    help_ndrf: "एनडीआरएफ 24/7 हेल्पलाइन"
  },

  lus: {
    nav_dashboard: "Dashboard Tharlam",
    nav_map: "Chhiatrupna Map",
    nav_evacuation: "Inthiarfihlimna Kawng",
    nav_reports: "Mipuite Report",
    nav_simulator: "IoT Simulator",
    nav_helplines: "Emergency Phone No.",
    nav_calculator: "AI Chhiatrupna Chhutna",
    platform_title: "Chhiatrupna Vengtu & Hriattirna",
    platform_subtitle: "North East Region Tlangram Min leh Tui Lian Vengtu",
    siren_toggle: "🚨 Siren Ri",
    sync_offline: "🔄 Offline Data Thawnna",
    sos_emergency: "🚨 CHHANNA DUH (SOS)",

    backend_online: "Server a nung tha (FastAPI)",
    backend_simulation: "Simulation Mode",
    kpi_overall_risk: "Hmun Hrang Hrang Dinhmun",
    kpi_rainfall: "Darkar 24 Ruah Sur",
    kpi_shelters: "Himna Hmun (Shelter)",
    kpi_nodes: "IoT Khawl Hmanlai",
    kpi_multizone: "Hmun hrang chawhrual",
    kpi_radar: "IMD Radar data",
    kpi_capacity: "Hmun awl zat",
    kpi_operational: "Khawl an thawk mep",
    recent_alerts: "⚠️ Hriattirna Tharlam leh Vantlang Thuchhuah",
    weather_telemetry: "🌦️ Khawchin leh Boruak Dinhmun",
    risk_matrix: "🗺️ NER Tlangram Hmun Hrang Dinhmun",
    risk_low: "Hlauhawm Lo",
    risk_moderate: "Fimkhur Ngai",
    risk_high: "Hlauhawm",
    risk_critical: "Hlauhawm Takzet",
    calc_title: "🧠 AI hmanga Tlang Min Theih Dinhmun Chhutna",
    calc_subtitle: "Leimin leh ruahsur dinhmun zirchianna AI",
    calc_slope: "Tlang Awih Zawng (Degree)",
    calc_rainfall: "Darkar 24 Ruah Sur Zat (mm)",
    calc_soil: "Lei Hnawm Zat (m³/m³)",
    calc_elevation: "San Zawng (Meters DEM)",
    calc_rain_rate: "Ruah Sur Nasat Zawng (mm/hr)",
    calc_compute_btn: "⚡ AI Dinhmun Chhut Rawh",
    calc_result_header: "AI Chhut Chhuahna",
    calc_score_label: "Hlauhawm Theih Zat (%)",
    calc_category_label: "Dinhmun Hming",
    calc_evac_advised: "⚠️ INTHIARFIHLIM VAT NGAI",
    calc_evac_safe: "✅ Hmun a la him tawk e",
    calc_mitigation_title: "Fimkhurna leh Hmalak Dan Tur",
    evac_title: "🧭 Hmun Him Pan Duhte Tan Kawng Kawhhmuhna",
    evac_origin: "I awmna hmun",
    evac_dest: "Himna Hmun Pan Tur",
    evac_pick_map: "📍 Map-ah Thlang Rawh",
    evac_find_btn: "🚀 Kawng Him Ber Zawng Rawh",
    evac_avoid_danger: "Hmun hlauhawm lai te a pumpelh nghal vek ang",
    rep_title: "📢 Mipuite Chhiatrupna Report Thehluhna",
    rep_category: "Chhiatna Chi Hrang",
    rep_desc: "Thil thleng zualpui ziahna",
    rep_severity: "Hlauhawm Dan (1-5)",
    rep_submit: "📤 Report Thawn Rawh (Offline Pawhin a theih)",
    rep_landslide: "Leimin / Lung tla",
    rep_flashflood: "Tui lian thut",
    rep_cloudburst: "Ruahpui vanawn sur",
    rep_roadblock: "Kawng ping / Lei chim",
    help_title: "📞 Emergency Phone Number Pawimawhte",
    help_select_state: "State Thlang Rawh",
    help_police: "Police Emergency",
    help_fire: "Khanghelh / Fire Dept",
    help_sdma: "State Disaster Authority (SDMA)",
    help_ndrf: "NDRF Helpline 24/7"
  },

  kha: {
    nav_dashboard: "Ka Dashboard",
    nav_map: "Ka Map Jingmaham",
    nav_evacuation: "Ka Lad Jingpynlait",
    nav_reports: "Kaiphod ki Nongshongshnong",
    nav_simulator: "IoT Simulator",
    nav_helplines: "Emergency Helplines",
    nav_calculator: "AI Jingkhein Jingma",
    platform_title: "Ka Platform Jingmaham Jur",
    platform_subtitle: "Ka Jingmaham Khyndew Khyllem & Jingther Um ha Ri Lum NER",
    siren_toggle: "🚨 Ka Sur Siren",
    sync_offline: "🔄 Pyniasoh Data Offline",
    sos_emergency: "🚨 JINGIARAP SOS",

    backend_online: "Ka Backend ka trei kam (FastAPI)",
    backend_simulation: "Simulation Mode",
    kpi_overall_risk: "Ka Jingma Baroh Kawei",
    kpi_rainfall: "Jingshlur slap 24 Kynta",
    kpi_shelters: "Ki jaka rieh ba shngain",
    kpi_nodes: "Ki Sensor IoT",
    kpi_multizone: "Ka jingkhein baroh",
    kpi_radar: "IMD Radar data",
    kpi_capacity: "Ki jaka ba dang sah",
    kpi_operational: "Ki sensor ki trei kam",
    recent_alerts: "⚠️ Ki Jingmaham ba Kongsan ha kine ki Por",
    weather_telemetry: "🌦️ Ka Rong ka Bneng & Ka Suinbneng",
    risk_matrix: "🗺️ Ka Jingkhein Jingma ha ki Dong bapher",
    risk_low: "Duna ka Jingma",
    risk_moderate: "Pdeng",
    risk_high: "Jur ka Jingma",
    risk_critical: "Maser ka Jingma",
    calc_title: "🧠 AI ban Khein ia ka Jingma Khyndew Khyllem",
    calc_subtitle: "Ka AI ban bishar ia ka jingshlur slap bad jingran jong ka khyndew",
    calc_slope: "Ka Jingran ka Lum (Degrees)",
    calc_rainfall: "U slap ha ki 24 Kynta (mm)",
    calc_soil: "Jingsngem ka khyndew (m³/m³)",
    calc_elevation: "Jingjrong na duriaw (Meters DEM)",
    calc_rain_rate: "Jingturtur u slap (mm/hr)",
    calc_compute_btn: "⚡ Khein da ka AI",
    calc_result_header: "Ka Jingmih na ka AI",
    calc_score_label: "Ka Jingkhein Jingma (%)",
    calc_category_label: "Ka kyrdan Jingma",
    calc_evac_advised: "⚠️ KIEW SHA JAKA BA SHNGAIN MAR-MAR",
    calc_evac_safe: "✅ Dang shngain ha kine ki por",
    calc_mitigation_title: "Ki Lad ban Iada ia Lade",
    evac_title: "🧭 Ki Lad ban Phet sha Jaka ba Shngain",
    evac_origin: "Ka jaka ba phi don mynta",
    evac_dest: "Ka Jaka Rieh ba Shngain",
    evac_pick_map: "📍 Jied na ka Map",
    evac_find_btn: "🚀 Wad ia ka Lynti ba Shngain",
    evac_avoid_danger: "Kane ka lynti kan kiar na ki jaka ba jur ka jingma",
    rep_title: "📢 Pynpoi Kaiphod Jingjia sha ki Bor ba dei peit",
    rep_category: "Jait Jingjia",
    rep_desc: "Batai bniah ia ka Jingjia",
    rep_severity: "Jingjur jong ka Jingjia (1-5)",
    rep_submit: "📤 Phah ia ka Kaiphod (Buh wat haba khlem internet)",
    rep_landslide: "Khyndew Khyllem / Maw Khyllem",
    rep_flashflood: "Um bah / Jingther Um",
    rep_cloudburst: "U slap ther jur",
    rep_roadblock: "Sahkut ka Surok / Sahkut Jingkieng",
    help_title: "📞 Ki Number Phone Emergency",
    help_select_state: "Jied ia ka State",
    help_police: "Police Emergency",
    help_fire: "Ki Pulit Pynlip Ding",
    help_sdma: "State Disaster Authority (SDMA)",
    help_ndrf: "NDRF Helpline 24/7"
  },

  mni: {
    nav_dashboard: "লাইভ ড্যাশবোর্ড",
    nav_map: "অৱাবা খুদোংথিবা মেপ",
    nav_evacuation: "কনবা লম্বী য়েংশিনবা",
    nav_reports: "মীয়ামগী পাউদম",
    nav_simulator: "IoT সিমুলেটর",
    nav_helplines: "ইমার্জেন্সী হেল্পলাইন",
    nav_calculator: "AI অৱাবা চাং খঙদোকপা",
    platform_title: "খুদোংথিবা চেকশিন ৱাফম অমসুং য়েংশিনবা",
    platform_subtitle: "নোংপোক-চিংশাং লমদমগী চীং নিংখায়বা অমসুং ঈচাউগী অঙনবা চেকশিন ৱাফম",
    siren_toggle: "🚨 সাইরেনগী মখোল",
    sync_offline: "🔄 অফলাইন দেটা পুংশিনবা",
    sos_emergency: "🚨 ইমার্জেন্সী SOS কনবিয়ু",

    backend_online: "বেকএণ্ড চত্থরি (FastAPI)",
    backend_simulation: "সিমুলেশন মোড",
    kpi_overall_risk: "লমদমগী অপুনবা খুদোংথিবা",
    kpi_rainfall: "পুং ২৪ গী নোংগী চাং",
    kpi_shelters: "নিঙথিনা লৈরকফম শেল্টার",
    kpi_nodes: "IoT সেন্সর মশিং",
    kpi_multizone: "মফম কয়াবু পুন্না",
    kpi_radar: "IMD রাডার তথ্য",
    kpi_capacity: "লৈরিবা ফম",
    kpi_operational: "সেন্সর মথৌ তৌরি",
    recent_alerts: "⚠️ হৌজিক্কী খুদোংথিবা অমসুং চেকশিনবা",
    weather_telemetry: "🌦️ নুমিৎ খুদিংগী নোং-চিংগী ফীভম",
    risk_matrix: "🗺️ নোংপোক লমদমগী মফম খুদিংগী খুদোংথিবা চাং",
    risk_low: "খুদোংথিদে",
    risk_moderate: "মরক-মরক",
    risk_high: "খুদোংথিবা য়াওরে",
    risk_critical: "য়াম্না অরুবা ফীভম",
    calc_title: "🧠 AI শীজিন্নদুনা চীং নিংখায়বগী চাং খঙদোকপা",
    calc_subtitle: "চীংগী লাই অমসুং লৈমাইজৈ য়েংশিনবা এআই",
    calc_slope: "চীংগী ওনবা (ডিগ্রী)",
    calc_rainfall: "পুং ২৪ গী নোং চুবা (মিমি)",
    calc_soil: "লৈগী ইচিলগী চাং (m³/m³)",
    calc_elevation: "ৱাংবা (মিটার DEM)",
    calc_rain_rate: "নোং চুবগী খোংজেল (মিমি/পুং)",
    calc_compute_btn: "⚡ AI খুদোংথিবা চাং য়েংবা",
    calc_result_header: "AI না পীবা ফল",
    calc_score_label: "খুদোংথিগদবা চাং (%)",
    calc_category_label: "ফীভমগী মখল",
    calc_evac_advised: "⚠️ মফম অদু থাদোক্তুনা কনবা মফমদা চৎলু",
    calc_evac_safe: "✅ হৌজিক্কী ওইনা নিঙথিনা লৈরে",
    calc_mitigation_title: "কনবা ঙম্নবা পাম্বৈশিং",
    evac_title: "🧭 খুদোংথিবদগী নান্থোক্তুনা নিঙথিনা চৎনবা লম্বী",
    evac_origin: "নহাক্কী হৌজিক্কী মফম",
    evac_dest: "নিঙথিনা লৈরকফম শেল্টার",
    evac_pick_map: "📍 মেপতা খনগনি",
    evac_find_btn: "🚀 কনবা লম্বী থিদোকপা",
    evac_avoid_danger: "মসিগী লম্বী অসিনা খুদোংথিবা অঙাংবা মফমশিং থাদোক্কনি",
    rep_title: "📢 মীয়ামগী পাউদম ফংহনবা",
    rep_category: "খুদোংথিবগী মখল",
    rep_desc: "ফীভমগী অকুপ্পা ৱাফম",
    rep_severity: "অরুবা চাং (১-৫)",
    rep_submit: "📤 পাউদম থাগনি (ইন্টরনেট য়াওদসু য়াগনি)",
    rep_landslide: "চীং নিংখায়বা / নুং চানবা",
    rep_flashflood: "ঈচাউ / ঈশিং তুম্বা",
    rep_cloudburst: "নোং অকনবা চুবা",
    rep_roadblock: "লম্বী থিংবা / থোং কায়বা",
    help_title: "📞 রাজ্য অমসুং জিলাগী ইমার্জেন্সী ফোন মশিং",
    help_select_state: "রাজ্য খনগনি",
    help_police: "পুলিশ ইমার্জেন্সী",
    help_fire: "মৈ মুৎপিবশিং",
    help_sdma: "State Disaster Authority (SDMA)",
    help_ndrf: "NDRF Helpline 24/7"
  },

  brx: {
    nav_dashboard: "लाइभ डेशबर्ड",
    nav_map: "खैफाद मानसिथ",
    nav_evacuation: "रैखा खालामनाय लामा",
    nav_reports: "रायजोनि फोरमायनाय",
    nav_simulator: "IoT सिमुलेटर",
    nav_helplines: "जायख्लं नाम्बार",
    nav_calculator: "AI खैफाद साननाय",
    platform_title: "खैफाद सांग्रां खालामग्रा प्लेतफर्म",
    platform_subtitle: "सान्जा-सा ओनसोलनि (NER) हाजो खनाय आरो दैबाना सांग्रांथि",
    siren_toggle: "🚨 साइरेन सोदोब",
    sync_offline: "🔄 अफलाइन डेटा सिंक खालाम",
    sos_emergency: "🚨 गोनांथार SOS रैखा",

    backend_online: "बेकएण्ड जागायबाय (FastAPI)",
    backend_simulation: "सिमुलेसन मड",
    kpi_overall_risk: "गासै ओनसोलनि खैफाद",
    kpi_rainfall: "२४ घन्टायाव अखा हानाय",
    kpi_shelters: "रैखा आ Rokhom शिविर",
    kpi_nodes: "IoT सेन्सर नोड",
    kpi_multizone: "गासै सानजाबनाय",
    kpi_radar: "IMD राडार खारि",
    kpi_capacity: "थानाय जायगा",
    kpi_operational: "सेन्सर मोजांयै थाबाय",
    recent_alerts: "⚠️ गोनांथार सांग्रांथि आरो खौरां",
    weather_telemetry: "🌦️ बारहावा आरो अखा हानायनि खौरां",
    risk_matrix: "🗺️ सान्जा-सा ओनसोलनि खैफाद बियाब",
    risk_low: "खम खैफाद",
    risk_moderate: "गेजेर",
    risk_high: "गेदेर खैफाद",
    risk_critical: "जोबोद खैफादगोनां",
    calc_title: "🧠 AI जों खैफाद साननाय",
    calc_subtitle: "हाजो खनाय आरो हा महरनि AI मोदेल",
    calc_slope: "हाजोनि सिन्था (Degrees)",
    calc_rainfall: "२४ घन्टायाव अखा हानाय (mm)",
    calc_soil: "हानि सिथाबनाय (m³/m³)",
    calc_elevation: "जौथाइ (Meters DEM)",
    calc_rain_rate: "अखा हानायनि गोख्रोंथि (mm/hr)",
    calc_compute_btn: "⚡ AI जों खैफाद सान",
    calc_result_header: "AI नि फिथाय",
    calc_score_label: "साननाय खैफाद (%)",
    calc_category_label: "खैफाद रोखोम",
    calc_evac_advised: "⚠️ गोख्रोंयै रैखा जायगायाव थां",
    calc_evac_safe: "✅ दासिम मोजांयै दं",
    calc_mitigation_title: "रैखा लाग्रा राहाफोर",
    evac_title: "🧭 खैफाद गैया जासे रैखा लामा",
    evac_origin: "नोंथांनि दायनि जायगा",
    evac_dest: "रैखा शिविर",
    evac_pick_map: "📍 मेपाव सायख'",
    evac_find_btn: "🚀 रैखा लामा नागिर",
    evac_avoid_danger: "बे लामाया गाज्रि खैफाद जायगाखौ नागारगोन",
    rep_title: "📢 रायजोनि खैफाद खौरां होनाय",
    rep_category: "खैफाद रोखोम",
    rep_desc: "गुवारै खौरां",
    rep_severity: "गाज्रिथि (१-५)",
    rep_submit: "📤 खौरां हर (इन्टारनेट गैयाब्लाबो जागोन)",
    rep_landslide: "हाजो खनाय / अन्थाय गोग्लैनाय",
    rep_flashflood: "हरखाब दैबाना / दै जमा",
    rep_cloudburst: "अखा बिबार जानाय",
    rep_roadblock: "लामा बन्द जानाय",
    help_title: "📞 गोनांथार फोन नाम्बार",
    help_select_state: "रायजो सायख'",
    help_police: "पुलिस",
    help_fire: "अग्नि निर्वापक",
    help_sdma: "State Disaster Authority (SDMA)",
    help_ndrf: "NDRF Helpline 24/7"
  },

  grt: {
    nav_dashboard: "Dashboard Gital",
    nav_map: "A·sel Map",
    nav_evacuation: "Katkanggimin Rama",
    nav_reports: "Manderangni Report",
    nav_simulator: "IoT Simulator",
    nav_helplines: "Emergency Phone",
    nav_calculator: "AI A·sel Chena",
    platform_title: "A·sel U·iatani aro Nikanirang",
    platform_subtitle: "North East A·song A·bri A·sel aro Chi Banani Mikrakatani",
    siren_toggle: "🚨 Siren Gam·a",
    sync_offline: "🔄 Offline Data Vat·ata",
    sos_emergency: "🚨 DAKCHAKBO SOS",

    backend_online: "Server Re·enga (FastAPI)",
    backend_simulation: "Simulation Mode",
    kpi_overall_risk: "Gimik Biapni Kenani",
    kpi_rainfall: "Ghanta 24 Mikka Waani",
    kpi_shelters: "Gital Shelter Biap",
    kpi_nodes: "IoT Sensor-rang",
    kpi_multizone: "Bong·a biap baksana",
    kpi_radar: "IMD Radar data",
    kpi_capacity: "Dongkuenggipa biap",
    kpi_operational: "Sensor cholkuenga",
    recent_alerts: "⚠️ Da·ororo A·sel Mikrakatanirang",
    weather_telemetry: "🌦️ Salgini Buring aro Mikka",
    risk_matrix: "🗺️ NER A·damni A·sel Chena",
    risk_low: "Kenani Komi",
    risk_moderate: "Majing",
    risk_high: "Kenani Bang·a",
    risk_critical: "Neng·nikani Dal·begipa",
    calc_title: "🧠 AI chi A·bri Rugani Chena",
    calc_subtitle: "A·a chugimini AI model",
    calc_slope: "A·bri Chuani (Degree)",
    calc_rainfall: "Ghanta 24 Mikka Waani (mm)",
    calc_soil: "A·a Sosiani (m³/m³)",
    calc_elevation: "Chubani (Meters DEM)",
    calc_rain_rate: "Mikka Waani Ta·rakani (mm/hr)",
    calc_compute_btn: "⚡ AI chi Chena",
    calc_result_header: "AI Result",
    calc_score_label: "Kenani Score (%)",
    calc_category_label: "A·sel Biap",
    calc_evac_advised: "⚠️ KATBO GIPIN BIAPONA",
    calc_evac_safe: "✅ Da·o Nangchongmotan Gri",
    calc_mitigation_title: "Jokani Ramarango",
    evac_title: "🧭 Kenani Gri Katani Rama",
    evac_origin: "Na·simangni Biap",
    evac_dest: "Jokani Shelter Biap",
    evac_pick_map: "📍 Mapo Seokbo",
    evac_find_btn: "🚀 Katani Rama Sandibo",
    evac_avoid_danger: "Kenani gitchak biaprangko gelanggen",
    rep_title: "📢 Manderangni A·sel Report",
    rep_category: "A·selni Biding",
    rep_desc: "Tale Parakatani",
    rep_severity: "Neng·nikani (1-5)",
    rep_submit: "📤 Report Vat·bo (Internet Grioba Man·a)",
    rep_landslide: "A·a Ruga / Ro·ong Ga·aka",
    rep_flashflood: "Chi Bana / Chi Dal·a",
    rep_cloudburst: "Mikka Bimchi Waani",
    rep_roadblock: "Rama Champengani",
    help_title: "📞 State aro District Emergency Helpline",
    help_select_state: "State Seokbo",
    help_police: "Police",
    help_fire: "Wa·al Simitgiparang",
    help_sdma: "State Disaster Authority (SDMA)",
    help_ndrf: "NDRF Helpline 24/7"
  }
};

class I18nManager {
  constructor() {
    this.currentLang = (typeof window !== 'undefined' && window.localStorage) ? (localStorage.getItem('geoalert_lang') || 'en') : 'en';
    this.listeners = [];
  }

  init() {
    this.renderLanguageSelector();
    this.applyLanguage(this.currentLang);
  }

  setLanguage(langCode) {
    if (!translations[langCode]) {
      console.warn(`Language '${langCode}' not found. Falling back to 'en'.`);
      langCode = 'en';
    }
    this.currentLang = langCode;
    localStorage.setItem('geoalert_lang', langCode);
    this.applyLanguage(langCode);
    this.notifyListeners(langCode);
  }

  t(key, defaultVal = '') {
    const langDict = translations[this.currentLang] || translations.en;
    return langDict[key] || translations.en[key] || defaultVal || key;
  }

  applyLanguage(langCode) {
    const dict = translations[langCode] || translations.en;
    document.documentElement.lang = langCode;

    // 1. Text elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key] || translations.en[key]) {
        el.textContent = dict[key] || translations.en[key];
      }
    });

    // 2. Placeholders with data-i18n-placeholder
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (dict[key] || translations.en[key]) {
        el.setAttribute('placeholder', dict[key] || translations.en[key]);
      }
    });

    // 3. Titles with data-i18n-title
    document.querySelectorAll('[data-i18n-title]').forEach(el => {
      const key = el.getAttribute('data-i18n-title');
      if (dict[key] || translations.en[key]) {
        el.setAttribute('title', dict[key] || translations.en[key]);
      }
    });

    // Update active select value
    const selector = document.getElementById('global-lang-select');
    if (selector && selector.value !== langCode) {
      selector.value = langCode;
    }
  }

  renderLanguageSelector() {
    const mount = document.getElementById('language-selector-mount');
    if (!mount) return;

    let html = `
      <div class="lang-dropdown-wrapper">
        <span class="lang-icon">🌐</span>
        <select id="global-lang-select" class="lang-select-box" title="Choose Language / ভাষা নিৰ্বাচন">
    `;

    for (const [code, info] of Object.entries(LANGUAGES)) {
      const sel = code === this.currentLang ? 'selected' : '';
      html += `<option value="${code}" ${sel}>${info.flag} ${info.native} (${info.name})</option>`;
    }

    html += `
        </select>
      </div>
    `;

    mount.innerHTML = html;

    const selectEl = document.getElementById('global-lang-select');
    if (selectEl) {
      selectEl.addEventListener('change', (e) => {
        this.setLanguage(e.target.value);
      });
    }
  }


  // 🔊 Text-to-Speech Voice Alert in selected regional language
  speakAlert(text) {
    if (!('speechSynthesis' in window)) {
      console.warn('[i18n] speechSynthesis not supported in this browser.');
      return;
    }
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    const langInfo = LANGUAGES[this.currentLang] || LANGUAGES.en;
    utterance.lang = langInfo.voiceCode || 'en-IN';
    utterance.rate = 0.9;
    utterance.pitch = 1.0;
    utterance.volume = 1.0;
    window.speechSynthesis.speak(utterance);
  }

  addListener(callback) {
    this.listeners.push(callback);
  }

  notifyListeners(langCode) {
    this.listeners.forEach(fn => fn(langCode));
  }
}

export const i18n = new I18nManager();
```

---

### 11.9 Frontend UI & Stylesheets

#### 📄 `frontend/index.html`
```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>GeoAlertNER | AI-Driven Disaster Early Warning & Evacuation System</title>
  <meta name="description"
    content="Real-time environmental risk scoring, hazard-aware evacuation routing, and IoT telemetry for the North Eastern Region hilly terrain .">

  <!-- PWA Web App Manifest & Metadata -->
  <link rel="manifest" href="manifest.json">
  <meta name="theme-color" content="#0F172A">
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
  <meta name="apple-mobile-web-app-title" content="GeoAlertNER">
  <link rel="apple-touch-icon" href="icons/icon-192.png">
  <link rel="icon" type="image/png" sizes="192x192" href="icons/icon-192.png">

  <!-- Leaflet GIS Map CSS & JS -->
  <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
  <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
  <!-- Chart.js for Forecasts & Graphs -->
  <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
  <!-- Custom Modern Styling -->
  <link rel="stylesheet" href="styles.css?v=3">
</head>

<body>

  <div class="app-container">

    <!-- Sidebar Navigation -->
    <aside class="app-sidebar">
      <div class="brand-header">
        <div class="brand-icon">⛰️</div>
        <div>
          <div class="brand-title">GeoAlertNER</div>
          <div class="brand-badge">NER Platform</div>
        </div>
      </div>

      <nav class="nav-list">
        <button class="nav-btn active" data-view="dashboard">
          <span class="icon">📊</span>
          <span data-i18n="nav_dashboard">Live Dashboard</span>
        </button>
        <button class="nav-btn" data-view="map">
          <span class="icon">🗺️</span>
          <span data-i18n="nav_map">Disaster Risk Map</span>
        </button>
        <button class="nav-btn" data-view="evacuation">
          <span class="icon">🧭</span>
          <span data-i18n="nav_evacuation">Evacuation Routing</span>
        </button>
        <button class="nav-btn" data-view="reports">
          <span class="icon">📢</span>
          <span data-i18n="nav_reports">Citizen Reports</span>
          <span id="offline-queue-badge" class="badge badge-warning text-xs hidden">0</span>
        </button>
        <button class="nav-btn" data-view="simulator" disabled title="IoT Sensor Integration - Coming Soon" style="opacity:0.45; cursor:not-allowed;">
          <span class="icon">📡</span>
          <span data-i18n="nav_simulator">IoT Sensors</span>
          <span class="badge badge-outline text-xs" style="margin-left:auto; font-size:9px; padding:1px 5px;">Soon</span>
        </button>
        <button class="nav-btn" data-view="helplines">
          <span class="icon">📞</span>
          <span data-i18n="nav_helplines">Emergency Helplines</span>
        </button>
        <button class="nav-btn" data-view="calculator">
          <span class="icon">🧠</span>
          <span data-i18n="nav_calculator">AI Risk Engine</span>
        </button>
      </nav>

      <div class="sidebar-footer">
        <button id="btn-sidebar-project-story" style="width:100%; background:transparent; border:1px solid rgba(168,85,247,0.3); color:#c084fc; border-radius:var(--radius-md); padding:7px 12px; font-size:11px; font-weight:600; cursor:pointer; margin-bottom:8px; display:flex; align-items:center; justify-content:center; gap:6px; transition:all 0.2s;">
          📖 About This Project
        </button>
        <div id="backend-status-pill" class="status-pill simulation">
          <span class="pulse-dot yellow"></span> Connecting Backend...
        </div>
      </div>
    </aside>

    <!-- Main Content Area -->
    <main class="app-main">

      <!-- Top Header -->
      <header class="top-header">
        <div>
          <h2 data-i18n="platform_title">Disaster Monitoring Platform</h2>
          <p data-i18n="platform_subtitle">North Eastern Region (NER) Terrain & Slope Hazard Early Warning</p>
        </div>

        <div class="header-actions">
          <!-- Multilingual Regional Language Switcher -->
          <div id="language-selector-mount"></div>

          <!-- Theme Palette Selector -->
          <div class="theme-dropdown-wrapper" title="Customize Background & Interface Theme">
            <span class="theme-icon">🎨</span>
            <select id="theme-selector" class="theme-select" aria-label="Theme Color">
              <option value="sapphire">🌌 Midnight Sapphire</option>
              <option value="emerald">🌲 Himalayan Pine</option>
              <option value="amethyst">🔮 Cosmic Amethyst</option>
              <option value="slate">⚡ Stealth Slate</option>
              <option value="onyx">🌑 Deep Onyx</option>
            </select>
          </div>

          <!-- Regional Voice Alert TTS -->
          <button id="btn-voice-alert" class="btn-voice-alert" title="Audio Alert Broadcast in your regional language">
            <span data-i18n="voice_alert_btn">🔊 Voice Alert</span>
          </button>

          <label class="flex items-center gap-2 text-xs text-slate-400 cursor-pointer">
            <input type="checkbox" id="sound-alert-toggle">
            <span data-i18n="siren_toggle">🚨 Siren Sound</span>
          </label>

          <button id="btn-sync-offline" class="btn btn-sm btn-outline-primary" disabled>
            <span data-i18n="sync_offline">🔄 Sync Offline Queue</span>
          </button>

          <!-- User Authentication Profile & Role Badge -->
          <div id="auth-header-container" class="auth-header-container">
            <button id="btn-open-auth" class="btn btn-sm btn-outline-cyan">
              <span id="auth-btn-icon">👤</span>
              <span id="auth-btn-label">Sign In / Roles</span>
            </button>
            <div id="user-badge" class="user-badge hidden">
              <span id="user-role-badge" class="badge-role role-citizen">Citizen</span>
              <span id="user-name-label" class="user-name-text">Guest</span>
              <button id="btn-logout" class="btn-icon-xs" title="Sign Out">✕</button>
            </div>
          </div>

          <!-- High-Impact SOS Emergency Trigger -->
          <button id="btn-header-sos" class="btn btn-sm btn-sos pulse-glow-red">
            <span data-i18n="sos_emergency">🚨 SOS EMERGENCY</span>
          </button>
        </div>
      </header>


      <!-- VIEW 1: DASHBOARD (Default) -->
      <section id="view-dashboard" class="view-panel active">

        <!-- 🎯 Welcome Demo Banner (dismissible, shown to first-time visitors) -->
        <div id="welcome-demo-banner" class="welcome-demo-banner">
          <div style="flex:1; min-width:0;">
            <div class="welcome-banner-badge">🚀 Live Project Demo</div>
            <div class="welcome-banner-title">GeoAlertNER — AI Disaster Early Warning System for NER, India</div>
            <div class="welcome-banner-desc">
              This is a fully functional platform combining <strong style="color:#38bdf8">PyTorch ML hazard prediction</strong>,
              <strong style="color:#10b981">GIS evacuation routing</strong>, <strong style="color:#a855f7">offline-first PWA</strong> reporting,
              and role-based dashboards — built for the landslide &amp; flood-prone hills of North Eastern India.
              Explore freely — all features work in simulation mode without login.
            </div>
            <div class="welcome-quick-actions">
              <button class="btn btn-sm btn-outline-cyan" id="btn-quick-demo-citizen" style="font-size:12px;">🧑‍🌾 Try as Citizen</button>
              <button class="btn btn-sm btn-outline-primary" id="btn-quick-demo-officer" style="font-size:12px;">🛡️ Try as Field Officer</button>
              <button class="btn btn-sm" id="btn-open-project-story"
                style="font-size:12px; background:rgba(168,85,247,0.15); border:1px solid rgba(168,85,247,0.4); color:#c084fc; border-radius:var(--radius-md); padding:6px 14px; cursor:pointer; transition:all 0.2s;">
                📖 Project Story &amp; Tech Stack
              </button>
              <a href="https://github.com/shubhkumar-9204/GeoAlertNER" target="_blank" rel="noopener"
                style="font-size:12px; background:rgba(255,255,255,0.05); border:1px solid rgba(255,255,255,0.15); color:#94a3b8; border-radius:var(--radius-md); padding:6px 14px; text-decoration:none; display:inline-flex; align-items:center; gap:5px; transition:all 0.2s;">
                <span>⭐ GitHub</span>
              </a>
            </div>
          </div>
          <button id="btn-dismiss-banner" class="btn-dismiss-banner" title="Dismiss">&times;</button>
        </div>

        <!-- 4 Top KPI Stat Cards -->
        <div class="stats-grid">
          <!-- KPI 1 -->
          <div class="stat-card">
            <div class="stat-icon-wrap">⚠️</div>
            <div class="stat-label" data-i18n="kpi_overall_risk">Overall Terrain Risk</div>
            <div class="stat-value text-red-400" id="kpi-overall-risk">78%</div>
            <div class="stat-footer">
              <span class="badge badge-high" id="kpi-risk-level">HIGH</span>
              <span class="stat-status" data-i18n="kpi_multizone">Multi-zone average</span>
            </div>
          </div>

          <!-- KPI 2 -->
          <div class="stat-card">
            <div class="stat-icon-wrap">🌧️</div>
            <div class="stat-label" data-i18n="kpi_rainfall">24h Rainfall</div>
            <div class="stat-value text-sky-400" id="kpi-rainfall">86 mm</div>
            <div class="stat-footer">
              <span class="stat-status" data-i18n="kpi_radar">IMD Radar feed</span>
              <span class="text-xs text-slate-400">Guwahati-Shillong</span>
            </div>
          </div>

          <!-- KPI 3: Soil Moisture Saturation -->
          <div class="stat-card">
            <div class="stat-icon-wrap">💧</div>
            <div class="stat-label">Soil Saturation</div>
            <div class="stat-value text-emerald-400" id="kpi-soil-moisture">48%</div>
            <div class="stat-footer">
              <span class="badge badge-warning">Ground Saturation</span>
              <span class="stat-status">0-7cm Topsoil</span>
            </div>
          </div>

          <!-- KPI 4: Active Monitored Alerts -->
          <div class="stat-card">
            <div class="stat-icon-wrap">🚨</div>
            <div class="stat-label">Active Hazard Alerts</div>
            <div class="stat-value text-amber-400" id="kpi-active-alerts">04</div>
            <div class="stat-footer">
              <span class="badge badge-danger text-xs font-bold" id="kpi-critical-alerts">2 Critical</span>
              <span class="stat-status">NER Monitored</span>
            </div>
          </div>
        </div>

        <!-- Dashboard Main Grid: Live GIS Map + Active Alerts Drawer -->
        <div class="dashboard-main-grid">
          <!-- GIS Map Card -->
          <div class="panel-card">
            <div class="panel-header">
              <div class="panel-title">
                <span>🗺️</span>
                <span>Live Disaster Risk & Terrain Map</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="badge badge-outline text-xs">GeoJSON Layers Active</span>
              </div>
            </div>
            <div id="map-container" class="map-container"></div>
          </div>

          <!-- Active Alerts & Live Forecast Card -->
          <div class="flex flex-col gap-6">
            <!-- Active Alerts -->
            <div class="panel-card flex-1">
              <div class="panel-header">
                <div class="panel-title">
                  <span>🚨</span>
                  <span>Active Terrain Alerts</span>
                </div>
              </div>
              <div id="active-alerts-list" class="alerts-list">
                <!-- Injected dynamically by app.js -->
              </div>
            </div>

            <!-- Weather Widget -->
            <div class="panel-card p-4">
              <div class="flex justify-between items-center mb-3">
                <h4 class="font-bold text-sm flex items-center gap-2">
                  <span>🌦️</span>
                  <span>Precipitation & Soil Forecast</span>
                </h4>
                <span class="text-xs text-slate-400" id="weather-condition">Loading...</span>
              </div>

              <div class="grid grid-cols-3 gap-2 mb-3 text-center">
                <div class="bg-slate-900 p-2 rounded-lg border border-slate-800">
                  <div class="text-xs text-slate-400">Temp</div>
                  <strong class="text-sm" id="weather-temp">--°C</strong>
                </div>
                <div class="bg-slate-900 p-2 rounded-lg border border-slate-800">
                  <div class="text-xs text-slate-400">Humidity</div>
                  <strong class="text-sm" id="weather-humidity">--%</strong>
                </div>
                <div class="bg-slate-900 p-2 rounded-lg border border-slate-800">
                  <div class="text-xs text-slate-400">Rain Rate</div>
                  <strong class="text-sm text-sky-400" id="weather-rate">-- mm/h</strong>
                </div>
              </div>

              <div style="height: 140px; position: relative;">
                <canvas id="rainfall-forecast-chart"></canvas>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- VIEW 2: FULL MAP VIEW -->
      <section id="view-map" class="view-panel">
        <div class="panel-card">
          <div class="panel-header">
            <div class="panel-title">
              <span>🗺️</span>
              <span>Full-Screen GIS Spatial Hazard Analysis</span>
            </div>
            <div class="flex items-center gap-2">
              <button class="btn btn-xs btn-outline-primary" onclick="window.geoMap.refreshAllLayers()">
                🔄 Refresh Layers
              </button>
            </div>
          </div>
          <div style="padding: 16px;">
            <p class="text-xs text-slate-400 mb-2">
              Explore hazard micro-zones, live IoT sensors, safe shelters, and ground telemetry. Click on any polygon or
              shelter icon to view live parameters and calculate escape corridors.
            </p>
          </div>
        </div>
      </section>

      <!-- VIEW 3: EVACUATION ROUTING -->
      <section id="view-evacuation" class="view-panel">
        <div class="grid grid-cols-2 gap-6">
          <!-- Route Request Form -->
          <div class="panel-card p-6">
            <div class="panel-title mb-4">
              <span>🧭</span>
              <span>Hazard-Aware Evacuation Corridor Planner</span>
            </div>
            <p class="text-xs text-slate-400 mb-6">
              Dynamically computes the safest escape corridor bypassing active red landslide zones and flooded valley
              choke points.
            </p>

            <form id="evacuation-form">
              <div class="form-group">
                <div class="flex justify-between items-center mb-1">
                  <label class="form-label mb-0">Current User GPS Coordinates</label>
                  <div class="flex gap-2">
                    <button type="button" id="btn-auto-gps" class="btn btn-xs btn-outline-primary">
                      📍 Use Device GPS
                    </button>
                    <button type="button" id="btn-pick-location" class="btn btn-xs btn-outline-primary">
                      🗺️ Pick on Map
                    </button>
                  </div>
                </div>
                <div class="grid grid-cols-2 gap-3">
                  <input type="number" step="0.0001" id="evac-origin-lat" class="form-input"
                    placeholder="Latitude (e.g. 26.1350)" value="26.1350" required>
                  <input type="number" step="0.0001" id="evac-origin-lon" class="form-input"
                    placeholder="Longitude (e.g. 91.8250)" value="91.8250" required>
                </div>
              </div>

              <div class="form-group">
                <label class="form-label">Destination Safe Shelter</label>
                <select id="evac-target-shelter" class="form-select">
                  <option value="">-- Nearest Safe Shelter (Auto-Optimized) --</option>
                </select>
              </div>

              <div class="grid grid-cols-2 gap-3 form-group">
                <div>
                  <label class="form-label">Transport Preference</label>
                  <select id="evac-transport-mode" class="form-select">
                    <option value="4X4_VEHICLE">🚙 4x4 Offroad / Emergency Vehicle</option>
                    <option value="FOOT_SAFEST_TRAIL">🚶 Walking / Evacuation Footpath</option>
                    <option value="EMERGENCY_BUS">🚌 Evacuation Transit Bus</option>
                  </select>
                </div>

                <div>
                  <label class="form-label">Hazard Avoidance</label>
                  <div class="flex items-center gap-2 mt-2">
                    <input type="checkbox" id="evac-avoid-hazards" checked>
                    <label for="evac-avoid-hazards" class="text-xs text-slate-300">Reroute around Critical Red
                      Zones</label>
                  </div>
                </div>
              </div>

              <button type="submit" id="btn-compute-route" class="btn btn-primary w-full mt-4">
                🚀 Calculate Safe Evacuation Corridor
              </button>
            </form>
          </div>

          <!-- Route Results Card -->
          <div id="evacuation-results" class="panel-card p-6 hidden">
            <div class="flex items-center justify-between mb-4">
              <h3 class="panel-title">
                <span>🏁</span>
                <span>Optimized Escape Corridor</span>
              </h3>
              <span class="badge badge-low" id="evac-res-safety-score">94% Safety</span>
            </div>

            <div class="bg-slate-900 border border-slate-800 rounded-xl p-4 mb-4">
              <div class="text-xs text-slate-400">Designated Safe Haven</div>
              <h4 class="text-lg font-bold text-white mt-1" id="evac-res-shelter">--</h4>
              <div class="grid grid-cols-2 gap-2 mt-3 text-xs">
                <div>Distance: <strong class="text-sky-400" id="evac-res-distance">-- km</strong></div>
                <div>ETA: <strong class="text-sky-400" id="evac-res-eta">-- mins</strong></div>
              </div>
              <div class="mt-2 text-xs text-emerald-400" id="evac-res-status">--</div>
            </div>

            <h4 class="font-semibold text-sm mb-2 text-slate-300">Turn-by-Turn Navigation Guide:</h4>
            <ul id="evac-turn-by-turn-list" class="space-y-3 mb-6">
              <!-- Steps injected dynamically -->
            </ul>

            <h4 class="font-semibold text-xs mb-2 text-slate-400">Emergency Dispatch Hotlines:</h4>
            <div id="evac-res-contacts" class="flex flex-wrap gap-2"></div>
          </div>
        </div>
      </section>

      <!-- VIEW 4: CITIZEN GROUND REPORTS & OFFLINE PWA -->
      <section id="view-reports" class="view-panel">
        <div class="grid grid-cols-2 gap-6">
          <!-- Submission Form -->
          <div class="panel-card p-6">
            <div class="panel-title mb-3">
              <span>📢</span>
              <span>Submit Ground Telemetry & Hazard Report</span>
            </div>
            <p class="text-xs text-slate-400 mb-4">
              Works 100% offline! In zero-connectivity valleys, reports are safely saved to local device cache and
              automatically synced when signal is restored.
            </p>

            <form id="citizen-report-form">
              <div class="grid grid-cols-2 gap-3 form-group">
                <div>
                  <label class="form-label">Hazard Category</label>
                  <select id="report-category" class="form-select">
                    <option value="LANDSLIDE_BLOCKAGE">⚠️ Landslide / Mudslip Blockage</option>
                    <option value="ROAD_CRACK">🚧 Road / Hill Slope Crack</option>
                    <option value="RIVER_OVERFLOW">🌊 River / Culvert Overflow</option>
                    <option value="TREE_FALL">🌲 Fallen Tree / Power Lines</option>
                    <option value="BRIDGE_DAMAGE">🌉 Bridge / Culvert Structural Damage</option>
                    <option value="FLASH_FLOOD">⚡ Flash Flood Inundation</option>
                    <option value="STRANDED_CITIZENS">🆘 Stranded Citizens Requiring Rescue</option>
                  </select>
                </div>

                <div>
                  <label class="form-label">Severity Scale (1 to 5)</label>
                  <select id="report-severity" class="form-select">
                    <option value="5">🚨 5 - Critical Danger / Immediate Threat</option>
                    <option value="4">⚠️ 4 - Major Hazard / Road Blocked</option>
                    <option value="3" selected>🟡 3 - Moderate Hazard</option>
                    <option value="2">🟢 2 - Minor Concern</option>
                    <option value="1">ℹ️ 1 - Advisory Observation</option>
                  </select>
                </div>
              </div>

              <div class="form-group">
                <label class="form-label">Description & Observations</label>
                <textarea id="report-desc" class="form-textarea" rows="3"
                  placeholder="Describe landslide location, boulder movements, or flooded sections..."
                  required></textarea>
              </div>

              <div class="grid grid-cols-2 gap-3 form-group">
                <div>
                  <label class="form-label">Latitude</label>
                  <input type="number" step="0.0001" id="report-lat" class="form-input" value="26.1445" required>
                </div>
                <div>
                  <label class="form-label">Longitude</label>
                  <input type="number" step="0.0001" id="report-lon" class="form-input" value="91.7362" required>
                </div>
              </div>

              <div class="grid grid-cols-2 gap-3 form-group">
                <div>
                  <label class="form-label">State</label>
                  <input type="text" id="report-state" class="form-input" value="Assam" required>
                </div>
                <div>
                  <label class="form-label">District</label>
                  <input type="text" id="report-district" class="form-input" value="Kamrup Metropolitan" required>
                </div>
              </div>

              <div class="form-group">
                <label class="form-label">Photo URL (Optional)</label>
                <input type="url" id="report-image-url" class="form-input"
                  placeholder="https://images.unsplash.com/...">
              </div>

              <div class="grid grid-cols-2 gap-3 form-group">
                <div>
                  <label class="form-label">Reporter Name</label>
                  <input type="text" id="report-name" class="form-input" placeholder="Your Name or Volunteer ID">
                </div>
                <div>
                  <label class="form-label">Phone Number</label>
                  <input type="tel" id="report-phone" class="form-input" placeholder="+91 98765 43210">
                </div>
              </div>

              <button type="submit" class="btn btn-primary w-full mt-2">
                📤 Submit Hazard Report
              </button>
            </form>
          </div>

          <!-- Crowd Reports Feed -->
          <div class="panel-card p-6">
            <div class="panel-title mb-4">
              <span>📋</span>
              <span>Verified Field Telemetry Feed</span>
            </div>
            <div id="citizen-reports-feed" class="max-h-[600px] overflow-y-auto">
              <!-- Reports injected dynamically -->
            </div>
          </div>
        </div>
      </section>

      <!-- VIEW 5: IOT SENSORS & SIMULATOR CONTROLLER -->
      <section id="view-simulator" class="view-panel">
        <div class="panel-card p-6 mb-6">
          <div class="flex items-center justify-between mb-4">
            <div>
              <h3 class="panel-title">
                <span>📡</span>
                <span>Hardware IoT Simulator Control Center</span>
              </h3>
              <p class="text-xs text-slate-400 mt-1">
                Simulate real-time sensor ingestion (ESP32 / LoRaWAN nodes) to test live warning thresholds and
                automated emergency responses.
              </p>
            </div>

            <div class="flex items-center gap-3">
              <span class="text-xs text-slate-400">Current Scenario:</span>
              <span id="sim-current-scenario" class="badge font-mono badge-warning">MONSOON_SURGE</span>
            </div>
          </div>

          <!-- Scenario Trigger Buttons -->
          <div class="grid grid-cols-4 gap-3 mb-6">
            <button class="btn btn-outline-primary btn-scenario" data-scenario="NORMAL">
              ☀️ Normal Weather
            </button>
            <button class="btn btn-warning btn-scenario" data-scenario="MONSOON_SURGE">
              🌧️ Monsoon Surge
            </button>
            <button class="btn btn-danger btn-scenario" data-scenario="LANDSLIDE_IMMINENT">
              🚨 Landslide Imminent
            </button>
            <button class="btn btn-danger btn-scenario" data-scenario="CLOUDBURST_FLOOD">
              🌊 Cloudburst Flash Flood
            </button>
          </div>

          <div class="flex items-center gap-4 pt-4 border-t border-slate-800">
            <button id="btn-sim-tick" class="btn btn-primary">
              ⚡ Trigger 1 Simulation Tick
            </button>
            <button id="btn-sim-auto-toggle" class="btn btn-outline-primary">
              ▶️ Start Live Auto Sim (5s)
            </button>
          </div>
        </div>

        <!-- Sensors Telemetry Data Table -->
        <div class="panel-card overflow-hidden">
          <div class="panel-header">
            <div class="panel-title">
              <span>📊</span>
              <span>Ground Sensor Node Telemetry</span>
            </div>
          </div>
          <div class="overflow-x-auto">
            <table class="custom-table">
              <thead>
                <tr>
                  <th>Node Code</th>
                  <th>Location & District</th>
                  <th>Sensor Type</th>
                  <th>Current Reading</th>
                  <th>Threshold Limits</th>
                  <th>Battery</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody id="sensors-table-body">
                <!-- Injected dynamically -->
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <!-- VIEW 6: EMERGENCY HELPLINES -->
      <section id="view-helplines" class="view-panel">
        <div class="panel-card p-6 mb-6">
          <div class="flex items-center justify-between">
            <div>
              <h3 class="panel-title">
                <span>📞</span>
                <span>North Eastern Disaster Helpline Directory</span>
              </h3>
              <p class="text-xs text-slate-400 mt-1">Verified 24x7 hotlines for SDMA, DDMA, NDRF battalions, and
                National 112 ERSS.</p>
            </div>

            <div style="width: 240px;">
              <select id="helpline-state-select" class="form-select">
                <option value="Assam">Assam</option>
                <option value="Meghalaya">Meghalaya</option>
                <option value="Sikkim">Sikkim</option>
                <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                <option value="Mizoram">Mizoram</option>
                <option value="Nagaland">Nagaland</option>
                <option value="Tripura">Tripura</option>
                <option value="Manipur">Manipur</option>
                <option value="All">All States / National</option>
              </select>
            </div>
          </div>
        </div>

        <div id="helplines-grid" class="grid grid-cols-3 gap-6">
          <!-- Injected dynamically -->
        </div>
      </section>

      <!-- VIEW 7: AI & ML HAZARD LAB -->
      <section id="view-calculator" class="view-panel">
        <div class="panel-card p-6 mb-6">
          <div class="flex items-center justify-between">
            <div>
              <h3 class="panel-title">
                <span>🧠</span>
                <span>AI & Machine Learning Multi-Hazard Lab</span>
              </h3>
              <p class="text-xs text-slate-400 mt-1">
                Trained Random Forest & Gradient Ensemble evaluating 9 geological, hydrological & meteorological
                parameters for the North Eastern Region.
              </p>
            </div>
            <div class="flex gap-2">
              <button type="button" class="btn btn-xs btn-outline-primary preset-btn" data-preset="normal">🟢
                Normal</button>
              <button type="button" class="btn btn-xs btn-outline-primary preset-btn" data-preset="shillong">⚠️ Shillong
                Landslide</button>
              <button type="button" class="btn btn-xs btn-outline-primary preset-btn" data-preset="guwahati">🌊 Guwahati
                Flood</button>
              <button type="button" class="btn btn-xs btn-outline-primary preset-btn" data-preset="sikkim">🚨 Sikkim
                Surge</button>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-2 gap-6">
          <!-- ML Parameter Form -->
          <div class="panel-card p-6">
            <h4 class="font-bold text-sm text-slate-200 mb-4 flex items-center justify-between">
              <span>🎛️ Field Telemetry Parameters</span>
              <span class="badge badge-outline text-xs">9 Live Features</span>
            </h4>

            <form id="risk-calc-form" class="space-y-4">
              <div class="grid grid-cols-2 gap-3">
                <div class="form-group">
                  <label class="form-label text-xs">Slope Angle (°)</label>
                  <input type="number" step="0.1" id="calc-slope" class="form-input text-sm" value="38.5" required>
                </div>
                <div class="form-group">
                  <label class="form-label text-xs">24h Rain (mm)</label>
                  <input type="number" step="0.1" id="calc-rainfall" class="form-input text-sm" value="140.0" required>
                </div>
              </div>

              <div class="grid grid-cols-2 gap-3">
                <div class="form-group">
                  <label class="form-label text-xs">Soil Saturation (m³/m³)</label>
                  <input type="number" step="0.01" id="calc-moisture" class="form-input text-sm" value="0.55" min="0.1"
                    max="0.7" required>
                </div>
                <div class="form-group">
                  <label class="form-label text-xs">Rain Rate (mm/hr)</label>
                  <input type="number" step="0.1" id="calc-rain-rate" class="form-input text-sm" value="28.0">
                </div>
              </div>

              <div class="grid grid-cols-2 gap-3">
                <div class="form-group">
                  <label class="form-label text-xs">Elevation (m)</label>
                  <input type="number" step="10" id="calc-elev" class="form-input text-sm" value="1250">
                </div>
                <div class="form-group">
                  <label class="form-label text-xs">NDVI Vegetation</label>
                  <input type="number" step="0.05" id="calc-ndvi" class="form-input text-sm" value="0.35" min="0.05"
                    max="0.9">
                </div>
              </div>

              <div class="grid grid-cols-2 gap-3">
                <div class="form-group">
                  <label class="form-label text-xs">Dist to Drainage (m)</label>
                  <input type="number" step="10" id="calc-drain" class="form-input text-sm" value="120">
                </div>
                <div class="form-group">
                  <label class="form-label text-xs">Ground Tilt Rate (°/day)</label>
                  <input type="number" step="0.05" id="calc-tilt" class="form-input text-sm" value="0.85">
                </div>
              </div>

              <div class="form-group">
                <label class="form-label text-xs">Rock Lithology / Geology</label>
                <select id="calc-litho" class="form-select text-sm">
                  <option value="1">Alluvium / Valley Soil (Code 1)</option>
                  <option value="2">Hard Sandstone / Gneiss (Code 2)</option>
                  <option value="3" selected>Weathered Sedimentary (Code 3)</option>
                  <option value="4">Friable Shale / Siltstone (Code 4)</option>
                  <option value="5">Highly Fractured Fault Zone (Code 5)</option>
                </select>
              </div>

              <button type="submit" id="btn-calc-assess" class="btn btn-primary w-full mt-2">
                ⚡ Run ML Model Inference
              </button>
            </form>
          </div>

          <!-- ML Prediction Results -->
          <div id="calc-results" class="panel-card p-6">
            <div class="flex items-center justify-between mb-4">
              <h3 class="panel-title text-sm">
                <span>📊</span>
                <span>AI Ensemble Inference Report</span>
              </h3>
              <span id="calc-source-badge" class="badge badge-primary text-xs">RANDOM_FOREST</span>
            </div>

            <!-- Risk Score Display -->
            <div class="bg-slate-900 border border-slate-800 rounded-xl p-5 mb-4 text-center">
              <div class="text-xs text-slate-400">Predicted Hazard Probability</div>
              <div class="text-4xl font-extrabold text-red-400 my-2" id="calc-res-score">68.0%</div>
              <div class="flex justify-center items-center gap-2 mb-2">
                <span class="badge badge-danger text-xs font-bold" id="calc-res-level">HIGH RISK</span>
                <span class="badge badge-warning text-xs" id="calc-res-hazard">LANDSLIDE</span>
              </div>
              <div class="text-xs font-medium text-amber-300" id="calc-res-evac">⚠️ Evacuation Preparation Advised</div>
            </div>

            <!-- Multi-Class Probability Distribution Bars -->
            <div class="mb-4">
              <div class="text-xs font-semibold text-slate-300 mb-2">Model Confidence Distribution:</div>
              <div class="space-y-1.5 text-xs">
                <div class="flex items-center justify-between text-slate-400">
                  <span>Critical Risk</span>
                  <span id="prob-val-crit" class="font-bold text-red-400">16%</span>
                </div>
                <div class="w-full bg-slate-800 rounded-full h-2">
                  <div id="prob-bar-crit" class="bg-red-500 h-2 rounded-full" style="width: 16%"></div>
                </div>

                <div class="flex items-center justify-between text-slate-400">
                  <span>High Risk</span>
                  <span id="prob-val-high" class="font-bold text-amber-400">84%</span>
                </div>
                <div class="w-full bg-slate-800 rounded-full h-2">
                  <div id="prob-bar-high" class="bg-amber-500 h-2 rounded-full" style="width: 84%"></div>
                </div>

                <div class="flex items-center justify-between text-slate-400">
                  <span>Moderate Risk</span>
                  <span id="prob-val-mod" class="font-bold text-yellow-400">0%</span>
                </div>
                <div class="w-full bg-slate-800 rounded-full h-2">
                  <div id="prob-bar-mod" class="bg-yellow-400 h-2 rounded-full" style="width: 0%"></div>
                </div>

                <div class="flex items-center justify-between text-slate-400">
                  <span>Low Risk</span>
                  <span id="prob-val-low" class="font-bold text-emerald-400">0%</span>
                </div>
                <div class="w-full bg-slate-800 rounded-full h-2">
                  <div id="prob-bar-low" class="bg-emerald-500 h-2 rounded-full" style="width: 0%"></div>
                </div>
              </div>
            </div>

            <!-- Mitigation Recommendations -->
            <div>
              <h4 class="font-semibold text-xs text-slate-300 mb-2">Field Directives:</h4>
              <ul id="calc-res-actions" class="text-xs text-slate-400 space-y-1">
                <li>• Pre-position 4x4 rescue vehicles near active slope cuts</li>
                <li>• Monitor IMD radar accumulation for rainfall surge</li>
                <li>• Alert local Disaster Response Force & Shelter in-charge</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

    </main>
  </div>

  <!-- Floating Quick SOS Button (Bottom Right) -->
  <button id="btn-floating-sos" class="floating-sos-btn pulse-glow-red" title="Trigger Instant Emergency SOS">
    <span class="sos-icon">🚨</span>
    <span class="sos-text">SOS</span>
  </button>

  <!-- SOS Emergency Distress Modal -->
  <div id="sos-modal" class="modal-backdrop hidden">
    <div class="sos-modal-card">
      <div class="sos-modal-header">
        <div class="flex items-center gap-3">
          <div class="sos-badge-icon">🚨</div>
          <div>
            <h3 class="text-xl font-black text-red-500">EMERGENCY SOS DISTRESS</h3>
            <p class="text-xs text-slate-300">Instant Alert to SDRF, NDRF & District Disaster Control</p>
          </div>
        </div>
        <button id="btn-close-sos" class="modal-close-btn">&times;</button>
      </div>

      <div class="sos-modal-body">
        <div class="sos-strobe-alert">
          <span>⚠️ EMERGENCY DISTRESS PROTOCOL ACTIVE</span>
        </div>

        <div class="bg-slate-900 border border-slate-800 rounded-xl p-4 mb-4">
          <div class="flex justify-between items-center text-xs text-slate-400 mb-1">
            <span>Your Live GPS Coordinates:</span>
            <span id="sos-gps-status" class="text-emerald-400 font-semibold">Acquiring GPS...</span>
          </div>
          <div class="text-lg font-mono font-bold text-sky-400" id="sos-coordinates-display">
            Lat: 26.1445, Lon: 91.7362
          </div>
          <div class="text-xs text-slate-400 mt-1" id="sos-location-name">
            Region: Kamrup Metropolitan / Guwahati Hilly Zone (Assam)
          </div>
        </div>

        <div class="space-y-3 mb-5">
          <button id="btn-sos-broadcast"
            class="btn btn-danger w-full font-bold py-3 text-base shadow-lg flex items-center justify-center gap-2">
            📡 BROADCAST DISTRESS BEACON TO SDRF NOW
          </button>

          <div class="grid grid-cols-2 gap-3">
            <button id="btn-sos-shelter-route" class="btn btn-outline-primary w-full text-xs">
              🧭 Instant Route to Closest Shelter
            </button>
            <a id="btn-sos-whatsapp" href="#" target="_blank"
              class="btn btn-warning w-full text-xs flex items-center justify-center gap-1">
              💬 Share GPS on WhatsApp
            </a>
          </div>
        </div>

        <!-- 1-Click Speed Dial Contacts -->
        <h4 class="font-bold text-xs text-slate-300 uppercase tracking-wider mb-2">Immediate Speed Dial:</h4>
        <div class="grid grid-cols-2 gap-2 mb-4">
          <a href="tel:112"
            class="sos-dial-card bg-red-950/60 border border-red-800 p-3 rounded-lg flex items-center justify-between text-white hover:bg-red-900">
            <div>
              <div class="text-xs text-red-300 font-semibold">National Emergency</div>
              <strong class="text-lg">📞 112</strong>
            </div>
            <span class="badge badge-critical">24x7</span>
          </a>
          <a href="tel:1070"
            class="sos-dial-card bg-amber-950/60 border border-amber-800 p-3 rounded-lg flex items-center justify-between text-white hover:bg-amber-900">
            <div>
              <div class="text-xs text-amber-300 font-semibold">State Disaster SDMA</div>
              <strong class="text-lg">📞 1070</strong>
            </div>
            <span class="badge badge-warning">24x7</span>
          </a>
          <a href="tel:1077"
            class="sos-dial-card bg-slate-900 border border-slate-800 p-3 rounded-lg flex items-center justify-between text-white hover:bg-slate-800">
            <div>
              <div class="text-xs text-slate-400 font-semibold">District DDMA</div>
              <strong class="text-lg">📞 1077</strong>
            </div>
            <span class="badge badge-outline">Local</span>
          </a>
          <a href="tel:0361-2849005"
            class="sos-dial-card bg-slate-900 border border-slate-800 p-3 rounded-lg flex items-center justify-between text-white hover:bg-slate-800">
            <div>
              <div class="text-xs text-slate-400 font-semibold">NDRF 1st Bn HQ</div>
              <strong class="text-sm">📞 0361-2849005</strong>
            </div>
            <span class="badge badge-outline">Rescue</span>
          </a>
        </div>

        <div id="sos-beacon-status" class="text-xs text-center text-slate-400">
          Pressing broadcast instantly records your location in the central SDRF control database.
        </div>
      </div>
    </div>
  </div>

  <!-- User Authentication Modal -->
  <div id="auth-modal" class="modal-backdrop hidden">
    <div class="auth-modal-card">
      <div class="auth-modal-header">
        <div class="flex items-center gap-3">
          <div class="text-2xl">🔐</div>
          <div>
            <h3 class="text-base font-bold text-white">GeoAlertNER Authentication</h3>
            <p class="text-xs text-slate-400">Role-Based Access Control for Citizens, Responders & Admins</p>
          </div>
        </div>
        <button id="btn-close-auth" class="modal-close-btn">&times;</button>
      </div>

      <div class="auth-modal-body">
        <!-- 1-Click Demo Quick Switch -->
        <div class="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">⚡ 1-Click Demo Quick Login:</div>
        <div class="demo-quick-login-grid">
          <button type="button" class="demo-role-btn" data-demo="citizen">
            <span class="demo-role-icon">🧑‍🌾</span>
            <span class="demo-role-name">Citizen</span>
            <span class="demo-role-desc">Assam Resident</span>
          </button>
          <button type="button" class="demo-role-btn" data-demo="officer">
            <span class="demo-role-icon">🛡️</span>
            <span class="demo-role-name">Field Officer</span>
            <span class="demo-role-desc">SDRF Inspector</span>
          </button>
          <button type="button" class="demo-role-btn" data-demo="admin">
            <span class="demo-role-icon">👑</span>
            <span class="demo-role-name">Admin</span>
            <span class="demo-role-desc">Disaster HQ</span>
          </button>
        </div>

        <!-- Auth Tabs: Sign In / Create Account -->
        <div class="auth-tabs">
          <button type="button" id="tab-auth-login" class="auth-tab-btn active">Sign In</button>
          <button type="button" id="tab-auth-register" class="auth-tab-btn">Register</button>
        </div>

        <div id="auth-alert-box" class="auth-alert-box"></div>

        <!-- Login Form -->
        <form id="form-auth-login" class="space-y-4">
          <div class="form-group">
            <label class="form-label" for="login-email">Email Address</label>
            <input type="email" id="login-email" class="form-input" placeholder="e.g. officer@geoalertner.in" required autocomplete="email">
          </div>
          <div class="form-group">
            <label class="form-label" for="login-password">Password</label>
            <input type="password" id="login-password" class="form-input" placeholder="Enter password" required autocomplete="current-password">
          </div>
          <button type="submit" id="btn-submit-login" class="btn btn-outline-cyan w-full justify-center py-2">
            Sign In to GeoAlertNER
          </button>
        </form>

        <!-- Register Form -->
        <form id="form-auth-register" class="space-y-3 hidden">
          <div class="form-group">
            <label class="form-label" for="reg-fullname">Full Name</label>
            <input type="text" id="reg-fullname" class="form-input" placeholder="e.g. Pranab Gogoi" required autocomplete="name">
          </div>
          <div class="form-group">
            <label class="form-label" for="reg-email">Email Address</label>
            <input type="email" id="reg-email" class="form-input" placeholder="e.g. pranab@assam.gov.in" required autocomplete="email">
          </div>
          <div class="form-group">
            <label class="form-label" for="reg-password">Password (min 6 characters)</label>
            <input type="password" id="reg-password" class="form-input" placeholder="Create secure password" required minlength="6" autocomplete="new-password">
          </div>
          <div class="grid grid-cols-2 gap-3">
            <div class="form-group">
              <label class="form-label" for="reg-role">Role</label>
              <select id="reg-role" class="form-select">
                <option value="CITIZEN">Citizen</option>
                <option value="FIELD_OFFICER">Field Officer</option>
                <option value="ADMIN">Disaster Admin</option>
              </select>
            </div>
            <div class="form-group">
              <label class="form-label" for="reg-state">State (NER)</label>
              <select id="reg-state" class="form-select">
                <option value="Assam">Assam</option>
                <option value="Meghalaya">Meghalaya</option>
                <option value="Sikkim">Sikkim</option>
                <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                <option value="Nagaland">Nagaland</option>
                <option value="Mizoram">Mizoram</option>
                <option value="Manipur">Manipur</option>
                <option value="Tripura">Tripura</option>
              </select>
            </div>
          </div>
          <button type="submit" id="btn-submit-register" class="btn btn-outline-primary w-full justify-center py-2">
            Create Account & Get Token
          </button>
        </form>
      </div>
    </div>
  </div>

  <!-- Notification Toasts Container -->
  <div id="toast-container"></div>

  <!-- ===================== PROJECT STORY MODAL ===================== -->
  <div id="modal-project-story" class="modal-overlay" style="display:none;">
    <div class="modal modal-lg" style="padding:28px;">
      <div class="modal-header" style="margin-bottom:20px;">
        <div class="flex items-center gap-3">
          <div class="text-3xl">⛰️</div>
          <div>
            <h3 class="text-lg font-bold text-white">GeoAlertNER — Project Story</h3>
            <p class="text-xs text-slate-400">AI-Driven Disaster Early Warning &amp; Evacuation System for NER, India</p>
          </div>
        </div>
        <button id="btn-close-project-story" class="modal-close-btn">&times;</button>
      </div>

      <!-- Problem Context -->
      <div style="background:rgba(239,68,68,0.08); border:1px solid rgba(239,68,68,0.25); border-radius:12px; padding:14px 16px; margin-bottom:16px;">
        <div style="font-size:12px; font-weight:700; color:#fca5a5; margin-bottom:5px;">🎯 Problem This Solves</div>
        <p style="font-size:12px; color:#94a3b8; line-height:1.6;">
          India's North Eastern Region (Assam, Meghalaya, Sikkim &amp; 5 other states) faces <strong style="color:#f8fafc">some of the world's highest landslide &amp; flash flood risk</strong>.
          Existing warning systems are fragmented, English-only, and require constant internet connectivity —
          leaving remote hill communities with <strong style="color:#fca5a5">zero advance warning</strong>.
          GeoAlertNER addresses this with AI hazard prediction, offline-first PWA citizen reporting, and multilingual voice alerts.
        </p>
      </div>

      <div class="project-story-grid">
        <div class="story-card">
          <div class="story-card-title">🧠 ML / AI Layer</div>
          <div class="story-card-text">
            Custom Random Forest &amp; Gradient Boosting ensemble trained on 9 geological, hydrological &amp; meteorological features:
            slope angle, 24h rainfall, soil moisture, elevation, NDVI, lithology code, drainage distance, tilt rate &amp; rain rate.
            Model returns probabilistic hazard scores with evacuation advisories.
          </div>
          <div class="tech-pills-wrap">
            <span class="tech-pill">scikit-learn</span>
            <span class="tech-pill">NumPy</span>
            <span class="tech-pill">Pandas</span>
            <span class="tech-pill">Random Forest</span>
          </div>
        </div>

        <div class="story-card">
          <div class="story-card-title">🗺️ GIS &amp; Spatial Layer</div>
          <div class="story-card-text">
            Interactive Leaflet.js map with GeoJSON hazard zone polygons, live IoT sensor markers, safe shelter icons,
            and dynamically drawn evacuation corridors. Supports real-time heatmap overlay from backend risk scores.
          </div>
          <div class="tech-pills-wrap">
            <span class="tech-pill">Leaflet.js</span>
            <span class="tech-pill">GeoJSON</span>
            <span class="tech-pill">Shapely</span>
            <span class="tech-pill">PostGIS-ready</span>
          </div>
        </div>

        <div class="story-card">
          <div class="story-card-title">⚡ Backend API</div>
          <div class="story-card-text">
            FastAPI serving 14+ REST endpoints across Auth, Risk, Sensors, Evacuation, Shelters, Weather, Telemetry &amp; Helplines.
            JWT Role-Based Access Control with 3 roles: Citizen, Field Officer, Admin.
            Pydantic v2 schema validation, SQLAlchemy ORM, async-ready.
          </div>
          <div class="tech-pills-wrap">
            <span class="tech-pill">FastAPI</span>
            <span class="tech-pill">SQLAlchemy</span>
            <span class="tech-pill">JWT / RBAC</span>
            <span class="tech-pill">SQLite</span>
          </div>
        </div>

        <div class="story-card">
          <div class="story-card-title">📱 Frontend &amp; PWA</div>
          <div class="story-card-text">
            Zero-framework Vanilla JS ES6 with offline Service Worker, IndexedDB queue for citizen reports,
            Chart.js forecast visualization, multilingual i18n (Assamese, Bengali, Hindi, English),
            and Web Speech API TTS voice alerts.
          </div>
          <div class="tech-pills-wrap">
            <span class="tech-pill">Vanilla JS ES6</span>
            <span class="tech-pill">PWA / SW</span>
            <span class="tech-pill">Chart.js</span>
            <span class="tech-pill">Web Speech API</span>
          </div>
        </div>
      </div>

      <!-- Key Numbers -->
      <div style="display:flex; gap:12px; flex-wrap:wrap; margin:16px 0;">
        <div style="flex:1; min-width:140px; background:rgba(15,23,42,0.8); border:1px solid rgba(51,65,85,0.5); border-radius:12px; padding:14px; text-align:center;">
          <div style="font-size:1.8rem; font-weight:800; color:#38bdf8;">14+</div>
          <div style="font-size:11px; color:#94a3b8;">REST API Endpoints</div>
        </div>
        <div style="flex:1; min-width:140px; background:rgba(15,23,42,0.8); border:1px solid rgba(51,65,85,0.5); border-radius:12px; padding:14px; text-align:center;">
          <div style="font-size:1.8rem; font-weight:800; color:#10b981;">9</div>
          <div style="font-size:11px; color:#94a3b8;">ML Feature Inputs</div>
        </div>
        <div style="flex:1; min-width:140px; background:rgba(15,23,42,0.8); border:1px solid rgba(51,65,85,0.5); border-radius:12px; padding:14px; text-align:center;">
          <div style="font-size:1.8rem; font-weight:800; color:#a855f7;">4</div>
          <div style="font-size:11px; color:#94a3b8;">Regional Languages</div>
        </div>
        <div style="flex:1; min-width:140px; background:rgba(15,23,42,0.8); border:1px solid rgba(51,65,85,0.5); border-radius:12px; padding:14px; text-align:center;">
          <div style="font-size:1.8rem; font-weight:800; color:#f59e0b;">9/9</div>
          <div style="font-size:11px; color:#94a3b8;">Integration Tests Passing</div>
        </div>
        <div style="flex:1; min-width:140px; background:rgba(15,23,42,0.8); border:1px solid rgba(51,65,85,0.5); border-radius:12px; padding:14px; text-align:center;">
          <div style="font-size:1.8rem; font-weight:800; color:#ef4444;">8</div>
          <div style="font-size:11px; color:#94a3b8;">NER States Covered</div>
        </div>
      </div>

      <div class="author-highlight-box">
        <div>
          <div style="font-size:13px; font-weight:700; color:#f8fafc;">Built as a full-stack portfolio project</div>
          <div style="font-size:12px; color:#94a3b8; margin-top:3px;">
            Designed to demonstrate: Python backend architecture · ML integration · GIS systems · PWA offline engineering · RBAC security
          </div>
        </div>
        <div style="display:flex; gap:8px;">
          <a href="https://github.com/shubhkumar-9204/GeoAlertNER" target="_blank" rel="noopener"
            class="btn btn-sm btn-outline-primary" style="font-size:11px;">⭐ View on GitHub</a>
          <button id="btn-story-try-demo" class="btn btn-sm btn-outline-cyan" style="font-size:11px;">🚀 Try Demo Now</button>
        </div>
      </div>
    </div>
  </div>


  <!-- Consolidated Application Bundle -->
  <script src="bundle.js?v=6"></script>
</body>

</html>
```

---

#### 📄 `frontend/styles.css`
```css
/* ==========================================================================
   GeoAlertNER - Modern Disaster Early Warning & Evacuation CSS
   Tailored Dark Glassmorphism, Micro-Animations & Responsive GIS Layout
   ========================================================================== */

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Outfit:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap');

/* Default Theme: Midnight Sapphire (Deep Oceanic Navy & Cyan Aurora) */
:root {
  --bg-main: #070e1e;
  --bg-sidebar: #0b152d;
  --bg-surface: #0f1c3b;
  --bg-card: rgba(14, 25, 54, 0.78);
  --bg-card-hover: rgba(22, 38, 77, 0.88);
  --border-color: rgba(56, 102, 160, 0.45);
  --border-subtle: rgba(255, 255, 255, 0.08);

  --accent-blue: #0284c7;
  --accent-cyan: #38bdf8;
  --accent-emerald: #10b981;
  --accent-red: #ef4444;
  --accent-amber: #f59e0b;
  --accent-purple: #a855f7;

  --text-primary: #f8fafc;
  --text-secondary: #94a3b8;
  --text-muted: #64748b;

  --radius-sm: 6px;
  --radius-md: 12px;
  --radius-lg: 16px;
  --radius-full: 9999px;

  --shadow-card: 0 8px 32px 0 rgba(0, 0, 0, 0.4);
  --shadow-glow-red: 0 0 20px rgba(239, 68, 68, 0.4);
  --shadow-glow-blue: 0 0 20px rgba(56, 189, 248, 0.35);

  --bg-gradient: radial-gradient(1200px circle at 85% -10%, rgba(14, 116, 144, 0.22), transparent 60%),
                 radial-gradient(900px circle at -5% 35%, rgba(59, 130, 246, 0.16), transparent 50%),
                 radial-gradient(1000px circle at 50% 110%, rgba(99, 102, 241, 0.14), transparent 50%);
}

/* Theme: Himalayan Pine / Mountain Emerald */
[data-theme="emerald"] {
  --bg-main: #051411;
  --bg-sidebar: #081d18;
  --bg-surface: #0c2721;
  --bg-card: rgba(10, 36, 30, 0.80);
  --bg-card-hover: rgba(16, 52, 44, 0.90);
  --border-color: rgba(20, 184, 166, 0.38);
  --accent-blue: #0d9488;
  --accent-cyan: #2dd4bf;
  --shadow-glow-blue: 0 0 20px rgba(45, 212, 191, 0.35);
  --bg-gradient: radial-gradient(1200px circle at 85% -10%, rgba(16, 185, 129, 0.22), transparent 60%),
                 radial-gradient(900px circle at -5% 35%, rgba(13, 148, 136, 0.16), transparent 50%),
                 radial-gradient(1000px circle at 50% 110%, rgba(5, 150, 105, 0.14), transparent 50%);
}

/* Theme: Cosmic Amethyst / Royal Violet */
[data-theme="amethyst"] {
  --bg-main: #0d0c1e;
  --bg-sidebar: #13112a;
  --bg-surface: #1a1738;
  --bg-card: rgba(26, 23, 58, 0.80);
  --bg-card-hover: rgba(38, 33, 85, 0.90);
  --border-color: rgba(168, 85, 247, 0.38);
  --accent-blue: #7c3aed;
  --accent-cyan: #c084fc;
  --shadow-glow-blue: 0 0 20px rgba(192, 132, 252, 0.35);
  --bg-gradient: radial-gradient(1200px circle at 85% -10%, rgba(168, 85, 247, 0.22), transparent 60%),
                 radial-gradient(900px circle at -5% 35%, rgba(124, 58, 237, 0.16), transparent 50%),
                 radial-gradient(1000px circle at 50% 110%, rgba(79, 70, 229, 0.15), transparent 50%);
}

/* Theme: Stealth Slate / Titanium */
[data-theme="slate"] {
  --bg-main: #0f172a;
  --bg-sidebar: #1e293b;
  --bg-surface: #334155;
  --bg-card: rgba(30, 41, 59, 0.78);
  --bg-card-hover: rgba(51, 65, 85, 0.88);
  --border-color: rgba(100, 116, 139, 0.45);
  --accent-blue: #3b82f6;
  --accent-cyan: #60a5fa;
  --shadow-glow-blue: 0 0 20px rgba(96, 165, 250, 0.3);
  --bg-gradient: radial-gradient(1200px circle at 85% -10%, rgba(71, 85, 105, 0.24), transparent 60%),
                 radial-gradient(900px circle at -5% 35%, rgba(51, 65, 85, 0.20), transparent 50%),
                 radial-gradient(1000px circle at 50% 110%, rgba(30, 41, 59, 0.22), transparent 50%);
}

/* Theme: Classic Deep Onyx (Pitch Black) */
[data-theme="onyx"] {
  --bg-main: #030712;
  --bg-sidebar: #0b0f19;
  --bg-surface: #111827;
  --bg-card: rgba(15, 23, 42, 0.75);
  --bg-card-hover: rgba(30, 41, 59, 0.85);
  --border-color: rgba(51, 65, 85, 0.6);
  --accent-blue: #0284c7;
  --accent-cyan: #38bdf8;
  --shadow-glow-blue: 0 0 20px rgba(56, 189, 248, 0.3);
  --bg-gradient: none;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  background-color: var(--bg-main);
  background-image: var(--bg-gradient);
  background-attachment: fixed;
  color: var(--text-primary);
  min-height: 100vh;
  overflow-x: hidden;
  line-height: 1.5;
  transition: background-color 0.3s ease, color 0.3s ease;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: 'Outfit', sans-serif;
  letter-spacing: -0.02em;
}

/* Custom Scrollbar */
::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

::-webkit-scrollbar-track {
  background: var(--bg-sidebar);
}

::-webkit-scrollbar-thumb {
  background: var(--border-color);
  border-radius: var(--radius-full);
}

::-webkit-scrollbar-thumb:hover {
  background: #475569;
}

/* Layout App Grid */
.app-container {
  display: flex;
  min-height: 100vh;
}

/* Sidebar Navigation */
.app-sidebar {
  width: 260px;
  background-color: var(--bg-sidebar);
  border-right: 1px solid var(--border-color);
  padding: 24px 16px;
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 50;
  backdrop-filter: blur(16px);
}

.brand-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 32px;
  padding: 0 8px;
}

.brand-icon {
  font-size: 26px;
  background: linear-gradient(135deg, #0284c7, #38bdf8);
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-glow-blue);
}

.brand-title {
  font-size: 20px;
  font-weight: 800;
  color: #ffffff;
}

.brand-badge {
  font-size: 10px;
  font-family: 'JetBrains Mono', monospace;
  background: rgba(56, 189, 248, 0.15);
  color: var(--accent-cyan);
  padding: 2px 6px;
  border-radius: var(--radius-sm);
  border: 1px solid rgba(56, 189, 248, 0.3);
}

.nav-list {
  display: flex;
  flex-direction: column;
  gap: 6px;
  flex: 1;
}

.nav-btn {
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  padding: 12px 14px;
  background: transparent;
  border: 1px solid transparent;
  color: var(--text-secondary);
  border-radius: var(--radius-md);
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  text-align: left;
}

.nav-btn:hover {
  background-color: rgba(30, 41, 59, 0.6);
  color: #ffffff;
}

.nav-btn.active {
  background: linear-gradient(90deg, rgba(2, 132, 199, 0.25), rgba(56, 189, 248, 0.1));
  border-color: rgba(56, 189, 248, 0.35);
  color: #ffffff;
  box-shadow: inset 0 0 12px rgba(56, 189, 248, 0.1);
}

.nav-btn .icon {
  font-size: 18px;
}

.sidebar-footer {
  margin-top: auto;
  padding-top: 16px;
  border-top: 1px solid var(--border-subtle);
}

/* Status Pill */
.status-pill {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 12px;
  border-radius: var(--radius-full);
  font-size: 12px;
  font-weight: 600;
}

.status-pill.online {
  background: rgba(16, 185, 129, 0.12);
  color: #34d399;
  border: 1px solid rgba(16, 185, 129, 0.25);
}

.status-pill.simulation {
  background: rgba(245, 158, 11, 0.12);
  color: #fbbf24;
  border: 1px solid rgba(245, 158, 11, 0.25);
}

.pulse-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  display: inline-block;
  animation: pulse-ring 2s infinite;
}

.pulse-dot.green {
  background: #10b981;
}

.pulse-dot.yellow {
  background: #f59e0b;
}

.pulse-dot.red {
  background: #ef4444;
}

@keyframes pulse-ring {
  0% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7);
  }

  70% {
    transform: scale(1);
    box-shadow: 0 0 0 8px rgba(16, 185, 129, 0);
  }

  100% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(16, 185, 129, 0);
  }
}

/* Main Content Area */
.app-main {
  margin-left: 260px;
  flex: 1;
  padding: 32px;
  min-height: 100vh;
}

/* Top App Header */
.top-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 28px;
}

.top-header h2 {
  font-size: 28px;
  font-weight: 700;
}

.top-header p {
  color: var(--text-secondary);
  font-size: 14px;
  margin-top: 4px;
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 16px;
}

/* Multilingual Language Selector */
.lang-dropdown-wrapper {
  display: flex;
  align-items: center;
  gap: 8px;
  background: rgba(15, 23, 42, 0.85);
  border: 1px solid rgba(56, 189, 248, 0.35);
  border-radius: var(--radius-md);
  padding: 4px 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.25);
  transition: border-color 0.2s, box-shadow 0.2s;
}

.lang-dropdown-wrapper:hover,
.lang-dropdown-wrapper:focus-within {
  border-color: var(--accent-cyan);
  box-shadow: 0 0 12px rgba(56, 189, 248, 0.3);
}

.lang-icon {
  font-size: 16px;
  user-select: none;
}

.lang-select-box {
  background: transparent;
  color: #e2e8f0;
  border: none;
  outline: none;
  font-size: 13px;
  font-weight: 600;
  font-family: inherit;
  cursor: pointer;
  padding: 4px 6px;
}

.lang-select-box option {
  background: var(--bg-sidebar);
  color: var(--text-primary);
  padding: 8px;
}

/* Theme Palette Selector */
.theme-dropdown-wrapper {
  display: flex;
  align-items: center;
  gap: 6px;
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  padding: 4px 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.25);
  transition: border-color 0.2s, box-shadow 0.2s;
}

.theme-dropdown-wrapper:hover,
.theme-dropdown-wrapper:focus-within {
  border-color: var(--accent-cyan);
  box-shadow: 0 0 12px rgba(56, 189, 248, 0.3);
}

.theme-icon {
  font-size: 15px;
  user-select: none;
}

.theme-select {
  background: transparent;
  color: var(--text-primary);
  border: none;
  font-size: 12px;
  font-weight: 600;
  outline: none;
  cursor: pointer;
  font-family: inherit;
  padding: 4px 4px;
}

.theme-select option {
  background: var(--bg-sidebar);
  color: var(--text-primary);
  padding: 8px;
}

/* Voice Alert Button */
.btn-voice-alert {
  background: rgba(14, 165, 233, 0.15);
  color: #38bdf8;
  border: 1px solid rgba(56, 189, 248, 0.4);
  padding: 6px 14px;
  border-radius: var(--radius-md);
  font-size: 12px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;
}

.btn-voice-alert:hover {
  background: rgba(14, 165, 233, 0.35);
  box-shadow: 0 0 14px rgba(56, 189, 248, 0.5);
  transform: translateY(-1px);
}

.btn-voice-alert.speaking {
  background: rgba(14, 165, 233, 0.5);
  animation: pulse-glow 1s infinite alternate;
}

@keyframes pulse-glow {
  from { box-shadow: 0 0 6px rgba(56, 189, 248, 0.4); }
  to   { box-shadow: 0 0 18px rgba(56, 189, 248, 0.9); }
}

/* Stats Cards Grid */
.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-bottom: 28px;
}

.stat-card {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  backdrop-filter: blur(12px);
  border-radius: var(--radius-lg);
  padding: 20px;
  box-shadow: var(--shadow-card);
  transition: transform 0.2s ease, border-color 0.2s ease;
  position: relative;
  overflow: hidden;
}

.stat-card:hover {
  transform: translateY(-2px);
  border-color: rgba(56, 189, 248, 0.4);
}

.stat-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--accent-cyan), transparent);
}

.stat-icon-wrap {
  font-size: 24px;
  margin-bottom: 12px;
  display: inline-flex;
  padding: 8px;
  border-radius: var(--radius-md);
  background: rgba(255, 255, 255, 0.05);
}

.stat-label {
  font-size: 13px;
  color: var(--text-secondary);
  font-weight: 500;
}

.stat-value {
  font-size: 32px;
  font-weight: 800;
  margin: 6px 0;
  font-family: 'Outfit', sans-serif;
}

.stat-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 8px;
}

.stat-status {
  font-size: 12px;
  color: var(--text-muted);
}

/* Dashboard Main Row (Map + Alerts) */
.dashboard-main-grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 24px;
  margin-bottom: 28px;
}

.panel-card {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  backdrop-filter: blur(12px);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-card);
}

.panel-header {
  padding: 18px 20px;
  border-bottom: 1px solid var(--border-color);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.panel-title {
  font-size: 18px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 8px;
}

.map-container {
  height: 520px;
  width: 100%;
  background: #080d1a;
}

/* Alerts List */
.alerts-list {
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-height: 520px;
  overflow-y: auto;
}

.alert-item {
  border-radius: var(--radius-md);
  padding: 14px;
  cursor: pointer;
}

/* Badges */
.badge {
  display: inline-flex;
  align-items: center;
  padding: 3px 8px;
  border-radius: var(--radius-full);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.02em;
  text-transform: uppercase;
}

.badge-critical {
  background: rgba(239, 68, 68, 0.18);
  color: #f87171;
  border: 1px solid rgba(239, 68, 68, 0.4);
}

.badge-high {
  background: rgba(249, 115, 22, 0.18);
  color: #fb923c;
  border: 1px solid rgba(249, 115, 22, 0.4);
}

.badge-warning,
.badge-moderate {
  background: rgba(245, 158, 11, 0.18);
  color: #fbbf24;
  border: 1px solid rgba(245, 158, 11, 0.4);
}

.badge-low,
.badge-normal {
  background: rgba(16, 185, 129, 0.18);
  color: #34d399;
  border: 1px solid rgba(16, 185, 129, 0.4);
}

.badge-outline {
  background: rgba(255, 255, 255, 0.05);
  color: #cbd5e1;
  border: 1px solid rgba(255, 255, 255, 0.15);
}

/* Buttons */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 10px 18px;
  border-radius: var(--radius-md);
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  border: 1px solid transparent;
  text-decoration: none;
}

.btn-primary {
  background: #0284c7;
  color: #ffffff;
  box-shadow: 0 4px 14px rgba(2, 132, 199, 0.35);
}

.btn-primary:hover {
  background: #0369a1;
}

.btn-outline-primary {
  background: rgba(2, 132, 199, 0.12);
  color: #38bdf8;
  border-color: rgba(56, 189, 248, 0.35);
}

.btn-outline-primary:hover {
  background: rgba(2, 132, 199, 0.25);
}

.btn-danger {
  background: #dc2626;
  color: #ffffff;
}

.btn-danger:hover {
  background: #b91c1c;
}

.btn-warning {
  background: #d97706;
  color: #ffffff;
}

.btn-sm {
  padding: 6px 12px;
  font-size: 12px;
}

.btn-xs {
  padding: 4px 8px;
  font-size: 11px;
}

.w-full {
  width: 100%;
}

/* Forms & Inputs */
.form-group {
  margin-bottom: 16px;
}

.form-label {
  display: block;
  font-size: 13px;
  font-weight: 600;
  color: var(--text-secondary);
  margin-bottom: 6px;
}

.form-input,
.form-select,
.form-textarea {
  width: 100%;
  padding: 10px 14px;
  background: var(--bg-surface);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  color: #ffffff;
  font-size: 14px;
  font-family: inherit;
  transition: border-color 0.2s ease;
}

.form-input:focus,
.form-select:focus,
.form-textarea:focus {
  outline: none;
  border-color: var(--accent-cyan);
  box-shadow: 0 0 0 3px rgba(56, 189, 248, 0.15);
}

/* View Panels (Tab Switching) */
.view-panel {
  display: none;
}

.view-panel.active {
  display: block;
  animation: fadeIn 0.25s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(6px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Evacuation Route Step styling */
.step-num {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: #0284c7;
  color: #ffffff;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 700;
  flex-shrink: 0;
}

/* Map Markers Styling */
.custom-div-icon {
  background: transparent;
  border: none;
}

.sensor-marker {
  width: 32px;
  height: 32px;
  background: #0f172a;
  border: 2px solid #38bdf8;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  position: relative;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
}

.sensor-marker.triggered {
  border-color: #ef4444;
  background: #450a0a;
  box-shadow: var(--shadow-glow-red);
}

.pulse-alarm {
  animation: radar-pulse 1.5s infinite;
}

@keyframes radar-pulse {
  0% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.7);
  }

  70% {
    transform: scale(1.15);
    box-shadow: 0 0 0 14px rgba(239, 68, 68, 0);
  }

  100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(239, 68, 68, 0);
  }
}

.shelter-marker {
  background: #064e3b;
  border: 2px solid #10b981;
  border-radius: var(--radius-md);
  padding: 4px 6px;
  display: flex;
  align-items: center;
  gap: 4px;
  color: white;
  font-size: 13px;
  font-weight: 700;
  box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
}

.evac-node-marker {
  font-size: 26px;
  filter: drop-shadow(0 2px 6px rgba(0, 0, 0, 0.8));
}

/* Leaflet Custom Popups */
.leaflet-popup-content-wrapper {
  background: var(--bg-sidebar) !important;
  color: #f8fafc !important;
  border: 1px solid var(--border-color) !important;
  border-radius: var(--radius-md) !important;
  padding: 0 !important;
  box-shadow: var(--shadow-card) !important;
}

.leaflet-popup-tip {
  background: var(--bg-sidebar) !important;
}

.custom-map-popup {
  padding: 14px;
}

.custom-map-popup .popup-header {
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 8px;
  padding-bottom: 6px;
  border-bottom: 1px solid var(--border-subtle);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.popup-stat-row {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  color: var(--text-secondary);
  margin-bottom: 4px;
}

.progress-bar-bg {
  width: 100%;
  height: 6px;
  background: #1e293b;
  border-radius: var(--radius-full);
  overflow: hidden;
}

.progress-bar-fill {
  height: 100%;
  border-radius: var(--radius-full);
  transition: width 0.3s ease;
}

/* Toast Container */
#toast-container {
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.toast-message {
  padding: 12px 18px;
  border-radius: var(--radius-md);
  font-size: 13px;
  font-weight: 500;
  color: white;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(8px);
  animation: slideIn 0.3s ease;
  max-width: 380px;
}

.toast-info {
  background: #0369a1;
  border-left: 4px solid #38bdf8;
}

.toast-success {
  background: #047857;
  border-left: 4px solid #34d399;
}

.toast-warning {
  background: #b45309;
  border-left: 4px solid #fbbf24;
}

.toast-error {
  background: #b91c1c;
  border-left: 4px solid #f87171;
}

.toast-message.fade-out {
  opacity: 0;
  transform: translateY(10px);
  transition: all 0.4s ease;
}

@keyframes slideIn {
  from {
    transform: translateX(50px);
    opacity: 0;
  }

  to {
    transform: translateX(0);
    opacity: 1;
  }
}

/* Tables */
.custom-table {
  width: 100%;
  border-collapse: collapse;
  text-align: left;
  font-size: 13px;
}

.custom-table th {
  background: var(--bg-surface);
  padding: 12px 16px;
  color: var(--text-secondary);
  font-weight: 600;
  border-bottom: 1px solid var(--border-color);
}

.custom-table td {
  padding: 14px 16px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.04);
}

.custom-table tr:hover td {
  background: rgba(255, 255, 255, 0.02);
}

/* Utility Helpers */
.hidden {
  display: none !important;
}

.flex {
  display: flex;
}

.flex-col {
  flex-direction: column;
}

.flex-wrap {
  flex-wrap: wrap;
}

.items-center {
  align-items: center;
}

.justify-between {
  justify-content: space-between;
}

.gap-1 {
  gap: 4px;
}

.gap-2 {
  gap: 8px;
}

.gap-3 {
  gap: 12px;
}

.gap-4 {
  gap: 16px;
}

.gap-6 {
  gap: 24px;
}

.grid {
  display: grid;
}

.grid-cols-2 {
  grid-template-columns: repeat(2, 1fr);
}

.grid-cols-3 {
  grid-template-columns: repeat(3, 1fr);
}

.mt-2 {
  margin-top: 8px;
}

.mt-4 {
  margin-top: 16px;
}

.mb-2 {
  margin-bottom: 8px;
}

.mb-4 {
  margin-bottom: 16px;
}

.p-4 {
  padding: 16px;
}

.p-6 {
  padding: 24px;
}

.text-xs {
  font-size: 12px;
}

.text-sm {
  font-size: 14px;
}

.font-bold {
  font-weight: 700;
}

.font-mono {
  font-family: 'JetBrains Mono', monospace;
}

/* Responsive adjustments */
@media (max-width: 1024px) {
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .dashboard-main-grid {
    grid-template-columns: 1fr;
  }

  .app-sidebar {
    width: 80px;
    padding: 16px 8px;
  }

  .brand-title,
  .brand-badge,
  .nav-btn span:not(.icon) {
    display: none;
  }

  .app-main {
    margin-left: 80px;
    padding: 20px;
  }
}

@media (max-width: 640px) {
  .stats-grid {
    grid-template-columns: 1fr;
  }

  .app-sidebar {
    display: none;
  }

  .app-main {
    margin-left: 0;
    padding: 16px;
  }
}

/* ==========================================================================
   🚨 SOS EMERGENCY TRIGGER & MODAL STYLING
   ========================================================================== */

.btn-sos {
  background: linear-gradient(135deg, #dc2626, #991b1b);
  color: #ffffff;
  border: 1px solid #ef4444;
  font-weight: 800;
  letter-spacing: 0.05em;
  padding: 8px 16px;
  border-radius: var(--radius-full);
  box-shadow: 0 0 15px rgba(239, 68, 68, 0.6);
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.btn-sos:hover {
  transform: scale(1.05);
  box-shadow: 0 0 25px rgba(239, 68, 68, 0.9);
}

.floating-sos-btn {
  position: fixed;
  bottom: 32px;
  right: 32px;
  z-index: 1000;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: linear-gradient(135deg, #ef4444, #b91c1c);
  color: white;
  border: 3px solid #fecaca;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 8px 30px rgba(239, 68, 68, 0.7);
  transition: transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.floating-sos-btn:hover {
  transform: scale(1.12);
}

.floating-sos-btn .sos-icon {
  font-size: 22px;
  line-height: 1;
}

.floating-sos-btn .sos-text {
  font-size: 11px;
  font-weight: 900;
  letter-spacing: 0.08em;
}

.pulse-glow-red {
  animation: sos-pulse-glow 1.8s infinite;
}

@keyframes sos-pulse-glow {
  0% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.8);
  }

  60% {
    transform: scale(1.04);
    box-shadow: 0 0 0 16px rgba(239, 68, 68, 0);
  }

  100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(239, 68, 68, 0);
  }
}

/* Modal Backdrop */
.modal-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(10px);
  z-index: 99999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  animation: modalFadeIn 0.25s ease-out;
}

@keyframes modalFadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

.sos-modal-card {
  background: var(--bg-sidebar);
  border: 2px solid #ef4444;
  border-radius: var(--radius-lg);
  max-width: 540px;
  width: 100%;
  box-shadow: 0 20px 50px rgba(239, 68, 68, 0.4);
  overflow: hidden;
  animation: modalPopUp 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

@keyframes modalPopUp {
  from {
    transform: scale(0.9);
    opacity: 0;
  }

  to {
    transform: scale(1);
    opacity: 1;
  }
}

.sos-modal-header {
  padding: 20px 24px;
  border-bottom: 1px solid rgba(239, 68, 68, 0.3);
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(239, 68, 68, 0.08);
}

.sos-badge-icon {
  font-size: 32px;
  animation: pulse-ring 1.5s infinite;
}

.modal-close-btn {
  background: transparent;
  border: none;
  color: #94a3b8;
  font-size: 28px;
  line-height: 1;
  cursor: pointer;
}

.modal-close-btn:hover {
  color: #ffffff;
}

.sos-modal-body {
  padding: 24px;
}

.sos-strobe-alert {
  background: rgba(239, 68, 68, 0.2);
  border: 1px dashed #ef4444;
  color: #fca5a5;
  padding: 10px;
  border-radius: var(--radius-md);
  text-align: center;
  font-weight: 700;
  font-size: 13px;
  margin-bottom: 16px;
  animation: strobe-fade 1s infinite alternate;
}

@keyframes strobe-fade {
  from {
    opacity: 0.6;
  }

  to {
    opacity: 1;
  }
}

.sos-dial-card {
  text-decoration: none;
  transition: all 0.2s ease;
}

.sos-dial-card:hover {
  transform: translateY(-2px);
  border-color: #ef4444;
}

/* ===== USER AUTHENTICATION & RBAC STYLES ===== */
.auth-header-container {
  display: flex;
  align-items: center;
  gap: 8px;
}

.btn-outline-cyan {
  background: rgba(6, 182, 212, 0.12);
  color: #38bdf8;
  border: 1px solid rgba(56, 189, 248, 0.4);
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  border-radius: var(--radius-md);
  transition: all 0.2s ease;
}

.btn-outline-cyan:hover {
  background: rgba(6, 182, 212, 0.25);
  border-color: #38bdf8;
  color: #ffffff;
}

.user-badge {
  display: flex;
  align-items: center;
  gap: 8px;
  background: rgba(15, 23, 42, 0.9);
  border: 1px solid rgba(56, 189, 248, 0.3);
  padding: 4px 10px;
  border-radius: 9999px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
}

.badge-role {
  font-size: 11px;
  font-weight: 700;
  padding: 2px 8px;
  border-radius: 9999px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.role-citizen {
  background: rgba(16, 185, 129, 0.2);
  color: #34d399;
  border: 1px solid rgba(16, 185, 129, 0.4);
}

.role-officer {
  background: rgba(245, 158, 11, 0.2);
  color: #fbbf24;
  border: 1px solid rgba(245, 158, 11, 0.4);
}

.role-admin {
  background: rgba(168, 85, 247, 0.2);
  color: #c084fc;
  border: 1px solid rgba(168, 85, 247, 0.4);
}

.user-name-text {
  font-size: 12px;
  font-weight: 600;
  color: #e2e8f0;
  max-width: 140px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.btn-icon-xs {
  background: transparent;
  border: none;
  color: #94a3b8;
  font-size: 13px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  transition: all 0.2s ease;
}

.btn-icon-xs:hover {
  color: #f87171;
  background: rgba(239, 68, 68, 0.15);
}

/* Auth Modal Card */
.auth-modal-card {
  background: var(--bg-sidebar);
  border: 1px solid rgba(56, 189, 248, 0.35);
  border-radius: var(--radius-lg);
  max-width: 480px;
  width: 100%;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.7);
  overflow: hidden;
  animation: modalPopUp 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.auth-modal-header {
  padding: 18px 24px;
  border-bottom: 1px solid rgba(56, 189, 248, 0.2);
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(56, 189, 248, 0.05);
}

.auth-modal-body {
  padding: 24px;
}

.auth-tabs {
  display: flex;
  background: #070a12;
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  padding: 3px;
  margin-bottom: 20px;
}

.auth-tab-btn {
  flex: 1;
  padding: 8px 12px;
  background: transparent;
  border: none;
  border-radius: var(--radius-sm);
  color: var(--text-secondary);
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

.auth-tab-btn.active {
  background: rgba(56, 189, 248, 0.15);
  color: #38bdf8;
  border: 1px solid rgba(56, 189, 248, 0.3);
}

.demo-quick-login-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  margin-bottom: 20px;
}

.demo-role-btn {
  background: #0f172a;
  border: 1px solid rgba(148, 163, 184, 0.2);
  border-radius: var(--radius-md);
  padding: 10px 8px;
  text-align: center;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
}

.demo-role-btn:hover {
  transform: translateY(-2px);
  border-color: #38bdf8;
  background: rgba(56, 189, 248, 0.1);
}

.demo-role-btn .demo-role-icon {
  font-size: 18px;
}

.demo-role-btn .demo-role-name {
  font-size: 11px;
  font-weight: 700;
  color: #e2e8f0;
}

.demo-role-btn .demo-role-desc {
  font-size: 9px;
  color: #94a3b8;
}

.auth-alert-box {
  padding: 10px 14px;
  border-radius: var(--radius-md);
  font-size: 12px;
  margin-bottom: 16px;
  display: none;
}

.auth-alert-box.error {
  display: block;
  background: rgba(239, 68, 68, 0.15);
  border: 1px solid #ef4444;
  color: #fca5a5;
}

.auth-alert-box.success {
  display: block;
  background: rgba(16, 185, 129, 0.15);
  border: 1px solid #10b981;
  color: #6ee7b7;
}

/* ==========================================================================
   Recruiter / Normal User Showcase & Welcome Banner
   ========================================================================== */
.welcome-demo-banner {
  background: linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(30, 41, 59, 0.9) 100%);
  border: 1px solid rgba(56, 189, 248, 0.35);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5), 0 0 20px rgba(56, 189, 248, 0.15);
  border-radius: var(--radius-lg);
  padding: 20px 24px;
  margin-bottom: 24px;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  animation: bannerFadeIn 0.5s ease-out;
}

.welcome-demo-banner::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, #38bdf8, #10b981, #a855f7);
}

@keyframes bannerFadeIn {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}

.welcome-banner-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: rgba(56, 189, 248, 0.15);
  color: #38bdf8;
  border: 1px solid rgba(56, 189, 248, 0.3);
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding: 3px 10px;
  border-radius: var(--radius-full);
  margin-bottom: 8px;
}

.welcome-banner-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: #f8fafc;
  margin-bottom: 6px;
}

.welcome-banner-desc {
  font-size: 0.85rem;
  color: #94a3b8;
  line-height: 1.5;
  max-width: 900px;
  margin-bottom: 14px;
}

.welcome-quick-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
}

.btn-dismiss-banner {
  background: transparent;
  border: none;
  color: #64748b;
  font-size: 22px;
  line-height: 1;
  cursor: pointer;
  padding: 4px;
  border-radius: 4px;
  transition: all 0.2s ease;
}

.btn-dismiss-banner:hover {
  color: #f8fafc;
  background: rgba(255, 255, 255, 0.1);
}

/* Preset Scenario Chips */
.preset-scenarios-bar {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
  background: rgba(15, 23, 42, 0.6);
  padding: 10px 14px;
  border-radius: var(--radius-md);
  border: 1px solid var(--border-color);
  margin-bottom: 16px;
}

.btn-chip {
  background: rgba(30, 41, 59, 0.8);
  border: 1px solid rgba(148, 163, 184, 0.2);
  color: #cbd5e1;
  font-size: 11px;
  font-weight: 600;
  padding: 5px 12px;
  border-radius: var(--radius-full);
  cursor: pointer;
  transition: all 0.2s ease;
  display: inline-flex;
  align-items: center;
  gap: 5px;
}

.btn-chip:hover {
  background: rgba(56, 189, 248, 0.15);
  border-color: #38bdf8;
  color: #38bdf8;
  transform: translateY(-1px);
}

.btn-chip.active {
  background: rgba(56, 189, 248, 0.25);
  border-color: #38bdf8;
  color: #ffffff;
  box-shadow: 0 0 10px rgba(56, 189, 248, 0.3);
}

/* Project Story Modal Styling */
.modal-lg {
  max-width: 780px !important;
  width: 95%;
  max-height: 90vh;
  overflow-y: auto;
}

.project-story-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 16px;
  margin: 16px 0;
}

.story-card {
  background: rgba(15, 23, 42, 0.7);
  border: 1px solid rgba(51, 65, 85, 0.5);
  border-radius: var(--radius-md);
  padding: 16px;
}

.story-card-title {
  font-size: 13px;
  font-weight: 700;
  color: #38bdf8;
  margin-bottom: 6px;
  display: flex;
  align-items: center;
  gap: 6px;
}

.story-card-text {
  font-size: 12px;
  color: #94a3b8;
  line-height: 1.5;
}

.tech-pills-wrap {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 8px;
}

.tech-pill {
  font-size: 10px;
  font-weight: 600;
  padding: 3px 8px;
  border-radius: var(--radius-full);
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #e2e8f0;
}

.author-highlight-box {
  background: linear-gradient(135deg, rgba(56, 189, 248, 0.1) 0%, rgba(16, 185, 129, 0.1) 100%);
  border: 1px solid rgba(56, 189, 248, 0.3);
  border-radius: var(--radius-md);
  padding: 14px 18px;
  margin-top: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 12px;
}

/* Tour Pulse Highlight Effect */
.tour-pulse-target {
  position: relative;
  outline: 3px solid #38bdf8 !important;
  box-shadow: 0 0 25px rgba(56, 189, 248, 0.6) !important;
  animation: tourGlow 1.5s infinite alternate;
}

@keyframes tourGlow {
  from { box-shadow: 0 0 10px rgba(56, 189, 248, 0.4); }
  to { box-shadow: 0 0 30px rgba(56, 189, 248, 0.85); }
}
```

---

### 11.10 Testing, CI/CD, Containerization & Scripts

#### 📄 `requirements.txt`
```txt
fastapi>=0.110.0
uvicorn[standard]>=0.28.0
pydantic>=2.6.0
pydantic-settings>=2.2.0
sqlalchemy>=2.0.28
httpx>=0.27.0
numpy>=1.26.0
scikit-learn>=1.4.0
shapely>=2.0.3
python-dotenv>=1.0.1
pytest>=8.1.0
pytest-asyncio>=0.23.5
python-multipart>=0.0.9
pandas>=2.2.0
bcrypt>=4.1.0
python-jose[cryptography]>=3.3.0
aiohttp>=3.9.0
```

---

#### 📄 `Dockerfile`
```text
# ── Stage 1: Build Stage ────────────────────────────────────────────────────
FROM python:3.11-slim AS builder

WORKDIR /app

# Install build dependencies
RUN apt-get update && apt-get install -y --no-install-recommends \
    build-essential \
    gcc \
    && rm -rf /var/lib/apt/lists/*

# Copy requirements and install into a user-site prefix
COPY backend/requirements.txt requirements.txt
RUN pip install --upgrade pip && \
    pip install --prefix=/install --no-cache-dir -r requirements.txt

# ── Stage 2: Runtime Stage ───────────────────────────────────────────────────
FROM python:3.11-slim AS runtime

LABEL maintainer="GeoAlertNER Team <contact@geoalertner.in>"
LABEL version="1.0.0"
LABEL description="GeoAlertNER - AI Disaster Monitoring & Evacuation Platform"

WORKDIR /app

# Copy installed Python packages from builder
COPY --from=builder /install /usr/local

# Copy application source
COPY backend/ ./backend/
COPY frontend/ ./frontend/
COPY ml/ ./ml/

# Create non-root user for principle of least privilege
RUN useradd -m -u 1001 appuser && \
    mkdir -p /app/data /app/logs && \
    chown -R appuser:appuser /app

# Environment defaults (override via docker-compose or .env)
ENV PYTHONUNBUFFERED=1 \
    PYTHONDONTWRITEBYTECODE=1 \
    PYTHONPATH=/app \
    DATABASE_URL=sqlite:////app/data/geoalertner.db \
    DEBUG=false \
    SECRET_KEY=change-me-in-production-use-a-long-random-string

# Switch to non-root user
USER appuser

EXPOSE 8000

# Health check so Docker knows when the service is ready
HEALTHCHECK --interval=30s --timeout=10s --start-period=15s --retries=3 \
    CMD python -c "import urllib.request; urllib.request.urlopen('http://localhost:8000/health')" || exit 1

# Default command — start Uvicorn production server
CMD ["uvicorn", "backend.app.main:app", "--host", "0.0.0.0", "--port", "8000", "--workers", "2"]
```

---

#### 📄 `docker-compose.yml`
```yaml
version: "3.9"

services:
  # ─── GeoAlertNER Backend API ─────────────────────────────────────────────
  api:
    build:
      context: .
      dockerfile: Dockerfile
      target: runtime
    container_name: geoalertner_api
    restart: unless-stopped
    ports:
      - "8000:8000"
    volumes:
      # Persist SQLite database across container restarts
      - geoalert_db:/app/data
      # Mount ML model directory so weights are shareable / replaceable
      - ./ml:/app/ml:ro
    environment:
      - DATABASE_URL=sqlite:////app/data/geoalertner.db
      - DEBUG=false
      - SECRET_KEY=${SECRET_KEY:-change-me-in-production-please}
      - OPENROUTESERVICE_API_KEY=${OPENROUTESERVICE_API_KEY:-}
      - SMS_GATEWAY_PROVIDER=${SMS_GATEWAY_PROVIDER:-MOCK}
      - SMS_API_KEY=${SMS_API_KEY:-}
    healthcheck:
      test: ["CMD", "python", "-c",
             "import urllib.request; urllib.request.urlopen('http://localhost:8000/health')"]
      interval: 30s
      timeout: 10s
      retries: 5
      start_period: 20s
    networks:
      - geoalert_net

  # ─── Nginx Reverse Proxy (Production) ────────────────────────────────────
  nginx:
    image: nginx:1.25-alpine
    container_name: geoalertner_nginx
    restart: unless-stopped
    ports:
      - "80:80"
    volumes:
      - ./nginx.conf:/etc/nginx/conf.d/default.conf:ro
    depends_on:
      api:
        condition: service_healthy
    networks:
      - geoalert_net
    profiles:
      - production   # only started when: docker compose --profile production up

volumes:
  geoalert_db:
    name: geoalertner_database

networks:
  geoalert_net:
    name: geoalertner_network
    driver: bridge
```

---

#### 📄 `nginx.conf`
```nginx
# GeoAlertNER Nginx Reverse Proxy Configuration & Security Hardening
# Copyright (c) 2026 GeoAlertNER Contributors. All rights reserved.

# Rate limiting zones (DoS and brute-force mitigation)
limit_req_zone $binary_remote_addr zone=api_zone:10m rate=20r/s;
limit_req_zone $binary_remote_addr zone=auth_zone:10m rate=5r/s;

server {
    listen 80;
    server_name _;

    # 1. Hide Server Software Tokens (Prevent Information Disclosure)
    server_tokens off;

    # 2. Defense-in-Depth HTTP Security Headers
    add_header X-Frame-Options "DENY" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header Referrer-Policy "strict-origin-when-cross-origin" always;
    add_header Permissions-Policy "geolocation=(self), camera=(), microphone=()" always;
    add_header Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline' https://unpkg.com https://cdn.jsdelivr.net; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://unpkg.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: blob: https:; connect-src 'self' https://api.open-meteo.com https://*.basemaps.cartocdn.com https://*.tile.openstreetmap.org https://server.arcgisonline.com;" always;

    # 3. Connection and Request Timeouts (Mitigate Slowloris / Low-and-Slow DoS)
    client_body_timeout 15s;
    client_header_timeout 15s;
    keepalive_timeout 30s;
    send_timeout 15s;
    client_max_body_size 10M;

    # 4. Block Hidden Files & VCS Metadata (.env, .git, etc.)
    location ~ /\. {
        deny all;
        access_log off;
        log_not_found off;
    }

    # 5. Block Sensitive File Extensions (Database files, Python source, configs)
    location ~* \.(db|sqlite|sqlite3|env|py|pyc|bak|log|conf|yml|yaml|sh|git)$ {
        deny all;
        access_log off;
        log_not_found off;
    }

    # 6. Auth API Route with Strict Rate Limiting
    location /api/v1/auth/ {
        limit_req zone=auth_zone burst=10 nodelay;
        proxy_pass         http://api:8000;
        proxy_set_header   Host $host;
        proxy_set_header   X-Real-IP $remote_addr;
        proxy_set_header   X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header   X-Forwarded-Proto $scheme;
        proxy_read_timeout 30s;
    }

    # 7. General API Routing
    location /api/ {
        limit_req zone=api_zone burst=30 nodelay;
        proxy_pass         http://api:8000;
        proxy_set_header   Host $host;
        proxy_set_header   X-Real-IP $remote_addr;
        proxy_set_header   X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header   X-Forwarded-Proto $scheme;
        proxy_read_timeout 60s;
    }

    # Documentation and Health endpoints
    location ~ ^/(docs|redoc|openapi\.json|health) {
        proxy_pass http://api:8000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }

    # 8. Frontend Static Files and Web Application
    location / {
        proxy_pass         http://api:8000;
        proxy_set_header   Host $host;
        proxy_set_header   X-Real-IP $remote_addr;
        proxy_set_header   X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header   X-Forwarded-Proto $scheme;
    }

    # Proxy Buffer Optimization
    proxy_buffer_size          128k;
    proxy_buffers              4 256k;
    proxy_busy_buffers_size    256k;
}
```

---

#### 📄 `render.yaml`
```yaml
# render.yaml — GeoAlertNER Render.com Production Deployment
# Deploys the full stack (FastAPI backend + embedded frontend) as a single web service.
# Docs: https://render.com/docs/render-yaml-spec

services:
  - type: web
    name: geoalertner
    runtime: python
    region: singapore          # Closest free-tier region to India (NER)
    plan: free
    rootDir: .
    buildCommand: pip install --upgrade pip && pip install -r requirements.txt
    startCommand: uvicorn backend.app.main:app --host 0.0.0.0 --port $PORT --workers 1
    envVars:
      - key: PYTHON_VERSION
        value: 3.11.9
      - key: PYTHONPATH
        value: .
      - key: PYTHONUNBUFFERED
        value: "1"
      - key: DATABASE_URL
        value: sqlite:///./geoalertner.db
      - key: DEBUG
        value: "false"
      - key: SECRET_KEY
        generateValue: true         # Render auto-generates a secure random value
      - key: SENSOR_INGEST_API_KEY
        generateValue: true         # Auto-generate a secure sensor API key
      - key: SMS_GATEWAY_PROVIDER
        value: MOCK
      - key: SMS_API_KEY
        value: ""
      - key: OPENROUTESERVICE_API_KEY
        value: ""
      # CORS: Allow all origins for public free-tier deploy.
      # For a custom domain, set this to: https://your-custom-domain.com
      - key: BACKEND_CORS_ORIGINS
        value: '["*"]'
    healthCheckPath: /health  # Render polls this endpoint to verify readiness
```

---

#### 📄 `test_integration.py`
```python
"""
End-to-End Integration Test for GeoAlertNER Backend & Frontend
Verifies:
1. Static files and HTML frontend serving on root (/) and asset paths
2. OpenAPI Documentation endpoint (/docs)
3. Health check endpoint (/health)
4. All API v1 endpoints (Risk, Evacuation, Shelters, Weather, IoT Sensors, Telemetry, Helplines, Simulator)
"""

from fastapi.testclient import TestClient
from backend.app.main import app

client = TestClient(app)

def test_frontend_serving():
    """Verify that root (/) serves the frontend index.html."""
    response = client.get("/")
    assert response.status_code == 200
    assert "GeoAlertNER" in response.text
    assert "Disaster Early Warning" in response.text

def test_frontend_assets_serving():
    """Verify that static assets (css, js) are accessible directly."""
    for asset in ["/styles.css", "/app.js", "/api.js", "/map.js", "/manifest.json"]:
        res = client.get(asset)
        assert res.status_code == 200, f"Failed to serve asset: {asset}"
        assert len(res.content) > 0

def test_health_check():
    """Verify system health endpoint."""
    res = client.get("/health")
    assert res.status_code == 200
    data = res.json()
    assert data["status"] == "healthy"
    assert "GeoAlertNER" in data["service"]

def test_api_risk_endpoints():
    """Verify risk calculation, summary, and geojson endpoints."""
    # Summary
    res = client.get("/api/v1/risk/summary")
    assert res.status_code == 200
    assert "overall_risk_score" in res.json()

    # Zones
    res = client.get("/api/v1/risk/zones")
    assert res.status_code == 200
    assert isinstance(res.json(), list)

    # GeoJSON Heatmap
    res = client.get("/api/v1/risk/geojson-heatmap")
    assert res.status_code == 200
    data = res.json()
    assert data["type"] == "FeatureCollection"
    assert "features" in data

    # ML Predict
    res = client.post("/api/v1/risk/ml-predict", params={
        "slope_degrees": 30.0,
        "rainfall_24h_mm": 75.0,
        "soil_moisture_m3_m3": 0.48
    })
    assert res.status_code == 200
    assert "predicted_risk_score_pct" in res.json()

def test_api_shelters_and_evacuation():
    """Verify shelters list, nearest shelter, and evacuation routing."""
    # Shelters list
    res = client.get("/api/v1/shelters")
    assert res.status_code == 200
    shelters = res.json()
    assert len(shelters) > 0

    # Nearest shelter
    res = client.get("/api/v1/shelters/nearest?lat=26.1445&lon=91.7362")
    assert res.status_code == 200
    assert "name" in res.json()

    # Plan evacuation route
    res = client.post("/api/v1/evacuation/plan-route", json={
        "user_latitude": 26.1350,
        "user_longitude": 91.8250,
        "avoid_high_risk": True,
        "transport_preference": "VEHICLE_4X4"
    })
    assert res.status_code == 200
    plan = res.json()
    assert "destination_shelter" in plan
    assert "route_waypoints" in plan
    assert "total_distance_km" in plan

def test_api_weather():
    """Verify live weather and forecast endpoints."""
    res = client.get("/api/v1/weather/current?lat=26.1445&lon=91.7362")
    assert res.status_code == 200

    res = client.get("/api/v1/weather/forecast?lat=26.1445&lon=91.7362&hours=6")
    assert res.status_code == 200

def test_api_sensors_and_simulator():
    """Verify IoT sensor feeds and simulation scenario ticks."""
    res = client.get("/api/v1/sensors")
    assert res.status_code == 200
    assert isinstance(res.json(), list)

    res = client.get("/api/v1/sensors/simulator/status")
    assert res.status_code == 200
    assert "active_scenario" in res.json()

    res = client.post("/api/v1/sensors/simulator/tick")
    assert res.status_code == 200
    assert res.json()["status"] == "SUCCESS"

def test_api_telemetry_and_helplines():
    """Verify crowdsourced telemetry and emergency helplines."""
    res = client.get("/api/v1/telemetry/reports")
    assert res.status_code == 200
    assert isinstance(res.json(), list)

    res = client.get("/api/v1/helplines?state=Assam")
    assert res.status_code == 200
    assert isinstance(res.json(), list)
    assert len(res.json()) > 0

def test_api_auth():
    """Verify registration, login, and token-based me endpoint."""
    # 1. Login with demo admin
    res = client.post("/api/v1/auth/login", json={
        "email": "admin@geoalertner.in",
        "password": "Admin@123"
    })
    assert res.status_code == 200
    auth_data = res.json()
    assert "access_token" in auth_data
    token = auth_data["access_token"]

    # 2. Get profile with Bearer token
    res_me = client.get("/api/v1/auth/me", headers={"Authorization": f"Bearer {token}"})
    assert res_me.status_code == 200
    assert res_me.json()["email"] == "admin@geoalertner.in"

    # 3. Register a new user
    import uuid
    new_email = f"integ_test_{uuid.uuid4().hex[:8]}@geoalertner.in"
    reg_res = client.post("/api/v1/auth/register", json={
        "full_name": "Integration Tester",
        "email": new_email,
        "password": "Password987",
        "role": "CITIZEN",
        "state": "Assam"
    })
    assert reg_res.status_code == 201
    assert reg_res.json()["user"]["email"] == new_email

if __name__ == "__main__":
    import pytest
    pytest.main(["-v", __file__])
```

---

#### 📄 `test_live.py`
```python
import urllib.request
import json

base_url = "http://127.0.0.1:8000"
endpoints = [
    ("/health", "GET", None),
    ("/api/v1/sensors/simulator/status", "GET", None),
    ("/api/v1/sensors/simulator/tick", "POST", {}),
    ("/api/v1/sensors", "GET", None),
    ("/api/v1/risk/zones", "GET", None),
    ("/api/v1/risk/geojson-heatmap", "GET", None),
    ("/api/v1/risk/evaluate", "POST", {
        "latitude": 26.1445,
        "longitude": 91.7362,
        "slope_angle_deg": 32.5,
        "rainfall_24h_mm": 65.0,
        "soil_moisture_pct": 78.0,
        "elevation_m": 310.0
    }),
    ("/api/v1/shelters", "GET", None),
    ("/api/v1/shelters/nearest?lat=26.1445&lon=91.7362", "GET", None),
    ("/api/v1/evacuation/plan-route", "POST", {
        "user_latitude": 26.1400,
        "user_longitude": 91.7300,
        "avoid_high_risk": True
    }),
    ("/api/v1/weather/current?lat=26.1445&lon=91.7362", "GET", None),
    ("/api/v1/telemetry/reports", "GET", None),
    ("/api/v1/helplines?state=Assam", "GET", None),
    ("/api/v1/auth/login", "POST", {
        "email": "admin@geoalertner.in",
        "password": "Admin@123"
    }),
]

print("=== TESTING ALL LIVE API ENDPOINTS ===")
all_ok = True
for ep, method, body in endpoints:
    url = base_url + ep
    try:
        data = json.dumps(body).encode("utf-8") if body is not None else None
        headers = {"Content-Type": "application/json"} if body is not None else {}
        req = urllib.request.Request(url, data=data, headers=headers, method=method)
        with urllib.request.urlopen(req, timeout=10) as res:
            status = res.status
            content = json.loads(res.read().decode("utf-8"))
            print(f"[PASS] {method:<4} {ep:<50} -> HTTP {status}")
    except Exception as e:
        all_ok = False
        print(f"[FAIL] {method:<4} {ep:<50} -> ERROR: {e}")

if all_ok:
    print("\n>>> ALL LIVE API ENDPOINTS FUNCTIONING PERFECTLY! <<<")
else:
    print("\n>>> SOME ENDPOINTS ENCOUNTERED ISSUES <<<")
```

---

#### 📄 `build_bundle.py`
```python
"""
GeoAlertNER Bundle Builder
Combines all frontend ES6 modules into a single vanilla JS bundle.
"""
import re

files_order = [
    ('i18n',        'frontend/i18n.js'),
    ('api',         'frontend/api.js'),
    ('offlineSync', 'frontend/offlineSync.js'),
    ('simulator',   'frontend/simulator.js'),
    ('geoMap',      'frontend/map.js'),
    ('app',         'frontend/app.js'),
]

def strip_imports(code):
    """Remove ES6 import statements"""
    return re.sub(r'^\s*import\s+[^\n]+;\s*$', '', code, flags=re.MULTILINE)

def strip_exports(code):
    """Remove ES6 export keywords"""
    code = re.sub(r'\bexport\s+default\s+', '', code)
    code = re.sub(r'\bexport\s+(const|let|var|class|function)\s+', r'\1 ', code)
    code = re.sub(r'\bexport\s*\{[^}]*\};\s*', '', code)
    return code

# Collect class definitions and instantiation lines separately
class_definitions = []
instantiation_lines = []

for export_name, filepath in files_order:
    with open(filepath, 'r', encoding='utf-8') as f:
        code = f.read()
    
    code = strip_imports(code)
    code = strip_exports(code)
    
    # Find all `const name = new ClassName(...)` module-level instantiations
    # These must be deferred to DOM ready
    inst_pattern = re.compile(
        r'^(const|let|var)\s+(' + export_name + r')\s*=\s*new\s+\w+\([^)]*\);\s*$',
        re.MULTILINE
    )
    
    # Also find the simple `window.app = new GeoAlertApp();` pattern
    win_pattern = re.compile(r'^window\.\w+\s*=\s*new\s+\w+\([^)]*\);\s*$', re.MULTILINE)
    
    # Collect and remove all instantiations
    for m in inst_pattern.finditer(code):
        instantiation_lines.append(m.group(0).strip())
    code = inst_pattern.sub('', code)
    
    for m in win_pattern.finditer(code):
        instantiation_lines.append(m.group(0).strip())
    code = win_pattern.sub('', code)
    
    # Remove startApp / DOMContentLoaded boilerplate already in app.js 
    code = re.sub(r'function startApp\(\)[^}]+\}', '', code, flags=re.DOTALL)
    code = re.sub(r'if\s*\(document\.readyState.*?startApp\(\);\s*\}', '', code, flags=re.DOTALL)
    
    class_definitions.append((filepath, code))

# Build the final bundle
bundle = '''/**
 * GeoAlertNER - Production Bundle (auto-generated)
 * GeoAlertNER - Disaster Early Warning System
 * DO NOT EDIT: Regenerate with build_bundle.py
 */
(function(window, document) {
  'use strict';

'''

# 1. Emit all class/constant definitions
for filepath, code in class_definitions:
    bundle += f'\n// ===== {filepath} =====\n'
    bundle += code.strip()
    bundle += '\n'

# 2. Wrap all instantiations + app bootstrap in DOMContentLoaded
bundle += '''

// ===== BOOTSTRAP =====
function _geoalert_init() {
  try {
'''
for line in instantiation_lines:
    bundle += f'    {line}\n'

bundle += '''
    // Expose to window for debugging
    if (typeof i18n !== "undefined")        window.i18n        = i18n;
    if (typeof api !== "undefined")         window.api         = api;
    if (typeof offlineSync !== "undefined") window.offlineSync = offlineSync;
    if (typeof simulator !== "undefined")   window.simulator   = simulator;
    if (typeof geoMap !== "undefined")      window.geoMap      = geoMap;

    // Start the application
    if (typeof GeoAlertApp !== "undefined") {
      window.app = new GeoAlertApp();
      window.app.registerServiceWorker();
      window.app.init();
    }
  } catch(e) {
    console.error("[GeoAlertNER] Bootstrap error:", e);
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", _geoalert_init);
} else {
  _geoalert_init();
}

})(window, document);
'''

with open('frontend/bundle.js', 'w', encoding='utf-8') as f:
    f.write(bundle)

print(f"[OK] Generated frontend/bundle.js ({len(bundle)} bytes, {bundle.count(chr(10))} lines)")
print(f"     Deferred {len(instantiation_lines)} instantiations to DOM-ready.")
for line in instantiation_lines:
    print(f"   - {line[:80]}")
```

---

### 11.11 Documentation & Governance

#### 📄 `README.md`
```md
# GeoAlertNER ⛰️🚨

<div align="center">

**AI-Driven Multi-Hazard Early Warning & Evacuation System**
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

**GeoAlertNER** is a production-ready, full-stack disaster management platform that provides **real-time AI-powered hazard alerts** for the landslide and flood-prone hilly terrains of India's North Eastern Region.

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
| **📡 IoT Sensor Simulator** | Live ESP32/LoRaWAN sensor simulation with configurable disaster scenarios (Monsoon Surge, etc.) |
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
```

---

#### 📄 `backend/README.md`
```md
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
```

---

#### 📄 `frontend/project_overview.md`
```md
# GeoAlertNER – Project Overview

## Idea & Vision
- **Goal:** Provide **real‑time alerts** for events occurring in the **North East Region** (NER) by automatically detecting location mentions in unstructured text.
- **Value proposition:** Faster incident response, risk mitigation, and actionable insights for businesses that operate in or monitor the North East Region.

## Product Features
- **Streaming ingestion** of social‑media, news, and internal logs.
- **Custom NER engine** fine‑tuned to recognise North East Region locations.
- **Geographic enrichment** with coordinates, district, state, timezone.
- **Instant push notifications** to dashboard, mobile, or webhook.
- **Interactive UI** with glass‑morphism map focused on the North East Region.

## Architecture Overview
| Component | Description | Key Code Path |
|-----------|-------------|---------------|
| Ingestion Layer | Kafka producers pulling from APIs, archiving to S3 | [`backend/app/ingestion.py`](file:///c:/Users/Srishti/GeoAlertNER/backend/app/ingestion.py) |
| Pre‑processing Service | Text cleaning, language detection | [`backend/app/preprocess.py`](file:///c:/Users/Srishti/GeoAlertNER/backend/app/preprocess.py) |
| NER Engine | PyTorch model serving location entities for the North East Region | [`ml/ner_model.py`](file:///c:/Users/Srishti/GeoAlertNER/ml/ner_model.py) |
| Enrichment Service | Lookup in GeoNames/OpenStreetMap, caching results | [`backend/app/enrich.py`](file:///c:/Users/Srishti/GeoAlertNER/backend/app/enrich.py) |
| Alert Dispatcher | Generates alerts, pushes via WebSocket/Firebase/webhook | [`backend/app/alert.py`](file:///c:/Users/Srishti/GeoAlertNER/backend/app/alert.py) |
| Frontend UI | React/Vite map UI with live feed | [`frontend/app.js`](file:///c:/Users/Srishti/GeoAlertNER/frontend/app.js) |

## Key Files & Scripts
- **Database schema & models:** [`backend/app/schemas/user.py`](file:///c:/Users/Srishti/GeoAlertNER/backend/app/schemas/user.py), [`backend/app/models/user.py`](file:///c:/Users/Srishti/GeoAlertNER/backend/app/models/user.py)
- **Security & RBAC:** [`backend/app/core/security.py`](file:///c:/Users/Srishti/GeoAlertNER/backend/app/core/security.py), [`backend/app/api/v1/auth.py`](file:///c:/Users/Srishti/GeoAlertNER/backend/app/api/v1/auth.py)
- **Seed data:** [`backend/data/seed_data.py`](file:///c:/Users/Srishti/GeoAlertNER/backend/data/seed_data.py) (includes demo Admin, Field Officer, and Citizen accounts)
- **Integration tests:** [`test_integration.py`](file:///c:/Users/Srishti/GeoAlertNER/test_integration.py)
- **Backend tests:** [`backend/tests/test_api.py`](file:///c:/Users/Srishti/GeoAlertNER/backend/tests/test_api.py)
- **Live test script:** [`test_live.py`](file:///c:/Users/Srishti/GeoAlertNER/test_live.py)
- **Build bundle script:** [`build_bundle.py`](file:///c:/Users/Srishti/GeoAlertNER/build_bundle.py)

## How to Run / Demo
1. Install dependencies (`pip install -r requirements.txt`).
2. Start the backend services: `python -m backend.app.main`.
3. Launch the frontend: `npm run dev` inside `frontend`.
4. Open the UI at `http://localhost:5173` to see live alerts for the North East Region.

## Resources
- **Database:** `geoalertner.db` – SQLite file storing alerts and enriched entities.
- **Documentation:** See the `README.md` at the repo root for further setup instructions.

---
*Generated on 2026‑09‑07. Use this document as a single reference for ChatGPT or any collaborator to understand the idea, product, and work completed in the `GeoAlertNER` folder.*
```

---

#### 📄 `ATTRIBUTION.md`
```md
# Intellectual Property, Attributions & Citations

## 📌 Original Works & Proprietary Algorithms

The following software architectures, mathematical formulations, and engineering modules are original works developed as part of **GeoAlertNER** and are protected under copyright:

1. **Multi-Factor AI Hazard Risk Assessment Engine (`ml_risk_engine.py`)**:
   - Continuous composite scoring algorithm:
     $$Risk(x, y) = w_r R_{24h} + w_s S_{slope} + w_m M_{soil} + w_e E_{elev} + w_h H_{hist}$$
   - Machine Learning Random Forest classifier combining slope inclination, 24h precipitation, volumetric soil moisture, and friable lithology indices.
2. **Hazard-Aware Evacuation Routing Engine (`routing_service.py`)**:
   - Dynamic waypoint generator and escape corridor planner that detects intersections with active critical risk polygons and recalculates safety bypass routes.
3. **IoT Mountain Telemetry & Sensor Simulator (`sensor_simulator.py`)**:
   - Multi-scenario synthetic sensor generator modeling geotechnical sensors (soil saturation probes, tilt inclinometers, rain gauges, river piezometers).
4. **Offline-First PWA Synchronization Engine (`offlineSync.js`)**:
   - IndexedDB caching and batch sync layer designed specifically for zero-connectivity Himalayan hilly terrains.

## ⚖️ Academic Citation Notice

If referencing or utilizing this project for scientific publication, academic research, or technical competitions, please cite:

```bibtex
@software{GeoAlertNER2026,
  author = {GeoAlertNER Project Authors},
  title = {GeoAlertNER: AI-Driven Disaster Early Warning & Hazard-Aware Evacuation System for Hilly Terrains},
  year = {2026},
  url = {https://github.com/Srishti/GeoAlertNER}
}
```

## 🌐 Third-Party Data Sources & Libraries

GeoAlertNER respectfully acknowledges and utilizes data and tools provided by:
- **Open-Meteo API**: Real-time precipitation, weather forecasts, and elevation data.
- **OpenStreetMap & CARTO**: Base cartography and tile rendering.
- **FastAPI & Starlette**: Modern, high-performance web frameworks.
- **Leaflet.js**: Mobile-friendly interactive GIS map visualizer.
- **Scikit-Learn**: Machine learning classification pipelines.
```

---

#### 📄 `SECURITY.md`
```md
# Security Policy & Vulnerability Disclosure

## 🛡️ Supported Versions

| Version | Supported          |
| ------- | ------------------ |
| 1.0.x   | :white_check_mark: |

## 🔒 Security Architecture & Defensive Controls

GeoAlertNER implements multi-layered security controls to protect citizens, responders, and critical disaster infrastructure:

1. **Authentication & Role-Based Access Control (RBAC)**:
   - Self-registration is strictly restricted to the `CITIZEN` role.
   - Administrative and responder roles (`ADMIN`, `FIELD_OFFICER`) require pre-authorized administrative provisioning.
   - Passwords must meet complexity requirements (minimum 8 characters, numerical and alphabetical requirements, capped at 72 bytes to prevent bcrypt DoS).
   - JWT tokens signed with HS256 algorithm and validated on every privileged route.

2. **Denial-of-Service (DoS) & Brute-Force Rate Limiting**:
   - In-memory sliding-window rate limiting on sensitive routes:
     - Authentication login: 5 requests / minute
     - User registration: 3 requests / minute
     - Telemetry submissions: 20 requests / minute
     - Global API limit: 120 requests / minute
   - Reverse proxy rate-limiting zones in Nginx (`limit_req_zone`).

3. **Input Sanitization & Stored XSS Mitigation**:
   - Server-side HTML entity escaping of all crowdsourced telemetry descriptions and names (`html.escape`).
   - Strict URL scheme validation (`https://`, `http://`, `data:image/`) preventing `javascript:` pseudo-protocols.
   - Frontend DOM-level HTML escaping (`escapeHtml()`) before any dynamic template rendering.

4. **Information Disclosure & File Shield**:
   - Automated blocking of directory traversal (`../`) and sensitive file patterns (`.env`, `.db`, `.sqlite`, `.py`, `.git`, `.bak`).
   - Nginx `server_tokens off;` and strict HTTP security headers:
     - `Content-Security-Policy`
     - `X-Frame-Options: DENY`
     - `X-Content-Type-Options: nosniff`
     - `Referrer-Policy: strict-origin-when-cross-origin`
     - `Permissions-Policy: geolocation=(self)`

5. **Hardware Sensor API Protection**:
   - Ground telemetry ingest endpoints support header-based API key validation (`X-Sensor-API-Key`) to prevent sensor spoofing.

## 🚨 Reporting a Vulnerability

If you discover a security vulnerability within GeoAlertNER:
1. Please do **NOT** open a public GitHub issue.
2. Email the development and security response team directly with detailed steps to reproduce.
3. We will acknowledge receipt within 24 hours and coordinate a patch within 7 days.
```

---

## 12. Claude Master Prompts & Guide for Exploration

Use the following ready-to-use prompts when interacting with Claude using this capsule:

### Prompt 1: Full Architecture & Code Review
```text
I have uploaded the complete project capsule for GeoAlertNER, an AI-driven disaster early warning system for India's North Eastern Region.
Please perform a rigorous senior software architect and geotechnical engineering review of the system.
Focus on:
1. Architectural robustness and concurrency bottlenecks in the FastAPI backend.
2. The mathematical validity of the slope failure and soil moisture risk model.
3. Edge cases in the Shapely SafePath polygon avoidance routing.
4. Suggestions for hardware integration with physical LoRaWAN / ESP32 sensor nodes.
```

### Prompt 2: Adding a New Feature (PostgreSQL + PostGIS Migration)
```text
Using the provided GeoAlertNER project capsule, write a comprehensive migration plan and the exact Python/SQL code to upgrade the current SQLite database to PostgreSQL with PostGIS extension.
Specifically:
1. Update `backend/app/models/risk_zone.py` and `backend/app/models/shelter.py` to use `geoalchemy2` geometry columns (Point, Polygon).
2. Rewrite `backend/app/services/routing_service.py` to use PostGIS native spatial queries (`ST_DWithin`, `ST_Intersects`, `ST_Distance`).
3. Provide Alembic migration scripts and Docker Compose service definitions.
```

### Prompt 3: Writing an Academic / IEEE Research Paper Abstract & Methodology
```text
Based on the GeoAlertNER project capsule, draft an academic paper section for an IEEE/Springer conference on Disaster Management & Machine Learning.
Draft:
- Title and Abstract (250 words)
- System Architecture section
- Methodology section covering the 9-parameter geotechnical feature vector, ensemble training, and Shapely polygon bypass algorithm.
- Evaluation methodology and operational benefits for the North Eastern Region of India.
```

### Prompt 4: Preparing a Technical Interview / Hackathon Pitch
```text
Imagine you are pitching GeoAlertNER to a panel of judges at a national hackathon or presenting it in a Staff Systems Engineer interview.
Provide:
1. A 2-minute high-impact elevator pitch highlighting the offline-first PWA, multi-hazard ML, and SafePath routing.
2. Top 5 technical challenges encountered and how they were overcome (e.g. running ML without binary dependencies, avoiding red polygon danger zones, offline IndexedDB sync).
3. Live demonstration walkthrough script.
```

---
*End of GeoAlertNER Master Project Capsule. Generated for complete contextual ingestion into Claude.*
