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
import { WelcomeGateway } from './components/WelcomeGateway';

export default function App() {
  const [isEntered, setIsEntered] = useState(false);

  useEffect(() => {
    // Check if welcome gateway was already passed in current session
    const entered = sessionStorage.getItem('portfolio_entered');
    if (entered === 'true') {
      setIsEntered(true);
    }
  }, []);

  const handleEnter = () => {
    sessionStorage.setItem('portfolio_entered', 'true');
    setIsEntered(true);
  };

  const handleReplayGateway = () => {
    sessionStorage.removeItem('portfolio_entered');
    setIsEntered(false);
  };

  return (
    <div className="relative min-h-screen text-slate-800 antialiased overflow-hidden">
      
      {/* 3D Welcome Gateway Screen */}
      {!isEntered && <WelcomeGateway onEnter={handleEnter} />}

      {/* Background Particles */}
      <BackgroundParticles />

      {/* Floating Navbar */}
      <Navbar onReplayIntro={handleReplayGateway} />

      {/* Main Portfolio Content */}
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
      <Footer onReplayIntro={handleReplayGateway} />

    </div>
  );
}
