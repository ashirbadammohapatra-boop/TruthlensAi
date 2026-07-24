'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { SpotlightBackground } from '@/components/ui/SpotlightBackground';
import { FloatingNavbar } from '@/components/FloatingNavbar';
import { CheckCircle2, ArrowRight, ShieldCheck, Zap, Building, HelpCircle, Sparkles } from 'lucide-react';

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');

  const plans = [
    {
      name: 'Starter',
      badge: 'Individual Analysts',
      price: '$0',
      period: 'free forever',
      description: 'Essential image verification and metadata analysis for independent journalists and researchers.',
      features: [
        '100 image scans per month',
        'Basic Error Level Analysis (ELA)',
        'EXIF metadata extraction',
        'Standard PDF verification reports',
        'Community forum support'
      ],
      cta: 'Get Started Free',
      popular: false,
      href: '/verify'
    },
    {
      name: 'Professional',
      badge: 'Most Popular',
      price: billingCycle === 'monthly' ? '$99' : '$79',
      period: 'per month',
      description: 'Comprehensive multimedia verification for newsrooms, legal teams, and cybersecurity analysts.',
      features: [
        '5,000 multimedia scans per month',
        'Images, Videos, Audio & Web Links',
        'OpenAI GPT-4o visual reasoning',
        'Full ELA & 2D FFT spectrum heatmaps',
        'High-throughput REST API access',
        'SHA-256 evidence timestamping',
        'Priority email & chat support'
      ],
      cta: 'Start 14-Day Free Trial',
      popular: true,
      href: '/verify'
    },
    {
      name: 'Enterprise',
      badge: 'Custom Architecture',
      price: 'Custom',
      period: 'custom billing',
      description: 'Dedicated infrastructure, air-gapped deployments, and SLA-backed support for government & Fortune 500.',
      features: [
        'Unlimited multimedia verification scans',
        'Dedicated air-gapped cloud instance',
        'Custom fine-tuned neural models',
        'SOC2 Type II & GDPR compliance isolation',
        '24/7 dedicated SRE support engineer',
        'Custom Webhooks & SIEM integrations',
        'Guaranteed 99.99% uptime SLA'
      ],
      cta: 'Contact Enterprise Sales',
      popular: false,
      href: '/contact'
    }
  ];

  const comparison = [
    { feature: 'Image Verification', starter: '100/mo', pro: '5,000/mo', enterprise: 'Unlimited' },
    { feature: 'Video Deepfake Detection', starter: '—', pro: 'Included', enterprise: 'Included' },
    { feature: 'Synthetic Audio Voice Scan', starter: '—', pro: 'Included', enterprise: 'Included' },
    { feature: 'Error Level Analysis (ELA)', starter: 'Basic', pro: 'Thermal Heatmap', enterprise: 'High-Res Multi-Band' },
    { feature: 'OpenAI GPT-4o Reasoning', starter: '—', pro: 'Included', enterprise: 'Custom Fine-Tuned' },
    { feature: 'REST API Access', starter: '—', pro: '120 req/min', enterprise: 'Custom Rate Limits' },
    { feature: 'Certified Audit Reports', starter: 'Standard PDF', pro: 'Branded PDF Dossier', enterprise: 'Legal Chain-of-Custody' },
    { feature: 'Uptime SLA', starter: 'Best Effort', pro: '99.9%', enterprise: '99.99% Guaranteed' },
    { feature: 'Dedicated Support', starter: 'Community', pro: 'Priority Email', enterprise: '24/7 SRE Assistant' }
  ];

  return (
    <SpotlightBackground>
      {/* Navbar */}
      <FloatingNavbar activeTab="media" setActiveTab={() => {}} />

      <div className="min-h-screen pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
        
        {/* Page Header */}
        <div className="space-y-4 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full text-xs text-blue-400 font-bold uppercase tracking-wider">
            <Zap className="w-4 h-4 text-cyan-400" />
            <span>Transparent Pricing</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight">
            Flexible Plans for <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-cyan-400 bg-clip-text text-transparent">Every Team</span>
          </h1>

          <p className="text-sm sm:text-base text-slate-400 font-medium">
            From independent researchers to Fortune 500 enterprises and state agencies.
          </p>

          {/* Billing Cycle Toggle */}
          <div className="pt-4 flex items-center justify-center space-x-3">
            <span className={`text-xs font-bold ${billingCycle === 'monthly' ? 'text-white' : 'text-slate-400'}`}>Monthly Billing</span>
            <button
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'annual' : 'monthly')}
              className="w-12 h-6 rounded-full bg-slate-900 border border-slate-800 p-1 transition-colors relative"
            >
              <div className={`w-4 h-4 rounded-full bg-blue-400 transition-transform ${billingCycle === 'annual' ? 'translate-x-6 bg-cyan-400' : 'translate-x-0'}`} />
            </button>
            <span className={`text-xs font-bold flex items-center gap-1.5 ${billingCycle === 'annual' ? 'text-white' : 'text-slate-400'}`}>
              <span>Annual Billing</span>
              <span className="text-[9px] font-extrabold uppercase px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">Save 20%</span>
            </span>
          </div>
        </div>

        {/* 3 Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className={`p-8 rounded-3xl backdrop-blur-2xl flex flex-col justify-between space-y-6 relative transition duration-300 ${
                plan.popular
                  ? 'bg-gradient-to-b from-blue-950/80 via-slate-950 to-cyan-950/80 border-2 border-blue-500/60 shadow-2xl shadow-blue-500/20 scale-[1.03]'
                  : 'bg-slate-950/80 border border-slate-800/80 hover:border-slate-700 shadow-xl'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 text-white text-[10px] font-black uppercase tracking-wider shadow-md">
                  {plan.badge}
                </div>
              )}

              <div className="space-y-4">
                <div className="space-y-1">
                  <span className="text-[11px] font-bold uppercase text-slate-500 tracking-wider">{plan.badge}</span>
                  <h2 className="text-2xl font-extrabold text-white tracking-tight">{plan.name}</h2>
                </div>

                <div className="flex items-baseline space-x-1">
                  <span className="text-4xl sm:text-5xl font-black text-white font-mono">{plan.price}</span>
                  <span className="text-xs text-slate-400 font-semibold">{plan.period}</span>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {plan.description}
                </p>

                <ul className="space-y-2.5 pt-4 border-t border-slate-900 text-xs text-slate-300">
                  {plan.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start space-x-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href={plan.href}
                className={`w-full py-3.5 rounded-full font-extrabold text-xs text-center flex items-center justify-center space-x-2 transition ${
                  plan.popular
                    ? 'bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-400 text-white shadow-lg shadow-blue-500/25 hover:opacity-95'
                    : 'bg-slate-900 hover:bg-slate-800 text-white border border-slate-800'
                }`}
              >
                <span>{plan.cta}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Feature Comparison Matrix */}
        <div className="glass-card p-8 sm:p-10 rounded-3xl border border-slate-800 space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-extrabold text-white tracking-tight">Full Plan Feature Comparison</h2>
            <p className="text-xs text-slate-400">Detailed breakdown of platform capabilities across pricing tiers.</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-slate-800 text-slate-400 uppercase tracking-wider text-[11px]">
                  <th className="py-4 px-4 font-bold">Feature</th>
                  <th className="py-4 px-4 font-bold text-center">Starter</th>
                  <th className="py-4 px-4 font-bold text-center text-cyan-400">Professional</th>
                  <th className="py-4 px-4 font-bold text-center text-blue-400">Enterprise</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/80 text-slate-300">
                {comparison.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-900/50 transition">
                    <td className="py-4 px-4 font-bold text-white">{row.feature}</td>
                    <td className="py-4 px-4 text-center text-slate-400">{row.starter}</td>
                    <td className="py-4 px-4 text-center font-bold text-cyan-300">{row.pro}</td>
                    <td className="py-4 px-4 text-center font-bold text-blue-400">{row.enterprise}</td>
                  </tr>
                ))}
              </tbody>
            </table>
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
