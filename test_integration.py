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
