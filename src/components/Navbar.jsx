import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles, Play } from 'lucide-react';
import { navLinks } from '../data/portfolioData';

export const Navbar = ({ onReplayIntro }) => {
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navLinks.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        scrolled ? 'py-3 bg-[#EEF1F7]/85 backdrop-blur-xl border-b border-[#6C5CE7]/15 shadow-sm' : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo Monogram */}
        <a
          href="#hero"
          className="flex items-center gap-2.5 group focus:outline-none"
        >
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#6C5CE7] via-[#8B7CFF] to-[#4C8DFF] p-0.5 shadow-[0_4px_15px_rgba(108,92,231,0.3)] transition-transform duration-300 group-hover:scale-105">
            <div className="w-full h-full rounded-2xl bg-white flex items-center justify-center text-[#6C5CE7] font-extrabold text-sm font-display">
              JG
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-extrabold text-[#172033] tracking-tight group-hover:text-[#6C5CE7] transition-colors">
              Jaswanth G
            </span>
            <span className="text-[10px] font-bold text-[#58647A] tracking-wider uppercase">
              AI/ML & Systems
            </span>
          </div>
        </a>

        {/* Desktop Nav Items */}
        <nav className="hidden md:flex items-center gap-1.5 glass-pill px-4 py-1.5 rounded-full border-white/80 shadow-2xs">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`relative px-3.5 py-1.5 text-xs font-bold rounded-full transition-all duration-200 min-h-[36px] flex items-center ${
                  isActive
                    ? 'text-[#6C5CE7] bg-white shadow-2xs'
                    : 'text-[#58647A] hover:text-[#172033] hover:bg-white/60'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Action Buttons: Replay Welcome & Contact */}
        <div className="hidden sm:flex items-center gap-2.5">
          {onReplayIntro && (
            <button
              onClick={onReplayIntro}
              className="glass-pill px-3.5 py-1.5 rounded-full text-xs font-bold text-[#58647A] hover:text-[#6C5CE7] bg-white/80 border border-white shadow-2xs flex items-center gap-1.5 min-h-[36px]"
            >
              <Play className="w-3 h-3 text-[#6C5CE7]" />
              <span>3D Welcome</span>
            </button>
          )}

          <a
            href="#contact"
            className="glass-pill px-4 py-2 rounded-full text-xs font-bold text-white bg-gradient-to-r from-[#6C5CE7] to-[#4C8DFF] hover:from-[#5b4bd6] hover:to-[#3b7ceb] shadow-[0_4px_15px_rgba(108,92,231,0.3)] transition-all duration-200 flex items-center gap-1.5 hover:scale-105 min-h-[40px]"
          >
            <span>Let's Talk</span>
            <Sparkles className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="glass-pill p-2.5 rounded-full text-[#172033] hover:text-[#6C5CE7] focus:outline-none min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-panel border-b border-[#6C5CE7]/15 bg-[#EEF1F7]/95 backdrop-blur-2xl overflow-hidden"
          >
            <div className="px-4 pt-3 pb-6 space-y-2 max-w-7xl mx-auto">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-3 rounded-2xl text-sm font-bold text-[#172033] hover:bg-white hover:text-[#6C5CE7] transition-all min-h-[44px] flex items-center"
                >
                  {link.name}
                </a>
              ))}
              
              {onReplayIntro && (
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onReplayIntro();
                  }}
                  className="w-full text-left px-4 py-3 rounded-2xl text-sm font-bold text-[#6C5CE7] hover:bg-white transition-all flex items-center gap-2"
                >
                  <Play className="w-4 h-4 text-[#6C5CE7]" />
                  <span>Replay 3D Welcome Screen</span>
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
