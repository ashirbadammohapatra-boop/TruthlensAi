import io
import base64
from PIL import Image, ImageChops, ImageEnhance

def generate_ela_heatmap(image_bytes: bytes, quality: int = 90, scale: int = 15) -> str:
    """
    Computes Error Level Analysis (ELA) and generates a Base64-encoded PNG thermal heatmap string.
    Altered/Manipulated pixels are highlighted in bright neon red/yellow.
    """
    try:
        # 1. Load original image
        original = Image.open(io.BytesIO(image_bytes)).convert('RGB')
        
        # 2. Resave image at standard JPEG quality to calculate compression delta
        buf = io.BytesIO()
        original.save(buf, 'JPEG', quality=quality)
        buf.seek(0)
        resaved = Image.open(buf)
        
        # 3. Compute absolute difference between original and resaved image
        ela_img = ImageChops.difference(original, resaved)
        
        # 4. Scale error values to make altered regions pop visually
        extrema = ela_img.getextrema()
        max_diff = max([ex[1] for ex in extrema]) or 1
        scale_factor = 255.0 / max_diff
        
        ela_img = ImageEnhance.Brightness(ela_img).enhance(scale_factor * (scale / 10.0))
        
        # 5. Apply Thermal Color Map (Red/Yellow = Manipulated, Cyan/Dark = Authentic)
        width, height = ela_img.size
        heatmap = Image.new('RGB', (width, height))
        
        orig_pixels = original.load()
        ela_pixels = ela_img.load()
        heat_pixels = heatmap.load()
        
        for y in range(height):
            for x in range(width):
                r, g, b = ela_pixels[x, y]
                intensity = max(r, g, b)
                
                if intensity > 110:
                    # High Error / Manipulated Region -> Bright Neon Red/Yellow
                    heat_pixels[x, y] = (255, min(255, intensity * 2), 40)
                elif intensity > 50:
                    # Moderate Variance -> Cyan / Amber
                    heat_pixels[x, y] = (40, 200, 255)
                else:
                    # Low Variance / Authentic -> Darkened Original
                    or_r, or_g, or_b = orig_pixels[x, y]
                    heat_pixels[x, y] = (int(or_r * 0.35), int(or_g * 0.35), int(or_b * 0.55))
                    
        # 6. Save resulting heatmap to Base64 PNG buffer
        out_buf = io.BytesIO()
        heatmap.save(out_buf, format='PNG')
        out_buf.seek(0)
        b64_str = base64.b64encode(out_buf.getvalue()).decode('utf-8')
        return f"data:image/png;base64,{b64_str}"
        
    except Exception as e:
        print("ELA Heatmap calculation fallback warning:", e)
        return ""
