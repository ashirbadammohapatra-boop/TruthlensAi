'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Menu, X, Sparkles, Lock, FileText, Cpu, ShieldCheck, Server } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

interface FloatingNavbarProps {
  activeTab?: 'media' | 'factcheck';
  setActiveTab?: (tab: 'media' | 'factcheck') => void;
}

export const FloatingNavbar: React.FC<FloatingNavbarProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  const navLinks = [
    { label: 'Overview', href: '/' },
    { label: 'Live Scanner', href: '/verify' },
    { label: 'Dashboard', href: '/dashboard' },
    { label: 'Solutions', href: '/solutions' },
    { label: 'Technology', href: '/technology' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Resources', href: '/resources' },
    { label: 'About', href: '/about' },
    { label: 'Admin', href: '/admin' }
  ];

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
              ? 'py-2.5 px-4 sm:px-6 bg-[#030712]/95 border-blue-500/30 shadow-[0_8px_32px_rgba(0,0,0,0.8)] shadow-blue-500/10'
              : 'py-3 px-4 sm:px-8 bg-[#030712]/80 border-slate-800/80 shadow-2xl'
          }`}
        >
          <div className="flex items-center justify-between">
            
            {/* Official Brand Logo Left */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative h-10 w-36 sm:h-11 sm:w-44 transition-transform duration-300 group-hover:scale-[1.02] shrink-0">
                <Image
                  src="/truthlens-logo.png"
                  alt="TruthLens AI Official Logo"
                  fill
                  className="object-contain object-left"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1 bg-slate-950/80 p-1.5 rounded-full border border-slate-800/80 text-xs font-semibold">
              {navLinks.slice(0, 7).map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-3.5 py-1.5 rounded-full transition-all ${
                      isActive
                        ? 'bg-gradient-to-r from-blue-600/40 to-cyan-500/30 text-white border border-blue-500/50 shadow-sm'
                        : 'text-slate-300 hover:text-white hover:bg-slate-900/60'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Right Action & Mobile Toggle */}
            <div className="flex items-center space-x-2 sm:space-x-3">
              <Link
                href="/verify"
                className="relative group px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-xl sm:rounded-full bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-400 hover:opacity-95 text-white font-extrabold text-[11px] sm:text-xs flex items-center space-x-1.5 shadow-lg shadow-blue-500/25 border border-blue-400/30 transition overflow-hidden touch-target"
              >
                <span className="relative z-10 flex items-center gap-1.5">
                  <span className="hidden xs:inline">Verify Media</span>
                  <span className="xs:hidden">Verify</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>

              {/* Mobile Hamburger Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle Navigation Menu"
                className="lg:hidden p-2 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-white touch-target flex items-center justify-center"
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
            className="fixed inset-0 z-40 lg:hidden bg-slate-950/95 backdrop-blur-2xl flex flex-col pt-24 px-6 pb-8 space-y-6 overflow-y-auto"
          >
            {/* Top Header */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-800/80">
              <div className="relative h-10 w-36">
                <Image
                  src="/truthlens-logo.png"
                  alt="TruthLens AI Official Logo"
                  fill
                  className="object-contain object-left"
                />
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
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`w-full min-h-[48px] px-4 py-3 rounded-2xl border text-left flex items-center justify-between transition ${
                    pathname === link.href
                      ? 'bg-blue-600/20 border-blue-500/40 text-blue-300'
                      : 'bg-slate-900/80 border-slate-800 text-slate-200 hover:text-white'
                  }`}
                >
                  <span>{link.label}</span>
                  <ArrowRight className="w-4 h-4 text-slate-500" />
                </Link>
              ))}

              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full min-h-[48px] px-4 py-3 rounded-2xl bg-gradient-to-r from-blue-600/20 to-cyan-500/20 border border-blue-500/40 text-cyan-300 text-left flex items-center justify-between"
              >
                <span>Book Enterprise Demo</span>
                <ArrowRight className="w-4 h-4 text-cyan-400" />
              </Link>
            </div>

            {/* Quick Links Footer */}
            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-2 gap-3 text-xs text-slate-400">
              <Link href="/security" onClick={() => setMobileMenuOpen(false)} className="p-3 rounded-xl bg-slate-900/50 border border-slate-800 flex items-center gap-2">
                <Lock className="w-4 h-4 text-blue-400" />
                <span>Security</span>
              </Link>
              <Link href="/admin" onClick={() => setMobileMenuOpen(false)} className="p-3 rounded-xl bg-slate-900/50 border border-slate-800 flex items-center gap-2">
                <Server className="w-4 h-4 text-purple-400" />
                <span>Admin</span>
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
