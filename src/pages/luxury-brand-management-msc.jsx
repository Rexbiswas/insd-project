import React from 'react';
import { motion } from 'framer-motion';
import {
    Sparkles,
    ArrowRight,
    GraduationCap,
    Clock,
    BookOpen,
    Gem,
    Crown,
    ShoppingBag,
    Briefcase,
    Globe,
    Star,
    Heart,
    TrendingUp,
    Award
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import SEO from '../components/SEO';
import Footer from '../components/Footer';
import { useAdmissionModal } from '../context/AdmissionModalContext';

const LuxuryBrandManagementMsc = () => {
    const navigate = useNavigate();
    const { openAdmissionModal } = useAdmissionModal();

    const toolsData = [
        {
            name: "Brand Strategy",
            desc: "Master the art of building and managing luxury brand identities across global markets and heritage houses.",
            icon: Crown
        },
        {
            name: "Consumer Psychology",
            desc: "Decode the emotional drivers behind ultra-high-net-worth purchasing behavior and luxury desire.",
            icon: Heart
        },
        {
            name: "Digital Luxury",
            desc: "Navigate the intersection of heritage storytelling and cutting-edge digital brand transformation.",
            icon: TrendingUp
        },
        {
            name: "Global Markets",
            desc: "Analyze international luxury ecosystems from Paris to Tokyo, mastering cross-cultural brand positioning.",
            icon: Globe
        }
    ];

    const highlights = [
        {
            title: "Heritage & Brand DNA",
            desc: "Study the archival storytelling, emotional architecture, and multi-generational value creation behind the world's most iconic luxury maisons.",
            icon: Star
        },
        {
            title: "Luxury Retail & Experience",
            desc: "Design immersive, white-glove retail environments and bespoke client journeys for ultra-premium boutiques and flagship stores.",
            icon: ShoppingBag
        },
        {
            title: "Strategic Brand Leadership",
            desc: "Develop CEO-level strategic vision including market positioning, portfolio management, and luxury brand acquisition frameworks.",
            icon: Briefcase
        },
        {
            title: "Sustainable Luxury Futures",
            desc: "Lead the transformation toward ethical production, circular ecosystems, and conscious luxury without compromising exclusivity.",
            icon: Gem
        }
    ];

    const careerPaths = [
        "Luxury Brand Manager",
        "Retail Operations Director",
        "PR & Communications Lead",
        "Customer Experience Architect",
        "Luxury Marketing Strategist",
        "Merchandising Director",
        "Sustainability Consultant",
        "Global Brand Consultant",
        "Luxury Entrepreneur"
    ];

    return (
        <div className="bg-slate-50 min-h-screen font-sans selection:bg-primary selection:text-white text-slate-800">
            <SEO
                title="MSc Luxury Brand Management - INSD Luxe | INSD"
                description="Master the elite world of luxury brand management with INSD's premium MSc program. Study brand heritage, consumer psychology, strategic leadership, and global luxury markets."
                keywords="MSc luxury brand management, luxury management course, INSD Luxe, luxury brand strategy, fashion management Delhi"
            />

            {/* --- HERO SECTION --- */}
            <section className="relative min-h-[90vh] flex flex-col justify-end pt-32 pb-20 px-6 overflow-hidden bg-slate-950">
                <div className="absolute inset-0 pointer-events-none z-0">
                    {/* Rich dark luxury gradient */}
                    <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-gradient-to-b from-amber-500/8 to-transparent blur-[150px] rounded-full" />
                    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-t from-primary/6 to-transparent blur-[120px] rounded-full" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-gradient-radial from-amber-400/3 via-transparent to-transparent blur-[100px] rounded-full" />
                    {/* Subtle noise texture */}
                    <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />
                    {/* Gold accent line */}
                    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/30 to-transparent" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col md:flex-row justify-between items-end gap-12">
                    <div className="flex-1">
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="inline-flex items-center gap-2.5 bg-amber-400/10 border border-amber-400/25 text-amber-400 px-5 py-2 rounded-full font-bold uppercase tracking-widest text-[10px] mb-8"
                        >
                            <Crown size={13} /> INSD Luxe · MSc Program
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-5xl md:text-7xl lg:text-[7rem] font-black uppercase tracking-tighter leading-[0.85] text-white"
                        >
                            Luxury Brand <br />
                            <span className="bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-500 text-transparent bg-clip-text">Management.</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="mt-6 text-white/30 text-sm font-bold uppercase tracking-[0.3em]"
                        >
                            Master of Science · Postgraduate
                        </motion.p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="max-w-md text-left md:text-right"
                    >
                        <p className="text-white/50 text-base md:text-lg font-semibold leading-relaxed mb-8 uppercase tracking-wide">
                            Command the strategic architecture and emotional intelligence required to lead the world's most prestigious luxury houses and heritage brands.
                        </p>
                        <div className="flex justify-start md:justify-end gap-4">
                            <button
                                onClick={openAdmissionModal}
                                className="px-8 py-4 bg-amber-400 hover:bg-amber-300 text-slate-950 rounded-full font-black uppercase text-xs tracking-widest flex items-center gap-2 transition-all shadow-lg shadow-amber-400/20 scale-100 hover:scale-[1.03] duration-300 cursor-pointer"
                            >
                                Register Interest
                                <ArrowRight size={16} />
                            </button>
                            <button
                                onClick={() => navigate('/')}
                                className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white/70 rounded-full font-black uppercase text-xs tracking-widest flex items-center gap-2 transition-all cursor-pointer"
                            >
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400"></span>
                                </span>
                                Coming Soon
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* --- QUICK STATS STRIP --- */}
            <section className="border-y border-slate-100 bg-white py-8">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { label: "Duration", value: "2 Year MSc Program", icon: Clock },
                        { label: "Eligibility", value: "Graduate / Bachelor's Degree", icon: GraduationCap },
                        { label: "Credentials Offered", value: "MSc in Luxury Brand Management", icon: BookOpen }
                    ].map((fact, idx) => (
                        <div key={idx} className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-amber-500">
                                <fact.icon size={22} />
                            </div>
                            <div>
                                <p className="text-slate-400 text-[10px] font-black uppercase tracking-wider">{fact.label}</p>
                                <p className="text-slate-800 text-sm font-black uppercase tracking-tight">{fact.value}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* --- CORE PILLARS --- */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-amber-400/5 blur-[120px] rounded-full pointer-events-none" />
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
                        <span className="text-xs font-bold uppercase tracking-widest text-amber-500">The Four Pillars</span>
                        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-slate-900 leading-none">
                            Mastery in Luxury
                        </h2>
                        <p className="text-slate-500 font-bold uppercase text-xs tracking-widest leading-relaxed">
                            A world-class curriculum built on the four essential pillars of luxury brand leadership and global market dominance.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {toolsData.map((tool, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-amber-400/20 hover:bg-white hover:shadow-xl hover:shadow-amber-100/30 transition-all duration-300 flex flex-col items-center text-center space-y-5"
                            >
                                <div className="w-16 h-16 flex items-center justify-center bg-white rounded-2xl border border-slate-100 shadow-sm group-hover:bg-amber-400 group-hover:border-amber-400 group-hover:text-white text-amber-500 transition-all duration-300 group-hover:scale-110">
                                    <tool.icon size={28} />
                                </div>
                                <h3 className="text-base font-black text-slate-900 uppercase tracking-tight">{tool.name}</h3>
                                <p className="text-xs text-slate-500 font-medium leading-relaxed uppercase tracking-tight">{tool.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- PROGRAM HIGHLIGHTS --- */}
            <section className="py-24 bg-slate-50 border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
                        <span className="text-xs font-bold uppercase tracking-widest text-secondary">Program Highlights</span>
                        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-slate-900 leading-none">
                            What You Will Master
                        </h2>
                        <p className="text-slate-500 font-bold uppercase text-xs tracking-widest leading-relaxed">
                            An elite postgraduate framework engineered for strategic leadership across the global luxury and prestige industry.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {highlights.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 25 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.15 }}
                                className="group p-10 rounded-[2.5rem] bg-white border border-slate-100 hover:border-amber-400/20 transition-all duration-500 hover:shadow-2xl hover:shadow-slate-200/50 flex flex-col sm:flex-row gap-6 items-start"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-amber-500 shrink-0 group-hover:bg-amber-400 group-hover:text-white transition-all duration-500">
                                    <item.icon size={26} />
                                </div>
                                <div className="space-y-3">
                                    <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight group-hover:text-amber-600 transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-slate-500 text-xs font-semibold leading-relaxed uppercase tracking-tight">
                                        {item.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- CAREER PATHS --- */}
            <section className="py-24 bg-white border-t border-slate-100 relative overflow-hidden">
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-400/5 blur-[120px] rounded-full pointer-events-none" />
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
                        <span className="text-xs font-bold uppercase tracking-widest text-amber-500">Your Future Awaits</span>
                        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-slate-900 leading-none">
                            Career Pathways
                        </h2>
                        <p className="text-slate-500 font-bold uppercase text-xs tracking-widest leading-relaxed">
                            Unlock elite career trajectories across the global luxury ecosystem — from heritage houses to entrepreneurial ventures.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {careerPaths.map((role, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: idx * 0.06 }}
                                className="group flex items-center gap-4 p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-white hover:border-amber-400/20 hover:shadow-lg hover:shadow-amber-100/20 transition-all duration-300"
                            >
                                <div className="w-10 h-10 rounded-xl bg-white border border-slate-100 flex items-center justify-center text-amber-500 group-hover:bg-amber-400 group-hover:text-white group-hover:border-amber-400 transition-all duration-300 shrink-0">
                                    <Award size={18} />
                                </div>
                                <span className="text-sm font-black text-slate-800 uppercase tracking-tight group-hover:text-amber-600 transition-colors">
                                    {role}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- WHY INSD LUXE --- */}
            <section className="py-24 bg-slate-950 relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-400/5 blur-[150px] rounded-full" />
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 blur-[120px] rounded-full" />
                    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/20 to-transparent" />
                </div>
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                        <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-amber-400">The INSD Advantage</span>
                        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white leading-none">
                            Why INSD <span className="text-white/30">Luxe?</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: "15+ Years Legacy", desc: "A national award-winning institution with a proven track record of design excellence.", icon: Sparkles },
                            { title: "Global Network", desc: "Collaborations and placements across 30+ countries worldwide.", icon: Globe },
                            { title: "Elite Mentorship", desc: "Learn directly from industry veterans and global luxury leaders.", icon: Award },
                            { title: "100% Placement", desc: "Comprehensive career support and placement assistance for every graduate.", icon: Briefcase }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 25 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="group p-8 rounded-3xl bg-white/5 border border-white/5 hover:border-amber-400/20 hover:bg-white/10 transition-all duration-500 text-center space-y-4"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-amber-400 mx-auto group-hover:bg-amber-400 group-hover:text-slate-950 transition-all duration-500">
                                    <item.icon size={26} />
                                </div>
                                <h4 className="text-lg font-black text-white uppercase tracking-tight">{item.title}</h4>
                                <p className="text-white/40 font-bold text-[11px] uppercase leading-relaxed tracking-tight">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- COMING SOON CTA SECTION --- */}
            <section className="py-28 px-6 bg-white border-t border-slate-100 relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-400/5 blur-[150px] rounded-full pointer-events-none" />
                <div className="max-w-4xl mx-auto text-center space-y-10 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <Crown size={44} className="mx-auto text-amber-400 animate-bounce" />
                    </motion.div>
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-none text-slate-900">
                        Prestige Program <br />
                        <span className="text-slate-400">Launch Approaching.</span>
                    </h2>
                    <p className="text-slate-500 font-bold uppercase text-xs tracking-widest max-w-md mx-auto leading-relaxed">
                        We are curating our luxury curriculum, industry partnerships, and global immersion modules for the upcoming cohort. Be among the first to know.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
                        <button
                            onClick={() => navigate('/')}
                            className="bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 px-12 py-5 rounded-full font-black uppercase tracking-widest text-xs flex items-center justify-center gap-3 transition-all shadow-sm cursor-pointer w-full sm:w-auto"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400"></span>
                            </span>
                            Coming Soon
                        </button>
                        <button
                            onClick={openAdmissionModal}
                            className="bg-amber-400 hover:bg-amber-300 text-slate-950 px-10 py-5 rounded-full font-black uppercase tracking-widest text-xs transition-all shadow-lg hover:shadow-amber-400/20 scale-100 hover:scale-[1.03] duration-300 cursor-pointer w-full sm:w-auto"
                        >
                            Register Interest
                        </button>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default LuxuryBrandManagementMsc;
