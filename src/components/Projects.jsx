import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Rocket, Sparkles, Cpu, Layers, Github, Info, FileText, Film, CheckSquare, Landmark } from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import { GlassCard } from './UI/GlassCard';
import { ProjectModal } from './ProjectModal';

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filterCategory, setFilterCategory] = useState('All');

  const categories = ['All', 'AI/ML & RAG', 'AI/ML', 'Backend Engineering', 'Desktop & Database'];

  const filteredProjects = projectsData.filter(
    p => filterCategory === 'All' || p.category === filterCategory
  );

  const getGlyphIcon = (glyphName) => {
    switch (glyphName) {
      case 'FileText':
        return <FileText className="w-6 h-6 text-indigo-600" />;
      case 'Film':
        return <Film className="w-6 h-6 text-purple-600" />;
      case 'CheckSquare':
        return <CheckSquare className="w-6 h-6 text-sky-600" />;
      case 'Landmark':
        return <Landmark className="w-6 h-6 text-teal-600" />;
      default:
        return <FileText className="w-6 h-6 text-indigo-600" />;
    }
  };

  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 glass-pill px-4 py-1.5 rounded-full text-xs font-bold text-indigo-700 mb-3 border border-indigo-100"
          >
            <Rocket className="w-3.5 h-3.5 text-indigo-500" />
            <span>Featured Engineering Work</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight"
          >
            Floating <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-sky-500 bg-clip-text text-transparent">Glass Project Cards</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-3 text-slate-500 text-sm sm:text-base max-w-xl mx-auto"
          >
            Detailed technical breakdown: Problem Statement → Engineering Approach → Tech Stack → Capability Demonstrated.
          </motion.p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setFilterCategory(cat)}
              className={`glass-pill px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 ${
                filterCategory === cat
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md border-transparent scale-105'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/80'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="space-y-8">
          {filteredProjects.map((project, index) => {
            const isFlagship = project.isFlagship;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40, rotateX: 12 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <GlassCard
                  className={`p-6 sm:p-8 lg:p-10 rounded-3xl shadow-glass border-white/90 relative overflow-hidden transition-all duration-300 ${
                    isFlagship ? 'ring-2 ring-indigo-400/40 bg-white/75' : ''
                  }`}
                  floatClass={index % 2 === 0 ? 'animate-float-1' : 'animate-float-3'}
                >
                  
                  {/* Subtle Glow backdrop for flagship */}
                  {isFlagship && (
                    <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-indigo-200/40 via-purple-100/30 to-transparent rounded-full blur-3xl -z-10" />
                  )}

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    
                    {/* Project Left Header Info */}
                    <div className="lg:col-span-4 flex flex-col justify-between h-full">
                      <div>
                        {/* Project Category & Glyph Header */}
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-12 h-12 rounded-2xl bg-white/90 backdrop-blur-md border border-slate-200/80 flex items-center justify-center shadow-sm">
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

                        <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
                          {project.title}
                        </h3>

                        <p className="text-xs sm:text-sm font-semibold text-indigo-600 mt-2">
                          {project.tagline}
                        </p>
                      </div>

                      {/* Action Buttons */}
                      <div className="mt-8 flex flex-wrap items-center gap-3">
                        <button
                          onClick={() => setSelectedProject(project)}
                          className="glass-pill px-5 py-2.5 rounded-full text-xs font-bold text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 shadow-md flex items-center gap-2 transition-all hover:-translate-y-0.5"
                        >
                          <Info className="w-4 h-4" /> Deep Dive Details
                        </button>
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="glass-pill p-2.5 rounded-full text-slate-700 hover:text-indigo-600 hover:bg-white shadow-sm border border-slate-200"
                          aria-label="View Code on GitHub"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      </div>

                    </div>

                    {/* Project Right Content: 4-Part Structure */}
                    <div className="lg:col-span-8 space-y-4">
                      
                      {/* 1. Problem Statement */}
                      <div className="p-4 rounded-2xl bg-white/70 backdrop-blur-md border border-slate-200/60 shadow-sm">
                        <h4 className="text-[11px] font-extrabold uppercase text-slate-500 tracking-wider mb-1 flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-rose-500" /> 1. Problem Statement
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                          {project.problem}
                        </p>
                      </div>

                      {/* 2. Engineering Approach */}
                      <div className="p-4 rounded-2xl bg-indigo-50/70 backdrop-blur-md border border-indigo-100 shadow-sm">
                        <h4 className="text-[11px] font-extrabold uppercase text-indigo-700 tracking-wider mb-1 flex items-center gap-2">
                          <Cpu className="w-3.5 h-3.5 text-indigo-600" /> 2. Engineering Approach
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                          {project.engineeringApproach}
                        </p>
                      </div>

                      {/* 3. Tech Stack */}
                      <div className="p-4 rounded-2xl bg-white/70 backdrop-blur-md border border-slate-200/60 shadow-sm">
                        <h4 className="text-[11px] font-extrabold uppercase text-slate-500 tracking-wider mb-2">
                          3. Tech Stack
                        </h4>
                        <div className="flex flex-wrap gap-1.5">
                          {project.techStack.map((tech, tIdx) => (
                            <span
                              key={tIdx}
                              className="glass-pill px-2.5 py-1 rounded-lg text-[11px] font-bold text-slate-700 bg-white/90 border-slate-200 shadow-2xs"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* 4. Capability Demonstrated */}
                      <div className="p-4 rounded-2xl bg-purple-50/70 backdrop-blur-md border border-purple-100 shadow-sm">
                        <h4 className="text-[11px] font-extrabold uppercase text-purple-700 tracking-wider mb-1 flex items-center gap-2">
                          <Layers className="w-3.5 h-3.5 text-purple-600" /> 4. Capability Demonstrated
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                          {project.capabilityDemonstrated}
                        </p>
                      </div>

                    </div>

                  </div>

                </GlassCard>
              </motion.div>
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
