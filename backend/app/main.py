"""
GeoAlertNER Core FastAPI Application.
Copyright (c) 2026 GeoAlertNER Contributors. All rights reserved.
"""

import os
import mimetypes
import logging
from pathlib import Path
from contextlib import asynccontextmanager
from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import RedirectResponse, JSONResponse
from fastapi.staticfiles import StaticFiles

from backend.app.core.config import settings
from backend.app.core.database import engine, Base, SessionLocal
from backend.app.core.rate_limit import RateLimitMiddleware
from backend.app.core.security_headers import SecurityShieldMiddleware
from backend.app.api.v1.api import api_router
from backend.data.seed_data import seed_database
import backend.app.models

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(name)s: %(message)s"
)
logger = logging.getLogger("geoalertner")


@asynccontextmanager
async def lifespan(app: FastAPI):
    # Startup: Initialize DB tables & seed initial dataset
    logger.info("Initializing GeoAlertNER Database Tables...")
    Base.metadata.create_all(bind=engine)
    
    db = SessionLocal()
    try:
        seed_database(db)
    finally:
        db.close()
    
    logger.info("GeoAlertNER Backend Engine is ready.")
    yield
    # Shutdown
    logger.info("Shutting down GeoAlertNER Backend...")


app = FastAPI(
    title=settings.PROJECT_NAME,
    description="""
# 🛰️ GeoAlertNER Backend API 

AI-driven disaster monitoring platform for North Eastern Region (NER) hilly terrain.

### 🌟 Core Capabilities:
* **AI Landslide & Flash Flood Risk Scoring (0–100%)**: Multi-factor model ingesting Slope Geometry, 24h Rainfall, and Soil Saturation.
* **Hazard-Aware Evacuation Routing**: Dynamic escape corridor planner avoiding active red risk polygons.
* **Safe Shelter Registry & Capacity Tracking**: Directory of relief camps, assembly points, and medical stations.
* **Crowdsourced Ground Telemetry & Offline PWA Sync**: Resilient reporting for zero-connectivity zones.
* **Real-Time Weather Ingestion**: High-precision Open-Meteo & IMD radar data feeds.
* **Emergency Helpline Gateway**: Unified directory for 112, 1070 (SDMA), 1077 (DDMA), and NDRF battalions.
    """,
    version="1.0.0",
    docs_url="/docs",
    redoc_url="/redoc",
    lifespan=lifespan
)

# 1. Attach Rate Limiting Middleware (DoS and brute-force mitigation)
app.add_middleware(RateLimitMiddleware)

# 2. Attach Defensive Security Headers and File Access Shield Middleware
app.add_middleware(SecurityShieldMiddleware)

# 3. Setup CORS Middleware with environment-driven allowed origins
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.BACKEND_CORS_ORIGINS,
    allow_credentials=False,
    allow_methods=["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allow_headers=["*"],
)

# Standard MIME type mappings
mimetypes.add_type("application/javascript", ".js")
mimetypes.add_type("text/css", ".css")
mimetypes.add_type("application/json", ".json")


# Global Exception Handler to prevent stack trace leakage
@app.exception_handler(Exception)
async def global_exception_handler(request: Request, exc: Exception):
    logger.error(f"Unhandled exception on {request.method} {request.url.path}: {exc}", exc_info=True)
    if settings.DEBUG:
        detail = str(exc)
    else:
        detail = "An internal server error occurred. Please contact system support."
    return JSONResponse(
        status_code=500,
        content={"detail": detail, "error": "INTERNAL_SERVER_ERROR"}
    )


# Include API Router
app.include_router(api_router, prefix=settings.API_V1_STR)


@app.get("/health", tags=["Health"])
def health_check():
    """Service health and operational status check."""
    return {
        "status": "healthy",
        "service": settings.PROJECT_NAME,
        "region_focus": "North Eastern Region (NER), India",
        "version": "1.0.0"
    }


# Mount Frontend Web App Static Directory
frontend_dir = Path(__file__).resolve().parent.parent.parent / "frontend"
if frontend_dir.exists():
    logger.info(f"Mounting frontend directory: {frontend_dir}")
    app.mount("/", StaticFiles(directory=str(frontend_dir), html=True), name="frontend")
else:
    @app.get("/", include_in_schema=False)
    def root_redirect():
        """Redirect root path to interactive Swagger documentation if frontend is not present."""
        return RedirectResponse(url="/docs")


if __name__ == "__main__":
    import uvicorn
    uvicorn.run("backend.app.main:app", host="0.0.0.0", port=8000, reload=True)
