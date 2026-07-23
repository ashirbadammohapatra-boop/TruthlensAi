from dataclasses import dataclass, field
from enum import Enum
from typing import List, Dict, Any, Optional

class Verdict(str, Enum):
    LIKELY_AUTHENTIC = "Likely Authentic"
    POSSIBLY_MANIPULATED = "Possibly Manipulated"
    LIKELY_AI_GENERATED = "Likely AI Generated"
    INCONCLUSIVE = "Inconclusive"

class RiskLevel(str, Enum):
    LOW = "Low"
    MEDIUM = "Medium"
    HIGH = "High"
    CRITICAL = "Critical"

class EvidenceStatus(str, Enum):
    PASS = "Pass"
    WARNING = "Warning"
    FAIL = "Fail"

@dataclass
class Evidence:
    key: str
    name: str
    category: str
    score: float          # 0.0 to 100.0 (High = Authentic, Low = Manipulated)
    weight: float         # Reliability weight (0.0 to 1.0)
    status: EvidenceStatus
    explanation: str
    raw_metrics: Dict[str, Any] = field(default_factory=dict)

@dataclass
class ModelPrediction:
    model_id: str
    model_name: str
    ai_probability: float
    human_probability: float
    confidence: float
    latency_ms: float
    version: str

@dataclass
class DecisionResult:
    trust_score: float                  # 0.0 to 100.0
    verdict: Verdict
    risk_level: RiskLevel
    trust_grade: str
    confidence_interval: str            # e.g. "94.2% ± 1.8%"
    consensus_percentage: float
    supporting_evidence: List[Evidence]
    contradicting_evidence: List[Evidence]
    formula_breakdown: Dict[str, float]
    execution_time_ms: float
