'use client';

import React from 'react';
import { ShieldCheck, Cpu, Database, Activity, Sparkles, LayoutDashboard } from 'lucide-react';

interface NavbarProps {
  activeTab: 'dashboard' | 'factcheck' | 'media' | 'history';
  setActiveTab: (tab: 'dashboard' | 'factcheck' | 'media' | 'history') => void;
  apiOnline: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab, apiOnline }) => {
  return (
    <header className="sticky top-0 z-50 w-full glass-card border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo & Name */}
        <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setActiveTab('dashboard')}>
          <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-sky-500 via-indigo-500 to-emerald-400 p-[1.5px] shadow-lg shadow-sky-500/20">
            <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
              <ShieldCheck className="w-6 h-6 text-sky-400" />
            </div>
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-xl font-extrabold tracking-tight text-white font-sans">
                TruthLens <span className="gradient-text-cyan">AI</span>
              </span>
              <span className="px-2 py-0.5 text-[10px] font-bold tracking-wider uppercase bg-sky-500/10 text-sky-400 border border-sky-500/20 rounded-full">
                Hackathon '26
              </span>
            </div>
            <p className="text-xs text-slate-400 font-medium hidden sm:block">Digital Trust & Forensic Verification Platform</p>
          </div>
        </div>

        {/* Navigation Tabs */}
        <nav className="flex items-center space-x-1 sm:space-x-2 bg-slate-900/90 p-1.5 rounded-xl border border-slate-800">
          <button
            onClick={() => setActiveTab('dashboard')}
            className={`flex items-center space-x-2 px-3.5 py-2 rounded-lg text-xs font-semibold transition-all ${
              activeTab === 'dashboard'
                ? 'bg-gradient-to-r from-sky-500 to-indigo-600 text-white shadow-md shadow-sky-500/20'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
          >
            <LayoutDashboard className="w-4 h-4" />
            <span>Dashboard</span>
          </button>

          <button
            onClick={() => setActiveTab('factcheck')}
            className={`flex items-center space-x-2 px-3.5 py-2 rounded-lg text-xs font-semibold transition-all ${
              activeTab === 'factcheck'
                ? 'bg-gradient-to-r from-sky-500 to-indigo-600 text-white shadow-md shadow-sky-500/20'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
          >
            <Cpu className="w-4 h-4" />
            <span>Claim Scanner</span>
          </button>

          <button
            onClick={() => setActiveTab('media')}
            className={`flex items-center space-x-2 px-3.5 py-2 rounded-lg text-xs font-semibold transition-all ${
              activeTab === 'media'
                ? 'bg-gradient-to-r from-sky-500 to-indigo-600 text-white shadow-md shadow-sky-500/20'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
          >
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <span>Image Upload</span>
          </button>

          <button
            onClick={() => setActiveTab('history')}
            className={`flex items-center space-x-2 px-3.5 py-2 rounded-lg text-xs font-semibold transition-all ${
              activeTab === 'history'
                ? 'bg-gradient-to-r from-sky-500 to-indigo-600 text-white shadow-md shadow-sky-500/20'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
          >
            <Database className="w-4 h-4" />
            <span>Supabase Log</span>
          </button>
        </nav>

        {/* Live Backend & Supabase Status Badge */}
        <div className="hidden lg:flex items-center space-x-3">
          <div className="flex items-center space-x-2 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs">
            <Activity className={`w-3.5 h-3.5 ${apiOnline ? 'text-emerald-400 animate-pulse' : 'text-amber-400'}`} />
            <span className="text-slate-300 font-medium">FastAPI Engine:</span>
            <span className={apiOnline ? 'text-emerald-400 font-bold' : 'text-amber-400 font-bold'}>
              {apiOnline ? 'Online (Port 8000)' : 'Connecting...'}
            </span>
          </div>
        </div>

      </div>
    </header>
  );
};
