'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { SpotlightBackground } from '@/components/ui/SpotlightBackground';
import { FloatingNavbar } from '@/components/FloatingNavbar';
import { LayoutDashboard, FileCheck, ShieldCheck, Activity, AlertTriangle, Cpu, UploadCloud, RefreshCw, Layers, Key, Settings, User, Bell, ArrowRight, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState<'overview' | 'reports' | 'api' | 'settings'>('overview');

  const stats = [
    { label: 'Total Media Scanned', value: '14,892', change: '+18.4% this month', icon: <FileCheck className="w-5 h-5 text-blue-400" /> },
    { label: 'Average Trust Score', value: '92.4%', change: 'Grade A+ (Authentic)', icon: <ShieldCheck className="w-5 h-5 text-emerald-400" /> },
    { label: 'Deepfake Threats Blocked', value: '1,248', change: '8.4% synthetic risk rate', icon: <AlertTriangle className="w-5 h-5 text-amber-400" /> },
    { label: 'API P95 Execution Latency', value: '14.2ms', change: 'Sub-15ms SRE SLA', icon: <Activity className="w-5 h-5 text-cyan-400" /> }
  ];

  const recentAnalyses = [
    { id: 'SCAN-84920', type: 'Image (JPG)', filename: 'breaking_news_photo.jpg', score: 96.5, verdict: 'Verified Authentic', time: '12 mins ago' },
    { id: 'SCAN-84921', type: 'Video (MP4)', filename: 'press_conference_clip.mp4', score: 24.8, verdict: 'Likely AI Generated', time: '45 mins ago' },
    { id: 'SCAN-84922', type: 'Audio (M4A)', filename: 'executive_voicemail.m4a', score: 88.4, verdict: 'Verified Authentic', time: '2 hours ago' },
    { id: 'SCAN-84923', type: 'URL Scan', filename: 'https://youtube.com/watch?v=84920', score: 94.2, verdict: 'Verified Web Media', time: '4 hours ago' }
  ];

  return (
    <SpotlightBackground>
      {/* Navbar */}
      <FloatingNavbar activeTab="media" setActiveTab={() => {}} />

      <div className="min-h-screen pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10">
        
        {/* Dashboard Top Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-xs text-blue-400 font-bold uppercase tracking-wider">
              <LayoutDashboard className="w-4 h-4 text-cyan-400" />
              <span>Enterprise Command Center</span>
            </div>
            <h1 className="text-3xl font-black text-white tracking-tight mt-2">Executive Analytics Dashboard</h1>
            <p className="text-xs text-slate-400">Organization: Acme Global Intelligence • Plan: Enterprise Pro</p>
          </div>

          <div className="flex items-center space-x-3">
            <span className="px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold flex items-center space-x-1.5">
              <CheckCircle2 className="w-4 h-4" />
              <span>Live System Telemetry Active</span>
            </span>

            <Link
              href="/verify"
              className="px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-400 text-white font-extrabold text-xs flex items-center space-x-2 shadow-lg shadow-blue-500/25 hover:opacity-95 transition"
            >
              <UploadCloud className="w-4 h-4" />
              <span>New Media Scan</span>
            </Link>
          </div>
        </div>

        {/* 4 Stats Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="p-6 rounded-3xl bg-slate-950/80 border border-slate-800/80 backdrop-blur-2xl space-y-3 hover:border-blue-500/40 transition"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">{stat.label}</span>
                <div className="p-2.5 bg-slate-900 rounded-xl border border-slate-800 shrink-0">
                  {stat.icon}
                </div>
              </div>
              <div className="text-3xl font-black text-white font-mono">{stat.value}</div>
              <span className="text-[11px] font-semibold text-emerald-400">{stat.change}</span>
            </motion.div>
          ))}
        </div>

        {/* Main Dashboard Grid: Sidebar Navigation & Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Navigation Sidebar */}
          <div className="lg:col-span-3 glass-card p-4 rounded-3xl border border-slate-800 space-y-2">
            <button
              onClick={() => setActiveTab('overview')}
              className={`w-full p-3.5 rounded-2xl text-xs font-bold flex items-center space-x-3 transition ${
                activeTab === 'overview' ? 'bg-blue-600/20 border border-blue-500/40 text-blue-300' : 'text-slate-400 hover:text-white hover:bg-slate-900/60'
              }`}
            >
              <LayoutDashboard className="w-4 h-4" />
              <span>Overview & Analytics</span>
            </button>

            <Link
              href="/reports"
              className="w-full p-3.5 rounded-2xl text-xs font-bold flex items-center space-x-3 text-slate-400 hover:text-white hover:bg-slate-900/60 transition"
            >
              <FileCheck className="w-4 h-4" />
              <span>Verification Audit Reports</span>
            </Link>

            <Link
              href="/verify"
              className="w-full p-3.5 rounded-2xl text-xs font-bold flex items-center space-x-3 text-slate-400 hover:text-white hover:bg-slate-900/60 transition"
            >
              <UploadCloud className="w-4 h-4" />
              <span>Media Workspace</span>
            </Link>

            <Link
              href="/settings"
              className="w-full p-3.5 rounded-2xl text-xs font-bold flex items-center space-x-3 text-slate-400 hover:text-white hover:bg-slate-900/60 transition"
            >
              <Settings className="w-4 h-4" />
              <span>Organization Settings</span>
            </Link>

            <Link
              href="/profile"
              className="w-full p-3.5 rounded-2xl text-xs font-bold flex items-center space-x-3 text-slate-400 hover:text-white hover:bg-slate-900/60 transition"
            >
              <User className="w-4 h-4" />
              <span>Account & API Keys</span>
            </Link>
          </div>

          {/* Right Main Analytics Panel */}
          <div className="lg:col-span-9 space-y-8">
            
            {/* Recent Verification Analyses Table */}
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-extrabold text-white tracking-tight">Recent Verification Audits</h2>
                  <p className="text-xs text-slate-400">Live stream of uploaded media processed by the ensemble engine.</p>
                </div>
                <Link href="/reports" className="text-xs font-bold text-blue-400 hover:underline flex items-center gap-1">
                  <span>View All Reports</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="border-b border-slate-800 text-slate-400 uppercase tracking-wider text-[10px]">
                      <th className="py-3 px-4 font-bold">Audit ID</th>
                      <th className="py-3 px-4 font-bold">Media Type</th>
                      <th className="py-3 px-4 font-bold">Asset Filename</th>
                      <th className="py-3 px-4 font-bold">Trust Score</th>
                      <th className="py-3 px-4 font-bold">Verdict</th>
                      <th className="py-3 px-4 font-bold text-right">Timestamp</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/80 text-slate-300">
                    {recentAnalyses.map((item, idx) => (
                      <tr key={idx} className="hover:bg-slate-900/50 transition">
                        <td className="py-3.5 px-4 font-mono font-bold text-blue-400">{item.id}</td>
                        <td className="py-3.5 px-4 text-slate-400">{item.type}</td>
                        <td className="py-3.5 px-4 font-bold text-white max-w-[180px] truncate">{item.filename}</td>
                        <td className="py-3.5 px-4 font-mono font-bold text-emerald-400">{item.score}%</td>
                        <td className="py-3.5 px-4">
                          <span className={`px-2.5 py-0.5 rounded text-[10px] font-extrabold ${
                            item.score > 60 ? 'bg-emerald-500/20 text-emerald-400' : 'bg-red-500/20 text-red-400'
                          }`}>{item.verdict}</span>
                        </td>
                        <td className="py-3.5 px-4 text-slate-500 text-right">{item.time}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Quick Actions Panel */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Link
                href="/verify"
                className="p-6 rounded-3xl bg-slate-950/80 border border-slate-800 hover:border-blue-500/40 transition block space-y-3 group"
              >
                <div className="p-3 bg-blue-500/10 rounded-2xl border border-blue-500/20 text-blue-400 w-fit">
                  <UploadCloud className="w-5 h-5" />
                </div>
                <h3 className="text-base font-extrabold text-white group-hover:text-blue-400 transition">Launch Live Scanner</h3>
                <p className="text-xs text-slate-400">Upload media for instant Error Level Analysis (ELA) and visual reasoning audit.</p>
              </Link>

              <Link
                href="/profile"
                className="p-6 rounded-3xl bg-slate-950/80 border border-slate-800 hover:border-cyan-500/40 transition block space-y-3 group"
              >
                <div className="p-3 bg-cyan-500/10 rounded-2xl border border-cyan-500/20 text-cyan-400 w-fit">
                  <Key className="w-5 h-5" />
                </div>
                <h3 className="text-base font-extrabold text-white group-hover:text-cyan-400 transition">API Key Management</h3>
                <p className="text-xs text-slate-400">Generate REST API tokens for programmatic pipeline integration.</p>
              </Link>
            </div>

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
