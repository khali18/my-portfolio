import React from 'react';
import { Award, BookOpen, Heart, Cpu, CheckCircle, GraduationCap, Quote, Layers, Check } from 'lucide-react';
import { personalInfo, stats } from '../data/portfolioData';

export default function About() {
    return (
        <section id="about" className="py-24 relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric-500/10 border border-electric-500/30 text-electric-600 dark:text-electric-400 text-xs font-semibold">
                        <GraduationCap className="w-3.5 h-3.5" />
                        <span>Profile & Background</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                        Engineering Software That <span className="text-gradient-electric">Solves Real Problems</span>
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 text-base">
                        Combining academic computer technology rigor with practical AI automation deployment.
                    </p>
                </div>

                <div className="grid lg:grid-cols-12 gap-12 items-stretch">

                    {/* Left Column: Profile Card */}
                    <div className="lg:col-span-5 flex">
                        <div className="w-full rounded-3xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-slate-800 p-8 shadow-xl flex flex-col justify-between relative overflow-hidden group">

                            {/* Subtle Ambient Background */}
                            <div className="absolute top-0 right-0 -mt-8 -mr-8 w-40 h-40 rounded-full bg-electric-500/10 blur-3xl group-hover:bg-electric-500/20 transition-all duration-500" />

                            <div className="space-y-6 relative z-10">
                                {/* Profile Image & Avatar */}
                                <div className="relative w-28 h-28 mx-auto sm:mx-0">
                                    <img
                                        src={personalInfo.avatarUrl}
                                        alt={personalInfo.name}
                                        className="w-full h-full object-cover rounded-2xl border-2 border-electric-500 shadow-glow-blue"
                                    />
                                    <div className="absolute -bottom-2 -right-2 p-1.5 rounded-xl bg-emerald-500 text-white shadow-lg">
                                        <Check className="w-4 h-4" />
                                    </div>
                                </div>

                                {/* Name & Academic Credentials */}
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{personalInfo.name}</h3>
                                    <p className="text-xs font-mono text-electric-600 dark:text-electric-400 font-semibold mt-1">
                                        B.Tech (Computer Technology) Scholar • Final Year
                                    </p>
                                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                                        AI Software Automation Specialist
                                    </p>
                                </div>

                                {/* Specialization Pills */}
                                <div className="flex flex-wrap gap-2 text-[11px] font-semibold">
                                    <span className="px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                                        Healthcare AI
                                    </span>
                                    <span className="px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                                        Retail Intelligence
                                    </span>
                                    <span className="px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                                        n8n Workflows
                                    </span>
                                    <span className="px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                                        OpenAI RAG
                                    </span>
                                </div>
                            </div>

                            {/* Mission Statement Box */}
                            <div className="mt-8 p-5 rounded-2xl bg-gradient-to-br from-electric-500/10 to-emerald-500/10 border border-electric-500/20 relative">
                                <Quote className="w-6 h-6 text-electric-500 opacity-40 absolute top-3 right-3" />
                                <div className="text-xs font-semibold text-electric-600 dark:text-electric-400 uppercase tracking-wider mb-1">
                                    Core Mission
                                </div>
                                <p className="text-sm font-medium text-slate-800 dark:text-slate-200 italic leading-relaxed">
                                    "{personalInfo.mission}"
                                </p>
                            </div>

                        </div>
                    </div>

                    {/* Right Column: Biography & Animated Statistics */}
                    <div className="lg:col-span-7 flex flex-col justify-between space-y-8">

                        {/* Biography Card */}
                        <div className="rounded-3xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-slate-800 p-8 shadow-xl space-y-4">
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                                <BookOpen className="w-5 h-5 text-electric-500" />
                                <span>Biography</span>
                            </h3>
                            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed whitespace-pre-line">
                                {personalInfo.bioFull}
                            </p>
                        </div>

                        {/* Animated Statistics Grid */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                            {stats.map((stat, idx) => (
                                <div
                                    key={idx}
                                    className="rounded-2xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-slate-800 p-5 shadow-lg text-center hover:border-electric-500/50 transition-all duration-300 group hover:-translate-y-1"
                                >
                                    <div className="text-3xl font-extrabold text-slate-900 dark:text-white group-hover:text-electric-500 transition-colors">
                                        {stat.value}
                                        <span className="text-electric-500">{stat.suffix}</span>
                                    </div>
                                    <div className="text-xs font-bold text-slate-700 dark:text-slate-300 mt-1">
                                        {stat.label}
                                    </div>
                                    <div className="text-[10px] text-slate-500 dark:text-slate-400 mt-1 leading-tight">
                                        {stat.description}
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}
