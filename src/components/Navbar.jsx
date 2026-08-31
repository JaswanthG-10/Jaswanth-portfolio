import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, Menu, X, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Navbar = () => {
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
      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 180;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
      if (window.scrollY < 180) {
        setActiveSection('hero');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-6 pt-3 pb-2 pointer-events-none w-full">
      <div className="max-w-7xl mx-auto flex items-center justify-between pointer-events-auto w-full">
        
        {/* Logo / Name Badge */}
        <a href="#hero" className="group">
          <motion.div 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="glass-pill px-3.5 py-1.5 rounded-full flex items-center gap-2.5 transition-all duration-300 border-white/90 shadow-sm"
          >
            <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-indigo-500 via-purple-500 to-sky-400 flex items-center justify-center text-white font-extrabold text-xs shadow-xs">
              JG
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-extrabold text-slate-800 tracking-tight group-hover:text-indigo-600 transition-colors">
                {personalInfo.name}
              </span>
              <span className="text-[9px] text-slate-500 font-medium -mt-0.5 hidden xs:inline">
                AI / ML Engineer
              </span>
            </div>
          </motion.div>
        </a>

        {/* Desktop Navigation Bar */}
        <nav className="hidden lg:flex items-center gap-1 glass-pill px-4 py-1.5 rounded-full shadow-glass">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`relative px-3.5 py-1 text-xs font-bold rounded-full transition-all duration-200 ${
                  isActive
                    ? 'text-indigo-600 font-extrabold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activePillNav"
                    className="absolute inset-0 bg-white shadow-xs border border-indigo-100 rounded-full -z-10"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Desktop Social CTAs */}
        <div className="hidden lg:flex items-center gap-2">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-2 rounded-full glass-pill text-slate-700 hover:text-indigo-600 hover:border-indigo-200 transition-all shadow-xs"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-2 rounded-full glass-pill text-slate-700 hover:text-indigo-600 hover:border-indigo-200 transition-all shadow-xs"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href="#contact"
            className="glass-pill px-4 py-1.5 rounded-full text-xs font-bold text-slate-800 bg-gradient-to-r from-indigo-50 to-purple-50 hover:from-indigo-100 hover:to-purple-100 border border-indigo-200/80 shadow-xs flex items-center gap-1.5 transition-all"
          >
            <span>Connect</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-indigo-600" />
          </a>
        </div>

        {/* Mobile Hamburger Button (min 44px tap target) */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden glass-pill min-w-[44px] min-h-[44px] p-2.5 rounded-full text-slate-800 flex items-center justify-center focus:outline-none shadow-sm"
          aria-label="Toggle Mobile Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Glass Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden mt-2 max-w-sm mx-auto pointer-events-auto px-2"
          >
            <div className="glass-panel p-4 rounded-3xl flex flex-col gap-1.5 shadow-glass border-white">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 rounded-2xl text-sm font-semibold text-slate-700 hover:text-indigo-600 hover:bg-white/70 transition-colors flex items-center justify-between min-h-[44px]"
                >
                  <span>{link.name}</span>
                  <span className="text-xs text-indigo-400">→</span>
                </a>
              ))}
              <div className="pt-3 mt-1 border-t border-slate-200/60 flex items-center justify-around">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-indigo-600 p-2 min-h-[44px]"
                >
                  <Github className="w-4 h-4" /> GitHub
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-indigo-600 p-2 min-h-[44px]"
                >
                  <Linkedin className="w-4 h-4" /> LinkedIn
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-indigo-600 p-2 min-h-[44px]"
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
