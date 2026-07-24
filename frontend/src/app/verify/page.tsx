'use client';

import React from 'react';
import Link from 'next/link';
import { SpotlightBackground } from '@/components/ui/SpotlightBackground';
import { FloatingNavbar } from '@/components/FloatingNavbar';
import { MultimediaScannerWorkspace } from '@/components/MultimediaScannerWorkspace';
import { ArrowLeft, ShieldCheck } from 'lucide-react';

export default function VerifyPage() {
  return (
    <SpotlightBackground>
      {/* Navbar */}
      <FloatingNavbar activeTab="media" setActiveTab={() => {}} />

      <div className="min-h-screen pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10">
        
        {/* Navigation Link */}
        <Link
          href="/"
          className="inline-flex items-center space-x-2 text-xs font-semibold text-slate-400 hover:text-white transition group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Home Overview</span>
        </Link>

        {/* Workspace Body */}
        <div className="glass-card p-6 sm:p-10 rounded-3xl border border-slate-800 space-y-8">
          <MultimediaScannerWorkspace />
        </div>

        {/* Footer Link */}
        <div className="text-center pt-8 border-t border-slate-900 text-xs text-slate-500">
          © 2026 TruthLens AI Inc. All rights reserved. • Building trust in digital media through AI-powered authenticity verification.
        </div>

      </div>
    </SpotlightBackground>
  );
}
