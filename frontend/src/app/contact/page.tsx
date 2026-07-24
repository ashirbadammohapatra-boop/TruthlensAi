'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { SpotlightBackground } from '@/components/ui/SpotlightBackground';
import { FloatingNavbar } from '@/components/FloatingNavbar';
import { Building, Mail, User, Phone, MessageSquare, Send, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    industry: 'Journalism & Media',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <SpotlightBackground>
      {/* Navbar */}
      <FloatingNavbar activeTab="media" setActiveTab={() => {}} />

      <div className="min-h-screen pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
        
        {/* Page Header */}
        <div className="space-y-4 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full text-xs text-blue-400 font-bold uppercase tracking-wider">
            <Building className="w-4 h-4 text-cyan-400" />
            <span>Enterprise Solutions Team</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight">
            Book an <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-cyan-400 bg-clip-text text-transparent">Enterprise Demo</span>
          </h1>

          <p className="text-sm sm:text-base text-slate-400 font-medium">
            Connect with our solution architects to evaluate TruthLens AI for your newsroom, enterprise SOC, legal firm, or agency.
          </p>
        </div>

        {/* Form & Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Info Panel */}
          <div className="lg:col-span-5 space-y-8">
            <div className="glass-card p-8 rounded-3xl border border-slate-800 space-y-6">
              <h2 className="text-2xl font-extrabold text-white tracking-tight">Why Partner with TruthLens AI?</h2>
              <ul className="space-y-4 text-xs text-slate-300">
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>Sub-15ms execution latency for high-throughput automated newsroom pipelines.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span>Courtroom-admissible forensic PDF dossier generation with SHA-256 hash timestamping.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Air-gapped deployment architecture for zero-cloud defense and government environments.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>24/7 dedicated SRE Operations Agent monitoring platform SLA.</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-3xl bg-slate-950/80 border border-slate-800 space-y-3 text-xs text-slate-400">
              <div className="flex items-center space-x-2 text-white font-bold">
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>Enterprise Direct Line</span>
              </div>
              <p>Email: <a href="mailto:sales@truthlens.ai" className="text-blue-400 hover:underline">sales@truthlens.ai</a></p>
              <p>Security Response: <a href="mailto:security@truthlens.ai" className="text-blue-400 hover:underline">security@truthlens.ai</a></p>
            </div>
          </div>

          {/* Right Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-8 sm:p-10 rounded-3xl border border-slate-800">
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-white">Demo Request Received</h3>
                  <p className="text-xs text-slate-400 max-w-md mx-auto">
                    Thank you! An enterprise solution architect will contact you within 2 business hours to schedule a custom platform demonstration.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-full bg-slate-900 text-xs font-bold text-slate-300 hover:text-white border border-slate-800 transition"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">Your Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Jane Doe"
                        className="w-full bg-slate-950/80 border border-slate-800 focus:border-blue-500 rounded-xl p-3.5 text-sm text-white placeholder-slate-500 outline-none transition"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">Work Email</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="jane@organization.com"
                        className="w-full bg-slate-950/80 border border-slate-800 focus:border-blue-500 rounded-xl p-3.5 text-sm text-white placeholder-slate-500 outline-none transition"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">Organization Name</label>
                      <input
                        type="text"
                        required
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        placeholder="Acme Global News Corp"
                        className="w-full bg-slate-950/80 border border-slate-800 focus:border-blue-500 rounded-xl p-3.5 text-sm text-white placeholder-slate-500 outline-none transition"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">Industry Sector</label>
                      <select
                        value={formData.industry}
                        onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                        className="w-full bg-slate-950/80 border border-slate-800 focus:border-blue-500 rounded-xl p-3.5 text-sm text-white outline-none transition"
                      >
                        <option>Journalism & Media</option>
                        <option>Government & Public Sector</option>
                        <option>Law Enforcement & Legal</option>
                        <option>Cybersecurity & Intel</option>
                        <option>Financial Institutions</option>
                        <option>Insurance & Claims</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">Project Requirements</label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your media verification workflow, volume requirements, or REST API integration goals..."
                      className="w-full bg-slate-950/80 border border-slate-800 focus:border-blue-500 rounded-xl p-3.5 text-sm text-white placeholder-slate-500 outline-none transition"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-400 text-white font-extrabold text-xs shadow-lg shadow-blue-500/25 flex items-center justify-center space-x-2 hover:opacity-95 transition"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Enterprise Inquiry</span>
                  </button>
                </form>
              )}
            </div>
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
