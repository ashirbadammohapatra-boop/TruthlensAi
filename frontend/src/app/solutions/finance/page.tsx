'use client';

import React from 'react';
import Link from 'next/link';
import { SpotlightBackground } from '@/components/ui/SpotlightBackground';
import { FloatingNavbar } from '@/components/FloatingNavbar';
import { Landmark, ShieldCheck, ArrowRight, ArrowLeft, ChevronRight, FileCheck, CheckCircle2 } from 'lucide-react';

export default function FinanceSolutionPage() {
  return (
    <SpotlightBackground>
      <FloatingNavbar activeTab="media" setActiveTab={() => {}} />

      <div className="min-h-screen pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
        
        {/* Breadcrumbs */}
        <div className="flex items-center space-x-2 text-xs font-semibold text-slate-400">
          <Link href="/solutions" className="hover:text-white transition">Solutions</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-cyan-400">Financial Institutions</span>
        </div>

        {/* Hero Section */}
        <div className="space-y-4 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full text-xs text-blue-400 font-bold uppercase tracking-wider">
            <Landmark className="w-4 h-4 text-cyan-400" />
            <span>KYC & Financial Document Validation</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight">
            Prevent Identity Fraud & <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-cyan-400 bg-clip-text text-transparent">Document Tampering</span>
          </h1>

          <p className="text-sm sm:text-base text-slate-400 font-medium">
            Automated verification of passports, bank statements, loan documents, and KYC identity media to prevent synthetic identity onboarding.
          </p>
        </div>

        {/* KYC Workflow Demo */}
        <div className="glass-card p-8 sm:p-10 rounded-3xl border border-slate-800 space-y-6">
          <h2 className="text-xl font-extrabold text-white tracking-tight">Automated KYC Document Verification Workflow</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs">
            <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-2">
              <span className="text-cyan-400 font-bold font-mono">1. Passport Scan</span>
              <p className="text-slate-300 font-bold">MRZ & Microprint Inspection</p>
              <span className="text-emerald-400 font-bold block text-[11px]">Status: Verified Authentic</span>
            </div>

            <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-2">
              <span className="text-cyan-400 font-bold font-mono">2. Bank Statement</span>
              <p className="text-slate-300 font-bold">Font Pixel Alignment Check</p>
              <span className="text-emerald-400 font-bold block text-[11px]">Status: Verified Authentic</span>
            </div>

            <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-2">
              <span className="text-cyan-400 font-bold font-mono">3. Live Selfie Verification</span>
              <p className="text-slate-300 font-bold">Liveness 3D Depth Inspection</p>
              <span className="text-emerald-400 font-bold block text-[11px]">Status: Passed Liveness Check</span>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-8 border-t border-slate-900 text-xs font-bold">
          <Link href="/solutions/cybersecurity" className="text-slate-400 hover:text-white flex items-center gap-1">
            <ArrowLeft className="w-4 h-4" />
            <span>Prev: Cybersecurity & Intelligence</span>
          </Link>
          <Link href="/solutions/insurance" className="text-blue-400 hover:underline flex items-center gap-1">
            <span>Next: Insurance & Claims</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </SpotlightBackground>
  );
}
