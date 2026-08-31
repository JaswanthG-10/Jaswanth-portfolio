import React, { useState, useEffect } from 'react';
import { BackgroundParticles } from './components/BackgroundParticles';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { LoginIntro } from './components/LoginIntro';

export default function App() {
  const [isUnlocked, setIsUnlocked] = useState(false);

  useEffect(() => {
    // Check if intro was already played in session
    const unlocked = sessionStorage.getItem('portfolio_unlocked');
    if (unlocked === 'true') {
      setIsUnlocked(true);
    }
  }, []);

  const handleUnlock = () => {
    sessionStorage.setItem('portfolio_unlocked', 'true');
    setIsUnlocked(true);
  };

  const handleReplayIntro = () => {
    sessionStorage.removeItem('portfolio_unlocked');
    setIsUnlocked(false);
  };

  return (
    <div className="relative min-h-screen text-slate-800 antialiased overflow-hidden">
      
      {/* Scene 1 & 2: 3D Rolling Login Intro Sequence */}
      {!isUnlocked && <LoginIntro onComplete={handleUnlock} />}

      {/* Background Particles */}
      <BackgroundParticles />

      {/* Floating Navbar */}
      <Navbar onReplayIntro={handleReplayIntro} />

      {/* Scene 3: Portfolio Reveal Main Content */}
      <main className="relative z-10 space-y-8">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>

      {/* Footer */}
      <Footer onReplayIntro={handleReplayIntro} />

    </div>
  );
}
