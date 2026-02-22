import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Search, Clock, User, ChevronRight, Share2, Heart } from 'lucide-react';
import Footer from '../components/Footer';

gsap.registerPlugin(ScrollTrigger);

const Blog = () => {
    const [activeCategory, setActiveCategory] = useState('All');
    const containerRef = useRef(null);
    const gridRef = useRef(null);

    const categories = ['All', 'Fashion', 'Interior', 'Graphic', 'Luxury', 'Career'];

    const blogPosts = [
        {
            id: 1,
            title: "The Evolution of Sustainable Fashion in 2026",
            category: "Fashion",
            author: "Maya Sharma",
            date: "Feb 15, 2026",
            readTime: "5 min",
            image: "https://images.pexels.com/photos/3735641/pexels-photo-3735641.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            featured: true
        },
        {
            id: 2,
            title: "Minimalism vs. Maximalism: Interior Trends",
            category: "Interior",
            author: "David Chen",
            date: "Feb 12, 2026",
            readTime: "8 min",
            image: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            id: 3,
            title: "How AI is Redesigning Typography Codes",
            category: "Graphic",
            author: "Liam Wright",
            date: "Feb 10, 2026",
            readTime: "4 min",
            image: "https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            id: 4,
            title: "The Silent Luxury: Quiet Luxury Branding",
            category: "Luxury",
            author: "Sophia Laurent",
            date: "Feb 05, 2026",
            readTime: "6 min",
            image: "https://images.pexels.com/photos/3785104/pexels-photo-3785104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            id: 5,
            title: "Breaking into the Global Design Industry",
            category: "Career",
            author: "Dr. Ananya Rao",
            date: "Jan 28, 2026",
            readTime: "10 min",
            image: "https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            id: 6,
            title: "Colors of the Season: Spring Palette 2026",
            category: "Fashion",
            author: "Elena Rossi",
            date: "Jan 20, 2026",
            readTime: "4 min",
            image: "https://images.pexels.com/photos/3755706/pexels-photo-3755706.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
    ];

    const filteredPosts = activeCategory === 'All'
        ? blogPosts
        : blogPosts.filter(post => post.category === activeCategory);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".blog-header > *", {
                y: 50,
                opacity: 0,
                stagger: 0.1,
                duration: 1,
                ease: "power4.out"
            });

            ScrollTrigger.batch(".blog-card", {
                onEnter: batch => gsap.to(batch, { opacity: 1, y: 0, stagger: 0.15, overwrite: true, duration: 0.8 }),
                start: "top 85%"
            });
        }, containerRef);

        return () => ctx.revert();
    }, [activeCategory]);

    return (
        <div ref={containerRef} className="bg-slate-50 min-h-screen font-sans selection:bg-slate-900 selection:text-white">

            {/* --- HERO SECTION --- */}
            <section className="relative pt-32 pb-20 px-6 md:px-12 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto blog-header">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                        <div className="max-w-3xl">
                            <span className="text-slate-400 font-bold uppercase tracking-[0.3em] text-xs mb-4 block underline decoration-primary underline-offset-8">Journal & Perspectives</span>
                            <h1 className="text-6xl md:text-9xl font-black text-slate-900 uppercase tracking-tighter leading-none">
                                Inside <br />
                                <span className="text-transparent strok-text-black italic">Design.</span>
                            </h1>
                        </div>
                        <div className="hidden md:block">
                            <p className="text-slate-400 text-right font-medium max-w-[200px] text-sm uppercase leading-relaxed">
                                Curated insights from the global design ecosystem.
                            </p>
                        </div>
                    </div>

                    {/* Filter & Search Bar */}
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-8 py-6 border-y border-slate-100">
                        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar w-full lg:w-auto pb-2 lg:pb-0">
                            {categories.map(cat => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    className={`px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest transition-all duration-300 border ${activeCategory === cat
                                            ? 'bg-slate-900 text-white border-slate-900 shadow-xl'
                                            : 'bg-transparent text-slate-400 border-slate-100 hover:border-slate-300'
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                        <div className="relative w-full lg:w-96">
                            <input
                                type="text"
                                placeholder="Search by topic..."
                                className="w-full bg-slate-50 border-none rounded-2xl px-12 py-4 text-sm focus:ring-2 focus:ring-slate-200 transition-all font-medium"
                            />
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                        </div>
                    </div>
                </div>

                {/* Decorative Background Elements */}
                <div className="absolute top-0 right-[-10%] w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
                <div className="absolute bottom-0 left-[-10%] w-[400px] h-[400px] bg-secondary/5 blur-[100px] rounded-full pointer-events-none" />
            </section>

            {/* --- FEATURED & GRID SECTION --- */}
            <main className="max-w-7xl mx-auto px-6 py-20">

                <div className="grid grid-cols-1 md:grid-cols-12 gap-10">

                    <AnimatePresence mode='popLayout'>
                        {filteredPosts.map((post, idx) => {
                            const isLarge = post.featured && activeCategory === 'All';

                            return (
                                <motion.article
                                    key={post.id}
                                    layout
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.5, delay: idx * 0.05 }}
                                    className={`blog-card group cursor-pointer ${isLarge ? 'md:col-span-12 lg:col-span-8' : 'md:col-span-6 lg:col-span-4'
                                        }`}
                                >
                                    <div className="relative aspect-[16/10] overflow-hidden rounded-[2.5rem] bg-slate-200 mb-6">
                                        <img
                                            src={post.image}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                                            alt={post.title}
                                        />
                                        <div className="absolute top-6 left-6 flex gap-2">
                                            <span className="px-4 py-1.5 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-widest text-slate-900 shadow-xl">
                                                {post.category}
                                            </span>
                                        </div>
                                        <div className="absolute inset-0 bg-slate-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    </div>

                                    <div className="space-y-4 px-2">
                                        <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-slate-400">
                                            <div className="flex items-center gap-1.5"><Clock size={12} /> {post.readTime} Read</div>
                                            <div className="w-1 h-1 bg-slate-200 rounded-full" />
                                            <div>{post.date}</div>
                                        </div>
                                        <h3 className={`${isLarge ? 'text-3xl md:text-5xl' : 'text-2xl'} font-black text-slate-900 uppercase tracking-tighter leading-tight group-hover:text-primary transition-colors duration-300`}>
                                            {post.title}
                                        </h3>
                                        <div className="flex items-center justify-between pt-4">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center font-bold text-[10px] uppercase">
                                                    {post.author[0]}
                                                </div>
                                                <span className="text-xs font-bold text-slate-600 uppercase tracking-wide">{post.author}</span>
                                            </div>
                                            <div className="flex gap-4 text-slate-300">
                                                <button className="hover:text-primary transition-colors"><Heart size={16} /></button>
                                                <button className="hover:text-primary transition-colors"><Share2 size={16} /></button>
                                            </div>
                                        </div>
                                    </div>
                                </motion.article>
                            );
                        })}
                    </AnimatePresence>

                    {/* Newsletter Sidebar - Appears in grid */}
                    <aside className="md:col-span-12 lg:col-span-4 bg-slate-900 rounded-[3rem] p-12 text-white flex flex-col justify-between relative overflow-hidden">
                        <div className="relative z-10">
                            <span className="text-primary font-mono text-[10px] uppercase tracking-widest block mb-4">Subscription</span>
                            <h4 className="text-3xl font-black uppercase tracking-tighter mb-6 leading-none">
                                Designing <br />
                                <span className="italic text-primary">Your Inbox.</span>
                            </h4>
                            <p className="text-white/40 text-sm leading-relaxed mb-8">
                                Weekly deep-dives into industry trends, event invites, and scholarship alerts.
                            </p>
                        </div>
                        <div className="relative z-10 space-y-4">
                            <input
                                type="email"
                                placeholder="name@email.com"
                                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm focus:bg-white/10 transition-all outline-none"
                            />
                            <button className="w-full py-4 bg-primary text-white font-black uppercase tracking-widest text-xs rounded-2xl hover:bg-white hover:text-slate-900 transition-all duration-500 shadow-2xl">
                                Join Protocol
                            </button>
                        </div>

                        {/* Background Shapes */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-[60px] rounded-full" />
                    </aside>
                </div>
            </main>

            {/* --- CALL TO ACTION --- */}
            <section className="bg-white py-32 px-6">
                <div className="max-w-7xl mx-auto rounded-[4rem] bg-slate-50 border border-slate-100 p-12 md:p-24 text-center group">
                    <span className="text-xs font-black uppercase tracking-[0.4em] text-slate-400 mb-8 block">Collaborate With Us</span>
                    <h2 className="text-4xl md:text-7xl font-black text-slate-900 uppercase tracking-tighter leading-tight mb-12">
                        Have a story to share? <br />
                        <span className="text-transparent strok-text-black italic">Submit Your Work.</span>
                    </h2>
                    <button className="px-12 py-5 bg-slate-900 text-white font-black uppercase tracking-widest text-xs rounded-full hover:scale-110 transition-transform duration-500 shadow-2xl">
                        Become a Contributor
                    </button>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Blog;
