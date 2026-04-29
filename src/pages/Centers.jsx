import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    MapPin, Globe, ArrowUpRight, 
    Navigation, Building2, Phone, Mail,
    ChevronRight, Sparkles, Zap, GraduationCap
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Footer from '../components/Footer';
import { stateCityData } from '../data/locations';

const Centers = () => {
    const centerList = Object.entries(stateCityData).flatMap(([state, cities]) => 
        cities.map(city => ({
            city: city,
            location: state, // Using state as location text as requested
            region: "INSD", 
            address: `${city} City Center`,
            type: "Campus"
        }))
    );

    const filteredCenters = centerList;

    return (
        <div className="bg-white min-h-screen font-sans">
            <SEO 
                title="Centers Across India | 50+ INSD Locations"
                description="Find an INSD center near you. With over 50+ campuses across India, including flagship centers in Delhi, Mumbai, Pune, and Bangalore."
            />

            {/* --- HERO SECTION --- */}
            <section className="pt-32 pb-16 px-6 md:px-12 lg:px-24 bg-slate-50 border-b border-slate-100">
                <div className="max-w-7xl mx-auto space-y-12 text-center">
                    <div className="space-y-4">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-primary/10 border border-primary/20 text-[10px] font-black uppercase tracking-[0.4em] text-primary"
                        >
                            National Network
                        </motion.div>
                        <motion.h1 
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-clamp-5xl font-black text-slate-900 tracking-tighter leading-[0.85] uppercase"
                        >
                            75+ <br /> <span className="text-transparent bg-clip-text bg-linear-to-r from-primary via-slate-500 to-secondary">CENTERS.</span>
                        </motion.h1>
                        <p className="text-slate-500 max-w-xl mx-auto text-lg font-medium tracking-tight">
                            The largest design education network in India. Bridging regional creativity with global standards.
                        </p>
                        
                        <div className="flex flex-wrap items-center justify-center gap-6 pt-4 opacity-60">
                            <div className="flex items-center gap-2">
                                <Target size={14} className="text-primary" />
                                <span className="text-[10px] font-black uppercase tracking-widest">Skill India Partner</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Award size={14} className="text-primary" />
                                <span className="text-[10px] font-black uppercase tracking-widest">Govt Recognized</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Briefcase size={14} className="text-primary" />
                                <span className="text-[10px] font-black uppercase tracking-widest">Budget 2026 Aligned</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- CENTERS GRID --- */}
            <main className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-24">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence mode="wait">
                        {filteredCenters.map((center, idx) => (
                            <motion.div
                                layout
                                key={`${center.city}-${center.location}`}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.4 }}
                                className="group bg-white border border-slate-100 rounded-[2.5rem] p-8 hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500 relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                                    <MapPin size={120} />
                                </div>

                                <div className="relative z-10 space-y-6">
                                    <div className="flex items-center justify-between">
                                        <div className="px-4 py-1.5 bg-slate-50 rounded-full text-[9px] font-black uppercase tracking-widest text-slate-400 group-hover:text-primary transition-colors">
                                            {center.region} Region
                                        </div>
                                        <div className="w-10 h-10 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-primary group-hover:text-white transition-all">
                                            <Navigation size={18} />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <h3 className="text-3xl font-black text-slate-900 uppercase tracking-tighter leading-none group-hover:text-primary transition-colors">
                                            {center.city}
                                        </h3>
                                        <p className="text-slate-400 text-sm font-bold uppercase tracking-widest">{center.location}</p>
                                    </div>

                                    <div className="space-y-4">
                                        <div className="flex items-center gap-3 text-slate-500 font-medium text-sm italic">
                                            <Building2 size={16} className="text-slate-300" />
                                            {center.address}
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="px-3 py-1 bg-primary/5 text-primary rounded-lg text-[10px] font-black uppercase tracking-tighter">{center.type}</span>
                                        </div>
                                    </div>

                                    <div className="pt-6 border-t border-slate-50 flex items-center justify-between">
                                        <Link to="/contact-us" className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-slate-900 transition-colors flex items-center gap-2">
                                            Enquire Now <ChevronRight size={14} />
                                        </Link>
                                        <Link to="/campuses" className="text-primary hover:scale-110 transition-transform">
                                            <ArrowUpRight size={20} />
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {filteredCenters.length === 0 && (
                    <div className="py-24 text-center">
                        <p className="text-slate-400 font-medium">No centers found matching your query. Explore our national flagship nodes instead.</p>
                        <Link to="/campuses" className="text-primary font-black uppercase tracking-widest text-[10px] mt-4 block">View Flagship Campuses</Link>
                    </div>
                )}
            </main>

            {/* --- MAP STRIP --- */}
            <section className="px-6 md:px-12 lg:px-24 pb-24">
                <div className="max-w-7xl mx-auto p-12 md:p-24 bg-slate-900 rounded-[3.5rem] text-white flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden group">
                    <div className="relative z-10 space-y-6 text-center md:text-left">
                        <Sparkles className="text-primary mx-auto md:mx-0" size={32} />
                        <h2 className="text-clamp-4xl font-black uppercase tracking-tighter leading-none">
                            CENTERS IN <br /> <span className="text-slate-500 italic">EVERY HUB.</span>
                        </h2>
                        <p className="text-slate-400 max-w-sm font-medium text-lg leading-relaxed">
                            From the bustling streets of Mumbai to the artistic lanes of Kolkata, INSD is where you are.
                        </p>
                    </div>
                    <div className="relative z-10 flex flex-col gap-6 w-full md:w-auto">
                        <div className="flex items-center gap-6 p-6 bg-white/5 border border-white/10 rounded-3xl group-hover:bg-white transition-all group-hover:text-slate-900">
                            <GraduationCap className="text-primary shrink-0" size={32} />
                            <div>
                                <div className="text-2xl font-black tracking-tighter leading-none">75+</div>
                                <div className="text-[10px] font-black uppercase tracking-widest opacity-50 group-hover:opacity-100">National Locations</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-6 p-6 bg-white/5 border border-white/10 rounded-3xl group-hover:bg-white transition-all group-hover:text-slate-900 delay-75">
                            <Globe className="text-secondary shrink-0" size={32} />
                            <div>
                                <div className="text-2xl font-black tracking-tighter leading-none">23+</div>
                                <div className="text-[10px] font-black uppercase tracking-widest opacity-50 group-hover:opacity-100">International Cities</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Centers;
