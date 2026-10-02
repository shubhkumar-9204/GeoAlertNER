"""
GeoAlertNER Rate Limiting & DoS Protection Engine.
Copyright (c) 2026 GeoAlertNER Contributors. All rights reserved.

Provides sliding-window in-memory rate limiting to defend against
brute-force credential attacks, endpoint flooding, and scraper bots.
"""

import time
import threading
from typing import Dict, List, Tuple, Optional
from starlette.middleware.base import BaseHTTPMiddleware
from starlette.requests import Request
from starlette.responses import JSONResponse, Response


def get_client_ip(request: Request) -> str:
    """Extract client IP address, supporting reverse proxies (Nginx, Render, Cloudflare)."""
    # Check X-Forwarded-For header
    forwarded_for = request.headers.get("x-forwarded-for")
    if forwarded_for:
        # Take the leftmost IP in the chain (original client)
        client_ip = forwarded_for.split(",")[0].strip()
        if client_ip:
            return client_ip

    # Check X-Real-IP header
    real_ip = request.headers.get("x-real-ip")
    if real_ip:
        return real_ip.strip()

    # Fallback to direct client host
    if request.client and request.client.host:
        return request.client.host

    return "127.0.0.1"


class SlidingWindowRateLimiter:
    """
    Thread-safe sliding-window rate limiter.
    Maintains timestamp logs per client key with automatic memory pruning.
    """
    def __init__(self):
        self._lock = threading.Lock()
        # Storage format: { "key": [timestamp1, timestamp2, ...] }
        self._records: Dict[str, List[float]] = {}
        self._last_prune_time = time.time()
        self._prune_interval = 60.0  # Prune expired keys every 60 seconds

    def _prune_expired_records(self, now: float) -> None:
        """Removes stale records older than 120 seconds to prevent unbounded memory growth."""
        if now - self._last_prune_time < self._prune_interval:
            return
        self._last_prune_time = now
        stale_threshold = now - 120.0
        keys_to_delete = []
        for k, timestamps in self._records.items():
            valid_ts = [t for t in timestamps if t > stale_threshold]
            if not valid_ts:
                keys_to_delete.append(k)
            else:
                self._records[k] = valid_ts
        for k in keys_to_delete:
            del self._records[k]

    def check_rate_limit(
        self,
        key: str,
        max_requests: int,
        window_seconds: int
    ) -> Tuple[bool, int, int]:
        """
        Check if an action is permitted within the sliding window.

        Args:
            key: Unique identifier (e.g. "ip:login")
            max_requests: Max requests allowed within window
            window_seconds: Duration of sliding window in seconds

        Returns:
            Tuple of (is_allowed, remaining_requests, retry_after_seconds)
        """
        now = time.time()
        window_start = now - window_seconds

        with self._lock:
            self._prune_expired_records(now)

            timestamps = self._records.get(key, [])
            # Filter timestamps inside current sliding window
            valid_timestamps = [t for t in timestamps if t > window_start]

            if len(valid_timestamps) >= max_requests:
                # Rate limit exceeded
                earliest = valid_timestamps[0]
                retry_after = max(1, int(earliest + window_seconds - now))
                self._records[key] = valid_timestamps
                return False, 0, retry_after

            # Request is allowed; append current timestamp
            valid_timestamps.append(now)
            self._records[key] = valid_timestamps
            remaining = max(0, max_requests - len(valid_timestamps))
            return True, remaining, 0

    def reset(self) -> None:
        """Reset all rate limiter records (useful for testing)."""
        with self._lock:
            self._records.clear()


# Global limiter singleton
limiter = SlidingWindowRateLimiter()


class RateLimitMiddleware(BaseHTTPMiddleware):
    """
    Middleware applying route-specific and global rate limits to protect APIs.
    """
    # Route matching rules: (path_prefix, method, max_requests, window_seconds)
    RULES: List[Tuple[str, Optional[str], int, int]] = [
        # Strict auth brute-force prevention
        ("/api/v1/auth/login", "POST", 5, 60),
        ("/api/v1/auth/register", "POST", 3, 60),
        # Telemetry ingestion limits
        ("/api/v1/telemetry/report", "POST", 20, 60),
        ("/api/v1/telemetry/sync-offline", "POST", 10, 60),
        # Hardware simulator control
        ("/api/v1/sensors/simulator", "POST", 30, 60),
        # Sensor ingestion limit
        ("/api/v1/sensors/ingest", "POST", 60, 60),
        # General API default limit
        ("/api/v1/", None, 120, 60),
    ]

    async def dispatch(self, request: Request, call_next) -> Response:
        path = request.url.path
        method = request.method

        # Skip rate-limiting for static assets, docs, and health checks
        if not path.startswith("/api/"):
            return await call_next(request)
        if path == "/health":
            return await call_next(request)

        client_ip = get_client_ip(request)

        # Match applicable rule
        matched_rule = None
        for prefix, req_method, limit, window in self.RULES:
            if path.startswith(prefix) and (req_method is None or req_method == method):
                matched_rule = (prefix, limit, window)
                break

        if not matched_rule:
            matched_rule = ("/api/v1/", 120, 60)

        rule_name, limit, window = matched_rule
        key = f"{client_ip}:{rule_name}"

        is_allowed, remaining, retry_after = limiter.check_rate_limit(key, limit, window)

        if not is_allowed:
            return JSONResponse(
                status_code=429,
                content={
                    "detail": "Too Many Requests: Rate limit exceeded. Please slow down.",
                    "error": "RATE_LIMIT_EXCEEDED",
                    "retry_after_seconds": retry_after,
                    "limit": limit,
                    "window_seconds": window
                },
                headers={
                    "Retry-After": str(retry_after),
                    "X-RateLimit-Limit": str(limit),
                    "X-RateLimit-Remaining": "0",
                    "X-RateLimit-Reset": str(retry_after),
                }
            )

        response = await call_next(request)
        response.headers["X-RateLimit-Limit"] = str(limit)
        response.headers["X-RateLimit-Remaining"] = str(remaining)
        return response


