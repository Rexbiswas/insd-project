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
    const [current, setCurrent] = useState(0);
    const [direction, setDirection] = useState(1);

    const nextSlide = () => {
        setDirection(1);
        setCurrent((prev) => (prev + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setDirection(-1);
        setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    };

    // Auto-advance
    useEffect(() => {
        const timer = setInterval(nextSlide, 8000);
        return () => clearInterval(timer);
    }, []);

    const variants = {
        enter: (direction) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0,
            scale: 0.8,
            rotateY: direction > 0 ? 45 : -45
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
            scale: 1,
            rotateY: 0,
            transition: {
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1] // Custom ease for "Unexpected" smoothness
            }
        },
        exit: (direction) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0,
            scale: 0.8,
            rotateY: direction < 0 ? 45 : -45,
            transition: {
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1]
            }
        })
    };

    const currentData = testimonials[current];

    return (
        <div className="relative w-full min-h-screen bg-black flex items-center justify-center overflow-hidden py-24 select-none">

            {/* Dynamic Ambient Background */}
            <div className={`absolute inset-0 bg-linear-to-br ${currentData.color} opacity-[0.05] transition-colors duration-1000`}></div>
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>

            {/* Giant Background Visuals */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] font-black text-[20vw] leading-none text-white/2 uppercase text-center pointer-events-none whitespace-nowrap">
                Student Voices
            </div>

            <div className="relative z-10 w-full max-w-7xl px-4 md:px-12 flex flex-col md:flex-row items-center gap-12 md:gap-24 h-full">

                {/* Left Controls (Desktop) */}
                <button
                    onClick={prevSlide}
                    className="hidden md:flex w-16 h-16 rounded-full border border-white/10 items-center justify-center text-white/50 hover:text-white hover:bg-white/10 hover:scale-110 transition-all duration-300 backdrop-blur-md z-50 group"
                >
                    <ChevronLeft className="w-8 h-8 group-hover:-translate-x-1 transition-transform" />
                </button>

                {/* Main Card Area */}
                <div className="flex-1 w-full relative perspective-[2000px] min-h-[600px] flex items-center">
                    <AnimatePresence initial={false} custom={direction} mode="wait">
                        <motion.div
                            key={current}
                            custom={direction}
                            variants={variants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            drag="x"
                            dragConstraints={{ left: 0, right: 0 }}
                            dragElastic={1}
                            onDragEnd={(e, { offset }) => {
                                const swipe = offset.x; // swipe distance
                                if (swipe < -50) {
                                    nextSlide();
                                } else if (swipe > 50) {
                                    prevSlide();
                                }
                            }}
                            className="w-full bg-slate-900/40 backdrop-blur-2xl border border-white/10 rounded-4xl md:rounded-[3rem] p-6 md:p-12 xl:p-16 flex flex-col md:flex-row gap-8 md:gap-16 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] overflow-hidden relative group cursor-grab active:cursor-grabbing"
                        >
                            {/* Decorative Glow */}
                            <div className={`absolute -top-1/2 -right-1/2 w-full h-full bg-linear-to-br ${currentData.color} blur-[150px] opacity-20 rounded-full pointer-events-none`}></div>

                            {/* Image Section */}
                            <div className="relative w-full md:w-1/3 flex flex-col items-center justify-center shrink-0">
                                <div className="relative w-48 h-48 md:w-64 md:h-64">
                                    {/* Rotating Ring */}
                                    <div className={`absolute inset-0 rounded-full border-2 border-dashed border-white/20 animate-[spin_10s_linear_infinite]`}></div>
                                    <div className={`absolute -inset-4 rounded-full border border-white/10 opacity-50`}></div>

                                    {/* Image */}
                                    <div className="absolute inset-2 rounded-full overflow-hidden border-4 border-slate-900/50 shadow-2xl">
                                        <img
                                            src={currentData.image}
                                            alt={currentData.name}
                                            className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700 ease-out"
                                        />
                                    </div>

                                    {/* Floating Badge */}
                                    <div className={`absolute bottom-0 right-0 bg-linear-to-r ${currentData.color} text-white text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-full shadow-lg`}>
                                        Alumni
                                    </div>
                                </div>

                                <div className="mt-8 text-center md:text-left">
                                    <h4 className="text-white/40 font-mono text-xs uppercase tracking-[0.2em] mb-2">{currentData.course}</h4>
                                    <h3 className="text-white font-bold text-lg">{currentData.name}</h3>
                                    <p className={`text-transparent bg-clip-text bg-linear-to-r ${currentData.color} font-medium`}>{currentData.role}</p>
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="relative flex-1 flex flex-col justify-center">
                                <Quote className="w-16 h-16 text-white/10 absolute -top-4 -left-4 md:-top-8 md:-left-8" />

                                <p className="text-2xl md:text-4xl font-light leading-relaxed text-slate-200 relative z-10 italic">
                                    "{currentData.quote}"
                                </p>

                                <div className="mt-12 flex items-center gap-4">
                                    <div className="h-px w-12 bg-white/20 group-hover:w-24 group-hover:bg-primary transition-all duration-500"></div>
                                    <span className="text-xs font-bold uppercase tracking-widest text-white/40">Success Story</span>
                                </div>
                            </div>

                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Right Controls (Desktop) */}
                <button
                    onClick={nextSlide}
                    className="hidden md:flex w-16 h-16 rounded-full border border-white/10 items-center justify-center text-white/50 hover:text-white hover:bg-white/10 hover:scale-110 transition-all duration-300 backdrop-blur-md z-50 group"
                >
                    <ChevronRight className="w-8 h-8 group-hover:translate-x-1 transition-transform" />
                </button>

                {/* Mobile Controls */}
                <div className="flex md:hidden gap-8 absolute bottom-4 left-1/2 -translate-x-1/2 z-50">
                    <button onClick={prevSlide} className="p-4 bg-white/10 rounded-full hover:bg-white/20"><ChevronLeft /></button>
                    <button onClick={nextSlide} className="p-4 bg-white/10 rounded-full hover:bg-white/20"><ChevronRight /></button>
                </div>

            </div>
        </div>
    );
};

export default TestimonialSlider;
