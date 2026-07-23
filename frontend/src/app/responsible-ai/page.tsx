'use client';

import React from 'react';
import Link from 'next/link';
import { SpotlightBackground } from '@/components/ui/SpotlightBackground';
import { ShieldCheck, ArrowLeft, Cpu, Sparkles, CheckCircle2 } from 'lucide-react';

export default function ResponsibleAIPage() {
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
            <Cpu className="w-4 h-4 text-cyan-400" />
            <span>AI Governance Framework</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight">
            Responsible <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-cyan-400 bg-clip-text text-transparent">AI & Ethics</span>
          </h1>

          <p className="text-sm text-slate-400 font-medium">
            Our commitments to explainability, evidence-based reporting, and ethical digital media verification.
          </p>
        </div>

        {/* Responsible AI Framework Body */}
        <div className="glass-card p-8 sm:p-12 rounded-3xl border border-slate-800 bg-slate-950/80 backdrop-blur-2xl space-y-8 text-slate-300 text-sm leading-relaxed">
          
          <section className="space-y-3">
            <h2 className="text-xl font-extrabold text-white tracking-tight">1. Probabilistic Evidence-Based Scoring</h2>
            <p>
              TruthLens AI never declares "This file is definitely fake" or "This image is 100% real". Digital media analysis is probabilistic. We provide confidence intervals backed by verifiable forensic evidence.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-extrabold text-white tracking-tight">2. Explainable AI (XAI)</h2>
            <p>
              We reject black-box predictions. Every output pairs deep vision neural classification with OpenAI Vision qualitative visual reasoning, detailing exact anomalies across lighting, reflections, corneal catchlights, and EXIF headers.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-extrabold text-white tracking-tight">3. Human-in-the-Loop Recommendation</h2>
            <p>
              TruthLens AI is engineered as a high-precision decision-support tool. For high-stakes journalism, legal courtrooms, or government intelligence, platform reports should be evaluated alongside qualified human forensic experts.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-extrabold text-white tracking-tight">4. Transparent Disclosure of Model Limitations</h2>
            <p>
              Forensic accuracy depends on input media quality. Extremely low-resolution images (under 256x256 pixels), heavy social media re-compression, or recursive screenshotting can degrade ELA signal clarity. Our reports explicitly highlight metadata truncation or compression limitations.
            </p>
          </section>

        </div>

        {/* Footer Link */}
        <div className="text-center pt-8 border-t border-slate-900 text-xs text-slate-500">
          © 2026 TruthLens AI Inc. All rights reserved. • Building trust in digital media through AI-powered authenticity verification.
        </div>

      </div>
    </SpotlightBackground>
  );
}
