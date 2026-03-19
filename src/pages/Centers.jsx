import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    MapPin, Globe, ArrowUpRight, Search, 
    Navigation, Building2, Phone, Mail,
    ChevronRight, Sparkles, Zap, GraduationCap
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Footer from '../components/Footer';

const Centers = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [activeRegion, setActiveRegion] = useState('All');

    const regions = ['All', 'North', 'South', 'East', 'West', 'Central'];
    
    const centerList = [
        { city: "New Delhi", location: "South Delhi (Flagship)", region: "North", address: "Okhla Phase III", type: "Flagship" },
        { city: "New Delhi", location: "North Delhi", region: "North", address: "Guptanagar", type: "Innovation Hub" },
        { city: "Mumbai", location: "Andheri West", region: "West", address: "Creative Plaza", type: "Media Hub" },
        { city: "Mumbai", location: "Kandivali", region: "West", address: "Link Road", type: "Design Hub" },
        { city: "Pune", location: "Koregaon Park", region: "West", address: "Lanes of Lane 7", type: "Luxury Hub" },
        { city: "Bangalore", location: "Indiranagar", region: "South", address: "100ft Road", type: "Tech Hub" },
        { city: "Hyderabad", location: "Banjara Hills", region: "South", address: "Road No 12", type: "Heritage Hub" },
        { city: "Kolkata", location: "Salt Lake", region: "East", address: "Sector V", type: "Artistic Hub" },
        { city: "Ahmedabad", location: "Satellite", region: "West", address: "SG Highway", type: "Couture Hub" },
        { city: "Chennai", location: "Nungambakkam", region: "South", address: "Sterling Road", type: "Design Lab" },
        { city: "Lucknow", location: "Gomti Nagar", region: "North", address: "Vibhuti Khand", type: "Regional Hub" },
        { city: "Chandigarh", location: "Sector 17", region: "North", address: "Main City Centre", type: "Modernist Hub" },
        { city: "Jaipur", location: "Malviya Nagar", region: "North", address: "GT Central", type: "Heritage Hub" },
        { city: "Indore", location: "Vijay Nagar", region: "Central", address: "Scheme No 54", type: "Central Hub" },
        { city: "Bhopal", location: "Arera Colony", region: "Central", address: "E-3 Colony", type: "Studio Hub" }
    ];

    const filteredCenters = centerList.filter(c => {
        const matchesSearch = c.city.toLowerCase().includes(searchQuery.toLowerCase()) || 
                             c.location.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesRegion = activeRegion === 'All' || c.region === activeRegion;
        return matchesSearch && matchesRegion;
    });

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
                            className="text-6xl md:text-[8rem] font-black text-slate-900 tracking-tighter leading-[0.85] uppercase"
                        >
                            55+ <br /> <span className="text-transparent bg-clip-text bg-linear-to-r from-primary via-slate-500 to-secondary">CENTERS.</span>
                        </motion.h1>
                        <p className="text-slate-500 max-w-xl mx-auto text-lg font-medium tracking-tight">
                            The largest design education network in India. Bridging regional creativity with global standards.
                        </p>
                    </div>

                    {/* Interactive Filters */}
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-12 border-t border-slate-200/60">
                        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar w-full md:w-auto pb-4 md:pb-0">
                            {regions.map(r => (
                                <button
                                    key={r}
                                    onClick={() => setActiveRegion(r)}
                                    className={`px-8 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all duration-300 border ${
                                        activeRegion === r 
                                        ? 'bg-slate-900 text-white border-slate-900 shadow-xl' 
                                        : 'bg-white text-slate-500 border-slate-200 hover:border-slate-400'
                                    }`}
                                >
                                    {r}
                                </button>
                            ))}
                        </div>
                        <div className="relative w-full md:w-96">
                            <input 
                                type="text" 
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Search by city or area..."
                                className="w-full bg-white border border-slate-200 rounded-2xl px-14 py-4 text-sm font-medium focus:ring-4 focus:ring-primary/5 outline-none transition-all shadow-sm"
                            />
                            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
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
                        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none">
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
                                <div className="text-2xl font-black tracking-tighter leading-none">55+</div>
                                <div className="text-[10px] font-black uppercase tracking-widest opacity-50 group-hover:opacity-100">National Locations</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-6 p-6 bg-white/5 border border-white/10 rounded-3xl group-hover:bg-white transition-all group-hover:text-slate-900 delay-75">
                            <Globe className="text-secondary shrink-0" size={32} />
                            <div>
                                <div className="text-2xl font-black tracking-tighter leading-none">12+</div>
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
