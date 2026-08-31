import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, Menu, X, Sparkles, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Section scroll tracking
      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
      if (window.scrollY < 200) {
        setActiveSection('hero');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 pt-4 pb-2 pointer-events-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between pointer-events-auto">
        
        {/* Logo / Name Pill */}
        <a href="#hero" className="group">
          <motion.div 
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="glass-pill px-4 py-2 rounded-full flex items-center gap-3 transition-all duration-300 group-hover:border-indigo-300"
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 via-purple-500 to-sky-400 flex items-center justify-center text-white font-extrabold text-sm shadow-md">
              JG
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold text-slate-800 tracking-tight group-hover:text-indigo-600 transition-colors">
                {personalInfo.name}
              </span>
              <span className="text-[10px] text-slate-500 font-medium -mt-0.5">
                AI / ML Engineer
              </span>
            </div>
          </motion.div>
        </a>

        {/* Desktop Navigation Glass Bar */}
        <nav className="hidden md:flex items-center gap-1 glass-pill px-5 py-2 rounded-full shadow-glass">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`relative px-4 py-1.5 text-xs font-semibold rounded-full transition-all duration-300 ${
                  isActive
                    ? 'text-indigo-600 font-bold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/40'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activePill"
                    className="absolute inset-0 bg-white shadow-sm border border-indigo-100 rounded-full -z-10"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Desktop Quick Social Links & CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-2 rounded-full glass-pill text-slate-700 hover:text-indigo-600 hover:border-indigo-200 transition-all duration-200 hover:-translate-y-0.5"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-2 rounded-full glass-pill text-slate-700 hover:text-indigo-600 hover:border-indigo-200 transition-all duration-200 hover:-translate-y-0.5"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href="#contact"
            className="glass-pill px-4 py-2 rounded-full text-xs font-bold text-slate-800 bg-gradient-to-r from-indigo-50/80 to-purple-50/80 hover:from-indigo-100 hover:to-purple-100 border border-indigo-200/60 shadow-sm flex items-center gap-1.5 transition-all duration-300 hover:-translate-y-0.5"
          >
            <span>Let's Connect</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-indigo-600" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden glass-pill p-2.5 rounded-full text-slate-800 focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Glass Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mt-3 max-w-md mx-auto pointer-events-auto"
          >
            <div className="glass-panel p-5 rounded-3xl flex flex-col gap-3 shadow-glass">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-700 hover:text-indigo-600 hover:bg-white/60 transition-colors flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <Sparkles className="w-3.5 h-3.5 text-indigo-400 opacity-60" />
                </a>
              ))}
              <div className="pt-3 border-t border-slate-200/50 flex items-center justify-around">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs font-semibold text-slate-700 hover:text-indigo-600"
                >
                  <Github className="w-4 h-4" /> GitHub
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs font-semibold text-slate-700 hover:text-indigo-600"
                >
                  <Linkedin className="w-4 h-4" /> LinkedIn
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-2 text-xs font-semibold text-slate-700 hover:text-indigo-600"
                >
                  <Mail className="w-4 h-4" /> Email
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
