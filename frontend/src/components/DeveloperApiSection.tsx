'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Code, Copy, Check, Cpu, Zap, ShieldCheck } from 'lucide-react';

export const DeveloperApiSection: React.FC = () => {
  const [activeLang, setActiveLang] = useState<'python' | 'javascript' | 'curl'>('python');
  const [copied, setCopied] = useState(false);

  const codeSnippets = {
    python: `import requests

url = "https://api.truthlens.ai/api/analyze-image"
headers = {"Authorization": "Bearer tl_live_secret_key_84920"}

with open("evidence_photo.jpg", "rb") as image_file:
    files = {"file": image_file}
    response = requests.post(url, headers=headers, files=files)

result = response.json()
print(f"Trust Score: {result['trust_score']}/100")
print(f"Verdict: {result['verdict']}")`,

    javascript: `const formData = new FormData();
formData.append('file', imageFile);

const response = await fetch('https://api.truthlens.ai/api/analyze-image', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer tl_live_secret_key_84920'
  },
  body: formData
});

const result = await response.json();
console.log(\`Trust Score: \${result.trust_score}/100\`);
console.log(\`Verdict: \${result.verdict}\`);`,

    curl: `curl -X POST "https://api.truthlens.ai/api/analyze-image" \\
  -H "Authorization: Bearer tl_live_secret_key_84920" \\
  -F "file=@evidence_photo.jpg"`
  };

  const copyCode = () => {
    navigator.clipboard.writeText(codeSnippets[activeLang]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="developers" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-xs text-cyan-400 font-bold uppercase tracking-wider">
            <Terminal className="w-3.5 h-3.5" />
            <span>Developer Platform</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Integrate Verification via <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">REST API</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-400 font-medium">
            Programmatically embed multi-spectral image, deepfake video, and synthetic audio analysis into your application pipeline with sub-15ms response latency.
          </p>
        </div>

        {/* Code Snippet & Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: API Features */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-6 rounded-3xl bg-slate-950/70 border border-slate-800/80 backdrop-blur-xl space-y-2">
              <div className="flex items-center space-x-3 text-blue-400">
                <Zap className="w-5 h-5" />
                <h3 className="text-base font-extrabold text-white">Sub-15ms Execution Latency</h3>
              </div>
              <p className="text-xs text-slate-400">Parallelized async micro-threads execute hash checks, EXIF analysis, and neural model ensembles concurrently.</p>
            </div>

            <div className="p-6 rounded-3xl bg-slate-950/70 border border-slate-800/80 backdrop-blur-xl space-y-2">
              <div className="flex items-center space-x-3 text-cyan-400">
                <Cpu className="w-5 h-5" />
                <h3 className="text-base font-extrabold text-white">OpenAPI 3.0 Specification</h3>
              </div>
              <p className="text-xs text-slate-400">Strictly typed JSON responses containing trust scores, confidence intervals, and evidence breakdown arrays.</p>
            </div>

            <div className="p-6 rounded-3xl bg-slate-950/70 border border-slate-800/80 backdrop-blur-xl space-y-2">
              <div className="flex items-center space-x-3 text-emerald-400">
                <ShieldCheck className="w-5 h-5" />
                <h3 className="text-base font-extrabold text-white">Rate-Limited & Encrypted</h3>
              </div>
              <p className="text-xs text-slate-400">TLS 1.3 encryption in transit with custom rate-limiting rules and API token management.</p>
            </div>

          </div>

          {/* Right Column: Code Terminal Window */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-slate-800 bg-slate-950 shadow-2xl overflow-hidden font-mono text-xs">
              
              {/* Terminal Header */}
              <div className="px-5 py-4 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="text-[11px] text-slate-400 font-bold ml-2">POST /api/analyze-image</span>
                </div>

                {/* Language Switcher Tabs */}
                <div className="flex items-center space-x-2">
                  {(['python', 'javascript', 'curl'] as const).map((lang) => (
                    <button
                      key={lang}
                      onClick={() => setActiveLang(lang)}
                      className={`px-3 py-1 rounded-lg text-[10px] font-bold uppercase transition ${
                        activeLang === lang ? 'bg-blue-500 text-white' : 'text-slate-400 hover:text-white bg-slate-800/60'
                      }`}
                    >
                      {lang}
                    </button>
                  ))}
                  
                  <button
                    onClick={copyCode}
                    className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition"
                    title="Copy snippet"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              {/* Code Snippet Box */}
              <div className="p-6 text-slate-300 leading-relaxed overflow-x-auto">
                <pre>{codeSnippets[activeLang]}</pre>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
