'use client';

import React from 'react';
import Link from 'next/link';
import { SpotlightBackground } from '@/components/ui/SpotlightBackground';
import { FloatingNavbar } from '@/components/FloatingNavbar';
import { FileCheck, ArrowLeft, Download, ExternalLink, ShieldCheck, Filter } from 'lucide-react';

export default function ReportsPage() {
  const reports = [
    { id: 'REPORT-2026-84920', asset: 'breaking_news_photo.jpg', type: 'Image (JPG)', trust: '96.5%', verdict: 'Verified Authentic', date: 'July 24, 2026', hash: 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855' },
    { id: 'REPORT-2026-84921', asset: 'press_conference_clip.mp4', type: 'Video (MP4)', trust: '24.8%', verdict: 'Likely AI Generated', date: 'July 24, 2026', hash: '7f83b1657ff1fc53b92dc18148a1d65dfc2d4b1fa3d677284addd200126d9069' },
    { id: 'REPORT-2026-84922', asset: 'executive_voicemail.m4a', type: 'Audio (M4A)', trust: '88.4%', verdict: 'Verified Authentic', date: 'July 23, 2026', hash: '5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8' },
    { id: 'REPORT-2026-84923', asset: 'https://youtube.com/watch?v=84920', type: 'Web Link', trust: '94.2%', verdict: 'Verified Web Media', date: 'July 23, 2026', hash: '6b86b273ff34fce19d6b804eff5a3f5747ada4eaa22f1d49c01e52ddb7875b4b' }
  ];

  return (
    <SpotlightBackground>
      {/* Navbar */}
      <FloatingNavbar activeTab="media" setActiveTab={() => {}} />

      <div className="min-h-screen pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10">
        
        {/* Navigation Link */}
        <Link
          href="/dashboard"
          className="inline-flex items-center space-x-2 text-xs font-semibold text-slate-400 hover:text-white transition group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Command Center Dashboard</span>
        </Link>

        {/* Page Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
          <div>
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full text-xs text-blue-400 font-bold uppercase tracking-wider">
              <FileCheck className="w-4 h-4 text-cyan-400" />
              <span>Chain of Custody Dossiers</span>
            </div>
            <h1 className="text-3xl font-black text-white tracking-tight mt-2">Verification Audit Reports</h1>
            <p className="text-xs text-slate-400">Download certified forensic PDF dossier reports with SHA-256 digital fingerprint locks.</p>
          </div>
        </div>

        {/* Reports Table */}
        <div className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-6">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-slate-800 text-slate-400 uppercase tracking-wider text-[10px]">
                  <th className="py-3.5 px-4 font-bold">Report Dossier ID</th>
                  <th className="py-3.5 px-4 font-bold">Asset Filename</th>
                  <th className="py-3.5 px-4 font-bold">Media Type</th>
                  <th className="py-3.5 px-4 font-bold">Trust Score</th>
                  <th className="py-3.5 px-4 font-bold">Verdict</th>
                  <th className="py-3.5 px-4 font-bold">Cryptographic SHA-256 Hash</th>
                  <th className="py-3.5 px-4 font-bold text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/80 text-slate-300">
                {reports.map((r, idx) => (
                  <tr key={idx} className="hover:bg-slate-900/50 transition">
                    <td className="py-4 px-4 font-mono font-bold text-blue-400">{r.id}</td>
                    <td className="py-4 px-4 font-bold text-white max-w-[160px] truncate">{r.asset}</td>
                    <td className="py-4 px-4 text-slate-400">{r.type}</td>
                    <td className="py-4 px-4 font-mono font-bold text-emerald-400">{r.trust}</td>
                    <td className="py-4 px-4">
                      <span className={`px-2.5 py-0.5 rounded text-[10px] font-extrabold ${
                        parseFloat(r.trust) > 60 ? 'bg-emerald-500/20 text-emerald-400' : 'bg-red-500/20 text-red-400'
                      }`}>{r.verdict}</span>
                    </td>
                    <td className="py-4 px-4 font-mono text-[10px] text-slate-500 max-w-[140px] truncate">{r.hash}</td>
                    <td className="py-4 px-4 text-right">
                      <button className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 hover:bg-blue-500/20 transition font-bold text-[11px]">
                        <Download className="w-3.5 h-3.5" />
                        <span>PDF Report</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Footer Link */}
        <div className="text-center pt-8 border-t border-slate-900 text-xs text-slate-500">
          © 2026 TruthLens AI Inc. All rights reserved. • Building trust in digital media through AI-powered authenticity verification.
        </div>

      </div>
    </SpotlightBackground>
  );
}
