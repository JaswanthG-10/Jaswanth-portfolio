import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight, Compass, Code2, Database, Cpu, Cloud, Layers, Terminal, ChevronDown } from 'lucide-react';
import confetti from 'canvas-confetti';
import { useDeviceCapabilities } from '../hooks/useDeviceCapabilities';
import { personalInfo } from '../data/portfolioData';

export const WelcomeGateway = ({ onEnter }) => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const { isTouch, tier, prefersReducedMotion } = useDeviceCapabilities();
  const isMobile = typeof window !== 'undefined' ? window.innerWidth < 768 : false;

  // Mouse Parallax Lerp Movement
  const handleMouseMove = (e) => {
    if (isTouch || isMobile || prefersReducedMotion) return;
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX - innerWidth / 2) / (innerWidth / 2);
    const y = (clientY - innerHeight / 2) / (innerHeight / 2);
    setMousePos({ x, y });
  };

  const handleEnterClick = () => {
    if (isTransitioning) return;
    setIsPressed(true);

    try {
      confetti({
        particleCount: isTouch ? 35 : 75,
        spread: 80,
        origin: { y: 0.65 },
        colors: ['#6366f1', '#8b5cf6', '#0ea5e9', '#10b981'],
      });
    } catch (e) {
      // fallback
    }

    // Portal roll-away & camera push transition
    setTimeout(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        onEnter();
      }, 1200);
    }, 400);
  };

  // Floating Glass Tech Skills for Z-Depth Layers
  const floatingSkills = [
    { name: 'Python', icon: Code2, pos: 'top-16 left-12 lg:left-24', z: '-20px', delay: 0 },
    { name: 'AI / ML', icon: Cpu, pos: 'top-40 left-8 lg:left-16', z: '10px', delay: 0.2 },
    { name: 'FastAPI', icon: Terminal, pos: 'bottom-32 left-14 lg:left-28', z: '-10px', delay: 0.4 },
    { name: 'React', icon: Layers, pos: 'top-20 right-12 lg:right-24', z: '15px', delay: 0.1 },
    { name: 'ChromaDB', icon: Database, pos: 'top-44 right-8 lg:right-16', z: '-15px', delay: 0.3 },
    { name: 'RAG', icon: Cloud, pos: 'bottom-28 right-14 lg:right-28', z: '20px', delay: 0.5 },
  ];

  return (
    <AnimatePresence>
      {!isTransitioning ? (
        <div
          onMouseMove={handleMouseMove}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#F8FAFC] text-slate-900 overflow-hidden p-4 sm:p-6 w-full h-full select-none"
        >
          {/* 8. SOFT AURORA LIGHTING (LIGHT THEME PURPLE/BLUE/CYAN GRADIENTS) */}
          <div className="absolute inset-0 bg-radial from-[#E8F1FF] via-[#F1EEFC] to-[#F8FAFC] pointer-events-none opacity-85" />
          
          <motion.div
            style={{
              x: mousePos.x * -25,
              y: mousePos.y * -25,
            }}
            transition={{ type: 'spring', damping: 30, stiffness: 90 }}
            className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-gradient-to-tr from-indigo-200/50 via-purple-100/40 to-transparent rounded-full blur-3xl pointer-events-none"
          />

          <motion.div
            style={{
              x: mousePos.x * 25,
              y: mousePos.y * 25,
            }}
            transition={{ type: 'spring', damping: 30, stiffness: 90 }}
            className="absolute top-10 right-10 w-[550px] h-[550px] bg-gradient-to-tr from-sky-200/40 via-purple-100/30 to-transparent rounded-full blur-3xl pointer-events-none"
          />

          {/* 3. SUBTLE AI NEURAL NETWORK (DEPTH -3) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-15">
            <line x1="15%" y1="20%" x2="30%" y2="40%" stroke="#6366f1" strokeWidth="1" strokeDasharray="4 4" />
            <line x1="30%" y1="40%" x2="25%" y2="70%" stroke="#8b5cf6" strokeWidth="1" />
            <line x1="85%" y1="25%" x2="70%" y2="50%" stroke="#0ea5e9" strokeWidth="1" strokeDasharray="4 4" />
            <line x1="70%" y1="50%" x2="75%" y2="75%" stroke="#6366f1" strokeWidth="1" />
            <circle cx="15%" cy="20%" r="4" fill="#6366f1" />
            <circle cx="30%" cy="40%" r="5" fill="#8b5cf6" />
            <circle cx="25%" cy="70%" r="4" fill="#0ea5e9" />
            <circle cx="85%" cy="25%" r="4" fill="#0ea5e9" />
            <circle cx="70%" cy="50%" r="5" fill="#6366f1" />
            <circle cx="75%" cy="75%" r="4" fill="#8b5cf6" />
          </svg>

          {/* 9. SUBTLE 3D PERSPECTIVE GRID AT BOTTOM FLOOR */}
          <div
            className="absolute bottom-0 inset-x-0 h-40 pointer-events-none opacity-10"
            style={{
              backgroundImage: 'linear-gradient(to right, #6366f1 1px, transparent 1px), linear-gradient(to bottom, #6366f1 1px, transparent 1px)',
              backgroundSize: '40px 40px',
              transform: 'perspective(500px) rotateX(60deg)',
              transformOrigin: 'bottom center',
            }}
          />

          {/* 2. LEFT & RIGHT FLOATING 3D GLASS TECH TAGS (DESKTOP & TABLET ONLY) */}
          {!isMobile && (
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              {floatingSkills.map((skill, idx) => {
                const IconComp = skill.icon;
                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: 0.85,
                      y: [0, -10, 0],
                      x: mousePos.x * (idx % 2 === 0 ? 15 : -15),
                    }}
                    transition={{
                      opacity: { delay: 0.8 + skill.delay, duration: 0.6 },
                      y: { duration: 4 + idx, repeat: Infinity, ease: 'easeInOut' },
                      x: { type: 'spring', damping: 25 },
                    }}
                    className={`absolute ${skill.pos} hidden md:flex items-center gap-2 glass-pill px-3.5 py-1.5 rounded-2xl border-white/80 bg-white/70 shadow-glass text-xs font-bold text-slate-700`}
                    style={{ transform: `translateZ(${skill.z})` }}
                  >
                    <IconComp className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                    <span>{skill.name}</span>
                  </motion.div>
                );
              })}
            </div>
          )}

          {/* QUICK SKIP INTRO BUTTON */}
          <button
            onClick={() => {
              setIsTransitioning(true);
              setTimeout(onEnter, 400);
            }}
            className="absolute top-6 right-6 z-50 glass-pill px-4 py-2 rounded-full text-xs font-bold text-slate-600 hover:text-indigo-600 bg-white/80 border border-white shadow-2xs flex items-center gap-1.5 transition-all min-h-[40px]"
          >
            <span>Skip Intro</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          {/* 4. CENTRAL 3D GLASS CARD WITH STAGGERED 3D ROLL-ON UNFOLDING */}
          <motion.div
            initial={
              prefersReducedMotion
                ? { opacity: 0, scale: 0.95 }
                : {
                    rotateX: 65,
                    translateY: -80,
                    translateZ: -150,
                    scale: 0.88,
                    opacity: 0,
                  }
            }
            animate={
              prefersReducedMotion
                ? { opacity: 1, scale: 1 }
                : {
                    rotateX: mousePos.y * -3,
                    rotateY: mousePos.x * 3,
                    translateY: 0,
                    translateZ: 0,
                    scale: isPressed ? 0.96 : 1,
                    opacity: 1,
                  }
            }
            exit={{
              scale: 1.45,
              opacity: 0,
              rotateX: -40,
              translateY: -100,
              filter: 'blur(16px)',
              transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
            }}
            transition={{
              duration: isTouch ? 0.8 : 1.2,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative w-full max-w-lg text-center pointer-events-auto z-10"
            style={{ perspective: 1000, transformStyle: 'preserve-3d' }}
          >
            <div className="glass-panel p-6 sm:p-10 rounded-3xl shadow-[0_25px_60px_rgba(99,102,241,0.2)] border-white bg-white/85 relative overflow-hidden">
              
              {/* Dynamic Light Sweep Highlight Following Cursor */}
              <div
                className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-transparent pointer-events-none transition-opacity duration-300"
                style={{
                  transform: `translate(${mousePos.x * 40}px, ${mousePos.y * 40}px)`,
                }}
              />

              {/* 5. INTERACTIVE 3D JG LOGO WITH MULTIPLE ORBITAL RINGS */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="relative w-36 h-36 sm:w-40 sm:h-40 mx-auto mb-4 flex items-center justify-center group"
              >
                {/* Outer Glass Ring (Clockwise) */}
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-indigo-400/60 animate-spin-slow group-hover:scale-105 transition-transform" />
                
                {/* Inner Gradient Ring (Counter-Clockwise) */}
                <div className="absolute inset-3 rounded-full border border-purple-400/50 animate-pulse-subtle group-hover:border-purple-500 transition-colors" />

                {/* Central JG Sphere */}
                <motion.div
                  whileHover={{ scale: 1.08, z: 20 }}
                  className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-tr from-indigo-500 via-purple-500 to-sky-400 p-1 shadow-[0_12px_30px_rgba(99,102,241,0.35)] flex items-center justify-center transition-all duration-300"
                >
                  <div className="w-full h-full rounded-full bg-white/95 backdrop-blur-md flex flex-col items-center justify-center p-2 text-center">
                    <span className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent font-display">
                      JG
                    </span>
                    <span className="text-[9px] font-bold text-slate-500 tracking-wider uppercase">
                      AI / ML
                    </span>
                  </div>
                </motion.div>
              </motion.div>

              {/* WELCOME PILL BADGE */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.4 }}
                className="inline-flex items-center gap-2 glass-pill px-3.5 py-1.5 rounded-full text-xs font-bold text-indigo-700 mb-4 border border-indigo-100 shadow-2xs"
              >
                <Compass className="w-3.5 h-3.5 text-indigo-500 animate-spin-slow" />
                <span>WELCOME TO MY PORTFOLIO</span>
              </motion.div>

              {/* NAME & ROLE */}
              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.4 }}
                className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight"
              >
                Jaswanth G.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="mt-2 text-xs sm:text-sm font-semibold text-indigo-600 uppercase tracking-wider"
              >
                AI/ML Engineer & Backend Developer
              </motion.p>

              {/* 10. REDESIGNED 3D "VIEW PORTFOLIO →" CTA BUTTON */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.4 }}
                className="mt-6 sm:mt-8"
              >
                <button
                  onClick={handleEnterClick}
                  className="group relative inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-sky-500 hover:from-indigo-700 hover:to-sky-600 shadow-[0_10px_25px_rgba(99,102,241,0.35)] transition-all duration-300 hover:-translate-y-1 active:translate-y-0 min-h-[48px] w-full sm:w-auto"
                >
                  <Sparkles className="w-4 h-4 text-indigo-200 group-hover:rotate-12 transition-transform" />
                  <span>View Portfolio</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>

              {/* 12. SCROLL / INTERACTION INDICATOR */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="mt-6 flex flex-col items-center gap-1 text-[10px] font-bold text-slate-400 uppercase tracking-widest"
              >
                <span>Explore My Work</span>
                <ChevronDown className="w-3.5 h-3.5 text-indigo-400 animate-bounce" />
              </motion.div>

            </div>
          </motion.div>

        </div>
      ) : (
        /* 11. PORTFOLIO ENTRY TRANSITION CAMERA PUSH LAYER */
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: [0, 1, 0], scale: [0.9, 1.2, 1] }}
          transition={{ duration: 1.0, times: [0, 0.4, 1] }}
          className="fixed inset-0 z-50 bg-white pointer-events-none"
        />
      )}
    </AnimatePresence>
  );
};
