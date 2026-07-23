import pytest
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
    response = client.post("/api/analyze-text", json={"text": "NASA confirms new solar cell efficiency breakthrough."})
    assert response.status_code == 200
    data = response.json()
    assert "trust_score" in data
    assert data["verdict"] == "Verified"

def test_security_headers():
    response = client.get("/")
    assert response.headers["X-Content-Type-Options"] == "nosniff"
    assert response.headers["X-Frame-Options"] == "DENY"
