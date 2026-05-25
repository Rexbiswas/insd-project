import React from 'react';
import { motion } from 'framer-motion';
import { 
    Sparkles, 
    ArrowRight, 
    GraduationCap, 
    Clock, 
    BookOpen
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import SEO from '../components/SEO';
import Footer from '../components/Footer';
import { useAdmissionModal } from '../context/AdmissionModalContext';

const DiplomaInTextileDesign = () => {
    const navigate = useNavigate();
    const { openAdmissionModal } = useAdmissionModal();

    const toolsData = [
        { name: "Digital CAD repeat systems", desc: "For technical repeat patterns, digital colorways, and separation setups.", logo: "https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg" },
        { name: "Traditional Handlooms", desc: "For understanding warp-weft intersections, structure design, and custom weaves.", logo: "https://images.unsplash.com/photo-1590736969955-71cc94801759?auto=format&fit=crop&q=80&w=150" },
        { name: "Screen Printing lab", desc: "For manual block/stencil printing, screen exposure, and stencil design.", logo: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&q=80&w=150" },
        { name: "Digital Fabric printer", desc: "For mapping custom files directly onto cotton, silk, and polyester fabrics.", logo: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=150" }
    ];

    return (
        <div className="bg-slate-50 min-h-screen font-sans selection:bg-primary selection:text-white text-slate-800">
            <SEO 
                title="Diploma in Textile Design Courses in Delhi - INSD"
                description="Study a professional 1-Year Diploma or 6-Month Certificate in Textile Design. Master CAD repeats, fabric weaving, surface ornamentations, and sustainable dyeing at INSD."
                keywords="textile design diploma, textile course Delhi, learn weaving printing, pattern design school, sustainable fashion, textile design certification"
            />

            {/* --- HERO SECTION --- */}
            <section className="relative min-h-[85vh] flex flex-col justify-end pt-32 pb-20 px-6 overflow-hidden bg-white">
                <div className="absolute inset-0 pointer-events-none z-0">
                    {/* Primary Red & Secondary Blue ambient flows */}
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-b from-[#134a84]/5 to-transparent blur-[120px] rounded-full" />
                    <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-gradient-to-b from-[#db3436]/5 to-transparent blur-[100px] rounded-full" />
                    <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />
                    <div className="absolute inset-0 cyber-grid opacity-[0.03]" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col md:flex-row justify-between items-end gap-12">
                    <div className="flex-1">
                        <motion.div 
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="inline-flex items-center gap-2 bg-[#db3436]/10 border border-[#db3436]/30 text-[#db3436] px-4 py-1.5 rounded-full font-bold uppercase tracking-widest text-xs mb-8"
                        >
                            <Sparkles size={14} /> Certified Material Modules
                        </motion.div>
                        <motion.h1 
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-5xl md:text-7xl lg:text-[7rem] font-black uppercase tracking-tighter leading-[0.85] text-slate-900"
                        >
                            Textile <br/>
                            <span className="bg-gradient-to-r from-[#db3436] to-[#134a84] text-transparent bg-clip-text">waves.</span>
                        </motion.h1>
                    </div>
                    
                    <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="max-w-md text-left md:text-right"
                    >
                        <p className="text-slate-600 text-base md:text-lg font-semibold leading-relaxed mb-8 uppercase tracking-wide">
                            Craft the fabrics of tomorrow. Master digital repeats, organic dyes, yarn structures, and visual strategies for premium apparel and home collections.
                            100% practical, portfolio-oriented training.
                        </p>
                        <div className="flex justify-start md:justify-end gap-4">
                            <button
                                onClick={openAdmissionModal}
                                className="px-8 py-4 bg-gradient-to-r from-[#db3436] to-[#134a84] text-white rounded-full font-black uppercase text-xs tracking-widest flex items-center gap-2 transition-all shadow-lg hover:shadow-[#db3436]/20 scale-100 hover:scale-[1.03] duration-300"
                            >
                                Apply Now
                                <ArrowRight size={16} />
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* --- QUICK STATS STRIP --- */}
            <section className="border-y border-slate-100 bg-white py-8">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { label: "Duration Options", value: "1 Year / 6 Months", icon: Clock },
                        { label: "Eligibility", value: "10+2 / Graduates / Professionals", icon: GraduationCap },
                        { label: "Credentials Offered", value: "Professional Diploma / Certificate", icon: BookOpen }
                    ].map((fact, idx) => (
                        <div key={idx} className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-[#db3436]">
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

            {/* --- DESIGN TOOLS SUITE --- */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
                        <span className="text-xs font-bold uppercase tracking-widest text-[#db3436]">Studio Amenities</span>
                        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-slate-900 leading-none">
                            Our Textile Laboratories
                        </h2>
                        <p className="text-slate-500 font-bold uppercase text-xs tracking-widest leading-relaxed">
                            No shortcuts. We train you directly on weaving looms, color vats, and CAD setups used by premium design ateliers.
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
                                className="group p-6 rounded-3xl bg-slate-50 border border-slate-100 hover:border-[#db3436]/20 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 flex flex-col items-center text-center space-y-4"
                            >
                                <div className="w-16 h-16 flex items-center justify-center bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden group-hover:scale-110 transition-transform duration-300">
                                    <img src={tool.logo} alt={tool.name} className="w-full h-full object-cover" />
                                </div>
                                <h3 className="text-base font-black text-slate-900 uppercase tracking-tight">{tool.name}</h3>
                                <p className="text-xs text-slate-500 font-medium leading-relaxed uppercase tracking-tight">{tool.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- COMING SOON CTA SECTION --- */}
            <section className="py-24 px-6 bg-white border-t border-slate-100">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-slate-900 leading-none">
                        Next-Gen Curriculum Launching
                    </h2>
                    <p className="text-slate-500 font-bold uppercase text-xs tracking-widest max-w-md mx-auto leading-relaxed">
                        We are actively updating our advanced textile modules for the upcoming cohort. Stay tuned.
                    </p>
                    <div className="flex justify-center pt-4">
                        <button
                            onClick={() => navigate('/')}
                            className="px-10 py-5 bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 rounded-full font-black uppercase text-xs tracking-widest flex items-center gap-3 transition-all shadow-sm cursor-pointer"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                            </span>
                            Coming Soon
                        </button>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default DiplomaInTextileDesign;
