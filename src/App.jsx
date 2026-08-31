import React from 'react';
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

export default function App() {
  return (
    <div className="relative min-h-screen text-slate-800 antialiased overflow-hidden">
      
      {/* Background Floating Particle Dust Motes */}
      <BackgroundParticles />

      {/* Floating Glass Top Navigation */}
      <Navbar />

      {/* Main Content Sections */}
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
      <Footer />

    </div>
  );
}
