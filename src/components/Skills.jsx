import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Terminal, CheckCircle2, Sparkles } from 'lucide-react';
import { skillsData } from '../data/portfolioData';
import { GlassCard } from './UI/GlassCard';
import { useIntersectionAnimation } from '../hooks/useIntersectionAnimation';

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const { ref: sectionRef, isVisible } = useIntersectionAnimation({ threshold: 0.05 });

  const categoriesList = ['All', ...skillsData.categories.map(c => c.name)];

  const filteredCategories = skillsData.categories.filter(
    c => activeCategory === 'All' || c.name === activeCategory
  );

  return (
    <section id="skills" ref={sectionRef} className="py-16 sm:py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 glass-pill px-4 py-1.5 rounded-full text-xs font-bold text-[#06B6D4] mb-3 border border-[#06B6D4]/30 shadow-cinematic-cyan uppercase tracking-wider"
          >
            <Cpu className="w-3.5 h-3.5 text-[#06B6D4]" />
            <span>Technical Capabilities</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-fluid-heading font-extrabold text-white tracking-tight hero-heading"
          >
            Skills & <span className="bg-gradient-to-r from-white via-[#F43F5E] to-[#06B6D4] bg-clip-text text-transparent">Tech Matrix</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-3 text-fluid-body text-slate-400 max-w-lg mx-auto"
          >
            Categorized technical skills built through Computer Science coursework, applied AI projects, and GitHub open-source development.
          </motion.p>
        </div>

        {/* Category Pills Filter */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10 sm:mb-12 overflow-x-auto pb-2">
          {categoriesList.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCategory(cat)}
              className={`glass-pill px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 min-h-[40px] flex items-center justify-center cursor-pointer ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-[#E11D48] to-[#06B6D4] text-white shadow-cinematic-red scale-105 border-transparent'
                  : 'text-slate-400 hover:text-white hover:bg-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredCategories.map((category, idx) => (
            <GlassCard
              key={category.name}
              delay={idx * 70}
              className="p-6 rounded-3xl shadow-cinematic-card border-white/15 bg-[#121218]/90 animate-float-1 relative overflow-hidden"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 pb-4 mb-4 border-b border-white/15">
                <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${category.color} shadow-xs`} />
                <h3 className="text-base sm:text-lg font-bold text-white tracking-wide hero-heading">
                  {category.name}
                </h3>
              </div>

              {/* Skill Tags */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="glass-pill px-3 py-1.5 rounded-xl text-xs font-semibold text-slate-200 bg-white/10 border border-white/15 hover:border-[#E11D48]/50 hover:text-white transition-all min-h-[32px] flex items-center gap-1.5"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#06B6D4]" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Currently Building Tray */}
        <div className="mt-12 sm:mt-16 max-w-4xl mx-auto">
          <GlassCard className="p-6 sm:p-8 rounded-3xl glass-tray-building relative">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-4 h-4 text-[#E11D48]" />
              <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-300 hero-heading">
                [ Active Engineering Focus & Deep Dives ]
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {skillsData.currentlyBuilding.map((item, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-[#0A0A0C]/90 border border-white/10 flex items-start gap-2.5">
                  <Terminal className="w-4 h-4 text-[#06B6D4] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold text-white">{item.name}</div>
                    <div className="text-[11px] text-slate-400 font-mono mt-0.5">{item.detail}</div>
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>

      </div>
    </section>
  );
};
