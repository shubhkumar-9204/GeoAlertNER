# Security Policy & Vulnerability Disclosure

## 🛡️ Supported Versions

| Version | Supported          |
| ------- | ------------------ |
| 1.0.x   | :white_check_mark: |

## 🔒 Security Architecture & Defensive Controls

GeoAlertNER implements multi-layered security controls to protect citizens, responders, and critical disaster infrastructure:

1. **Authentication & Role-Based Access Control (RBAC)**:
   - Self-registration is strictly restricted to the `CITIZEN` role.
   - Administrative and responder roles (`ADMIN`, `FIELD_OFFICER`) require pre-authorized administrative provisioning.
   - Passwords must meet complexity requirements (minimum 8 characters, numerical and alphabetical requirements, capped at 72 bytes to prevent bcrypt DoS).
   - JWT tokens signed with HS256 algorithm and validated on every privileged route.

2. **Denial-of-Service (DoS) & Brute-Force Rate Limiting**:
   - In-memory sliding-window rate limiting on sensitive routes:
     - Authentication login: 5 requests / minute
     - User registration: 3 requests / minute
     - Telemetry submissions: 20 requests / minute
     - Global API limit: 120 requests / minute
   - Reverse proxy rate-limiting zones in Nginx (`limit_req_zone`).

3. **Input Sanitization & Stored XSS Mitigation**:
   - Server-side HTML entity escaping of all crowdsourced telemetry descriptions and names (`html.escape`).
   - Strict URL scheme validation (`https://`, `http://`, `data:image/`) preventing `javascript:` pseudo-protocols.
   - Frontend DOM-level HTML escaping (`escapeHtml()`) before any dynamic template rendering.

4. **Information Disclosure & File Shield**:
   - Automated blocking of directory traversal (`../`) and sensitive file patterns (`.env`, `.db`, `.sqlite`, `.py`, `.git`, `.bak`).
   - Nginx `server_tokens off;` and strict HTTP security headers:
     - `Content-Security-Policy`
     - `X-Frame-Options: DENY`
     - `X-Content-Type-Options: nosniff`
     - `Referrer-Policy: strict-origin-when-cross-origin`
     - `Permissions-Policy: geolocation=(self)`

5. **Hardware Sensor API Protection**:
   - Ground telemetry ingest endpoints support header-based API key validation (`X-Sensor-API-Key`) to prevent sensor spoofing.

## 🚨 Reporting a Vulnerability

If you discover a security vulnerability within GeoAlertNER:
1. Please do **NOT** open a public GitHub issue.
2. Email the development and security response team directly with detailed steps to reproduce.
3. We will acknowledge receipt within 24 hours and coordinate a patch within 7 days.
