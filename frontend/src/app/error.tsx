'use client';

import { useEffect } from 'react';
import { SpotlightBackground } from '@/components/ui/SpotlightBackground';
import { AlertTriangle, RefreshCw } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Unhandled Next.js Application Error:', error);
  }, [error]);

  return (
    <SpotlightBackground>
      <div className="min-h-screen flex items-center justify-center px-4 py-24">
        <div className="glass-card p-10 sm:p-14 rounded-3xl border border-red-500/20 bg-slate-950/80 backdrop-blur-2xl text-center space-y-6 max-w-lg mx-auto shadow-2xl">
          <div className="w-16 h-16 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 mx-auto">
            <AlertTriangle className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <h1 className="text-2xl font-black text-white tracking-tight">System Encountered an Error</h1>
            <p className="text-xs text-slate-400">Our automated recovery engine caught an unexpected application exception.</p>
          </div>

          <div className="pt-2">
            <button
              onClick={() => reset()}
              className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-red-600 to-amber-500 hover:opacity-95 text-white font-bold text-xs shadow-lg shadow-red-500/25 transition"
            >
              <RefreshCw className="w-4 h-4" />
              <span>Retry Operation</span>
            </button>
          </div>
        </div>
      </div>
    </SpotlightBackground>
  );
}
