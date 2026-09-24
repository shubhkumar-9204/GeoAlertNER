import pytest
from fastapi.testclient import TestClient
from backend.app.main import app
from backend.app.core.database import engine, Base, SessionLocal
from backend.data.seed_data import seed_database
import backend.app.models

from backend.app.core.rate_limit import limiter

@pytest.fixture(scope="session", autouse=True)
def setup_test_db():
    limiter.reset()
    Base.metadata.create_all(bind=engine)
    db = SessionLocal()
    try:
        seed_database(db)
    finally:
        db.close()
    yield
    limiter.reset()

def test_health_check():
    with TestClient(app) as client:
        response = client.get("/health")
        assert response.status_code == 200
        data = response.json()
        assert data["status"] == "healthy"
        assert "North Eastern Region" in data["region_focus"]

def test_get_risk_zones():
    with TestClient(app) as client:
        response = client.get("/api/v1/risk/zones")
        assert response.status_code == 200
        zones = response.json()
        assert isinstance(zones, list)
        assert len(zones) >= 1
        assert "risk_score" in zones[0]

def test_risk_geojson_heatmap():
    with TestClient(app) as client:
        response = client.get("/api/v1/risk/geojson-heatmap")
        assert response.status_code == 200
        data = response.json()
        assert data["type"] == "FeatureCollection"
        assert len(data["features"]) >= 1
        assert data["features"][0]["geometry"]["type"] == "Polygon"

def test_risk_evaluate_custom_point():
    with TestClient(app) as client:
        payload = {
            "latitude": 26.1445,
            "longitude": 91.7362,
            "slope_angle": 35.0,
            "custom_rainfall_mm": 90.0
        }
        response = client.post("/api/v1/risk/evaluate", json=payload)
        assert response.status_code == 200
        data = response.json()
        assert "risk_score" in data
        assert 0.0 <= data["risk_score"] <= 100.0
        assert "risk_level" in data
        assert "factors" in data
        assert "action_recommendation" in data

def test_get_shelters():
    with TestClient(app) as client:
        response = client.get("/api/v1/shelters")
        assert response.status_code == 200
        shelters = response.json()
        assert isinstance(shelters, list)
        assert len(shelters) >= 1
        assert "available_capacity" in shelters[0]

def test_get_nearest_shelter():
    with TestClient(app) as client:
        response = client.get("/api/v1/shelters/nearest?lat=26.1445&lon=91.7362")
        assert response.status_code == 200
        data = response.json()
        assert "name" in data
        assert "distance_km" in data
        assert data["distance_km"] >= 0

def test_evacuation_plan_route():
    with TestClient(app) as client:
        payload = {
            "user_latitude": 26.1400,
            "user_longitude": 91.7300,
            "avoid_high_risk": True,
            "transport_preference": "ANY"
        }
        response = client.post("/api/v1/evacuation/plan-route", json=payload)
        assert response.status_code == 200
        data = response.json()
        assert "destination_shelter" in data
        assert "route_waypoints" in data
        assert len(data["route_waypoints"]) >= 2
        assert "transport_guidance" in data
        assert "emergency_contacts" in data
        assert data["route_geojson"]["geometry"]["type"] == "LineString"

def test_sensor_simulator_flow():
    with TestClient(app) as client:
        # 1. Check status
        res = client.get("/api/v1/sensors/simulator/status")
        assert res.status_code == 200
        assert "active_scenario" in res.json()

        # 2. Switch to LANDSLIDE_IMMINENT scenario
        res2 = client.post("/api/v1/sensors/simulator/scenario?scenario=LANDSLIDE_IMMINENT")
        assert res2.status_code == 200
        assert res2.json()["active_scenario"] == "LANDSLIDE_IMMINENT"

        # 3. Trigger manual tick
        res3 = client.post("/api/v1/sensors/simulator/tick")
        assert res3.status_code == 200
        assert res3.json()["status"] == "SUCCESS"
        assert len(res3.json()["sensor_readings"]) >= 1

        # 4. Check sensors list to verify values were updated in DB
        res4 = client.get("/api/v1/sensors")
        assert res4.status_code == 200
        sensors = res4.json()
        assert len(sensors) >= 1

def test_helplines():
    with TestClient(app) as client:
        response = client.get("/api/v1/helplines?state=Assam")
        assert response.status_code == 200
        helplines = response.json()
        assert isinstance(helplines, list)
        assert len(helplines) >= 1
        assert any(h["toll_free_number"] == "1070" for h in helplines)

def test_auth_flow():
    with TestClient(app) as client:
        # 1. Login with seeded admin
        login_res = client.post("/api/v1/auth/login", json={
            "email": "admin@geoalertner.in",
            "password": "Admin@123"
        })
        assert login_res.status_code == 200
        data = login_res.json()
        assert "access_token" in data
        assert data["user"]["role"] == "ADMIN"
        token = data["access_token"]

        # 2. Login with wrong password
        fail_res = client.post("/api/v1/auth/login", json={
            "email": "admin@geoalertner.in",
            "password": "WrongPassword!"
        })
        assert fail_res.status_code == 401

        # 3. Access /auth/me with token
        me_res = client.get("/api/v1/auth/me", headers={"Authorization": f"Bearer {token}"})
        assert me_res.status_code == 200
        assert me_res.json()["email"] == "admin@geoalertner.in"

        # 4. Access /auth/me without token
        unauth_res = client.get("/api/v1/auth/me")
        assert unauth_res.status_code == 401

        # 5. Register new citizen user (role strictly defaults to CITIZEN)
        import uuid
        unique_email = f"citizen_{uuid.uuid4().hex[:8]}@geoalertner.in"
        reg_payload = {
            "full_name": "Test Citizen",
            "email": unique_email,
            "password": "SecurePassword123",
            "state": "Meghalaya"
        }
        reg_res = client.post("/api/v1/auth/register", json=reg_payload)
        assert reg_res.status_code == 201
        reg_data = reg_res.json()
        assert "access_token" in reg_data
        assert reg_data["user"]["role"] == "CITIZEN"

        # 6. Admin provisions a FIELD_OFFICER via privileged endpoint
        admin_create_res = client.post(
            "/api/v1/auth/admin/create-user",
            headers={"Authorization": f"Bearer {token}"},
            json={
                "full_name": "Field Officer Test",
                "email": f"officer_{uuid.uuid4().hex[:8]}@geoalertner.in",
                "password": "SecurePassword123",
                "role": "FIELD_OFFICER",
                "state": "Assam"
            }
        )
        assert admin_create_res.status_code == 201
        assert admin_create_res.json()["role"] == "FIELD_OFFICER"

        # 7. Duplicate registration rejected
        dup_res = client.post("/api/v1/auth/register", json=reg_payload)
        assert dup_res.status_code == 400

