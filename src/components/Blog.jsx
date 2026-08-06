import React, { useState } from 'react';
import { BookOpen, Clock, Calendar, ArrowRight, X, Sparkles, Tag } from 'lucide-react';
import { blogArticles } from '../data/portfolioData';

export default function Blog() {
    const [selectedArticle, setSelectedArticle] = useState(null);

    return (
        <section id="blog" className="py-24 relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric-500/10 border border-electric-500/30 text-electric-600 dark:text-electric-400 text-xs font-semibold">
                        <BookOpen className="w-3.5 h-3.5" />
                        <span>AI Insights & Technical Writing</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                        Articles on <span className="text-gradient-electric">AI, Python & Healthcare Tech</span>
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 text-base">
                        Lessons learned building production AI agents, n8n pipelines, and healthcare inventory systems.
                    </p>
                </div>

                {/* Articles Grid */}
                <div className="grid md:grid-cols-3 gap-8">
                    {blogArticles.map((article) => (
                        <div
                            key={article.id}
                            onClick={() => setSelectedArticle(article)}
                            className="group rounded-3xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-slate-800 overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer flex flex-col justify-between"
                        >
                            <div>
                                {/* Image */}
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={article.image}
                                        alt={article.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] font-bold font-mono bg-navy-950/80 text-white backdrop-blur-md">
                                        {article.category}
                                    </span>
                                </div>

                                {/* Body */}
                                <div className="p-6 space-y-3">
                                    <div className="flex items-center gap-4 text-[11px] text-slate-500 dark:text-slate-400">
                                        <span className="flex items-center gap-1">
                                            <Calendar className="w-3 h-3 text-electric-500" />
                                            {article.date}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <Clock className="w-3 h-3 text-electric-500" />
                                            {article.readTime}
                                        </span>
                                    </div>

                                    <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-electric-500 transition-colors leading-snug">
                                        {article.title}
                                    </h3>

                                    <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed line-clamp-3">
                                        {article.excerpt}
                                    </p>
                                </div>
                            </div>

                            {/* Action Footer */}
                            <div className="p-6 pt-0 flex items-center justify-between text-xs font-bold text-electric-600 dark:text-electric-400">
                                <span className="group-hover:underline">Read Full Article</span>
                                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                            </div>
                        </div>
                    ))}
                </div>

            </div>

            {/* Full Article Reader Modal */}
            {selectedArticle && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/80 backdrop-blur-md animate-fadeIn overflow-y-auto">
                    <div className="relative w-full max-w-3xl rounded-3xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-slate-800 p-6 sm:p-10 shadow-2xl space-y-6 my-8">

                        {/* Close Button */}
                        <button
                            onClick={() => setSelectedArticle(null)}
                            className="absolute top-6 right-6 p-2 rounded-full text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        {/* Modal Article Header */}
                        <div className="space-y-3">
                            <div className="flex items-center gap-3">
                                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-electric-600 text-white">
                                    {selectedArticle.category}
                                </span>
                                <span className="text-xs text-slate-500 dark:text-slate-400">{selectedArticle.date}</span>
                                <span className="text-xs text-slate-500 dark:text-slate-400">• {selectedArticle.readTime}</span>
                            </div>

                            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                                {selectedArticle.title}
                            </h2>
                        </div>

                        {/* Header Image */}
                        <div className="h-64 rounded-2xl overflow-hidden">
                            <img
                                src={selectedArticle.image}
                                alt={selectedArticle.title}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Article Content */}
                        <div className="prose dark:prose-invert max-w-none text-slate-700 dark:text-slate-300 text-sm leading-relaxed whitespace-pre-line space-y-4">
                            {selectedArticle.content}
                        </div>

                        {/* Footer Modal CTA */}
                        <div className="pt-6 flex items-center justify-between border-t border-slate-200 dark:border-slate-800">
                            <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                                Author: Sheripha Sulemana
                            </span>
                            <button
                                onClick={() => setSelectedArticle(null)}
                                className="px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-electric-600 hover:bg-electric-500 shadow-glow-blue"
                            >
                                Close Article
                            </button>
                        </div>

                    </div>
                </div>
            )}
        </section>
    );
}
