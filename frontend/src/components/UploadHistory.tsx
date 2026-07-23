'use client';

import React from 'react';
import { Database, FileCheck, ExternalLink, ShieldCheck, Clock, Layers } from 'lucide-react';
import { UploadRecord } from '@/lib/supabase';

interface UploadHistoryProps {
  uploadHistory: UploadRecord[];
}

export const UploadHistory: React.FC<UploadHistoryProps> = ({ uploadHistory }) => {
  // Pre-seeded demo upload items for hackathon presentation
  const demoItems: UploadRecord[] = [
    {
      id: 'demo-item-1',
      filename: 'political_rally_deepfake_test.jpg',
      public_url: 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=400&q=80',
      size_bytes: 428000,
      format: 'jpg',
      created_at: new Date(Date.now() - 3600000).toISOString(),
      storage_provider: 'supabase_cloud',
      ai_analysis_verdict: 'Deepfake Signal Detected',
      deepfake_probability: 88.4
    },
    {
      id: 'demo-item-2',
      filename: 'official_government_press_release.png',
      public_url: 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=400&q=80',
      size_bytes: 812000,
      format: 'png',
      created_at: new Date(Date.now() - 7200000).toISOString(),
      storage_provider: 'supabase_cloud',
      ai_analysis_verdict: 'Authentic Image',
      deepfake_probability: 12.1
    },
    {
      id: 'demo-item-3',
      filename: 'breaking_news_infographic.webp',
      public_url: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400&q=80',
      size_bytes: 310000,
      format: 'webp',
      created_at: new Date(Date.now() - 10800000).toISOString(),
      storage_provider: 'supabase_cloud',
      ai_analysis_verdict: 'Needs Context',
      deepfake_probability: 44.0
    }
  ];

  const allItems = [...uploadHistory, ...demoItems];

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      
      {/* Header Banner */}
      <div className="glass-card p-6 rounded-2xl border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center space-x-3">
          <div className="p-2.5 bg-sky-500/10 text-sky-400 rounded-xl border border-sky-500/20">
            <Database className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-white tracking-tight">Supabase Upload & Analysis History</h2>
            <p className="text-xs text-slate-400">Stored in PostgreSQL table `media_uploads` & Supabase Storage bucket `truthlens-uploads`.</p>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <span className="px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5" />
            {allItems.length} Saved Records
          </span>
        </div>
      </div>

      {/* History Table / Card List */}
      <div className="glass-card rounded-2xl border border-slate-800 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-900/80 border-b border-slate-800 text-slate-400 font-semibold uppercase tracking-wider">
              <tr>
                <th className="p-4">Media Preview & Filename</th>
                <th className="p-4">Format</th>
                <th className="p-4">Size</th>
                <th className="p-4">AI Deepfake Score</th>
                <th className="p-4">Storage Provider</th>
                <th className="p-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-slate-300">
              {allItems.map((item) => (
                <tr key={item.id} className="hover:bg-slate-900/40 transition">
                  
                  {/* Preview & Filename */}
                  <td className="p-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-lg overflow-hidden bg-slate-950 border border-slate-800 shrink-0">
                        <img src={item.public_url} alt={item.filename} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <p className="font-semibold text-white max-w-xs truncate">{item.filename}</p>
                        <p className="text-[11px] text-slate-500 flex items-center space-x-1 mt-0.5">
                          <Clock className="w-3 h-3" />
                          <span>{new Date(item.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                        </p>
                      </div>
                    </div>
                  </td>

                  {/* Format Badge */}
                  <td className="p-4">
                    <span className="uppercase px-2.5 py-1 bg-slate-800 text-sky-400 font-mono font-bold rounded border border-slate-700">
                      {item.format}
                    </span>
                  </td>

                  {/* Size */}
                  <td className="p-4 font-mono text-slate-400">
                    {(item.size_bytes / 1024).toFixed(1)} KB
                  </td>

                  {/* AI Deepfake Score */}
                  <td className="p-4">
                    <div className="flex items-center space-x-2">
                      <span className={`font-mono font-bold ${
                        (item.deepfake_probability || 20) > 50 ? 'text-red-400' : 'text-emerald-400'
                      }`}>
                        {item.deepfake_probability || 24.0}%
                      </span>
                      <span className={`px-2 py-0.5 rounded text-[10px] font-semibold ${
                        (item.deepfake_probability || 20) > 50 ? 'bg-red-500/10 text-red-400' : 'bg-emerald-500/10 text-emerald-400'
                      }`}>
                        {item.ai_analysis_verdict || 'Scanned'}
                      </span>
                    </div>
                  </td>

                  {/* Storage Provider */}
                  <td className="p-4">
                    <span className="px-2.5 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[11px] font-semibold rounded-md">
                      Supabase PostgreSQL
                    </span>
                  </td>

                  {/* Action Link */}
                  <td className="p-4 text-right">
                    <a
                      href={item.public_url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition"
                    >
                      <ExternalLink className="w-3.5 h-3.5 text-sky-400" />
                      <span>Open URL</span>
                    </a>
                  </td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};
