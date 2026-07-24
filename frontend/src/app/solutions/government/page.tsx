'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { SpotlightBackground } from '@/components/ui/SpotlightBackground';
import { FloatingNavbar } from '@/components/FloatingNavbar';
import { Building2, ShieldCheck, ArrowRight, ArrowLeft, ChevronRight, Activity, AlertTriangle, FileCheck, MapPin } from 'lucide-react';

export default function GovernmentSolutionPage() {
  const threats = [
    { title: 'Election Deepfake Video Campaign', region: 'Europe/East', risk: 'High Risk (92% Synthetic)', status: 'Intercepted' },
    { title: 'Synthetic Voice Impersonation Clip', region: 'North America', risk: 'Critical (98% Audio Clone)', status: 'Blocked' },
    { title: 'Manipulated Public Official Speech', region: 'Asia/Pacific', risk: 'Moderate (48% Inconclusive)', status: 'Under Review' }
  ];

  return (
    <SpotlightBackground>
      <FloatingNavbar activeTab="media" setActiveTab={() => {}} />

      <div className="min-h-screen pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
        
        {/* Breadcrumbs */}
        <div className="flex items-center space-x-2 text-xs font-semibold text-slate-400">
          <Link href="/solutions" className="hover:text-white transition">Solutions</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-cyan-400">Government & Public Sector</span>
        </div>

        {/* Hero Section */}
        <div className="space-y-4 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full text-xs text-blue-400 font-bold uppercase tracking-wider">
            <Building2 className="w-4 h-4 text-cyan-400" />
            <span>Sovereign Threat Defense</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight">
            Protect Democratic Process & <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-cyan-400 bg-clip-text text-transparent">Public Communications</span>
          </h1>

          <p className="text-sm sm:text-base text-slate-400 font-medium">
            Air-gapped verification deployment for election integrity, misinformation monitoring, and national security threat interception.
          </p>
        </div>

        {/* Interactive Threat Dashboard */}
        <div className="glass-card p-8 sm:p-10 rounded-3xl border border-slate-800 space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div>
              <h2 className="text-xl font-extrabold text-white tracking-tight">National Security Deepfake Interception Queue</h2>
              <p className="text-xs text-slate-400">Real-time threat feed monitored by TruthLens Security Sentinel.</p>
            </div>
            <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 rounded-full text-xs font-bold">
              Active Defense Engine
            </span>
          </div>

          <div className="space-y-3 font-mono text-xs">
            {threats.map((t, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <span className="text-white font-bold text-sm block">{t.title}</span>
                  <span className="text-slate-500 text-[10px]">{t.region}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="px-2.5 py-1 rounded bg-red-500/20 text-red-400 font-bold text-[10px]">{t.risk}</span>
                  <span className="px-2.5 py-1 rounded bg-blue-500/20 text-blue-400 font-bold text-[10px]">{t.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-8 border-t border-slate-900 text-xs font-bold">
          <Link href="/solutions/journalism" className="text-slate-400 hover:text-white flex items-center gap-1">
            <ArrowLeft className="w-4 h-4" />
            <span>Prev: Journalism & Media</span>
          </Link>
          <Link href="/solutions/legal" className="text-blue-400 hover:underline flex items-center gap-1">
            <span>Next: Law Enforcement & Legal</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </SpotlightBackground>
  );
}
