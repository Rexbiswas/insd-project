import React from 'react';
import { motion } from 'framer-motion';
import { PlayCircle, ArrowRight, Star, Globe, ShieldCheck } from 'lucide-react';
import SEO from '../components/SEO';
import Footer from '../components/Footer';

const InsdLuxe = () => {
    return (
        <div className="bg-white min-h-screen font-sans selection:bg-secondary selection:text-white">
            <SEO 
                title="INSD Luxe Mumbai | International School of Design"
                description="Experience a first-of-its-kind luxury education in India & Paris. INSD Luxe Mumbai offers elite programs in fashion and design management."
            />

            {/* --- HERO SECTION --- */}
            <section className="relative pt-32 pb-64 px-6 md:px-12 lg:px-24 overflow-hidden bg-white">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-20">
                    
                    {/* Left Content */}
                    <div className="w-full lg:w-1/2 space-y-8 relative z-10">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="space-y-4 font-black"
                        >
                            <span className="text-sm tracking-[0.4em] text-slate-400 uppercase">Premium Experience</span>
                            <h1 className="text-5xl md:text-7xl lg:text-8xl text-gold uppercase tracking-tighter leading-[0.9]">
                                INSD LUXE <br />
                                <span className="text-black">MUMBAI</span>
                            </h1>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-lg md:text-xl text-slate-600 font-bold max-w-lg leading-relaxed uppercase tracking-tight"
                        >
                            Introducing a first-of-its-kind experience in India & Paris. <br />
                            A unique destination for luxury and design enthusiasts.
                        </motion.p>

                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="flex flex-wrap items-center gap-8"
                        >
                            <button className="px-10 py-4 bg-gold text-white rounded-full font-black uppercase text-xs tracking-widest hover:bg-secondary transition-all transform hover:scale-105 shadow-xl shadow-gold/20">
                                Apply Now
                            </button>
                            <button className="flex items-center gap-3 text-slate-900 group">
                                <PlayCircle className="w-8 h-8 text-secondary group-hover:scale-110 transition-transform" />
                                <span className="font-black uppercase text-xs tracking-widest">View all the Programs</span>
                            </button>
                        </motion.div>
                    </div>

                    {/* Right Logos */}
                    <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-end justify-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1 }}
                            className="space-y-12 text-center lg:text-right"
                        >
                            <p className="text-xl font-black text-slate-900 uppercase tracking-tighter">
                                In Association with
                            </p>
                            
                            <div className="flex flex-col md:flex-row items-center gap-12 lg:justify-end">
                                <div className="text-center group">
                                    <div className="text-6xl md:text-8xl font-black text-black leading-none tracking-tighter">
                                        ESG <br /> LUXE
                                    </div>
                                    <div className="h-1.5 w-full bg-gold mt-2 group-hover:bg-secondary transition-colors" />
                                </div>
                                
                                <div className="text-center group">
                                    <div className="text-6xl md:text-8xl font-black text-black leading-none tracking-tighter">
                                        ESG <br /> <span className="text-secondary">SPORT</span>
                                    </div>
                                    <div className="h-1.5 w-full bg-secondary mt-2 group-hover:bg-gold transition-colors" />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Diagonal Edge Component */}
                <div 
                    className="absolute bottom-0 left-0 w-full h-32 md:h-48 bg-[#f4f4f7]"
                    style={{ clipPath: 'polygon(0 80%, 100% 0, 100% 100%, 0% 100%)' }}
                />
            </section>

            {/* --- CORE FEATURES --- */}
            <section className="bg-[#f4f4f7] py-24 px-6 md:px-12 lg:px-24">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
                    {[
                        { 
                            title: "Paris Connection", 
                            desc: "Immersive workshops and industry exposure in the fashion capital of the world.",
                            icon: Globe
                        },
                        { 
                            title: "Luxury Pedagogy", 
                            desc: "Curriculum designed by global legacy experts from the luxury goods sector.",
                            icon: Star
                        },
                        { 
                            title: "Elite Network", 
                            desc: "Exclusive access to premium brands, luxury houses, and high-end design firms.",
                            icon: ShieldCheck
                        }
                    ].map((feature, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ y: -10 }}
                            className="bg-white p-12 rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all duration-500 group"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-secondary/5 flex items-center justify-center text-gold mb-8 group-hover:bg-secondary group-hover:text-white transition-all">
                                <feature.icon size={32} />
                            </div>
                            <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tighter mb-4">{feature.title}</h3>
                            <p className="text-slate-500 font-bold text-sm leading-relaxed">{feature.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* --- PHILOSOPHY SECTION --- */}
            <section className="py-24 px-6 md:px-12 lg:px-24 bg-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[50%] h-full bg-secondary/5 -skew-x-12 translate-x-1/2" />
                
                <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <span className="text-gold font-black uppercase tracking-[0.3em] text-[10px]">Excellence Defined</span>
                            <h2 className="text-4xl md:text-6xl font-black text-slate-900 uppercase tracking-tighter leading-none">
                                Where Legacy <br /> <span className="text-secondary">Meets Innovation</span>
                            </h2>
                        </div>
                        <p className="text-slate-600 font-bold leading-relaxed text-lg italic">
                            "Luxury is not about the brand, but about the story, the craftsmanship, and the uncompromising pursuit of perfection."
                        </p>
                        <div className="space-y-4">
                            <p className="text-slate-500 font-medium">
                                INSD Luxe is a curated platform for the next generation of creative leaders. We bridge the gap between Indian craftsmanship and Parisian luxury standards through our exclusive partnership with ESG Luxe & ESG Sport.
                            </p>
                        </div>
                        <button className="flex items-center gap-4 text-secondary font-black uppercase text-xs tracking-widest hover:translate-x-3 transition-transform">
                            Discover the Heritage <ArrowRight size={16} />
                        </button>
                    </div>

                    <div className="relative">
                        <div className="relative rounded-[3rem] overflow-hidden shadow-2xl">
                            <img 
                                src="/luxury_brand_management_hero_msc_1773917076939.png" 
                                alt="Luxury Education" 
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="absolute -bottom-10 -left-10 bg-gold text-white p-12 rounded-4xl shadow-2xl hidden md:block">
                            <div className="text-4xl font-black">2026</div>
                            <div className="text-[10px] uppercase font-black tracking-widest">Global Admissions</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- FINAL CTA --- */}
            <section className="py-24 px-6 md:px-12 lg:px-24 bg-secondary">
                <div className="max-w-5xl mx-auto text-center space-y-12">
                    <h2 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter">
                        Join the <span className="text-gold">Elite</span>
                    </h2>
                    <p className="text-white/60 font-bold text-lg md:text-xl max-w-2xl mx-auto uppercase tracking-tight">
                        Experience the convergence of business and design. Apply for the 2026 international exchange program today.
                    </p>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                        <button className="px-12 py-5 bg-gold text-white rounded-full font-black uppercase text-xs tracking-widest shadow-2xl hover:bg-white hover:text-secondary transition-all transform hover:scale-105">
                            Start Application
                        </button>
                        <button className="px-12 py-5 border border-white/20 text-white rounded-full font-black uppercase text-xs tracking-widest hover:bg-white hover:text-secondary transition-all">
                            Request Brochure
                        </button>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default InsdLuxe;
