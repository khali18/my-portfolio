import React, { useState, useEffect } from 'react';
import ParticleCanvas from './components/ParticleCanvas';
import MouseGlow from './components/MouseGlow';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AIChatWidget from './components/AIChatWidget';

export default function App() {
    const [isDark, setIsDark] = useState(true);

    // Sync dark class on html root element
    useEffect(() => {
        const root = document.documentElement;
        if (isDark) {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
    }, [isDark]);

    return (
        <div className="min-h-screen relative font-sans text-slate-900 dark:text-slate-100 bg-slate-50 dark:bg-navy-950 transition-colors duration-300">
            {/* Background Animated Particle Canvas */}
            <ParticleCanvas isDark={isDark} />

            {/* Mouse Cursor Spotlight Glow */}
            <MouseGlow isDark={isDark} />

            {/* Header Navigation */}
            <Header isDark={isDark} setIsDark={setIsDark} />

            {/* Main Content Sections */}
            <main className="relative z-10 space-y-12">
                <Hero />
                <About />
                <Services />
                <Skills />
                <Projects />
                <Process />
                <Testimonials />
                <Blog />
                <Contact />
            </main>

            {/* Footer */}
            <Footer />

            {/* Interactive AI Assistant Floating Widget */}
            <AIChatWidget />
        </div>
    );
}
