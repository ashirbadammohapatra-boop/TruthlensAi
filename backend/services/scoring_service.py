from typing import Dict, Any

def compute_ensemble_risk_score(
    metadata_res: Dict[str, Any],
    forensics_res: Dict[str, Any],
    ai_ensemble_res: Dict[str, Any],
    openai_res: Dict[str, Any],
    hash_res: Dict[str, Any]
) -> Dict[str, Any]:
    """
    Unified 5-Factor Weighted Risk Scoring Engine:
    - Metadata Integrity: 15%
    - Forensics & ELA: 35%
    - AI Classifier Ensemble: 35%
    - OpenAI Visual Reasoning: 10%
    - Search & Hash History: 5%
    """
    # 1. Metadata Score (15%)
    s_meta = float(metadata_res.get("metadata_score", 50.0))

    # 2. Forensics Score (35%)
    s_forensic = float(forensics_res.get("forensics_score", 70.0))

    # 3. AI Classifier Ensemble Human Score (35%)
    s_ai_human = float(ai_ensemble_res.get("fused_human_probability", 50.0))

    # 4. OpenAI Visual Reasoning Score (10%)
    openai_assessment = str(openai_res.get("assessment", "")).lower()
    openai_confidence = float(openai_res.get("confidence", 85.0))

    if "authentic" in openai_assessment:
        s_openai = openai_confidence
    else:
        s_openai = max(10.0, 100.0 - openai_confidence)

    # 5. Search & Hash Duplicate Score (5%)
    s_hash = 100.0 if not hash_res.get("is_duplicate", False) else 75.0

    # Calculate Weighted Overall Trust Score (0 to 100)
    weighted_score = (
        (s_meta * 0.15) +
        (s_forensic * 0.35) +
        (s_ai_human * 0.35) +
        (s_openai * 0.10) +
        (s_hash * 0.05)
    )

    trust_score = round(max(0.0, min(100.0, weighted_score)), 1)

    # Strict Production Verdict Classification
    if trust_score >= 85.0:
        verdict = "Likely Authentic"
        risk_level = "Low"
        trust_grade = "Grade A+ (Authentic Media)"
    elif trust_score >= 65.0:
        verdict = "Possibly Manipulated"
        risk_level = "Medium"
        trust_grade = "Grade B (Context Required)"
    elif trust_score >= 40.0:
        verdict = "Inconclusive"
        risk_level = "Medium"
        trust_grade = "Grade C (Suspicious Artifact)"
    else:
        verdict = "Likely AI Generated"
        risk_level = "High"
        trust_grade = "Grade F (High Risk AI Synthesis)"

    return {
        "trust_score": trust_score,
        "verdict": verdict,
        "risk_level": risk_level,
        "trust_grade": trust_grade,
        "formula_weights": {
            "metadata_weight": "15%",
            "forensics_weight": "35%",
            "ai_ensemble_weight": "35%",
            "openai_reasoning_weight": "10%",
            "hash_history_weight": "5%"
        },
        "score_components": {
            "metadata_score": round(s_meta, 1),
            "forensics_score": round(s_forensic, 1),
            "ai_human_probability": round(s_ai_human, 1),
            "openai_reasoning_score": round(s_openai, 1),
            "hash_history_score": round(s_hash, 1)
        }
    }
