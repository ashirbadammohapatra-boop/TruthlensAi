'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const SpotlightBackground: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#030712] text-slate-100 overflow-x-hidden selection:bg-blue-500 selection:text-white font-sans">
      
      {/* 1. Interactive Mouse Radial Spotlight */}
      <div
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
        style={{
          background: `radial-gradient(650px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.08), transparent 80%)`
        }}
      />

      {/* 2. Floating Animated Aurora Glowing Blobs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        
        {/* Blob 1: Electric Blue Top Left */}
        <motion.div
          animate={{
            x: [0, 40, -30, 0],
            y: [0, -50, 30, 0],
            scale: [1, 1.2, 0.9, 1]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-32 -left-32 w-[550px] h-[550px] rounded-full bg-blue-600/15 blur-[140px]"
        />

        {/* Blob 2: Cyan Top Right */}
        <motion.div
          animate={{
            x: [0, -60, 40, 0],
            y: [0, 40, -50, 0],
            scale: [1, 1.15, 0.95, 1]
          }}
          transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 -right-32 w-[500px] h-[500px] rounded-full bg-cyan-500/10 blur-[130px]"
        />

        {/* Blob 3: Indigo Center Bottom */}
        <motion.div
          animate={{
            x: [0, 50, -40, 0],
            y: [0, -40, 50, 0],
            scale: [1, 1.25, 0.85, 1]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-10 left-1/3 w-[600px] h-[600px] rounded-full bg-indigo-600/10 blur-[160px]"
        />

        {/* Subtle Cyber Perspective Grid */}
        <div 
          className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#3b82f6_1px,transparent_1px),linear-gradient(to_bottom,#3b82f6_1px,transparent_1px)] bg-[size:4rem_4rem]" 
        />
      </div>

      {/* Children Layer */}
      <div className="relative z-10">{children}</div>

    </div>
  );
};
