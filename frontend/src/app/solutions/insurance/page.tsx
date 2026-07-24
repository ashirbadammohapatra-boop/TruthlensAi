'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { SpotlightBackground } from '@/components/ui/SpotlightBackground';
import { FloatingNavbar } from '@/components/FloatingNavbar';
import { ShieldCheck, ArrowRight, ArrowLeft, ChevronRight, FileCheck, CheckCircle2, UploadCloud, AlertTriangle } from 'lucide-react';

export default function InsuranceSolutionPage() {
  const [scanned, setScanned] = useState(false);

  return (
    <SpotlightBackground>
      <FloatingNavbar activeTab="media" setActiveTab={() => {}} />

      <div className="min-h-screen pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
        
        {/* Breadcrumbs */}
        <div className="flex items-center space-x-2 text-xs font-semibold text-slate-400">
          <Link href="/solutions" className="hover:text-white transition">Solutions</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-cyan-400">Insurance & Claims</span>
        </div>

        {/* Hero Section */}
        <div className="space-y-4 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full text-xs text-blue-400 font-bold uppercase tracking-wider">
            <FileCheck className="w-4 h-4 text-cyan-400" />
            <span>Automated Claims Fraud Interception</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight">
            Detect Manipulated Accident Photos & <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-cyan-400 bg-clip-text text-transparent">Fraudulent Claims</span>
          </h1>

          <p className="text-sm sm:text-base text-slate-400 font-medium">
            Error Level Analysis (ELA) and duplicate spatial patch detection to identify digitally altered property damage and vehicle accident photos.
          </p>
        </div>

        {/* Interactive Claim Inspector */}
        <div className="glass-card p-8 sm:p-10 rounded-3xl border border-slate-800 space-y-6">
          <h2 className="text-xl font-extrabold text-white tracking-tight">Interactive Claim Photo Fraud Inspector</h2>

          {!scanned ? (
            <div className="text-center py-8 space-y-4">
              <p className="text-xs text-slate-400 max-w-md mx-auto">
                Scan claim asset photo `vehicle_damage_claim_84920.jpg` for spatial tampering and ELA compression anomalies.
              </p>
              <button
                onClick={() => setScanned(true)}
                className="px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-xs transition shadow-lg shadow-blue-500/20"
              >
                Scan Claim Photo Asset
              </button>
            </div>
          ) : (
            <div className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-4 font-mono text-xs">
              <div className="flex items-center justify-between text-emerald-400 font-bold">
                <span>[CLAIM SCAN #CLAIM-84920]</span>
                <span>AUTHENTIC CLAIM ASSET</span>
              </div>
              <div className="text-slate-300 space-y-1">
                <p>Filename: vehicle_damage_claim_84920.jpg</p>
                <p>Duplicate Patch Clones Detected: 0</p>
                <p>EXIF GPS Location: 37.7749° N, 122.4194° W (San Francisco, CA)</p>
                <p>Trust Score: 95.8% (Grade A+ Authentic Claim Photo)</p>
              </div>
              <div className="flex justify-between items-center pt-2">
                <button onClick={() => setScanned(false)} className="text-slate-400 hover:underline">Scan Another Claim</button>
                <Link href="/reports" className="px-4 py-2 bg-blue-600 text-white rounded-xl font-extrabold">
                  Download Claim Audit Report
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-8 border-t border-slate-900 text-xs font-bold">
          <Link href="/solutions/finance" className="text-slate-400 hover:text-white flex items-center gap-1">
            <ArrowLeft className="w-4 h-4" />
            <span>Prev: Financial Institutions</span>
          </Link>
          <Link href="/solutions" className="text-blue-400 hover:underline flex items-center gap-1">
            <span>Back to All Solutions Overview</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </SpotlightBackground>
  );
}
