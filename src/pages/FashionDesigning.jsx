import React, { useRef, useLayoutEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
    Scissors, 
    Palette, 
    Layers, 
    Globe, 
    Star, 
    Zap, 
    ArrowRight, 
    Award, 
    Users, 
    TrendingUp, 
    Sparkles, 
    ChevronRight,
    Play
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

gsap.registerPlugin(ScrollTrigger);

const FashionDesigning = () => {
    const containerRef = useRef(null);
    const heroRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            // Text Splitting/Entrance
            gsap.from(".reveal-text", {
                y: 100,
                opacity: 0,
                duration: 1.2,
                stagger: 0.1,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: ".reveal-text",
                    start: "top 85%"
                }
            });

            // Card Entrance
            gsap.from(".module-card", {
                y: 60,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".module-grid",
                    start: "top 80%"
                }
            });

            // Career Stats Reveal
            gsap.from(".stat-item", {
                scale: 0.9,
                opacity: 0,
                duration: 1,
                stagger: 0.15,
                ease: "back.out(1.7)",
                scrollTrigger: {
                    trigger: ".stats-section",
                    start: "top 85%"
                }
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    const modules = [
        {
            title: "Haute Couture",
            desc: "Mastering the fine art of hand-crafted detailing and bespoke tailoring for luxury markets.",
            icon: Sparkles,
            image: "https://images.unsplash.com/photo-1539109132381-31a5333f0ADA?auto=format&fit=crop&q=80&w=800",
            tag: "ADVANCED"
        },
        {
            title: "Textile Science",
            desc: "Decoding the molecular structure of fabrics and developing sustainable new materials.",
            icon: Layers,
            image: "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&q=80&w=800",
            tag: "TECHNICAL"
        },
        {
            title: "Digital Illustration",
            desc: "Harnessing industry-leading software to bring silhouettes and textures to life digitally.",
            icon: Palette,
            image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=800",
            tag: "CREATIVE"
        },
        {
            title: "Global Marketing",
            desc: "Building luxury brands that resonate from Paris to Tokyo through viral storytelling.",
            icon: Globe,
            image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800",
            tag: "BUSINESS"
        }
    ];

    return (
        <div ref={containerRef} className="bg-white text-slate-900 overflow-hidden font-sans">
            <SEO 
                title="Fashion Designing Courses in Delhi - Best Fashion Institute in India"
                description="Master couture, textile design, and fashion technology at INSD. Enroll in India's top-rated fashion designing degree and launch your career with global placements at Vogue and LVMH."
                keywords="fashion design courses India, fashion designing institute India, best fashion design colleges India, top fashion design schools India, BSc fashion designing India, fashion design degree India"
            />
            
            {/* --- HERO SECTION --- */}
            <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
                <motion.div style={{ y, scale }} className="absolute inset-0 z-0">
                    <img 
                        src="/fashion_design_hero_insd_1772561584136.png" 
                        alt="Fashion Design Hero" 
                        className="w-full h-full object-cover grayscale-[20%] brightness-[0.85]"
                    />
                    <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/20 to-white" />
                </motion.div>

                <div className="relative z-10 container mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        <span className="inline-block px-4 py-1 rounded-full border border-white/30 text-white text-[10px] font-bold uppercase tracking-[0.4em] mb-8 backdrop-blur-md">
                            The Protocol of Style
                        </span>
                        <h1 className="text-7xl md:text-9xl font-black tracking-tighter text-white mb-6 uppercase leading-[0.9]">
                            Fashion <br />
                            <span className="text-transparent stroke-text-white">Designing</span>
                        </h1>
                        <p className="max-w-xl mx-auto text-white/80 text-lg font-light leading-relaxed mb-12">
                            Engineering the next generation of global visionaries who don't just follow trends, but dictate the future of human identity through fabric and form.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <motion.button 
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-10 py-5 bg-primary text-white font-black uppercase text-xs tracking-widest rounded-full shadow-[0_20px_40px_-10px_rgba(236,72,153,0.3)] flex items-center gap-3 group"
                            >
                                Enroll Now <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </motion.button>
                            <button className="flex items-center gap-4 text-white font-bold uppercase text-[10px] tracking-widest group">
                                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white/10 transition-all">
                                    <Play className="w-4 h-4 fill-white" />
                                </div>
                                See Global Portfolio
                            </button>
                        </div>
                    </motion.div>
                </div>

                {/* Vertical Text Sidebars */}
                <div className="absolute left-10 bottom-24 hidden lg:block overflow-hidden">
                    <span className="block origin-left -rotate-90 text-[10px] font-bold uppercase tracking-[1em] text-black/20 whitespace-nowrap">
                        INSD GLOBAL NETWORK
                    </span>
                </div>
                <div className="absolute right-10 top-24 hidden lg:block overflow-hidden">
                    <span className="block origin-right rotate-90 text-[10px] font-bold uppercase tracking-[1em] text-black/20 whitespace-nowrap">
                        ESTABLISHED 2026
                    </span>
                </div>
            </section>

            {/* --- MANIFESTO SECTION --- */}
            <section className="py-32 bg-white relative">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                        <div className="relative">
                            <img 
                                src="/fashion_illustration_module_insd_1772561604283.png" 
                                alt="Manifesto" 
                                className="w-full aspect-square object-cover rounded-2xl shadow-2xl"
                            />
                            <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-slate-900 rounded-2xl p-8 flex flex-col justify-end text-white hidden md:flex">
                                <Award className="w-12 h-12 text-primary mb-4" />
                                <h4 className="text-xl font-bold leading-tight uppercase">Accredited Excellence</h4>
                                <p className="text-[10px] text-white/50 uppercase tracking-widest mt-2">World-Class Recognition</p>
                            </div>
                        </div>

                        <div className="space-y-10">
                            <h2 className="text-5xl md:text-6xl font-black tracking-tighter uppercase leading-[0.9] reveal-text">
                                The Master <br />
                                <span className="text-primary italic">Philosophy</span>
                            </h2>
                            <p className="text-lg text-slate-600 leading-relaxed font-light reveal-text">
                                At INSD, we believe fashion is the most powerful form of non-verbal communication. Our Fashion Designing course is a surgical deep-dive into the technical, artistic, and commercial pillars of the industry. 
                                <br /><br />
                                We bypass the traditional academic fluff and inject you directly into the global design bloodstream through industrial workshops, runway simulations, and high-impact internships.
                            </p>
                            <div className="grid grid-cols-2 gap-8 pt-6">
                                {[
                                    { label: "Design Studios", val: "15+" },
                                    { label: "Global Mentors", val: "250+" },
                                    { label: "Industry Partners", val: "500+" },
                                    { label: "Placement Rate", val: "98%" }
                                ].map((stat, i) => (
                                    <div key={i} className="stat-item">
                                        <span className="block text-3xl font-black text-slate-900">{stat.val}</span>
                                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{stat.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- CURRICULUM ARCHITECTURE --- */}
            <section className="py-32 bg-[#f3f3f3]">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                        <div>
                            <span className="text-primary font-bold text-xs uppercase tracking-[0.3em] mb-4 block">The Syllabus Protocol</span>
                            <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-none">
                                Curriculum <br />
                                <span className="text-slate-300">Architecture</span>
                            </h2>
                        </div>
                        <p className="max-w-md text-slate-500 text-sm leading-relaxed mb-2">
                           An evolution from basic pattern cutting to advanced generative AI design and luxury portfolio building. 
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 module-grid">
                        {modules.map((mod, i) => (
                            <motion.div 
                                key={i}
                                whileHover={{ y: -10 }}
                                className="module-card group bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-100 p-2"
                            >
                                <div className="h-48 overflow-hidden rounded-2xl mb-6 relative">
                                    <img src={mod.image} alt={mod.title} className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110" />
                                    <div className="absolute top-4 left-4">
                                        <span className="px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-[8px] font-black tracking-widest text-slate-900 uppercase">
                                            {mod.tag}
                                        </span>
                                    </div>
                                </div>
                                <div className="px-4 pb-6">
                                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                                        <mod.icon className="w-5 h-5" />
                                    </div>
                                    <h4 className="text-xl font-bold mb-3 uppercase tracking-tighter group-hover:text-primary transition-colors">{mod.title}</h4>
                                    <p className="text-sm text-slate-500 leading-relaxed font-light">{mod.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- CRAFTSMANSHIP SPOTLIGHT --- */}
            <section className="py-32 bg-white flex items-center">
                <div className="container mx-auto px-6">
                    <div className="rounded-[3rem] bg-slate-950 overflow-hidden relative min-h-[500px] flex items-center">
                        <div className="absolute inset-0 z-0">
                            <img 
                                src="/fashion_garment_construction_insd_1772561633783.png" 
                                alt="Craftsmanship" 
                                className="w-full h-full object-cover opacity-30"
                            />
                            <div className="absolute inset-0 bg-linear-to-r from-slate-950 via-slate-950/40 to-transparent" />
                        </div>
                        
                        <div className="relative z-10 p-12 lg:p-24 max-w-2xl">
                            <Scissors className="text-primary w-12 h-12 mb-8 animate-pulse" />
                            <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none mb-6">
                                Precision <br /> <span className="text-transparent stroke-text-white">In Every Stitch</span>
                            </h2>
                            <p className="text-white/60 text-lg font-light leading-relaxed mb-10">
                                We pride ourselves on the "Atelier" approach. Every student is mentored by elite craftsmen in our dedicated construction labs, ensuring that your conceptual designs are perfectly translated into physical reality.
                            </p>
                            <button className="flex items-center gap-4 text-primary font-bold uppercase tracking-widest text-xs group">
                                Explore Our Lab Infrastructure
                                <div className="w-8 h-8 rounded-full border border-primary/30 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                                    <ArrowRight className="w-4 h-4" />
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- CAREER MATRIX --- */}
            <section className="py-32 bg-[#f3f3f3] stats-section">
                <div className="container mx-auto px-6 text-center mb-24">
                    <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-6">The Success <br /> <span className="text-primary">Ecosystem</span></h2>
                    <p className="text-slate-500 max-w-xl mx-auto">Graduates of our program don't just find jobs; they launch movements. From luxury labels to independent disruptors.</p>
                </div>

                <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
                    <div className="bg-white rounded-3xl p-10 shadow-xl flex gap-8 items-start hover:shadow-2xl transition-all">
                        <div className="p-4 bg-slate-100 rounded-2xl text-slate-900 group-hover:bg-primary group-hover:text-white transition-colors">
                            <TrendingUp className="w-8 h-8" />
                        </div>
                        <div>
                            <h4 className="text-2xl font-black uppercase tracking-tighter mb-4">Placement Protocol</h4>
                            <p className="text-slate-500 leading-relaxed mb-6 font-light">Our dedicated placement wing coordinates with over 78 global fashion houses to ensure premium placement for every high-achieving student.</p>
                            <div className="flex flex-wrap gap-4">
                                {["ZARA", "GUCCI", "PRADA", "MANISH MALHOTRA"].map(brand => (
                                    <span key={brand} className="text-[10px] font-bold text-slate-400 border border-slate-200 px-3 py-1 rounded-full">{brand}</span>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-3xl p-10 shadow-xl flex gap-8 items-start hover:shadow-2xl transition-all">
                        <div className="p-4 bg-slate-100 rounded-2xl text-slate-900">
                            <Globe className="w-8 h-8" />
                        </div>
                        <div>
                            <h4 className="text-2xl font-black uppercase tracking-tighter mb-4">International Exchange</h4>
                            <p className="text-slate-500 leading-relaxed mb-6 font-light">Specialized transfer programs to Paris, London, and New York ensure a truly global perspective on fashion commerce and design.</p>
                            <button className="text-xs font-black text-secondary flex items-center gap-2 group">
                                VIEW INTERNATIONAL PARTNERS <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-all" />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="container mx-auto px-6">
                    <h3 className="text-[10px] font-black text-slate-300 uppercase tracking-[0.5em] text-center mb-12">Institutional Credentials</h3>
                    <div className="flex flex-wrap justify-between items-center opacity-40 grayscale gap-12">
                        {/* Placeholder for Logos */}
                        {["UCA", "IBSW", "GOVT OF INDIA", "FASHION WEEK"].map(l => (
                           <span key={l} className="text-2xl font-black text-slate-900">{l}</span>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- PROGRAM PATHWAYS (Image UI Style) --- */}
            <section className="py-24 md:py-40 bg-white border-y border-slate-100 relative">
                <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div>
                        <span className="text-primary font-black text-[10px] uppercase tracking-[0.5em] mb-4 block">The Academic Matrix</span>
                        <h2 className="text-6xl md:text-8xl font-black text-slate-950 uppercase tracking-tighter leading-none mb-10">Program <br /> <span className="text-primary italic">Pathways</span></h2>
                        <p className="text-slate-500 max-w-sm font-light leading-relaxed">Tailored academic tracks designed for every level of expertise. Launch your legacy here.</p>
                    </div>
                    <div className="space-y-8">
                        {[
                            { label: "Undergraduate", active: true },
                            { label: "Postgraduate", active: false },
                            { label: "Advanced Diploma", active: false },
                            { label: "Diploma", active: false },
                            { label: "Short Term Courses", active: false },
                        ].map((path, i) => (
                            <div key={i} className="flex items-center group cursor-pointer">
                                <div className={`h-[2px] transition-all duration-700 ${path.active ? 'w-24 bg-primary' : 'w-0 bg-slate-200 group-hover:w-12'}`} />
                                <span className={`text-3xl md:text-5xl font-bold uppercase tracking-tighter transition-all duration-300 ml-6 ${path.active ? 'text-primary' : 'text-slate-300 group-hover:text-slate-950'}`}>{path.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- INDUSTRY LEVEL STANDARDS --- */}
            <section className="py-24 md:py-40 bg-slate-50 relative overflow-hidden">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center mb-24">
                        <span className="text-primary font-black text-xs uppercase tracking-[0.5em] mb-4 block">Professional Grade</span>
                        <h2 className="text-6xl md:text-8xl font-black text-slate-950 uppercase tracking-tighter leading-none">Industry <span className="text-slate-200">Level</span></h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: "Atelier Protocol", desc: "Train in professional-standard construction labs with master tailors and industry-grade machinery.", icon: Scissors },
                            { title: "Textile R&D", desc: "Scientific approach to fabric manipulation, sustainable dyeing, and material innovation.", icon: Layers },
                            { title: "Global Merchandising", desc: "Understanding the commercial spine of fashion from supply chain to retail psychology.", icon: Globe },
                        ].map((item, i) => (
                            <div key={i} className="p-10 rounded-[3rem] bg-white border border-slate-100 shadow-xl group hover:border-primary/30 transition-all duration-500">
                                <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-all">
                                    <item.icon className="w-8 h-8" />
                                </div>
                                <h4 className="text-2xl font-black text-slate-900 uppercase mb-4 tracking-tighter">{item.title}</h4>
                                <p className="text-slate-500 font-light leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- CAREER OPPORTUNITIES --- */}
            <section className="py-24 md:py-40 bg-white">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row justify-between items-center mb-24 gap-12 text-center lg:text-left">
                        <div className="max-w-2xl">
                            <h2 className="text-6xl md:text-8xl font-black text-slate-950 uppercase tracking-tighter leading-none mb-6">Global <br /> <span className="text-primary italic">Opportunities</span></h2>
                            <p className="text-slate-500 text-lg md:text-xl font-light">The global fashion economy is a multi-trillion dollar engine. We prepare you to take high-impact roles in the world's most prestigious design houses.</p>
                        </div>
                        <div className="flex items-center gap-4 py-8 px-12 rounded-[2.5rem] bg-slate-50 border border-slate-100">
                            <div className="text-center">
                                <span className="block text-4xl font-black text-slate-950">98%</span>
                                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Placement Rate</span>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {[
                            { role: "Creative Director", salary: "$150k+", demand: "High" },
                            { role: "Senior Designer", salary: "$90k+", demand: "Critical" },
                            { role: "Fashion Buyer", salary: "$85k+", demand: "Stable" },
                            { role: "Textile Consultant", salary: "$70k+", demand: "Moderate" },
                            { role: "Couturier", salary: "$110k+", demand: "Premium" },
                            { role: "Brand Manager", salary: "$95k+", demand: "High" },
                            { role: "Stylist", salary: "$65k+", demand: "Stable" },
                            { role: "Production Lead", salary: "$80k+", demand: "Critical" },
                        ].map((path, i) => (
                            <div key={i} className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:scale-[1.02] transition-all duration-500">
                                <span className="text-[10px] font-black text-primary uppercase tracking-[0.3em] mb-4 block">{path.salary}</span>
                                <h4 className="text-xl font-black text-slate-900 uppercase tracking-tighter mb-2">{path.role}</h4>
                                <div className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{path.demand} Demand</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- FINAL CALL TO ACTION --- */}
            <section className="py-24 md:py-40 px-6">
                <div className="container mx-auto">
                    <div className="relative rounded-[4rem] overflow-hidden bg-slate-950 p-12 md:p-32 text-center group">
                        <div className="absolute inset-0 z-0 opacity-40">
                            <img 
                                src="/fashion_runway_career_insd_1772561678538.png" 
                                alt="Runway Call to Action" 
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[3s]"
                            />
                        </div>
                        <div className="relative z-10 text-center container mx-auto px-6">
                            <motion.div
                                whileInView={{ opacity: 1, scale: 1 }}
                                initial={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 1 }}
                            >
                                <h2 className="text-6xl md:text-9xl font-black text-white uppercase tracking-tighter leading-none mb-12">
                                    Ready to <br /> <span className="text-primary italic">Lead?</span>
                                </h2>
                                <div className="max-w-md mx-auto relative group">
                                    <div className="absolute -inset-1 bg-linear-to-r from-primary to-secondary rounded-full blur opacity-40 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                                    <button className="relative px-12 py-8 bg-white rounded-full text-slate-950 font-black uppercase text-sm tracking-widest flex items-center justify-center gap-4 w-full">
                                        Start Your Application <ArrowRight className="w-5 h-5 fill-primary text-primary" />
                                    </button>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default FashionDesigning;
