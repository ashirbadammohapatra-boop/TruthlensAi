'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { SpotlightBackground } from '@/components/ui/SpotlightBackground';
import { FloatingNavbar } from '@/components/FloatingNavbar';
import { Newspaper, Building2, Scale, ShieldAlert, Landmark, FileText, ArrowRight, ArrowLeft, GraduationCap, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function SolutionsPage() {
  const industries = [
    {
      id: 'journalism',
      icon: <Newspaper className="w-8 h-8 text-blue-400" />,
      title: 'Journalism & Newsrooms',
      subtitle: 'Pre-Publication Asset Verification',
      badge: 'Media & Publishing',
      desc: 'Verify user-generated images, breaking video clips, and viral social media posts before publication. Protect newsroom reputation from deepfake hoaxes.',
      metrics: ['99.4% Deepfake Accuracy', '< 15ms Scan Latency', 'Automated EXIF Audit'],
      features: [
        'Real-time UGC photo & video verification',
        'Breaking news social media link scraper',
        'Downloadable certified editorial audit reports',
        'Integration with CMS and newsroom workflows'
      ]
    },
    {
      id: 'government',
      icon: <Building2 className="w-8 h-8 text-cyan-400" />,
      title: 'Government & Public Sector',
      subtitle: 'Election Monitoring & Statecraft Defense',
      badge: 'National Security',
      desc: 'Detect state-sponsored disinformation campaigns, synthetic political speeches, and deepfake propaganda targeting public stability.',
      metrics: ['Multi-Spectral Forensics', 'Foreign Disinfo Sentinel', 'Air-Gapped Cloud Support'],
      features: [
        'State-sponsored deepfake speech detection',
        'Election campaign media monitor',
        'Cross-platform viral audio clone tracker',
        'Secure multi-tenant agency workspaces'
      ]
    },
    {
      id: 'legal',
      icon: <Scale className="w-8 h-8 text-emerald-400" />,
      title: 'Law Enforcement & Legal',
      subtitle: 'Digital Evidence Chain of Custody',
      badge: 'Forensics & Judiciary',
      desc: 'Produce courtroom-admissible digital forensic audit certificates validating image metadata, ELA heatmaps, SHA-256 hashes, and structural integrity.',
      metrics: ['SHA-256 Hash Lock', 'Court-Admissible PDF', 'ELA Thermal Heatmaps'],
      features: [
        'SHA-256 digital fingerprinting & timestamping',
        'Error Level Analysis (ELA) thermal heatmaps',
        'Corneal reflection & lighting geometry validation',
        'Exportable forensic PDF evidence dossiers'
      ]
    },
    {
      id: 'cybersecurity',
      icon: <ShieldAlert className="w-8 h-8 text-amber-400" />,
      title: 'Cybersecurity & Intel',
      subtitle: 'Synthetic Voice Vishing & Executive Defense',
      badge: 'Enterprise Security',
      desc: 'Shield executive leadership and finance teams from synthetic voice cloning, deepfake video calls, and spear-phishing impersonation attacks.',
      metrics: ['Audio Pitch Continuity', 'Real-Time Voice Scan', 'REST API Integration'],
      features: [
        'Synthetic voice clone frequency analysis',
        'Deepfake video conference stream auditing',
        'Automated SOC alert triggers via Webhooks',
        'Zero-Trust media verification gateway'
      ]
    },
    {
      id: 'finance',
      icon: <Landmark className="w-8 h-8 text-indigo-400" />,
      title: 'Financial Institutions & KYC',
      subtitle: 'Synthetic Identity & Document Tampering Defense',
      badge: 'Fintech & Banking',
      desc: 'Scan identity document uploads, passport photos, and financial proof for generative AI fill and synthetic pixel alterations during onboarding.',
      metrics: ['Passports & IDs', 'Generative Fill Scan', 'KYC Compliance'],
      features: [
        'ID document & passport forgery detection',
        'Generative fill & face swap identification',
        'High-throughput API for digital onboarding',
        'SOC2 Type II & GDPR compliant data isolation'
      ]
    },
    {
      id: 'insurance',
      icon: <FileText className="w-8 h-8 text-sky-400" />,
      title: 'Insurance & Claims',
      subtitle: 'Property Damage Fraud Prevention',
      badge: 'Insurance Tech',
      desc: 'Detect digital image editing in insurance claims, accident photos, and property loss imagery using Error Level Analysis and sensor noise modeling.',
      metrics: ['35% Fraud Reduction', 'Automated ELA Scan', 'Instant Claim Rating'],
      features: [
        'Automated claim photo manipulation scoring',
        'Metadata timestamp & GPS location verification',
        'Batch claim document & image processing',
        'Claim examiner decision-support dashboard'
      ]
    },
    {
      id: 'education',
      icon: <GraduationCap className="w-8 h-8 text-purple-400" />,
      title: 'Education & Research',
      subtitle: 'Academic Research Integrity',
      badge: 'Academia & Research',
      desc: 'Verify scientific image data, research paper figures, and academic journal submissions for AI generation and image manipulation.',
      metrics: ['Journal Standard', 'Figure Tamper Check', 'Batch Audit'],
      features: [
        'Scientific paper figure manipulation detection',
        'Academic publication integrity verification',
        'Institutional licensing & bulk student access',
        'Research dataset authenticity auditing'
      ]
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
            <Building2 className="w-4 h-4 text-cyan-400" />
            <span>Industry Solutions</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight">
            Tailored for <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-cyan-400 bg-clip-text text-transparent">High-Stakes Environments</span>
          </h1>

          <p className="text-sm sm:text-base text-slate-400 font-medium">
            TruthLens AI provides specialized media authenticity workflows for industries where digital evidence cannot be compromised.
          </p>
        </div>

        {/* Industry Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((ind, idx) => (
            <motion.div
              key={ind.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="p-8 rounded-3xl bg-slate-950/80 border border-slate-800/80 backdrop-blur-2xl flex flex-col justify-between space-y-6 hover:border-blue-500/40 transition group shadow-xl"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3 bg-slate-900 rounded-2xl border border-slate-800 shrink-0">
                    {ind.icon}
                  </div>
                  <span className="text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full bg-slate-900 text-slate-400 border border-slate-800">
                    {ind.badge}
                  </span>
                </div>

                <div>
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">{ind.subtitle}</span>
                  <h2 className="text-xl font-extrabold text-white tracking-tight mt-0.5 group-hover:text-blue-400 transition">{ind.title}</h2>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {ind.desc}
                </p>

                {/* Key Metrics Pill Badges */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {ind.metrics.map((m, mIdx) => (
                    <span key={mIdx} className="text-[10px] font-semibold text-blue-300 bg-blue-500/10 px-2.5 py-1 rounded-md border border-blue-500/20">
                      {m}
                    </span>
                  ))}
                </div>

                {/* Feature List */}
                <ul className="space-y-2 pt-2 border-t border-slate-900 text-xs text-slate-300">
                  {ind.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start space-x-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="text-[11px]">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href="/verify"
                className="pt-4 border-t border-slate-900 flex items-center justify-between text-xs font-bold text-blue-400 hover:text-cyan-300 transition group-hover:translate-x-1 duration-300"
              >
                <span>Verify Industry Media</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="glass-card p-8 sm:p-12 rounded-3xl border border-slate-800 text-center space-y-6 bg-gradient-to-r from-blue-950/40 via-slate-950 to-cyan-950/40">
          <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mx-auto">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">Need a Custom Enterprise Workflow?</h2>
          <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto">
            We partner with enterprises, law enforcement, and government agencies to build custom REST API integrations and air-gapped forensic models.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-3.5 rounded-full bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-400 text-white font-extrabold text-xs shadow-lg shadow-blue-500/20 hover:opacity-95 transition"
            >
              Contact Enterprise Sales
            </Link>
            <Link
              href="/pricing"
              className="px-7 py-3.5 rounded-full bg-slate-900 hover:bg-slate-800 text-slate-200 font-extrabold text-xs border border-slate-800 transition"
            >
              View Pricing Tiers
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
