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
