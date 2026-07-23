'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Brain, CheckCircle2, AlertTriangle, ShieldAlert, ChevronDown, ChevronUp, Sun, Eye, Layers, UserCheck, Box, Info } from 'lucide-react';

export interface OpenAIVisionData {
  assessment: string;
  confidence: number;
  summary: string;
  explanation: string;
  reasoning: {
    lighting: string;
    textures: string;
    shadows: string;
    reflections: string;
    face_realism: string;
    object_consistency: string;
    background: string;
    manipulation_indicators: string;
  };
  status_indicators: {
    lighting: 'green' | 'yellow' | 'red' | string;
    textures: 'green' | 'yellow' | 'red' | string;
    shadows: 'green' | 'yellow' | 'red' | string;
    reflections: 'green' | 'yellow' | 'red' | string;
    face_realism: 'green' | 'yellow' | 'red' | string;
    object_consistency: 'green' | 'yellow' | 'red' | string;
    background: 'green' | 'yellow' | 'red' | string;
    manipulation_indicators: 'green' | 'yellow' | 'red' | string;
  };
  source?: string;
}

interface OpenAIVisionCardProps {
  data: OpenAIVisionData;
  isLoading?: boolean;
}

export const OpenAIVisionCard: React.FC<OpenAIVisionCardProps> = ({ data, isLoading }) => {
  const [expandedSection, setExpandedSection] = useState<string | null>('lighting');

  const toggleSection = (key: string) => {
    setExpandedSection(expandedSection === key ? null : key);
  };

  const getStatusBadge = (color: string) => {
    switch (color?.toLowerCase()) {
      case 'green':
        return <span className="px-2.5 py-0.5 text-[10px] font-extrabold uppercase rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">Consistent (Pass)</span>;
      case 'yellow':
        return <span className="px-2.5 py-0.5 text-[10px] font-extrabold uppercase rounded bg-amber-500/20 text-amber-400 border border-amber-500/30">Needs Review</span>;
      case 'red':
        return <span className="px-2.5 py-0.5 text-[10px] font-extrabold uppercase rounded bg-red-500/20 text-red-400 border border-red-500/30">Flagged Anomaly</span>;
      default:
        return <span className="px-2.5 py-0.5 text-[10px] font-extrabold uppercase rounded bg-slate-800 text-slate-300">Verified</span>;
    }
  };

  if (isLoading) {
    return (
      <div className="glass-card p-6 rounded-3xl border border-blue-500/30 bg-slate-950/80 animate-pulse space-y-4">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-blue-500/20" />
          <div className="space-y-1">
            <div className="w-36 h-4 bg-slate-800 rounded" />
            <div className="w-24 h-3 bg-slate-900 rounded" />
          </div>
        </div>
        <div className="h-20 bg-slate-900/60 rounded-2xl" />
      </div>
    );
  }

  const isAuthentic = data.assessment.toLowerCase().includes('authentic');

  const reasoningItems = [
    { key: 'lighting', label: 'Lighting Analysis', icon: <Sun className="w-4 h-4 text-amber-400" /> },
    { key: 'textures', label: 'Texture Quality', icon: <Layers className="w-4 h-4 text-sky-400" /> },
    { key: 'shadows', label: 'Shadow Consistency', icon: <Sun className="w-4 h-4 text-indigo-400" /> },
    { key: 'reflections', label: 'Reflection Analysis', icon: <Eye className="w-4 h-4 text-cyan-400" /> },
    { key: 'face_realism', label: 'Face Realism', icon: <UserCheck className="w-4 h-4 text-emerald-400" /> },
    { key: 'object_consistency', label: 'Object Consistency', icon: <Box className="w-4 h-4 text-blue-400" /> },
    { key: 'background', label: 'Background Consistency', icon: <Layers className="w-4 h-4 text-purple-400" /> },
    { key: 'manipulation_indicators', label: 'Possible Manipulation Indicators', icon: <AlertTriangle className="w-4 h-4 text-red-400" /> }
  ];

  return (
    <div className="w-full glass-card p-6 sm:p-8 rounded-3xl border border-blue-500/30 bg-slate-950/90 shadow-2xl space-y-6">
      
      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
        <div className="flex items-center space-x-3">
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-blue-600 via-indigo-500 to-cyan-400 p-[1.5px]">
            <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center text-blue-400">
              <Brain className="w-6 h-6" />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-black text-white tracking-tight flex items-center gap-2">
              <span>AI Expert Analysis</span>
              <span className="px-2 py-0.5 text-[9px] font-extrabold uppercase bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-md">
                GPT-4o Vision
              </span>
            </h3>
            <p className="text-xs text-slate-400">Powered by OpenAI Vision Deep Reasoning</p>
          </div>
        </div>

        <div className="flex items-center space-x-2 text-xs text-slate-400 font-mono">
          <span>Model: </span>
          <span className="text-sky-400 font-bold">{data.source || 'OpenAI Vision'}</span>
        </div>
      </div>

      {/* Primary Assessment & Confidence Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Assessment Card */}
        <div className={`p-5 rounded-2xl border space-y-2 ${
          isAuthentic
            ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300'
            : 'bg-red-500/10 border-red-500/30 text-red-300'
        }`}>
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400">AI Assessment</span>
          <div className="flex items-center space-x-2">
            {isAuthentic ? <CheckCircle2 className="w-6 h-6 text-emerald-400" /> : <ShieldAlert className="w-6 h-6 text-red-400" />}
            <h4 className="text-xl font-extrabold text-white">{data.assessment}</h4>
          </div>
        </div>

        {/* Confidence Meter */}
        <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
          <div className="flex justify-between items-center text-xs">
            <span className="font-bold uppercase tracking-wider text-slate-400">Certainty Confidence</span>
            <span className="font-mono text-blue-400 font-extrabold text-base">{data.confidence}%</span>
          </div>

          <div className="w-full h-3 bg-slate-950 rounded-full border border-slate-800 overflow-hidden p-0.5">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${data.confidence}%` }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
              className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"
            />
          </div>
        </div>

        {/* Summary Card */}
        <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 text-xs space-y-1">
          <span className="font-bold uppercase tracking-wider text-slate-400">Visual Summary</span>
          <p className="text-slate-300 leading-relaxed text-[11px] mt-1">{data.summary}</p>
        </div>

      </div>

      {/* Expandable Detailed Reasoning Accordions */}
      <div className="space-y-3">
        <h4 className="text-xs font-extrabold text-slate-300 uppercase tracking-wider">Detailed Visual Reasoning Categories</h4>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {reasoningItems.map((item) => {
            const isExpanded = expandedSection === item.key;
            const explanationText = (data.reasoning as any)?.[item.key] || 'Analysis consistent.';
            const statusColor = (data.status_indicators as any)?.[item.key] || 'green';

            return (
              <div
                key={item.key}
                className="rounded-2xl bg-slate-900/60 border border-slate-800/80 overflow-hidden transition"
              >
                <button
                  onClick={() => toggleSection(item.key)}
                  className="w-full p-4 flex items-center justify-between text-xs text-left hover:bg-slate-900/90 transition"
                >
                  <div className="flex items-center space-x-2.5">
                    {item.icon}
                    <span className="font-bold text-slate-200">{item.label}</span>
                  </div>

                  <div className="flex items-center space-x-3">
                    {getStatusBadge(statusColor)}
                    {isExpanded ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
                  </div>
                </button>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-4 pb-4 text-xs text-slate-300 leading-relaxed border-t border-slate-800/60 pt-3 bg-slate-950/40"
                    >
                      {explanationText}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>

      {/* Natural Language AI Explanation */}
      <div className="p-5 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-xs text-blue-200 space-y-1.5 leading-relaxed">
        <span className="font-bold text-white flex items-center gap-1.5">
          <Sparkles className="w-4 h-4 text-cyan-400" />
          OpenAI Synthesis Explanation:
        </span>
        <p className="text-[11px]">{data.explanation}</p>
      </div>

      {/* Limitations Disclaimer */}
      <div className="p-3 rounded-xl bg-slate-900/50 border border-slate-800 text-[11px] text-slate-400 flex items-center space-x-2">
        <Info className="w-4 h-4 text-slate-500 shrink-0" />
        <span>
          <strong className="text-slate-300">Disclaimer:</strong> AI analysis provides probabilistic assessments and should not be treated as definitive proof of authenticity.
        </span>
      </div>

    </div>
  );
};
