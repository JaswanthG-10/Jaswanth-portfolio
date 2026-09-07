import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Rocket, Sparkles, ShieldCheck, FileText, Film, CheckSquare, Landmark, Github, ExternalLink, Info } from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import { GlassCard } from './UI/GlassCard';
import { ProjectModal } from './ProjectModal';
import { useIntersectionAnimation } from '../hooks/useIntersectionAnimation';

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filterCategory, setFilterCategory] = useState('All');
  const { ref: sectionRef, isVisible } = useIntersectionAnimation({ threshold: 0.05 });

  const categories = ['All', 'AI/ML & RAG', 'AI/ML', 'Full-Stack & Backend', 'Desktop & Database'];

  const filteredProjects = projectsData.filter(
    p => filterCategory === 'All' || p.category === filterCategory
  );

  const getGlyphIcon = (glyphName) => {
    switch (glyphName) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-[#E11D48]" />;
      case 'FileText':
        return <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-[#06B6D4]" />;
      case 'Film':
        return <Film className="w-5 h-5 sm:w-6 sm:h-6 text-[#6366F1]" />;
      case 'CheckSquare':
        return <CheckSquare className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-400" />;
      case 'Landmark':
        return <Landmark className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400" />;
      default:
        return <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-[#E11D48]" />;
    }
  };

  return (
    <section id="projects" ref={sectionRef} className="py-16 sm:py-24 relative z-10 w-full max-w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 glass-pill px-4 py-1.5 rounded-full text-xs font-bold text-[#E11D48] mb-3 border border-[#E11D48]/30 shadow-cinematic-red uppercase tracking-wider"
          >
            <Rocket className="w-3.5 h-3.5 text-[#E11D48]" />
            <span>Featured Project Showcase</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-fluid-heading font-extrabold text-white tracking-tight hero-heading"
          >
            Engineering <span className="bg-gradient-to-r from-white via-[#F43F5E] to-[#06B6D4] bg-clip-text text-transparent">Case Studies</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-3 text-fluid-body text-slate-400 max-w-lg mx-auto"
          >
            Applied AI, RAG document search, recommendation algorithms, backend REST APIs, and database engineering.
          </motion.p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10 sm:mb-12 max-w-full overflow-x-auto pb-2">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setFilterCategory(cat)}
              className={`glass-pill px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 min-h-[40px] flex items-center justify-center cursor-pointer ${
                filterCategory === cat
                  ? 'bg-gradient-to-r from-[#E11D48] to-[#06B6D4] text-white shadow-cinematic-red scale-105 border-transparent'
                  : 'text-slate-400 hover:text-white hover:bg-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="space-y-6 sm:space-y-8">
          {filteredProjects.map((project, index) => {
            const isFlagship = project.isFlagship;

            return (
              <GlassCard
                key={project.id}
                delay={index * 80}
                className={`p-5 sm:p-8 lg:p-10 rounded-3xl shadow-cinematic-card border-white/15 bg-[#121218]/90 relative overflow-hidden transition-all duration-300 ${
                  isFlagship ? 'ring-2 ring-[#E11D48]/50 bg-[#14141E]/95' : ''
                }`}
                floatClass={index % 2 === 0 ? 'animate-float-1' : 'animate-float-3'}
              >
                {/* Crimson Glow Backdrop for Flagship */}
                {isFlagship && (
                  <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-[#E11D48]/20 via-[#06B6D4]/10 to-transparent rounded-full blur-3xl -z-10 pointer-events-none" />
                )}

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
                  
                  {/* Project Header Column */}
                  <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-4">
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-[#0A0A0C] border border-white/20 flex items-center justify-center shadow-xs shrink-0">
                          {getGlyphIcon(project.glyph)}
                        </div>
                        <div>
                          <div className="flex flex-wrap items-center gap-1.5">
                            {isFlagship && (
                              <span className="glass-pill px-2.5 py-0.5 rounded-full text-[10px] font-bold text-[#F43F5E] bg-[#E11D48]/15 border border-[#E11D48]/30 flex items-center gap-1">
                                <Sparkles className="w-3 h-3 text-[#F43F5E]" /> Flagship
                              </span>
                            )}
                            <span className="glass-pill px-2.5 py-0.5 rounded-full text-[10px] font-bold text-[#06B6D4] bg-[#06B6D4]/15 border border-[#06B6D4]/30">
                              {project.category}
                            </span>
                          </div>
                        </div>
                      </div>

                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white tracking-tight hero-heading leading-tight">
                        {project.title}
                      </h3>

                      <p className="text-xs sm:text-sm font-semibold text-[#06B6D4] mt-2">
                        {project.tagline}
                      </p>
                    </div>

                    {/* Action Buttons & Links */}
                    <div className="flex flex-wrap items-center gap-2.5 pt-2">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="glass-pill px-4 sm:px-5 py-2 rounded-full text-xs font-bold text-white bg-gradient-to-r from-[#E11D48] to-[#06B6D4] hover:opacity-95 shadow-cinematic-red flex items-center gap-1.5 transition-all min-h-[40px] cursor-pointer"
                      >
                        <Info className="w-4 h-4" /> Deep Dive Details
                      </button>

                      {project.links.github && (
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="glass-pill px-3.5 py-2 rounded-full text-xs font-bold text-slate-300 hover:text-white bg-[#0A0A0C] border border-white/20 flex items-center gap-1.5 transition-all min-h-[40px]"
                        >
                          <Github className="w-3.5 h-3.5" />
                          <span>Code</span>
                        </a>
                      )}

                      {project.links.demo && project.links.demo !== '#' && (
                        <a
                          href={project.links.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="glass-pill px-3.5 py-2 rounded-full text-xs font-bold text-[#06B6D4] hover:text-white bg-[#06B6D4]/10 border border-[#06B6D4]/30 flex items-center gap-1.5 transition-all min-h-[40px]"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>Live Demo</span>
                        </a>
                      )}
                    </div>

                  </div>

                  {/* Project Details Column */}
                  <div className="lg:col-span-7 space-y-3 sm:space-y-4">
                    
                    {/* Problem & Approach */}
                    <div className="p-3.5 sm:p-4 rounded-2xl bg-[#0A0A0C]/80 border border-white/15">
                      <h4 className="text-[10px] sm:text-[11px] font-extrabold uppercase text-[#E11D48] tracking-wider mb-1 flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-[#E11D48] shrink-0" /> Overview & Engineering
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed">
                        {project.engineeringApproach}
                      </p>
                    </div>

                    {/* Tech Stack */}
                    <div className="p-3.5 sm:p-4 rounded-2xl bg-[#0A0A0C]/80 border border-white/15">
                      <h4 className="text-[10px] sm:text-[11px] font-extrabold uppercase text-slate-400 tracking-wider mb-2">
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {project.techStack.map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="glass-pill px-2.5 py-0.5 rounded-lg text-[10px] sm:text-[11px] font-bold text-slate-200 bg-white/10 border border-white/15 min-h-[28px]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Capability Demonstrated */}
                    <div className="p-3.5 sm:p-4 rounded-2xl bg-[#06B6D4]/10 border border-[#06B6D4]/25">
                      <h4 className="text-[10px] sm:text-[11px] font-extrabold uppercase text-[#06B6D4] tracking-wider mb-1">
                        Capability Demonstrated
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed">
                        {project.capabilityDemonstrated}
                      </p>
                    </div>

                  </div>

                </div>

              </GlassCard>
            );
          })}
        </div>

      </div>

      {/* Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
