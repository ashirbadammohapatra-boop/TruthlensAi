'use client';

import React from 'react';
import Link from 'next/link';
import { SpotlightBackground } from '@/components/ui/SpotlightBackground';
import { ShieldCheck, ArrowLeft, Lock, FileText, Cpu, CheckCircle2 } from 'lucide-react';

export default function TrustPage() {
  return (
    <SpotlightBackground>
      <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-12">
        
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center space-x-2 text-xs font-semibold text-slate-400 hover:text-white transition group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to TruthLens AI Home</span>
        </Link>

        {/* Header Banner */}
        <div className="space-y-4 border-b border-slate-800/80 pb-8 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full text-xs text-blue-400 font-bold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-cyan-400" />
            <span>Trust & Compliance Portal</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight">
            Trust <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-cyan-400 bg-clip-text text-transparent">Center</span>
          </h1>

          <p className="text-sm text-slate-400 font-medium">
            Centralized hub for data privacy, security architecture, responsible AI principles, and system metrics.
          </p>
        </div>

        {/* 3 Main Trust Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link
            href="/security"
            className="p-8 rounded-3xl bg-slate-950/80 border border-slate-800/80 backdrop-blur-2xl space-y-4 hover:border-blue-500/40 transition block group"
          >
            <div className="p-3 bg-slate-900 rounded-2xl border border-slate-800 text-blue-400 shrink-0 w-fit">
              <Lock className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-extrabold text-white tracking-tight group-hover:text-blue-400 transition">Security Architecture</h2>
            <p className="text-xs text-slate-400 leading-relaxed">
              Explore our TLS 1.3 encryption, Row Level Security storage policies, and magic byte validation controls.
            </p>
          </Link>

          <Link
            href="/responsible-ai"
            className="p-8 rounded-3xl bg-slate-950/80 border border-slate-800/80 backdrop-blur-2xl space-y-4 hover:border-blue-500/40 transition block group"
          >
            <div className="p-3 bg-slate-900 rounded-2xl border border-slate-800 text-cyan-400 shrink-0 w-fit">
              <Cpu className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-extrabold text-white tracking-tight group-hover:text-cyan-400 transition">Responsible AI</h2>
            <p className="text-xs text-slate-400 leading-relaxed">
              Read our commitments to explainable AI, probabilistic confidence bounds, and human-in-the-loop review.
            </p>
          </Link>

          <Link
            href="/privacy"
            className="p-8 rounded-3xl bg-slate-950/80 border border-slate-800/80 backdrop-blur-2xl space-y-4 hover:border-blue-500/40 transition block group"
          >
            <div className="p-3 bg-slate-900 rounded-2xl border border-slate-800 text-emerald-400 shrink-0 w-fit">
              <FileText className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-extrabold text-white tracking-tight group-hover:text-emerald-400 transition">Data Privacy</h2>
            <p className="text-xs text-slate-400 leading-relaxed">
              Review how user media files are securely processed and deleted upon request in compliance with strict privacy standards.
            </p>
          </Link>
        </div>

        {/* Footer Link */}
        <div className="text-center pt-8 border-t border-slate-900 text-xs text-slate-500">
          © 2026 TruthLens AI Inc. All rights reserved. • Building trust in digital media through AI-powered authenticity verification.
        </div>

      </div>
    </SpotlightBackground>
  );
}
