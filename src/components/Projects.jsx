import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Rocket, Sparkles, Cpu, Layers, Github, Info, FileText, Film, CheckSquare, Landmark } from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import { GlassCard } from './UI/GlassCard';
import { ProjectModal } from './ProjectModal';
import { useIntersectionAnimation } from '../hooks/useIntersectionAnimation';

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filterCategory, setFilterCategory] = useState('All');
  const { ref: sectionRef, isVisible } = useIntersectionAnimation({ threshold: 0.05 });

  const categories = ['All', 'AI/ML & RAG', 'AI/ML', 'Backend Engineering', 'Desktop & Database'];

  const filteredProjects = projectsData.filter(
    p => filterCategory === 'All' || p.category === filterCategory
  );

  const getGlyphIcon = (glyphName) => {
    switch (glyphName) {
      case 'FileText':
        return <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-600" />;
      case 'Film':
        return <Film className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />;
      case 'CheckSquare':
        return <CheckSquare className="w-5 h-5 sm:w-6 sm:h-6 text-sky-600" />;
      case 'Landmark':
        return <Landmark className="w-5 h-5 sm:w-6 sm:h-6 text-teal-600" />;
      default:
        return <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-600" />;
    }
  };

  return (
    <section id="projects" ref={sectionRef} className="py-16 sm:py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 glass-pill px-4 py-1.5 rounded-full text-xs font-bold text-indigo-700 mb-3 border border-indigo-100"
          >
            <Rocket className="w-3.5 h-3.5 text-indigo-500" />
            <span>Featured Engineering Work</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-fluid-heading font-extrabold text-slate-900 tracking-tight"
          >
            Floating <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-sky-500 bg-clip-text text-transparent">Glass Project Cards</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-3 text-fluid-body text-slate-500 max-w-lg mx-auto"
          >
            Detailed technical architecture: Problem Statement → Engineering Approach → Tech Stack → Capability Demonstrated.
          </motion.p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10 sm:mb-12 max-w-full overflow-x-auto pb-2">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setFilterCategory(cat)}
              className={`glass-pill px-3.5 sm:px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 min-h-[40px] flex items-center justify-center ${
                filterCategory === cat
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md border-transparent scale-105'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/80'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid with Staggered Delays */}
        <div className="space-y-6 sm:space-y-8">
          {filteredProjects.map((project, index) => {
            const isFlagship = project.isFlagship;

            return (
              <GlassCard
                key={project.id}
                delay={index * 80}
                className={`p-5 sm:p-8 lg:p-10 rounded-3xl shadow-glass border-white/90 relative overflow-hidden transition-all duration-300 ${
                  isFlagship ? 'ring-2 ring-indigo-400/40 bg-white/75' : ''
                }`}
                floatClass={index % 2 === 0 ? 'animate-float-1' : 'animate-float-3'}
              >
                {/* Glow backdrop */}
                {isFlagship && (
                  <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-indigo-200/30 via-purple-100/20 to-transparent rounded-full blur-3xl -z-10 pointer-events-none" />
                )}

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
                  
                  {/* Project Header Column */}
                  <div className="lg:col-span-4 flex flex-col justify-between h-full">
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-white/90 backdrop-blur-md border border-slate-200/80 flex items-center justify-center shadow-xs shrink-0">
                          {getGlyphIcon(project.glyph)}
                        </div>
                        <div>
                          <div className="flex flex-wrap items-center gap-1.5">
                            {isFlagship && (
                              <span className="glass-pill px-2.5 py-0.5 rounded-full text-[10px] font-bold text-amber-700 bg-amber-50 border-amber-200 flex items-center gap-1">
                                <Sparkles className="w-3 h-3 text-amber-500" /> Flagship
                              </span>
                            )}
                            <span className="glass-pill px-2.5 py-0.5 rounded-full text-[10px] font-bold text-indigo-700 bg-indigo-50 border-indigo-200">
                              {project.category}
                            </span>
                          </div>
                        </div>
                      </div>

                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
                        {project.title}
                      </h3>

                      <p className="text-xs sm:text-sm font-semibold text-indigo-600 mt-2">
                        {project.tagline}
                      </p>
                    </div>

                    {/* Action Buttons */}
                    <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-3">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="glass-pill px-4 sm:px-5 py-2.5 rounded-full text-xs font-bold text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 shadow-md flex items-center gap-1.5 transition-all min-h-[44px]"
                      >
                        <Info className="w-4 h-4" /> Deep Dive Details
                      </button>
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="glass-pill p-2.5 rounded-full text-slate-700 hover:text-indigo-600 hover:bg-white shadow-xs border border-slate-200 min-w-[44px] min-h-[44px] flex items-center justify-center"
                        aria-label="View Code on GitHub"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    </div>

                  </div>

                  {/* Project 4-Part Structure Column */}
                  <div className="lg:col-span-8 space-y-3 sm:space-y-4">
                    
                    {/* 1. Problem Statement */}
                    <div className="p-3.5 sm:p-4 rounded-2xl bg-white/70 backdrop-blur-md border border-slate-200/60 shadow-2xs">
                      <h4 className="text-[10px] sm:text-[11px] font-extrabold uppercase text-slate-500 tracking-wider mb-1 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-rose-500 shrink-0" /> 1. Problem Statement
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                        {project.problem}
                      </p>
                    </div>

                    {/* 2. Engineering Approach */}
                    <div className="p-3.5 sm:p-4 rounded-2xl bg-indigo-50/70 backdrop-blur-md border border-indigo-100 shadow-2xs">
                      <h4 className="text-[10px] sm:text-[11px] font-extrabold uppercase text-indigo-700 tracking-wider mb-1 flex items-center gap-1.5">
                        <Cpu className="w-3.5 h-3.5 text-indigo-600 shrink-0" /> 2. Engineering Approach
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                        {project.engineeringApproach}
                      </p>
                    </div>

                    {/* 3. Tech Stack */}
                    <div className="p-3.5 sm:p-4 rounded-2xl bg-white/70 backdrop-blur-md border border-slate-200/60 shadow-2xs">
                      <h4 className="text-[10px] sm:text-[11px] font-extrabold uppercase text-slate-500 tracking-wider mb-2">
                        3. Tech Stack
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {project.techStack.map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="glass-pill px-2.5 py-0.5 rounded-lg text-[10px] sm:text-[11px] font-bold text-slate-700 bg-white/90 border-slate-200 shadow-2xs min-h-[30px]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* 4. Capability Demonstrated */}
                    <div className="p-3.5 sm:p-4 rounded-2xl bg-purple-50/70 backdrop-blur-md border border-purple-100 shadow-2xs">
                      <h4 className="text-[10px] sm:text-[11px] font-extrabold uppercase text-purple-700 tracking-wider mb-1 flex items-center gap-1.5">
                        <Layers className="w-3.5 h-3.5 text-purple-600 shrink-0" /> 4. Capability Demonstrated
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
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
