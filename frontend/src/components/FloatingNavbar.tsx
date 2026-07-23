'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, ArrowRight, Menu, X } from 'lucide-react';

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

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 sm:px-6 pt-4 pointer-events-none"
    >
      <div
        className={`pointer-events-auto w-full max-w-6xl transition-all duration-300 rounded-full border backdrop-blur-2xl ${
          isScrolled
            ? 'py-2.5 px-6 bg-[#080e1e]/85 border-blue-500/30 shadow-[0_8px_32px_rgba(0,0,0,0.5)] shadow-blue-500/10'
            : 'py-3.5 px-8 bg-[#080e1e]/60 border-slate-800/80 shadow-2xl'
        }`}
      >
        <div className="flex items-center justify-between">
          
          {/* Production SaaS Logo Left */}
          <div
            onClick={() => scrollToSection('hero')}
            className="flex items-center space-x-3.5 cursor-pointer group"
          >
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-500 via-sky-400 to-cyan-300 p-[1.5px] transition-transform duration-300 group-hover:scale-105 shadow-md shadow-blue-500/25">
              <div className="w-full h-full bg-[#030712] rounded-[10px] flex items-center justify-center">
                <ShieldCheck className="w-5 h-5 text-blue-400 group-hover:text-cyan-300 transition-colors" />
              </div>
            </div>

            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tight text-white font-sans leading-none">
                TruthLens <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">AI</span>
              </span>
              <span className="text-[10px] font-semibold text-slate-400 tracking-wide mt-1">
                Digital Trust Platform
              </span>
            </div>
          </div>

          {/* Center Navigation Links */}
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
              onClick={() => scrollToSection('timeline')}
              className="px-4 py-2 rounded-full text-slate-300 hover:text-white hover:bg-slate-900/60 transition-all"
            >
              How It Works
            </button>

            <button
              onClick={() => scrollToSection('faq')}
              className="px-4 py-2 rounded-full text-slate-300 hover:text-white hover:bg-slate-900/60 transition-all"
            >
              FAQ
            </button>
          </nav>

          {/* Right CTA Button */}
          <div className="flex items-center space-x-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setActiveTab('media');
                scrollToSection('scanner');
              }}
              className="relative group px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-400 hover:opacity-95 text-white font-bold text-xs flex items-center space-x-2 shadow-lg shadow-blue-500/25 border border-blue-400/30 transition overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                <span>Start Verification</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-300 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Expandable Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden pt-4 pb-2 border-t border-slate-800/80 mt-3 space-y-2 text-xs font-semibold"
            >
              <button
                onClick={() => scrollToSection('hero')}
                className="w-full text-left px-4 py-2.5 rounded-xl bg-slate-900/60 text-slate-200"
              >
                Overview
              </button>
              <button
                onClick={() => {
                  setActiveTab('media');
                  scrollToSection('scanner');
                }}
                className="w-full text-left px-4 py-2.5 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20"
              >
                Live Scanner
              </button>
              <button
                onClick={() => scrollToSection('features')}
                className="w-full text-left px-4 py-2.5 rounded-xl bg-slate-900/60 text-slate-200"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection('timeline')}
                className="w-full text-left px-4 py-2.5 rounded-xl bg-slate-900/60 text-slate-200"
              >
                How It Works
              </button>
              <button
                onClick={() => scrollToSection('faq')}
                className="w-full text-left px-4 py-2.5 rounded-xl bg-slate-900/60 text-slate-200"
              >
                FAQ
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};
