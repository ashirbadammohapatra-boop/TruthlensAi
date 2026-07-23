'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Lock, Key, FileCode, CheckCircle2, Server } from 'lucide-react';

export const EnterpriseSecuritySection: React.FC = () => {
  const securityFeatures = [
    {
      icon: <Lock className="w-5 h-5 text-blue-400" />,
      title: 'TLS 1.3 Encryption',
      description: 'All media uploads and API requests are encrypted in transit over TLS 1.3 channels.'
    },
    {
      icon: <Server className="w-5 h-5 text-cyan-400" />,
      title: 'Isolated Storage Buckets',
      description: 'Media uploads reside in isolated Supabase Cloud buckets protected by Row Level Security (RLS) policies.'
    },
    {
      icon: <FileCode className="w-5 h-5 text-emerald-400" />,
      title: 'Magic Byte Header Inspection',
      description: 'Inspects binary header signatures to reject executable code injection (.exe, .sh, .php) masked under media file extensions.'
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-amber-400" />,
      title: 'OWASP Security Headers & Rate Limits',
      description: 'Enforces HSTS, CSP, X-Frame-Options: DENY, and 120 req/min rate limiting per client IP.'
    },
    {
      icon: <Key className="w-5 h-5 text-indigo-400" />,
      title: 'Secret Key Isolation',
      description: 'Zero hardcoded secrets. OpenAI, Hugging Face, and database keys are dynamically read from secure server-side environments.'
    }
  ];

  return (
    <section id="security" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-xs text-blue-400 font-bold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Enterprise Security</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Security & Privacy <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Built In</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-400 font-medium">
            TruthLens AI implements production-grade security architecture designed to protect sensitive media assets and organizational privacy.
          </p>
        </div>

        {/* Security Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {securityFeatures.map((sec, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="p-7 rounded-3xl bg-slate-950/70 border border-slate-800/80 backdrop-blur-xl space-y-4 hover:border-blue-500/40 transition"
            >
              <div className="p-3 bg-slate-900 rounded-2xl border border-slate-800 shrink-0 w-fit">
                {sec.icon}
              </div>
              <div>
                <h3 className="text-base font-extrabold text-white tracking-tight">{sec.title}</h3>
                <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">{sec.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
