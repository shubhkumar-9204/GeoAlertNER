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
