import React, { useState, useEffect } from 'react';
import { ArrowRight, Bot, Sparkles, Terminal, Code2, Zap, CheckCircle2, Play } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const typeWords = [
    "Autonomous AI Agents",
    "Healthcare Software",
    "Pharmacy Stock Analytics",
    "n8n & Zapier Pipelines",
    "Custom LLM RAG Engines"
];

export default function Hero() {
    const [textIndex, setTextIndex] = useState(0);
    const [subCharIndex, setSubCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentWord = typeWords[textIndex];
        let timer;

        if (!isDeleting && subCharIndex < currentWord.length) {
            timer = setTimeout(() => setSubCharIndex((prev) => prev + 1), 70);
        } else if (isDeleting && subCharIndex > 0) {
            timer = setTimeout(() => setSubCharIndex((prev) => prev - 1), 40);
        } else if (!isDeleting && subCharIndex === currentWord.length) {
            timer = setTimeout(() => setIsDeleting(true), 2000);
        } else if (isDeleting && subCharIndex === 0) {
            setIsDeleting(false);
            setTextIndex((prev) => (prev + 1) % typeWords.length);
        }

        return () => clearTimeout(timer);
    }, [subCharIndex, isDeleting, textIndex]);

    return (
        <section id="home" className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">

                    {/* Left Column: Headline & Action */}
                    <div className="lg:col-span-7 space-y-8 text-left">
                        {/* Status Pill Badge */}
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs font-semibold backdrop-blur-md">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                            <span>{personalInfo.status}</span>
                        </div>

                        {/* Dynamic Typing Title */}
                        <div className="space-y-4">
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
                                Building{' '}
                                <span className="text-gradient-electric">AI Systems</span> That{' '}
                                <span className="text-electric-500 font-extrabold">
                                    Save Time
                                </span>
                                , Reduce Costs, and Automate Work.
                            </h1>

                            {/* Animated Subtitle */}
                            <div className="h-8 flex items-center font-mono text-sm sm:text-base text-electric-600 dark:text-electric-400 font-medium">
                                <Terminal className="w-4 h-4 mr-2" />
                                <span>Specializing in:&nbsp;</span>
                                <span className="text-slate-900 dark:text-white border-b-2 border-electric-500">
                                    {typeWords[textIndex].substring(0, subCharIndex)}
                                </span>
                                <span className="animate-pulse ml-0.5">|</span>
                            </div>
                        </div>

                        {/* Subheadline Paragraph */}
                        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
                            Hi, I'm <strong className="text-slate-900 dark:text-white">{personalInfo.name}</strong>,
                            an AI Software Automation Engineer and Computer Technology student passionate about transforming business processes with Artificial Intelligence, automation pipelines, and smart software solutions.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap items-center gap-4 pt-2">
                            <a
                                href="#projects"
                                className="flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-electric-600 to-electric-500 hover:from-electric-500 hover:to-electric-400 shadow-glow-blue transition-all duration-300 hover:scale-105"
                            >
                                <Zap className="w-4 h-4 text-amber-300" />
                                <span>View Projects</span>
                                <ArrowRight className="w-4 h-4 ml-1" />
                            </a>

                            <a
                                href="#contact"
                                className="flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-700 bg-white/70 dark:bg-navy-900/70 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-300 hover:scale-105"
                            >
                                <span>Hire Me</span>
                            </a>
                        </div>

                        {/* Highlights pill list */}
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-6 border-t border-slate-200/80 dark:border-slate-800/80 text-xs font-semibold text-slate-600 dark:text-slate-400">
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                                <span>OpenAI & Gemini APIs</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                                <span>n8n & Zapier Flows</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                                <span>Full-Stack React/Node</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Interactive Animated AI Code Card & Illustration */}
                    <div className="lg:col-span-5 relative">
                        <div className="relative mx-auto max-w-md lg:max-w-none">

                            {/* Decorative Glow Backdrop */}
                            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-electric-500 to-emerald-accent opacity-30 blur-2xl animate-pulse-slow" />

                            {/* Main AI Terminal Card */}
                            <div className="relative rounded-2xl bg-navy-950 border border-slate-800 p-6 shadow-2xl space-y-4 font-mono text-xs text-slate-300">
                                {/* Header Dots */}
                                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                                    <div className="flex items-center gap-2">
                                        <span className="w-3 h-3 rounded-full bg-red-500/80" />
                                        <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                        <span className="w-3 h-3 rounded-full bg-green-500/80" />
                                    </div>
                                    <span className="text-[10px] text-slate-500">sheripha_ai_engine.py</span>
                                </div>

                                {/* Code Snippet */}
                                <div className="space-y-2 leading-relaxed text-slate-300">
                                    <div className="text-purple-400">
                                        <span className="text-blue-400">from</span> ai_agents <span className="text-blue-400">import</span> AutonomousWorkflow
                                    </div>
                                    <div className="text-purple-400">
                                        <span className="text-blue-400">from</span> healthcare <span className="text-blue-400">import</span> PharmacyInventoryEngine
                                    </div>
                                    <div className="pt-2 text-slate-400"># Initializing Sheripha's AI Automation Pipeline</div>
                                    <div>
                                        <span className="text-electric-400">agent</span> = AutonomousWorkflow(
                                    </div>
                                    <div className="pl-4 text-emerald-400">
                                        model=<span className="text-amber-300">"gpt-4o"</span>,
                                    </div>
                                    <div className="pl-4 text-emerald-400">
                                        rag_knowledge=<span className="text-amber-300">"vector_db"</span>,
                                    </div>
                                    <div className="pl-4 text-emerald-400">
                                        triggers=[<span className="text-amber-300">"whatsapp"</span>, <span className="text-amber-300">"n8n_webhook"</span>]
                                    </div>
                                    <div>)</div>

                                    <div className="pt-2 text-slate-400"># Executing business process optimization...</div>
                                    <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-emerald-400 flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <Sparkles className="w-4 h-4 animate-spin text-amber-300" />
                                            <span>Stockouts Prevented: 40%</span>
                                        </div>
                                        <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-[10px] font-bold">ACTIVE</span>
                                    </div>
                                </div>

                                {/* Animated Flow Nodes */}
                                <div className="pt-3 grid grid-cols-3 gap-2 text-center text-[11px]">
                                    <div className="p-2 rounded-lg bg-slate-900 border border-slate-800">
                                        <Bot className="w-4 h-4 mx-auto text-electric-400 mb-1" />
                                        <span className="text-slate-400 block text-[9px]">Input</span>
                                        <span className="font-bold text-white">Document PDF</span>
                                    </div>
                                    <div className="p-2 rounded-lg bg-slate-900 border border-slate-800">
                                        <Zap className="w-4 h-4 mx-auto text-amber-400 mb-1" />
                                        <span className="text-slate-400 block text-[9px]">Processing</span>
                                        <span className="font-bold text-white">LLM Parser</span>
                                    </div>
                                    <div className="p-2 rounded-lg bg-slate-900 border border-slate-800">
                                        <CheckCircle2 className="w-4 h-4 mx-auto text-emerald-400 mb-1" />
                                        <span className="text-slate-400 block text-[9px]">Result</span>
                                        <span className="font-bold text-white">ERP Updated</span>
                                    </div>
                                </div>

                            </div>

                            {/* Floating Badge Widget */}
                            <div className="absolute -bottom-6 -left-6 rounded-2xl bg-white dark:bg-navy-900 p-4 shadow-xl border border-slate-200 dark:border-slate-800 flex items-center gap-3 animate-float">
                                <div className="w-12 h-12 rounded-xl bg-electric-500/10 text-electric-500 flex items-center justify-center font-bold text-lg">
                                    ⚡
                                </div>
                                <div>
                                    <div className="text-xs font-bold text-slate-900 dark:text-white">45+ Automations Live</div>
                                    <div className="text-[11px] text-slate-500 dark:text-slate-400">Saving 30+ hrs / week per client</div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
