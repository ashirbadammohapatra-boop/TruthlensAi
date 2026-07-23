from io import BytesIO
from PIL import Image, ExifTags
from typing import Dict, Any, List

SUSPICIOUS_SOFTWARE_KEYWORDS = [
    "photoshop", "gimp", "canva", "lightroom", "midjourney", "stable diffusion",
    "dall-e", "novelai", "automatic1111", "comfyui", "flux", "waifu2x"
]

def analyze_image_metadata(image_bytes: bytes, filename: str) -> Dict[str, Any]:
    """
    Extracts hardware camera metadata, editing software signatures, and GPS headers.
    Flags suspicious missing or edited EXIF fields.
    """
    suspicious_flags: List[str] = []
    metadata_dict: Dict[str, str] = {}
    
    try:
        img = Image.open(BytesIO(image_bytes))
        width, height = img.size
        img_format = img.format or filename.split('.')[-1].upper()

        raw_exif = None
        if hasattr(img, '_getexif') and callable(img._getexif):
            raw_exif = img._getexif()

        if raw_exif:
            for tag_id, val in raw_exif.items():
                tag_name = ExifTags.TAGS.get(tag_id, tag_id)
                metadata_dict[str(tag_name)] = str(val)

        has_exif = len(metadata_dict) > 0
        camera_make = metadata_dict.get("Make", "")
        camera_model = metadata_dict.get("Model", "")
        camera_full = f"{camera_make} {camera_model}".strip() or "Not Specified / Stripped"

        software = metadata_dict.get("Software", "Standard Camera Firmware")
        date_original = metadata_dict.get("DateTimeOriginal") or metadata_dict.get("DateTime") or "Timestamp Missing"
        gps_data = "GPS Info Present" if "GPSInfo" in metadata_dict else "No GPS Data"

        # Check for suspicious editing software signatures
        software_lower = software.lower()
        for kw in SUSPICIOUS_SOFTWARE_KEYWORDS:
            if kw in software_lower:
                suspicious_flags.append(f"Editing software signature detected: '{software}'")

        if not has_exif:
            suspicious_flags.append("EXIF metadata header is completely missing or stripped.")

        if camera_full == "Not Specified / Stripped":
            suspicious_flags.append("Hardware camera model is missing from EXIF headers.")

        if date_original == "Timestamp Missing":
            suspicious_flags.append("Original camera creation timestamp is missing.")

        # Compute Metadata Integrity Score (0 to 100)
        base_score = 100.0
        if not has_exif:
            base_score -= 50.0
        if camera_full == "Not Specified / Stripped":
            base_score -= 20.0
        if date_original == "Timestamp Missing":
            base_score -= 15.0
        if len(suspicious_flags) > 0:
            base_score -= len(suspicious_flags) * 10.0

        metadata_score = max(0.0, min(100.0, round(base_score, 1)))

        return {
            "metadata_score": metadata_score,
            "metadata_status": "Metadata Present" if has_exif else "Metadata Missing",
            "camera": camera_full,
            "gps": gps_data,
            "software": software,
            "date": date_original,
            "compression": img_format,
            "image_size": f"{width} x {height} px",
            "width": width,
            "height": height,
            "suspicious_flags": suspicious_flags,
            "raw_tag_count": len(metadata_dict)
        }

    except Exception as e:
        return {
            "metadata_score": 30.0,
            "metadata_status": "Metadata Missing",
            "camera": "Not Specified / Stripped",
            "gps": "No GPS Data",
            "software": "Unreadable Header",
            "date": "Timestamp Missing",
            "compression": "UNKNOWN",
            "image_size": "Unknown",
            "width": 0,
            "height": 0,
            "suspicious_flags": ["Corrupted or stripped image file headers."],
            "raw_tag_count": 0
        }
