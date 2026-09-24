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
