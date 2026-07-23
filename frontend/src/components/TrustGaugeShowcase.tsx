'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, CheckCircle2, AlertOctagon, Sparkles, Cpu, Layers } from 'lucide-react';

export const TrustGaugeShowcase: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="glass-card p-8 sm:p-12 rounded-3xl border border-blue-500/30 bg-gradient-to-b from-[#0c162d]/90 to-[#060b18]/95 backdrop-blur-2xl shadow-2xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <div className="inline-flex items-center space-x-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-xs text-blue-400 font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Deterministic Scoring Engine</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
                Multi-Factor <span className="bg-gradient-to-r from-blue-400 via-sky-400 to-cyan-300 bg-clip-text text-transparent">Trust Gauge</span>
              </h2>

              <p className="text-sm text-slate-400 leading-relaxed">
                The TrustLens rating evaluates spatial pixel density, EXIF camera tags, and deep vision neural logits to produce a unified score from 0 to 100.
              </p>

              <div className="space-y-4 pt-2">
                
                {/* Metric 1: Metadata Integrity */}
                <div className="space-y-1 text-xs">
                  <div className="flex justify-between font-semibold">
                    <span className="text-slate-300">EXIF Metadata Integrity</span>
                    <span className="font-mono text-emerald-400 font-bold">100%</span>
                  </div>
                  <div className="w-full h-2.5 bg-slate-900 rounded-full overflow-hidden border border-slate-800">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: 'easeOut' }}
                      className="h-full bg-emerald-400 rounded-full shadow-lg shadow-emerald-500/30"
                    />
                  </div>
                </div>

                {/* Metric 2: AI Detection */}
                <div className="space-y-1 text-xs">
                  <div className="flex justify-between font-semibold">
                    <span className="text-slate-300">AI Neural Detection</span>
                    <span className="font-mono text-blue-400 font-bold">92%</span>
                  </div>
                  <div className="w-full h-2.5 bg-slate-900 rounded-full overflow-hidden border border-slate-800">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: '92%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 0.2, ease: 'easeOut' }}
                      className="h-full bg-blue-500 rounded-full shadow-lg shadow-blue-500/30"
                    />
                  </div>
                </div>

                {/* Metric 3: Deepfake Risk */}
                <div className="space-y-1 text-xs">
                  <div className="flex justify-between font-semibold">
                    <span className="text-slate-300">Deepfake Risk Safety</span>
                    <span className="font-mono text-cyan-400 font-bold">88%</span>
                  </div>
                  <div className="w-full h-2.5 bg-slate-900 rounded-full overflow-hidden border border-slate-800">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: '88%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 0.4, ease: 'easeOut' }}
                      className="h-full bg-cyan-400 rounded-full shadow-lg shadow-cyan-500/30"
                    />
                  </div>
                </div>

                {/* Metric 4: Authenticity */}
                <div className="space-y-1 text-xs">
                  <div className="flex justify-between font-semibold">
                    <span className="text-slate-300">Hardware Authenticity Rating</span>
                    <span className="font-mono text-emerald-400 font-bold">95%</span>
                  </div>
                  <div className="w-full h-2.5 bg-slate-900 rounded-full overflow-hidden border border-slate-800">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: '95%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 0.6, ease: 'easeOut' }}
                      className="h-full bg-emerald-400 rounded-full shadow-lg shadow-emerald-500/30"
                    />
                  </div>
                </div>

              </div>
            </div>

            {/* Right Circular Score Display (87 / 100) */}
            <div className="lg:col-span-6 flex flex-col items-center justify-center space-y-6">
              
              <div className="relative w-56 h-56 flex items-center justify-center">
                
                {/* Outer Glow Ring */}
                <div className="absolute inset-0 rounded-full bg-blue-500/10 blur-2xl animate-pulse" />

                {/* Animated Radial SVG */}
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="#1e293b"
                    strokeWidth="7"
                    fill="transparent"
                  />
                  <motion.circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="url(#gradient-showcase)"
                    strokeWidth="7"
                    strokeDasharray="251"
                    initial={{ strokeDashoffset: 251 }}
                    whileInView={{ strokeDashoffset: 251 - (251 * 0.87) }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, ease: 'easeOut' }}
                    strokeLinecap="round"
                    fill="transparent"
                  />
                  <defs>
                    <linearGradient id="gradient-showcase" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="50%" stopColor="#06b6d4" />
                      <stop offset="100%" stopColor="#10b981" />
                    </linearGradient>
                  </defs>
                </svg>

                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                  <span className="text-6xl font-black font-mono text-white tracking-tight">87</span>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">/ 100 Trust Rating</span>
                </div>
              </div>

              <div className="text-center space-y-1">
                <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-extrabold rounded-full uppercase">
                  Grade A+ (Authentic Media)
                </span>
                <p className="text-xs text-slate-400 pt-1">Verified against 120,000+ benchmarked neural artifacts.</p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
