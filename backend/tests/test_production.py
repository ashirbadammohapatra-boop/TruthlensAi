import pytest
import io
from PIL import Image
from fastapi.testclient import TestClient
from main import app

client = TestClient(app)

def test_read_root():
    response = client.get("/")
    assert response.status_code == 200
    data = response.json()
    assert data["status"] == "online"
    assert "version" in data

def test_health_liveness():
    response = client.get("/health/liveness")
    assert response.status_code == 200
    assert response.json()["status"] == "alive"

def test_health_readiness():
    response = client.get("/health/readiness")
    assert response.status_code == 200
    assert response.json()["status"] == "ready"

def test_evaluation_metrics():
    response = client.get("/api/eval/metrics")
    assert response.status_code == 200
    data = response.json()
    assert data["metrics"]["accuracy_pct"] == 99.4
    assert data["metrics"]["roc_auc_score"] == 0.998

def test_analyze_text():
    response = client.post("/api/analyze-text", json={"text": "NASA confirms new solar cell efficiency breakthrough in 2026."})
    assert response.status_code == 200
    data = response.json()
    assert "trust_score" in data
    assert data["verdict"] == "Verified"

def test_analyze_image_upload():
    # Create synthetic PNG test image
    img = Image.new("RGB", (100, 100), color="blue")
    buf = io.BytesIO()
    img.save(buf, format="PNG")
    buf.seek(0)

    response = client.post(
        "/analyze-image",
        files={"file": ("test_sample.png", buf, "image/png")}
    )
    assert response.status_code == 200
    data = response.json()
    assert "trust_score" in data
    assert "verdict" in data
    assert "confidence" in data
    assert "forensic_reasons" in data

def test_analyze_video_upload():
    # Synthetic video bytes payload
    sample_bytes = b"\x00\x00\x00\x1cftypisom" + b"\x00" * 2000
    response = client.post(
        "/analyze-video",
        files={"file": ("sample_video.mp4", sample_bytes, "video/mp4")}
    )
    assert response.status_code == 200
    data = response.json()
    assert data["media_type"] == "video"
    assert "trust_score" in data
    assert "verdict" in data
    assert "checkpoint_samples" in data

def test_analyze_url_media():
    response = client.post("/api/analyze-url", json={"url": "https://truthlens.ai/evidence_sample"})
    assert response.status_code == 200
    data = response.json()
    assert "trust_score" in data
    assert "verdict" in data

def test_security_headers():
    response = client.get("/")
    assert response.headers["X-Content-Type-Options"] == "nosniff"
    assert response.headers["X-Frame-Options"] == "DENY"
