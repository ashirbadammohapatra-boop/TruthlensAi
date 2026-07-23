'use client';

import React from 'react';
import Link from 'next/link';
import { SpotlightBackground } from '@/components/ui/SpotlightBackground';
import { ShieldCheck, ArrowLeft, Mail, Phone, Lock } from 'lucide-react';

export default function PrivacyPage() {
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
            <Lock className="w-4 h-4 text-cyan-400" />
            <span>Data Privacy & Security</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight">
            Privacy <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Policy</span>
          </h1>

          <p className="text-sm text-slate-400 font-medium">
            Effective Date: January 1, 2026 • Last Revised: July 2026
          </p>
        </div>

        {/* Main Privacy Policy Body */}
        <div className="glass-card p-8 sm:p-12 rounded-3xl border border-slate-800 bg-slate-950/80 backdrop-blur-2xl space-y-8 text-slate-300 text-sm leading-relaxed">
          
          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-xl font-extrabold text-white tracking-tight">1. Information We Collect</h2>
            <p>
              TruthLens AI is committed to protecting user privacy. We collect only the information necessary to provide robust media verification services:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-slate-400 pl-2">
              <li><strong>Uploaded Media Files:</strong> Images (JPG, PNG, WEBP), videos, and text claims submitted for analysis.</li>
              <li><strong>Technical Metadata:</strong> EXIF camera headers, file dimensions, MIME types, and cryptographic SHA-256 hashes.</li>
              <li><strong>Usage Analytics & Cookies:</strong> Session tokens, API latency metrics, and essential security cookies.</li>
            </ul>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="text-xl font-extrabold text-white tracking-tight">2. How Data Is Used</h2>
            <p>
              Uploaded assets are processed strictly for:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-slate-400 pl-2">
              <li>Executing deep vision classification models, Error Level Analysis (ELA), and EXIF header parsing.</li>
              <li>Generating downloadable Executive Audit Certificate PDF reports.</li>
              <li>Maintaining system performance, security auditing, and fraud prevention.</li>
            </ul>
            <p className="text-emerald-400 font-semibold pt-1">
              We do NOT sell, rent, or publicly publish user uploaded media assets to third parties.
            </p>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="text-xl font-extrabold text-white tracking-tight">3. Data Security & Retention</h2>
            <p>
              All uploads are transmitted over encrypted TLS 1.3 channels and stored in isolated Supabase cloud storage buckets protected by Row Level Security (RLS) policies. Files are retained according to your account configuration, and users may delete verification reports at any time.
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="text-xl font-extrabold text-white tracking-tight">4. Third-Party Services</h2>
            <p>
              To deliver multi-modal visual reasoning, uploaded media may be processed via secure enterprise APIs (such as OpenAI Vision and Supabase Cloud). These subprocessors are bound by strict enterprise privacy agreements.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="text-xl font-extrabold text-white tracking-tight">5. User Rights & Data Control</h2>
            <p>
              You have the right to access, inspect, export, or request immediate deletion of your submitted media files and audit logs from our databases.
            </p>
          </section>

          {/* Section 6 */}
          <section className="space-y-4 border-t border-slate-800 pt-6">
            <h2 className="text-xl font-extrabold text-white tracking-tight">6. Privacy Inquiries & Data Officer</h2>
            <p className="text-slate-400">If you have any privacy questions or wish to exercise your data deletion rights, contact our Privacy Officer:</p>
            
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
