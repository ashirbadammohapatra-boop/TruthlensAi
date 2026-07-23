'use client';

import React from 'react';
import Link from 'next/link';
import { SpotlightBackground } from '@/components/ui/SpotlightBackground';
import { ShieldCheck, ArrowLeft, Mail, Phone, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

export default function TermsPage() {
  return (
    <SpotlightBackground>
      <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-12">
        
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center space-x-2 text-xs font-semibold text-slate-400 hover:text-white transition group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to TruthLens AI Home</span>
        </Link>

        {/* Header Banner */}
        <div className="space-y-3 border-b border-slate-800/80 pb-8">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full text-xs text-blue-400 font-bold uppercase tracking-wider">
            <FileText className="w-4 h-4 text-cyan-400" />
            <span>Legal Documentation</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight">
            Terms of <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Service</span>
          </h1>

          <p className="text-sm text-slate-400 font-medium">
            Effective Date: January 1, 2026 • Last Revised: July 2026
          </p>
        </div>

        {/* Main Terms Document Body */}
        <div className="glass-card p-8 sm:p-12 rounded-3xl border border-slate-800 bg-slate-950/80 backdrop-blur-2xl space-y-8 text-slate-300 text-sm leading-relaxed">
          
          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-xl font-extrabold text-white tracking-tight">1. Acceptance of Terms</h2>
            <p>
              By accessing or using the TruthLens AI platform, APIs, web applications, or forensic verification services (collectively, the "Services"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to all terms, you may not access or use the Services.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="text-xl font-extrabold text-white tracking-tight">2. Permitted Use</h2>
            <p>
              TruthLens AI grants you a limited, non-exclusive, non-transferable, revocable license to access the platform for digital media authenticity verification, journalism research, enterprise security auditing, and content analysis.
            </p>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="text-xl font-extrabold text-white tracking-tight">3. User Responsibilities</h2>
            <p>
              You represent and warrant that you possess all necessary rights, licenses, and permissions for any image, video, audio, or text asset submitted to the platform. You agree not to use the Services for unlawful surveillance, defamation, harassment, or infringing on intellectual property.
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="text-xl font-extrabold text-white tracking-tight">4. Intellectual Property</h2>
            <p>
              All proprietary algorithms, Error Level Analysis (ELA) thermal mapping systems, Multi-Model Ensemble fusion code, design assets, and logos are the exclusive property of TruthLens AI Inc. Submitted user files remain the intellectual property of their respective owners.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="text-xl font-extrabold text-white tracking-tight">5. AI Analysis Disclaimer</h2>
            <p className="p-4 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-200">
              <strong>IMPORTANT NOTICE:</strong> TruthLens AI provides evidence-based, probabilistic confidence assessments rather than absolute guarantees of authenticity. Platform reports and Trust Scores should be used as decision-support tools alongside expert human review.
            </p>
          </section>

          {/* Section 6 */}
          <section className="space-y-3">
            <h2 className="text-xl font-extrabold text-white tracking-tight">6. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by applicable law, TruthLens AI Inc. and its affiliates shall not be liable for any indirect, incidental, consequential, special, or punitive damages resulting from your reliance on media verification reports or Trust Scores.
            </p>
          </section>

          {/* Section 7 */}
          <section className="space-y-3">
            <h2 className="text-xl font-extrabold text-white tracking-tight">7. Prohibited Activities</h2>
            <p>You strictly agree not to:</p>
            <ul className="list-disc list-inside space-y-1.5 text-slate-400 pl-2">
              <li>Reverse engineer, decompile, or attempt to extract the source code of our ML models.</li>
              <li>Bypass rate limits, system authentication, or security measures.</li>
              <li>Upload malicious files containing malware, viruses, or exploit payloads.</li>
              <li>Use automated scrapers to query our verification API without explicit enterprise authorization.</li>
            </ul>
          </section>

          {/* Section 8 */}
          <section className="space-y-3">
            <h2 className="text-xl font-extrabold text-white tracking-tight">8. Termination & Changes</h2>
            <p>
              We reserve the right to suspend or terminate your access to the platform at any time for violation of these Terms. We may update these Terms periodically; continued use of the platform after updates constitutes acceptance.
            </p>
          </section>

          {/* Section 9 */}
          <section className="space-y-4 border-t border-slate-800 pt-6">
            <h2 className="text-xl font-extrabold text-white tracking-tight">9. Contact Information</h2>
            <p className="text-slate-400">If you have any questions regarding these Terms of Service, please contact our legal team:</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-semibold pt-2">
              <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <div>
                  <p className="text-slate-400">Phone</p>
                  <p className="text-white font-mono">+91 8637225579</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-center space-x-3">
                <Mail className="w-5 h-5 text-cyan-400" />
                <div>
                  <p className="text-slate-400">Email</p>
                  <p className="text-white font-mono">businessashirbad@gmail.com</p>
                </div>
              </div>
            </div>
          </section>

        </div>

        {/* Footer Link */}
        <div className="text-center pt-8 border-t border-slate-900 text-xs text-slate-500">
          © 2026 TruthLens AI Inc. All rights reserved. • Building trust in digital media through AI-powered authenticity verification.
        </div>

      </div>
    </SpotlightBackground>
  );
}
