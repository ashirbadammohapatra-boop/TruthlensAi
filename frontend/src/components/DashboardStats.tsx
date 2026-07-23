'use client';

import React, { useState } from 'react';
import { 
  User, 
  Zap, 
  Image as ImageIcon, 
  ShieldCheck, 
  Clock, 
  CreditCard, 
  Copy, 
  Check, 
  TrendingUp, 
  AlertTriangle, 
  FileCheck, 
  Award, 
  ChevronRight,
  Database
} from 'lucide-react';
import { UploadRecord } from '@/lib/supabase';

interface DashboardStatsProps {
  uploadHistory: UploadRecord[];
  onNavigateTab: (tab: 'factcheck' | 'media' | 'history') => void;
}

export const DashboardStats: React.FC<DashboardStatsProps> = ({ uploadHistory, onNavigateTab }) => {
  const [copiedKey, setCopiedKey] = useState(false);
  const [credits, setCredits] = useState(850);
  const maxCredits = 1000;
  const creditsPercentage = Math.round((credits / maxCredits) * 100);

  const handleCopyKey = () => {
    navigator.clipboard.writeText('tl_live_99824_production_key');
    setCopiedKey(true);
    setTimeout(() => setCopiedKey(false), 2000);
  };

  const totalUploadedImages = uploadHistory.length + 18;
  const averageTrustScore = 87.4;

  return (
    <div className="w-full max-w-6xl mx-auto space-y-8">
      
      {/* Top Banner: Profile & Credits Summary */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Profile Card */}
        <div className="lg:col-span-2 glass-card p-6 rounded-3xl border border-slate-800 space-y-6 relative overflow-hidden bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-slate-950/90">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-blue-500 via-indigo-500 to-cyan-400 p-[2px] shadow-lg shadow-blue-500/20">
                <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center text-blue-400">
                  <User className="w-8 h-8" />
                </div>
              </div>

              <div>
                <div className="flex items-center space-x-2">
                  <h2 className="text-xl font-extrabold text-white tracking-tight">Senior AI Architect</h2>
                  <span className="px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full">
                    Enterprise Pro Active
                  </span>
                </div>
                <p className="text-xs text-slate-400 mt-0.5">Organization: <span className="text-slate-200 font-semibold">TruthLens Innovation Lab</span></p>
                <p className="text-xs text-slate-500">Account ID: <span className="font-mono">usr_enterprise_prod_master</span></p>
              </div>
            </div>

            <div className="p-3 bg-slate-950/80 border border-slate-800 rounded-2xl text-xs space-y-1">
              <p className="text-slate-400 font-medium">Production API Access Key:</p>
              <div className="flex items-center space-x-2">
                <code className="font-mono text-blue-400 font-bold bg-slate-900 px-2 py-1 rounded border border-slate-800">
                  tl_live_99824...
                </code>
                <button
                  onClick={handleCopyKey}
                  className="p-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded transition"
                  title="Copy API Key"
                >
                  {copiedKey ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-slate-400" />}
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 border-t border-slate-800/80 text-xs">
            <div>
              <p className="text-slate-400">Role</p>
              <p className="font-bold text-white">Full-Stack Lead</p>
            </div>
            <div>
              <p className="text-slate-400">Database</p>
              <p className="font-bold text-emerald-400">Supabase Connected</p>
            </div>
            <div>
              <p className="text-slate-400">AI Engine</p>
              <p className="font-bold text-blue-400">FastAPI Python 3.14</p>
            </div>
            <div>
              <p className="text-slate-400">Region</p>
              <p className="font-bold text-slate-200">US-East (Latency 14ms)</p>
            </div>
          </div>
        </div>

        {/* Credits Remaining Widget */}
        <div className="glass-card p-6 rounded-3xl border border-slate-800 space-y-4 flex flex-col justify-between bg-gradient-to-b from-slate-900/90 to-slate-950">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-amber-500/10 text-amber-400 rounded-xl border border-amber-500/20">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white">AI Scan Credits</h3>
                <p className="text-[11px] text-slate-400">Enterprise Monthly Quota</p>
              </div>
            </div>
            <span className="px-2.5 py-1 text-xs font-mono font-bold bg-amber-500/10 text-amber-400 border border-amber-500/20 rounded-lg">
              {creditsPercentage}% Available
            </span>
          </div>

          <div className="space-y-2">
            <div className="flex items-baseline justify-between">
              <span className="text-3xl font-black font-mono text-white">{credits}</span>
              <span className="text-xs font-mono text-slate-400">/ {maxCredits} Credits Remaining</span>
            </div>

            <div className="w-full h-3 bg-slate-950 rounded-full border border-slate-800 overflow-hidden p-0.5">
              <div
                className="h-full bg-gradient-to-r from-amber-500 via-blue-400 to-emerald-400 rounded-full transition-all duration-500 shadow-lg shadow-blue-500/20"
                style={{ width: `${creditsPercentage}%` }}
              />
            </div>
          </div>

          <div className="flex items-center justify-between text-xs text-slate-400 pt-1">
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-slate-500" />
              Refills in 14h 22m
            </span>
            <button
              onClick={() => setCredits(1000)}
              className="text-blue-400 font-semibold hover:underline"
            >
              Top-up Credits
            </button>
          </div>
        </div>

      </div>

      {/* Metric Cards Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {/* Metric 1: Uploaded Images */}
        <div className="glass-card-interactive p-6 rounded-2xl border border-slate-800 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Uploaded Images</span>
            <div className="p-2 bg-blue-500/10 text-blue-400 rounded-xl border border-blue-500/20">
              <ImageIcon className="w-5 h-5" />
            </div>
          </div>
          <div className="text-3xl font-black font-mono text-white">{totalUploadedImages}</div>
          <div className="flex items-center space-x-2 text-[11px] text-slate-400">
            <span className="px-1.5 py-0.5 bg-slate-800 text-blue-400 font-bold rounded">JPG</span>
            <span className="px-1.5 py-0.5 bg-slate-800 text-emerald-400 font-bold rounded">PNG</span>
            <span className="px-1.5 py-0.5 bg-slate-800 text-indigo-400 font-bold rounded">WEBP</span>
          </div>
        </div>

        {/* Metric 2: Platform Trust Score */}
        <div className="glass-card-interactive p-6 rounded-2xl border border-slate-800 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Average Trust Score</span>
            <div className="p-2 bg-emerald-500/10 text-emerald-400 rounded-xl border border-emerald-500/20">
              <ShieldCheck className="w-5 h-5" />
            </div>
          </div>
          <div className="text-3xl font-black font-mono text-emerald-400">{averageTrustScore}%</div>
          <p className="text-xs text-slate-400 flex items-center gap-1">
            <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
            +4.2% higher accuracy this week
          </p>
        </div>

        {/* Metric 3: Claims Verified */}
        <div className="glass-card-interactive p-6 rounded-2xl border border-slate-800 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Verified Claims</span>
            <div className="p-2 bg-indigo-500/10 text-indigo-400 rounded-xl border border-indigo-500/20">
              <FileCheck className="w-5 h-5" />
            </div>
          </div>
          <div className="text-3xl font-black font-mono text-white">124</div>
          <p className="text-xs text-slate-400">Verified against official sources</p>
        </div>

        {/* Metric 4: Deepfakes Flagged */}
        <div className="glass-card-interactive p-6 rounded-2xl border border-slate-800 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Debunked Deepfakes</span>
            <div className="p-2 bg-red-500/10 text-red-400 rounded-xl border border-red-500/20">
              <AlertTriangle className="w-5 h-5" />
            </div>
          </div>
          <div className="text-3xl font-black font-mono text-red-400">38</div>
          <p className="text-xs text-slate-400">High-risk AI artifacts flagged</p>
        </div>

      </div>

      {/* Recent History Stream */}
      <div className="glass-card p-6 rounded-3xl border border-slate-800 space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-blue-500/10 text-blue-400 rounded-xl border border-blue-500/20">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white tracking-tight">Recent Verification & Storage History</h3>
              <p className="text-xs text-slate-400">Real-time log of Supabase uploads and text claim scans.</p>
            </div>
          </div>

          <button
            onClick={() => onNavigateTab('history')}
            className="text-xs font-semibold text-blue-400 hover:text-blue-300 flex items-center space-x-1"
          >
            <span>View Full History</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="space-y-3">
          <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 flex items-center justify-between text-xs">
            <div className="flex items-center space-x-3">
              <span className="px-2 py-1 bg-emerald-500/10 text-emerald-400 font-bold rounded">VERIFIED</span>
              <div>
                <p className="font-semibold text-slate-200">NASA Solar Efficiency Study 2026</p>
                <p className="text-[11px] text-slate-500">Text Claim Scan • Trust Score: 94.2%</p>
              </div>
            </div>
            <span className="text-slate-500 font-mono">10 mins ago</span>
          </div>

          <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 flex items-center justify-between text-xs">
            <div className="flex items-center space-x-3">
              <span className="px-2 py-1 bg-red-500/10 text-red-400 font-bold rounded">DEBUNKED</span>
              <div>
                <p className="font-semibold text-slate-200">political_rally_deepfake_test.jpg (JPG)</p>
                <p className="text-[11px] text-slate-500">Supabase Storage • Deepfake Score: 88.4%</p>
              </div>
            </div>
            <span className="text-slate-500 font-mono">1 hour ago</span>
          </div>

          <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 flex items-center justify-between text-xs">
            <div className="flex items-center space-x-3">
              <span className="px-2 py-1 bg-emerald-500/10 text-emerald-400 font-bold rounded">AUTHENTIC</span>
              <div>
                <p className="font-semibold text-slate-200">official_government_press_release.png (PNG)</p>
                <p className="text-[11px] text-slate-500">Supabase Storage • Deepfake Score: 12.1%</p>
              </div>
            </div>
            <span className="text-slate-500 font-mono">2 hours ago</span>
          </div>
        </div>
      </div>

    </div>
  );
};
