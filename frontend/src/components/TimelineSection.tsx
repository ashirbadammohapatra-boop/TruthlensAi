'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { UploadCloud, Cpu, ShieldCheck, Download } from 'lucide-react';

export const TimelineSection: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Upload Media',
      description: 'Drag and drop any JPG, PNG, or WEBP image, or paste a text claim headline directly into the verification scanner.',
      icon: <UploadCloud className="w-5 h-5 text-blue-400" />
    },
    {
      num: '02',
      title: 'AI + Forensics Analysis',
      description: 'Runs deep vision neural classification models, Error Level Analysis (ELA) thermal heatmaps, and EXIF metadata extraction.',
      icon: <Cpu className="w-5 h-5 text-cyan-400" />
    },
    {
      num: '03',
      title: 'Verification',
      description: 'OpenAI Vision generates deep visual reasoning explanations detailing lighting, shadow falloff, and corneal reflections.',
      icon: <ShieldCheck className="w-5 h-5 text-emerald-400" />
    },
    {
      num: '04',
      title: 'Download Report',
      description: 'Export an official, printable Executive Audit Certificate PDF with actionable newsroom recommendations.',
      icon: <Download className="w-5 h-5 text-sky-400" />
    }
  ];

  return (
    <section id="timeline" className="py-24 relative overflow-hidden bg-slate-950/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-xs text-blue-400 font-bold uppercase tracking-wider">
            <span>Simple Workflow</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            How <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">TruthLens AI</span> Works
          </h2>

          <p className="text-sm sm:text-base text-slate-400 font-medium">
            From raw media upload to certified forensic PDF audit report in seconds.
          </p>
        </div>

        {/* Timeline Pipeline */}
        <div className="relative">
          
          <div className="hidden md:block absolute left-1/2 top-8 bottom-8 w-0.5 bg-gradient-to-b from-blue-500 via-cyan-400 to-emerald-500 -translate-x-1/2 opacity-30" />

          <div className="space-y-12 relative z-10">
            {steps.map((step, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`flex flex-col md:flex-row items-center justify-between gap-8 ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Step Card Content */}
                  <div className="w-full md:w-5/12">
                    <div className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800/80 backdrop-blur-xl space-y-3 shadow-xl hover:border-blue-500/40 transition duration-300">
                      <span className="text-2xl font-black font-mono text-blue-400">{step.num}</span>
                      <h3 className="text-lg font-extrabold text-white tracking-tight">{step.title}</h3>
                      <p className="text-xs text-slate-400 leading-relaxed">{step.description}</p>
                    </div>
                  </div>

                  {/* Center Node Badge */}
                  <div className="w-12 h-12 rounded-2xl bg-[#030712] border-2 border-blue-500/50 flex items-center justify-center shadow-xl shadow-blue-500/20 shrink-0 z-20">
                    {step.icon}
                  </div>

                  {/* Spacer Column */}
                  <div className="hidden md:block w-5/12" />
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
