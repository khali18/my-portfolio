import React, { useState, useRef, useEffect } from 'react';
import { Bot, X, Send, Sparkles, MessageSquare, RefreshCw, User, CheckCircle2 } from 'lucide-react';
import { aiAssistantKnowledge, personalInfo } from '../data/portfolioData';

export default function AIChatWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [inputMsg, setInputMsg] = useState('');
    const [messages, setMessages] = useState([
        {
            sender: 'bot',
            text: `Hi! I'm Sheripha's AI Assistant. Ask me anything about my services, healthcare projects, tech stack, or availability!`,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
    ]);
    const [isTyping, setIsTyping] = useState(false);
    const chatEndRef = useRef(null);

    const scrollToBottom = () => {
        chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        if (isOpen) scrollToBottom();
    }, [messages, isOpen, isTyping]);

    const handleSend = (e) => {
        e.preventDefault();
        if (!inputMsg.trim()) return;

        const userText = inputMsg.trim();
        const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

        setMessages((prev) => [...prev, { sender: 'user', text: userText, timestamp: time }]);
        setInputMsg('');
        setIsTyping(true);

        // Find best answer from Q&A knowledge base
        setTimeout(() => {
            const lower = userText.toLowerCase();
            let matchedAnswer = null;

            for (const item of aiAssistantKnowledge) {
                if (item.keywords.some((kw) => lower.includes(kw))) {
                    matchedAnswer = item.answer;
                    break;
                }
            }

            if (!matchedAnswer) {
                matchedAnswer = `I specialize in AI business automation, n8n workflows, custom chatbots, and healthcare systems. Feel free to ask about my projects (AI Clinic Receptionist, Pharmacy Intelligence), tech stack (Python, Node, React), or use the Contact Form below!`;
            }

            setMessages((prev) => [
                ...prev,
                {
                    sender: 'bot',
                    text: matchedAnswer,
                    timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                }
            ]);
            setIsTyping(false);
        }, 900);
    };

    return (
        <div className="fixed bottom-6 right-6 z-50">

            {/* Floating Toggle Button */}
            {!isOpen && (
                <button
                    onClick={() => setIsOpen(true)}
                    className="group relative flex items-center gap-3 px-4 py-3 rounded-full bg-gradient-to-r from-electric-600 to-emerald-accent text-white shadow-glow-blue hover:scale-105 transition-all duration-300 font-bold text-xs"
                >
                    <div className="relative">
                        <Bot className="w-5 h-5 animate-bounce" />
                        <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 ring-2 ring-navy-950 animate-ping" />
                    </div>
                    <span>Ask Sheripha AI</span>
                    <Sparkles className="w-4 h-4 text-amber-300" />
                </button>
            )}

            {/* Chat Window Popup */}
            {isOpen && (
                <div className="w-[360px] sm:w-[400px] h-[520px] rounded-3xl bg-navy-950 border border-slate-800 shadow-2xl flex flex-col justify-between overflow-hidden animate-fadeIn font-sans">

                    {/* Header */}
                    <div className="p-4 bg-navy-900 border-b border-slate-800 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="relative w-9 h-9 rounded-xl bg-electric-600 text-white flex items-center justify-center font-bold">
                                <Bot className="w-5 h-5" />
                                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-navy-900" />
                            </div>
                            <div>
                                <h4 className="text-xs font-bold text-white flex items-center gap-1">
                                    <span>Sheripha AI Assistant</span>
                                    <Sparkles className="w-3 h-3 text-electric-400" />
                                </h4>
                                <span className="text-[10px] font-mono text-emerald-400 block">
                                    Online • GPT-4o Trained Persona
                                </span>
                            </div>
                        </div>

                        <button
                            onClick={() => setIsOpen(false)}
                            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Messages Container */}
                    <div className="flex-1 p-4 overflow-y-auto space-y-3 text-xs">
                        {messages.map((msg, idx) => (
                            <div
                                key={idx}
                                className={`flex gap-2.5 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                            >
                                {msg.sender === 'bot' && (
                                    <div className="w-7 h-7 rounded-lg bg-electric-600/30 text-electric-400 flex items-center justify-center shrink-0 mt-0.5">
                                        <Bot className="w-4 h-4" />
                                    </div>
                                )}

                                <div
                                    className={`max-w-[80%] p-3 rounded-2xl ${msg.sender === 'user'
                                        ? 'bg-electric-600 text-white rounded-br-none'
                                        : 'bg-slate-900 text-slate-200 border border-slate-800 rounded-bl-none'
                                        }`}
                                >
                                    <p className="leading-relaxed">{msg.text}</p>
                                    <span
                                        className={`text-[9px] font-mono block mt-1 ${msg.sender === 'user' ? 'text-blue-200 text-right' : 'text-slate-500'
                                            }`}
                                    >
                                        {msg.timestamp}
                                    </span>
                                </div>

                                {msg.sender === 'user' && (
                                    <div className="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                                        <User className="w-4 h-4" />
                                    </div>
                                )}
                            </div>
                        ))}

                        {isTyping && (
                            <div className="flex items-center gap-2 text-slate-500 text-[11px] font-mono pl-9">
                                <RefreshCw className="w-3 h-3 animate-spin text-electric-400" />
                                <span>Sheripha AI is formulating answer...</span>
                            </div>
                        )}
                        <div ref={chatEndRef} />
                    </div>

                    {/* Suggested Quick Questions */}
                    <div className="p-2 border-t border-slate-800 bg-slate-900/60 flex items-center gap-1.5 overflow-x-auto text-[10px]">
                        <button
                            onClick={() => { setInputMsg("What services do you offer?"); }}
                            className="px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 hover:text-white whitespace-nowrap"
                        >
                            Services
                        </button>
                        <button
                            onClick={() => { setInputMsg("Tell me about Pharmacy Inventory System"); }}
                            className="px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 hover:text-white whitespace-nowrap"
                        >
                            Pharmacy AI
                        </button>
                        <button
                            onClick={() => { setInputMsg("How can I hire Sheripha?"); }}
                            className="px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 hover:text-white whitespace-nowrap"
                        >
                            Hire Sheripha
                        </button>
                    </div>

                    {/* Input Bar */}
                    <form onSubmit={handleSend} className="p-3 bg-navy-900 border-t border-slate-800 flex items-center gap-2">
                        <input
                            type="text"
                            placeholder="Ask Sheripha's AI..."
                            value={inputMsg}
                            onChange={(e) => setInputMsg(e.target.value)}
                            className="flex-1 px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-electric-500"
                        />
                        <button
                            type="submit"
                            className="p-2 rounded-xl bg-electric-600 text-white hover:bg-electric-500 transition-colors"
                        >
                            <Send className="w-4 h-4" />
                        </button>
                    </form>

                </div>
            )}
        </div>
    );
}
