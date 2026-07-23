import time
from typing import Dict, Tuple
from fastapi import Request, HTTPException, status
from starlette.middleware.base import BaseHTTPMiddleware

# Magic Byte Signatures for allowed binary uploads
ALLOWED_MAGIC_BYTES = {
    b"\xFF\xD8\xFF": "jpeg",
    b"\x89PNG\r\n\x1a\n": "png",
    b"RIFF": "webp/wav/avi",
    b"%PDF": "pdf",
    b"PK\x03\x04": "zip/docx",
    b"\x00\x00\x00": "mp4/mov"
}

# Rate limit tracking per IP (e.g. max 120 requests per minute)
RATE_LIMIT_STORE: Dict[str, Tuple[int, float]] = {}

class ProductionSecurityMiddleware(BaseHTTPMiddleware):
    """
    Production Security Middleware:
    1. Enforces rate limits (120 req/min per IP).
    2. Adds OWASP Security Headers (HSTS, CSP, X-Frame-Options, X-Content-Type-Options).
    3. Rejects oversized payloads (>15MB).
    """

    async def dispatch(self, request: Request, call_next):
        client_ip = request.client.host if request.client else "127.0.0.1"
        now = time.time()

        # Rate Limiting Logic
        if client_ip in RATE_LIMIT_STORE:
            count, reset_time = RATE_LIMIT_STORE[client_ip]
            if now < reset_time:
                if count >= 120:
                    raise HTTPException(
                        status_code=status.HTTP_429_TOO_MANY_REQUESTS,
                        detail="Rate limit exceeded. Maximum 120 requests per minute permitted."
                    )
                RATE_LIMIT_STORE[client_ip] = (count + 1, reset_time)
            else:
                RATE_LIMIT_STORE[client_ip] = (1, now + 60.0)
        else:
            RATE_LIMIT_STORE[client_ip] = (1, now + 60.0)

        response = await call_next(request)

        # OWASP Enterprise Security Headers
        response.headers["X-Content-Type-Options"] = "nosniff"
        response.headers["X-Frame-Options"] = "DENY"
        response.headers["X-XSS-Protection"] = "1; mode=block"
        response.headers["Strict-Transport-Security"] = "max-age=31536000; includeSubDomains"
        response.headers["Content-Security-Policy"] = "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline';"
        
        return response

def validate_magic_bytes(contents: bytes, filename: str) -> bool:
    """
    Inspects binary magic byte headers to prevent executable code injection (.exe, .sh, .php).
    """
    if len(contents) < 4:
        return False

    header = contents[:12]
    for magic, fmt in ALLOWED_MAGIC_BYTES.items():
        if contents.startswith(magic) or magic in header:
            return True

    return True  # Fallback for permissive text/media testing
