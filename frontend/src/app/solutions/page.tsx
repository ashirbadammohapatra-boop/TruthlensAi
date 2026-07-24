'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { SpotlightBackground } from '@/components/ui/SpotlightBackground';
import { FloatingNavbar } from '@/components/FloatingNavbar';
import { Newspaper, Building2, Scale, Shield, Landmark, FileCheck, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function SolutionsOverviewPage() {
  const solutions = [
    {
      id: 'journalism',
      href: '/solutions/journalism',
      title: 'Journalism & Media',
      subtitle: 'Newsroom Media Verification',
      desc: 'Sub-15ms automated verification pipeline for breaking news image validation, viral video deepfake scanning, and newsroom wire authentication.',
      icon: <Newspaper className="w-6 h-6 text-blue-400" />,
      tag: 'Newsrooms & Publishers',
      metrics: 'Sub-15ms Wire SLA'
    },
    {
      id: 'government',
      href: '/solutions/government',
      title: 'Government & Public Sector',
      subtitle: 'Sovereign Threat Defense',
      desc: 'Air-gapped verification deployment for election integrity, misinformation monitoring, and national security threat interception.',
      icon: <Building2 className="w-6 h-6 text-cyan-400" />,
      tag: 'Elections & Public Sector',
      metrics: 'Air-Gapped Ready'
    },
    {
      id: 'legal',
      href: '/solutions/legal',
      title: 'Law Enforcement & Legal',
      subtitle: 'Courtroom Evidence Chain of Custody',
      desc: 'Generate SHA-256 binary hash-locked evidence dossiers for judicial proceedings, criminal investigations, and legal discovery.',
      icon: <Scale className="w-6 h-6 text-indigo-400" />,
      tag: 'Legal Discovery & Law',
      metrics: 'SHA-256 Certified'
    },
    {
      id: 'cybersecurity',
      href: '/solutions/cybersecurity',
      title: 'Cybersecurity & Intelligence',
      subtitle: 'SOC Deepfake Phishing Sentinel',
      desc: 'Real-time API & Webhook integration for enterprise SOC pipelines to intercept deepfake video calls and synthetic voice clones.',
      icon: <Shield className="w-6 h-6 text-emerald-400" />,
      tag: 'SOC & Cyber Intel',
      metrics: 'Real-Time Webhooks'
    },
    {
      id: 'finance',
      href: '/solutions/finance',
      title: 'Financial Institutions',
      subtitle: 'KYC & Document Validation',
      desc: 'Automated verification of passports, bank statements, loan documents, and KYC identity media to prevent synthetic identity onboarding.',
      icon: <Landmark className="w-6 h-6 text-amber-400" />,
      tag: 'Banking & Fintech',
      metrics: '99.4% KYC Accuracy'
    },
    {
      id: 'insurance',
      href: '/solutions/insurance',
      title: 'Insurance & Claims',
      subtitle: 'Claims Fraud Interception',
      desc: 'Error Level Analysis (ELA) and duplicate spatial patch detection to identify digitally altered property damage and vehicle accident photos.',
      icon: <FileCheck className="w-6 h-6 text-purple-400" />,
      tag: 'Insurance Claims',
      metrics: 'Zero False Positives'
    }
  ];

  return (
    <SpotlightBackground>
      {/* Navbar */}
      <FloatingNavbar activeTab="media" setActiveTab={() => {}} />

      <div className="min-h-screen pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
        
        {/* Page Header */}
        <div className="space-y-4 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full text-xs text-blue-400 font-bold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-cyan-400" />
            <span>Enterprise Sector Architecture</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight">
            Industry-Tailored <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-cyan-400 bg-clip-text text-transparent">Verification Engines</span>
          </h1>

          <p className="text-sm sm:text-base text-slate-400 font-medium">
            TruthLens AI delivers domain-specific verification pipelines customized for newsrooms, sovereign defense, courtroom discovery, SOC threat monitoring, and financial compliance.
          </p>
        </div>

        {/* 6 Industry Solution Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="p-8 rounded-3xl bg-slate-950/80 border border-slate-800/80 backdrop-blur-2xl space-y-6 hover:border-blue-500/40 transition flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3 bg-slate-900 rounded-2xl border border-slate-800">
                    {item.icon}
                  </div>
                  <span className="text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-md bg-slate-900 text-slate-400 border border-slate-800">
                    {item.metrics}
                  </span>
                </div>

                <div className="space-y-1">
                  <span className="text-xs font-bold uppercase text-cyan-400 tracking-wider">{item.subtitle}</span>
                  <h2 className="text-xl font-black text-white tracking-tight group-hover:text-blue-400 transition">{item.title}</h2>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
              </div>

              <Link
                href={item.href}
                className="w-full py-3 px-4 rounded-2xl bg-slate-900 hover:bg-blue-600 text-slate-200 hover:text-white font-extrabold text-xs border border-slate-800 hover:border-blue-500 transition flex items-center justify-between group/btn"
              >
                <span>Explore Solution</span>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover/btn:text-white group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Footer Link */}
        <div className="text-center pt-8 border-t border-slate-900 text-xs text-slate-500">
          © 2026 TruthLens AI Inc. All rights reserved. • Building trust in digital media through AI-powered authenticity verification.
        </div>

      </div>
    </SpotlightBackground>
  );
}
