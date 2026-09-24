# ── Stage 1: Build Stage ────────────────────────────────────────────────────
FROM python:3.11-slim AS builder

WORKDIR /app

# Install build dependencies
RUN apt-get update && apt-get install -y --no-install-recommends \
    build-essential \
    gcc \
    && rm -rf /var/lib/apt/lists/*

# Copy requirements and install into a user-site prefix
COPY backend/requirements.txt requirements.txt
RUN pip install --upgrade pip && \
    pip install --prefix=/install --no-cache-dir -r requirements.txt

# ── Stage 2: Runtime Stage ───────────────────────────────────────────────────
FROM python:3.11-slim AS runtime

LABEL maintainer="GeoAlertNER Team <contact@geoalertner.in>"
LABEL version="1.0.0"
LABEL description="GeoAlertNER - AI Disaster Monitoring & Evacuation Platform"

WORKDIR /app

# Copy installed Python packages from builder
COPY --from=builder /install /usr/local

# Copy application source
COPY backend/ ./backend/
COPY frontend/ ./frontend/
COPY ml/ ./ml/

# Create non-root user for principle of least privilege
RUN useradd -m -u 1001 appuser && \
    mkdir -p /app/data /app/logs && \
    chown -R appuser:appuser /app

# Environment defaults (override via docker-compose or .env)
ENV PYTHONUNBUFFERED=1 \
    PYTHONDONTWRITEBYTECODE=1 \
    PYTHONPATH=/app \
    DATABASE_URL=sqlite:////app/data/geoalertner.db \
    DEBUG=false \
    SECRET_KEY=change-me-in-production-use-a-long-random-string

# Switch to non-root user
USER appuser

EXPOSE 8000

# Health check so Docker knows when the service is ready
HEALTHCHECK --interval=30s --timeout=10s --start-period=15s --retries=3 \
    CMD python -c "import urllib.request; urllib.request.urlopen('http://localhost:8000/health')" || exit 1

# Default command — start Uvicorn production server
CMD ["uvicorn", "backend.app.main:app", "--host", "0.0.0.0", "--port", "8000", "--workers", "2"]
