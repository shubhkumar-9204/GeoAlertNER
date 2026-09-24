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
