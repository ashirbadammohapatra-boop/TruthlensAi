'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { SpotlightBackground } from '@/components/ui/SpotlightBackground';
import { FloatingNavbar } from '@/components/FloatingNavbar';
import { ShieldCheck, Server, Users, FileCheck, AlertTriangle, Activity, Database, Cpu, Lock, CheckCircle2, RefreshCw, Key, Filter, ArrowUpRight } from 'lucide-react';

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState<'overview' | 'users' | 'models' | 'logs'>('overview');

  const systemMetrics = [
    { label: 'Active Organization Users', value: '1,420', change: '+12.4% this month', icon: <Users className="w-5 h-5 text-blue-400" /> },
    { label: 'Total Verification Scans', value: '48,920', change: '99.4% F1 Score', icon: <FileCheck className="w-5 h-5 text-emerald-400" /> },
    { label: 'System Uptime SLA', value: '99.99%', change: 'Zero Unplanned Downtime', icon: <Activity className="w-5 h-5 text-cyan-400" /> },
    { label: 'Registered MLOps Models', value: '5 Ensembles', change: 'Sub-15ms Latency', icon: <Cpu className="w-5 h-5 text-purple-400" /> }
  ];

  const registeredUsers = [
    { name: 'Dr. Sarah Lin', email: 'sarah.lin@reuters.com', role: 'Chief Editor', org: 'Reuters Newsroom', status: 'Active', scans: 412 },
    { name: 'Marcus Vance', email: 'vance@defense.gov', role: 'SOC Lead Analyst', org: 'Cyber Command', status: 'Active', scans: 1248 },
    { name: 'Elena Rostova', email: 'elena@apnews.com', role: 'Fact Checker', org: 'Associated Press', status: 'Active', scans: 890 },
    { name: 'David Kim', email: 'kim@interpol.int', role: 'Forensic Officer', org: 'Interpol Digital', status: 'Active', scans: 560 }
  ];

  const systemLogs = [
    { timestamp: '10:24:12', level: 'INFO', event: 'MLOps Ensemble Model ViT-H/14 weights re-calibrated successfully.', source: 'ModelRegistry' },
    { timestamp: '10:22:04', level: 'SUCCESS', event: 'Multi-frame video scan completed (120 keyframes, 0% deepfake risk).', source: 'VideoEngine' },
    { timestamp: '10:18:45', level: 'WARN', event: 'High WhatsApp re-compression variance normalized in ELA pipeline.', source: 'ForensicPipeline' },
    { timestamp: '10:15:30', level: 'INFO', event: 'Automated 24h RLS storage bucket cleanup policy executed.', source: 'SupabaseStorage' }
  ];

  return (
    <SpotlightBackground>
      {/* Navbar */}
      <FloatingNavbar activeTab="media" setActiveTab={() => {}} />

      <div className="min-h-screen pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10">
        
        {/* Top Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full text-xs text-purple-400 font-bold uppercase tracking-wider">
              <Server className="w-4 h-4 text-cyan-400" />
              <span>Superadmin Control Plane</span>
            </div>
            <h1 className="text-3xl font-black text-white tracking-tight mt-2">Enterprise Platform Governance</h1>
            <p className="text-xs text-slate-400">Manage organization users, AI model registries, system logs, and security telemetry.</p>
          </div>

          <div className="flex items-center space-x-3">
            <span className="px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold flex items-center space-x-1.5">
              <CheckCircle2 className="w-4 h-4" />
              <span>All Systems Operational</span>
            </span>
          </div>
        </div>

        {/* System Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {systemMetrics.map((stat, idx) => (
            <div key={idx} className="p-6 rounded-3xl bg-slate-950/80 border border-slate-800/80 backdrop-blur-2xl space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">{stat.label}</span>
                <div className="p-2.5 bg-slate-900 rounded-xl border border-slate-800">
                  {stat.icon}
                </div>
              </div>
              <div className="text-3xl font-black text-white font-mono">{stat.value}</div>
              <span className="text-[11px] font-semibold text-cyan-400">{stat.change}</span>
            </div>
          ))}
        </div>

        {/* Tab Navigation */}
        <div className="flex space-x-2 border-b border-slate-800 pb-2 text-xs font-bold">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-4 py-2.5 rounded-xl transition ${
              activeTab === 'overview' ? 'bg-blue-600/30 text-white border border-blue-500/40' : 'text-slate-400 hover:text-white'
            }`}
          >
            System Overview & Users
          </button>

          <button
            onClick={() => setActiveTab('logs')}
            className={`px-4 py-2.5 rounded-xl transition ${
              activeTab === 'logs' ? 'bg-blue-600/30 text-white border border-blue-500/40' : 'text-slate-400 hover:text-white'
            }`}
          >
            Real-Time System Logs
          </button>
        </div>

        {/* Content Section: Users Table */}
        {activeTab === 'overview' && (
          <div className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-extrabold text-white tracking-tight">Active Organization Users</h2>
                <p className="text-xs text-slate-400">Enterprise accounts authorized to run verification workloads.</p>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-slate-800 text-slate-400 uppercase tracking-wider text-[10px]">
                    <th className="py-3 px-4 font-bold">User Name</th>
                    <th className="py-3 px-4 font-bold">Email</th>
                    <th className="py-3 px-4 font-bold">Role</th>
                    <th className="py-3 px-4 font-bold">Organization</th>
                    <th className="py-3 px-4 font-bold">Status</th>
                    <th className="py-3 px-4 font-bold text-right">Audit Scans</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/80 text-slate-300">
                  {registeredUsers.map((u, idx) => (
                    <tr key={idx} className="hover:bg-slate-900/50 transition">
                      <td className="py-3.5 px-4 font-bold text-white">{u.name}</td>
                      <td className="py-3.5 px-4 text-slate-400 font-mono">{u.email}</td>
                      <td className="py-3.5 px-4 text-cyan-400 font-bold">{u.role}</td>
                      <td className="py-3.5 px-4 text-slate-300">{u.org}</td>
                      <td className="py-3.5 px-4">
                        <span className="px-2.5 py-0.5 rounded text-[10px] font-extrabold bg-emerald-500/20 text-emerald-400">
                          {u.status}
                        </span>
                      </td>
                      <td className="py-3.5 px-4 text-right font-mono font-bold text-white">{u.scans}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Content Section: System Logs */}
        {activeTab === 'logs' && (
          <div className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-6">
            <h2 className="text-xl font-extrabold text-white tracking-tight">System Telemetry & Audit Stream</h2>
            <div className="space-y-3 font-mono text-xs">
              {systemLogs.map((log, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 flex items-start space-x-3">
                  <span className="text-slate-500 font-bold">{log.timestamp}</span>
                  <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                    log.level === 'WARN' ? 'bg-amber-500/20 text-amber-400' :
                    log.level === 'SUCCESS' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-blue-500/20 text-blue-400'
                  }`}>{log.level}</span>
                  <span className="text-cyan-400 font-bold">[{log.source}]</span>
                  <span className="text-slate-300 flex-1">{log.event}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Footer Link */}
        <div className="text-center pt-8 border-t border-slate-900 text-xs text-slate-500">
          © 2026 TruthLens AI Inc. All rights reserved. • Building trust in digital media through AI-powered authenticity verification.
        </div>

      </div>
    </SpotlightBackground>
  );
}
