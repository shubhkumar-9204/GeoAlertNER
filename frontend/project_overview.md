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
