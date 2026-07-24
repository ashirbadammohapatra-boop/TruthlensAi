'use client';

import React from 'react';
import Link from 'next/link';
import { SpotlightBackground } from '@/components/ui/SpotlightBackground';
import { FloatingNavbar } from '@/components/FloatingNavbar';
import { Shield, ShieldCheck, ArrowRight, ArrowLeft, ChevronRight, AlertTriangle, Cpu, Terminal } from 'lucide-react';

export default function CybersecuritySolutionPage() {
  return (
    <SpotlightBackground>
      <FloatingNavbar activeTab="media" setActiveTab={() => {}} />

      <div className="min-h-screen pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
        
        {/* Breadcrumbs */}
        <div className="flex items-center space-x-2 text-xs font-semibold text-slate-400">
          <Link href="/solutions" className="hover:text-white transition">Solutions</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-cyan-400">Cybersecurity & Intelligence</span>
        </div>

        {/* Hero Section */}
        <div className="space-y-4 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full text-xs text-blue-400 font-bold uppercase tracking-wider">
            <Shield className="w-4 h-4 text-cyan-400" />
            <span>SOC Deepfake Phishing Sentinel</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight">
            Stop Executive Impersonation & <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-cyan-400 bg-clip-text text-transparent">Synthetic Voice Phishing</span>
          </h1>

          <p className="text-sm sm:text-base text-slate-400 font-medium">
            Real-time API & Webhook integration for enterprise SOC pipelines to intercept deepfake video calls and synthetic voice clones.
          </p>
        </div>

        {/* Interactive SOC Incident Monitor */}
        <div className="glass-card p-8 sm:p-10 rounded-3xl border border-slate-800 space-y-6">
          <h2 className="text-xl font-extrabold text-white tracking-tight">Enterprise SOC Incident Sentinel Feed</h2>
          <div className="space-y-3 font-mono text-xs">
            <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 flex items-center justify-between text-slate-300">
              <div>
                <span className="text-red-400 font-bold block">[HIGH RISK INCIDENT #INC-8492]</span>
                <span>Executive CEO Voice Clone detected in incoming wire authorization voicemail.</span>
              </div>
              <span className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full font-bold">98.4% Audio Clone Risk</span>
            </div>

            <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 flex items-center justify-between text-slate-300">
              <div>
                <span className="text-emerald-400 font-bold block">[VERIFIED BENIGN #INC-8493]</span>
                <span>Video conference keyframe lighting verified authentic.</span>
              </div>
              <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full font-bold">94.2% Authentic</span>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-8 border-t border-slate-900 text-xs font-bold">
          <Link href="/solutions/legal" className="text-slate-400 hover:text-white flex items-center gap-1">
            <ArrowLeft className="w-4 h-4" />
            <span>Prev: Law Enforcement & Legal</span>
          </Link>
          <Link href="/solutions/finance" className="text-blue-400 hover:underline flex items-center gap-1">
            <span>Next: Financial Institutions</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </SpotlightBackground>
  );
}
