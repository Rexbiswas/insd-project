import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { ArrowUpRight, Globe, MapPin, ExternalLink, Zap } from 'lucide-react';
import gsap from 'gsap';
import Footer from '../components/Footer';

// Partner Data
const partners = [
    { name: "University of Arts London", location: "UK", image: "https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg?auto=compress&cs=tinysrgb&w=800", color: "from-primary to-secondary" },
    { name: "Domus Academy", location: "Milan, Italy", image: "https://images.pexels.com/photos/2064826/pexels-photo-2064826.jpeg?auto=compress&cs=tinysrgb&w=800", color: "from-primary to-secondary" },
    { name: "NABA", location: "Milan, Italy", image: "https://images.pexels.com/photos/3747463/pexels-photo-3747463.jpeg?auto=compress&cs=tinysrgb&w=800", color: "from-primary to-secondary" },
    { name: "London College of Fashion", location: "London, UK", image: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=800", color: "from-primary to-secondary" },
    { name: "Parsons School of Design", location: "New York, USA", image: "https://images.pexels.com/photos/159751/book-book-pages-read-literature-159751.jpeg?auto=compress&cs=tinysrgb&w=800", color: "from-primary to-secondary" },
    { name: "Paris College of Art", location: "Paris, France", image: "https://images.pexels.com/photos/256417/pexels-photo-256417.jpeg?auto=compress&cs=tinysrgb&w=800", color: "from-primary to-secondary" },
    { name: "Lasalle College", location: "Montreal, Canada", image: "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=800", color: "from-primary to-secondary" }
];

const PartnerRow = ({ data, index, setHoveredPartner }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            onMouseEnter={() => setHoveredPartner(data)}
            onMouseLeave={() => setHoveredPartner(null)}
            className="group relative flex items-center justify-between py-12 border-b border-white/10 cursor-pointer overflow-hidden"
        >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 pointer-events-none" />

            <div className="flex items-baseline gap-6 relative z-10">
                <span className="text-sm font-mono text-slate-500 group-hover:text-primary transition-colors">0{index + 1}</span>
                <h3 className="text-4xl md:text-6xl font-black text-slate-300 uppercase tracking-tighter group-hover:text-white group-hover:translate-x-4 transition-all duration-300">
                    {data.name}
                </h3>
            </div>

            <div className="flex items-center gap-4 relative z-10">
                <span className="hidden md:inline-block text-sm font-mono text-slate-500 uppercase tracking-widest group-hover:text-white transition-colors">{data.location}</span>
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300 rotate-45 group-hover:rotate-0">
                    <ArrowUpRight strokeWidth={1.5} />
                </div>
            </div>
        </motion.div>
    );
};

const CustomCursor = ({ hoveredPartner }) => {
    const mousePosition = useMousePosition();
    const springConfig = { stiffness: 150, damping: 15, mass: 0.1 };
    const cursorX = useSpring(0, springConfig);
    const cursorY = useSpring(0, springConfig);

    useEffect(() => {
        cursorX.set(mousePosition.x);
        cursorY.set(mousePosition.y);
    }, [mousePosition, cursorX, cursorY]);

    if (!hoveredPartner) return null;

    return (
        <motion.div
            style={{ x: cursorX, y: cursorY, translateX: "-50%", translateY: "-50%" }}
            className="fixed top-0 left-0 z-50 pointer-events-none hidden md:block"
        >
            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                className={`w-[300px] h-[200px] rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20 relative bg-slate-900`}
            >
                <div className={`absolute inset-0 bg-gradient-to-br ${hoveredPartner.color} opacity-20`} />
                <img src={hoveredPartner.image} alt={hoveredPartner.name} className="w-full h-full object-cover" />
                <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent">
                    <div className="text-xs font-mono text-white/80 uppercase tracking-widest mb-1">Location</div>
                    <div className="text-white font-bold">{hoveredPartner.location}</div>
                </div>
            </motion.div>
        </motion.div>
    );
};

