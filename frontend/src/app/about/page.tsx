'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { SpotlightBackground } from '@/components/ui/SpotlightBackground';
import { FloatingNavbar } from '@/components/FloatingNavbar';
import { ShieldCheck, Target, Eye, Compass, Cpu, CheckCircle2, ArrowRight, Globe } from 'lucide-react';

export default function AboutPage() {
  const roadmap = [
    { quarter: 'Q1 2026', title: 'MLOps Model Registry v5.0', desc: 'Centralized model reliability weighting and automated latency distribution tracer.' },
    { quarter: 'Q2 2026', title: 'Autonomous SRE & Security Agent', desc: 'Self-healing platform telemetry, security sentinel, and high-risk plan approval workflow.' },
    { quarter: 'Q3 2026', title: 'Multimodal Deepfake Video Pipeline', desc: 'Temporal frame-by-frame deepfake scanning and audio lip-sync consistency checking.' },
    { quarter: 'Q4 2026', title: 'Air-Gapped Enterprise Appliance', desc: 'Zero-cloud local hardware appliance for classified defense and sovereign government deployments.' }
  ];

  return (
    <SpotlightBackground>
      {/* Navbar */}
      <FloatingNavbar activeTab="media" setActiveTab={() => {}} />

      <div className="min-h-screen pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
        
        {/* Page Header */}
        <div className="space-y-4 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full text-xs text-blue-400 font-bold uppercase tracking-wider">
            <Compass className="w-4 h-4 text-cyan-400" />
            <span>Company & Mission</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight">
            Building the <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-cyan-400 bg-clip-text text-transparent">Trust Layer for Digital Media</span>
          </h1>

          <p className="text-sm sm:text-base text-slate-400 font-medium">
            TruthLens AI was founded to solve a critical global challenge: verifying digital truth in an era of generative AI proliferation.
          </p>
        </div>

        {/* Mission & Vision Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-slate-950/80 border border-slate-800/80 backdrop-blur-2xl space-y-4 hover:border-blue-500/40 transition"
          >
            <div className="p-3 bg-blue-500/10 rounded-2xl border border-blue-500/20 text-blue-400 shrink-0 w-fit">
              <Target className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-black text-white tracking-tight">Our Mission</h2>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              To empower journalists, legal authorities, enterprise cybersecurity teams, and government agencies with mathematical, evidence-based tools that separate authentic human creation from synthetic manipulation.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-8 rounded-3xl bg-slate-950/80 border border-slate-800/80 backdrop-blur-2xl space-y-4 hover:border-cyan-500/40 transition"
          >
            <div className="p-3 bg-cyan-500/10 rounded-2xl border border-cyan-500/20 text-cyan-400 shrink-0 w-fit">
              <Eye className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-black text-white tracking-tight">Our Vision</h2>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              A digital ecosystem where every photo, video, and audio clip carries a transparent, verifiable chain of custody, restoring trust in public information and protecting society from automated disinformation.
            </p>
          </motion.div>
        </div>

        {/* Product Roadmap Timeline */}
        <div className="glass-card p-8 sm:p-12 rounded-3xl border border-slate-800 space-y-8">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <span className="text-xs font-extrabold uppercase text-cyan-400 tracking-wider">Engineering Milestones</span>
            <h2 className="text-3xl font-black text-white tracking-tight">Platform Innovation Roadmap</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {roadmap.map((item, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800/80 space-y-3 relative">
                <span className="text-xs font-mono font-black text-cyan-400 bg-cyan-500/10 px-2.5 py-1 rounded-md border border-cyan-500/20">
                  {item.quarter}
                </span>
                <h3 className="text-base font-extrabold text-white tracking-tight mt-2">{item.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="glass-card p-8 sm:p-12 rounded-3xl border border-slate-800 text-center space-y-6 bg-slate-950/80">
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">Join Us in Restoring Digital Trust</h2>
          <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto">
            Partner with TruthLens AI to secure your digital media workflow or evaluate our enterprise authentication platform.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-3.5 rounded-full bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-400 text-white font-extrabold text-xs shadow-lg shadow-blue-500/20 hover:opacity-95 transition"
            >
              Contact Enterprise Sales
            </Link>
            <Link
              href="/verify"
              className="px-7 py-3.5 rounded-full bg-slate-900 hover:bg-slate-800 text-slate-200 font-extrabold text-xs border border-slate-800 transition"
            >
              Try Live Verification
            </Link>
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
