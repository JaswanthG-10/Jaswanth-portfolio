import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send, Copy, Check, MessageSquare } from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';
import { GlassCard } from './UI/GlassCard';

export const Contact = () => {
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#6366f1', '#8b5cf6', '#0ea5e9', '#10b981'],
    });
  };

  return (
    <section id="contact" className="py-16 sm:py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 glass-pill px-4 py-1.5 rounded-full text-xs font-bold text-indigo-700 mb-3 border border-indigo-100"
          >
            <Mail className="w-3.5 h-3.5 text-indigo-500" />
            <span>Connect & Collaborate</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-fluid-heading font-extrabold text-slate-900 tracking-tight"
          >
            Let's Build <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-sky-500 bg-clip-text text-transparent">Weightless Systems</span> Together
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-3 text-fluid-body text-slate-500 max-w-lg mx-auto"
          >
            Open for AI/ML engineering internships, RAG application development, and technical project collaborations.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start max-w-5xl mx-auto">
          
          {/* Left Column: Direct Reachout */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 space-y-4 sm:space-y-6"
          >
            <GlassCard className="p-6 sm:p-8 rounded-3xl shadow-glass border-white/90 animate-float-2">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">Direct Contact</h3>
              <p className="text-xs text-slate-500 mb-4 sm:mb-6">
                Feel free to drop a message or copy my official email address directly:
              </p>

              {/* Copy Email Box */}
              <div className="p-3.5 sm:p-4 rounded-2xl bg-indigo-50/70 border border-indigo-100/80 flex items-center justify-between gap-2 mb-4 sm:mb-6">
                <div className="flex items-center gap-2.5 overflow-hidden">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-600 shrink-0" />
                  <span className="text-xs font-bold text-slate-800 truncate">
                    {personalInfo.email}
                  </span>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="glass-pill px-3 py-1.5 rounded-xl text-xs font-bold text-indigo-700 bg-white hover:bg-indigo-50 border border-indigo-200 flex items-center gap-1 shrink-0 transition-all min-h-[36px]"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-indigo-600" />}
                  <span>{copied ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>

              {/* Social Profiles */}
              <div className="space-y-2.5">
                <div className="text-[11px] font-extrabold uppercase text-slate-400 tracking-wider">
                  Social Profiles
                </div>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-panel p-3 sm:p-3.5 rounded-2xl flex items-center justify-between group hover:border-indigo-300 transition-all duration-200 shadow-2xs min-h-[50px]"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center text-sm font-bold shadow-2xs">
                      <Linkedin className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">LinkedIn</div>
                      <div className="text-[10px] text-slate-500 font-mono">in/jaswanth-g10</div>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-indigo-600">→</span>
                </a>

                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-panel p-3 sm:p-3.5 rounded-2xl flex items-center justify-between group hover:border-indigo-300 transition-all duration-200 shadow-2xs min-h-[50px]"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-slate-900 text-white flex items-center justify-center text-sm font-bold shadow-2xs">
                      <Github className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">GitHub</div>
                      <div className="text-[10px] text-slate-500 font-mono">@{personalInfo.githubUsername}</div>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-indigo-600">→</span>
                </a>
              </div>
            </GlassCard>
          </motion.div>

          {/* Right Column: Glass Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7"
          >
            <GlassCard className="p-6 sm:p-8 lg:p-10 rounded-3xl shadow-glass border-white/90 relative">
              {submitted ? (
                <div className="py-10 text-center">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center mb-3 shadow-2xs">
                    <Check className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">Message Received!</h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 max-w-md mx-auto font-medium leading-relaxed">
                    Thank you for reaching out, {formData.name || 'Friend'}! Jaswanth will review your message and respond shortly.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', message: '' }); }}
                    className="mt-6 glass-pill px-6 py-2.5 rounded-full text-xs font-bold text-indigo-700 bg-white border border-indigo-200 hover:bg-indigo-50 min-h-[44px]"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-600" />
                    <span>Send a Direct Message</span>
                  </h3>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Rivera"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-white/70 backdrop-blur-md border border-slate-200/80 text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all shadow-2xs min-h-[44px]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Your Email</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-white/70 backdrop-blur-md border border-slate-200/80 text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all shadow-2xs min-h-[44px]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Project / Inquiry Message</label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Share project details, internship inquiries, or technical discussion topics..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-white/70 backdrop-blur-md border border-slate-200/80 text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all shadow-2xs resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full glass-pill py-3.5 rounded-2xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-sky-500 hover:from-indigo-700 hover:to-sky-600 shadow-[0_8px_20px_rgba(99,102,241,0.3)] transition-all duration-300 flex items-center justify-center gap-2 min-h-[48px]"
                  >
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </GlassCard>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
