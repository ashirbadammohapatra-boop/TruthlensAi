import hashlib
import time
from typing import Dict, Any

# In-memory duplicate hash registry
KNOWN_HASH_CACHE: Dict[str, Dict[str, Any]] = {}

def compute_image_hashes(image_bytes: bytes, filename: str) -> Dict[str, Any]:
    """
    Computes SHA-256 and MD5 cryptographic hashes for binary image tracking.
    Checks registry for duplicate uploads or re-submitted media.
    """
    sha256_hash = hashlib.sha256(image_bytes).hexdigest()
    md5_hash = hashlib.md5(image_bytes).hexdigest()
    file_size = len(image_bytes)

    is_duplicate = sha256_hash in KNOWN_HASH_CACHE
    first_seen = time.time()

    if is_duplicate:
        first_seen = KNOWN_HASH_CACHE[sha256_hash]["first_seen"]
        KNOWN_HASH_CACHE[sha256_hash]["scan_count"] += 1
    else:
        KNOWN_HASH_CACHE[sha256_hash] = {
            "filename": filename,
            "md5": md5_hash,
            "first_seen": first_seen,
            "scan_count": 1
        }

    return {
        "sha256": sha256_hash,
        "md5": md5_hash,
        "file_size_bytes": file_size,
        "is_duplicate": is_duplicate,
        "scan_count": KNOWN_HASH_CACHE[sha256_hash]["scan_count"],
        "first_seen_timestamp": first_seen
    }
