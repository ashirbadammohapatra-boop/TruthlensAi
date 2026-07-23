'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, Clock, Zap, Send, CheckCircle2, ChevronDown, HelpCircle, ArrowRight, MessageSquare, Building, ShieldCheck } from 'lucide-react';

interface ContactSectionProps {
  onStartVerification: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onStartVerification }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', company: '', subject: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1200);
  };

  const contactInfo = [
    {
      icon: <Phone className="w-5 h-5 text-blue-400" />,
      title: 'Phone',
      detail: '+91 8637225579',
      sub: 'Mon-Fri, 9am-6pm IST'
    },
    {
      icon: <Mail className="w-5 h-5 text-cyan-400" />,
      title: 'Email',
      detail: 'businessashirbad@gmail.com',
      sub: 'Direct Enterprise Support'
    },
    {
      icon: <Clock className="w-5 h-5 text-emerald-400" />,
      title: 'Business Hours',
      detail: 'Monday – Friday',
      sub: '9:00 AM – 6:00 PM (IST)'
    },
    {
      icon: <Zap className="w-5 h-5 text-amber-400" />,
      title: 'Average Response Time',
      detail: 'Within 24 Hours',
      sub: '24/7 Monitoring Active'
    }
  ];

  const faqs = [
    {
      q: 'How does TruthLens AI detect AI-generated images?',
      a: 'TruthLens AI combines metadata analysis, digital image forensics, explainable AI, and multiple machine learning models to assess media authenticity. Results are confidence-based and supported by evidence.'
    },
    {
      q: 'Can TruthLens AI detect deepfake videos?',
      a: 'Yes. TruthLens AI analyzes facial consistency, temporal artifacts, lip synchronization, frame anomalies, and other forensic indicators to identify possible deepfake content.'
    },
    {
      q: 'What file formats are supported?',
      a: 'Images: JPG, JPEG, PNG, WEBP | Videos: MP4, MOV, AVI | Audio: MP3, WAV, M4A'
    },
    {
      q: 'Is my uploaded content private?',
      a: 'Yes. Uploaded files are processed securely. We do not publicly share user content, and files are handled according to our privacy policy.'
    },
    {
      q: 'Can I trust the AI results?',
      a: 'TruthLens AI provides evidence-based confidence scores rather than absolute guarantees. Reports should be considered decision-support tools alongside human review when necessary.'
    },
    {
      q: 'How accurate is TruthLens AI?',
      a: 'TruthLens AI combines multiple independent verification techniques to improve reliability. Accuracy depends on media quality, manipulation type, and available forensic evidence.'
    },
    {
      q: 'Does TruthLens AI store my files?',
      a: 'Files are securely processed. Storage duration depends on your account settings and system configuration. Users can delete uploaded reports at any time.'
    },
    {
      q: 'Can businesses integrate TruthLens AI into their products?',
      a: 'Yes. Enterprise customers can integrate media verification into their workflows using our API and custom deployment options.'
    },
    {
      q: 'Which industries use TruthLens AI?',
      a: 'Journalism, Government, Law Enforcement, Media Organizations, Cybersecurity, Financial Institutions, Educational Institutions, and Election Monitoring.'
    },
    {
      q: 'Can TruthLens AI guarantee that a file is authentic?',
      a: 'No. Digital authenticity analysis is probabilistic. TruthLens AI provides evidence-based assessments and confidence scores rather than absolute certainty.'
    }
  ];

  const scrollToContactForm = () => {
    const el = document.getElementById('contact-form-card');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        
        {/* Contact Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-xs text-blue-400 font-bold uppercase tracking-wider">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Get in Touch</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            We're Here to <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Help</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-400 font-medium">
            Questions, partnerships, enterprise solutions, or media verification requests? We're here to help.
          </p>
        </div>

        {/* 2-Column Contact Info + Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Glassmorphism Info Cards */}
          <div className="lg:col-span-5 space-y-4">
            {contactInfo.map((info, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-6 rounded-3xl bg-slate-950/70 border border-slate-800/80 backdrop-blur-xl hover:border-blue-500/40 transition duration-300 shadow-xl flex items-center space-x-4"
              >
                <div className="p-3 bg-slate-900/90 rounded-2xl border border-slate-800 shrink-0">
                  {info.icon}
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase text-slate-500 tracking-wider">{info.title}</span>
                  <h3 className="text-base font-extrabold text-white tracking-tight">{info.detail}</h3>
                  <p className="text-xs text-slate-400 mt-0.5">{info.sub}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7" id="contact-form-card">
            <div className="glass-card p-8 sm:p-10 rounded-3xl border border-slate-800 bg-slate-950/80 backdrop-blur-2xl shadow-2xl space-y-6">
              
              <div className="space-y-1">
                <h3 className="text-xl font-extrabold text-white tracking-tight">Send Us a Message</h3>
                <p className="text-xs text-slate-400">Fill out the form below and our team will respond within 24 hours.</p>
              </div>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 flex items-center space-x-3"
                >
                  <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0" />
                  <div>
                    <h4 className="font-bold text-sm">Message Sent Successfully!</h4>
                    <p className="text-xs text-emerald-200/80">Thank you for reaching out. We will get back to you within 24 hours.</p>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="font-bold text-slate-300">Full Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full bg-slate-900/80 border border-slate-800 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 rounded-xl p-3.5 text-white placeholder-slate-500 outline-none transition"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="font-bold text-slate-300">Email Address</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full bg-slate-900/80 border border-slate-800 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 rounded-xl p-3.5 text-white placeholder-slate-500 outline-none transition"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="font-bold text-slate-300">Company (Optional)</label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Acme Corp / Media Org"
                        className="w-full bg-slate-900/80 border border-slate-800 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 rounded-xl p-3.5 text-white placeholder-slate-500 outline-none transition"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="font-bold text-slate-300">Subject</label>
                      <input
                        type="text"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="Enterprise API Inquiry"
                        className="w-full bg-slate-900/80 border border-slate-800 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 rounded-xl p-3.5 text-white placeholder-slate-500 outline-none transition"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-bold text-slate-300">Message</label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your organization or media verification needs..."
                      className="w-full bg-slate-900/80 border border-slate-800 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 rounded-2xl p-4 text-white placeholder-slate-500 outline-none transition"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-400 hover:opacity-95 text-white font-extrabold text-xs flex items-center justify-center space-x-2 shadow-lg shadow-blue-500/25 border border-blue-400/30 transition disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Sending Message...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>

        {/* 10-Question FAQ Section */}
        <div id="faq" className="space-y-6 max-w-4xl mx-auto pt-8">
          <div className="text-center space-y-2">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-xs text-blue-400 font-bold uppercase tracking-wider">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Frequently Asked Questions</span>
            </div>
            <h3 className="text-3xl font-black text-white tracking-tight">Everything You Need to Know</h3>
            <p className="text-xs text-slate-400">Everything you need to know about TruthLens AI.</p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-slate-950/70 border border-slate-800/80 backdrop-blur-xl overflow-hidden transition-all duration-300 hover:border-blue-500/30"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between space-x-4 font-bold text-white text-sm focus:outline-none"
                  >
                    <span>{faq.q}</span>
                    <div className={`p-1.5 rounded-lg bg-slate-900 text-slate-400 transition-transform ${isOpen ? 'rotate-180 text-blue-400' : ''}`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="px-5 pb-5 text-xs text-slate-400 leading-relaxed border-t border-slate-800/60 pt-3"
                      >
                        {faq.a}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

        {/* Final CTA Banner with Primary & Secondary Buttons */}
        <div className="pt-12 text-center">
          <div className="glass-card p-10 sm:p-14 rounded-3xl border border-blue-500/30 bg-gradient-to-b from-[#0c162d]/90 to-[#060b18]/95 backdrop-blur-2xl shadow-2xl space-y-6 relative overflow-hidden max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight">
              Ready to Verify <span className="bg-gradient-to-r from-blue-400 via-sky-400 to-cyan-300 bg-clip-text text-transparent">Digital Content?</span>
            </h2>
            <p className="text-sm text-slate-400 max-w-lg mx-auto">
              Protect your organization from misinformation, deepfakes, and manipulated media using AI-powered verification.
            </p>
            <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onStartVerification}
                className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-400 hover:opacity-95 text-white font-extrabold text-xs flex items-center space-x-3 shadow-xl shadow-blue-500/25 border border-blue-400/30 transition group"
              >
                <span>Start Verification</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToContactForm}
                className="px-7 py-4 rounded-full bg-slate-900/80 hover:bg-slate-800/90 text-slate-200 font-bold text-xs flex items-center space-x-2 border border-slate-800 backdrop-blur-md transition"
              >
                <span>Contact Sales</span>
              </motion.button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
