'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, ArrowRight, Lock, Cpu, Server, FileCheck, Building } from 'lucide-react';

interface HeroSectionProps {
  onStartVerification: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onStartVerification }) => {
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const trustIndicators = [
    { icon: <ShieldCheck className="w-3.5 h-3.5 text-blue-400 shrink-0" />, label: 'Evidence-Based Analysis' },
    { icon: <Lock className="w-3.5 h-3.5 text-cyan-400 shrink-0" />, label: 'Privacy First' },
    { icon: <Cpu className="w-3.5 h-3.5 text-emerald-400 shrink-0" />, label: 'Explainable AI' },
    { icon: <Server className="w-3.5 h-3.5 text-amber-400 shrink-0" />, label: 'Enterprise Security' },
    { icon: <FileCheck className="w-3.5 h-3.5 text-sky-400 shrink-0" />, label: 'API Ready' },
  ];

  return (
    <section id="hero" className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 md:pt-40 md:pb-32 overflow-hidden">
      
      {/* Subtle Background Lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] md:w-[700px] h-[200px] sm:h-[350px] bg-gradient-to-tr from-blue-600/15 via-cyan-500/10 to-indigo-600/15 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10 sm:space-y-12">
        
        {/* Main Hero Header */}
        <div className="text-center space-y-5 sm:space-y-6 max-w-4xl mx-auto">
          
          {/* Position Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-blue-500/30 text-xs font-bold text-slate-300 shadow-xl backdrop-blur-md max-w-full"
          >
            <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse shrink-0" />
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent uppercase tracking-wider font-extrabold text-[10px] sm:text-[11px] truncate">
              The Trust Layer for Digital Media
            </span>
          </motion.div>

          {/* Series A Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl xs:text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tight leading-[1.1]"
          >
            Verify Digital Media Before It Becomes <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-cyan-400 bg-clip-text text-transparent">Misinformation.</span>
          </motion.h1>

          {/* Enterprise Copy */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base md:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed font-medium px-2"
          >
            AI-powered authenticity verification for images, videos, audio, and online content. Trusted by organizations that require confidence in digital evidence.
          </motion.p>

          {/* Primary Action CTAs - Responsive Stacking */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-2"
          >
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={onStartVerification}
              className="w-full sm:w-auto px-8 py-4 rounded-xl sm:rounded-full bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-400 hover:opacity-95 text-white font-extrabold text-xs flex items-center justify-center space-x-3 shadow-xl shadow-blue-500/25 border border-blue-400/30 transition group min-h-[48px] touch-target"
            >
              <span>Start Verification</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={scrollToContact}
              className="w-full sm:w-auto px-7 py-4 rounded-xl sm:rounded-full bg-slate-900/90 hover:bg-slate-800 text-slate-200 font-extrabold text-xs flex items-center justify-center space-x-2 border border-slate-800 backdrop-blur-md transition shadow-lg min-h-[48px] touch-target"
            >
              <Building className="w-4 h-4 text-slate-400" />
              <span>Book Enterprise Demo</span>
            </motion.button>
          </motion.div>

        </div>

        {/* Trust Indicators Horizontal Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="pt-6 border-t border-slate-900/80 flex flex-wrap items-center justify-center gap-2 sm:gap-6 text-[11px] font-semibold text-slate-400"
        >
          {trustIndicators.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-slate-950/60 border border-slate-800/80 shrink-0"
            >
              {item.icon}
              <span className="text-slate-300">{item.label}</span>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};
