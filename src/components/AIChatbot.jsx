'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Bot, Minus, SendHorizonal, User, LayoutDashboard, LogOut, Trash2 } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useRouter } from 'next/navigation';

// Global state to track open chatbot instances across components
const openChatbots = new Set();

const AIChatbot = ({ isFloatingPanel = false, hideWindow = false, showTrigger = true }) => {
    const { user, logout } = useAuth();
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);
    const [isCentered, setIsCentered] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [message, setMessage] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [chatHistory, setChatHistory] = useState([]);
    const scrollRef = useRef(null);
    const instanceId = useRef(Math.random().toString(36).substr(2, 9));

    // Initialize chat history with personalized greeting
    useEffect(() => {
        const greeting = user 
            ? `Hi ${user.name}! Welcome back. How can I help you with your ${user.courseName || 'design'} journey today?`
            : "Hi there! I'm your INSD Design Assistant. How can I help you shape your creative future today?";
        
        setChatHistory([{ role: 'bot', content: greeting }]);
    }, [user]);

    // Auto-scroll to bottom
    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [chatHistory, isTyping]);

    useEffect(() => {
        const checkScroll = () => {
            const show = window.scrollY > 200;
            setIsVisible(show);
        };
        checkScroll();
        window.addEventListener('scroll', checkScroll);
        return () => window.removeEventListener('scroll', checkScroll);
    }, []);

    // Manage global open state to avoid duplicate instances
    useEffect(() => {
        if (isOpen) {
            openChatbots.add(instanceId.current);
        } else {
            openChatbots.delete(instanceId.current);
        }

        const handleOpenEvent = (e) => {
            if (e.detail && e.detail.source !== instanceId.current) {
                // If it's a mobile open event, set centered mode
                if (e.detail.isMobile) {
                    setIsCentered(true);
                }
                setIsOpen(true);
            }
        };

        window.addEventListener('open-ai-chat', handleOpenEvent);
        return () => {
            openChatbots.delete(instanceId.current);
            window.removeEventListener('open-ai-chat', handleOpenEvent);
        };
    }, [isOpen]);

    const handleSendMessage = async (e) => {
        e.preventDefault();
        if (!message.trim()) return;

        const userMsg = message;
        setMessage('');
        setChatHistory(prev => [...prev, { role: 'user', content: userMsg }]);
        setIsTyping(true);

        try {
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    message: userMsg,
                    history: chatHistory.slice(-6), // Send last 6 messages for context
                    userContext: user ? {
                        name: user.name,
                        email: user.email,
                        courseName: user.courseName,
                        currentYear: user.currentYear
                    } : null
                })
            });

            const data = await response.json();
            
            if (data.reply) {
                setChatHistory(prev => [...prev, { role: 'bot', content: data.reply }]);
            } else {
                throw new Error("Invalid response format");
            }
        } catch (error) {
            console.error("Chat Error:", error);
            setChatHistory(prev => [...prev, { 
                role: 'bot', 
                content: "I'm having trouble connecting to my creative database right now. Please feel free to reach out to us at admissions@insd.edu.in or call us directly!" 
            }]);
        } finally {
            setIsTyping(false);
        }
    };

    const handleClearChat = () => {
        const greeting = user 
            ? `Hi ${user.name}! Welcome back. How can I help you today?`
            : "Hi there! I'm your INSD Design Assistant. How can I help you shape your creative future today?";
        setChatHistory([{ role: 'bot', content: greeting }]);
    };

    const ChatWindow = ({ centered = false }) => (
        <motion.div
            initial={{ opacity: 0, scale: 0.9, y: centered ? 0 : 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: centered ? 0 : 20 }}
            className={`w-[92vw] sm:w-[400px] h-[550px] max-h-[85vh] bg-white rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.15)] border border-slate-100 flex flex-col overflow-hidden backdrop-blur-2xl ${
                centered 
                    ? 'mx-auto' 
                    : 'mb-4 shadow-2xl origin-bottom-right'
            }`}
        >
            {/* Header */}
            <div className="bg-slate-900 px-6 py-4 flex items-center justify-between border-b border-slate-800">
                <div className="flex items-center gap-3">
                    <div className="relative">
                        <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-primary to-secondary flex items-center justify-center text-white shadow-lg">
                            <Bot size={20} />
                        </div>
                        <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 border-2 border-slate-900 rounded-full" />
                    </div>
                    <div>
                        <h3 className="font-black text-sm text-white tracking-wide uppercase flex items-center gap-2">
                            INSD AI
                            <span className="text-[9px] bg-primary/20 text-primary px-2 py-0.5 rounded-full border border-primary/30 font-bold">2.0</span>
                        </h3>
                        <p className="text-[10px] text-slate-400 font-medium">Always Active Design Guide</p>
                    </div>
                </div>
                <div className="flex items-center gap-1">
                    <button
                        onClick={handleClearChat}
                        title="Clear History"
                        className="p-2 text-slate-400 hover:text-white rounded-full hover:bg-slate-800 transition-colors"
                    >
                        <Trash2 size={16} />
                    </button>
                    <button
                        onClick={() => {
                            setIsOpen(false);
                            setIsCentered(false);
                        }}
                        className="p-2 text-slate-400 hover:text-white rounded-full hover:bg-slate-800 transition-colors"
                    >
                        <X size={18} />
                    </button>
                </div>
            </div>

            {/* User Session Banner if logged in */}
            {user && (
                <div className="bg-slate-50 px-6 py-2 border-b border-slate-100 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                        <span className="text-[11px] font-bold text-slate-700 truncate max-w-[180px]">
                            {user.name} ({user.role === 'admin' ? 'Admin' : 'Student'})
                        </span>
                    </div>
                    <div className="flex items-center gap-3">
                        <a 
                            href={user.role === 'admin' ? '/admin/dashboard' : '/student/dashboard'} 
                            className="text-[10px] font-black uppercase text-primary hover:underline flex items-center gap-1"
                        >
                            <LayoutDashboard size={12} /> Dashboard
                        </a>
                    </div>
                </div>
            )}

            {/* Chat Messages Body */}
            <div 
                ref={scrollRef}
                className="flex-1 overflow-y-auto p-6 space-y-4 bg-slate-50/50 scroll-smooth"
            >
                {chatHistory.map((msg, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`flex gap-3 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                        {msg.role === 'bot' && (
                            <div className="w-7 h-7 rounded-xl bg-slate-900 flex items-center justify-center text-white shrink-0 mt-1 shadow-md">
                                <Bot size={14} />
                            </div>
                        )}
                        <div
                            className={`max-w-[80%] rounded-2xl px-4 py-3 text-xs leading-relaxed ${
                                msg.role === 'user'
                                    ? 'bg-slate-900 text-white rounded-br-none shadow-md font-medium'
                                    : 'bg-white text-slate-700 rounded-bl-none border border-slate-100 shadow-sm font-normal'
                            }`}
                        >
                            {msg.content}
                        </div>
                        {msg.role === 'user' && (
                            <div className="w-7 h-7 rounded-xl bg-primary flex items-center justify-center text-white shrink-0 mt-1 shadow-md">
                                <User size={14} />
                            </div>
                        )}
                    </motion.div>
                ))}

                {isTyping && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex gap-3 justify-start"
                    >
                        <div className="w-7 h-7 rounded-xl bg-slate-900 flex items-center justify-center text-white shrink-0 shadow-md">
                            <Bot size={14} />
                        </div>
                        <div className="bg-white border border-slate-100 rounded-2xl rounded-bl-none px-4 py-3 shadow-sm flex items-center gap-1.5">
                            <motion.span animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1 }} className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                            <motion.span animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1, delay: 0.2 }} className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                            <motion.span animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1, delay: 0.4 }} className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                        </div>
                    </motion.div>
                )}
            </div>

            {/* Quick Action Suggestions */}
            {chatHistory.length <= 2 && (
                <div className="px-6 py-2 bg-white flex gap-2 overflow-x-auto no-scrollbar border-t border-slate-100">
                    {["Course Options", "Admissions 2026", "Campus Placements", "Fee Structure"].map((suggestion, idx) => (
                        <button
                            key={idx}
                            onClick={() => {
                                setMessage(`Tell me about ${suggestion}`);
                            }}
                            className="whitespace-nowrap px-3 py-1.5 rounded-full border border-slate-200 text-[10px] font-bold text-slate-600 hover:border-primary hover:text-primary transition-all shrink-0 bg-slate-50/50"
                        >
                            {suggestion}
                        </button>
                    ))}
                </div>
            )}

            {/* Input Footer */}
            <div className="p-4 bg-white border-t border-slate-100">
                <form onSubmit={handleSendMessage} className="relative flex items-center">
                    <input
                        type="text"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Ask about design programs, admissions..."
                        className="w-full bg-slate-50 text-slate-900 text-xs rounded-full pl-4 pr-12 py-3.5 border border-slate-200 focus:outline-none focus:border-primary focus:bg-white transition-all placeholder:text-slate-400"
                    />
                    <button
                        type="submit"
                        disabled={!message.trim()}
                        className="absolute right-1.5 w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center disabled:opacity-40 disabled:hover:bg-slate-900 hover:bg-primary transition-all duration-300 shadow-md"
                    >
                        <SendHorizonal size={14} />
                    </button>
                </form>
                <p className="text-[10px] text-center text-slate-400 mt-2 font-medium tracking-tight uppercase">
                    Powered by INSD Intelligence
                </p>
            </div>
        </motion.div>
    );

    const content = (
        <motion.div
            initial={isFloatingPanel ? {} : { opacity: 0, scale: 0.5, y: 50 }}
            animate={isFloatingPanel ? {} : { opacity: 1, scale: 1, y: 0 }}
            exit={isFloatingPanel ? {} : { opacity: 0, scale: 0.5, y: 50 }}
            className={`${isFloatingPanel ? 'relative flex flex-col items-end' : 'fixed bottom-28 md:bottom-10 right-6 md:right-10 flex flex-col items-end'} z-1000 font-sans group pointer-events-auto`}
        >
            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && !hideWindow && (
                    <>
                        {/* Mobile Backdrop - Global when open on mobile */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => { setIsOpen(false); setIsCentered(false); }}
                            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[4999] lg:hidden"
                        />
                        
                        {/* Mobile Centered Layout - Forced on Mobile */}
                        <div className="fixed inset-0 z-[5000] flex items-center justify-center p-4 lg:hidden">
                            <ChatWindow centered={true} />
                        </div>
                        
                        {/* Desktop Side Layout - Hidden on Mobile */}
                        <div className="hidden lg:block relative z-[5000]">
                            <ChatWindow centered={isCentered} />
                        </div>
                    </>
                )}
            </AnimatePresence>

            {/* Trigger Button & Tooltip Container */}
            {showTrigger && (
                <div className="relative">
                    {/* Tooltip */}
                    {!isOpen && (
                        <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-4 py-2 bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none translate-x-4 group-hover:translate-x-0 whitespace-nowrap shadow-2xl hidden md:block">
                            {user ? `Helping ${user.name.split(' ')[0]}` : "INSD Assistance"}
                            <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-slate-900 rotate-45" />
                        </div>
                    )}

                    {/* Trigger Button */}
                    <motion.button
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setIsOpen(!isOpen)}
                        className={`relative flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full shadow-2xl transition-all duration-500 overflow-hidden ${isOpen
                            ? 'bg-slate-900 border-slate-800 rotate-90'
                            : 'bg-white/90 backdrop-blur-xl border-slate-100 hover:border-primary/30'
                            } border shadow-[0_10px_30px_rgba(0,0,0,0.1)]`}
                    >
                        <div className={`absolute inset-0 bg-linear-to-tr from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${isOpen ? 'opacity-100' : ''}`} />

                        <AnimatePresence mode="wait">
                            {isOpen ? (
                                <motion.div
                                    key="close"
                                    initial={{ rotate: -90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: 90, opacity: 0 }}
                                >
                                    <X className="relative z-10 text-white" size={24} />
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="open"
                                    initial={{ rotate: 90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: -90, opacity: 0 }}
                                    className="relative w-full h-full flex items-center justify-center p-2"
                                >
                                    {/* Futuristic AI Avatar Icon */}
                                    <div className="relative w-full h-full flex items-center justify-center">
                                        <svg viewBox="0 0 24 24" className="w-7 h-7 text-slate-800 group-hover:text-white transition-all duration-300 fill-none" stroke="currentColor" strokeWidth="1.5">
                                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" strokeOpacity="0.2" />
                                            <path d="M7 12h2m6 0h2m-5-5v2m0 6v2" strokeLinecap="round" />
                                            <rect x="6" y="9" width="12" height="6" rx="3" className="group-hover:stroke-white transition-colors" />
                                            <motion.circle
                                                cx="9" cy="12" r="1.5"
                                                animate={{ scaleY: [1, 0.1, 1] }}
                                                transition={{ duration: 3, repeat: Infinity, times: [0, 0.1, 0.2] }}
                                                className="fill-primary group-hover:fill-white"
                                            />
                                            <motion.circle
                                                cx="15" cy="12" r="1.5"
                                                animate={{ scaleY: [1, 0.1, 1] }}
                                                transition={{ duration: 3, repeat: Infinity, times: [0, 0.1, 0.2] }}
                                                className="fill-primary group-hover:fill-white"
                                            />
                                            <motion.path
                                                d="M7 12h10"
                                                animate={{ opacity: [0, 1, 0], y: [-2, 2, -2] }}
                                                transition={{ duration: 2, repeat: Infinity }}
                                                strokeWidth="0.5"
                                                className="stroke-primary/50 group-hover:stroke-white/50"
                                            />
                                        </svg>
                                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary border-2 border-white rounded-full z-20 group-hover:border-primary transition-colors shadow-sm" />
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Pulse Ring */}
                        {!isOpen && (
                        <div className="absolute inset-0 rounded-full border-2 border-primary/20 animate-ping opacity-0 group-hover:opacity-100" />
                        )}
                    </motion.button>
                </div>
            )}
        </motion.div>
    );

    if (isFloatingPanel) return content;

    return (
        <AnimatePresence>
            {isVisible && content}
        </AnimatePresence>
    );
};

export default AIChatbot;
