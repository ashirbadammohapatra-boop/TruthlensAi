'use client';

import React, { useState } from 'react';
import { Eye, Layers, Sliders, Sparkles, AlertCircle, Info } from 'lucide-react';

interface HeatmapViewerProps {
  originalUrl: string;
  heatmapBase64: string;
}

export const HeatmapViewer: React.FC<HeatmapViewerProps> = ({ originalUrl, heatmapBase64 }) => {
  const [sliderPos, setSliderPos] = useState(50);
  const [viewMode, setViewMode] = useState<'slider' | 'side' | 'heatmap'>('slider');

  const displayHeatmap = heatmapBase64 || originalUrl;

  return (
    <div className="w-full space-y-4 glass-card p-6 rounded-3xl border border-slate-800 bg-slate-950/80">
      
      {/* Header & Mode Controls */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
        <div>
          <h3 className="text-base font-bold text-white flex items-center space-x-2">
            <Sparkles className="w-4 h-4 text-sky-400" />
            <span>Forensic Manipulation Heatmap (Before vs After)</span>
          </h3>
          <p className="text-xs text-slate-400">Error Level Analysis (ELA) thermal mapping highlights altered or synthetic pixel clusters.</p>
        </div>

        {/* View Mode Toggle */}
        <div className="flex items-center space-x-1 bg-slate-900 p-1 rounded-xl border border-slate-800 text-xs">
          <button
            onClick={() => setViewMode('slider')}
            className={`px-3 py-1.5 rounded-lg font-semibold flex items-center space-x-1.5 transition ${
              viewMode === 'slider' ? 'bg-sky-500 text-white shadow' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Sliders className="w-3.5 h-3.5" />
            <span>Before / After Slider</span>
          </button>

          <button
            onClick={() => setViewMode('side')}
            className={`px-3 py-1.5 rounded-lg font-semibold flex items-center space-x-1.5 transition ${
              viewMode === 'side' ? 'bg-sky-500 text-white shadow' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Side-by-Side</span>
          </button>

          <button
            onClick={() => setViewMode('heatmap')}
            className={`px-3 py-1.5 rounded-lg font-semibold flex items-center space-x-1.5 transition ${
              viewMode === 'heatmap' ? 'bg-sky-500 text-white shadow' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Heatmap Only</span>
          </button>
        </div>
      </div>

      {/* Mode 1: Interactive Before / After Comparison Slider */}
      {viewMode === 'slider' && (
        <div className="relative w-full h-[400px] sm:h-[480px] rounded-2xl overflow-hidden select-none border border-slate-800 bg-slate-950">
          
          {/* Layer 1: After (Heatmap Overlay - Full Background) */}
          <img
            src={displayHeatmap}
            alt="Forensic ELA Heatmap"
            className="absolute inset-0 w-full h-full object-contain"
          />

          {/* Layer 2: Before (Original Image - Clipped by Slider) */}
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ width: `${sliderPos}%` }}
          >
            <img
              src={originalUrl}
              alt="Original Upload"
              className="absolute inset-0 w-full h-full object-contain max-w-none"
              style={{ width: reportRefWidth() }}
            />
          </div>

          {/* Slider Control Line & Handle */}
          <div
            className="absolute top-0 bottom-0 w-1 bg-sky-400 cursor-ew-resize z-20 shadow-lg shadow-sky-500/50"
            style={{ left: `${sliderPos}%` }}
          >
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-slate-900 border-2 border-sky-400 flex items-center justify-center text-sky-400 shadow-xl">
              <Sliders className="w-4 h-4" />
            </div>
          </div>

          {/* Range Input Overlay for Dragging */}
          <input
            type="range"
            min="0"
            max="100"
            value={sliderPos}
            onChange={(e) => setSliderPos(Number(e.target.value))}
            className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
          />

          {/* Floating Badges */}
          <div className="absolute top-4 left-4 px-3 py-1 bg-slate-950/80 backdrop-blur text-slate-200 border border-slate-800 rounded-lg text-xs font-bold z-10">
            BEFORE: Original Image
          </div>

          <div className="absolute top-4 right-4 px-3 py-1 bg-slate-950/80 backdrop-blur text-red-400 border border-slate-800 rounded-lg text-xs font-bold z-10 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
            AFTER: ELA Forensic Heatmap
          </div>
        </div>
      )}

      {/* Mode 2: Side-by-Side Comparison */}
      {viewMode === 'side' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <span className="text-xs font-bold text-slate-400 uppercase">BEFORE: Original Image</span>
            <div className="w-full h-80 rounded-2xl overflow-hidden border border-slate-800 bg-slate-950">
              <img src={originalUrl} alt="Original" className="w-full h-full object-contain" />
            </div>
          </div>

          <div className="space-y-2">
            <span className="text-xs font-bold text-red-400 uppercase">AFTER: Forensic ELA Heatmap</span>
            <div className="w-full h-80 rounded-2xl overflow-hidden border border-slate-800 bg-slate-950">
              <img src={displayHeatmap} alt="Heatmap" className="w-full h-full object-contain" />
            </div>
          </div>
        </div>
      )}

      {/* Mode 3: Heatmap Only */}
      {viewMode === 'heatmap' && (
        <div className="w-full h-[450px] rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 relative">
          <img src={displayHeatmap} alt="Heatmap Only" className="w-full h-full object-contain" />
        </div>
      )}

      {/* Thermal Heatmap Color Legend */}
      <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
        <div className="flex items-center space-x-2 text-slate-400">
          <Info className="w-4 h-4 text-sky-400" />
          <span className="font-semibold text-slate-300">Heatmap Thermal Legend:</span>
        </div>

        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1.5">
            <span className="w-3 h-3 rounded-full bg-red-500"></span>
            <span className="text-slate-200 font-medium">🔴 Red / Yellow = High Manipulation</span>
          </div>

          <div className="flex items-center space-x-1.5">
            <span className="w-3 h-3 rounded-full bg-cyan-400"></span>
            <span className="text-slate-200 font-medium">🔵 Cyan = Spectral Variance</span>
          </div>

          <div className="flex items-center space-x-1.5">
            <span className="w-3 h-3 rounded-full bg-slate-800 border border-slate-700"></span>
            <span className="text-slate-400 font-medium">Dark = Authentic</span>
          </div>
        </div>
      </div>

    </div>
  );
};

// Helper for slider width calculation
function reportRefWidth() {
  return '100%';
}
