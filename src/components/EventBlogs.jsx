import React, { useRef, useLayoutEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const blogs = [
    {
        id: 1,
        title: "How to setup Luxury brands in India",
        category: "Strategy",
        image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800",
        link: "#",
        date: "Oct 12, 2025"
    },
    {
        id: 2,
        title: "Indian Fashion Industry Trends",
        category: "Fashion",
        image: "https://images.pexels.com/photos/1488463/pexels-photo-1488463.jpeg?auto=compress&cs=tinysrgb&w=800",
        link: "#",
        date: "Sep 28, 2025"
    },
    {
        id: 3,
        title: "Luxury Leather and Accessories",
        category: "Design",
        image: "https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=800",
        link: "#",
        date: "Sep 15, 2025"
    },
    {
        id: 4,
        title: "Future of Luxury Startups",
        category: "Innovation",
        image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800",
        link: "#",
        date: "Aug 30, 2025"
    }
];

const EventBlogs = () => {
    const containerRef = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            // Entrance animation removed to fix visibility issues
            gsap.set(".blog-card", { opacity: 1, y: 0, rotateY: 0 });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="w-full bg-slate-950 py-32 px-4 md:px-12 relative overflow-hidden">

            {/* Background Texture */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 brightness-100 contrast-150 mix-blend-overlay pointer-events-none"></div>

            {/* Header */}
            <div className="relative z-10 container mx-auto mb-20 flex flex-col md:flex-row items-end justify-between border-b border-white/10 pb-8 gap-8">
                <div>
                    <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter leading-none">
                        Events <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-500 to-pink-500 italic font-serif">&</span> Blogs
                    </h2>
                    <p className="text-slate-400 mt-4 max-w-md">
                        Insights from the industry experts and highlights from our latest campus events.
                    </p>
                </div>
                <button className="group flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 hover:bg-white hover:text-black transition-all duration-300">
                    <span className="uppercase text-xs font-bold tracking-widest">View All</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
            </div>

            {/* Grid */}
            <div className="relative z-10 container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {blogs.map((blog) => (
                    <div key={blog.id} className="blog-card group relative h-[500px] bg-slate-900 rounded-3xl overflow-hidden cursor-pointer border border-white/5 hover:border-white/20 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-900/20">

                        {/* Full Background Image */}
                        <div className="absolute inset-0 w-full h-full">
                            <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-transparent transition-colors duration-500 z-10 mix-blend-multiply"></div>
                            <img
                                src={blog.image}
                                alt={blog.title}
                                className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-1000 ease-out grayscale group-hover:grayscale-0"
                            />
                        </div>

                        {/* Category Badge - Floating */}
                        <div className="absolute top-6 left-6 z-30">
                            <div className="bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest text-white group-hover:bg-white group-hover:text-black transition-colors duration-300">
                                {blog.category}
                            </div>
                        </div>

                        {/* Content Overlay */}
                        <div className="absolute inset-0 z-20 flex flex-col justify-end p-8 bg-linear-to-t from-slate-950 via-slate-950/60 to-transparent opacity-90 group-hover:opacity-100 transition-all duration-500">

                            <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                                <div className="mb-4 overflow-hidden">
                                    <span className="inline-block text-xs font-mono text-purple-400 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 delay-100">
                                        {blog.date}
                                    </span>
                                </div>

                                <h3 className="text-2xl font-bold text-white leading-tight mb-2 group-hover:text-purple-100 transition-colors drop-shadow-lg">
                                    {blog.title}
                                </h3>

                                <div className="h-0 group-hover:h-auto overflow-hidden transition-[height] duration-500 ease-in-out">
                                    <div className="pt-6 border-t border-white/20 flex items-center justify-between mt-4">
                                        <span className="text-xs font-bold uppercase tracking-widest text-white">Read Article</span>
                                        <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center group-hover:rotate-45 transition-transform duration-500">
                                            <ArrowUpRight className="w-5 h-5" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                ))}
            </div>

        </div>
    );
};

export default EventBlogs;
