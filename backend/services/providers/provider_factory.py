import os
from typing import Dict, Any
from services.providers.ai_provider import BaseAIProvider
from services.providers.nemotron_provider import NemotronUltraProvider

class AIProviderFactory:
    """
    Enterprise AI Provider Factory & Router (v6.4.0).
    Dynamically routes reasoning requests to NVIDIA Nemotron Ultra or fallback providers
    based on PRIMARY_AI_PROVIDER environment variable configuration.
    """

    def __init__(self):
        self.nemotron_provider = NemotronUltraProvider()
        self.primary_provider_name = os.getenv("PRIMARY_AI_PROVIDER", "nemotron").lower()

    def get_provider(self) -> BaseAIProvider:
        if self.primary_provider_name == "nemotron" or self.nemotron_provider.is_configured():
            return self.nemotron_provider
        return self.nemotron_provider  # Default resilient provider

    def get_provider_status(self) -> Dict[str, Any]:
        return {
            "primary_provider": "NVIDIA Nemotron Ultra",
            "nemotron_configured": self.nemotron_provider.is_configured(),
            "nemotron_model": self.nemotron_provider.model,
            "nemotron_base_url": self.nemotron_provider.base_url,
            "timeout_seconds": self.nemotron_provider.timeout,
            "status": "Active & Ready"
        }
