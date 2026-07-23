import React from 'react';
import { SpotlightBackground } from '@/components/ui/SpotlightBackground';
import { ShieldCheck, RefreshCw } from 'lucide-react';

export default function Loading() {
  return (
    <SpotlightBackground>
      <div className="min-h-screen flex flex-col items-center justify-center space-y-4">
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-500 to-cyan-400 p-[1px] animate-pulse">
          <div className="w-full h-full bg-slate-950 rounded-[15px] flex items-center justify-center text-blue-400">
            <ShieldCheck className="w-6 h-6" />
          </div>
        </div>
        <div className="flex items-center space-x-2 text-xs font-bold text-slate-400">
          <RefreshCw className="w-3.5 h-3.5 animate-spin text-cyan-400" />
          <span>Loading TruthLens AI Workspace...</span>
        </div>
      </div>
    </SpotlightBackground>
  );
}
