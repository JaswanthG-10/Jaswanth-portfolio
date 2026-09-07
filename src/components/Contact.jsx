import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send, Copy, Check, MessageSquare } from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';
import { GlassCard } from './UI/GlassCard';
import { useIntersectionAnimation } from '../hooks/useIntersectionAnimation';

export const Contact = () => {
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', service: 'Software Development', message: '' });
  const { ref: sectionRef, isVisible } = useIntersectionAnimation({ threshold: 0.05 });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    try {
      confetti({
        particleCount: 60,
        spread: 70,
        origin: { y: 0.7 },
        colors: ['#E11D48', '#F43F5E', '#06B6D4', '#6366F1'],
      });
    } catch (_) {}
  };

  return (
    <section id="contact" ref={sectionRef} className="py-16 sm:py-24 relative z-10 w-full max-w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 glass-pill px-4 py-1.5 rounded-full text-xs font-bold text-[#E11D48] mb-3 border border-[#E11D48]/30 shadow-cinematic-red uppercase tracking-wider"
          >
            <Mail className="w-3.5 h-3.5 text-[#E11D48]" />
            <span>Connect & Collaborate</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-fluid-heading font-extrabold text-white tracking-tight hero-heading"
          >
            Let's Build <span className="bg-gradient-to-r from-white via-[#F43F5E] to-[#06B6D4] bg-clip-text text-transparent">Together</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-3 text-fluid-body text-slate-400 max-w-lg mx-auto"
          >
            Open for software engineering internships, AI/ML project collaborations, and technical discussions.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start max-w-5xl mx-auto">
          
          {/* Left Column: Direct Reachout */}
          <div className="lg:col-span-5 space-y-4">
            <GlassCard className="p-6 sm:p-8 rounded-3xl shadow-cinematic-card border-white/15 bg-[#121218]/90">
              <h3 className="text-xl font-bold text-white tracking-wide hero-heading mb-2">Direct Reachout</h3>
              <p className="text-xs text-slate-400 mb-6">
                Copy my official email address directly or connect on GitHub and LinkedIn:
              </p>

              {/* Copy Email Box */}
              <div className="p-4 rounded-2xl bg-[#0A0A0C] border border-white/15 flex items-center justify-between gap-2 mb-6">
                <div className="flex items-center gap-2.5 overflow-hidden">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-[#E11D48] shrink-0" />
                  <span className="text-xs font-bold text-white truncate">
                    {personalInfo.email}
                  </span>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-slate-200 bg-white/10 hover:bg-white/20 border border-white/15 flex items-center gap-1 shrink-0 transition-all min-h-[36px] cursor-pointer"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-[#06B6D4]" />}
                  <span>{copied ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>

              {/* Social Links */}
              <div className="space-y-2.5">
                <div className="text-[11px] font-extrabold uppercase text-slate-400 tracking-wider">
                  Social Profiles
                </div>

                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-2xl bg-[#0A0A0C] border border-white/15 flex items-center justify-between group hover:border-[#E11D48]/60 transition-all min-h-[50px]"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-white/10 text-white flex items-center justify-center text-sm font-bold border border-white/20">
                      <Github className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white group-hover:text-[#E11D48] transition-colors">GitHub</div>
                      <div className="text-[10px] text-slate-400 font-mono">@{personalInfo.githubUsername}</div>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-[#06B6D4]">→</span>
                </a>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-2xl bg-[#0A0A0C] border border-white/15 flex items-center justify-between group hover:border-[#06B6D4]/60 transition-all min-h-[50px]"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-[#0A66C2] text-white flex items-center justify-center text-sm font-bold">
                      <Linkedin className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white group-hover:text-[#06B6D4] transition-colors">LinkedIn</div>
                      <div className="text-[10px] text-slate-400 font-mono">in/jaswanth-g10</div>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-[#06B6D4]">→</span>
                </a>
              </div>
            </GlassCard>
          </div>

          {/* Right Column: Direct Message Form */}
          <div className="lg:col-span-7">
            <GlassCard className="p-6 sm:p-8 lg:p-10 rounded-3xl shadow-cinematic-card border-white/15 bg-[#121218]/90 relative">
              {submitted ? (
                <div className="py-10 text-center">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center mb-3 border border-emerald-500/40">
                    <Check className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-extrabold hero-heading text-white">Message Dispatched!</h3>
                  <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out, {formData.name || 'Friend'}! Jaswanth will review your message and reply within 24 hours.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', service: 'Software Development', message: '' }); }}
                    className="mt-6 px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-white/10 border border-white/20 hover:bg-white/20 min-h-[44px] cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-lg sm:text-xl font-bold text-white hero-heading mb-2 flex items-center gap-2">
                    <MessageSquare className="w-5 h-5 text-[#E11D48]" />
                    <span>Send a Direct Message</span>
                  </h3>

                  <div>
                    <label className="block text-xs uppercase tracking-widest text-slate-400 mb-1">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Rivera"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#0A0A0C] border border-white/15 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-[#E11D48] transition-all min-h-[44px]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-widest text-slate-400 mb-1">Your Email</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#0A0A0C] border border-white/15 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-[#E11D48] transition-all min-h-[44px]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-widest text-slate-400 mb-1">Inquiry Type</label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#0A0A0C] border border-white/15 text-sm text-white focus:outline-none focus:border-[#E11D48] transition-all cursor-pointer min-h-[44px]"
                    >
                      <option value="Software Development">01 - Software Engineering & Full-Stack</option>
                      <option value="AI/ML & RAG">02 - Applied AI & RAG Applications</option>
                      <option value="Internship Inquiry">03 - Software Internship / Collaboration</option>
                      <option value="General Discussion">04 - Technical Discussion</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-widest text-slate-400 mb-1">Message</label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Share project details, internship opportunities, or technical collaboration ideas..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#0A0A0C] border border-white/15 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-[#E11D48] transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-full text-xs sm:text-sm font-extrabold uppercase tracking-widest text-white shadow-cinematic-red hover:opacity-95 transition-all flex items-center justify-center gap-2 min-h-[48px] bg-gradient-to-r from-[#E11D48] via-[#F43F5E] to-[#06B6D4] cursor-pointer"
                  >
                    <span>Send Inquiry</span>
                    <Send className="w-4 h-4 text-white" />
                  </button>
                </form>
              )}
            </GlassCard>
          </div>

        </div>

      </div>
    </section>
  );
};
