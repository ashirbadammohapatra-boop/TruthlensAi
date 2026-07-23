'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Newspaper, Building2, Scale, ShieldAlert, Landmark, FileText, ArrowRight } from 'lucide-react';

export const EnterpriseSolutions: React.FC = () => {
  const solutions = [
    {
      icon: <Newspaper className="w-6 h-6 text-blue-400" />,
      title: 'Journalism & Media',
      subtitle: 'Newsroom Pre-Publication Verification',
      description: 'Verify UGC photos, breaking video clips, and viral social media claims before publication to maintain editorial integrity.'
    },
    {
      icon: <Building2 className="w-6 h-6 text-cyan-400" />,
      title: 'Government & Public Sector',
      subtitle: 'Election Monitoring & Statecraft Defense',
      description: 'Detect coordinated foreign disinformation, deepfake political campaigns, and state-sponsored synthetic media tampering.'
    },
    {
      icon: <Scale className="w-6 h-6 text-emerald-400" />,
      title: 'Law Enforcement & Legal',
      subtitle: 'Digital Evidence Chain of Custody',
      description: 'Produce courtroom-admissible digital forensic audit certificates validating metadata, ELA heatmaps, and image integrity.'
    },
    {
      icon: <ShieldAlert className="w-6 h-6 text-amber-400" />,
      title: 'Cybersecurity & Intel',
      subtitle: 'Synthetic Voice & Social Engineering Defense',
      description: 'Shield executive teams from synthetic voice clone vishing, deepfake video calls, and spear-phishing impersonations.'
    },
    {
      icon: <Landmark className="w-6 h-6 text-indigo-400" />,
      title: 'Financial Institutions',
      subtitle: 'KYC & Synthetic Identity Fraud Prevention',
      description: 'Scan identity document uploads, passport photos, and financial proof for generative fill and synthetic pixel alterations.'
    },
    {
      icon: <FileText className="w-6 h-6 text-sky-400" />,
      title: 'Insurance & Claims',
      subtitle: 'Property Damage Image Manipulation Scan',
      description: 'Detect digital photo editing in insurance claims, accident photos, and property loss imagery with ELA thermal maps.'
    }
  ];

  return (
    <section id="solutions" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-xs text-blue-400 font-bold uppercase tracking-wider">
            <span>Enterprise Solutions</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Tailored for High-Stakes <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Environments</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-400 font-medium">
            TruthLens AI provides specialized media authenticity workflows for industries where digital evidence cannot be compromised.
          </p>
        </div>

        {/* 6 Industry Solution Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((sol, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="p-8 rounded-3xl bg-slate-950/70 border border-slate-800/80 backdrop-blur-xl hover:border-blue-500/40 transition duration-300 shadow-xl flex flex-col justify-between group space-y-6"
            >
              <div className="space-y-4">
                <div className="p-3.5 bg-slate-900/90 rounded-2xl border border-slate-800 shrink-0 w-fit group-hover:border-blue-500/40 transition">
                  {sol.icon}
                </div>

                <div>
                  <span className="text-[11px] font-bold uppercase text-slate-500 tracking-wider">{sol.subtitle}</span>
                  <h3 className="text-xl font-extrabold text-white tracking-tight mt-0.5">{sol.title}</h3>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {sol.description}
                </p>
              </div>

              <div className="pt-2 border-t border-slate-900 flex items-center text-xs font-bold text-blue-400 group-hover:text-cyan-300 transition">
                <span>Explore Solution</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
