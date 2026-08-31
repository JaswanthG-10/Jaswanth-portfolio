import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight, Compass, ChevronDown } from 'lucide-react';
import confetti from 'canvas-confetti';
import { useDeviceCapabilities } from '../hooks/useDeviceCapabilities';
import { personalInfo } from '../data/portfolioData';

export const WelcomeGateway = ({ onEnter }) => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const { isTouch, prefersReducedMotion } = useDeviceCapabilities();
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
        colors: ['#6C5CE7', '#4C8DFF', '#8B7CFF', '#67C6E3'],
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

  return (
    <AnimatePresence>
      {!isTransitioning ? (
        <div
          onMouseMove={handleMouseMove}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#EEF1F7] text-[#172033] overflow-hidden p-4 sm:p-6 w-full h-full select-none"
        >
          {/* SOFT FUTURISTIC AURORA BACKGROUND (#EEF1F7 -> #E9EDF8 -> #F2F0FA) */}
          <div className="absolute inset-0 bg-radial from-[#E6EAF3] via-[#E9EDF8] to-[#EEF1F7] pointer-events-none opacity-90" />
          
          <motion.div
            style={{
              x: mousePos.x * -25,
              y: mousePos.y * -25,
            }}
            transition={{ type: 'spring', damping: 30, stiffness: 90 }}
            className="absolute bottom-10 left-10 w-[550px] h-[550px] bg-gradient-to-tr from-[#6C5CE7]/25 via-[#4C8DFF]/20 to-transparent rounded-full blur-3xl pointer-events-none"
          />

          <motion.div
            style={{
              x: mousePos.x * 25,
              y: mousePos.y * 25,
            }}
            transition={{ type: 'spring', damping: 30, stiffness: 90 }}
            className="absolute top-10 right-10 w-[600px] h-[600px] bg-gradient-to-tr from-[#67C6E3]/25 via-[#8B7CFF]/20 to-transparent rounded-full blur-3xl pointer-events-none"
          />

          {/* AI NEURAL NETWORK CONNECTIONS MESH (DEPTH -3) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
            <line x1="12%" y1="18%" x2="28%" y2="38%" stroke="#6C5CE7" strokeWidth="1" strokeDasharray="4 4" />
            <line x1="28%" y1="38%" x2="22%" y2="68%" stroke="#4C8DFF" strokeWidth="1" />
            <line x1="88%" y1="22%" x2="72%" y2="48%" stroke="#67C6E3" strokeWidth="1" strokeDasharray="4 4" />
            <line x1="72%" y1="48%" x2="78%" y2="78%" stroke="#8B7CFF" strokeWidth="1" />
            <circle cx="12%" cy="18%" r="4" fill="#6C5CE7" />
            <circle cx="28%" cy="38%" r="5" fill="#4C8DFF" />
            <circle cx="22%" cy="68%" r="4" fill="#67C6E3" />
            <circle cx="88%" cy="22%" r="4" fill="#67C6E3" />
            <circle cx="72%" cy="48%" r="5" fill="#6C5CE7" />
            <circle cx="78%" cy="78%" r="4" fill="#8B7CFF" />
          </svg>

          {/* PERSPECTIVE GRID FLOOR */}
          <div
            className="absolute bottom-0 inset-x-0 h-44 pointer-events-none opacity-10"
            style={{
              backgroundImage: 'linear-gradient(to right, #6C5CE7 1px, transparent 1px), linear-gradient(to bottom, #4C8DFF 1px, transparent 1px)',
              backgroundSize: '44px 44px',
              transform: 'perspective(500px) rotateX(60deg)',
              transformOrigin: 'bottom center',
            }}
          />

          {/* QUICK SKIP INTRO BUTTON */}
          <button
            onClick={() => {
              setIsTransitioning(true);
              setTimeout(onEnter, 400);
            }}
            className="absolute top-6 right-6 z-50 glass-pill px-4 py-2 rounded-full text-xs font-bold text-[#58647A] hover:text-[#6C5CE7] bg-white/80 border border-white shadow-2xs flex items-center gap-1.5 transition-all min-h-[40px]"
          >
            <span>Skip Intro</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          {/* CENTRAL 3D GLASS PORTAL WITH STAGGERED 3D ROLL-ON UNFOLDING */}
          <motion.div
            initial={
              prefersReducedMotion
                ? { opacity: 0, scale: 0.95 }
                : {
                    rotateX: 70,
                    translateY: -100,
                    translateZ: -200,
                    scale: 0.85,
                    opacity: 0,
                  }
            }
            animate={
              prefersReducedMotion
                ? { opacity: 1, scale: 1 }
                : {
                    rotateX: mousePos.y * -2.5,
                    rotateY: mousePos.x * 2.5,
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
            <div className="glass-panel p-6 sm:p-10 rounded-3xl shadow-[0_25px_60px_rgba(108,92,231,0.18)] border-white/90 bg-white/75 relative overflow-hidden">
              
              {/* Dynamic Light Sweep Highlight */}
              <div
                className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/50 to-transparent pointer-events-none transition-opacity duration-300"
                style={{
                  transform: `translate(${mousePos.x * 40}px, ${mousePos.y * 40}px)`,
                }}
              />

              {/* 3D JG LOGO WITH MULTIPLE ORBITAL RINGS */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="relative w-36 h-36 sm:w-40 sm:h-40 mx-auto mb-4 flex items-center justify-center group"
              >
                {/* Outer Glass Ring (Clockwise) */}
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#6C5CE7]/60 animate-spin-slow group-hover:scale-105 transition-transform" />
                
                {/* Inner Gradient Ring (Counter-Clockwise) */}
                <div className="absolute inset-3 rounded-full border border-[#4C8DFF]/50 animate-pulse-subtle group-hover:border-[#67C6E3] transition-colors" />

                {/* Central JG Sphere */}
                <motion.div
                  whileHover={{ scale: 1.08, z: 20 }}
                  className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-tr from-[#6C5CE7] via-[#8B7CFF] to-[#4C8DFF] p-1 shadow-[0_12px_30px_rgba(108,92,231,0.35)] flex items-center justify-center transition-all duration-300"
                >
                  <div className="w-full h-full rounded-full bg-white/95 backdrop-blur-md flex flex-col items-center justify-center p-2 text-center">
                    <span className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-[#6C5CE7] to-[#4C8DFF] bg-clip-text text-transparent font-display">
                      JG
                    </span>
                    <span className="text-[9px] font-bold text-[#58647A] tracking-wider uppercase">
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
                className="inline-flex items-center gap-2 glass-pill px-3.5 py-1.5 rounded-full text-xs font-bold text-[#6C5CE7] mb-4 border border-[#6C5CE7]/20 shadow-2xs"
              >
                <Compass className="w-3.5 h-3.5 text-[#6C5CE7] animate-spin-slow" />
                <span>WELCOME TO MY PORTFOLIO</span>
              </motion.div>

              {/* NAME & ROLE */}
              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.4 }}
                className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#172033] leading-tight"
              >
                {personalInfo.name}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="mt-2 text-xs sm:text-sm font-semibold text-[#6C5CE7] uppercase tracking-wider"
              >
                AI/ML Engineer & Backend Developer
              </motion.p>

              {/* 3D "VIEW PORTFOLIO →" CTA BUTTON */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.4 }}
                className="mt-6 sm:mt-8"
              >
                <button
                  onClick={handleEnterClick}
                  className="group relative inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#6C5CE7] via-[#8B7CFF] to-[#4C8DFF] hover:from-[#5b4bd6] hover:to-[#3b7ceb] shadow-[0_10px_25px_rgba(108,92,231,0.35)] transition-all duration-300 hover:-translate-y-1 active:translate-y-0 min-h-[48px] w-full sm:w-auto"
                >
                  <Sparkles className="w-4 h-4 text-purple-100 group-hover:rotate-12 transition-transform" />
                  <span>View Portfolio</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>

              {/* SCROLL / INTERACTION INDICATOR */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="mt-6 flex flex-col items-center gap-1 text-[10px] font-bold text-[#58647A] uppercase tracking-widest"
              >
                <span>Explore My Work</span>
                <ChevronDown className="w-3.5 h-3.5 text-[#6C5CE7] animate-bounce" />
              </motion.div>

            </div>
          </motion.div>

        </div>
      ) : (
        /* PORTFOLIO ENTRY TRANSITION CAMERA PUSH LAYER */
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: [0, 1, 0], scale: [0.9, 1.2, 1] }}
          transition={{ duration: 1.0, times: [0, 0.4, 1] }}
          className="fixed inset-0 z-50 bg-[#EEF1F7] pointer-events-none"
        />
      )}
    </AnimatePresence>
  );
};
