import React, { useState } from 'react';
import { Mail, MessageSquare, Send, Github, Linkedin, CheckCircle2, Coins, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const budgetRanges = [
    "GH₵1,000 - GH₵3,000",
    "GH₵3,000 - GH₵5,000",
    "GH₵5,000 - GH₵10,000",
    "GH₵10,000+ Enterprise",
    "Consultation / Hourly"
];

const serviceOptions = [
    "AI Business Automation",
    "Custom AI Chatbot",
    "n8n / Zapier Workflow",
    "Healthcare Software",
    "Web Application",
    "Other"
];

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        projectScope: 'AI Business Automation',
        budget: 'GH₵1,000 - GH₵3,000',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setSubmitted(true);
        }, 1200);
    };

    return (
        <section id="contact" className="py-24 relative z-10 bg-slate-100/50 dark:bg-navy-950/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs font-semibold">
                        <Mail className="w-3.5 h-3.5" />
                        <span>Initiate Collaboration</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                        Let's Automate Your <span className="text-gradient-emerald">Next AI Project</span>
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 text-base">
                        Have a project in mind, need operational advice, or want to hire Sheripha? Get in touch today.
                    </p>
                </div>

                <div className="grid lg:grid-cols-12 gap-12 items-start">

                    {/* Left Column: Quick Contact Cards & Socials */}
                    <div className="lg:col-span-5 space-y-6">
                        <div className="rounded-3xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-slate-800 p-8 shadow-xl space-y-6">
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Direct Communication</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed">
                                Prefer direct messaging or email? Feel free to reach out across any of these verified channels.
                            </p>

                            <div className="space-y-4">
                                {/* Email */}
                                <a
                                    href={`mailto:${personalInfo.email}`}
                                    className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 hover:border-electric-500 transition-colors group"
                                >
                                    <div className="w-10 h-10 rounded-xl bg-electric-500/10 text-electric-600 dark:text-electric-400 flex items-center justify-center group-hover:bg-electric-600 group-hover:text-white transition-colors">
                                        <Mail className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <span className="text-[10px] font-mono uppercase text-slate-500 dark:text-slate-400 font-bold block">Email</span>
                                        <span className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-electric-500">{personalInfo.email}</span>
                                    </div>
                                </a>

                                {/* WhatsApp */}
                                <a
                                    href={personalInfo.whatsapp}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 hover:border-emerald-500 transition-colors group"
                                >
                                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                                        <MessageSquare className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <span className="text-[10px] font-mono uppercase text-slate-500 dark:text-slate-400 font-bold block">WhatsApp Business</span>
                                        <span className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-emerald-500">{personalInfo.phone}</span>
                                    </div>
                                </a>
                            </div>

                            {/* Social Channels */}
                            <div className="pt-4 border-t border-slate-200 dark:border-slate-800 space-y-3">
                                <span className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white block">
                                    Professional Profiles:
                                </span>
                                <div className="flex items-center gap-3">
                                    <a
                                        href={personalInfo.github}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-900 hover:text-white transition-colors text-xs font-bold"
                                    >
                                        <Github className="w-4 h-4" />
                                        <span>GitHub</span>
                                    </a>

                                    <a
                                        href={personalInfo.linkedin}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-electric-600 text-white hover:bg-electric-500 transition-colors text-xs font-bold shadow-glow-blue"
                                    >
                                        <Linkedin className="w-4 h-4" />
                                        <span>LinkedIn</span>
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Right Column: Interactive Form */}
                    <div className="lg:col-span-7">
                        <div className="rounded-3xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-slate-800 p-8 shadow-xl relative">

                            {submitted ? (
                                <div className="py-12 text-center space-y-4 animate-fadeIn">
                                    <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-500 mx-auto flex items-center justify-center">
                                        <CheckCircle2 className="w-8 h-8 animate-bounce" />
                                    </div>
                                    <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white">Message Received!</h3>
                                    <p className="text-slate-600 dark:text-slate-300 text-xs max-w-md mx-auto leading-relaxed">
                                        Thank you, <strong>{formData.name}</strong>. Sheripha will review your project requirements and respond within 12 hours.
                                    </p>
                                    <button
                                        onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', company: '', projectScope: 'AI Business Automation', budget: 'GH₵1,000 - GH₵3,000', message: '' }); }}
                                        className="mt-4 px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-electric-600 hover:bg-electric-500"
                                    >
                                        Send Another Inquiry
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid sm:grid-cols-2 gap-4">
                                        {/* Name */}
                                        <div className="space-y-1.5">
                                            <label className="text-xs font-bold text-slate-800 dark:text-slate-200">Your Name *</label>
                                            <input
                                                type="text"
                                                required
                                                placeholder="Dr. Sarah Mensah"
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-electric-500"
                                            />
                                        </div>

                                        {/* Email */}
                                        <div className="space-y-1.5">
                                            <label className="text-xs font-bold text-slate-800 dark:text-slate-200">Email Address *</label>
                                            <input
                                                type="email"
                                                required
                                                placeholder="sarah@clinic.com"
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-electric-500"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid sm:grid-cols-2 gap-4">
                                        {/* Company */}
                                        <div className="space-y-1.5">
                                            <label className="text-xs font-bold text-slate-800 dark:text-slate-200">Company / Facility</label>
                                            <input
                                                type="text"
                                                placeholder="Apex Health Clinic"
                                                value={formData.company}
                                                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                                className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-electric-500"
                                            />
                                        </div>

                                        {/* Project Scope Selector */}
                                        <div className="space-y-1.5">
                                            <label className="text-xs font-bold text-slate-800 dark:text-slate-200">Project Type</label>
                                            <select
                                                value={formData.projectScope}
                                                onChange={(e) => setFormData({ ...formData, projectScope: e.target.value })}
                                                className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-electric-500"
                                            >
                                                {serviceOptions.map((opt, i) => (
                                                    <option key={i} value={opt}>{opt}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>

                                    {/* Budget selector */}
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1">
                                            <Coins className="w-3.5 h-3.5 text-emerald-500" />
                                            <span>Estimated Budget Range (Ghana Cedi - GH₵):</span>
                                        </label>
                                        <div className="flex flex-wrap gap-2">
                                            {budgetRanges.map((b, idx) => (
                                                <button
                                                    key={idx}
                                                    type="button"
                                                    onClick={() => setFormData({ ...formData, budget: b })}
                                                    className={`px-3 py-2 rounded-xl text-xs font-semibold transition-all ${formData.budget === b
                                                        ? 'bg-emerald-500 text-white shadow-glow-emerald font-bold'
                                                        : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                                                        }`}
                                                >
                                                    {b}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Message */}
                                    <div className="space-y-1.5">
                                        <label className="text-xs font-bold text-slate-800 dark:text-slate-200">Project Details & Requirements *</label>
                                        <textarea
                                            required
                                            rows={4}
                                            placeholder="Briefly describe what you'd like to automate or build..."
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-electric-500"
                                        />
                                    </div>

                                    {/* Submit Button */}
                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="w-full flex items-center justify-center gap-2 py-4 rounded-xl text-xs font-extrabold text-white bg-gradient-to-r from-electric-600 via-electric-500 to-emerald-accent shadow-glow-blue hover:scale-[1.01] transition-transform disabled:opacity-50"
                                    >
                                        {loading ? (
                                            <span className="animate-pulse">Transmitting Request...</span>
                                        ) : (
                                            <>
                                                <Send className="w-4 h-4" />
                                                <span>Send Project Request</span>
                                            </>
                                        )}
                                    </button>

                                </form>
                            )}

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
