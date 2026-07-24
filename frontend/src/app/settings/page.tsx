'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { SpotlightBackground } from '@/components/ui/SpotlightBackground';
import { FloatingNavbar } from '@/components/FloatingNavbar';
import { Settings, ArrowLeft, Building, Lock, Bell, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function SettingsPage() {
  const [saved, setSaved] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
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
            <Settings className="w-4 h-4 text-cyan-400" />
            <span>Organization Controls</span>
          </div>
          <h1 className="text-3xl font-black text-white tracking-tight">Platform Settings</h1>
        </div>

        {/* Form Body */}
        <div className="glass-card p-8 sm:p-10 rounded-3xl border border-slate-800 space-y-8">
          {saved && (
            <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4" />
              <span>Organization settings updated successfully!</span>
            </div>
          )}

          <form onSubmit={handleSave} className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-base font-extrabold text-white tracking-tight flex items-center space-x-2">
                <Building className="w-4 h-4 text-blue-400" />
                <span>Organization Identity</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">Organization Name</label>
                  <input
                    type="text"
                    defaultValue="Acme Global Intelligence"
                    className="w-full bg-slate-950/80 border border-slate-800 focus:border-blue-500 rounded-xl p-3.5 text-sm text-white outline-none transition"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">Industry Sector</label>
                  <select defaultValue="Journalism & Media" className="w-full bg-slate-950/80 border border-slate-800 focus:border-blue-500 rounded-xl p-3.5 text-sm text-white outline-none transition">
                    <option>Journalism & Media</option>
                    <option>Government & Public Sector</option>
                    <option>Law Enforcement & Legal</option>
                    <option>Cybersecurity & Intel</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-900 space-y-4">
              <h2 className="text-base font-extrabold text-white tracking-tight flex items-center space-x-2">
                <Bell className="w-4 h-4 text-cyan-400" />
                <span>Automated Threat Notifications</span>
              </h2>

              <div className="space-y-3 text-xs text-slate-300">
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input type="checkbox" defaultChecked className="w-4 h-4 rounded bg-slate-900 border-slate-800 text-blue-500 focus:ring-0" />
                  <span>Receive instant email alerts when a deepfake video scan falls below 30% Trust Score</span>
                </label>

                <label className="flex items-center space-x-3 cursor-pointer">
                  <input type="checkbox" defaultChecked className="w-4 h-4 rounded bg-slate-900 border-slate-800 text-blue-500 focus:ring-0" />
                  <span>Trigger automated SOC Webhook POST payload on synthetic audio detection</span>
                </label>
              </div>
            </div>

            <button
              type="submit"
              className="px-8 py-3.5 rounded-full bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-400 text-white font-extrabold text-xs shadow-lg shadow-blue-500/20 hover:opacity-95 transition"
            >
              Save Organization Settings
            </button>
          </form>
        </div>

        {/* Footer Link */}
        <div className="text-center pt-8 border-t border-slate-900 text-xs text-slate-500">
          © 2026 TruthLens AI Inc. All rights reserved. • Building trust in digital media through AI-powered authenticity verification.
        </div>

      </div>
    </SpotlightBackground>
  );
}
