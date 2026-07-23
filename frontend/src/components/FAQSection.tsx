'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'How does TruthLens AI determine content authenticity?',
      a: 'TruthLens AI evaluates media through a multi-layer verification engine: deep vision neural classification models, Error Level Analysis (ELA) thermal heatmaps for spatial pixel tampering, EXIF camera header verification, and OpenAI Vision deep reasoning.'
    },
    {
      q: 'What image and media formats are supported?',
      a: 'TruthLens supports JPG, JPEG, PNG, and WEBP image uploads up to 10MB, as well as text claims, headlines, and news article statements.'
    },
    {
      q: 'How does OpenAI Vision enhance the verification process?',
      a: 'OpenAI Vision provides visual reasoning regarding lighting vectors, corneal eye reflections, shadow falloff gradients, and physical geometry coherence to complement statistical neural probability scores.'
    },
    {
      q: 'What is an Error Level Analysis (ELA) thermal heatmap?',
      a: 'ELA resaves images at a known compression level to highlight quantization error variances. Localized resaved or digitally edited areas show up as bright thermal highlights in the heatmap.'
    },
    {
      q: 'Is my uploaded media kept private and secure?',
      a: 'Yes. All uploads are processed securely with enterprise encryption standards and stored in isolated cloud buckets for audit logging.'
    }
  ];

  return (
    <section id="faq" className="py-24 relative overflow-hidden bg-slate-950/40">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-xs text-blue-400 font-bold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Frequently Asked Questions</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Got Questions? We Have <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Answers</span>
          </h2>
        </div>

        {/* FAQ Accordions */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="rounded-2xl bg-slate-900/70 border border-slate-800/80 backdrop-blur-xl overflow-hidden transition-all duration-300 hover:border-blue-500/30"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between space-x-4 font-bold text-white text-base sm:text-lg focus:outline-none"
                >
                  <span>{faq.q}</span>
                  <div className={`p-2 rounded-xl bg-slate-800 text-slate-300 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-blue-500/20 text-blue-400' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6 text-sm text-slate-400 leading-relaxed border-t border-slate-800/60 pt-4"
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
    </section>
  );
};
