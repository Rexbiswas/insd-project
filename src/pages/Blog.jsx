import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
    Search, Clock, User, ArrowUpRight, 
    Share2, Heart, BookOpen, ChevronRight,
    MessageSquare
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

const Blog = () => {
    const [activeCategory, setActiveCategory] = useState('All');

    const categories = ['All', 'Fashion', 'Interior', 'Graphic', 'Luxury', 'Career'];

    const blogPosts = [
        {
            id: 1,
            title: "Sustainable Couture: The Future of Fashion in 2026",
            excerpt: "How ethical material sourcing and zero-waste patterns are redefining the global runway standards.",
            category: "Fashion",
            author: "Dr. Elena Rossi",
            date: "Mar 15, 2026",
            readTime: "6 min",
            image: "https://images.pexels.com/photos/3735641/pexels-photo-3735641.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            id: 2,
            title: "Smart Spaces: Psychology of Color in Living Environments",
            excerpt: "Exploring how interior shades influence mental well-being and productivity in modern urban homes.",
            category: "Interior",
            author: "Ar. Rahul Mehta",
            date: "Mar 12, 2026",
            readTime: "8 min",
            image: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            id: 3,
            title: "Typography & AI: Generative Design in Branding",
            excerpt: "The intersection of algorithmic creativity and traditional type design in the age of neural networks.",
            category: "Graphic",
            author: "Liam Wright",
            date: "Mar 10, 2026",
            readTime: "4 min",
            image: "https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            id: 4,
            title: "Quiet Luxury: Branding Strategies for the New Era",
            excerpt: "Why subtle elegance and heritage story-telling are winning over loud branding in the luxury market.",
            category: "Luxury",
            author: "Sophia Laurent",
            date: "Mar 05, 2026",
            readTime: "7 min",
            image: "https://images.pexels.com/photos/3785104/pexels-photo-3785104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            id: 5,
            title: "Designing Your Portfolio for Global Studios",
            excerpt: "A comprehensive guide on what international creative directors look for in a junior design portfolio.",
            category: "Career",
            author: "Sanjay Malhotra",
            date: "Feb 28, 2026",
            readTime: "12 min",
            image: "https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            id: 6,
            title: "The Return of Hand-Drawn Illustration in Media",
            excerpt: "Analyzing the resurgence of organic, hand-crafted textures in a predominantly digital advertising space.",
            category: "Graphic",
            author: "Elena Rossi",
            date: "Feb 20, 2026",
            readTime: "5 min",
            image: "https://images.pexels.com/photos/3755706/pexels-photo-3755706.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
    ];

    const filteredPosts = activeCategory === 'All' 
        ? blogPosts 
        : blogPosts.filter(post => post.category === activeCategory);

    return (
        <div className="bg-white min-h-screen font-sans selection:bg-slate-900 selection:text-white">
            <SEO 
                title="Design Perspectives - The INSD Official Blog"
                description="Explore the latest insights in fashion, interior design, and creative industries. Professional trends and academic perspectives from INSD."
            />

            {/* --- HERO SECTION --- */}
            <section className="pt-32 pb-16 px-6 md:px-12 lg:px-24 bg-slate-50 border-b border-slate-100">
                <div className="max-w-7xl mx-auto space-y-12 text-center">
                    <div className="space-y-4">
                        <span className="text-primary font-black uppercase text-[10px] tracking-[0.4em] block">The Official Journal</span>
                        <h1 className="text-5xl md:text-8xl font-black text-slate-900 tracking-tighter leading-[0.9]">
                            INSD <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-slate-500 to-secondary">BLOGS.</span>
                        </h1>
                    </div>

                    {/* Controls Strip */}
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-6">
                        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar w-full md:w-auto pb-4 md:pb-0">
                            {categories.map(cat => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    className={`px-8 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all duration-300 border ${
                                        activeCategory === cat 
                                        ? 'bg-slate-900 text-white border-slate-900 shadow-lg' 
                                        : 'bg-white text-slate-500 border-slate-200 hover:border-slate-400'
                                    }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                        <div className="relative w-full md:w-80">
                            <input 
                                type="text" 
                                placeholder="Search perspectives..."
                                className="w-full bg-white border border-slate-200 rounded-full px-12 py-4 text-xs font-medium focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                            />
                            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300" size={14} />
                        </div>
                    </div>
                </div>
            </section>

            {/* --- BLOG GRID --- */}
            <main className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-24">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
                    {filteredPosts.map((post, idx) => (
                        <article 
                            key={post.id}
                            className="group flex flex-col h-full bg-white border border-slate-100 rounded-[2.5rem] overflow-hidden hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500"
                        >
                            {/* Image Wrapper */}
                            <div className="relative aspect-[16/10] overflow-hidden">
                                <img 
                                    src={post.image} 
                                    alt={post.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                                />
                                <div className="absolute top-6 left-6">
                                    <span className="px-4 py-1.5 bg-white/90 backdrop-blur-md rounded-full text-[9px] font-black uppercase tracking-widest text-slate-900 shadow-lg">
                                        {post.category}
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-8 md:p-10 flex flex-col flex-1 justify-between gap-8">
                                <div className="space-y-6">
                                    <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-slate-400">
                                        <div className="flex items-center gap-1.5"><Clock size={12} /> {post.readTime}</div>
                                        <div className="w-1 h-1 bg-slate-200 rounded-full" />
                                        <div>{post.date}</div>
                                    </div>
                                    <h3 className="text-2xl md:text-3xl font-black text-slate-900 uppercase tracking-tighter leading-tight group-hover:text-primary transition-colors duration-300">
                                        {post.title}
                                    </h3>
                                    <p className="text-slate-500 text-sm md:text-base leading-relaxed font-medium line-clamp-3">
                                        {post.excerpt}
                                    </p>
                                </div>

                                <div className="pt-8 border-t border-slate-50 flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center font-bold text-[10px] uppercase text-slate-500">
                                            {post.author[0]}
                                        </div>
                                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">{post.author}</span>
                                    </div>
                                    <button className="text-primary hover:translate-x-1 transition-transform">
                                        <ArrowUpRight size={20} />
                                    </button>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Pagination Placeholder */}
                <div className="mt-24 flex items-center justify-center gap-4">
                    <button className="px-8 py-3 bg-white border border-slate-200 rounded-full text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-slate-900 hover:border-slate-400 transition-all active:scale-95">Load More Perspectives</button>
                </div>
            </main>

            {/* --- NEWSLETTER STRIP --- */}
            <section className="px-6 md:px-12 lg:px-24 pb-24">
                <div className="max-w-7xl mx-auto p-12 md:p-16 rounded-[3.5rem] bg-slate-900 text-white flex flex-col lg:flex-row items-center justify-between gap-12 relative overflow-hidden group">
                    <div className="relative z-10 space-y-6 text-center lg:text-left">
                        <div className="flex items-center gap-3 justify-center lg:justify-start">
                            <BookOpen className="text-primary" size={20} />
                            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">Bi-Weekly Protocol</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-tight">
                            Design Insights <br /> <span className="text-slate-500 italic">Delivered Daily.</span>
                        </h2>
                        <p className="text-slate-400 max-w-sm font-medium">
                            Join 5,000+ designers getting curated news, tutorials, and career opportunities.
                        </p>
                    </div>

                    <div className="relative z-10 w-full lg:w-[450px] space-y-4">
                        <div className="flex flex-col sm:flex-row gap-4">
                            <input 
                                type="email" 
                                placeholder="name@email.com"
                                className="flex-1 bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm font-medium focus:bg-white/10 transition-all outline-none"
                            />
                            <button className="px-10 py-4 bg-primary text-white font-black uppercase tracking-widest text-[10px] rounded-2xl hover:bg-white hover:text-slate-900 transition-all duration-500 shadow-2xl active:scale-95">
                                Join Now
                            </button>
                        </div>
                        <p className="text-[9px] text-white/20 uppercase font-bold tracking-widest text-center sm:text-left">No spam. Just high-fidelity creativity.</p>
                    </div>

                    {/* Decorative Background Glow */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[80px] rounded-full group-hover:scale-150 transition-transform duration-1000" />
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Blog;
