import React, { useState } from 'react';
import {
    Cpu, MessageSquare, Workflow, TrendingUp, Globe,
    Zap, Boxes, Activity, Database, LayoutDashboard,
    ArrowRight, Check, X, Sparkles, Layers
} from 'lucide-react';
import { services } from '../data/portfolioData';

const iconMap = {
    Cpu: Cpu,
    MessageSquare: MessageSquare,
    Workflow: Workflow,
    TrendingUp: TrendingUp,
    Globe: Globe,
    Zap: Zap,
    Boxes: Boxes,
    Activity: Activity,
    Database: Database,
    LayoutDashboard: LayoutDashboard
};

export default function Services() {
    const [selectedService, setSelectedService] = useState(null);

    return (
        <section id="services" className="py-24 relative z-10 bg-slate-100/50 dark:bg-navy-950/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs font-semibold">
                        <Layers className="w-3.5 h-3.5" />
                        <span>Specialized Services</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                        High-Impact AI & <span className="text-gradient-emerald">Automation Solutions</span>
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 text-base">
                        End-to-end engineering tailored for businesses, healthcare facilities, pharmacies, and startups.
                    </p>
                </div>

                {/* 10 Service Cards Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service) => {
                        const IconComponent = iconMap[service.icon] || Cpu;
                        return (
                            <div
                                key={service.id}
                                onClick={() => setSelectedService(service)}
                                className="group relative rounded-3xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-slate-800 p-7 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 cursor-pointer flex flex-col justify-between overflow-hidden"
                            >
                                {/* Top Corner Glow on Hover */}
                                <div className="absolute top-0 right-0 w-24 h-24 rounded-bl-full bg-electric-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                <div className="space-y-4 relative z-10">
                                    {/* Category Pill & Icon */}
                                    <div className="flex items-center justify-between">
                                        <div className="w-12 h-12 rounded-2xl bg-electric-500/10 text-electric-600 dark:text-electric-400 flex items-center justify-center group-hover:scale-110 group-hover:bg-electric-600 group-hover:text-white transition-all duration-300">
                                            <IconComponent className="w-6 h-6" />
                                        </div>
                                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                                            {service.category}
                                        </span>
                                    </div>

                                    {/* Title & Summary */}
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-electric-600 dark:group-hover:text-electric-400 transition-colors">
                                            {service.title}
                                        </h3>
                                        <p className="text-slate-600 dark:text-slate-400 text-xs mt-2 leading-relaxed">
                                            {service.summary}
                                        </p>
                                    </div>
                                </div>

                                {/* Card Action Link */}
                                <div className="pt-6 mt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-bold text-electric-600 dark:text-electric-400">
                                    <span className="group-hover:underline">Explore Deliverables</span>
                                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>

            {/* Service Details Modal */}
            {selectedService && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/80 backdrop-blur-md animate-fadeIn">
                    <div className="relative w-full max-w-xl rounded-3xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-slate-800 p-8 shadow-2xl space-y-6">

                        {/* Close Button */}
                        <button
                            onClick={() => setSelectedService(null)}
                            className="absolute top-6 right-6 p-2 rounded-full text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        {/* Header */}
                        <div className="flex items-center gap-4">
                            <div className="w-14 h-14 rounded-2xl bg-electric-600 text-white flex items-center justify-center shadow-glow-blue">
                                {React.createElement(iconMap[selectedService.icon] || Cpu, { className: 'w-7 h-7' })}
                            </div>
                            <div>
                                <span className="text-xs font-mono font-bold text-electric-600 dark:text-electric-400 uppercase tracking-wider">
                                    {selectedService.category}
                                </span>
                                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{selectedService.title}</h3>
                            </div>
                        </div>

                        {/* Description */}
                        <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                            {selectedService.description}
                        </p>

                        {/* Deliverables List */}
                        <div className="space-y-3">
                            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-1.5">
                                <Sparkles className="w-4 h-4 text-emerald-500" />
                                <span>Key Deliverables Included:</span>
                            </h4>
                            <div className="space-y-2">
                                {selectedService.deliverables.map((item, i) => (
                                    <div key={i} className="flex items-center gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                                        <div className="p-1 rounded-full bg-emerald-500/20 text-emerald-500">
                                            <Check className="w-3 h-3" />
                                        </div>
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Footer Modal CTA */}
                        <div className="pt-4 flex items-center justify-end gap-3 border-t border-slate-200 dark:border-slate-800">
                            <button
                                onClick={() => setSelectedService(null)}
                                className="px-5 py-2.5 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                            >
                                Close
                            </button>
                            <a
                                href="#contact"
                                onClick={() => setSelectedService(null)}
                                className="px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-electric-600 to-emerald-accent shadow-glow-blue hover:scale-105 transition-transform"
                            >
                                Request Service
                            </a>
                        </div>

                    </div>
                </div>
            )}
        </section>
    );
}
