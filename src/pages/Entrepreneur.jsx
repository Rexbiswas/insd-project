import React from 'react';
import { motion } from 'framer-motion';
import { 
    Zap, 
    Rocket, 
    Target, 
    Globe, 
    Users, 
    Award, 
    ArrowRight,
    Briefcase,
    Lightbulb,
    TrendingUp,
    Shield
} from 'lucide-react';
import SEO from '../components/SEO';
import Footer from '../components/Footer';
import ConclaveSlider from '../components/ConclaveSlider';
import LabSlider from '../components/LabSlider';

const Entrepreneur = () => {
    return (
        <div className="bg-white min-h-screen font-sans selection:bg-primary selection:text-white pt-20">
            <SEO 
                title="Entrepreneurship & Startup Incubation | INSD"
                description="Ignite your entrepreneurial journey with INSD's startup incubation cell. We provide the mentorship, resources, and global network to turn your design vision into a successful venture."
            />

            {/* --- NARRATIVE HERO SECTION (Based on Reference Image) --- */}
            <section className="relative min-h-screen flex flex-col items-center justify-center px-6 md:px-12 lg:px-24 overflow-hidden py-20 bg-slate-950">
                {/* Background Image & Overlays */}
                <div className="absolute inset-0 z-0">
                    <img 
                        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1600" 
                        alt="Global HQ CEO" 
                        className="w-full h-full object-cover grayscale opacity-30"
                    />
                    <div className="absolute inset-0 bg-linear-to-b from-slate-950 via-slate-950/80 to-slate-950" />
                </div>
                
                {/* Visual Depth Texture */}
                <div className="absolute inset-0 z-1 opacity-[0.03] pointer-events-none cyber-grid" />
                
                {/* Main Narrative Container */}
                <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col items-center">
                    
                    {/* Editorial Headlines */}
                    <div className="text-center mb-16 space-y-4">
                        <motion.h1 
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                            className="text-[2.75rem] sm:text-6xl md:text-[8rem] font-black text-white tracking-tighter uppercase leading-[0.9] md:leading-none"
                        >
                            From <span className="text-primary">Student</span> to <span className="stroke-text-white opacity-20">CEO</span>
                        </motion.h1>
                        
                        <motion.p 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="text-lg sm:text-2xl md:text-5xl font-serif italic text-slate-400 tracking-tight leading-tight"
                        >
                            Employee or Employer — your choice.
                        </motion.p>
                    </div>

                    {/* Inclusion Footer (Straight from Reference) */}
                    <div className="mt-24 text-center">
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="inline-flex flex-wrap items-center justify-center gap-4 sm:gap-6 px-6 sm:px-10 py-5 bg-white/5 border border-white/10 rounded-3xl sm:rounded-full backdrop-blur-md"
                        >
                            <div className="w-2 h-2 rounded-full bg-primary animate-pulse hidden sm:block" />
                            <p className="text-xs sm:text-sm md:text-lg font-bold text-slate-400 uppercase tracking-widest leading-relaxed">
                                Modules on <span className="text-white">Business Management</span>, <span className="text-white">Marketing</span>, and <span className="text-white">Client Acquisition</span> included.
                            </p>
                            <div className="w-2 h-2 rounded-full bg-primary animate-pulse hidden sm:block" />
                        </motion.div>
                    </div>

                </div>

                {/* Aesthetic Detail: Lateral Scroll Progress */}
                <div className="absolute bottom-12 left-6 md:left-24 flex items-center gap-6 pointer-events-none">
                    <div className="w-16 h-px bg-white/20" />
                    <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white/40">Choose Your Narrative</span>
                </div>
            </section>

            {/* --- ECOSYSTEM STATS (Light Overhaul) --- */}
            <section className="bg-white px-6 md:px-12 lg:px-24 py-40 relative">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-2 lg:grid-cols-4 border-y border-slate-100">
                        {[
                            { label: "Founded", value: "150+", suffix: "Brands" },
                            { label: "Partners", value: "300+", suffix: "Global" },
                            { label: "Mentors", value: "50+", suffix: "CXOs" },
                            { label: "Networks", value: "25+", suffix: "Cities" }
                        ].map((stat, idx) => (
                            <motion.div 
                                key={idx} 
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: idx * 0.1 }}
                                viewport={{ once: true }}
                                className="p-16 border-r border-slate-100 last:border-r-0 hover:bg-slate-50 transition-colors group relative overflow-hidden"
                            >
                                <div className="absolute top-0 left-0 w-1 h-0 bg-primary group-hover:h-full transition-all duration-700" />
                                <div className="relative z-10">
                                    <p className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter mb-4 group-hover:text-primary transition-colors">
                                        {stat.value}
                                    </p>
                                    <div className="space-y-1">
                                        <p className="text-[10px] font-black uppercase text-slate-400 tracking-[0.4em]">{stat.label}</p>
                                        <p className="text-[9px] font-bold text-primary/60 italic uppercase tracking-widest">{stat.suffix}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- INCUBATION PILLARS (Light Modernized) --- */}
            <section className="py-40 px-6 md:px-12 lg:px-24 bg-slate-50 relative overflow-hidden">
                <div className="max-w-7xl mx-auto space-y-32">
                    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-16">
                        <div className="space-y-8">
                            <span className="text-primary font-black uppercase text-xs tracking-[0.6em]">The Foundation</span>
                            <h2 className="text-4xl sm:text-6xl md:text-8xl lg:text-[9rem] font-black text-slate-900 uppercase tracking-tighter leading-[0.8]">
                                Protocol <br /> <span className="stroke-text-slate-900 opacity-20">Elements.</span>
                            </h2>
                        </div>
                        <p className="text-slate-500 font-medium text-xl md:text-2xl max-w-xl leading-relaxed tracking-tight">
                            A multi-dimensional approach to startup engineering, designed exclusively for the creative avant-garde.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-200 border border-slate-200 rounded-[4rem] overflow-hidden">
                        {[
                            { 
                                title: "Business Strategy", 
                                desc: "High-performance scaling models and lean architecture for global dominance.",
                                icon: Target 
                            },
                            { 
                                title: "Funding Engines", 
                                desc: "Direct-to-investor pipelines and zero-friction capital procurement strategies.",
                                icon: TrendingUp 
                            },
                            { 
                                title: "Legacy Assets", 
                                desc: "Absolute protection for creative IP through elite patent frameworks.",
                                icon: Shield 
                            },
                            { 
                                title: "Global Mesh", 
                                desc: "Neural network of international partners spanning 40+ strategic markets.",
                                icon: Globe 
                            },
                            { 
                                title: "Titan Mentory", 
                                desc: "Direct advisory from the world's most successful design-led founders.",
                                icon: Users 
                            },
                            { 
                                title: "Quantum Studio", 
                                desc: "Elite physical infrastructure for rapid prototyping and collaborative engineering.",
                                icon: Briefcase 
                            }
                        ].map((pillar, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="p-16 bg-white hover:bg-slate-50 transition-all duration-700 group relative cursor-pointer"
                            >
                                <div className="w-20 h-20 rounded-3xl bg-slate-50 flex items-center justify-center text-slate-400 mb-12 group-hover:bg-primary group-hover:text-white transition-all transform group-hover:-translate-y-4 group-hover:rotate-6 shadow-sm">
                                    <pillar.icon size={36} />
                                </div>
                                <h3 className="text-3xl font-black text-slate-900 uppercase tracking-tighter mb-8 group-hover:text-primary transition-colors">{pillar.title}</h3>
                                <p className="text-slate-500 font-medium text-lg leading-relaxed tracking-tight group-hover:text-slate-900 transition-colors uppercase">{pillar.desc}</p>
                                
                                <div className="absolute bottom-12 right-12 opacity-0 group-hover:opacity-100 transition-all">
                                    <ArrowRight size={24} className="text-primary" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- EIDC CENTERPIECE (Entrepreneurship, Innovation & Design Center) --- */}
            <section className="py-48 px-6 md:px-12 lg:px-24 bg-white relative overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none cyber-grid" />
                
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="flex flex-col lg:flex-row gap-24 items-start">
                        
                        {/* Left Content Column */}
                        <div className="w-full lg:w-1/2 space-y-16">
                            <div className="space-y-6">
                                <motion.div 
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className="flex items-center gap-4"
                                >
                                    <div className="w-12 h-px bg-primary" />
                                    <span className="text-primary font-black uppercase text-[10px] tracking-[0.8em]">Core Institutional Directive</span>
                                </motion.div>
                                
                                <h2 className="text-5xl sm:text-7xl md:text-9xl lg:text-[12rem] font-black text-slate-900 uppercase tracking-tighter leading-[0.75]">
                                    EIDC<span className="text-primary italic font-serif">.</span><br />
                                    <span className="stroke-text-slate-900 opacity-20 text-3xl sm:text-5xl md:text-7xl lg:text-[8rem]">PROTOCOLS</span>
                                </h2>
                                
                                <p className="text-slate-400 font-bold uppercase tracking-[0.4em] text-xs">Entrepreneurship, Innovation & Design Center</p>
                            </div>

                            <p className="text-2xl md:text-4xl text-slate-500 font-medium leading-relaxed tracking-tight max-w-xl">
                                The architectural foundation where <span className="text-slate-900">visionary concepts</span> undergo rigorous engineering into <span className="text-slate-900">market-dominant</span> entities.
                            </p>

                            {/* Directives Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
                                {[
                                    { title: "Alpha Mentorship", icon: Lightbulb, color: "text-amber-500" },
                                    { title: "Capital Infusion", icon: TrendingUp, color: "text-emerald-500" },
                                    { title: "Legal Frameworks", icon: Shield, color: "text-blue-500" },
                                    { title: "Global Scaling", icon: Globe, color: "text-primary" }
                                ].map((dir, idx) => (
                                    <motion.div 
                                        key={idx}
                                        whileHover={{ x: 10 }}
                                        className="p-8 bg-slate-50 border border-slate-100 rounded-[2.5rem] group cursor-pointer transition-all hover:bg-white hover:shadow-xl hover:shadow-slate-200/50"
                                    >
                                        <div className="flex items-center gap-6">
                                            <div className={`w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center ${dir.color} group-hover:scale-110 transition-transform`}>
                                                <dir.icon size={24} />
                                            </div>
                                            <span className="font-black uppercase text-xs tracking-[0.2em] text-slate-900">{dir.title}</span>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Right Visual Column (Laboratory Aesthetic) */}
                        <div className="w-full lg:w-1/2 relative">
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1.5 }}
                                className="relative aspect-[4/5] rounded-[5rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] group"
                            >
                                <img 
                                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1600" 
                                    className="w-full h-full object-cover grayscale brightness-125 group-hover:scale-105 transition-all duration-1000"
                                    alt="EIDC Lab"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-white via-white/20 to-transparent" />
                                
                                {/* Overlay Lab Card */}
                                <div className="absolute bottom-12 left-12 right-12 apple-glass border-slate-100/50 rounded-[4rem] h-[340px] md:h-[380px] overflow-hidden">
                                    <LabSlider />
                                </div>
                            </motion.div>
                            
                            {/* Detail Callout */}
                            <motion.div 
                                animate={{ y: [0, -20, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -top-12 -right-12 p-8 bg-white shadow-2xl rounded-[2rem] border border-slate-100 hidden md:block"
                            >
                                <div className="space-y-2">
                                    <p className="text-[10px] font-black uppercase text-primary tracking-widest">Lab Capacity</p>
                                    <p className="text-4xl font-black text-slate-900 tracking-tighter">100%</p>
                                    <p className="text-[8px] font-bold text-slate-400 uppercase tracking-[0.4em]">Active Protocols</p>
                                </div>
                            </motion.div>
                        </div>

                    </div>
                </div>
            </section>


            {/* --- DESIGN CONCLAVE (The Flagship Event) --- */}
            <section className="py-48 px-6 md:px-12 lg:px-24 bg-white relative overflow-hidden">
                <div className="absolute inset-x-0 top-0 h-px bg-slate-100" />
                
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col lg:flex-row items-end justify-between gap-12 mb-32">
                        <div className="space-y-6">
                            <motion.div 
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className="flex items-center gap-4"
                            >
                                <div className="w-12 h-px bg-primary" />
                                <span className="text-primary font-black uppercase text-[10px] tracking-[0.8em]">Annual Global Summit</span>
                            </motion.div>
                            
                            <h2 className="text-5xl sm:text-7xl md:text-9xl lg:text-[10rem] font-black text-slate-900 uppercase tracking-tighter leading-[0.8]">
                                DESIGN <br /> <span className="stroke-text-slate-900 opacity-20">CONCLAVE.</span>
                            </h2>
                        </div>
                        
                        <div className="max-w-md space-y-8">
                            <p className="text-xl md:text-2xl text-slate-500 font-medium leading-relaxed tracking-tight">
                                Where industry titans and emerging visionaries converge to architect the next era of <span className="text-slate-900">creative commerce.</span>
                            </p>
                        </div>
                    </div>

                    {/* Conclave Moments Slider */}
                    <div className="relative z-10 -mx-6 md:-mx-12 lg:-mx-24">
                        <ConclaveSlider />
                    </div>

                    {/* Final Event CTA */}
                    <div className="mt-40 p-16 md:p-24 bg-slate-900 rounded-[5rem] relative overflow-hidden flex flex-col items-center text-center space-y-12">
                        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none cyber-grid" />
                        
                        <div className="relative z-10 space-y-6">
                            <span className="text-primary font-black uppercase text-xs tracking-[0.8em]">Exclusive Access Only</span>
                            <h3 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none">
                                SECURE YOUR <br /> <span className="stroke-text-white opacity-20">PRECINCT.</span>
                            </h3>
                        </div>

                        <div className="relative z-10 flex flex-col md:flex-row gap-8">
                            <motion.button 
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-16 py-8 bg-primary text-white rounded-full font-black uppercase text-xs tracking-[0.4em] shadow-2xl shadow-primary/20"
                            >
                                Request Invitation
                            </motion.button>
                            <motion.button 
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-16 py-8 border-2 border-white/20 text-white rounded-full font-black uppercase text-xs tracking-[0.4em] hover:bg-white hover:text-slate-900 transition-all"
                            >
                                Conclave History
                            </motion.button>
                        </div>

                        <div className="relative z-10 flex items-center gap-10 opacity-30">
                            {["London", "Milan", "Dubai", "New Delhi"].map((city, i) => (
                                <React.Fragment key={i}>
                                    <span className="text-[10px] font-black uppercase tracking-widest text-white">{city}</span>
                                    {i < 3 && <div className="w-1 h-1 rounded-full bg-white" />}
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                </div>
            </section>



            <Footer />
        </div>
    );
};

export default Entrepreneur;
