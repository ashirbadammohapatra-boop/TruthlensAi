'use client';

import React from 'react';
import Link from 'next/link';
import { SpotlightBackground } from '@/components/ui/SpotlightBackground';
import { ShieldCheck, ArrowLeft, Image as ImageIcon, Video, Mic, FileText, Globe, Cpu, CheckCircle2, Sparkles } from 'lucide-react';

export default function FeaturesPage() {
  const featureCategories = [
    {
      title: 'Image Verification Suite',
      icon: <ImageIcon className="w-6 h-6 text-blue-400" />,
      items: [
        'AI-Generated Image Detection (Neural ensemble classification)',
        'Metadata & EXIF Hardware Camera Header Extraction',
        'Error Level Analysis (ELA) Spatial Thermal Heatmaps',
        'High-Frequency Noise Residual Variance Tracking',
        'Corneal Eye Reflection Specular Catchlight Symmetry',
        'Anatomical Skin Pore Grain & Neural Blur Analysis',
        'Unified 0 to 100 Multi-Factor Trust Score Rating'
      ]
    },
    {
      title: 'Video Deepfake & Temporal Scanner',
      icon: <Video className="w-6 h-6 text-cyan-400" />,
      items: [
        'Frame-by-Frame Keyframe Spatial Consistency Scanning',
        'Face Swap Edge Boundary Blur Detection',
        'Lip Sync Acoustic Phoneme & Mouth Alignment Audit',
        'Temporal Frame Flicker & Motion Vector Anomalies',
        'GAN & Diffusion Video Generation Artifact Detection',
        'Background Pixel Manipulation & Scene Change Analysis'
      ]
    },
    {
      title: 'Synthetic Audio & Voice Clone Engine',
      icon: <Mic className="w-6 h-6 text-emerald-400" />,
      items: [
        'Synthetic Voice Clone Detection (ElevenLabs, Bark, VALL-E)',
        'Spectrogram Formant & Pitch Frequency Continuity',
        'Sub-Millisecond Ambient Room Tone Splice Detection',
        'Voice Naturalness & Vocal Tract Resonance Index',
        'Voice Notes & Audio File Verification (MP3, WAV, AAC, M4A, FLAC)'
      ]
    },
    {
      title: 'Document & URL Web Verification',
      icon: <Globe className="w-6 h-6 text-amber-400" />,
      items: [
        'PDF & DOCX Embedded Image Object Extraction',
        'Document Author Tags & Modification Timestamps',
        'Web & Social Media Link Scraper (YouTube, X / Twitter, News URLs)',
        'Publisher Domain SSL & SSL Header Verification',
        '1-Click Executive PDF Audit Certificate Generation'
      ]
    }
  ];

  return (
    <SpotlightBackground>
      <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-12">
        
        {/* Back Navigation Link */}
        <Link
          href="/"
          className="inline-flex items-center space-x-2 text-xs font-semibold text-slate-400 hover:text-white transition group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to TruthLens AI Home</span>
        </Link>

        {/* Header Banner */}
        <div className="space-y-4 border-b border-slate-800/80 pb-8 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full text-xs text-blue-400 font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span>Platform Capabilities</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight">
            Enterprise Feature <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-cyan-400 bg-clip-text text-transparent">Matrix</span>
          </h1>

          <p className="text-sm text-slate-400 font-medium">
            Explore the multi-spectral forensics, multi-model AI ensembles, and document tools powering TruthLens AI.
          </p>
        </div>

        {/* 4 Feature Suite Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featureCategories.map((cat, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-slate-950/80 border border-slate-800/80 backdrop-blur-2xl space-y-6 shadow-2xl hover:border-blue-500/40 transition"
            >
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-slate-900 rounded-2xl border border-slate-800 shrink-0">
                  {cat.icon}
                </div>
                <h2 className="text-xl font-extrabold text-white tracking-tight">{cat.title}</h2>
              </div>

              <div className="space-y-3 pt-2 text-xs text-slate-300 font-medium">
                {cat.items.map((item, itemIdx) => (
                  <div key={itemIdx} className="flex items-start space-x-3">
                    <div className="p-1 rounded-full bg-blue-500/20 text-blue-400 shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <span className="leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <div className="pt-8 text-center border-t border-slate-900">
          <Link
            href="/#scanner"
            className="inline-flex items-center space-x-3 px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-400 hover:opacity-95 text-white font-extrabold text-xs shadow-xl shadow-blue-500/25 border border-blue-400/30 transition"
          >
            <span>Launch Live Verification Scanner</span>
          </Link>
        </div>

      </div>
    </SpotlightBackground>
  );
}
