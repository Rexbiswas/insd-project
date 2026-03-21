import React from 'react';
import { motion } from 'framer-motion';
import { 
    Globe, Landmark, GraduationCap, ShieldCheck, 
    Zap, Award, ArrowUpRight, CheckCircle2,
    BookOpen, Library, Building2, MapPin
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Footer from '../components/Footer';

const AcademicAlliances = () => {
    const alliances = [
        {
            partner: "LCCA London",
            location: "United Kingdom",
            desc: "A flagship partnership providing students with pathway programs and global exchange opportunities in the heart of London's creative hub.",
            highlights: ["Dual Certification", "London Residency", "Industry Workshops"],
            logoClass: "bg-blue-50 text-blue-600",
            icon: Building2
        },
        {
            partner: "Parisian Design Schools",
            location: "Paris, France",
            desc: "Strategic alliances with elite French institutions to bring the 'Parisian Protocol' of luxury and couture directly to our Indian campuses.",
            highlights: ["Luxury Specialization", "Atelier Sessions", "Cultural Exchange"],
            logoClass: "bg-primary/5 text-primary",
            icon: Landmark
        },
        {
            partner: "UGC Recognized Universities",
            location: "Pan-India",
            desc: "Academic validation ensuring all diploma and degree programs meet the highest national standards for higher education.",
            highlights: ["National Accreditation", "Academic Rigor", "Degree Pathway"],
            logoClass: "bg-amber-50 text-amber-600",
            icon: ShieldCheck
        },
        {
            partner: "Global Research Labs",
            location: "International",
            desc: "Collaborations focusing on sustainable textiles and AI-driven fashion technology, keeping INSD at the edge of design research.",
            highlights: ["Tech-Design Fusion", "Sustainable Innovation", "Shared R&D"],
            logoClass: "bg-emerald-50 text-emerald-600",
            icon: Zap
        }
    ];

    return (
        <div className="bg-white min-h-screen font-sans">
            <SEO 
                title="Academic Alliances | Global Design Partnerships"
                description="Explore INSD's academic alliances with top global institutions in London, Paris, and beyond. Empowering students with international exposure."
            />

            {/* --- HERO SECTION --- */}
            <section className="pt-32 pb-24 px-6 md:px-12 lg:px-24 bg-slate-50 border-b border-slate-100">
                <div className="max-w-7xl mx-auto flex flex-col items-center text-center space-y-8">
                    <div className="space-y-4 pt-12">
                        <motion.h1 
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-6xl md:text-8xl font-black text-slate-900 tracking-tighter leading-[0.9]"
                        >
                            ACADEMIC <br />
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">ALLIANCES.</span>
                        </motion.h1>
                    </div>
                    
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg md:text-xl text-slate-500 font-medium leading-relaxed max-w-2xl"
                    >
                        We bridge the gap between Indian talent and global excellence through strategic partnerships with the world's most prestigious design institutions.
                    </motion.p>
                </div>
            </section>

            {/* --- PARTNERS GRID --- */}
            <section className="py-32 px-6 md:px-12 lg:px-24">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
                        {alliances.map((item, idx) => (
                            <motion.div 
                                key={idx}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="group flex flex-col bg-white border border-slate-100 rounded-[3rem] p-10 md:p-12 hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500 overflow-hidden relative"
                            >
                                {/* Decorative Glow */}
                                <div className="absolute -top-24 -right-24 w-64 h-64 bg-slate-50 rounded-full group-hover:scale-125 transition-transform duration-700 pointer-events-none" />

                                <div className="relative z-10 flex flex-col h-full justify-between gap-12">
                                    <div className="space-y-8">
                                        <div className={`w-16 h-16 rounded-2xl ${item.logoClass} flex items-center justify-center shadow-sm`}>
                                            <item.icon size={30} />
                                        </div>

                                        <div className="space-y-3">
                                            <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400">
                                                <MapPin size={12} /> {item.location}
                                            </div>
                                            <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-slate-900 leading-tight">
                                                {item.partner}
                                            </h3>
                                        </div>

                                        <p className="text-slate-500 text-base md:text-lg leading-relaxed font-medium">
                                            {item.desc}
                                        </p>
                                    </div>

                                    <div className="space-y-6">
                                        <div className="flex flex-wrap gap-3">
                                            {item.highlights.map((h, i) => (
                                                <div key={i} className="flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-full border border-slate-100">
                                                    <CheckCircle2 className="text-emerald-500" size={14} />
                                                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-600">{h}</span>
                                                </div>
                                            ))}
                                        </div>
                                        
                                        <div className="pt-8 border-t border-slate-50">
                                            <button className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-primary hover:gap-4 transition-all">
                                                View Alliance Details <ArrowUpRight size={16} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- GLOBAL MOBILITY SECTION --- */}
            <section className="py-32 px-6 md:px-12 lg:px-24 bg-slate-900 rounded-[4rem] mx-6 md:mx-12 lg:mx-24 mb-32 relative overflow-hidden group">
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                <div className="max-w-4xl mx-auto text-center space-y-12 relative z-10">
                    <div className="flex justify-center -space-x-4">
                        {[1, 2, 3, 4].map(idx => (
                            <div key={idx} className="w-16 h-16 rounded-full border-4 border-slate-900 bg-slate-800 flex items-center justify-center text-white font-black overflow-hidden hover:scale-110 transition-transform">
                                <img src={`https://i.pravatar.cc/100?img=${idx + 10}`} alt="Student" />
                            </div>
                        ))}
                        <div className="w-16 h-16 rounded-full border-4 border-slate-900 bg-primary flex items-center justify-center text-white font-black text-xs">
                            12+
                        </div>
                    </div>
                    
                    <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-[0.9]">
                        TRANSFORMING <span className="text-primary italic">LEARNERS</span> INTO GLOBAL <span className="text-secondary italic">PRACTITIONERS.</span>
                    </h2>
                    
                    <p className="text-slate-400 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
                        Our alliances ensure you don't just graduate with a degree—you graduate with a global portfolio and a network that spans continents.
                    </p>

                    <Link to="/apply" className="inline-block px-12 py-5 bg-white text-slate-900 rounded-full font-black uppercase text-xs tracking-widest hover:bg-primary hover:text-white transition-all shadow-2xl active:scale-95">
                        Download Global Prospectus
                    </Link>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default AcademicAlliances;
