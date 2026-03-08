import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin, ArrowUpRight, Sparkles, MoveRight, Clock } from 'lucide-react';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

// Sample Event Data
const events = [
    {
        id: "ev-01",
        title: "International Design Expo 2026",
        category: "Exhibition",
        date: "15 Oct 2026",
        time: "10:00 AM - 6:00 PM",
        location: "INSD Delhi South Campus",
        image: "https://images.unsplash.com/photo-1558005530-fa26920213bd?q=80&w=2669&auto=format&fit=crop",
        desc: "A breathtaking showcase of futuristic designs crafted by INSD alumni and top-tier industry professionals.",
        tags: ["Design", "Global", "Expo"]
    },
    {
        id: "ev-02",
        title: "Paris Fashion Week Preview",
        category: "Runway",
        date: "22 Nov 2026",
        time: "7:00 PM - 10:00 PM",
        location: "Le Grand Ciel, Paris",
        image: "https://images.unsplash.com/photo-1545291730-faff8ca1d4b0?q=80&w=2574&auto=format&fit=crop",
        desc: "An exclusive look at the avant-garde collections heading to the official Paris Fashion Week.",
        tags: ["Fashion", "Runway", "Paris"]
    },
    {
        id: "ev-03",
        title: "Future of Spaces: Architecture Summit",
        category: "Masterclass",
        date: "05 Dec 2026",
        time: "11:00 AM - 3:00 PM",
        location: "Virtual & INSD Hub",
        image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2647&auto=format&fit=crop",
        desc: "Masterclass on sustainable interior architecture and smart homes of the next decade.",
        tags: ["Interior", "Architecture", "Summit"]
    },
    {
        id: "ev-04",
        title: "Digital Art & AI Workshop",
        category: "Workshop",
        date: "10 Jan 2027",
        time: "2:00 PM - 5:00 PM",
        location: "INSD Creative Labs",
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop",
        desc: "Exploring the boundary between human creativity and artificial intelligence in digital art.",
        tags: ["Digital", "AI", "Art"]
    }
];

const NoiseOverlay = () => (
    <div
        className="pointer-events-none absolute inset-0 z-50 h-full w-full opacity-[0.03] mix-blend-difference"
        style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
    />
);

