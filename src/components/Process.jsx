import React, { useState } from 'react';
import { GitCommit, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { processSteps } from '../data/portfolioData';

export default function Process() {
    const [activeStep, setActiveStep] = useState(0);

    return (
        <section id="process" className="py-24 relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric-500/10 border border-electric-500/30 text-electric-600 dark:text-electric-400 text-xs font-semibold">
                        <GitCommit className="w-3.5 h-3.5" />
                        <span>Methodology & Workflow</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                        The 8-Step <span className="text-gradient-electric">Automation Lifecycle</span>
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 text-base">
                        From initial business discovery to zero-downtime deployment and post-launch tuning.
                    </p>
                </div>

                {/* Interactive Step Selector Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 mb-12">
                    {processSteps.map((item, idx) => (
                        <button
                            key={item.step}
                            onClick={() => setActiveStep(idx)}
                            className={`p-3 rounded-2xl text-center transition-all duration-300 ${activeStep === idx
                                    ? 'bg-electric-600 text-white shadow-glow-blue scale-105 font-bold'
                                    : 'bg-white dark:bg-navy-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:border-electric-500/50'
                                }`}
                        >
                            <div className="text-xs font-mono font-extrabold opacity-75">{item.step}</div>
                            <div className="text-xs font-semibold mt-1 truncate">{item.title}</div>
                        </button>
                    ))}
                </div>

                {/* Active Step Highlight Showcase Card */}
                <div className="max-w-4xl mx-auto rounded-3xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-slate-800 p-8 sm:p-10 shadow-2xl space-y-6 relative overflow-hidden">
                    {/* Ambient Glow */}
                    <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-electric-500/10 blur-3xl pointer-events-none" />

                    <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4">
                        <div className="flex items-center gap-3">
                            <span className="w-10 h-10 rounded-xl bg-electric-600 text-white font-mono font-bold flex items-center justify-center text-sm shadow-sm">
                                {processSteps[activeStep].step}
                            </span>
                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                                    {processSteps[activeStep].title}
                                </h3>
                                <span className="text-xs font-mono text-electric-600 dark:text-electric-400 font-semibold">
                                    Phase {activeStep + 1} of 8 • {processSteps[activeStep].summary}
                                </span>
                            </div>
                        </div>

                        {/* Navigation buttons */}
                        <div className="flex items-center gap-2">
                            <button
                                disabled={activeStep === 0}
                                onClick={() => setActiveStep(prev => prev - 1)}
                                className="px-3 py-1.5 rounded-lg text-xs font-bold bg-slate-100 dark:bg-slate-800 disabled:opacity-40 text-slate-700 dark:text-slate-300"
                            >
                                Prev
                            </button>
                            <button
                                disabled={activeStep === processSteps.length - 1}
                                onClick={() => setActiveStep(prev => prev + 1)}
                                className="px-3 py-1.5 rounded-lg text-xs font-bold bg-electric-600 text-white disabled:opacity-40"
                            >
                                Next
                            </button>
                        </div>
                    </div>

                    <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                        {processSteps[activeStep].description}
                    </p>

                    {/* Key Deliverables */}
                    <div className="space-y-3 pt-2">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-2">
                            <Sparkles className="w-4 h-4 text-emerald-500" />
                            <span>Concrete Deliverables in this Phase:</span>
                        </h4>
                        <div className="grid sm:grid-cols-3 gap-3">
                            {processSteps[activeStep].deliverables.map((del, dIdx) => (
                                <div
                                    key={dIdx}
                                    className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-2"
                                >
                                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                                    <span>{del}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}
