import React, { useState } from 'react';
import { Terminal, Code, Cpu, Workflow, Database, GitBranch, Sparkles } from 'lucide-react';
import { skills } from '../data/portfolioData';

const categoryIcons = {
    Programming: Code,
    AI: Cpu,
    Automation: Workflow,
    Database: Database,
    "Version Control": GitBranch
};

export default function Skills() {
    const categories = Object.keys(skills);
    const [activeCategory, setActiveCategory] = useState("Programming");

    return (
        <section id="skills" className="py-24 relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric-500/10 border border-electric-500/30 text-electric-600 dark:text-electric-400 text-xs font-semibold">
                        <Terminal className="w-3.5 h-3.5" />
                        <span>Technical Proficiency</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                        Tools, Frameworks & <span className="text-gradient-electric">AI Capabilities</span>
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 text-base">
                        Mastery across modern languages, LLM APIs, self-hosted automation engines, and database architectures.
                    </p>
                </div>

                {/* Category Tabs */}
                <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
                    {categories.map((cat) => {
                        const IconComp = categoryIcons[cat] || Code;
                        const isActive = activeCategory === cat;
                        return (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold transition-all duration-300 ${isActive
                                        ? 'bg-electric-600 text-white shadow-glow-blue scale-105'
                                        : 'bg-white dark:bg-navy-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-electric-500/50'
                                    }`}
                            >
                                <IconComp className="w-4 h-4" />
                                <span>{cat}</span>
                            </button>
                        );
                    })}
                </div>

                {/* Active Skill Category Animated Bars */}
                <div className="max-w-4xl mx-auto rounded-3xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-slate-800 p-8 shadow-xl space-y-6">
                    <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4">
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                            <Sparkles className="w-5 h-5 text-electric-500" />
                            <span>{activeCategory} Proficiency Spectrum</span>
                        </h3>
                        <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                            {skills[activeCategory].length} Key Technologies
                        </span>
                    </div>

                    <div className="grid gap-6">
                        {skills[activeCategory].map((skill, i) => (
                            <div key={i} className="space-y-2 group">
                                <div className="flex items-center justify-between text-xs font-bold text-slate-800 dark:text-slate-200">
                                    <div className="flex items-center gap-2.5">
                                        {skill.logo.startsWith("http") ? (
                                            <img src={skill.logo} alt={skill.name} className="w-4 h-4 object-contain" />
                                        ) : (
                                            <span>{skill.logo}</span>
                                        )}
                                        <span>{skill.name}</span>
                                        <span className="text-[10px] font-mono font-normal text-slate-500 dark:text-slate-400 px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800">
                                            {skill.category}
                                        </span>
                                    </div>
                                    <span className="font-mono text-electric-600 dark:text-electric-400">{skill.level}%</span>
                                </div>

                                {/* Animated Bar */}
                                <div className="h-3 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden relative p-0.5">
                                    <div
                                        className="h-full rounded-full bg-gradient-to-r from-electric-600 to-emerald-accent transition-all duration-1000 ease-out group-hover:brightness-110"
                                        style={{ width: `${skill.level}%` }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Bottom Callout */}
                    <div className="pt-4 text-center text-xs text-slate-500 dark:text-slate-400 font-mono">
                        ⚡ Continuously learning & integrating cutting-edge AI breakthroughs daily.
                    </div>
                </div>

            </div>
        </section>
    );
}
