'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Image as ImageIcon, Video, Mic, CheckSquare, FileText, ShieldCheck, Brain, Globe, Sparkles } from 'lucide-react';

export const BentoGridFeatures: React.FC = () => {
  const features = [
    {
      id: 'image-verif',
      title: 'Image Verification',
      description: 'Error Level Analysis (ELA) thermal mapping identifies localized spatial pixel tampering and synthetic infilled regions.',
      icon: <ImageIcon className="w-6 h-6 text-blue-400" />,
      colSpan: 'lg:col-span-6'
    },
    {
      id: 'video-deepfake',
      title: 'Video Deepfake Detection',
      description: 'Temporal frame-by-frame spatial consistency scanning for face swapping and synthetic lip-sync manipulation.',
      icon: <Video className="w-6 h-6 text-cyan-400" />,
      colSpan: 'lg:col-span-6'
    },
    {
      id: 'audio-verif',
      title: 'Audio Verification',
      description: 'Spectral voice pitch frequency analysis detects synthetic voice cloning and acoustic pitch anomalies.',
      icon: <Mic className="w-6 h-6 text-emerald-400" />,
      colSpan: 'lg:col-span-4'
    },
    {
      id: 'fact-verif',
      title: 'Fact Verification',
      description: 'Cross-references news claims and headlines against verified global registries and publisher citations.',
      icon: <CheckSquare className="w-6 h-6 text-indigo-400" />,
      colSpan: 'lg:col-span-4'
    },
    {
      id: 'metadata-analysis',
      title: 'Metadata Analysis',
      description: 'Extracts hardware EXIF headers, camera model tags, creation timestamps, and software editing signatures.',
      icon: <FileText className="w-6 h-6 text-sky-400" />,
      colSpan: 'lg:col-span-4'
    },
    {
      id: 'trust-score',
      title: 'Trust Score',
      description: 'Unified 0 to 100 trust rating combining AI detection logits, metadata integrity, and image quality metrics.',
      icon: <ShieldCheck className="w-6 h-6 text-emerald-400" />,
      colSpan: 'lg:col-span-4'
    },
    {
      id: 'explainable-ai',
      title: 'Explainable AI',
      description: 'OpenAI Vision deep reasoning generates plain-language explanations detailing lighting, shadows, and reflections.',
      icon: <Brain className="w-6 h-6 text-blue-400" />,
      colSpan: 'lg:col-span-4'
    },
    {
      id: 'browser-extension',
      title: 'Browser Extension',
      description: 'Right-click any web image, video, or news post to perform instantaneous background trust scoring.',
      icon: <Globe className="w-6 h-6 text-cyan-400" />,
      colSpan: 'lg:col-span-4'
    }
  ];

  return (
    <section id="features" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-xs text-blue-400 font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Platform Capabilities</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Engineered for <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Digital Integrity</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-400 font-medium">
            Multi-modal verification suite built for newsrooms, enterprise security teams, and independent fact-checkers.
          </p>
        </div>

        {/* Bento Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {features.map((feature, idx) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{ y: -4, scale: 1.01 }}
              className={`${feature.colSpan} group relative p-8 rounded-3xl bg-slate-950/70 border border-slate-800/80 hover:border-blue-500/40 backdrop-blur-xl transition-all duration-300 shadow-xl overflow-hidden flex flex-col justify-between`}
            >
              <div className="space-y-4 relative z-10">
                <div className="p-3 bg-slate-900/90 w-fit rounded-2xl border border-slate-800 shadow-inner group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-extrabold text-white tracking-tight group-hover:text-blue-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed font-normal">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
