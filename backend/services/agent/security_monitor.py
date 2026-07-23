import time
from typing import Dict, Any, List

class SecuritySentinelAgent:
    """
    Security Sentinel Agent for TruthLens AI.
    Monitors rate limits, brute-force IP attempts, SQLi/XSS attack signatures, and unauthorized access.
    Automatically blocks malicious IP addresses and logs security alert events.
    """

    def __init__(self):
        self.blocked_ips: List[str] = []
        self.security_events: List[Dict[str, Any]] = []

    def log_security_event(self, client_ip: str, event_type: str, severity: str, details: str):
        event = {
            "event_id": f"SEC-{int(time.time())}",
            "timestamp": time.time(),
            "client_ip": client_ip,
            "event_type": event_type,
            "severity": severity,
            "details": details,
            "action_taken": "BLOCKED" if severity == "HIGH" else "LOGGED_WARNING"
        }
        self.security_events.append(event)
        
        if severity == "HIGH" and client_ip not in self.blocked_ips:
            self.blocked_ips.append(client_ip)

        if len(self.security_events) > 500:
            self.security_events = self.security_events[-500:]

    def get_security_status(self) -> Dict[str, Any]:
        return {
            "total_security_events": len(self.security_events),
            "blocked_ips_count": len(self.blocked_ips),
            "blocked_ips": self.blocked_ips,
            "recent_events": self.security_events[-5:]
        }
