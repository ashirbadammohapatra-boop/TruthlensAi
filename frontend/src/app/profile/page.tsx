'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { SpotlightBackground } from '@/components/ui/SpotlightBackground';
import { FloatingNavbar } from '@/components/FloatingNavbar';
import { User, ArrowLeft, Key, Copy, Check, ShieldCheck, RefreshCw } from 'lucide-react';

export default function ProfilePage() {
  const [copied, setCopied] = useState(false);
  const apiKey = 'tl_live_secret_key_84920_x92a019481a';

  const copyApiKey = () => {
    navigator.clipboard.writeText(apiKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <SpotlightBackground>
      {/* Navbar */}
      <FloatingNavbar activeTab="media" setActiveTab={() => {}} />

      <div className="min-h-screen pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-10">
        
        {/* Navigation Link */}
        <Link
          href="/dashboard"
          className="inline-flex items-center space-x-2 text-xs font-semibold text-slate-400 hover:text-white transition group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Dashboard</span>
        </Link>

        {/* Page Header */}
        <div className="space-y-2 border-b border-slate-800 pb-6">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full text-xs text-blue-400 font-bold uppercase tracking-wider">
            <User className="w-4 h-4 text-cyan-400" />
            <span>Developer Account</span>
          </div>
          <h1 className="text-3xl font-black text-white tracking-tight">Account & API Keys</h1>
        </div>

        {/* API Key Management Box */}
        <div className="glass-card p-8 sm:p-10 rounded-3xl border border-slate-800 space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <h2 className="text-xl font-extrabold text-white tracking-tight flex items-center space-x-2">
                <Key className="w-5 h-5 text-cyan-400" />
                <span>Production API Secret Key</span>
              </h2>
              <p className="text-xs text-slate-400">Use this token to authenticate REST API requests to `/api/analyze-image` and `/api/analyze-video`.</p>
            </div>
            <span className="text-[10px] font-extrabold uppercase px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
              Active Key
            </span>
          </div>

          <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-between font-mono text-xs text-slate-200 gap-4">
            <span className="truncate">{apiKey}</span>
            <button
              onClick={copyApiKey}
              className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-700 hover:border-slate-600 text-slate-200 text-xs font-bold flex items-center space-x-1.5 shrink-0 transition"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'Copied!' : 'Copy Key'}</span>
            </button>
          </div>
        </div>

        {/* User Profile Info */}
        <div className="glass-card p-8 rounded-3xl border border-slate-800 space-y-4">
          <h2 className="text-base font-extrabold text-white tracking-tight">User Account Credentials</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-300">
            <div>
              <span className="text-slate-500 font-bold block uppercase tracking-wider text-[10px]">Account Name</span>
              <span className="text-white font-semibold">Chief Security Officer</span>
            </div>
            <div>
              <span className="text-slate-500 font-bold block uppercase tracking-wider text-[10px]">Email Address</span>
              <span className="text-white font-semibold">cso@acme-global.com</span>
            </div>
            <div>
              <span className="text-slate-500 font-bold block uppercase tracking-wider text-[10px]">Subscription Tier</span>
              <span className="text-cyan-400 font-bold">Enterprise Pro Plan</span>
            </div>
            <div>
              <span className="text-slate-500 font-bold block uppercase tracking-wider text-[10px]">Rate Limit Allowance</span>
              <span className="text-emerald-400 font-bold">Unlimited (Dedicated SRE)</span>
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
