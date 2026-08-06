import React from 'react';
import { ArrowUp, Bot, Heart, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="relative z-10 bg-navy-950 text-slate-400 border-t border-slate-800/80 pt-16 pb-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

                {/* Top Quote Callout */}
                <div className="p-8 rounded-3xl bg-slate-900/80 border border-slate-800 text-center max-w-3xl mx-auto space-y-3 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-electric-500/10 rounded-full blur-2xl pointer-events-none" />
                    <p className="text-lg sm:text-xl font-bold text-white italic">
                        "{personalInfo.mission}"
                    </p>
                    <span className="text-xs font-mono text-electric-400 font-semibold block">
                        — Sheripha Sulemana • AI Software Automation Engineer
                    </span>
                </div>

                {/* Middle Navigation & Info */}
                <div className="grid md:grid-cols-12 gap-8 items-center justify-between border-t border-b border-slate-800/60 py-8">

                    {/* Brand */}
                    <div className="md:col-span-5 flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-electric-600 to-emerald-accent flex items-center justify-center text-white font-bold">
                            <Bot className="w-5 h-5" />
                        </div>
                        <div>
                            <div className="font-extrabold text-base text-white tracking-tight flex items-center gap-1">
                                <span>{personalInfo.name}</span>
                                <Sparkles className="w-4 h-4 text-electric-400" />
                            </div>
                            <p className="text-xs text-slate-500 font-mono">
                                B.Tech (Computer Technology) • AI Automation Specialist
                            </p>
                        </div>
                    </div>

                    {/* Quick Nav links */}
                    <div className="md:col-span-5 flex flex-wrap gap-4 text-xs font-semibold">
                        <a href="#about" className="hover:text-white transition-colors">About</a>
                        <a href="#services" className="hover:text-white transition-colors">Services</a>
                        <a href="#skills" className="hover:text-white transition-colors">Skills</a>
                        <a href="#projects" className="hover:text-white transition-colors">Projects</a>
                        <a href="#process" className="hover:text-white transition-colors">Process</a>
                        <a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a>
                        <a href="#blog" className="hover:text-white transition-colors">Blog</a>
                        <a href="#contact" className="hover:text-white transition-colors">Contact</a>
                    </div>

                    {/* Back to Top */}
                    <div className="md:col-span-2 flex justify-start md:justify-end">
                        <button
                            onClick={scrollToTop}
                            className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-electric-500 transition-all flex items-center gap-2 text-xs font-bold"
                        >
                            <span>Back to Top</span>
                            <ArrowUp className="w-4 h-4" />
                        </button>
                    </div>

                </div>

                {/* Bottom Copyright */}
                <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 font-mono gap-4">
                    <p>© 2026 Sheripha Sulemana. All rights reserved.</p>
                    <p className="flex items-center gap-1">
                        <span>Architected with</span>
                        <Heart className="w-3.5 h-3.5 text-red-500 fill-current" />
                        <span>React, Tailwind & AI</span>
                    </p>
                </div>

            </div>
        </footer>
    );
}
