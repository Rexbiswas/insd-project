import React, { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import { Filter, Search, ArrowUpRight, CheckCircle2, LayoutGrid, List, Sparkles } from 'lucide-react';
import Footer from '../components/Footer';

gsap.registerPlugin(ScrollTrigger);

const CourseCard = ({ course, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="group relative h-[500px] w-full rounded-[2.5rem] overflow-hidden bg-slate-900 border border-white/10"
        >
            {/* Background Image with Hover Zoom */}
            <div className="absolute inset-0 z-0">
                <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/40 to-transparent" />
            </div>

            {/* Content Overlay */}
            <div className="absolute inset-0 z-10 p-8 flex flex-col justify-end">
                <div className="space-y-4">
                    <span className="inline-block px-4 py-1 rounded-full bg-pink-500/20 border border-pink-500/30 text-pink-400 text-[10px] font-mono uppercase tracking-widest">
                        {course.duration}
                    </span>
                    <h3 className="text-3xl md:text-4xl font-black text-white uppercase leading-[0.9] tracking-tighter group-hover:text-pink-500 transition-colors">
                        {course.title}
                    </h3>
                    <p className="text-slate-400 text-sm font-light max-w-xs opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                        {course.description}
                    </p>

                    <div className="flex items-center gap-4 pt-4">
                        <button className="flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full font-bold text-xs uppercase tracking-widest hover:bg-pink-600 hover:text-white transition-all transform hover:scale-105">
                            View Syllabus <ArrowUpRight size={16} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Corner Accent */}
            <div className="absolute top-8 right-8 w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-pink-600 group-hover:border-pink-600 transition-all duration-500">
                <ArrowUpRight className="text-white transform group-hover:rotate-45 transition-transform" size={20} />
            </div>
        </motion.div>
    );
};

