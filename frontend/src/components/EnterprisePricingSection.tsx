'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Check, ShieldCheck, Zap, Building } from 'lucide-react';

interface EnterprisePricingSectionProps {
  onStartVerification: () => void;
}

export const EnterprisePricingSection: React.FC<EnterprisePricingSectionProps> = ({ onStartVerification }) => {
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const plans = [
    {
      name: 'Starter',
      badge: 'Free Developer Trial',
      price: '$0',
      period: 'Forever Free',
      description: 'For journalists, researchers, and individuals evaluating media authenticity.',
      features: [
        '10 Verification Scans / Day',
        'Image & ELA Thermal Heatmaps',
        'EXIF Camera Metadata Extraction',
        'Standard Trust Score Rating',
        'Web App Access'
      ],
      cta: 'Start Verification',
      primary: false,
      onClick: onStartVerification
    },
    {
      name: 'Professional',
      badge: 'Most Popular',
      price: '$99',
      period: 'Per Month',
      description: 'For newsrooms, security analysts, and digital investigation teams.',
      features: [
        '1,000 Verification Scans / Month',
        'Full Multi-Model AI Ensemble',
        'OpenAI Vision Semantic Reasoning',
        '1-Click Executive PDF Export',
        'Video Deepfake & Audio Analysis',
        'Priority API Endpoint Access'
      ],
      cta: 'Start Pro Trial',
      primary: true,
      onClick: onStartVerification
    },
    {
      name: 'Enterprise',
      badge: 'Institutional & Government',
      price: 'Custom',
      period: 'Contact Sales',
      description: 'For global media networks, intelligence agencies, and financial institutions.',
      features: [
        'Unlimited Verification Scans',
        'Sub-15ms Custom REST API SLA',
        'Dedicated Security Account Manager',
        'On-Premises / Private Cloud Deploy',
        'Custom Fine-Tuned Model Weights',
        '24/7 Priority Support & Audit Logs'
      ],
      cta: 'Contact Sales',
      primary: false,
      onClick: scrollToContact
    }
  ];

  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-xs text-blue-400 font-bold uppercase tracking-wider">
            <span>Flexible Pricing</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Transparent Pricing for <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Every Scale</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-400 font-medium">
            Start verifying media for free, or scale with enterprise throughput and custom SLA options.
          </p>
        </div>

        {/* 3 Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className={`p-8 sm:p-10 rounded-3xl border flex flex-col justify-between space-y-8 relative transition-all duration-300 ${
                plan.primary
                  ? 'bg-gradient-to-b from-[#0e1c38]/90 to-[#071124]/95 border-blue-400 shadow-2xl shadow-blue-500/20 scale-[1.03] z-10'
                  : 'bg-slate-950/80 border-slate-800/80 hover:border-slate-700'
              }`}
            >
              {plan.primary && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-blue-600 to-cyan-400 text-white font-black text-[10px] uppercase tracking-wider shadow-lg">
                  {plan.badge}
                </div>
              )}

              <div className="space-y-6">
                <div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">{plan.name}</span>
                  <div className="flex items-baseline space-x-2 mt-2">
                    <span className="text-4xl sm:text-5xl font-black text-white">{plan.price}</span>
                    <span className="text-xs font-semibold text-slate-400">{plan.period}</span>
                  </div>
                  <p className="text-xs text-slate-400 mt-2 leading-relaxed">{plan.description}</p>
                </div>

                <div className="space-y-3 pt-4 border-t border-slate-800/80 text-xs font-medium text-slate-300">
                  {plan.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center space-x-3">
                      <div className="p-1 rounded-full bg-blue-500/20 text-blue-400 shrink-0">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={plan.onClick}
                  className={`w-full py-4 rounded-xl font-extrabold text-xs transition ${
                    plan.primary
                      ? 'bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-400 hover:opacity-95 text-white shadow-lg shadow-blue-500/25 border border-blue-400/30'
                      : 'bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-800'
                  }`}
                >
                  {plan.cta}
                </button>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
