import React from 'react';
import { Star, MessageSquareQuote, Building2 } from 'lucide-react';
import { testimonials } from '../data/portfolioData';

export default function Testimonials() {
    return (
        <section id="testimonials" className="py-24 relative z-10 bg-slate-100/50 dark:bg-navy-950/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs font-semibold">
                        <MessageSquareQuote className="w-3.5 h-3.5" />
                        <span>Client Endorsements</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                        Trusted by Leaders in <span className="text-gradient-emerald">Healthcare & Retail</span>
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 text-base">
                        What directors, pharmacists, and business founders say about Sheripha's AI systems.
                    </p>
                </div>

                {/* Testimonials Cards Grid */}
                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((item) => (
                        <div
                            key={item.id}
                            className="rounded-3xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-slate-800 p-8 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between space-y-6 relative group hover:-translate-y-1"
                        >
                            <div className="space-y-4">
                                {/* Rating Stars */}
                                <div className="flex items-center gap-1 text-amber-400">
                                    {[...Array(item.rating)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 fill-current" />
                                    ))}
                                </div>

                                {/* Quote text */}
                                <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed italic">
                                    "{item.quote}"
                                </p>
                            </div>

                            {/* Author Details */}
                            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center gap-4">
                                <img
                                    src={item.avatar}
                                    alt={item.author}
                                    className="w-12 h-12 rounded-full object-cover border-2 border-electric-500"
                                />
                                <div>
                                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">{item.author}</h4>
                                    <p className="text-xs text-electric-600 dark:text-electric-400 font-semibold">{item.title}</p>
                                    <p className="text-[11px] text-slate-500 dark:text-slate-400 flex items-center gap-1">
                                        <Building2 className="w-3 h-3" />
                                        <span>{item.company}</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