const Courses = () => {
    const containerRef = useRef(null);
    const heroRef = useRef(null);
    const [activeFilter, setActiveFilter] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");

    const courses = [
        {
            title: "Fashion Design",
            category: "Fashion",
            duration: "3 Years Bachelors",
            image: "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg",
            description: "Master the art of haute couture, drape, and structural design in our state-of-the-art studios."
        },
        {
            title: "Interior Design",
            category: "Interior",
            duration: "3 Years Bachelors",
            image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
            description: "Learn to build immersive environments that blend high-performance luxury with human ergonomics."
        },
        {
            title: "Graphic Design",
            category: "VFX",
            duration: "2 Years Masters",
            image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
            description: "From brand logic to motion design, define the visual language of the next digital era."
        },
        {
            title: "Luxury Brand Management",
            category: "Fashion",
            duration: "1 Year PG",
            image: "https://images.pexels.com/photos/1183992/pexels-photo-1183992.jpeg",
            description: "Understand the psychology of high-end consumerism and manage global luxury conglomerates."
        },
        {
            title: "Animation & VFX",
            category: "VFX",
            duration: "3 Years Bachelors",
            image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg",
            description: "Create hyper-realistic worlds and cinematic narratives using industry-standard rendering farms."
        },
        {
            title: "Jewellery Design",
            category: "Fashion",
            duration: "2 Years Diploma",
            image: "https://images.pexels.com/photos/1531660/pexels-photo-1531660.jpeg",
            description: "The intersection of material engineering and fine art. Craft the heirlooms of tomorrow."
        }
    ];

    useEffect(() => {
        const lenis = new Lenis({
            lerp: 0.1,
            smoothWheel: true
        });
        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        // Hero Parallax
        gsap.to(".hero-bg-vortex", {
            rotate: 360,
            duration: 100,
            repeat: -1,
            ease: "none"
        });

        gsap.to(".hero-title-reveal", {
            scrollTrigger: {
                trigger: heroRef.current,
                start: "top top",
                end: "bottom top",
                scrub: true
            },
            y: 200,
            scale: 0.8,
            opacity: 0
        });

        return () => {
            lenis.destroy();
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, []);

    const filteredCourses = courses.filter(course => {
        const matchesFilter = activeFilter === "All" || course.category === activeFilter;
        const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesFilter && matchesSearch;
    });

    return (
        <div ref={containerRef} className="bg-[#050505] text-white selection:bg-pink-600 font-sans overflow-hidden">

            {/* 1. CINEMATIC HERO */}
            <section ref={heroRef} className="relative h-[95vh] flex flex-col items-center justify-center px-6 overflow-hidden">
                {/* Complex Background Elements */}
                <div className="absolute inset-0 z-0">
                    <div className="hero-bg-vortex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vmax] h-[150vmax] border-[1px] border-white/5 rounded-full" />
                    <div className="hero-bg-vortex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vmax] h-[120vmax] border-[1px] border-white/10 rounded-full animate-pulse" />
                    <div className="hero-bg-vortex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vmax] h-[90vmax] border-[1px] border-white/5 rounded-full" />

                    {/* Gradient Halos */}
                    <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] bg-pink-600/20 blur-[150px] rounded-full" />
                    <div className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] bg-violet-600/20 blur-[150px] rounded-full" />
                </div>

                <div className="hero-title-reveal relative z-10 text-center">
                    <motion.span
                        initial={{ opacity: 0, tracking: "0.2em" }}
                        animate={{ opacity: 1, tracking: "1.2em" }}
                        transition={{ duration: 1.5 }}
                        className="text-pink-500 font-mono text-xs md:text-sm uppercase mb-8 block ml-[1.2em]"
                    >
                        Department_of_Vision
                    </motion.span>
                    <h1 className="text-[12vw] md:text-[10vw] font-black uppercase leading-none tracking-tighter mb-4">
                        The <span className="text-transparent stroke-text-white stroke-white!">Curriculum.</span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-slate-400 font-light text-lg md:text-xl leading-relaxed px-6">
                        Engineered to break conventions. From haute couture to digital architecture, explore the protocols of global design excellence.
                    </p>
                </div>

                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-30">
                    <span className="text-[10px] font-mono uppercase tracking-widest">Scroll_to_Explore</span>
                    <div className="w-px h-16 bg-linear-to-b from-white to-transparent" />
                </div>
            </section>

            {/* 2. DYNAMIC FILTER & SEARCH BAR */}
            <div className="sticky top-20 z-40 px-6 py-6 apple-glass-dark border-y border-white/5 !bg-slate-900/60 transition-all">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6 items-center justify-between">

                    {/* Category Filter */}
                    <div className="flex gap-2 overflow-x-auto no-scrollbar w-full lg:w-auto pb-2 lg:pb-0">
                        {["All", "Fashion", "Interior", "VFX"].map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveFilter(cat)}
                                className={`px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest border transition-all ${activeFilter === cat
                                        ? "bg-white text-black border-white"
                                        : "bg-white/5 text-slate-400 border-white/10 hover:border-white/40"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Futuristic Search */}
                    <div className="relative w-full lg:w-[400px] h-14">
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Identify Your Protocol..."
                            className="w-full h-full bg-slate-950 border border-white/10 rounded-full px-12 focus:border-pink-500 outline-none text-white text-sm transition-all"
                        />
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
                            <span className="hidden md:inline-block text-[10px] font-mono text-slate-600">FILTER_ACTIVE</span>
                            <div className="w-2 h-2 rounded-full bg-pink-500 animate-pulse" />
                        </div>
                    </div>
                </div>
            </div>

            {/* 3. THE GRID */}
            <section className="py-24 px-6 relative z-10">
                <div className="max-w-7xl mx-auto space-y-12">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                                <LayoutGrid size={20} className="text-pink-500" />
                            </div>
                            <h2 className="text-2xl font-bold uppercase tracking-tighter">
                                Available Nodes ({filteredCourses.length})
                            </h2>
                        </div>
                        <div className="hidden md:flex items-center gap-2 text-slate-600">
                            <List size={20} className="hover:text-white cursor-pointer" />
                            <LayoutGrid size={20} className="text-white cursor-pointer" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                        {filteredCourses.map((course, i) => (
                            <CourseCard key={i} course={course} index={i} />
                        ))}
                    </div>

                    {filteredCourses.length === 0 && (
                        <div className="h-[400px] flex flex-col items-center justify-center text-center space-y-6">
                            <div className="w-20 h-20 rounded-full border border-white/10 flex items-center justify-center animate-spin-slow">
                                <Sparkles size={40} className="text-slate-700" />
                            </div>
                            <p className="text-xl font-light text-slate-500 italic">No nodes found matching your query within the "{activeFilter}" sector.</p>
                            <button
                                onClick={() => { setActiveFilter("All"); setSearchQuery(""); }}
                                className="text-pink-500 font-bold uppercase tracking-widest text-xs hover:underline decoration-2 underline-offset-8"
                            >
                                Reset Terminal
                            </button>
                        </div>
                    )}
                </div>
            </section>

            {/* 4. THE CALL TO CREATION */}
            <section className="py-32 px-6 bg-white relative overflow-hidden group">
                <div className="absolute inset-0 bg-slate-950 translate-y-full group-hover:translate-y-0 transition-transform duration-1000 ease-[cubic-bezier(0.76,0,0.24,1)]" />

                <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between gap-12 pointer-events-none md:pointer-events-auto">
                    <div className="max-w-xl text-center md:text-left transition-colors duration-700 group-hover:text-white text-black">
                        <span className="font-mono text-[10px] uppercase tracking-widest mb-4 block">Next_Step</span>
                        <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] mb-8">
                            Join The <br /> Revolution.
                        </h2>
                        <p className="text-lg opacity-60 font-light">
                            Seats for the 2026 Academic Session are being claimed. Secure your spot in the ecosystem of pure creation.
                        </p>
                    </div>

                    <div className="flex flex-col gap-4 w-full md:w-auto">
                        <button className="px-12 py-6 bg-pink-600 text-white font-black rounded-full uppercase tracking-widest hover:bg-black transition-all hover:scale-105 shadow-2xl shadow-pink-600/20">
                            Apply for Admission
                        </button>
                        <button className="px-12 py-6 border border-black group-hover:border-white/20 text-black group-hover:text-white font-black rounded-full uppercase tracking-widest transition-all hover:bg-white hover:text-black">
                            Download Prospectus
                        </button>
                    </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-px bg-slate-200 group-hover:bg-white/10 rotate-12" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-px bg-slate-200 group-hover:bg-white/10 -rotate-12" />
            </section>

            <Footer />
        </div>
    );
};

export default Courses;
