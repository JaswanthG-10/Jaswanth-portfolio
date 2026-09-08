import React from 'react';
import { BackgroundParticles } from './components/BackgroundParticles';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Hackathons } from './components/Hackathons';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen w-full max-w-full text-slate-100 antialiased overflow-x-hidden bg-[#0A0A0C]">
      
      {/* Background Particles */}
      <BackgroundParticles />

      {/* Floating Cinematic Navbar */}
      <Navbar />

      {/* Main Portfolio Layout */}
      <main className="relative z-10 space-y-4 w-full max-w-full overflow-hidden">
        <Hero />
        <About />
        <Projects />
        <Hackathons />
        <Skills />
        <Experience />
        <Education />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
}
