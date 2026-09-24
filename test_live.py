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
