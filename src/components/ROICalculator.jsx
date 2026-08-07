import React, { useState } from 'react';
import { Calculator, TrendingUp, Clock, Coins, Sparkles, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

export default function ROICalculator() {
    const [teamSize, setTeamSize] = useState(5);
    const [hoursPerWeek, setHoursPerWeek] = useState(12);
    const [hourlyRate, setHourlyRate] = useState(50); // GH₵ per hour average

    // Calculations
    const totalWeeklyHours = teamSize * hoursPerWeek;
    const monthlyHoursSpent = Math.round(totalWeeklyHours * 4.33);
    const hoursSavedMonthly = Math.round(monthlyHoursSpent * 0.75); // 75% average automation efficiency
    const monthlySavingsGHS = hoursSavedMonthly * hourlyRate;
    const annualSavingsGHS = monthlySavingsGHS * 12;

    const formatGHS = (val) => {
        return new Intl.NumberFormat('en-GH', {
            style: 'currency',
            currency: 'GHS',
            maximumFractionDigits: 0
        }).format(val).replace('GHS', 'GH₵');
    };

    return (
        <section id="roi-calculator" className="py-24 relative z-10 bg-slate-900/90 text-white overflow-hidden border-y border-slate-800 backdrop-blur-xl">
            {/* Ambient Background Glows */}
            <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-electric-600/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 text-xs font-bold tracking-wide uppercase">
                        <Calculator className="w-4 h-4 text-emerald-400" />
                        <span>Interactive ROI Estimator</span>
                    </div>
                    <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
                        Calculate Your <span className="text-gradient-emerald">Automation Savings (GH₵)</span>
                    </h2>
                    <p className="text-slate-400 text-base max-w-2xl mx-auto">
                        See how much time and money Sheripha's AI workflows can save your organization every single month in Ghana Cedis.
                    </p>
                </div>

                {/* Calculator Widget Grid */}
                <div className="grid lg:grid-cols-12 gap-8 items-stretch">

                    {/* Inputs Panel (7 Cols) */}
                    <div className="lg:col-span-7 rounded-3xl bg-slate-950/80 border border-slate-800 p-8 shadow-2xl space-y-8 flex flex-col justify-between">

                        <div className="space-y-6">
                            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                                    <Zap className="w-5 h-5 text-amber-400" />
                                    <span>Adjust Your Operational Metrics</span>
                                </h3>
                                <span className="text-xs font-mono text-emerald-400 font-semibold px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30">
                                    Live GH₵ Computation
                                </span>
                            </div>

                            {/* Slider 1: Team Size */}
                            <div className="space-y-3">
                                <div className="flex justify-between items-center text-sm font-semibold">
                                    <label className="text-slate-300 flex items-center gap-2">
                                        <span>Team Members Affected:</span>
                                    </label>
                                    <span className="text-electric-400 font-mono text-base font-bold bg-electric-500/10 px-3 py-1 rounded-lg border border-electric-500/20">
                                        {teamSize} staff
                                    </span>
                                </div>
                                <input
                                    type="range"
                                    min="1"
                                    max="50"
                                    value={teamSize}
                                    onChange={(e) => setTeamSize(Number(e.target.value))}
                                    className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-electric-500"
                                />
                                <div className="flex justify-between text-[11px] font-mono text-slate-500">
                                    <span>1 person</span>
                                    <span>25 staff</span>
                                    <span>50+ enterprise</span>
                                </div>
                            </div>

                            {/* Slider 2: Weekly Repetitive Hours */}
                            <div className="space-y-3">
                                <div className="flex justify-between items-center text-sm font-semibold">
                                    <label className="text-slate-300 flex items-center gap-2">
                                        <span>Manual Repetitive Hours / Staff / Week:</span>
                                    </label>
                                    <span className="text-emerald-400 font-mono text-base font-bold bg-emerald-500/10 px-3 py-1 rounded-lg border border-emerald-500/20">
                                        {hoursPerWeek} hrs / wk
                                    </span>
                                </div>
                                <input
                                    type="range"
                                    min="2"
                                    max="30"
                                    value={hoursPerWeek}
                                    onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                                    className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                                />
                                <div className="flex justify-between text-[11px] font-mono text-slate-500">
                                    <span>2 hrs (Basic admin)</span>
                                    <span>15 hrs (Paperwork heavy)</span>
                                    <span>30 hrs (Full manual sync)</span>
                                </div>
                            </div>

                            {/* Slider 3: Hourly Staff Cost in GH₵ */}
                            <div className="space-y-3">
                                <div className="flex justify-between items-center text-sm font-semibold">
                                    <label className="text-slate-300 flex items-center gap-2">
                                        <span>Average Hourly Cost per Staff (GH₵):</span>
                                    </label>
                                    <span className="text-amber-400 font-mono text-base font-bold bg-amber-500/10 px-3 py-1 rounded-lg border border-amber-500/20">
                                        GH₵ {hourlyRate} / hr
                                    </span>
                                </div>
                                <input
                                    type="range"
                                    min="15"
                                    max="200"
                                    step="5"
                                    value={hourlyRate}
                                    onChange={(e) => setHourlyRate(Number(e.target.value))}
                                    className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
                                />
                                <div className="flex justify-between text-[11px] font-mono text-slate-500">
                                    <span>GH₵ 15/hr</span>
                                    <span>GH₵ 100/hr</span>
                                    <span>GH₵ 200/hr</span>
                                </div>
                            </div>
                        </div>

                        {/* Assumptions Footnote */}
                        <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 text-xs text-slate-400 flex items-start gap-2.5">
                            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                            <p className="leading-relaxed">
                                Calculations assume a conservative <strong>75% AI automation efficiency rate</strong> based on real production benchmarks from clinic reception, inventory tracking, and invoice workflows built by Sheripha Sulemana.
                            </p>
                        </div>

                    </div>

                    {/* Results Display Panel (5 Cols) */}
                    <div className="lg:col-span-5 rounded-3xl bg-gradient-to-b from-navy-900 via-slate-900 to-navy-950 border border-slate-700/80 p-8 shadow-2xl flex flex-col justify-between relative overflow-hidden">

                        {/* Decorative Top Glow */}
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-emerald-500/20 rounded-full blur-2xl pointer-events-none" />

                        <div className="space-y-6 relative z-10">
                            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                                <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                                    Estimated Project Impact
                                </span>
                                <Sparkles className="w-5 h-5 text-amber-300 animate-spin" />
                            </div>

                            {/* Stat Card 1: Hours Saved */}
                            <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-1">
                                <div className="flex items-center gap-2 text-xs text-slate-400 font-semibold">
                                    <Clock className="w-4 h-4 text-electric-400" />
                                    <span>Monthly Time Reclaimed</span>
                                </div>
                                <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono">
                                    {hoursSavedMonthly} <span className="text-sm font-sans font-normal text-electric-400">hrs / mo</span>
                                </div>
                                <p className="text-[11px] text-slate-400">
                                    Equivalent to hiring {(hoursSavedMonthly / 160).toFixed(1)} additional full-time staff members.
                                </p>
                            </div>

                            {/* Stat Card 2: GH₵ Monthly Savings */}
                            <div className="p-5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 space-y-1">
                                <div className="flex items-center gap-2 text-xs text-emerald-400 font-semibold">
                                    <Coins className="w-4 h-4 text-emerald-400" />
                                    <span>Estimated Monthly Financial Savings</span>
                                </div>
                                <div className="text-3xl sm:text-4xl font-extrabold text-emerald-400 font-mono">
                                    {formatGHS(monthlySavingsGHS)}
                                </div>
                                <p className="text-[11px] text-slate-300">
                                    Direct cost reduction in manual administrative overhead.
                                </p>
                            </div>

                            {/* Stat Card 3: GH₵ Annual Savings */}
                            <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-1">
                                <div className="flex items-center gap-2 text-xs text-slate-400 font-semibold">
                                    <TrendingUp className="w-4 h-4 text-amber-400" />
                                    <span>Annual Cumulative Value</span>
                                </div>
                                <div className="text-2xl sm:text-3xl font-extrabold text-amber-300 font-mono">
                                    {formatGHS(annualSavingsGHS)} <span className="text-xs font-sans font-normal text-slate-400">/ year</span>
                                </div>
                            </div>
                        </div>

                        {/* CTA Button */}
                        <div className="pt-6 relative z-10">
                            <a
                                href="#contact"
                                className="w-full flex items-center justify-center gap-3 py-4 px-6 rounded-2xl font-extrabold text-sm text-white bg-gradient-to-r from-emerald-500 via-emerald-600 to-electric-600 shadow-glow-emerald hover:scale-[1.02] transition-transform duration-300"
                            >
                                <span>Claim Your {formatGHS(monthlySavingsGHS)}/mo Savings</span>
                                <ArrowRight className="w-4 h-4" />
                            </a>
                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}
