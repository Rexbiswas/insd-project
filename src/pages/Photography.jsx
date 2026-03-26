import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    CheckCircle2, 
    ChevronDown, 
    Camera, 
    Aperture, 
    Image, 
    ArrowRight,
    Globe,
    Award,
    Target,
    Download,
    Sparkles,
    Video
} from 'lucide-react';
import SEO from '../components/SEO';
import Footer from '../components/Footer';

const Photography = () => {
    const [activeOutline, setActiveOutline] = useState('PG');
    const [expandedYear, setExpandedYear] = useState(1);

    const curriculumData = {
        PG: {
            year1: [
                "Advanced Digital Photography",
                "Studio Lighting Techniques",
                "High-Fashion & Editorial Shoots",
                "Visual Storytelling & Narrative",
                "Advanced Post-Processing (PS/LR)",
                "Documentary & Street Photography",
                "History of Photographic Arts",
                "Color Science & Management"
            ],
            year2: [
                "Commercial & Product Photography",
                "Architecture & Interior Shoots",
                "Cinematography for Photographers",
                "Business of Photography",
                "Exhibition & Print Media",
                "Professional Portfolio Showcase"
            ]
        },
        UG: {
            year1: [
                "Basics of Camera & Lenses",
                "Composition & Framing",
                "Introduction to Light",
                "Digital Workflow Basics",
                "Visual Perception",
                "B&W Photography Mastery",
                "Portraiture Basics",
                "Creative Image Making"
            ],
            year2: [
                "Intermediate Studio Lighting",
                "Event & Wedding Photography",
                "Nature & Macro Shoots",
                "Digital Manipulation basics",
                "Photo Journalism",
                "Final Year Project"
            ]
        }
    };

    return (
        <div className="bg-white min-h-screen font-sans selection:bg-primary selection:text-white">
            <SEO 
                title="Photography Course | INSD International School of Design"
                description="Capture the world through a creative lens with INSD's professional Photography program. Learn studio lighting, high-fashion shooting, and digital post-production."
            />

            {/* --- HERO SECTION --- */}
            <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center text-center px-6 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img 
                        src="https://images.pexels.com/photos/594452/pexels-photo-594452.jpeg?auto=compress&cs=tinysrgb&w=1920" 
                        alt="Photography Studio" 
                        className="w-full h-full object-cover scale-105"
                    />
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
                </div>

                <div className="relative z-10 max-w-5xl mx-auto space-y-8 flex flex-col items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="text-center"
                    >
                        <h1 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none mb-6">
                            Photography
                        </h1>
                        <p className="text-lg md:text-xl text-white/80 font-medium leading-relaxed max-w-4xl mx-auto mb-10">
                            Master the art of the perfect frame. From high-fashion editorials to cinematic visual storytelling, learn the technical precision and creative vision required for the global media industry.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <button className="px-12 py-5 bg-white text-slate-900 rounded-full font-black uppercase text-xs tracking-widest hover:bg-primary hover:text-white transition-all transform hover:scale-105 shadow-2xl">
                                Join This Course
                            </button>
                            <a 
                                href="https://drive.google.com/drive/folders/1sFS6WXmrkoRTdVopZKOHB4hHxxku1Gz-" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 px-12 py-5 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full font-black uppercase text-xs tracking-widest hover:bg-white/20 transition-all transform hover:scale-105"
                            >
                                <Download size={16} />
                                Download Curriculum
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* --- CURRICULUM SECTION --- */}
            <section className="py-24 px-6 md:px-12 lg:px-24 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-6xl font-black text-slate-900 uppercase tracking-tighter">
                            Curriculum
                        </h2>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-12 items-start">
                        <div className="w-full lg:w-72 space-y-4 shrink-0">
                            <button 
                                onClick={() => setActiveOutline('PG')}
                                className={`w-full py-5 px-8 rounded-full font-black uppercase text-xs tracking-[0.2em] transition-all duration-300 border-2 ${
                                    activeOutline === 'PG' 
                                    ? 'bg-slate-900 border-slate-900 text-white shadow-2xl shadow-slate-900/20 scale-[1.02]' 
                                    : 'bg-white border-slate-200 text-slate-400 hover:border-slate-900 hover:text-slate-900'
                                }`}
                            >
                                PG Course Outline
                            </button>
                            <button 
                                onClick={() => setActiveOutline('UG')}
                                className={`w-full py-5 px-8 rounded-full font-black uppercase text-xs tracking-[0.2em] transition-all duration-300 border-2 ${
                                    activeOutline === 'UG' 
                                    ? 'bg-slate-900 border-slate-900 text-white shadow-2xl shadow-slate-900/20 scale-[1.02]' 
                                    : 'bg-white border-slate-200 text-slate-400 hover:border-slate-900 hover:text-slate-900'
                                }`}
                            >
                                UG Course Outline
                            </button>
                        </div>

                        <div className="flex-1 w-full space-y-4">
                            <div className="border border-slate-100 rounded-3xl overflow-hidden bg-slate-50/50">
                                <button 
                                    onClick={() => setExpandedYear(expandedYear === 1 ? 0 : 1)}
                                    className="w-full flex items-center justify-between p-8 bg-white hover:bg-slate-50 transition-colors group"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className={`p-2 rounded-xl transition-colors ${expandedYear === 1 ? 'bg-primary text-white' : 'bg-slate-100 text-slate-400 group-hover:bg-slate-200'}`}>
                                            <ChevronDown className={`w-5 h-5 transition-transform duration-500 ${expandedYear === 1 ? 'rotate-180' : ''}`} />
                                        </div>
                                        <span className="text-2xl font-black text-slate-900 tracking-tighter uppercase">« 1 Year</span>
                                    </div>
                                </button>
                                
                                <AnimatePresence initial={false}>
                                    {expandedYear === 1 && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
                                        >
                                            <div className="p-8 md:p-12 border-t border-slate-100">
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                                                    {curriculumData[activeOutline].year1.map((item, idx) => (
                                                        <motion.div 
                                                            key={idx}
                                                            initial={{ opacity: 0, x: -10 }}
                                                            animate={{ opacity: 1, x: 0 }}
                                                            transition={{ delay: idx * 0.05 }}
                                                            className="flex items-start gap-4 group"
                                                        >
                                                            <div className="mt-1">
                                                                <div className="w-5 h-5 rounded-md bg-linear-to-br from-primary to-secondary flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform">
                                                                    <CheckCircle2 size={12} className="stroke-3" />
                                                                </div>
                                                            </div>
                                                            <span className="text-slate-600 font-bold text-sm md:text-base group-hover:text-slate-900 transition-colors uppercase tracking-tight">
                                                                {item}
                                                            </span>
                                                        </motion.div>
                                                    ))}
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            <div className="border border-slate-100 rounded-3xl overflow-hidden bg-slate-50/50">
                                <button 
                                    onClick={() => setExpandedYear(expandedYear === 2 ? 0 : 2)}
                                    className="w-full flex items-center justify-between p-8 bg-white hover:bg-slate-50 transition-colors group"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className={`p-2 rounded-xl transition-colors ${expandedYear === 2 ? 'bg-primary text-white' : 'bg-slate-100 text-slate-400 group-hover:bg-slate-200'}`}>
                                            <ChevronDown className={`w-5 h-5 transition-transform duration-500 ${expandedYear === 2 ? 'rotate-180' : ''}`} />
                                        </div>
                                        <span className="text-2xl font-black text-slate-900 tracking-tighter uppercase">» 2 Year</span>
                                    </div>
                                </button>
                                
                                <AnimatePresence initial={false}>
                                    {expandedYear === 2 && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
                                        >
                                            <div className="p-8 md:p-12 border-t border-slate-100">
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                                                    {curriculumData[activeOutline].year2.map((item, idx) => (
                                                        <motion.div 
                                                            key={idx}
                                                            initial={{ opacity: 0, x: -10 }}
                                                            animate={{ opacity: 1, x: 0 }}
                                                            transition={{ delay: idx * 0.05 }}
                                                            className="flex items-start gap-4 group"
                                                        >
                                                            <div className="mt-1">
                                                                <div className="w-5 h-5 rounded-md bg-linear-to-br from-primary to-secondary flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform">
                                                                    <CheckCircle2 size={12} className="stroke-3" />
                                                                </div>
                                                            </div>
                                                            <span className="text-slate-600 font-bold text-sm md:text-base group-hover:text-slate-900 transition-colors uppercase tracking-tight">
                                                                {item}
                                                            </span>
                                                        </motion.div>
                                                    ))}
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
                       {/* --- WHY CHOOSE INSD --- */}
            <section className="py-24 px-6 md:px-12 lg:px-24 bg-slate-50 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
                
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-center">
                    <div className="w-full lg:w-1/2 space-y-12">
                        <div className="space-y-4 text-center lg:text-left">
                            <span className="text-primary font-black uppercase text-[10px] tracking-[0.4em]">The INSD Advantage</span>
                            <h2 className="text-5xl md:text-7xl font-black text-slate-900 uppercase tracking-tighter leading-none">
                                WHY <br /> <span className="text-slate-300">CHOOSE</span> <br /> INSD?
                            </h2>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {[
                                { title: "15+ Years Legacy", desc: "A national award-winning institution with a proven track record of excellence.", icon: Sparkles },
                                { title: "Global Network", desc: "Placements and collaborations across 30+ countries worldwide.", icon: Globe },
                                { title: "Elite Mentorship", desc: "Learn directly from industry veterans and global design leaders.", icon: Award },
                                { title: "100% Assistance", desc: "Comprehensive career support and placement guidance for every student.", icon: Target },
                            ].map((item, idx) => (
                                <div key={idx} className="space-y-4 group">
                                    <div className="w-14 h-14 rounded-2xl bg-white border border-slate-100 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm relative z-10 mx-auto lg:mx-0">
                                        <item.icon size={28} />
                                    </div>
                                    <div className="space-y-2 text-center lg:text-left">
                                        <h4 className="text-xl font-black text-slate-900 uppercase tracking-tighter">{item.title}</h4>
                                        <p className="text-slate-500 font-bold text-[10px] md:text-xs uppercase leading-relaxed tracking-tight">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2 relative group">
                        <div className="relative aspect-square rounded-[3.5rem] overflow-hidden">
                           <img 
                               src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&q=80&w=800"
                               alt="Why Choose INSD"
                               className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                           />
                           <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
                           <div className="absolute bottom-12 left-12 right-12 p-8 md:p-12 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl">
                               <p className="text-white font-bold text-sm md:text-base leading-relaxed italic text-center">
                                   "INSD focuses on the technical vision and professional networking needed for the global media market. It truly prepared me for my career."
                               </p>
                               <div className="mt-8 flex items-center justify-center gap-4">
                                   <div className="h-px w-8 bg-white/30" />
                                   <span className="text-white/60 text-[10px] font-black uppercase tracking-widest leading-none">ALUMNI 2024</span>
                                   <div className="h-px w-8 bg-white/30" />
                               </div>
                           </div>
                        </div>
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    </div>
                </div>
            </section>
            
            {/* --- CAREER PATHS GRID --- */}
            <section className="py-24 px-6 md:px-12 lg:px-24 bg-white">
                <div className="max-w-7xl mx-auto space-y-12">
                    <div className="space-y-4">
                        <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter uppercase">
                            Career Paths
                        </h2>
                        <p className="text-slate-500 font-bold max-w-2xl">
                            Unlock your potential and pursue diverse career opportunities in Photography with INSD Global.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
                        {[
                            { title: "Fashion Photographer", desc: "Capturing high-style garments and models for global magazine covers and retail brands.", img: "https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?auto=format&fit=crop&q=80&w=800" },
                            { title: "Commercial Lead", desc: "Directing high-impact product and advertising shoots for international corporate clients.", img: "https://images.unsplash.com/photo-1493723843671-1d655e7d98f0?auto=format&fit=crop&q=80&w=800" },
                            { title: "Wedding Specialist", desc: "Documenting timeless emotions and luxury ceremonies with a fine-art storytelling approach.", img: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&q=80&w=800" },
                            { title: "Photojournalist", desc: "Capturing impactful stories and global events for international news and media houses.", img: "https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&q=80&w=800" },
                            { title: "Fine Art Photographer", desc: "Creating evocative visual narratives and limited-edition prints for galleries and collectors.", img: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&q=80&w=800" },
                            { title: "Architecture Photographer", desc: "Specializing in capturing the structural beauty and interior design of luxury properties.", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800" },
                            { title: "Wildlife Photographer", desc: "Documenting the natural world with technical precision and deep patience in the field.", img: "https://images.unsplash.com/photo-1472396961695-1ad7a82efe12?auto=format&fit=crop&q=80&w=800" },
                            { title: "Post-Production Head", desc: "Mastering high-end retouching and digital manipulation for flawless final imagery.", img: "https://images.unsplash.com/photo-1542744095-2ad4870f2941?auto=format&fit=crop&q=80&w=800" },
                            { title: "Visual Consultant", desc: "Advising global brands on visual aesthetic, brand imagery, and photography strategy.", img: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800" },
                        ].map((role, idx) => (
                            <motion.div 
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.05 }}
                                className="relative aspect-square md:aspect-4/3 overflow-hidden group border border-white/10"
                            >
                                <img 
                                    src={role.img} 
                                    alt={role.title} 
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-8 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                    <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-tighter leading-none mb-2">
                                        {role.title.split(' ').map((word, i) => (
                                            <span key={i} className="block">{word}</span>
                                        ))}
                                    </h3>
                                    <p className="text-white/60 text-[10px] md:text-xs font-bold leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                        {role.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- CORE MODULES SHOWCASE --- */}
            <section className="py-24 px-6 md:px-12 lg:px-24 bg-slate-50 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 blur-full rounded-full -translate-y-1/2 translate-x-1/2" />
                
                <div className="max-w-7xl mx-auto space-y-16">
                    <div className="text-center space-y-4">
                        <span className="text-primary font-black uppercase text-[10px] tracking-[0.4em]">Future-Proof Pedagogy</span>
                        <h2 className="text-4xl md:text-7xl font-black text-slate-900 uppercase tracking-tighter leading-none">
                            The Visual <br /> <span className="text-slate-300">Edge</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-32">
                        {[
                            { title: "Lighting Physics", desc: "Understanding the science of light and shadow for world-class high-fashion studio production.", icon: Aperture },
                            { title: "Post-Production", desc: "Advanced retouching and color grading workflows using industry-caliber software stacks.", icon: Image },
                            { title: "Cinematic Vision", desc: "Bridging the gap between static imagery and motion through professional videography basics.", icon: Video },
                        ].map((item, idx) => (
                            <div key={idx} className="group p-10 rounded-[3rem] bg-white border border-slate-100 hover:border-primary/20 transition-all duration-500 hover:shadow-2xl hover:shadow-slate-200/50">
                                <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                                    <item.icon size={32} />
                                </div>
                                <h4 className="text-2xl font-black text-slate-900 uppercase tracking-tighter mb-4">{item.title}</h4>
                                <p className="text-slate-500 font-bold text-sm md:text-base leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    {/* Final CTA Strip */}
                    <div className="relative p-12 md:p-24 bg-slate-900 rounded-[3.5rem] overflow-hidden group">
                        <div className="absolute inset-0 z-0 bg-primary/10 group-hover:bg-primary/20 transition-colors" />
                        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left">
                            <div className="space-y-4">
                                <h3 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter">
                                    Ready to capture your <br /> <span className="text-primary italic">vision?</span>
                                </h3>
                                <p className="text-white/50 font-medium max-w-sm">Join the 2026 session. Limited seats for high-potential visual artists.</p>
                            </div>
                            <button className="px-16 py-6 bg-white text-slate-900 rounded-full font-black uppercase text-xs tracking-widest shadow-2xl hover:bg-primary hover:text-white transition-all transform hover:scale-105">
                                Start Application
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default Photography;
