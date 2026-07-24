from abc import ABC, abstractmethod
from typing import Dict, Any, List, Optional

class BaseAIProvider(ABC):
    """
    Abstract AI Provider Interface for TruthLens Enterprise Reasoning Engine.
    Enables pluggable integration of NVIDIA Nemotron Ultra, OpenAI Vision, or local LLMs.
    """

    @abstractmethod
    def analyze_media(self, media_type: str, metadata: Dict[str, Any], prompt: Optional[str] = None) -> Dict[str, Any]:
        pass

    @abstractmethod
    def generate_explanation(self, trust_score: float, verdict: str, forensic_reasons: List[Dict[str, Any]]) -> str:
        pass

    @abstractmethod
    def summarize_report(self, report_data: Dict[str, Any]) -> str:
        pass

    @abstractmethod
    def chat_assistant(self, query: str, context: Optional[Dict[str, Any]] = None) -> str:
        pass

    @abstractmethod
    def generate_risk_assessment(self, trust_score: float, evidence_summary: List[Dict[str, Any]]) -> Dict[str, Any]:
        pass
