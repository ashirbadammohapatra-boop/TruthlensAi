'use client';

import React from 'react';
import Link from 'next/link';
import { SpotlightBackground } from '@/components/ui/SpotlightBackground';
import { ShieldCheck, ArrowLeft, Lock, Server, FileCode, Key, ShieldAlert } from 'lucide-react';

export default function SecurityPage() {
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
        <div className="space-y-4 border-b border-slate-800/80 pb-8 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full text-xs text-blue-400 font-bold uppercase tracking-wider">
            <Lock className="w-4 h-4 text-cyan-400" />
            <span>Enterprise Security Architecture</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight">
            Security & <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-cyan-400 bg-clip-text text-transparent">Data Protection</span>
          </h1>

          <p className="text-sm text-slate-400 font-medium">
            Learn about the technical security controls implemented across TruthLens AI to safeguard media evidence.
          </p>
        </div>

        {/* Body Content */}
        <div className="glass-card p-8 sm:p-12 rounded-3xl border border-slate-800 bg-slate-950/80 backdrop-blur-2xl space-y-8 text-slate-300 text-sm leading-relaxed">
          
          <section className="space-y-3">
            <h2 className="text-xl font-extrabold text-white tracking-tight">1. TLS 1.3 Encryption in Transit</h2>
            <p>
              All HTTP communications between your browser, API clients, and our backend verification engine are encrypted over TLS 1.3 using modern cipher suites.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-extrabold text-white tracking-tight">2. Isolated Storage Buckets & RLS</h2>
            <p>
              Uploaded media assets reside in isolated Supabase Cloud storage buckets governed by Row Level Security (RLS) policies. Access is strictly scoped to your active session token.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-extrabold text-white tracking-tight">3. Magic Byte Signature Validation</h2>
            <p>
              To prevent executable code injection, our backend inspects binary magic byte headers (`FF D8 FF`, `89 50 4E 47`, etc.) before processing uploads, instantly rejecting malicious scripts (`.exe`, `.sh`, `.php`) masked under media extensions.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-extrabold text-white tracking-tight">4. Rate Limiting & OWASP Headers</h2>
            <p>
              Our production middleware enforces `120 Requests / Minute` per IP address and injects OWASP headers including `Strict-Transport-Security`, `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, and `Content-Security-Policy`.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-extrabold text-white tracking-tight">5. Secret Key Isolation</h2>
            <p>
              Zero hardcoded secrets reside in client-side code. All API keys for OpenAI Vision, Hugging Face, and database connections are securely injected via server-side environment variables.
            </p>
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
