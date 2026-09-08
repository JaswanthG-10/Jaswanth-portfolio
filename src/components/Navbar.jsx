import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Volume2, VolumeX, Github, Linkedin, Send } from 'lucide-react';
import { navLinks, personalInfo } from '../data/portfolioData';
import { playClickSound, playHoverSound, toggleSoundMute, getSoundMuted } from '../utils/audioEffects';

export const Navbar = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    setIsMuted(getSoundMuted());

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = ['hero', ...navLinks.map((l) => l.href.substring(1))];
      const pos = window.scrollY + 220;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= pos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSoundToggle = () => {
    const unmuted = toggleSoundMute();
    setIsMuted(!unmuted);
    if (unmuted) playClickSound();
  };

  const handleNavClick = () => {
    playClickSound();
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-200 ${
        scrolled
          ? 'py-2.5 bg-[#0A0A0C]/90 backdrop-blur-md border-b border-white/15 shadow-2xl'
          : 'py-4 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a
          href="#hero"
          onClick={handleNavClick}
          onMouseEnter={playHoverSound}
          className="flex items-center gap-2.5 group"
        >
          <div
            className="w-9 h-9 rounded-xl p-[2px] shadow-cinematic-red transition-transform group-hover:scale-105"
            style={{ background: 'linear-gradient(135deg, #E11D48, #F43F5E, #06B6D4)' }}
          >
            <div className="w-full h-full rounded-xl bg-[#0A0A0C] flex items-center justify-center text-white font-extrabold text-xs hero-heading border border-white/20">
              JG
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold text-white tracking-tight group-hover:text-[#F43F5E] transition-colors">
              Jaswanth G
            </span>
            <span className="text-[10px] font-semibold text-[#06B6D4] tracking-wider uppercase font-mono">
              CSE • AI/ML & Software
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 px-4 py-1.5 rounded-full border border-white/15 bg-[#121218]/90 backdrop-blur-md shadow-xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={handleNavClick}
              onMouseEnter={playHoverSound}
              className={`relative px-3.5 py-1 text-xs font-bold uppercase tracking-wider rounded-full transition-all min-h-[32px] flex items-center ${
                activeSection === link.href.substring(1)
                  ? 'text-white bg-gradient-to-r from-[#E11D48] to-[#06B6D4] shadow-cinematic-red'
                  : 'text-slate-300 hover:text-white hover:bg-white/10'
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="hidden sm:flex items-center gap-2.5">
          {/* GitHub Icon */}
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleNavClick}
            onMouseEnter={playHoverSound}
            className="p-2 rounded-full text-slate-300 hover:text-white border border-white/15 bg-[#121218] transition-colors min-w-[36px] min-h-[36px] flex items-center justify-center"
            title="View GitHub Profile"
          >
            <Github className="w-4 h-4" />
          </a>

          {/* LinkedIn Icon */}
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleNavClick}
            onMouseEnter={playHoverSound}
            className="p-2 rounded-full text-slate-300 hover:text-[#06B6D4] border border-white/15 bg-[#121218] transition-colors min-w-[36px] min-h-[36px] flex items-center justify-center"
            title="View LinkedIn Profile"
          >
            <Linkedin className="w-4 h-4" />
          </a>

          {/* Sound Toggle */}
          <button
            onClick={handleSoundToggle}
            onMouseEnter={playHoverSound}
            className="p-2 rounded-full text-slate-300 hover:text-[#06B6D4] border border-white/15 bg-[#121218] transition-colors min-w-[36px] min-h-[36px] flex items-center justify-center cursor-pointer"
            title={isMuted ? 'Unmute Audio' : 'Mute Audio'}
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-[#06B6D4]" />}
          </button>

          {/* Let's Build CTA */}
          <a
            href="#contact"
            onClick={handleNavClick}
            onMouseEnter={playHoverSound}
            className="px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest text-white flex items-center gap-1.5 hover:opacity-95 min-h-[36px] transition-all bg-gradient-to-r from-[#E11D48] via-[#F43F5E] to-[#06B6D4] shadow-cinematic-red"
          >
            <span>Connect</span>
            <Send className="w-3 h-3 text-white" />
          </a>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex sm:hidden items-center gap-1.5">
          <button
            onClick={handleSoundToggle}
            className="w-9 h-9 rounded-full text-slate-300 border border-white/15 bg-[#121218] flex items-center justify-center cursor-pointer"
            aria-label="Toggle Audio"
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-[#06B6D4]" />}
          </button>

          <button
            onClick={() => { playClickSound(); setMobileMenuOpen(!mobileMenuOpen); }}
            className="w-9 h-9 rounded-full text-white border border-white/15 bg-[#121218] flex items-center justify-center cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-b border-white/15 bg-[#0A0A0C]/95 backdrop-blur-xl overflow-hidden"
          >
            <div className="px-4 pt-3 pb-5 space-y-1.5 max-w-7xl mx-auto text-slate-200">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => { playClickSound(); setMobileMenuOpen(false); }}
                  className="block px-3.5 py-2.5 rounded-xl text-sm font-bold uppercase tracking-wider text-slate-300 hover:bg-white/10 hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
