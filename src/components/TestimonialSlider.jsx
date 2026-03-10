import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
    {
        id: 1,
        name: "Vidi Karla",
        role: "Event Specialist",
        course: "MiLuxBM, Feb 2021",
        image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=800", // Placeholder
        quote: "I'm glad to have been introduced to the MiLuxBM programme at the International School of Design. I am looking for a position in the Luxury space after three years of experience in events and digital marketing. This program has provided me with the opportunity to interact with numerous industry experts.",
        color: "from-primary to-secondary"
    },
    {
        id: 2,
        name: "Aravind Kumar",
        role: "Fashion Designer",
        course: "B.Des Fashion, 2022",
        image: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=800",
        quote: "The practical exposure at INSD is unmatched. From fashion weeks to live projects, every day was a new learning curve. The faculty doesn't just teach; they mentor you to become industry-ready professionals.",
        color: "from-primary to-secondary"
    },
    {
        id: 3,
        name: "Sarah Jenkins",
        role: "Interior Architect",
        course: "M.Des Interior, 2020",
        image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=800",
        quote: "Designing spaces requires a different perspective, and INSD helped me find mine. The luxury labs and material libraries gave me the freedom to experiment and create designs that stand out.",
        color: "from-primary to-secondary"
    }
];

const TestimonialSlider = () => {
    const scrollRef = React.useRef(null);
    const [scrolled, setScrolled] = useState(0);

    const scroll = (direction) => {
        if (scrollRef.current) {
            const container = scrollRef.current;
            const scrollAmount = container.clientWidth * 0.8;
            container.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    const handleScroll = () => {
        if (scrollRef.current) {
            const container = scrollRef.current;
            const progress = container.scrollLeft / (container.scrollWidth - container.clientWidth);
            setScrolled(progress);
        }
    };

    return (
        <section className="relative w-full bg-[#f3f3f3] py-32 overflow-hidden border-y border-slate-300">
            {/* Ambient Background Noise */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30 mix-blend-multiply pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20 md:mb-32">
                    <div className="max-w-2xl">
                        <motion.span 
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="text-primary font-black uppercase tracking-[0.4em] text-xs mb-6 inline-block"
                        >
                            Success Stories
                        </motion.span>
                        <motion.h2 
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-5xl md:text-8xl font-black text-slate-900 leading-[0.8] tracking-tighter uppercase"
                        >
                            Student <br />
                            <span className="italic font-serif font-light text-slate-300">Voices.</span>
                        </motion.h2>
                    </div>

                    {/* Navigation Buttons (Desktop) */}
                    <div className="hidden md:flex gap-4">
                        <button
                            onClick={() => scroll('left')}
                            className="w-20 h-20 rounded-full border border-slate-300 flex items-center justify-center text-slate-400 hover:text-slate-900 hover:bg-white transition-all duration-300 group bg-white/50"
                        >
                            <ChevronLeft className="w-8 h-8 group-hover:-translate-x-1 transition-transform" />
                        </button>
                        <button
                            onClick={() => scroll('right')}
                            className="w-20 h-20 rounded-full border border-slate-300 flex items-center justify-center text-slate-400 hover:text-slate-900 hover:bg-white transition-all duration-300 group bg-white/50"
                        >
                            <ChevronRight className="w-8 h-8 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>

                {/* Horizontal Scroll Track */}
                <div 
                    ref={scrollRef}
                    onScroll={handleScroll}
                    className="flex gap-8 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-24 -mx-12 px-12"
                >
                    {testimonials.map((item, idx) => (
                        <div 
                            key={item.id}
                            className="min-w-[85vw] md:min-w-[45vw] lg:min-w-[32vw] snap-center"
                        >
                            <motion.div 
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="h-full bg-white/70 backdrop-blur-2xl border border-slate-200 rounded-[3rem] p-10 flex flex-col justify-between shadow-2xl relative group overflow-hidden"
                            >
                                {/* Decorative Gradient Overlay */}
                                <div className={`absolute -top-1/2 -right-1/2 w-full h-full bg-linear-to-br ${item.color} blur-[120px] opacity-[0.05] rounded-full pointer-events-none group-hover:opacity-[0.1] transition-opacity duration-700`}></div>

                                <Quote className="w-12 h-12 text-slate-200 mb-8 shrink-0" />

                                <div className="flex-1">
                                    <p className="text-xl md:text-2xl font-light leading-relaxed text-slate-700 italic mb-12">
                                        "{item.quote}"
                                    </p>
                                </div>

                                <div className="flex items-center gap-6 border-t border-slate-100 pt-10 mt-auto">
                                    <div className="relative w-20 h-20 shrink-0">
                                        <div className="absolute inset-0 rounded-full border-2 border-dashed border-slate-200 group-hover:animate-[spin_8s_linear_infinite]"></div>
                                        <div className="absolute inset-1.5 rounded-full overflow-hidden border-2 border-white shadow-lg">
                                            <img 
                                                src={item.image} 
                                                alt={item.name} 
                                                className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="text-slate-900 font-bold text-lg leading-tight mb-1">{item.name}</h4>
                                        <p className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-2">{item.course}</p>
                                        <div className={`inline-block px-3 py-1 rounded-full bg-linear-to-r ${item.color} text-white text-[9px] font-black uppercase tracking-widest`}>
                                            Alumni
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>

                {/* Progress Bar & Mobile Indicators */}
                <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="w-full md:w-1/3 h-1 bg-slate-200 rounded-full overflow-hidden relative">
                        <motion.div 
                            className="absolute left-0 top-0 h-full bg-primary"
                            style={{ width: `${scrolled * 100}%` }}
                        />
                    </div>
                    
                    <div className="flex gap-3">
                        {testimonials.map((_, i) => (
                            <div 
                                key={i}
                                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${Math.round(scrolled * (testimonials.length - 1)) === i ? 'w-8 bg-primary' : 'bg-slate-300'}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};


export default TestimonialSlider;
