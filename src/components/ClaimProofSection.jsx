import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Sparkles, Github, ExternalLink, Cpu, CheckCircle2 } from 'lucide-react';
import { claimProofData } from '../data/portfolioData';
import { GlassCard } from './UI/GlassCard';
import { useIntersectionAnimation } from '../hooks/useIntersectionAnimation';
import { useDeviceCapabilities } from '../hooks/useDeviceCapabilities';

export const ClaimProofSection = () => {
  const { ref: sectionRef, isVisible } = useIntersectionAnimation({ threshold: 0.1 });
  const { prefersReducedMotion } = useDeviceCapabilities();

  // Distinct scale+fade entrance variant for the flagship section
  const featuredVariants = {
    hidden: { opacity: 0, scale: prefersReducedMotion ? 1 : 0.93, y: prefersReducedMotion ? 0 : 25 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0.2 : 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <section id="claimproof" ref={sectionRef} className="py-16 sm:py-24 relative z-10 w-full max-w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Pill Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 glass-pill px-4 py-1.5 rounded-full text-xs font-bold text-[#E11D48] mb-3 border border-[#E11D48]/40 shadow-cinematic-red uppercase tracking-wider"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#E11D48]" />
            <span>Dedicated Flagship Case Study</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="text-fluid-heading font-extrabold text-white tracking-tight hero-heading"
          >
            ClaimProof AI — <span className="bg-gradient-to-r from-white via-[#F43F5E] to-[#06B6D4] bg-clip-text text-transparent">Motor Evidence Reviewer</span>
          </motion.h2>
        </div>

        {/* Hero-Style Flagship Showcase Card */}
        <motion.div
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          variants={featuredVariants}
          className="max-w-5xl mx-auto"
        >
          <GlassCard className="p-6 sm:p-10 rounded-3xl shadow-cinematic-card border-2 border-[#E11D48]/40 bg-[#14141E]/95 relative overflow-hidden">
            {/* Background Crimson Atmosphere Glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#E11D48]/20 via-[#06B6D4]/10 to-transparent rounded-full blur-3xl -z-10 pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: Title & Role */}
              <div className="lg:col-span-6 space-y-5">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#0A0A0C] border border-[#E11D48]/50 flex items-center justify-center shadow-cinematic-red shrink-0">
                    <ShieldCheck className="w-6 h-6 text-[#E11D48]" />
                  </div>
                  <div>
                    <span className="glass-pill px-3 py-0.5 rounded-full text-[10px] font-extrabold uppercase text-[#F43F5E] bg-[#E11D48]/20 border border-[#E11D48]/40">
                      {claimProofData.category}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-white hero-heading mt-1 leading-tight">
                      {claimProofData.subtitle}
                    </h3>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-[#0A0A0C]/90 border border-white/15 space-y-1">
                  <div className="text-[11px] font-extrabold uppercase text-[#06B6D4] tracking-wider">
                    Role & Responsibility
                  </div>
                  <div className="text-sm font-bold text-white">
                    {claimProofData.role}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed">
                  {claimProofData.engineeringApproach}
                </p>

                {/* Highlights list */}
                <div className="space-y-2 pt-1">
                  {claimProofData.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs font-semibold text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-[#06B6D4] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Action CTA buttons */}
                <div className="flex flex-wrap items-center gap-3 pt-3">
                  <a
                    href={claimProofData.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-full text-xs font-bold text-white bg-gradient-to-r from-[#E11D48] via-[#F43F5E] to-[#06B6D4] hover:opacity-95 shadow-cinematic-red flex items-center gap-2 transition-all min-h-[44px]"
                  >
                    <Github className="w-4 h-4" />
                    <span>View GitHub Source</span>
                  </a>

                  {claimProofData.links.demo && claimProofData.links.demo !== '#' && (
                    <a
                      href={claimProofData.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-3 rounded-full text-xs font-bold text-[#06B6D4] bg-[#06B6D4]/15 border border-[#06B6D4]/40 hover:bg-[#06B6D4]/25 flex items-center gap-2 transition-all min-h-[44px]"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live App Demo</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Right Column: Problem & Tech Stack */}
              <div className="lg:col-span-6 space-y-4">
                
                {/* Problem Statement */}
                <div className="p-4 rounded-2xl bg-[#0A0A0C]/90 border border-white/15">
                  <h4 className="text-xs font-extrabold uppercase text-[#E11D48] tracking-wider mb-1.5 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#E11D48]" /> Problem Statement
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed">
                    {claimProofData.problem}
                  </p>
                </div>

                {/* Capability Demonstrated */}
                <div className="p-4 rounded-2xl bg-[#06B6D4]/10 border border-[#06B6D4]/30">
                  <h4 className="text-xs font-extrabold uppercase text-[#06B6D4] tracking-wider mb-1.5">
                    Engineering Capability
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed">
                    {claimProofData.capabilityDemonstrated}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="p-4 rounded-2xl bg-[#0A0A0C]/90 border border-white/15">
                  <h4 className="text-xs font-extrabold uppercase text-slate-400 tracking-wider mb-2.5 flex items-center gap-1.5">
                    <Cpu className="w-3.5 h-3.5 text-[#06B6D4]" />
                    <span>Technologies Used</span>
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {claimProofData.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="glass-pill px-3 py-1 rounded-lg text-xs font-bold text-slate-200 bg-white/10 border border-white/15"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

            </div>
          </GlassCard>
        </motion.div>

      </div>
    </section>
  );
};
