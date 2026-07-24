'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { SpotlightBackground } from '@/components/ui/SpotlightBackground';
import { FloatingNavbar } from '@/components/FloatingNavbar';
import { Newspaper, ShieldCheck, ArrowRight, UploadCloud, Download, CheckCircle2, AlertTriangle, FileText, ChevronRight, ArrowLeft } from 'lucide-react';

export default function JournalismSolutionPage() {
  const [analyzing, setAnalyzing] = useState(false);
  const [report, setReport] = useState<any>(null);

  const handleSimulatedUpload = () => {
    setAnalyzing(true);
    setTimeout(() => {
      setAnalyzing(false);
      setReport({
        id: 'NEWS-2026-84920',
        filename: 'breaking_news_press_photo.jpg',
        trustScore: 96.4,
        verdict: 'Verified Authentic Press Photo',
        exifCamera: 'Canon EOS R5 (Lens: 24-70mm f/2.8)',
        elaScore: '12.4 (Natural Quantization)',
        sha256: 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855'
      });
    }, 1500);
  };

  return (
    <SpotlightBackground>
      <FloatingNavbar activeTab="media" setActiveTab={() => {}} />

      <div className="min-h-screen pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
        
        {/* Breadcrumb Navigation */}
        <div className="flex items-center space-x-2 text-xs font-semibold text-slate-400">
          <Link href="/solutions" className="hover:text-white transition">Solutions</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-cyan-400">Journalism & Media</span>
        </div>

        {/* Hero Section */}
        <div className="space-y-4 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full text-xs text-blue-400 font-bold uppercase tracking-wider">
            <Newspaper className="w-4 h-4 text-cyan-400" />
            <span>Newsroom Media Verification</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight">
            Protect Newsroom Integrity Against <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-cyan-400 bg-clip-text text-transparent">AI Disinformation</span>
          </h1>

          <p className="text-sm sm:text-base text-slate-400 font-medium">
            Sub-15ms automated verification pipeline for breaking news image validation, viral video deepfake scanning, and newsroom wire authentication.
          </p>
        </div>

        {/* Interactive Workspace Demo */}
        <div className="glass-card p-8 sm:p-10 rounded-3xl border border-slate-800 space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div>
              <h2 className="text-xl font-extrabold text-white tracking-tight">Interactive Newsroom Verification Workspace</h2>
              <p className="text-xs text-slate-400">Test breaking news photo validation and Error Level Analysis (ELA).</p>
            </div>
          </div>

          {!report ? (
            <div
              onClick={handleSimulatedUpload}
              className="border-2 border-dashed border-slate-800 hover:border-blue-500/50 rounded-3xl p-12 text-center space-y-4 cursor-pointer transition bg-slate-950/60"
            >
              <div className="w-14 h-14 rounded-full bg-blue-500/10 text-blue-400 flex items-center justify-center mx-auto border border-blue-500/20">
                <UploadCloud className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-base font-extrabold text-white">Click to Upload Press Photo for Analysis</h3>
                <p className="text-xs text-slate-400 mt-1">Supports JPG, PNG, WEBP, and RAW camera formats.</p>
              </div>
              {analyzing && (
                <div className="text-xs font-mono text-cyan-400 font-bold animate-pulse pt-2">
                  Running Multi-Spectral ELA & EXIF Analysis...
                </div>
              )}
            </div>
          ) : (
            <div className="space-y-6 p-6 rounded-2xl bg-slate-950/80 border border-slate-800">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
                <div>
                  <span className="text-[10px] font-mono text-blue-400 font-bold uppercase">{report.id}</span>
                  <h3 className="text-lg font-black text-white">{report.filename}</h3>
                </div>
                <div className="px-4 py-2 rounded-xl bg-emerald-500/20 text-emerald-400 font-extrabold text-xs border border-emerald-500/30">
                  {report.verdict} ({report.trustScore}%)
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono">
                <div className="p-3 bg-slate-900 rounded-xl border border-slate-800">
                  <span className="text-slate-500 block text-[10px]">EXIF Camera Sensor</span>
                  <span className="text-white font-bold">{report.exifCamera}</span>
                </div>
                <div className="p-3 bg-slate-900 rounded-xl border border-slate-800">
                  <span className="text-slate-500 block text-[10px]">ELA Quantization Error</span>
                  <span className="text-emerald-400 font-bold">{report.elaScore}</span>
                </div>
                <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 truncate">
                  <span className="text-slate-500 block text-[10px]">SHA-256 Hash Lock</span>
                  <span className="text-slate-300 font-bold">{report.sha256.substring(0, 16)}...</span>
                </div>
              </div>

              <div className="flex justify-between items-center pt-2">
                <button
                  onClick={() => setReport(null)}
                  className="px-4 py-2 rounded-xl bg-slate-900 text-xs font-bold text-slate-300 hover:text-white border border-slate-800"
                >
                  Scan Another Image
                </button>
                <Link
                  href="/reports"
                  className="px-5 py-2 rounded-xl bg-blue-600 text-xs font-extrabold text-white hover:bg-blue-500 transition flex items-center gap-1.5"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Newsroom Report</span>
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* Bottom Solution Nav */}
        <div className="flex justify-between items-center pt-8 border-t border-slate-900 text-xs font-bold">
          <Link href="/solutions" className="text-slate-400 hover:text-white flex items-center gap-1">
            <ArrowLeft className="w-4 h-4" />
            <span>All Solutions Overview</span>
          </Link>
          <Link href="/solutions/government" className="text-blue-400 hover:underline flex items-center gap-1">
            <span>Next: Government & Public Sector</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </SpotlightBackground>
  );
}
