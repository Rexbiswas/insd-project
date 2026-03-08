import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
    ArrowUpRight, Users, Layers, Maximize, BookOpen, Pipette, 
    Camera, Monitor, Coffee, Mic, Library, Cpu, MapPin 
} from 'lucide-react';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

const stats = [
    { label: "Students", value: "750+", icon: <Users size={20} className="text-[#d4af37]" /> },
    { label: "Floors", value: "3", icon: <Layers size={20} className="text-[#d4af37]" /> },
    { label: "Area (sq.m)", value: "2500", icon: <Maximize size={20} className="text-[#d4af37]" /> }
];

const facilities = [
    { title: "Classrooms", count: "16", icon: <BookOpen size={24} /> },
    { title: "Artistic Workshops", count: "2", icon: <Pipette size={24} /> },
    { title: "Photo/Video Studio", count: "1", icon: <Camera size={24} /> },
    { title: "Computer Graphics Room", count: "1", icon: <Monitor size={24} /> },
    { title: "Cafeteria", count: "1", icon: <Coffee size={24} /> },
    { title: "Auditorium", count: "1", icon: <Mic size={24} /> },
    { title: "Book Nook", count: "1", icon: <Library size={24} /> },
    { title: "Fab Lab", count: "1", icon: <Cpu size={24} /> }
];

const ParisCDP = () => {
    const heroRef = useRef(null);
    const { scrollYProgress: heroScroll } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"]
    });

    const yImg = useTransform(heroScroll, [0, 1], ["0%", "50%"]);
    const opacityHero = useTransform(heroScroll, [0, 0.8], [1, 0]);

    return (
        <div className="bg-[#111] min-h-screen font-sans selection:bg-[#d4af37] selection:text-[#111] text-white overflow-hidden">
            <SEO 
                title="Study Design in Paris | INSD & CDP International Campus"
                description="Join INSD's Paris campus at Grande Arche, La Défense. Experience the fusion of European heritage and futuristic design technology in the world's fashion capital."
                keywords="study design Paris, design school France, INSD Paris campus, CDP Paris, fashion design Paris, study interior design Europe"
            />
            
            {/* Parisian Elegant Hero */}
            <section ref={heroRef} className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-black">
                <motion.div 
                    style={{ y: yImg, opacity: opacityHero }}
                    className="absolute inset-0 z-0"
                >
                    <img 
                        src="https://images.pexels.com/photos/1125212/pexels-photo-1125212.jpeg?auto=compress&cs=tinysrgb&w=2000" 
                        alt="Paris CDP Infinite Elegance"
                        className="w-full h-full object-cover grayscale opacity-50 contrast-125"
                    />
                    <div className="absolute inset-0 bg-linear-to-b from-[#111]/10 via-transparent to-[#111]" />
                </motion.div>

                {/* Vertical Decorative Lines */}
                <div className="absolute inset-0 z-0 pointer-events-none flex justify-center gap-[20vw] opacity-10">
                    <div className="w-px h-full bg-white" />
                    <div className="w-px h-full bg-white" />
                    <div className="w-px h-full bg-white" />
                </div>

                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="relative z-10 text-center px-6 mt-16"
                >
                    <div className="flex items-center justify-center gap-4 mb-8">
                        <span className="w-12 h-px bg-[#d4af37]" />
                        <span className="text-xs font-bold uppercase tracking-[0.4em] text-[#d4af37]">Campus De Paris</span>
                        <span className="w-12 h-px bg-[#d4af37]" />
                    </div>
                    
                    <h1 className="text-6xl md:text-9xl lg:text-[11rem] font-black uppercase tracking-tighter leading-[0.8] mb-6">
                        <span className="block font-serif italic font-light text-[#d4af37] opacity-80 text-4xl md:text-6xl lg:text-8xl mb-[-2rem] md:mb-[-4rem] ml-12">The</span>
                        Paris<br/>
                        <span className="text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.8)' }}>Node.</span>
                    </h1>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="absolute bottom-12 left-6 md:left-20 flex flex-col gap-2"
                >
                    <MapPin size={20} className="text-[#d4af37]" />
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/50">Grande Arche <br/> La Défense</p>
                </motion.div>
            </section>

            {/* Grande Arche Intro & Core Stats */}
            <section className="py-32 px-6 lg:px-20 max-w-[1400px] mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-end mb-32">
                    <div>
                        <span className="text-sm font-bold uppercase tracking-widest text-[#d4af37] block mb-6">The Atmosphere</span>
                        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[1.1] mb-8">
                            Global Center <br/> <span className="text-white/40 italic font-serif font-light">of Couture & Scale.</span>
                        </h2>
                        <p className="text-lg md:text-xl font-light text-white/60 leading-relaxed max-w-xl">
                            Positioned powerfully within the iconic Grande Arche structure, our Paris Campus operates at the bleeding edge of the world's fashion capital. We merge historical luxury with hyper-scale infrastructure.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {stats.map((stat, i) => (
                            <motion.div 
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md"
                            >
                                <div className="mb-4">{stat.icon}</div>
                                <h4 className="text-3xl font-black mb-1 text-white">{stat.value}</h4>
                                <p className="text-xs font-bold uppercase tracking-widest text-white/50">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* The 2500m2 Blueprint (Facility Grid) */}
                <div className="relative">
                    <div className="text-center mb-16">
                        <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">The 2,500m² Blueprint</h3>
                        <p className="text-white/50 mt-4 uppercase tracking-widest text-sm font-bold">16 Rooms • 2 Workshops • 1 Fab Lab</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                        {facilities.map((fac, idx) => (
                            <motion.div 
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: idx * 0.05 }}
                                className="bg-[#1a1a1a] rounded-[2rem] p-8 flex flex-col items-center justify-center text-center group hover:bg-[#d4af37] transition-colors duration-500 cursor-default"
                            >
                                <div className="text-white/30 group-hover:text-black mb-6 transition-colors duration-500 transform group-hover:scale-110">
                                    {fac.icon}
                                </div>
                                <h4 className="text-5xl font-black text-white group-hover:text-black mb-2 transition-colors duration-500">{fac.count}</h4>
                                <span className="text-xs font-bold uppercase tracking-widest text-white/50 group-hover:text-black/70 transition-colors duration-500">
                                    {fac.title}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Immersive Dark Parallax Feature */}
            <section className="py-40 relative flex items-center justify-center overflow-hidden border-y border-white/10">
                <div className="absolute inset-0 bg-[#0a0a0a]" />
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />
                
                <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
                    <img src="https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=800" className="w-32 h-32 md:w-48 md:h-48 rounded-full object-cover mx-auto mb-12 border-2 border-[#d4af37] p-2" alt="Parisian Design" />
                    <motion.h2 
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[1.1] mb-8"
                    >
                        "A hyper-creative conduit bridging European Heritage with future-focused Design Technology."
                    </motion.h2>
                    <button className="bg-white text-black px-10 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-[#d4af37] hover:text-black transition-colors flex items-center justify-center gap-3 mx-auto">
                        Explore CDP Academics <ArrowUpRight size={16} />
                    </button>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default ParisCDP;