const useMousePosition = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    useEffect(() => {
        const updateMousePosition = e => setMousePosition({ x: e.clientX, y: e.clientY });
        window.addEventListener('mousemove', updateMousePosition);
        return () => window.removeEventListener('mousemove', updateMousePosition);
    }, []);
    return mousePosition;
};

const InternationalPartner = () => {
    const [hoveredPartner, setHoveredPartner] = useState(null);
    const containerRef = useRef(null);

    return (
        <div ref={containerRef} className="bg-slate-950 min-h-screen relative overflow-hidden text-white cursor-none-md">

            <CustomCursor hoveredPartner={hoveredPartner} />

            {/* Background Noise/Grid */}
            <div className="fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none z-0" />

            {/* Hero Section */}
            <section className="relative min-h-[80vh] flex flex-col justify-center px-6 md:px-20 pt-32 z-10">
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary font-mono text-xs uppercase tracking-widest mb-6">
                        <Globe size={14} /> Global Network
                    </div>
                    <h1 className="text-6xl md:text-[8vw] font-black leading-[0.9] tracking-tighter uppercase mb-8">
                        Beyond <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Borders</span>.<br />
                        Beyond <span className="outline-text text-transparent" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.3)" }}>Limits</span>.
                    </h1>
                    <p className="text-slate-400 text-lg md:text-xl max-w-2xl leading-relaxed">
                        Connecting creative minds across continents. Our exclusive partnerships with world-renowned design institutions open doors to global opportunities.
                    </p>
                </motion.div>

                {/* Floating Elements (Decorations) */}
                <div className="absolute top-1/2 right-10 -translate-y-1/2 w-[300px] h-[300px] hidden lg:block pointer-events-none">
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="w-full h-full border border-dashed border-white/10 rounded-full flex items-center justify-center"
                    >
                        <div className="w-[80%] h-[80%] border border-white/5 rounded-full" />
                    </motion.div>
                    <motion.div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-primary/20">
                        <MapPin size={100} />
                    </motion.div>
                </div>
            </section>

            {/* Partner List Section */}
            <section className="relative px-6 md:px-20 py-24 z-10 bg-slate-950/50 backdrop-blur-sm">
                <div className="mb-16 flex items-end justify-between border-b border-white/10 pb-6">
                    <h2 className="text-2xl font-mono uppercase tracking-widest text-slate-500">Our Strategic Alliance</h2>
                    <div className="hidden md:flex items-center gap-2 text-xs font-mono text-pink-500">
                        <Zap size={14} /> Hover to Explore
                    </div>
                </div>

                <div className="flex flex-col">
                    {partners.map((partner, index) => (
                        <PartnerRow
                            key={index}
                            data={partner}
                            index={index}
                            setHoveredPartner={setHoveredPartner}
                        />
                    ))}
                </div>
            </section>

            {/* Interactive World Map / Connection CTA */}
            <section className="relative py-32 flex flex-col items-center justify-center text-center overflow-hidden z-10">
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-slate-950 to-slate-950" />

                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="relative z-10 max-w-4xl px-6"
                >
                    <h2 className="text-4xl md:text-7xl font-black uppercase mb-8">Ready to Go Global?</h2>
                    <p className="text-slate-400 mb-12 text-lg max-w-xl mx-auto">
                        Unlock international student exchange programs, dual degrees, and global internships.
                    </p>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                        <button className="px-8 py-4 bg-white text-black font-bold uppercase tracking-widest rounded-full hover:bg-primary hover:text-white transition-all duration-300">
                            Apply for Exchange
                        </button>
                        <button className="px-8 py-4 border border-white/20 text-white font-bold uppercase tracking-widest rounded-full hover:bg-white/10 transition-all duration-300 flex items-center gap-2">
                            View Programs <ExternalLink size={18} />
                        </button>
                    </div>
                </motion.div>
            </section>

            <Footer />
        </div>
    );
};

export default InternationalPartner;
