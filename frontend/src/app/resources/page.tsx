'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { SpotlightBackground } from '@/components/ui/SpotlightBackground';
import { FloatingNavbar } from '@/components/FloatingNavbar';
import { FileText, HelpCircle, BookOpen, Terminal, ChevronDown, Search, ArrowRight, ShieldCheck, Cpu } from 'lucide-react';

export default function ResourcesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState('');

  const faqs = [
    {
      q: 'How does TruthLens AI detect AI-generated imagery and deepfake videos?',
      a: 'TruthLens AI utilizes a multi-model ensemble (ResNet50-V2, EfficientNet-B4, Vision Transformer ViT-H/14, Hugging Face detectors) combined with Error Level Analysis (ELA) thermal mapping, 2D FFT spectrum frequency analysis, and EXIF metadata extraction to evaluate pixel continuity, noise distribution, and lighting geometry.'
    },
    {
      q: 'Does TruthLens AI rely on OpenAI Vision alone?',
      a: 'No. OpenAI Vision (GPT-4o) represents only 10% of our weighted evidence fusion score. The remaining 90% is calculated from independent computer vision neural models, ELA thermal maps, and sensor noise statistics to prevent black-box bias.'
    },
    {
      q: 'Can TruthLens AI provide courtroom-admissible evidence?',
      a: 'Yes. Enterprise audit reports include SHA-256 binary hash locks, full EXIF metadata dumps, ELA heatmaps, and Bayesian evidence breakdown arrays designed for forensic investigations and legal proceedings.'
    },
    {
      q: 'What media formats are supported for verification?',
      a: 'Images (JPG, PNG, WEBP, HEIC, TIFF, BMP, RAW), Videos (MP4, MOV, AVI, MKV, WEBM), Audio (MP3, WAV, AAC, M4A, FLAC, Voice Notes), Documents (PDF, DOCX), and Web URLs (YouTube, X/Twitter, Web News).'
    },
    {
      q: 'Is user media stored on public servers?',
      a: 'No. Uploaded files are processed in-memory using encrypted temp streams and stored in isolated Supabase RLS buckets with automated 24-hour auto-deletion policies.'
    }
  ];

  const docs = [
    { title: 'REST API Quickstart Guide', desc: 'Get started integrating the TruthLens verification endpoint into your application in under 5 minutes.', badge: 'Developer API' },
    { title: 'Understanding ELA Thermal Heatmaps', desc: 'Comprehensive guide to interpreting Error Level Analysis compression artifacts and image manipulation boundaries.', badge: 'Forensics' },
    { title: 'Synthetic Voice & Audio Splice Detection', desc: 'Technical overview of spectrogram pitch continuity checking and synthetic voice clone risk scoring.', badge: 'Audio AI' },
    { title: 'Enterprise Webhook & Alert Configuration', desc: 'Configure real-time automated Webhook alerts for high-risk deepfake detections in your SOC pipeline.', badge: 'Security' }
  ];

  const filteredFaqs = faqs.filter(f => f.q.toLowerCase().includes(searchQuery.toLowerCase()) || f.a.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <SpotlightBackground>
      {/* Navbar */}
      <FloatingNavbar activeTab="media" setActiveTab={() => {}} />

      <div className="min-h-screen pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
        
        {/* Page Header */}
        <div className="space-y-4 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full text-xs text-blue-400 font-bold uppercase tracking-wider">
            <BookOpen className="w-4 h-4 text-cyan-400" />
            <span>Knowledge Base & Docs</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight">
            Platform <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-cyan-400 bg-clip-text text-transparent">Resources & Guides</span>
          </h1>

          <p className="text-sm sm:text-base text-slate-400 font-medium">
            Explore API documentation, forensic guides, technical whitepapers, and enterprise FAQs.
          </p>

          {/* Search Bar */}
          <div className="pt-4 max-w-lg mx-auto relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search documentation, guides, and FAQs..."
              className="w-full bg-slate-950/80 border border-slate-800 focus:border-blue-500 rounded-2xl py-3.5 pl-12 pr-4 text-sm text-white placeholder-slate-500 outline-none transition"
            />
          </div>
        </div>

        {/* Documentation Guides Grid */}
        <div className="space-y-6">
          <h2 className="text-2xl font-extrabold text-white tracking-tight">Technical Documentation & Guides</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {docs.map((doc, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="p-8 rounded-3xl bg-slate-950/80 border border-slate-800/80 backdrop-blur-2xl space-y-4 hover:border-blue-500/40 transition group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-md bg-slate-900 text-blue-400 border border-slate-800">
                    {doc.badge}
                  </span>
                  <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-blue-400 group-hover:translate-x-1 transition-transform" />
                </div>

                <h3 className="text-lg font-extrabold text-white tracking-tight group-hover:text-blue-400 transition">{doc.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{doc.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* FAQ Accordion Section */}
        <div className="glass-card p-8 sm:p-12 rounded-3xl border border-slate-800 space-y-8">
          <div className="space-y-2">
            <span className="text-xs font-extrabold uppercase text-blue-400 tracking-wider">Enterprise Answers</span>
            <h2 className="text-3xl font-black text-white tracking-tight">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {filteredFaqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-slate-950/60 border border-slate-800/80 overflow-hidden transition"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between font-bold text-sm text-white hover:text-blue-400 transition"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${isOpen ? 'rotate-180 text-blue-400' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="px-5 pb-5 text-xs text-slate-400 leading-relaxed border-t border-slate-900 pt-3"
                      >
                        {faq.a}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
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
