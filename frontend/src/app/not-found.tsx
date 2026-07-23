'use client';

import Link from 'next/link';
import { SpotlightBackground } from '@/components/ui/SpotlightBackground';
import { ShieldAlert, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <SpotlightBackground>
      <div className="min-h-screen flex items-center justify-center px-4 py-24">
        <div className="glass-card p-10 sm:p-14 rounded-3xl border border-slate-800 bg-slate-950/80 backdrop-blur-2xl text-center space-y-6 max-w-lg mx-auto shadow-2xl">
          <div className="w-16 h-16 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mx-auto">
            <ShieldAlert className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <h1 className="text-5xl font-black text-white tracking-tight">404</h1>
            <h2 className="text-xl font-bold text-slate-200">Page Not Found</h2>
            <p className="text-xs text-slate-400">The page or verification resource you requested does not exist or has been moved.</p>
          </div>

          <div className="pt-2">
            <Link
              href="/"
              className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:opacity-95 text-white font-bold text-xs shadow-lg shadow-blue-500/25 transition"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Return to TruthLens Home</span>
            </Link>
          </div>
        </div>
      </div>
    </SpotlightBackground>
  );
}
