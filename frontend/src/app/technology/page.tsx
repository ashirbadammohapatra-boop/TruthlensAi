'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { SpotlightBackground } from '@/components/ui/SpotlightBackground';
import { FloatingNavbar } from '@/components/FloatingNavbar';
import { Cpu, ShieldCheck, Search, Database, Lock, Scale, Sparkles, CheckCircle2, ArrowRight, Activity, Terminal } from 'lucide-react';

export default function TechnologyPage() {
  const pipelineSteps = [
    {
      step: '01',
      title: 'Magic Byte Signature & Ingestion',
      icon: <Lock className="w-6 h-6 text-blue-400" />,
      desc: 'Raw binary stream magic header verification to block malicious payload execution and MIME spoofing.'
    },
    {
      step: '02',
      title: 'SHA-256 Hash Fingerprinting',
      icon: <Database className="w-6 h-6 text-cyan-400" />,
      desc: 'Cryptographic hash calculation (SHA-256, MD5, Perceptual Hash) for immutable chain of custody audit logging.'
    },
    {
      step: '03',
      title: 'Multi-Spectral Forensics (ELA & FFT)',
      icon: <Search className="w-6 h-6 text-emerald-400" />,
      desc: 'Error Level Analysis (ELA) thermal heatmaps and Fast Fourier Transform (FFT) 2D frequency spectrum anomaly extraction.'
    },
    {
      step: '04',
      title: 'Neural Vision Model Ensemble',
      icon: <Cpu className="w-6 h-6 text-amber-400" />,
      desc: 'Parallel execution across ResNet50-V2, EfficientNet-B4, Vision Transformer (ViT-H/14), and Hugging Face deep detectors.'
    },
    {
      step: '05',
      title: 'OpenAI Visual Reasoning (XAI)',
      icon: <Sparkles className="w-6 h-6 text-indigo-400" />,
      desc: 'Qualitative visual reasoning evaluating lighting vectors, corneal catchlight symmetry, and physical geometry.'
    },
    {
      step: '06',
      title: 'Reliability-Weighted Evidence Fusion',
      icon: <Scale className="w-6 h-6 text-sky-400" />,
      desc: 'Bayesian evidence fusion engine aggregating logit distributions into a unified Trust Score with 95% confidence bounds.'
    }
  ];

  const models = [
    { name: 'ResNet50-V2 Spatial Deepfake Detector', purpose: 'Artifact & Compression Boundary Scan', weight: '25%' },
    { name: 'EfficientNet-B4 GAN Generator Classifier', purpose: 'StyleGAN, Midjourney, SDXL Pixel Scan', weight: '25%' },
    { name: 'Vision Transformer (ViT-H/14) Patch Analyzer', purpose: 'High-Frequency Spatial Texture Audit', weight: '25%' },
    { name: 'Hugging Face Ensemble Model Gateway', purpose: 'Independent Multi-Spectral Classification', weight: '15%' },
    { name: 'OpenAI GPT-4o Visual Reasoning Engine', purpose: 'Qualitative Physics & Lighting Geometry', weight: '10%' }
  ];

  return (
    <SpotlightBackground>
      {/* Navbar */}
      <FloatingNavbar activeTab="media" setActiveTab={() => {}} />

      <div className="min-h-screen pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
        
        {/* Page Header */}
        <div className="space-y-4 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full text-xs text-blue-400 font-bold uppercase tracking-wider">
            <Cpu className="w-4 h-4 text-cyan-400" />
            <span>Architecture & AI Engine</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight">
            Inside the TruthLens <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-cyan-400 bg-clip-text text-transparent">Verification Engine</span>
          </h1>

          <p className="text-sm sm:text-base text-slate-400 font-medium">
            Multi-spectral digital forensics, vision neural model ensembles, and Bayesian evidence fusion architecture.
          </p>
        </div>

        {/* 6-Step Pipeline Grid */}
        <div className="space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-extrabold text-white tracking-tight">1. The Verification Pipeline Workflow</h2>
            <p className="text-xs text-slate-400">Sequential multi-stage analysis executed in parallel under 15ms latency.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pipelineSteps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="p-8 rounded-3xl bg-slate-950/80 border border-slate-800/80 backdrop-blur-2xl space-y-4 hover:border-blue-500/40 transition group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-black text-slate-500">{step.step}</span>
                  <div className="p-3 bg-slate-900 rounded-2xl border border-slate-800 shrink-0">
                    {step.icon}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-extrabold text-white tracking-tight group-hover:text-blue-400 transition">{step.title}</h3>
                  <p className="text-xs text-slate-400 mt-2 leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Model Ensemble Registry Table */}
        <div className="glass-card p-8 sm:p-10 rounded-3xl border border-slate-800 space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
            <div>
              <span className="text-[10px] font-extrabold uppercase px-2.5 py-1 bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 rounded-md">
                MLOps Model Registry v5.0.0
              </span>
              <h2 className="text-2xl font-extrabold text-white mt-2">Ensemble Model Weights & Responsibilities</h2>
            </div>
            <span className="text-xs text-slate-400 font-mono font-bold bg-slate-900 px-3 py-1.5 rounded-xl border border-slate-800">
              P95 Latency: 42.5ms
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-slate-800 text-slate-400 uppercase tracking-wider text-[11px]">
                  <th className="py-3.5 px-4 font-bold">Model Engine</th>
                  <th className="py-3.5 px-4 font-bold">Primary Detection Focus</th>
                  <th className="py-3.5 px-4 font-bold text-right">Ensemble Weight</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/80 text-slate-300">
                {models.map((m, idx) => (
                  <tr key={idx} className="hover:bg-slate-900/50 transition">
                    <td className="py-4 px-4 font-bold text-white flex items-center space-x-2">
                      <Activity className="w-4 h-4 text-blue-400 shrink-0" />
                      <span>{m.name}</span>
                    </td>
                    <td className="py-4 px-4 text-slate-400">{m.purpose}</td>
                    <td className="py-4 px-4 font-mono font-bold text-cyan-400 text-right">{m.weight}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="glass-card p-8 sm:p-12 rounded-3xl border border-slate-800 text-center space-y-6 bg-slate-950/80">
          <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mx-auto">
            <Terminal className="w-6 h-6" />
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">Test the Technology Live</h2>
          <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto">
            Upload any image, deepfake video, or audio clip into our live workspace to experience the multi-spectral verification engine in action.
          </p>
          <Link
            href="/verify"
            className="inline-flex items-center space-x-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-400 text-white font-extrabold text-xs shadow-lg shadow-blue-500/20 hover:opacity-95 transition"
          >
            <span>Launch Live Scanner Workspace</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Footer Link */}
        <div className="text-center pt-8 border-t border-slate-900 text-xs text-slate-500">
          © 2026 TruthLens AI Inc. All rights reserved. • Building trust in digital media through AI-powered authenticity verification.
        </div>

      </div>
    </SpotlightBackground>
  );
}
