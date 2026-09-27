import React, { useState } from 'react';
import { ExternalLink, Github, Sparkles, Filter, CheckCircle2, ArrowUpRight, X, Info, Play } from 'lucide-react';
import { projects } from '../data/portfolioData';

const filterCategories = ["All", "Healthcare & AI", "AI & Agents", "Business Automation"];

export default function Projects() {
    const [activeFilter, setActiveFilter] = useState("All");
    const [selectedProject, setSelectedProject] = useState(null);
    const [demoNoticeProject, setDemoNoticeProject] = useState(null);

    const filteredProjects = activeFilter === "All"
        ? projects
        : projects.filter(p => p.category === activeFilter);

    const handleLiveDemoClick = (e, project) => {
        e.preventDefault();
        e.stopPropagation();
        // Open case study modal or live sandbox notification
        setSelectedProject(project);
    };

    return (
        <section id="projects" className="py-24 relative z-10 bg-slate-100/50 dark:bg-navy-950/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs font-semibold">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>Featured Case Studies</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                        Production-Grade <span className="text-gradient-emerald">AI & Software Systems</span>
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 text-base">
                        Real-world applications I've built delivering measurable business efficiency, healthcare accuracy, and cost savings.
                    </p>
                </div>

                {/* Filter Category Tabs */}
                <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
                    {filterCategories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveFilter(cat)}
                            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-300 ${activeFilter === cat
                                ? 'bg-emerald-500 text-white shadow-glow-emerald'
                                : 'bg-white dark:bg-navy-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/50'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project) => (
                        <div
                            key={project.id}
                            onClick={() => setSelectedProject(project)}
                            className="group rounded-3xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-slate-800 overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between cursor-pointer"
                        >
                            <div>
                                {/* Project Image Container */}
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent opacity-60" />

                                    {/* Badge */}
                                    <span className={`absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] font-bold font-mono backdrop-blur-md shadow-md ${project.badge === "B.Sc. Capstone Project"
                                        ? "bg-gradient-to-r from-amber-500 via-emerald-500 to-electric-600 text-white ring-2 ring-amber-400/50"
                                        : "bg-electric-600/90 text-white"
                                        }`}>
                                        {project.badge === "B.Sc. Capstone Project" ? "🎓 " + project.badge : project.badge}
                                    </span>
                                </div>

                                {/* Content */}
                                <div className="p-6 space-y-4">
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-electric-500 transition-colors">
                                        {project.title}
                                    </h3>

                                    <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed line-clamp-3">
                                        {project.description}
                                    </p>

                                    {/* Impact Metric Banner */}
                                    <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-semibold flex items-start gap-2">
                                        <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />
                                        <span>{project.metrics}</span>
                                    </div>

                                    {/* Tech Stack Tags */}
                                    <div className="flex flex-wrap gap-1.5 pt-2">
                                        {project.technologies.map((tech, tIdx) => (
                                            <span
                                                key={tIdx}
                                                className="px-2.5 py-1 rounded-md text-[10px] font-mono font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="p-6 pt-0 flex items-center gap-3">
                                <button
                                    onClick={(e) => handleLiveDemoClick(e, project)}
                                    className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-bold text-white bg-electric-600 hover:bg-electric-500 transition-colors shadow-sm"
                                >
                                    <Play className="w-3.5 h-3.5 fill-current" />
                                    <span>Case Study & Demo</span>
                                </button>

                                <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    onClick={(e) => e.stopPropagation()}
                                    className="p-2.5 rounded-xl text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                                    title="View GitHub Repository"
                                >
                                    <Github className="w-4 h-4" />
                                </a>
                            </div>

                        </div>
                    ))}
                </div>

            </div>

            {/* Project Case Study Modal */}
            {selectedProject && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/80 backdrop-blur-md animate-fadeIn overflow-y-auto">
                    <div className="relative w-full max-w-2xl rounded-3xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-2xl space-y-6 my-8">

                        {/* Close Button */}
                        <button
                            onClick={() => setSelectedProject(null)}
                            className="absolute top-6 right-6 p-2 rounded-full text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        {/* Modal Image */}
                        <div className="relative h-64 rounded-2xl overflow-hidden">
                            <img
                                src={selectedProject.image}
                                alt={selectedProject.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent opacity-80" />
                            <div className="absolute bottom-4 left-4 right-4">
                                <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-electric-600 text-white">
                                    {selectedProject.badge}
                                </span>
                                <h3 className="text-2xl font-extrabold text-white mt-1">{selectedProject.title}</h3>
                            </div>
                        </div>

                        {/* Modal Description & Metrics */}
                        <div className="space-y-4">
                            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                                {selectedProject.description}
                            </p>

                            <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs font-semibold">
                                <strong>Measurable Impact:</strong> {selectedProject.metrics}
                            </div>
                        </div>

                        {/* Key Features */}
                        <div className="space-y-3">
                            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                                Architectural Highlights & Capabilities:
                            </h4>
                            <div className="grid gap-2">
                                {selectedProject.keyFeatures.map((feat, fIdx) => (
                                    <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
                                        <CheckCircle2 className="w-4 h-4 text-electric-500 shrink-0" />
                                        <span>{feat}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Technologies */}
                        <div className="space-y-2">
                            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                                Tech Stack Employed:
                            </h4>
                            <div className="flex flex-wrap gap-2">
                                {selectedProject.technologies.map((t, idx) => (
                                    <span key={idx} className="px-3 py-1 rounded-lg text-xs font-mono bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Live Demo Sandbox Information Box */}
                        <div className="p-4 rounded-2xl bg-electric-500/10 border border-electric-500/30 text-slate-700 dark:text-slate-300 text-xs space-y-2">
                            <div className="flex items-center gap-2 font-bold text-electric-600 dark:text-electric-400">
                                <Info className="w-4 h-4" />
                                <span>Live Demo Environment Notice:</span>
                            </div>
                            <p className="text-[11px] leading-relaxed">
                                Live sandbox instances for {selectedProject.title} are deployed on demand for client walkthroughs. You can inspect the source code, architecture, and run instructions directly on GitHub or request a live guided demo below!
                            </p>
                        </div>

                        {/* Modal Footer */}
                        <div className="pt-4 flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 dark:border-slate-800">
                            <a
                                href={selectedProject.githubUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200"
                            >
                                <Github className="w-4 h-4" />
                                <span>GitHub Source</span>
                            </a>

                            <a
                                href="#contact"
                                onClick={() => setSelectedProject(null)}
                                className="flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-electric-600 hover:bg-electric-500 shadow-glow-blue"
                            >
                                <ExternalLink className="w-4 h-4" />
                                <span>Request Guided Demo</span>
                            </a>
                        </div>

                    </div>
                </div>
            )}
        </section>
    );
}
