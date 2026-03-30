import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    CheckCircle2, 
    MousePointer, 
    Type, 
    Layout, 
    Sparkles, 
    ArrowRight,
    Palette,
    Globe,
    Award,
    Target,
    Download,
    Layers,
    Monitor,
    Briefcase,
    Zap,
    Box,
    Camera
} from 'lucide-react';
import SEO from '../components/SEO';
import Footer from '../components/Footer';
import { useAdmissionModal } from '../context/AdmissionModalContext';

const GraphicDesigning = () => {
    const [expandedSemester, setExpandedSemester] = useState(0);
    const { openAdmissionModal } = useAdmissionModal();

    const fullCurriculum = [
        {
            semester: "Semester 1",
            credits: "20 Credits",
            subjects: ["Fundamentals Of Design & Drawing", "Basic Design", "Idea Visualization", "Typography", "Color Theory", "Illustration", "Graphic Design", "Image Editing", "Page Layout Design"]
        },
        {
            semester: "Semester 2",
            credits: "20 Credits",
            subjects: ["Branding And Advertising", "Composition", "Photography", "Still Life", "Packaging – Product", "Desktop / Digital Publishing"]
        },
        {
            semester: "Semester 3",
            credits: "22 Credits",
            subjects: ["Interface Design/ Web Design", "Media Strategy", "Language And Practice Of Media Arts", "Advance Multiplatform Design", "User Interface Experience"]
        },
        {
            semester: "Semester 4",
            credits: "20 Credits",
            subjects: ["Fundamentals Of 2d Animation", "The Art Of Digital Storyboarding", "Digital 2d Animation", "Interactive Presentation", "Video Editing", "Sound Editing"]
        },
        {
            semester: "Semester 5",
            credits: "22 Credits",
            subjects: ["Client & Case Study", "Full Branding Project On Existing Company"]
        },
        {
            semester: "Semester 6",
            credits: "80 Credits", // Adjusted based on context
            subjects: ["Group Project"]
        },
        {
            semester: "Semester 7",
            credits: "24 Credits",
            subjects: ["Industry Projects", "Entrepreneurship"]
        },
        {
            semester: "Semester 8",
            credits: "20 Credits",
            subjects: ["Internship & On the Job Training", "Market Dynamics"]
        }
    ];

    const careerPaths = [
        { title: "Brand Identity Designer", desc: "Crafting unique visual identities, logos, and brand guidelines for global businesses.", img: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=800" },
        { title: "UI/UX Designer", desc: "Designing intuitive digital interfaces and seamless user experiences for apps and web.", img: "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?auto=format&fit=crop&q=80&w=800" },
        { title: "Art Director", desc: "Leading the creative vision for advertising campaigns, editorial shoots, and digital media.", img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800" },
        { title: "Package Designer", desc: "Creating impactful packaging solutions that define product presence on shelves.", img: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=800" },
        { title: "Motion Artist", desc: "Bringing static designs to life through animation for film and digital media.", img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800" },
        { title: "Web Designer", desc: "Architecting responsive websites that blend aesthetics with technical utility.", img: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=800" }
    ];

    return (
        <div className="bg-white min-h-screen font-sans selection:bg-primary selection:text-white">
            <SEO 
                title="Bachelors in Graphic Design | Top Design Institute for Careers at INSD"
                description="Study Bachelors in Graphic Design at INSD. 3 or 4-year UGC accredited degree specializing in branding, packaging, and digital communication."
                keywords="bachelors in graphic design, graphic design degree UGC, branding course, web design institute, INSD graphic design"
            />

            {/* --- HERO SECTION --- */}
            <section className="relative h-[70vh] md:h-[80vh] flex items-center justify-center text-center px-6 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img 
                        src="https://ik.imagekit.io/fmldynl4j4/Untitled%20folder/Copy%20of%20GD%20.png" 
                        alt="Bachelors in Graphic Design" 
                        className="w-full h-full object-cover scale-105"
                    />
                    <div className="absolute inset-0 bg-black/70 backdrop-blur-[1px]" />
                </div>

                <div className="relative z-10 max-w-6xl mx-auto space-y-8 flex flex-col items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="text-center"
                    >
                        <h1 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none mb-8">
                            Bachelors in <br /><span className="text-primary italic">Graphic Design</span>
                        </h1>

                        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-12 mb-12">
                            <div className="flex flex-col items-center">
                                <span className="text-white/40 font-black text-[9px] md:text-[10px] uppercase tracking-[0.2em] mb-1">Course Length</span>
                                <span className="text-white font-black text-xs md:text-lg">3 or 4 Years Option</span>
                            </div>
                            <div className="w-px h-10 bg-white/10 hidden md:block" />
                            <div className="flex flex-col items-center">
                                <span className="text-white/40 font-black text-[9px] md:text-[10px] uppercase tracking-[0.2em] mb-1">Eligibility</span>
                                <span className="text-white font-black text-xs md:text-lg">10+2 Any Stream</span>
                            </div>
                            <div className="w-px h-10 bg-white/10 hidden md:block" />
                            <div className="flex flex-col items-center text-center">
                                <span className="text-white/40 font-black text-[9px] md:text-[10px] uppercase tracking-[0.2em] mb-1">Accreditation</span>
                                <span className="text-white font-black text-xs md:text-lg">Bachelors accredited by UGC</span>
                            </div>
                        </div>
                        
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
                            <button 
                                onClick={openAdmissionModal}
                                className="w-full sm:w-auto px-16 py-6 bg-primary text-white rounded-full font-black uppercase text-xs tracking-widest hover:bg-white hover:text-slate-900 transition-all transform hover:scale-105 shadow-2xl shadow-primary/20"
                            >
                                Apply Now 2026
                            </button>
                            <button className="w-full sm:w-auto flex items-center justify-center gap-3 px-12 py-6 bg-white/5 backdrop-blur-md border border-white/20 text-white rounded-full font-black uppercase text-xs tracking-widest hover:bg-white/10 transition-all font-outfit">
                                Download Brochure
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* --- INTRO SECTION --- */}
            <section className="py-24 px-6 md:px-12 lg:px-24 bg-white relative overflow-hidden text-center">
                <div className="max-w-5xl mx-auto space-y-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <h2 className="text-3xl md:text-6xl font-black text-slate-900 uppercase tracking-tighter leading-tight">
                            Design Ideas <span className="text-primary italic">That Work</span>
                        </h2>
                        <p className="text-lg md:text-2xl text-slate-500 font-medium leading-relaxed font-outfit uppercase">
                            You will be inspired to create innovative answers to branding, packaging and promotional design questions facing businesses in INSD’s internationally-renowned Graphic Design degree.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left py-12">
                        <div className="p-10 rounded-[3rem] bg-slate-50 border border-slate-100">
                             <p className="text-slate-600 font-bold text-sm md:text-base leading-relaxed uppercase">
                                Our course has a strong emphasis on commercial work and you’ll be challenged to generate high quality creative solutions for global brands.
                             </p>
                        </div>
                        <div className="p-10 rounded-[3rem] bg-slate-900 text-white flex flex-col justify-between">
                            <p className="text-white/80 font-bold text-sm md:text-base leading-relaxed uppercase">
                                You’ll follow a proven path that has led to INSD graduates securing roles at some of the top design firms and studios worldwide.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- ACADEMIC ROADMAP --- */}
            <section className="py-24 px-6 md:px-12 lg:px-24 bg-slate-50 relative overflow-hidden">
                <div className="max-w-7xl mx-auto space-y-16">
                    <div className="text-center md:text-left space-y-4">
                        <span className="text-primary font-black uppercase text-[10px] tracking-[0.4em]">Integrated Learning</span>
                        <h2 className="text-4xl md:text-7xl font-black text-slate-900 uppercase tracking-tighter leading-none">
                            Academic <br /> <span className="text-slate-300">Milestones</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                        {/* Semester Selectors */}
                        <div className="lg:col-span-4 grid grid-cols-2 lg:grid-cols-1 gap-3">
                            {fullCurriculum.map((sem, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setExpandedSemester(idx)}
                                    className={`w-full p-6 rounded-3xl text-left transition-all duration-300 border ${
                                        expandedSemester === idx 
                                        ? 'bg-slate-900 border-slate-900 text-white shadow-2xl scale-[1.02]' 
                                        : 'bg-white border-slate-100 text-slate-400 hover:border-slate-300 hover:text-slate-600'
                                    }`}
                                >
                                    <div className="flex flex-col">
                                        <span className="text-[9px] font-black uppercase tracking-widest opacity-60 mb-1">{sem.credits}</span>
                                        <span className="text-sm md:text-lg font-black uppercase tracking-tighter leading-none">{sem.semester}</span>
                                    </div>
                                </button>
                            ))}
                        </div>

                        {/* Subject Panel */}
                        <div className="lg:col-span-8">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={expandedSemester}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.4 }}
                                    className="bg-white rounded-[3.5rem] p-8 md:p-16 border border-slate-100 min-h-[500px] relative overflow-hidden shadow-2xl shadow-slate-200/20"
                                >
                                    <div className="absolute top-0 right-0 p-12 text-slate-100 pointer-events-none">
                                        <span className="text-[12rem] font-black leading-none uppercase tracking-tighter">
                                            {expandedSemester + 1}
                                        </span>
                                    </div>

                                    <div className="relative z-10 space-y-12">
                                        <div className="space-y-4 text-center md:text-left">
                                            <h3 className="text-3xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter">
                                                {fullCurriculum[expandedSemester].semester} <span className="text-primary italic">Focus</span>
                                            </h3>
                                            <div className="h-1 w-20 bg-primary mx-auto md:mx-0 rounded-full" />
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {fullCurriculum[expandedSemester].subjects.map((subject, sIdx) => (
                                                <motion.div
                                                    key={sIdx}
                                                    initial={{ opacity: 0, scale: 0.9 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    transition={{ delay: sIdx * 0.05 }}
                                                    className="flex items-center gap-4 bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:border-primary/20 transition-all group"
                                                >
                                                    <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-primary shadow-sm group-hover:bg-primary group-hover:text-white transition-all">
                                                        <CheckCircle2 size={16} />
                                                    </div>
                                                    <span className="text-xs md:text-sm font-black text-slate-700 uppercase tracking-tight group-hover:text-slate-900 transition-colors">
                                                        {subject}
                                                    </span>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- CAREER PATHS --- */}
            <section className="py-24 px-6 md:px-12 lg:px-24 bg-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto space-y-16">
                    <div className="text-center space-y-4">
                        <span className="text-primary font-black uppercase text-[10px] tracking-[0.4em]">Future Outlook</span>
                        <h2 className="text-4xl md:text-7xl font-black text-slate-900 uppercase tracking-tighter leading-none">
                            Career <span className="text-slate-300">Architecture</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {careerPaths.map((role, idx) => (
                            <motion.div 
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="relative aspect-4/5 rounded-[3.5rem] overflow-hidden group border border-slate-100"
                            >
                                <img src={role.img} alt={role.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <h3 className="text-2xl font-black text-white uppercase tracking-tighter leading-none mb-3">
                                        {role.title}
                                    </h3>
                                    <p className="text-white/60 text-xs font-bold leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 uppercase tracking-tight">
                                        {role.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- FINAL CTA --- */}
            <section className="py-24 px-6 md:px-12 lg:px-24 bg-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="relative p-12 md:p-24 bg-slate-900 rounded-[3.5rem] overflow-hidden group">
                        <div className="absolute inset-0 z-0 bg-primary/10 group-hover:bg-primary/20 transition-colors" />
                        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left">
                            <div className="space-y-4">
                                <h3 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter">
                                    Ready to set the <br /> <span className="text-primary italic">next trend?</span>
                                </h3>
                                <p className="text-white/50 font-medium max-w-sm">Join the 2026 session. Limited seats for high-potential creative visionaries.</p>
                            </div>
                            <button 
                                onClick={openAdmissionModal}
                                className="px-16 py-6 bg-white text-slate-900 rounded-full font-black uppercase text-xs tracking-widest shadow-2xl hover:bg-primary hover:text-white transition-all transform hover:scale-105"
                            >
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

export default GraphicDesigning;
