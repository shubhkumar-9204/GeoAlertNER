"""
Automated Security, Hardening & Vulnerability Regression Tests.
Copyright (c) 2026 GeoAlertNER Contributors. All rights reserved.
"""

import pytest
from fastapi.testclient import TestClient
from backend.app.main import app
from backend.app.core.database import engine, Base, SessionLocal
from backend.app.core.rate_limit import limiter
from backend.app.models.user import User, UserRole
from backend.data.seed_data import seed_database
import uuid


@pytest.fixture(scope="module", autouse=True)
def setup_security_db():
    Base.metadata.create_all(bind=engine)
    db = SessionLocal()
    try:
        seed_database(db)
    finally:
        db.close()
    limiter.reset()
    yield
    limiter.reset()


def test_security_headers_present():
    """Verify that all defensive security headers are injected into responses."""
    with TestClient(app) as client:
        response = client.get("/health")
        assert response.status_code == 200
        headers = response.headers
        assert headers.get("X-Content-Type-Options") == "nosniff"
        assert headers.get("X-Frame-Options") == "DENY"
        assert headers.get("X-XSS-Protection") == "1; mode=block"
        assert headers.get("Referrer-Policy") == "strict-origin-when-cross-origin"
        assert "Content-Security-Policy" in headers


def test_sensitive_file_shield():
    """Verify that attempts to access sensitive files or directory traversal are blocked."""
    with TestClient(app) as client:
        # Access to .env
        res = client.get("/.env")
        assert res.status_code in [403, 404]

        # Directory traversal
        res = client.get("/../backend/app/main.py")
        assert res.status_code in [403, 404]

        # Database file request
        res = client.get("/geoalertner.db")
        assert res.status_code in [403, 404]


def test_privilege_escalation_prevention():
    """Verify that an attacker attempting to register with role=ADMIN is forced to CITIZEN."""
    with TestClient(app) as client:
        unique_email = f"attacker_{uuid.uuid4().hex[:8]}@example.com"
        payload = {
            "full_name": "Privilege Escalation Tester",
            "email": unique_email,
            "password": "SecurePassword123!",
            "role": "ADMIN"
        }
        res = client.post("/api/v1/auth/register", json=payload)
        assert res.status_code == 201
        data = res.json()
        # Role must be CITIZEN despite payload requesting ADMIN
        assert data["user"]["role"] == "CITIZEN"


def test_password_policy_enforcement():
    """Verify password strength validation rejects weak passwords."""
    with TestClient(app) as client:
        # Too short (< 8 chars)
        res = client.post("/api/v1/auth/register", json={
            "full_name": "Weak Pass User",
            "email": f"weak_{uuid.uuid4().hex[:6]}@example.com",
            "password": "abc1"
        })
        assert res.status_code == 422

        # Missing numbers
        res = client.post("/api/v1/auth/register", json={
            "full_name": "No Number User",
            "email": f"nonum_{uuid.uuid4().hex[:6]}@example.com",
            "password": "onlylettershere"
        })
        assert res.status_code == 422


def test_xss_telemetry_sanitization():
    """Verify that HTML/JS payloads in citizen reports are sanitized against stored XSS."""
    with TestClient(app) as client:
        payload = {
            "category": "LANDSLIDE_BLOCKAGE",
            "description": "<script>alert('XSS')</script>Road blocked by slide",
            "latitude": 26.14,
            "longitude": 91.73,
            "severity_rating": 4,
            "reporter_name": "<img src=x onerror=alert(1)>John Doe"
        }
        res = client.post("/api/v1/telemetry/report", json=payload)
        assert res.status_code == 201
        data = res.json()
        assert "<script>" not in data["description"]
        assert "&lt;script&gt;" in data["description"]
        assert "<img" not in data["reporter_name"]
        assert "&lt;img" in data["reporter_name"]


def test_xss_dangerous_image_url_rejected():
    """Verify that javascript: pseudo-protocol in image_url is rejected."""
    with TestClient(app) as client:
        payload = {
            "category": "LANDSLIDE_BLOCKAGE",
            "description": "Safe description",
            "latitude": 26.14,
            "longitude": 91.73,
            "severity_rating": 3,
            "image_url": "javascript:alert(document.cookie)"
        }
        res = client.post("/api/v1/telemetry/report", json=payload)
        assert res.status_code == 422


def test_unauthorized_shelter_creation_blocked():
    """Verify anonymous visitors cannot create shelters."""
    with TestClient(app) as client:
        payload = {
            "name": "Unauthorized Test Shelter",
            "shelter_type": "RELIEF_CAMP",
            "state": "Assam",
            "district": "Kamrup",
            "latitude": 26.15,
            "longitude": 91.75
        }
        res = client.post("/api/v1/shelters", json=payload)
        assert res.status_code == 401


def test_sensor_ingest_bad_key_rejected():
    """Verify sensor ingestion rejects invalid authentication key."""
    with TestClient(app) as client:
        payload = {
            "sensor_code": "SN-GUW-01",
            "value": 45.0,
            "battery": 95.0
        }
        res = client.post(
            "/api/v1/sensors/ingest",
            json=payload,
            headers={"X-Sensor-API-Key": "wrong-secret-key"}
        )
        assert res.status_code == 401


def test_rate_limiting_login_endpoint():
    """Verify rate limiter blocks brute force after exceeding threshold."""
    limiter.reset()
    with TestClient(app) as client:
        # Rule for /api/v1/auth/login is 5 requests per 60s
        for _ in range(5):
            res = client.post("/api/v1/auth/login", json={
                "email": "invalid@test.com",
                "password": "wrongpassword123"
            })
            assert res.status_code in [401, 200]

        # 6th request should trigger 429 Too Many Requests
        blocked_res = client.post("/api/v1/auth/login", json={
            "email": "invalid@test.com",
            "password": "wrongpassword123"
        })
        assert blocked_res.status_code == 429
        assert "Retry-After" in blocked_res.headers
        assert blocked_res.json()["error"] == "RATE_LIMIT_EXCEEDED"
    limiter.reset()
