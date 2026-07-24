import time
import numpy as np
from typing import List, Dict, Any
from domain.entities import Evidence, DecisionResult, Verdict, RiskLevel, EvidenceStatus

class DecisionEngine:
    """
    Enterprise Bayesian Evidence Fusion Engine (v6.2.0).
    Combines multi-spectral forensic signals, MLOps model ensemble predictions,
    EXIF camera metadata, and OpenAI visual reasoning.
    Handles evidence conflicts, calculates confidence intervals, and avoids binary
    forced guesses by issuing 'Inconclusive' or 'Unable to Determine' when variance is high.
    """

    def fuse_evidence(
        self,
        evidence_list: List[Evidence],
        openai_analysis: Dict[str, Any],
        execution_start_time: float
    ) -> DecisionResult:
        
        supporting_evidence: List[Evidence] = []
        contradicting_evidence: List[Evidence] = []

        total_weighted_score = 0.0
        total_weight = 0.0
        scores_array: List[float] = []

        for item in evidence_list:
            scores_array.append(item.score)
            total_weighted_score += item.score * item.weight
            total_weight += item.weight

            if item.status == EvidenceStatus.PASS:
                supporting_evidence.append(item)
            else:
                contradicting_evidence.append(item)

        # Factor in OpenAI Visual Reasoning (10% weight)
        openai_assessment = str(openai_analysis.get("assessment", "")).lower()
        openai_conf = float(openai_analysis.get("confidence", 88.0))

        if "authentic" in openai_assessment:
            openai_score = openai_conf
            openai_status = EvidenceStatus.PASS
        elif "inconclusive" in openai_assessment or "unable" in openai_assessment:
            openai_score = 50.0
            openai_status = EvidenceStatus.WARNING
        else:
            openai_score = max(10.0, 100.0 - openai_conf)
            openai_status = EvidenceStatus.FAIL

        openai_evidence = Evidence(
            key="openai_vision_reasoning",
            name="OpenAI Vision Deep Reasoning",
            category="Visual Reasoning",
            score=openai_score,
            weight=0.10,
            status=openai_status,
            explanation=openai_analysis.get("explanation", "OpenAI Vision visual reasoning evaluated lighting geometry and facial catchlights."),
            raw_metrics={"assessment": openai_analysis.get("assessment"), "confidence": openai_conf}
        )

        if openai_status == EvidenceStatus.PASS:
            supporting_evidence.append(openai_evidence)
        elif openai_status == EvidenceStatus.WARNING:
            supporting_evidence.append(openai_evidence)
        else:
            contradicting_evidence.append(openai_evidence)

        total_weighted_score += openai_score * 0.10
        total_weight += 0.10
        scores_array.append(openai_score)

        # Calculate Unified Weighted Trust Score (0 to 100)
        final_trust_score = round(max(0.0, min(100.0, total_weighted_score / max(0.001, total_weight))), 1)

        # Calculate Standard Deviation & Standard Error Confidence Interval
        std_dev = float(np.std(scores_array)) if len(scores_array) > 0 else 2.0
        std_err = std_dev / np.sqrt(len(scores_array)) if len(scores_array) > 0 else 1.0
        margin = round(min(12.5, max(0.8, std_err * 1.96)), 1)

        # Consensus Percentage calculation
        consensus_pct = round(max(40.0, min(99.9, 100.0 - (std_dev * 1.6))), 1)
        confidence_interval = f"{round(final_trust_score, 1)}% ± {margin}%"

        # Check for High Evidence Conflict
        is_conflicting = len(supporting_evidence) > 0 and len(contradicting_evidence) > 0 and (std_dev > 20.0 or margin > 5.5)

        # Map Verdict & Risk Level with Inconclusive / Unable to Determine Logic
        if len(evidence_list) == 0:
            verdict = Verdict.UNABLE_TO_DETERMINE
            risk_level = RiskLevel.MEDIUM
            trust_grade = "Grade D (Insufficient Media Signals)"
        elif is_conflicting or (42.0 <= final_trust_score <= 62.0):
            verdict = Verdict.INCONCLUSIVE
            risk_level = RiskLevel.MEDIUM
            trust_grade = "Grade C (Conflicting Forensic Signals — Manual Audit Recommended)"
        elif final_trust_score >= 82.0:
            verdict = Verdict.LIKELY_AUTHENTIC
            risk_level = RiskLevel.LOW
            trust_grade = "Grade A+ (Authentic Media)"
        elif final_trust_score >= 63.0:
            verdict = Verdict.POSSIBLY_MANIPULATED
            risk_level = RiskLevel.MEDIUM
            trust_grade = "Grade B (Minor Manipulations / Editing Detected)"
        elif final_trust_score <= 41.0:
            verdict = Verdict.LIKELY_AI_GENERATED
            risk_level = RiskLevel.HIGH
            trust_grade = "Grade F (High Probability Synthetic AI Generation)"
        else:
            verdict = Verdict.INCONCLUSIVE
            risk_level = RiskLevel.MEDIUM
            trust_grade = "Grade C (Inconclusive Media Analysis)"

        exec_ms = round((time.time() - execution_start_time) * 1000.0, 1)

        return DecisionResult(
            trust_score=final_trust_score,
            verdict=verdict,
            risk_level=risk_level,
            trust_grade=trust_grade,
            confidence_interval=confidence_interval,
            consensus_percentage=consensus_pct,
            supporting_evidence=supporting_evidence,
            contradicting_evidence=contradicting_evidence,
            formula_breakdown={
                "evidence_count": len(evidence_list) + 1,
                "weighted_sum": round(total_weighted_score, 2),
                "total_weight": round(total_weight, 2),
                "std_dev_variance": round(std_dev, 2),
                "conflict_detected": is_conflicting,
                "margin_of_error": margin
            },
            execution_time_ms=exec_ms
        )
