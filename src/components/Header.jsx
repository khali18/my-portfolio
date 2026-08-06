import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, Bot, Sparkles, Send } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Process', href: '#process' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Blog', href: '#blog' },
    { label: 'Contact', href: '#contact' },
];

export default function Header({ isDark, setIsDark }) {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);

            // Section tracker
            const sections = navItems.map((item) => item.href.substring(1));
            const scrollPos = window.scrollY + 200;

            for (const section of sections) {
                const el = document.getElementById(section);
                if (el) {
                    const top = el.offsetTop;
                    const height = el.offsetHeight;
                    if (scrollPos >= top && scrollPos < top + height) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                    ? isDark
                        ? 'bg-navy-950/80 backdrop-blur-md border-b border-slate-800/60 shadow-lg'
                        : 'bg-white/80 backdrop-blur-md border-b border-slate-200/80 shadow-sm'
                    : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
                {/* Brand Logo */}
                <a href="#home" className="flex items-center gap-3 group">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-electric-600 to-emerald-accent flex items-center justify-center text-white shadow-glow-blue group-hover:scale-105 transition-transform duration-300">
                        <Bot className="w-5 h-5 animate-pulse" />
                    </div>
                    <div>
                        <div className="font-extrabold text-lg tracking-tight flex items-center gap-1.5 text-slate-900 dark:text-white">
                            <span>{personalInfo.name}</span>
                            <Sparkles className="w-4 h-4 text-electric-500" />
                        </div>
                        <span className="text-[11px] font-mono tracking-wider uppercase text-electric-600 dark:text-electric-400 block font-semibold">
                            AI Automation Eng.
                        </span>
                    </div>
                </a>

                {/* Desktop Nav Links */}
                <nav className="hidden lg:flex items-center gap-1 bg-slate-200/50 dark:bg-navy-900/60 p-1.5 rounded-full border border-slate-300/50 dark:border-slate-800/80">
                    {navItems.map((item) => {
                        const isActive = activeSection === item.href.substring(1);
                        return (
                            <a
                                key={item.label}
                                href={item.href}
                                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${isActive
                                        ? 'bg-electric-600 text-white shadow-sm'
                                        : 'text-slate-600 dark:text-slate-300 hover:text-electric-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/50'
                                    }`}
                            >
                                {item.label}
                            </a>
                        );
                    })}
                </nav>

                {/* Action Controls */}
                <div className="hidden sm:flex items-center gap-3">
                    {/* Theme Toggle */}
                    <button
                        onClick={() => setIsDark(!isDark)}
                        aria-label="Toggle theme"
                        className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                    >
                        {isDark ? (
                            <Sun className="w-4 h-4 text-amber-400" />
                        ) : (
                            <Moon className="w-4 h-4 text-slate-700" />
                        )}
                    </button>

                    {/* Hire Me CTA */}
                    <a
                        href="#contact"
                        className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-electric-600 to-emerald-accent hover:from-electric-500 hover:to-emerald-400 shadow-glow-blue transition-all duration-300 hover:scale-105 active:scale-95"
                    >
                        <Send className="w-3.5 h-3.5" />
                        <span>Hire Me</span>
                    </a>
                </div>

                {/* Mobile Menu Toggle & Theme */}
                <div className="flex sm:hidden items-center gap-2">
                    <button
                        onClick={() => setIsDark(!isDark)}
                        aria-label="Toggle theme mobile"
                        className="p-2 rounded-lg text-slate-700 dark:text-slate-300"
                    >
                        {isDark ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5" />}
                    </button>

                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle mobile nav"
                        className="p-2 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                    >
                        {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Drawer */}
            {mobileMenuOpen && (
                <div className="sm:hidden bg-slate-50 dark:bg-navy-950 border-b border-slate-200 dark:border-slate-800 px-4 pt-3 pb-6 space-y-2 shadow-2xl">
                    {navItems.map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block px-4 py-2.5 rounded-lg text-sm font-semibold text-slate-700 dark:text-slate-200 hover:bg-electric-600 hover:text-white transition-colors"
                        >
                            {item.label}
                        </a>
                    ))}
                    <a
                        href="#contact"
                        onClick={() => setMobileMenuOpen(false)}
                        className="w-full mt-3 flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-electric-600 to-emerald-accent"
                    >
                        <Send className="w-4 h-4" />
                        <span>Hire Me</span>
                    </a>
                </div>
            )}
        </header>
    );
}
