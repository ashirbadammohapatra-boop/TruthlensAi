/**
 * TruthLens Production API Configuration Helper
 * Resolves API endpoints dynamically based on NEXT_PUBLIC_API_URL or Vercel rewrites.
 */

export const getApiBaseUrl = (): string => {
  if (typeof window !== 'undefined') {
    // In browser: if NEXT_PUBLIC_API_URL is set, use it; otherwise use relative path for Vercel rewrites
    return process.env.NEXT_PUBLIC_API_URL || '';
  }
  return process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000';
};

export const getApiEndpoint = (path: string): string => {
  const base = getApiBaseUrl();
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  
  if (base) {
    // Ensure no double slashes when joining base + path
    const cleanBase = base.endsWith('/') ? base.slice(0, -1) : base;
    return `${cleanBase}${cleanPath}`;
  }
  
  return cleanPath;
};
