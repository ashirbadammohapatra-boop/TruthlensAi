'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, ArrowRight, Menu, X, Sparkles, Cpu, Lock, FileText, HelpCircle } from 'lucide-react';
import Link from 'next/link';

interface FloatingNavbarProps {
  activeTab: 'media' | 'factcheck';
  setActiveTab: (tab: 'media' | 'factcheck') => void;
}

export const FloatingNavbar: React.FC<FloatingNavbarProps> = ({ activeTab, setActiveTab }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="fixed top-0 left-0 right-0 z-50 flex justify-center px-3 sm:px-6 pt-3 sm:pt-4 pointer-events-none"
      >
        <div
          className={`pointer-events-auto w-full max-w-6xl transition-all duration-300 rounded-2xl sm:rounded-full border backdrop-blur-2xl ${
            isScrolled
              ? 'py-2.5 px-4 sm:px-6 bg-[#080e1e]/90 border-blue-500/30 shadow-[0_8px_32px_rgba(0,0,0,0.6)] shadow-blue-500/10'
              : 'py-3 px-4 sm:px-8 bg-[#080e1e]/75 border-slate-800/80 shadow-2xl'
          }`}
        >
          <div className="flex items-center justify-between">
            
            {/* Brand Logo Left */}
            <div
              onClick={() => scrollToSection('hero')}
              className="flex items-center space-x-2.5 sm:space-x-3.5 cursor-pointer group"
            >
              <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-blue-500 via-sky-400 to-cyan-300 p-[1.5px] transition-transform duration-300 group-hover:scale-105 shadow-md shadow-blue-500/25 shrink-0">
                <div className="w-full h-full bg-[#030712] rounded-[10px] flex items-center justify-center">
                  <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 group-hover:text-cyan-300 transition-colors" />
                </div>
              </div>

              <div className="flex flex-col">
                <span className="text-base sm:text-xl font-black tracking-tight text-white font-sans leading-none">
                  TruthLens <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">AI</span>
                </span>
                <span className="text-[9px] sm:text-[10px] font-semibold text-slate-400 tracking-wide mt-0.5 sm:mt-1 hidden xs:inline-block">
                  The Trust Layer
                </span>
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center space-x-1 bg-slate-950/70 p-1.5 rounded-full border border-slate-800/80 text-xs font-semibold">
              <button
                onClick={() => scrollToSection('hero')}
                className="px-4 py-2 rounded-full text-slate-300 hover:text-white hover:bg-slate-900/60 transition-all"
              >
                Overview
              </button>

              <button
                onClick={() => {
                  setActiveTab('media');
                  scrollToSection('scanner');
                }}
                className="px-4 py-2 rounded-full text-slate-300 hover:text-white hover:bg-slate-900/60 transition-all"
              >
                Live Scanner
              </button>

              <button
                onClick={() => scrollToSection('features')}
                className="px-4 py-2 rounded-full text-slate-300 hover:text-white hover:bg-slate-900/60 transition-all"
              >
                Features
              </button>

              <button
                onClick={() => scrollToSection('developers')}
                className="px-4 py-2 rounded-full text-slate-300 hover:text-white hover:bg-slate-900/60 transition-all"
              >
                API Platform
              </button>

              <button
                onClick={() => scrollToSection('pricing')}
                className="px-4 py-2 rounded-full text-slate-300 hover:text-white hover:bg-slate-900/60 transition-all"
              >
                Pricing
              </button>
            </nav>

            {/* Right Action & Mobile Toggle */}
            <div className="flex items-center space-x-2 sm:space-x-3">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setActiveTab('media');
                  scrollToSection('scanner');
                }}
                className="relative group px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-xl sm:rounded-full bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-400 hover:opacity-95 text-white font-extrabold text-[11px] sm:text-xs flex items-center space-x-1.5 shadow-lg shadow-blue-500/25 border border-blue-400/30 transition overflow-hidden touch-target"
              >
                <span className="relative z-10 flex items-center gap-1.5">
                  <span className="hidden xs:inline">Verify Media</span>
                  <span className="xs:hidden">Verify</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.button>

              {/* Mobile Hamburger Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle Navigation Menu"
                className="md:hidden p-2 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-white touch-target flex items-center justify-center"
              >
                {mobileMenuOpen ? <X className="w-5 h-5 text-cyan-400" /> : <Menu className="w-5 h-5 text-slate-300" />}
              </button>
            </div>

          </div>
        </div>
      </motion.header>

      {/* Full-screen Slide-in Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 md:hidden bg-slate-950/90 backdrop-blur-2xl flex flex-col pt-24 px-6 pb-8 space-y-6 overflow-y-auto"
          >
            {/* Top Close Bar */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-800/80">
              <div className="flex items-center space-x-2">
                <Sparkles className="w-5 h-5 text-cyan-400" />
                <span className="text-sm font-bold text-white uppercase tracking-wider">Enterprise Navigation</span>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-full bg-slate-900 text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Mobile Nav Links */}
            <div className="space-y-2 text-sm font-bold">
              <button
                onClick={() => scrollToSection('hero')}
                className="w-full min-h-[48px] px-4 py-3 rounded-2xl bg-slate-900/80 border border-slate-800 text-slate-200 text-left flex items-center justify-between"
              >
                <span>Overview</span>
                <ArrowRight className="w-4 h-4 text-slate-500" />
              </button>

              <button
                onClick={() => {
                  setActiveTab('media');
                  scrollToSection('scanner');
                }}
                className="w-full min-h-[48px] px-4 py-3 rounded-2xl bg-gradient-to-r from-blue-600/20 to-cyan-500/20 border border-blue-500/40 text-blue-300 text-left flex items-center justify-between"
              >
                <span className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                  <span>Live Scanner</span>
                </span>
                <ArrowRight className="w-4 h-4 text-blue-400" />
              </button>

              <button
                onClick={() => scrollToSection('solutions')}
                className="w-full min-h-[48px] px-4 py-3 rounded-2xl bg-slate-900/80 border border-slate-800 text-slate-200 text-left flex items-center justify-between"
              >
                <span>Industry Solutions</span>
                <ArrowRight className="w-4 h-4 text-slate-500" />
              </button>

              <button
                onClick={() => scrollToSection('features')}
                className="w-full min-h-[48px] px-4 py-3 rounded-2xl bg-slate-900/80 border border-slate-800 text-slate-200 text-left flex items-center justify-between"
              >
                <span>Features Matrix</span>
                <ArrowRight className="w-4 h-4 text-slate-500" />
              </button>

              <button
                onClick={() => scrollToSection('developers')}
                className="w-full min-h-[48px] px-4 py-3 rounded-2xl bg-slate-900/80 border border-slate-800 text-slate-200 text-left flex items-center justify-between"
              >
                <span>Developer API</span>
                <ArrowRight className="w-4 h-4 text-slate-500" />
              </button>

              <button
                onClick={() => scrollToSection('security')}
                className="w-full min-h-[48px] px-4 py-3 rounded-2xl bg-slate-900/80 border border-slate-800 text-slate-200 text-left flex items-center justify-between"
              >
                <span>Security Controls</span>
                <ArrowRight className="w-4 h-4 text-slate-500" />
              </button>

              <button
                onClick={() => scrollToSection('pricing')}
                className="w-full min-h-[48px] px-4 py-3 rounded-2xl bg-slate-900/80 border border-slate-800 text-slate-200 text-left flex items-center justify-between"
              >
                <span>Pricing Plans</span>
                <ArrowRight className="w-4 h-4 text-slate-500" />
              </button>

              <button
                onClick={() => scrollToSection('faq')}
                className="w-full min-h-[48px] px-4 py-3 rounded-2xl bg-slate-900/80 border border-slate-800 text-slate-200 text-left flex items-center justify-between"
              >
                <span>Enterprise FAQ</span>
                <ArrowRight className="w-4 h-4 text-slate-500" />
              </button>
            </div>

            {/* Quick Links Footer */}
            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-2 gap-3 text-xs text-slate-400">
              <Link href="/security" onClick={() => setMobileMenuOpen(false)} className="p-3 rounded-xl bg-slate-900/50 border border-slate-800 flex items-center gap-2">
                <Lock className="w-4 h-4 text-blue-400" />
                <span>Security</span>
              </Link>
              <Link href="/responsible-ai" onClick={() => setMobileMenuOpen(false)} className="p-3 rounded-xl bg-slate-900/50 border border-slate-800 flex items-center gap-2">
                <Cpu className="w-4 h-4 text-cyan-400" />
                <span>Ethics</span>
              </Link>
              <Link href="/privacy" onClick={() => setMobileMenuOpen(false)} className="p-3 rounded-xl bg-slate-900/50 border border-slate-800 flex items-center gap-2">
                <FileText className="w-4 h-4 text-emerald-400" />
                <span>Privacy</span>
              </Link>
              <Link href="/trust" onClick={() => setMobileMenuOpen(false)} className="p-3 rounded-xl bg-slate-900/50 border border-slate-800 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-indigo-400" />
                <span>Trust</span>
              </Link>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
