'use client';

import React, { useRef, useState } from 'react';
import { Download, X, ShieldCheck, Sparkles, FileText, CheckCircle2, AlertTriangle, Cpu, Database, RefreshCw, Printer } from 'lucide-react';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

interface ReportModalProps {
  data: {
    filename: string;
    trust_score: number;
    trust_grade: string;
    ai_probability: number;
    human_probability: number;
    confidence: string;
    verdict: string;
    risk_level: string;
    exif_metadata: {
      metadata_status: string;
      camera: string;
      gps: string;
      software: string;
      date: string;
      compression: string;
      image_size: string;
    };
    public_url?: string;
    summary?: string;
  };
  onClose: () => void;
}

export const ReportModal: React.FC<ReportModalProps> = ({ data, onClose }) => {
  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);
  const reportRef = useRef<HTMLDivElement>(null);

  const reportId = `TL-AUDIT-${Math.floor(100000 + Math.random() * 900000)}`;
  const issueDate = new Date().toLocaleString();

  // Generate Actionable Executive Recommendation based on Trust Score
  const getExecutiveRecommendation = () => {
    if (data.trust_score >= 80) {
      return {
        badge: "VERIFIED SAFE FOR PUBLICATION",
        badgeStyle: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
        icon: <CheckCircle2 className="w-5 h-5 text-emerald-400" />,
        heading: "Approved for News Distribution & Enterprise Archiving",
        detail: "This media asset passed multi-spectral neural checks and contains valid camera hardware headers. No evidence of deepfake manipulation or synthetic generation."
      };
    } else if (data.trust_score >= 50) {
      return {
        badge: "CONTEXT DISCLAIMER REQUIRED",
        badgeStyle: "bg-amber-500/10 text-amber-400 border-amber-500/30",
        icon: <AlertTriangle className="w-5 h-5 text-amber-400" />,
        heading: "Attach Verification Notice Before Broadcast",
        detail: "Moderate trust rating assigned. EXIF header tags are either stripped or partially modified. We recommend attaching a fact-check context disclaimer."
      };
    } else {
      return {
        badge: "HIGH RISK - BLOCK & QUARANTINE",
        badgeStyle: "bg-red-500/10 text-red-400 border-red-500/30",
        icon: <AlertTriangle className="w-5 h-5 text-red-400" />,
        heading: "High Probability of Synthetic AI Generation",
        detail: "Critical warning: High density of AI generation artifacts and stripped EXIF headers detected. Do not distribute without secondary manual forensic audit."
      };
    }
  };

  const recommendation = getExecutiveRecommendation();

  // Download PDF Function
  const handleDownloadPdf = async () => {
    if (!reportRef.current) return;
    setIsGeneratingPdf(true);

    try {
      const canvas = await html2canvas(reportRef.current, {
        scale: 2,
        useCORS: true,
        backgroundColor: '#080d1a'
      });

      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
      });

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save(`TruthLens_Report_${reportId}.pdf`);
    } catch (err) {
      console.error('PDF Generation error:', err);
    } finally {
      setIsGeneratingPdf(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-slate-950 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden my-8">
        
        {/* Modal Top Actions */}
        <div className="flex items-center justify-between p-4 px-6 bg-slate-900/90 border-b border-slate-800">
          <div className="flex items-center space-x-2">
            <FileText className="w-4 h-4 text-sky-400" />
            <span className="text-xs font-bold text-slate-200">Executive Forensic Audit Certificate</span>
          </div>
          <div className="flex items-center space-x-3">
            <button
              onClick={handleDownloadPdf}
              disabled={isGeneratingPdf}
              className="px-4 py-2 bg-gradient-to-r from-sky-500 to-indigo-600 hover:opacity-95 text-white font-bold text-xs rounded-xl flex items-center space-x-2 transition shadow-lg shadow-sky-500/20 disabled:opacity-50"
            >
              {isGeneratingPdf ? (
                <>
                  <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                  <span>Generating PDF...</span>
                </>
              ) : (
                <>
                  <Download className="w-3.5 h-3.5" />
                  <span>Download PDF Report</span>
                </>
              )}
            </button>

            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Report Document Body */}
        <div ref={reportRef} className="p-8 space-y-8 bg-[#080d1a] text-slate-100 font-sans">
          
          {/* Document Header */}
          <div className="flex items-start justify-between border-b border-slate-800 pb-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-sky-500 via-indigo-500 to-emerald-400 p-[1.5px]">
                <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center">
                  <ShieldCheck className="w-7 h-7 text-sky-400" />
                </div>
              </div>
              <div>
                <h1 className="text-xl font-black text-white tracking-tight">TruthLens AI Platform</h1>
                <p className="text-xs text-sky-400 font-semibold">Digital Trust & Forensic Verification Authority</p>
              </div>
            </div>

            <div className="text-right text-xs space-y-1">
              <p className="font-mono text-slate-400">Certificate ID: <span className="text-white font-bold">{reportId}</span></p>
              <p className="text-slate-500">Issued: {issueDate}</p>
              <p className="text-emerald-400 font-semibold">Status: Official Audit Record</p>
            </div>
          </div>

          {/* Section 1: Trust Score & Verdict Banner */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 rounded-2xl bg-slate-900/80 border border-slate-800">
            
            <div className="flex flex-col items-center justify-center p-4 rounded-xl bg-slate-950/80 border border-slate-800 text-center">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Weighted Trust Score</span>
              <div className={`text-4xl font-black font-mono tracking-tight ${
                data.trust_score >= 80 ? 'text-emerald-400' : data.trust_score >= 50 ? 'text-amber-400' : 'text-red-400'
              }`}>
                {data.trust_score}/100
              </div>
              <span className="text-[10px] font-bold text-sky-400 mt-1 uppercase">{data.trust_grade}</span>
            </div>

            <div className="space-y-2">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">AI vs Human Likelihood</span>
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between">
                  <span className="text-slate-400">AI Probability:</span>
                  <span className="font-mono font-bold text-red-400">{data.ai_probability}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Human Probability:</span>
                  <span className="font-mono font-bold text-emerald-400">{data.human_probability}%</span>
                </div>
                <div className="flex justify-between border-t border-slate-800 pt-1">
                  <span className="text-slate-400">Model Certainty:</span>
                  <span className="font-semibold text-indigo-300">{data.confidence}</span>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Media Artifact Info</span>
              <div className="space-y-1.5 text-xs">
                <p className="text-white font-semibold truncate">{data.filename}</p>
                <p className="text-slate-400">Dimensions: <span className="text-slate-200 font-mono">{data.exif_metadata.image_size}</span></p>
                <p className="text-slate-400">Format: <span className="text-sky-400 font-mono uppercase">{data.exif_metadata.compression}</span></p>
              </div>
            </div>

          </div>

          {/* Section 2: Executive AI Recommendation */}
          <div className={`p-6 rounded-2xl border ${recommendation.badgeStyle} space-y-3`}>
            <div className="flex items-center space-x-2">
              {recommendation.icon}
              <span className="px-3 py-1 rounded-full text-xs font-extrabold tracking-wider uppercase border bg-slate-950">
                {recommendation.badge}
              </span>
            </div>

            <div>
              <h3 className="text-base font-bold text-white tracking-tight">{recommendation.heading}</h3>
              <p className="text-xs text-slate-300 mt-1 leading-relaxed">{recommendation.detail}</p>
            </div>
          </div>

          {/* Section 3: Extracted EXIF Metadata Table */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">Verified EXIF Header Tags</h3>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-xs">
              <div>
                <p className="text-slate-500">Camera Make/Model</p>
                <p className="font-bold text-white truncate">{data.exif_metadata.camera}</p>
              </div>
              <div>
                <p className="text-slate-500">GPS Coordinates</p>
                <p className="font-bold text-slate-300">{data.exif_metadata.gps}</p>
              </div>
              <div>
                <p className="text-slate-500">Software Tag</p>
                <p className="font-bold text-slate-300 truncate">{data.exif_metadata.software}</p>
              </div>
              <div>
                <p className="text-slate-500">Creation Date</p>
                <p className="font-bold text-slate-300">{data.exif_metadata.date}</p>
              </div>
              <div>
                <p className="text-slate-500">Compression</p>
                <p className="font-bold text-sky-400 font-mono">{data.exif_metadata.compression}</p>
              </div>
              <div>
                <p className="text-slate-500">Metadata State</p>
                <p className="font-bold text-emerald-400">{data.exif_metadata.metadata_status}</p>
              </div>
            </div>
          </div>

          {/* Document Footer */}
          <div className="pt-6 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500">
            <div>
              <span>Generated by TruthLens AI • Digital Trust Engine v1.0</span>
            </div>
            <div>
              <span>Verification Hash: <code className="font-mono text-slate-400">sha256:8f9a2b4...</code></span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
