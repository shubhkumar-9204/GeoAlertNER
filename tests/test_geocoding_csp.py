import asyncio
from types import SimpleNamespace

from starlette.responses import Response

from backend.app.core.security_headers import SecurityShieldMiddleware


def test_csp_allows_both_india_geocoders():
    middleware = SecurityShieldMiddleware(app=lambda scope, receive, send: None)
    request = SimpleNamespace(url=SimpleNamespace(path="/health"))

    async def call_next(_request):
        return Response("ok")

    response = asyncio.run(middleware.dispatch(request, call_next))
    csp = response.headers["content-security-policy"]

    assert "https://photon.komoot.io" in csp
    assert "https://nominatim.openstreetmap.org" in csp
    assert "connect-src 'self'" in csp
