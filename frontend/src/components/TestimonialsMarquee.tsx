'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

export const TestimonialsMarquee: React.FC = () => {
  const testimonials = [
    {
      name: 'Dr. Elena Rostova',
      role: 'Chief Editor, Global Newsroom',
      text: 'TruthLens AI has become our mandatory verification step before publishing any viral social media image or breaking claim. Instant, flawless precision.',
      rating: 5
    },
    {
      name: 'Marcus Vance',
      role: 'Head of Threat Intel, CyberShield',
      text: 'The ELA thermal heatmaps combined with Hugging Face model classification give our security analysts unprecedented visibility into AI deepfakes.',
      rating: 5
    },
    {
      name: 'Sarah Chen',
      role: 'Senior Fact-Checker, Reuters Alliance',
      text: 'The 1-click PDF certificate export saves hours during live election monitoring and misinformation tracking.',
      rating: 5
    },
    {
      name: 'Alex Rivera',
      role: 'Lead AI Engineer, Enterprise Vision',
      text: 'FastAPI backend responses in under 15ms coupled with Supabase cloud history make this the most complete trust platform on the market.',
      rating: 5
    }
  ];

  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
        <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
          Trusted by <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Newsrooms & Security Analysts</span>
        </h2>
      </div>

      {/* Marquee Track */}
      <div className="relative w-full overflow-hidden flex">
        
        {/* Gradient Fade Edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#030712] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#030712] to-transparent z-10 pointer-events-none" />

        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          className="flex space-x-6 shrink-0"
        >
          {duplicatedTestimonials.map((item, idx) => (
            <div
              key={idx}
              className="w-[380px] sm:w-[420px] shrink-0 p-6 rounded-3xl bg-slate-950/70 border border-slate-800/80 backdrop-blur-xl space-y-4 shadow-xl hover:border-blue-500/30 transition duration-300"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-1 text-amber-400">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <Quote className="w-5 h-5 text-blue-500/30" />
              </div>

              <p className="text-xs text-slate-300 leading-relaxed italic">"{item.text}"</p>

              <div className="pt-2 border-t border-slate-800/60">
                <p className="font-bold text-white text-xs">{item.name}</p>
                <p className="text-[11px] text-slate-500">{item.role}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
