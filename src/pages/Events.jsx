import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    Calendar, MapPin, ArrowUpRight, Globe, Sparkles, 
    Zap, Camera, Award, ChevronRight, PlayCircle,
    ChevronLeft
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Footer from '../components/Footer';

const Events = () => {
    React.useEffect(() => {
        console.log("Events page mounted (Slider with Pagination)");
    }, []);

    const [currentIndex, setCurrentIndex] = useState(0);

    const insdEvents = [
        {
            title: "Annual Talent Showcase 2025",
            icon: Sparkles,
            color: "from-primary/10",
            img: "https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg?auto=compress&cs=tinysrgb&w=800",
            desc: "The pinnacle of student creativity. Introducing the next cohort of design disruptors."
        },
        {
            title: "Annual Talent Showcase 2024",
            icon: Award,
            color: "from-blue-500/10",
            img: "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=800",
            desc: "A celebration of sustainable couture and revolutionary industrial concepts."
        },
        {
            title: "Annual Talent Showcase 2023",
            icon: Globe,
            color: "from-secondary/10",
            img: "https://images.pexels.com/photos/2030826/pexels-photo-2030826.jpeg?auto=compress&cs=tinysrgb&w=800",
            desc: "Where tradition met technology. A retrospective of INSD's core values."
        },
        {
            title: "Delhi Times Fashion Week",
            icon: Zap,
            color: "from-primary/10",
            img: "https://images.pexels.com/photos/2235071/pexels-photo-2235071.jpeg?auto=compress&cs=tinysrgb&w=800",
            desc: "INSD taking the national runway by storm at Delhi's premier fashion showcase."
        },
        {
            title: "Pune Times Fashion Week",
            icon: Camera,
            color: "from-blue-500/10",
            img: "https://images.pexels.com/photos/276551/pexels-photo-276551.jpeg?auto=compress&cs=tinysrgb&w=800",
            desc: "Presenting experimental textiles and lifestyle design in the Oxford of the East."
        },
        {
            title: "Ahmedabad Times Fashion Week",
            icon: Sparkles,
            color: "from-secondary/10",
            img: "https://images.pexels.com/photos/1579739/pexels-photo-1579739.jpeg?auto=compress&cs=tinysrgb&w=800",
            desc: "A confluence of traditional craftsmanship and modern silhouette engineering."
        }
    ];

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % insdEvents.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + insdEvents.length) % insdEvents.length);
    };

    return (
        <div className="bg-white selection:bg-primary selection:text-white min-h-screen">
            <SEO 
                title="INSD Events - Annual Showcases & Fashion Weeks"
                description="Explore INSD's Annual Talent Showcases and our impact at Delhi, Pune, and Ahmedabad Times Fashion Weeks."
            />

            {/* MAIN SECTION - WHITE THEME WITH SLIDER */}
            <section className="relative pt-32 pb-48 px-6 md:px-12 lg:px-24 flex flex-col items-center overflow-hidden">
                
                {/* 1. BACKGROUND ATMOSPHERE */}
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_20%,#db343608,transparent_60%)]" />
                <div className="absolute top-[10%] right-[5%] w-[600px] h-[600px] bg-primary/3 blur-[140px] rounded-full -z-10 animate-pulse" />
                <div className="absolute bottom-[10%] left-[5%] w-[500px] h-[500px] bg-secondary/3 blur-[120px] rounded-full -z-10" />

                <div className="max-w-7xl w-full">
                    
                    {/* 2. HEADER */}
                    <div className="text-center space-y-8 mb-24">
                        <motion.h1 
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-6xl md:text-[8rem] font-black uppercase tracking-tighter leading-[0.8] text-slate-900"
                        >
                            INSD <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">EVENTS</span>
                        </motion.h1>
                    </div>

                    {/* 3. SLIDER COMPONENT */}
                    <div className="relative group">
                        
                        {/* THE SLIDE CONTAINER */}
                        <div className="relative h-[600px] md:h-[700px] w-full rounded-[3.5rem] overflow-hidden shadow-2xl shadow-slate-200/50 bg-slate-50 border border-slate-100">
                            
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentIndex}
                                    initial={{ opacity: 0, x: 100 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -100 }}
                                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                    className="absolute inset-0 flex flex-col lg:flex-row"
                                >
                                    {/* Left Side: Visual */}
                                    <div className="w-full lg:w-1/2 h-[300px] lg:h-full relative overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-white/20 to-transparent z-10" />
                                        <motion.img 
                                            initial={{ scale: 1.1 }}
                                            animate={{ scale: 1 }}
                                            transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
                                            src={insdEvents[currentIndex].img}
                                            alt={insdEvents[currentIndex].title}
                                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                                        />
                                        
                                        {/* Corner Icon */}
                                        <div className="absolute top-8 left-8 p-5 bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl z-20 text-primary border border-white/50">
                                            {React.createElement(insdEvents[currentIndex].icon, { size: 28 })}
                                        </div>
                                    </div>

                                    {/* Right Side: Content */}
                                    <div className="w-full lg:w-1/2 h-full p-8 md:p-16 lg:p-24 flex flex-col justify-center bg-white relative">
                                        
                                        <div className="space-y-8">
                                            <div className="space-y-4">
                                                <h2 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter text-slate-900 leading-none">
                                                    {insdEvents[currentIndex].title}
                                                </h2>
                                            </div>

                                            <p className="text-slate-500 text-lg md:text-xl font-medium leading-relaxed max-w-md">
                                                {insdEvents[currentIndex].desc}
                                            </p>

                                            <Link 
                                                to="/apply" 
                                                className="group inline-flex items-center gap-4 px-10 py-5 bg-slate-900 text-white rounded-full font-black uppercase text-xs tracking-widest hover:bg-primary transition-all shadow-xl active:scale-95"
                                            >
                                                Register Now <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                            </Link>
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>

                            {/* NAVIGATION CONTROLS OVERLAY */}
                            <div className="absolute bottom-10 left-10 right-10 flex items-center justify-between z-30 pointer-events-none">
                                
                                {/* Pagination Dots */}
                                <div className="flex gap-3 pointer-events-auto bg-slate-100/50 backdrop-blur-md p-3 rounded-full border border-white/50">
                                    {insdEvents.map((_, i) => (
                                        <button
                                            key={i}
                                            onClick={() => setCurrentIndex(i)}
                                            className={`h-2.5 transition-all duration-500 rounded-full ${currentIndex === i ? 'w-10 bg-primary' : 'w-2.5 bg-slate-300 hover:bg-slate-400'}`}
                                        />
                                    ))}
                                </div>

                                {/* Prev/Next Custom Buttons */}
                                <div className="flex gap-4 pointer-events-auto">
                                    <button 
                                        onClick={handlePrev}
                                        className="w-25 h-14 rounded-full border border-slate-200 bg-white/80 backdrop-blur-md flex items-center justify-center text-slate-400 hover:text-slate-900 hover:border-primary transition-all shadow-xl active:scale-90"
                                    >
                                        <ChevronLeft size={24} />
                                        Previous
                                    </button>
                                    <button 
                                        onClick={handleNext}
                                        className="w-24 h-14 rounded-full border border-slate-200 bg-white/80 backdrop-blur-md flex items-center justify-center text-slate-400 hover:text-slate-900 hover:border-primary transition-all shadow-xl active:scale-90"
                                    >
                                        Next
                                        <ChevronRight size={24} />
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* 4. BOTTOM INFO STRIP */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mt-32 p-12 rounded-[2.5rem] bg-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-10"
                    >
                        <div className="space-y-4 text-center md:text-left">
                            <h3 className="text-3xl font-black uppercase tracking-tighter">Become the Next Highlight</h3>
                            <p className="text-slate-400 max-w-sm font-medium">Join INSD and see your designs on the world's most prestigious runways.</p>
                        </div>
                        <div className="flex gap-6">
                            <Link to="/contact-us" className="px-10 py-4 border border-white/20 rounded-full font-black uppercase text-[10px] tracking-widest hover:bg-white hover:text-black transition-all">Get Event Info</Link>
                            <Link to="/apply" className="px-10 py-4 bg-primary rounded-full font-black uppercase text-[10px] tracking-widest hover:bg-white hover:text-black transition-all shadow-lg shadow-primary/20">Apply for 2026</Link>
                        </div>
                    </motion.div>

                </div>
            </section>
            
            <Footer />
        </div>
    );
};

export default Events;
