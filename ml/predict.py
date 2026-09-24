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
