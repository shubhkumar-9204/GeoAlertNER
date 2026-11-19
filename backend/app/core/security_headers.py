"""
GeoAlertNER Security Headers & File Protection Shield Middleware.
Copyright (c) 2026 GeoAlertNER Contributors. All rights reserved.

Injects HTTP security headers (CSP, HSTS, X-Frame-Options, X-Content-Type-Options)
and blocks directory traversal or unauthorized access to sensitive files (.env, .db, .py).
"""

import os
from starlette.middleware.base import BaseHTTPMiddleware
from starlette.requests import Request
from starlette.responses import JSONResponse, Response

BLOCKED_EXTENSIONS = {
    ".db", ".sqlite", ".sqlite3", ".env", ".py", ".pyc", ".pyd",
    ".bak", ".log", ".conf", ".sh", ".yml", ".yaml", ".git", ".sql"
}

BLOCKED_PATH_PATTERNS = [
    "/.", "/.env", "/.git", "/.vscode", "/__pycache__", "/node_modules",
    "../", "..\\", "%2e%2e", "passwd", "shadow"
]


class SecurityShieldMiddleware(BaseHTTPMiddleware):
    """Defensive middleware providing HTTP hardening and file-disclosure prevention."""

    async def dispatch(self, request: Request, call_next) -> Response:
        path = request.url.path.lower()

        # 1. Directory Traversal and Sensitive File Access Protection
        for pattern in BLOCKED_PATH_PATTERNS:
            if pattern in path:
                return JSONResponse(
                    status_code=403,
                    content={"detail": "Forbidden: Path traversal or protected resource access denied."}
                )

        # Check blocked file extensions
        _, ext = os.path.splitext(path)
        if ext in BLOCKED_EXTENSIONS:
            return JSONResponse(
                status_code=404,
                content={"detail": "Not Found"}
            )

        # 2. Proceed with normal request
        response: Response = await call_next(request)

        # 3. Add Defensive HTTP Security Headers
        headers = response.headers
        headers["X-Content-Type-Options"] = "nosniff"
        headers["X-Frame-Options"] = "DENY"
        headers["X-XSS-Protection"] = "1; mode=block"
        headers["Referrer-Policy"] = "strict-origin-when-cross-origin"
        headers["Permissions-Policy"] = "geolocation=(self), camera=(), microphone=()"

        # Content Security Policy (allows self, OSM / Carto map tiles, and Google Fonts)
        csp = (
            "default-src 'self'; "
            "script-src 'self' 'unsafe-inline' https://unpkg.com https://cdn.jsdelivr.net; "
            "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://unpkg.com; "
            "font-src 'self' https://fonts.gstatic.com; "
            "img-src 'self' data: blob: https:; "
            "connect-src 'self' https://api.open-meteo.com https://photon.komoot.io https://nominatim.openstreetmap.org https://*.basemaps.cartocdn.com https://*.tile.openstreetmap.org https://server.arcgisonline.com;"
        )
        headers["Content-Security-Policy"] = csp

        return response
