'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { UploadCloud, ShieldCheck, Cpu, Search, Scale, FileCheck } from 'lucide-react';

export const EnterpriseWorkflowSection: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Media Upload',
      icon: <UploadCloud className="w-5 h-5 text-blue-400 shrink-0" />,
      desc: 'Upload image, video, audio, or document asset'
    },
    {
      num: '02',
      title: 'Secure Processing',
      icon: <ShieldCheck className="w-5 h-5 text-cyan-400 shrink-0" />,
      desc: 'TLS 1.3 transit & magic byte signature check'
    },
    {
      num: '03',
      title: 'AI + Forensics',
      icon: <Cpu className="w-5 h-5 text-emerald-400 shrink-0" />,
      desc: 'ELA thermal mapping, FFT 2D spectrum, & EXIF extraction'
    },
    {
      num: '04',
      title: 'Evidence Analysis',
      icon: <Search className="w-5 h-5 text-amber-400 shrink-0" />,
      desc: 'Corneal reflection symmetry & neural logits'
    },
    {
      num: '05',
      title: 'Decision Engine',
      icon: <Scale className="w-5 h-5 text-indigo-400 shrink-0" />,
      desc: 'Reliability-weighted evidence fusion'
    },
    {
      num: '06',
      title: 'Executive Report',
      icon: <FileCheck className="w-5 h-5 text-sky-400 shrink-0" />,
      desc: 'Download certified forensic audit PDF'
    }
  ];

  return (
    <section id="workflow" className="py-16 sm:py-24 relative overflow-hidden border-t border-b border-slate-900 bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-3 sm:space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-xs text-blue-400 font-bold uppercase tracking-wider">
            <span>System Pipeline Workflow</span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
            How Media Moves Through <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Verification</span>
          </h2>

          <p className="text-xs sm:text-sm md:text-base text-slate-400 font-medium">
            From raw binary upload to certified forensic PDF audit report in milliseconds.
          </p>
        </div>

        {/* 6 Step Visual Pipeline Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-slate-950/80 border border-slate-800/80 backdrop-blur-xl space-y-3 relative hover:border-blue-500/40 transition group"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-black text-slate-500">{step.num}</span>
                <div className="p-2 sm:p-2.5 bg-slate-900 rounded-xl border border-slate-800 shrink-0">
                  {step.icon}
                </div>
              </div>

              <div>
                <h3 className="text-xs sm:text-sm font-extrabold text-white tracking-tight">{step.title}</h3>
                <p className="text-[11px] text-slate-400 mt-1 leading-normal">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