const Events = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const [activeEvent, setActiveEvent] = useState(null);



    return (
        <div ref={containerRef} className="relative min-h-screen bg-[#f3f3f3] text-[#333333] selection:bg-[#333333] selection:text-[#f3f3f3] overflow-hidden">
            <SEO 
                title="Design Events, Expos & Fashion Shows - INSD Events"
                description="Experience the culture of design at INSD's exclusive events. From international design expos and Paris fashion week previews to digital art workshops and architecture summits."
                keywords="design events India, fashion shows Delhi, design expo 2026, INSD events, Paris fashion week preview, design masterclass"
            />
            <NoiseOverlay />



            {/* Hero Section (80% Light) */}
            <section className="relative h-[80vh] flex flex-col items-center justify-center px-6 md:px-20 pt-20">
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                    <motion.div 
                        initial={{ opacity: 0, scale: 1.2 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 2, ease: "easeOut" }}
                        className="absolute inset-0 bg-linear-to-b from-[#f3f3f3]/90 via-[#f3f3f3]/40 to-[#f3f3f3] z-10"
                    />
                    <img src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2670&auto=format&fit=crop" alt="Events Background" className="w-full h-full object-cover object-center opacity-20 grayscale mix-blend-multiply filter blur-sm" />
                </div>
                
                <div className="relative z-20 text-center max-w-5xl mx-auto">
                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                        className="text-6xl md:text-8xl lg:text-[10rem] font-black uppercase tracking-tighter leading-[0.85]"
                    >
                        The <span className="italic font-serif font-light mr-4 text-[#333333]/70">Culture</span> <br/>
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-[#333333] to-[#777777]">Canvas</span>
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#333333]/20 bg-[#333333]/5 backdrop-blur-md mt-8"
                    >
                        <Sparkles className="w-4 h-4 text-[#333333]" />
                        <span className="text-xs font-bold uppercase tracking-widest">INSD Exclusive Experiences</span>
                    </motion.div>
                    
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.6 }}
                        className="mt-8 text-lg md:text-xl text-[#333333]/60 max-w-2xl mx-auto font-medium"
                    >
                        Immerse yourself in workshops, masterclasses, and runway events designed to push the boundaries of global design.
                    </motion.p>
                </div>
                
                {/* Scroll Indicator */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 1 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                >
                    <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-[#333333]/40">Discover</span>
                    <motion.div 
                        animate={{ y: [0, 10, 0] }}
                        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                        className="w-[1px] h-12 bg-linear-to-b from-[#333333]/40 to-transparent"
                    />
                </motion.div>
            </section>

            {/* Events Directory (20% Dark / Contrast) */}
            <section className="relative z-10 bg-[#333333] text-[#f3f3f3] py-24 md:py-32 rounded-t-[3rem] md:rounded-t-[5rem] mt-[-5vh]">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                        <div>
                            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">Upcoming <br/><span className="italic font-serif font-light text-[#f3f3f3]/60">Experiences</span></h2>
                            <p className="text-[#f3f3f3]/50 max-w-md">Reserve your spot at the most anticipated design events of the year.</p>
                        </div>
                        <div className="flex gap-4">
                            <button className="px-6 py-3 rounded-full border border-[#f3f3f3]/20 hover:border-[#f3f3f3] hover:bg-[#f3f3f3] hover:text-[#333333] transition-all text-sm font-bold uppercase tracking-wider">All Events</button>
                            <button className="px-6 py-3 rounded-full border border-[#f3f3f3]/10 text-[#f3f3f3]/40 hover:text-[#f3f3f3] hover:border-[#f3f3f3]/40 transition-all text-sm font-bold uppercase tracking-wider">Masterclasses</button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                        {events.map((event, index) => (
                            <motion.div
                                key={event.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                                className="group cursor-pointer relative"
                            >
                                {/* Image Box */}
                                <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden mb-6 bg-[#222222]">
                                    <motion.img 
                                        src={event.image} 
                                        alt={event.title}
                                        className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-out group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-linear-to-t from-[#111111] via-transparent to-transparent opacity-80" />
                                    
                                    <div className="absolute top-6 left-6 flex gap-2">
                                        <span className="px-4 py-2 bg-[#f3f3f3] text-[#333333] rounded-full text-[10px] font-bold uppercase tracking-widest shadow-lg">
                                            {event.category}
                                        </span>
                                    </div>

                                    <div className="absolute bottom-6 right-6 w-12 h-12 rounded-full bg-[#f3f3f3]/10 backdrop-blur-md flex items-center justify-center border border-[#f3f3f3]/20 group-hover:bg-[#f3f3f3] group-hover:text-[#333333] transition-colors duration-500">
                                        <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform duration-500" />
                                    </div>
                                </div>

                                {/* Content Details */}
                                <div>
                                    <div className="flex flex-wrap items-center gap-4 text-xs font-bold tracking-widest uppercase text-[#f3f3f3]/50 mb-3">
                                        <p className="flex items-center gap-1.5"><Calendar size={14}/> {event.date}</p>
                                        <span className="w-1 h-1 rounded-full bg-[#f3f3f3]/30" />
                                        <p className="flex items-center gap-1.5"><Clock size={14}/> {event.time}</p>
                                    </div>
                                    <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-white group-hover:to-slate-400 transition-all">
                                        {event.title}
                                    </h3>
                                    <p className="flex items-center gap-2 text-sm text-[#f3f3f3]/50 font-medium mb-4">
                                        <MapPin size={16} className="text-[#f3f3f3]/30" /> {event.location}
                                    </p>
                                    
                                    <div className="flex flex-wrap gap-2">
                                        {event.tags.map(tag => (
                                            <span key={tag} className="text-[10px] uppercase tracking-wider font-bold text-[#f3f3f3]/40 border border-[#f3f3f3]/10 rounded-lg px-2.5 py-1">
                                                #{tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* View All */}
                    <div className="mt-20 flex justify-center">
                        <button className="group relative px-8 py-4 bg-[#f3f3f3] text-[#333333] rounded-full font-bold uppercase tracking-widest overflow-hidden hover:pr-14 transition-all duration-300">
                            <span className="relative z-10 transition-transform">Explore Archive</span>
                            <MoveRight className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 z-10" size={18} />
                            <div className="absolute inset-0 bg-[#ffffff] scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-500 ease-out" />
                        </button>
                    </div>
                </div>
            </section>

            {/* Newsletter / CTA Section (Back to 80% Light) */}
            <section className="bg-[#f3f3f3] py-24 md:py-32 relative z-0">
                <div className="container mx-auto px-6 text-center">
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="max-w-3xl mx-auto bg-white border border-slate-200 rounded-[3rem] p-10 md:p-20 shadow-xl"
                    >
                        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-4 text-[#333333]">Stay <span className="italic font-serif font-light text-slate-400">Notified</span></h2>
                        <p className="text-slate-500 font-medium mb-10">Get VIP priority access to runway shows, expos, and global masterclasses directly to your inbox before they sell out.</p>
                        
                        <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                            <input 
                                type="email" 
                                placeholder="Enter your email address" 
                                className="flex-1 bg-[#f3f3f3] border border-slate-200 rounded-full px-6 py-4 outline-none focus:border-[#333333] transition-colors"
                            />
                            <button className="px-8 py-4 bg-[#333333] text-[#f3f3f3] rounded-full font-bold uppercase tracking-wider hover:bg-black transition-colors">
                                Subscribe
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Events;
