'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { SpotlightBackground } from '@/components/ui/SpotlightBackground';
import { FloatingNavbar } from '@/components/FloatingNavbar';
import { Scale, ShieldCheck, ArrowRight, ArrowLeft, ChevronRight, Download, Lock, CheckCircle2 } from 'lucide-react';

export default function LegalSolutionPage() {
  const [generated, setGenerated] = useState(false);

  return (
    <SpotlightBackground>
      <FloatingNavbar activeTab="media" setActiveTab={() => {}} />

      <div className="min-h-screen pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
        
        {/* Breadcrumbs */}
        <div className="flex items-center space-x-2 text-xs font-semibold text-slate-400">
          <Link href="/solutions" className="hover:text-white transition">Solutions</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-cyan-400">Law Enforcement & Legal</span>
        </div>

        {/* Hero Section */}
        <div className="space-y-4 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full text-xs text-blue-400 font-bold uppercase tracking-wider">
            <Scale className="w-4 h-4 text-cyan-400" />
            <span>Courtroom Evidence Chain of Custody</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight">
            Court-Admissible Digital <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-cyan-400 bg-clip-text text-transparent">Evidence Certification</span>
          </h1>

          <p className="text-sm sm:text-base text-slate-400 font-medium">
            Generate SHA-256 binary hash-locked evidence dossiers for judicial proceedings, criminal investigations, and legal discovery.
          </p>
        </div>

        {/* Interactive Evidence Generator */}
        <div className="glass-card p-8 sm:p-10 rounded-3xl border border-slate-800 space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div>
              <h2 className="text-xl font-extrabold text-white tracking-tight">Forensic Evidence Chain of Custody Generator</h2>
              <p className="text-xs text-slate-400">Simulate legal discovery audit log timestamping.</p>
            </div>
          </div>

          {!generated ? (
            <div className="text-center py-8 space-y-4">
              <p className="text-xs text-slate-400 max-w-md mx-auto">
                Generate a certified legal audit dossier containing full EXIF metadata, ELA thermal maps, and Bayesian confidence scores.
              </p>
              <button
                onClick={() => setGenerated(true)}
                className="px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-xs transition shadow-lg shadow-blue-500/20"
              >
                Generate Courtroom Evidence Dossier
              </button>
            </div>
          ) : (
            <div className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-4 font-mono text-xs">
              <div className="flex items-center justify-between text-emerald-400 font-bold">
                <span>[CERTIFIED LEGAL DOSSIER #DOSSIER-LEGAL-84920]</span>
                <span>SHA-256 VERIFIED</span>
              </div>
              <div className="text-slate-300 space-y-1">
                <p>Hash: e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855</p>
                <p>Timestamp: 2026-07-24T10:31:00Z (UTC)</p>
                <p>Verdict: Verified Authentic Digital Asset (Trust Score: 98.2%)</p>
              </div>
              <div className="flex justify-between items-center pt-2">
                <button onClick={() => setGenerated(false)} className="text-slate-400 hover:underline">Reset</button>
                <Link href="/reports" className="px-4 py-2 bg-blue-600 text-white rounded-xl font-extrabold">
                  Download Court PDF Dossier
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-8 border-t border-slate-900 text-xs font-bold">
          <Link href="/solutions/government" className="text-slate-400 hover:text-white flex items-center gap-1">
            <ArrowLeft className="w-4 h-4" />
            <span>Prev: Government & Public Sector</span>
          </Link>
          <Link href="/solutions/cybersecurity" className="text-blue-400 hover:underline flex items-center gap-1">
            <span>Next: Cybersecurity & Intelligence</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </SpotlightBackground>
  );
}
