'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { SpotlightBackground } from '@/components/ui/SpotlightBackground';
import { FloatingNavbar } from '@/components/FloatingNavbar';
import { HeroSection } from '@/components/HeroSection';
import { EnterpriseSolutions } from '@/components/EnterpriseSolutions';
import { BentoGridFeatures } from '@/components/BentoGridFeatures';
import { EnterpriseWorkflowSection } from '@/components/EnterpriseWorkflowSection';
import { DeveloperApiSection } from '@/components/DeveloperApiSection';
import { EnterpriseSecuritySection } from '@/components/EnterpriseSecuritySection';
import { EnterprisePricingSection } from '@/components/EnterprisePricingSection';
import { ContactSection } from '@/components/ContactSection';
import { MultimediaScannerWorkspace } from '@/components/MultimediaScannerWorkspace';
import { ShieldCheck, Globe, Share2, ExternalLink } from 'lucide-react';

export default function Home() {
  const [activeTab, setActiveTab] = useState<'media' | 'factcheck'>('media');

  const scrollToScanner = () => {
    const el = document.getElementById('scanner');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <SpotlightBackground>
      
      {/* 1. Floating Corporate Glass Navbar */}
      <FloatingNavbar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* 2. Series A Hero Section ("The Trust Layer for Digital Media") */}
      <HeroSection onStartVerification={scrollToScanner} />

      {/* 3. Interactive Multimedia Verification Workspace (Images, Videos, Audio, Docs, URLs) */}
      <section id="scanner" className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <MultimediaScannerWorkspace />
        </div>
      </section>

      {/* 4. Enterprise Industry Solutions (Journalism, Government, Finance, Security) */}
      <EnterpriseSolutions />

      {/* 5. Core Platform Capability Bento Grid */}
      <BentoGridFeatures />

      {/* 6. Visual Verification Pipeline Workflow */}
      <EnterpriseWorkflowSection />

      {/* 7. Developer REST API Platform & Interactive Code Inspector */}
      <DeveloperApiSection />

      {/* 8. Enterprise Security & Privacy Architecture */}
      <EnterpriseSecuritySection />

      {/* 9. Realistic Enterprise Pricing Tiers (Starter, Pro, Enterprise) */}
      <EnterprisePricingSection onStartVerification={scrollToScanner} />

      {/* 10. 10-Question FAQ Accordion, Contact Section & Final CTA Banner */}
      <ContactSection onStartVerification={scrollToScanner} />

      {/* 11. Complete Corporate Footer */}
      <footer className="relative border-t border-slate-800/80 bg-[#030712] py-14 text-slate-400 text-xs">
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-slate-400">
            
            {/* Column 1: Brand Info */}
            <div className="col-span-2 space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-500 to-cyan-400 p-[1px]">
                  <div className="w-full h-full bg-slate-950 rounded-[7px] flex items-center justify-center text-blue-400">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                </div>
                <span className="text-base font-black text-white tracking-tight">
                  TruthLens <span className="text-blue-400">AI</span>
                </span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
                The Trust Layer for Digital Media — AI-powered media authenticity, multi-spectral forensics, and evidence verification for enterprise operations.
              </p>
            </div>

            {/* Column 2: Platform Links */}
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase text-slate-200 tracking-wider">Platform</span>
              <ul className="space-y-2">
                <li><a href="#hero" className="hover:text-white transition">Home</a></li>
                <li><a href="#scanner" className="hover:text-white transition">Multimedia Scanner</a></li>
                <li><Link href="/features" className="hover:text-white transition">Features Matrix</Link></li>
                <li><a href="#solutions" className="hover:text-white transition">Solutions</a></li>
              </ul>
            </div>

            {/* Column 3: Developers & Security */}
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase text-slate-200 tracking-wider">Developers</span>
              <ul className="space-y-2">
                <li><a href="#developers" className="hover:text-white transition">REST API Docs</a></li>
                <li><Link href="/security" className="hover:text-white transition">Security Architecture</Link></li>
                <li><Link href="/trust" className="hover:text-white transition">Trust Center</Link></li>
                <li><Link href="/responsible-ai" className="hover:text-white transition">Responsible AI</Link></li>
              </ul>
            </div>

            {/* Column 4: Legal & Contact */}
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase text-slate-200 tracking-wider">Legal & Contact</span>
              <ul className="space-y-2">
                <li><Link href="/privacy" className="hover:text-white transition">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-white transition">Terms of Service</Link></li>
                <li><a href="#faq" className="hover:text-white transition">Enterprise FAQ</a></li>
                <li><a href="#contact" className="hover:text-white transition">Contact Sales</a></li>
              </ul>
            </div>

          </div>

          <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-slate-500 text-[11px] gap-4">
            <p>© 2026 TruthLens AI Inc. All Rights Reserved.</p>
            <div className="flex space-x-6 text-slate-400">
              <Link href="/privacy" className="hover:text-white transition">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-white transition">Terms of Service</Link>
              <Link href="/security" className="hover:text-white transition">Security</Link>
              <Link href="/trust" className="hover:text-white transition">Trust Center</Link>
            </div>
          </div>
        </div>
      </footer>

    </SpotlightBackground>
  );
}
