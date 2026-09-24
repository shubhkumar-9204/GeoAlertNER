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
