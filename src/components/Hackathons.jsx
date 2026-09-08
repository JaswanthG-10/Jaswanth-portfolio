import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Github, ExternalLink } from 'lucide-react';
import { hackathonsData } from '../data/portfolioData';
import { GlassCard } from './UI/GlassCard';
import { useIntersectionAnimation } from '../hooks/useIntersectionAnimation';
import { useDeviceCapabilities } from '../hooks/useDeviceCapabilities';

export const Hackathons = () => {
  const { ref: sectionRef, isVisible } = useIntersectionAnimation({ threshold: 0.08 });
  const { prefersReducedMotion } = useDeviceCapabilities();

  return (
    <section id="hackathons" ref={sectionRef} className="py-16 sm:py-24 relative z-10 w-full max-w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 glass-pill px-4 py-1.5 rounded-full text-xs font-bold text-[#06B6D4] mb-3 border border-[#06B6D4]/30 shadow-cinematic-cyan uppercase tracking-wider"
          >
            <Trophy className="w-3.5 h-3.5 text-[#06B6D4]" />
            <span>Sprint Competitions & Hackathons</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="text-fluid-heading font-extrabold text-white tracking-tight hero-heading"
          >
            Hackathon <span className="bg-gradient-to-r from-white via-[#F43F5E] to-[#06B6D4] bg-clip-text text-transparent">Milestones</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="mt-3 text-fluid-body text-slate-400 max-w-lg mx-auto"
          >
            Sprint prototypes, codeathons, and competition outcomes built under time constraints.
          </motion.p>
        </div>

        {/* Hackathons Grid with Staggered Entrance */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {hackathonsData.map((item, index) => (
            <GlassCard
              key={item.id}
              delay={prefersReducedMotion ? 0 : index * 120}
              className="p-6 rounded-3xl shadow-cinematic-card border-white/15 bg-[#121218]/90 flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <span className="glass-pill px-3 py-1 rounded-full text-[10px] font-extrabold text-[#06B6D4] bg-[#06B6D4]/15 border border-[#06B6D4]/30">
                    {item.badge}
                  </span>
                  <Award className="w-4 h-4 text-[#E11D48]" />
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white hero-heading leading-snug">
                    {item.title}
                  </h3>
                  <div className="text-xs font-mono text-slate-400 mt-0.5">
                    {item.event}
                  </div>
                </div>

                {/* Trimmed concise 2-3 line summary */}
                <p className="text-xs text-slate-300 font-medium leading-relaxed">
                  {item.summary}
                </p>
              </div>

              {/* Outcome / Result */}
              <div className="pt-3 border-t border-white/15 space-y-3">
                <div className="p-3 rounded-2xl bg-[#0A0A0C] border border-white/10 text-xs font-semibold text-emerald-400">
                  🏆 {item.result}
                </div>

                <div className="flex items-center gap-2">
                  {item.links.github && (
                    <a
                      href={item.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glass-pill px-3 py-1.5 rounded-full text-xs font-bold text-slate-300 hover:text-white bg-[#0A0A0C] border border-white/20 flex items-center gap-1.5 transition-all min-h-[36px]"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>Code</span>
                    </a>
                  )}

                  {item.links.demo && (
                    <a
                      href={item.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glass-pill px-3 py-1.5 rounded-full text-xs font-bold text-[#06B6D4] hover:text-white bg-[#06B6D4]/10 border border-[#06B6D4]/30 flex items-center gap-1.5 transition-all min-h-[36px]"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </GlassCard>
          ))}
        </div>

      </div>
    </section>
  );
};
