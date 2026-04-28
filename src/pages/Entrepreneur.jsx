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
        <div className="bg-white min-h-screen font-sans selection:bg-primary selection:text-white pt-20 overflow-x-hidden">
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


            {/* --- SUCCESSFUL CAREER SKILLS (Based on User Image) --- */}
            <section className="py-40 bg-[#f8f9fa] relative overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-24">
                        <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter text-slate-900 leading-none mb-4">
                            SUCCESSFUL <span className="text-primary">CAREER SKILLS</span>
                        </h2>
                        <p className="text-xl md:text-3xl font-serif italic text-slate-400">We train students for holistic growth</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                title: "DESIGN SKILLS",
                                subtitle: "CREATE. DESIGN. EXECUTE.",
                                img: "/brain/b291e1a3-1cb2-4efc-ac17-c19bc4ddc65e/skills_design_laptop_1776964909628.png"
                            },
                            {
                                title: "AI TOOLS",
                                subtitle: "PROMPT. PRODUCE. FAST.",
                                img: "/brain/b291e1a3-1cb2-4efc-ac17-c19bc4ddc65e/skills_ai_smartphone_1776964927149.png"
                            },
                            {
                                title: "SOFT SKILLS",
                                subtitle: "COMMUNICATE. PRESENT. CONFIDENCE.",
                                img: "/brain/b291e1a3-1cb2-4efc-ac17-c19bc4ddc65e/skills_soft_presenting_1776964941714.png"
                            },
                            {
                                title: "ENTREPRENEURIAL SKILLS",
                                subtitle: "PRICE. SELL. BUILD. EARN.",
                                img: "/brain/b291e1a3-1cb2-4efc-ac17-c19bc4ddc65e/skills_entrepreneur_working_1776964959064.png"
                            }
                        ].map((skill, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group relative"
                            >
                                <div className="aspect-[3/4] rounded-[2rem] overflow-hidden mb-8 shadow-2xl border border-slate-100">
                                    <img src={skill.img} alt={skill.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" />
                                    <div className="absolute inset-0 bg-linear-to-t from-slate-900/80 via-transparent to-transparent" />
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-2xl font-black text-slate-900 tracking-tighter uppercase">{skill.title}</h3>
                                    <p className="text-[10px] font-bold text-primary tracking-[0.3em] uppercase">{skill.subtitle}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- WORK IN THE LARGEST SECTORS (Based on User Image) --- */}
            <section className="py-40 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                        <div className="lg:col-span-4">
                            <h2 className="text-6xl md:text-9xl font-black uppercase tracking-tighter text-slate-900 leading-[0.8] mb-12">
                                WORK <br /> IN THE <br /> <span className="text-primary">LARGEST</span> <br /> SECTORS
                            </h2>
                            <p className="text-xl text-slate-500 font-medium max-w-sm">
                                Our graduates are engineered to dominate the most lucrative industries in the global creative economy.
                            </p>
                        </div>
                        <div className="lg:col-span-8">
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-[600px]">
                                {[
                                    { title: "HOSPITALITY INDUSTRY", img: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1000" },
                                    { title: "RETAIL INDUSTRY", img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1000" },
                                    { title: "MEDIA & ENTERTAINMENT", img: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1000" },
                                    { title: "DESIGN INDUSTRY", img: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1000" }
                                ].map((sector, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        className="relative h-full rounded-[2rem] overflow-hidden group border border-slate-100"
                                    >
                                        <img src={sector.img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110" />
                                        <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />
                                        <div className="absolute bottom-8 left-0 right-0 px-6 text-center">
                                            <h4 className="text-white font-black text-xs md:text-sm tracking-widest uppercase leading-tight">
                                                {sector.title}
                                            </h4>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- EXPERT FACULTY & #1 SKILL SCHOOL --- */}
            <section className="py-40 bg-slate-950 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/10 blur-[150px] -translate-y-1/2 translate-x-1/2 rounded-full pointer-events-none" />
                
                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl mx-auto text-center mb-32">
                        <span className="text-primary font-black uppercase tracking-[0.8em] text-[10px] mb-8 block">Academic Excellence</span>
                        <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-12">
                            LEARN FROM <span className="italic font-serif font-light text-white/50">EXPERT FACULTIES</span> AT INSD.
                        </h2>
                        <p className="text-white/40 text-lg md:text-2xl font-medium leading-relaxed mb-12">
                            Our mentors are industry-active practitioners, ensuring your education is directly aligned with the current market velocity.
                        </p>
                        <div className="inline-block px-12 py-6 border-2 border-primary text-primary rounded-full font-black uppercase text-sm tracking-[0.5em] hover:bg-primary hover:text-white transition-all cursor-pointer">
                            Meet Your Mentors
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 rounded-[4rem] overflow-hidden border border-white/10">
                        <div className="p-20 bg-slate-900 flex flex-col justify-center items-center text-center space-y-8">
                            <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">India's #1</h3>
                            <div className="w-24 h-1 bg-primary mx-auto" />
                            <p className="text-2xl font-black uppercase tracking-[0.2em] text-white/60">Skill School</p>
                        </div>
                        <div className="p-20 bg-slate-950 flex flex-col justify-center space-y-8">
                            <p className="text-white/60 text-xl leading-relaxed font-light">
                                "INSD provided me with the architectural foundation to scale my vision into a market-dominant brand within 24 months of graduation."
                            </p>
                            <div className="flex items-center gap-6">
                                <div className="w-16 h-16 rounded-full bg-white/10 overflow-hidden">
                                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200" className="w-full h-full object-cover" />
                                </div>
                                <div>
                                    <p className="font-black uppercase tracking-widest text-sm">Aman Varma</p>
                                    <p className="text-primary font-bold text-[10px] uppercase tracking-widest">Founder, VERMA COUTURE</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

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



            {/* --- GLOBAL CURRENCY SECTION (Based on Image) --- */}
            <section className="py-40 px-6 md:px-12 lg:px-24 bg-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto flex flex-col items-center">
                    
                    {/* Header Group */}
                    <div className="text-center space-y-4 mb-24 relative z-20">
                        <motion.h2 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-7xl font-black text-slate-900 uppercase tracking-tighter leading-none"
                        >
                            Skills Accepted <span className="text-primary italic">Globally</span>
                        </motion.h2>
                        <motion.p 
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="text-lg md:text-2xl text-slate-500 font-bold tracking-tight uppercase"
                        >
                            Your talent has no borders & your skills are a global currency.
                        </motion.p>
                    </div>

                    {/* Interactive World Map / Brand Hub */}
                    <div className="relative w-full aspect-[16/10] max-w-5xl group">
                        
                        {/* Central Visual */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                className="relative w-[80%] h-[80%] rounded-[4rem] overflow-hidden shadow-2xl border border-slate-100"
                            >
                                <img 
                                    src="https://images.unsplash.com/photo-1522071823991-b9671f9d7f1f?auto=format&fit=crop&q=80&w=1600" 
                                    className="w-full h-full object-cover grayscale brightness-110 opacity-40" 
                                    alt="Global Designer"
                                />
                                <div className="absolute inset-0 bg-linear-to-tr from-white via-transparent to-primary/5" />
                                
                                {/* Overlay brands image (Conceptual) */}
                                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                    <div className="w-[60%] h-[60%] border-2 border-primary/20 rounded-full animate-spin-slow opacity-20" />
                                    <div className="w-[80%] h-[80%] border border-primary/10 rounded-full animate-reverse-spin opacity-10 absolute" />
                                </div>
                            </motion.div>
                        </div>

                        {/* Floating Cities - Left Side */}
                        <div className="absolute inset-0 z-10 pointer-events-none">
                            {[
                                { name: "Delhi", top: "15%", left: "5%" },
                                { name: "Mumbai", top: "35%", left: "0%" },
                                { name: "Bangalore", top: "55%", left: "5%" },
                                { name: "Kolkata", top: "75%", left: "10%" },
                                { name: "Hyderabad", bottom: "5%", left: "20%" },
                                { name: "Pune", bottom: "0%", left: "40%" }
                            ].map((city, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 0.6, x: 0 }}
                                    animate={{ 
                                        y: [0, -10, 0],
                                        x: [0, 5, 0]
                                    }}
                                    transition={{ 
                                        duration: 5, 
                                        delay: i * 0.2, 
                                        repeat: Infinity,
                                        opacity: { duration: 1, delay: i * 0.2 }
                                    }}
                                    style={{ top: city.top, left: city.left, bottom: city.bottom }}
                                    className="absolute text-slate-900 font-black uppercase text-xs md:text-xl tracking-widest"
                                >
                                    {city.name}
                                </motion.div>
                            ))}
                        </div>

                        {/* Floating Cities - Right Side */}
                        <div className="absolute inset-0 z-10 pointer-events-none">
                            {[
                                { name: "London", top: "10%", right: "10%" },
                                { name: "Paris", top: "30%", right: "5%" },
                                { name: "New York", top: "55%", right: "0%" },
                                { name: "Tokyo", bottom: "20%", right: "10%" },
                                { name: "Milan", bottom: "5%", right: "30%" }
                            ].map((city, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 0.6, x: 0 }}
                                    animate={{ 
                                        y: [0, 10, 0],
                                        x: [0, -5, 0]
                                    }}
                                    transition={{ 
                                        duration: 6, 
                                        delay: i * 0.3, 
                                        repeat: Infinity,
                                        opacity: { duration: 1, delay: i * 0.3 }
                                    }}
                                    style={{ top: city.top, right: city.right, bottom: city.bottom }}
                                    className="absolute text-slate-900 font-black uppercase text-xs md:text-xl tracking-widest text-right"
                                >
                                    {city.name}
                                </motion.div>
                            ))}
                        </div>

                        {/* Central Graphic Element (Person at desk aesthetic) */}
                        <div className="absolute inset-0 flex items-center justify-center z-20">
                            <motion.div 
                                initial={{ y: 50, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ duration: 1, delay: 0.5 }}
                                className="w-[50%] h-[70%] relative"
                            >
                                <img 
                                    src="https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=1200" 
                                    className="w-full h-full object-contain filter drop-shadow-[0_20px_50px_rgba(0,0,0,0.2)]" 
                                    alt="Professional Hub"
                                />
                                
                                {/* Floating Brand Accents (Simulating logos from image) */}
                                <div className="absolute inset-0 pointer-events-none">
                                    {[
                                        { label: "NIKE", top: "10%", left: "0%", color: "bg-black" },
                                        { label: "LV", top: "45%", left: "10%", color: "bg-amber-800" },
                                        { label: "GOOGLE", top: "20%", right: "10%", color: "bg-blue-500" },
                                        { label: "BOLLYWOOD", top: "5%", right: "20%", color: "bg-red-600" }
                                    ].map((brand, i) => (
                                        <motion.div
                                            key={i}
                                            animate={{ scale: [1, 1.1, 1] }}
                                            transition={{ duration: 3, repeat: Infinity, delay: i }}
                                            style={{ top: brand.top, left: brand.left, right: brand.right }}
                                            className={`absolute px-3 py-1 ${brand.color} text-white font-black text-[8px] rounded-sm shadow-lg`}
                                        >
                                            {brand.label}
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Entrepreneur;
