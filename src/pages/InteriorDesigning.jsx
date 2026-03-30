import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    CheckCircle2, 
    ChevronDown, 
    Home, 
    Layers, 
    Maximize, 
    Compass, 
    ArrowRight,
    Sparkles,
    Globe,
    Award,
    Target,
    Download,
    Palette,
    Briefcase,
    Zap,
    Box,
    Camera,
    PenTool,
    Pencil
} from 'lucide-react';
import SEO from '../components/SEO';
import Footer from '../components/Footer';
import { useAdmissionModal } from '../context/AdmissionModalContext';

const InteriorDesigning = () => {
    const [expandedSemester, setExpandedSemester] = useState(0);
    const { openAdmissionModal } = useAdmissionModal();

    const fullCurriculum = [
        {
            semester: "Semester 1",
            credits: "20 Credits",
            subjects: ["Basics of Drafting", "Basics of Graphics", "Introduction of Interior designing", "History of architecture", "Basics of furniture designing", "Market survey & Building construction", "Grooming & communication skills"]
        },
        {
            semester: "Semester 2",
            credits: "24 Credits",
            subjects: ["Application of Drafting", "Application of colors", "Principle of Interior designing", "History of architecture", "Glossary of furniture", "Building construction"]
        },
        {
            semester: "Semester 3",
            credits: "20 Credits",
            subjects: ["Building technology", "Life space planning and interior designing", "Design graphics & display", "History of architecture", "Furniture & furnishings", "Portfolio development"]
        },
        {
            semester: "Semester 4",
            credits: "20 Credits",
            subjects: ["Building services & estimation", "Urban space planning", "Elements of Interior designing", "Theory of architecture", "Significance of Furniture", "Market Dynamics", "Project work"]
        },
        {
            semester: "Semester 5",
            credits: "22 Credits",
            subjects: ["Interior and exterior treatments", "Furniture, furnishings and fittings", "Art and graphics in interior designing", "Entrepreneurship development", "Computer aided design", "Building construction – Part 3", "Interior designing projects – Part 1"]
        },
        {
            semester: "Semester 6",
            credits: "30 Credits",
            subjects: ["Interior and exterior treatments", "Furniture, furnishings and fittings", "Art and graphics in interior designing", "Entrepreneurship development", "Computer aided design", "Building construction – Part 3", "Interior designing projects – Part 1"]
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
        { title: "Commercial Designer", desc: "Leading the creative vision for high-impact office spaces, retail showrooms, and corporate headquarters.", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800" },
        { title: "Residential Designer", desc: "Crafting personalized sanctuary spaces and luxury home environments centered on human comfort.", img: "https://images.unsplash.com/photo-1618221195710-dd6b41faeaa6?auto=format&fit=crop&q=80&w=800" },
        { title: "Institutional Designer", desc: "Designing purposeful environments for education, healthcare, and public infrastructure.", img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=800" },
        { title: "Exhibition Designer", desc: "Creating immersive temporary spaces for galleries, trade fairs, and global design showcases.", img: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=800" },
        { title: "Furniture Stylist", desc: "Designing functional art pieces that define the character and aesthetic of modern interiors.", img: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&q=80&w=800" },
        { title: "Lighting Specialist", desc: "Mastering the science and art of illumination to transform spatial perception and mood.", img: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&q=80&w=800" }
    ];

    return (
        <div className="bg-white min-h-screen font-sans selection:bg-primary selection:text-white">
            <SEO 
                title="Bachelors in Interior Design | Top Institute for Spatial Design at INSD"
                description="Study Bachelors in Interior Design at INSD. 3 or 4-year UGC accredited degree specializing in residential, commercial, and sustainable design."
                keywords="bachelors in interior design, interior design degree UGC, spatial design institute, INSD interior designing, best design colleges in India"
            />

            {/* --- HERO SECTION --- */}
            <section className="relative h-[70vh] md:h-[80vh] flex items-center justify-center text-center px-6 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img 
                        src="https://ik.imagekit.io/fmldynl4j4/Untitled%20folder/Copy%20of%20ID%20.png" 
                        alt="Bachelors in Interior Design" 
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
                            Bachelors in <br /><span className="text-primary italic">Interior Design</span>
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
            <section className="py-24 px-6 md:px-12 lg:px-24 bg-white relative overflow-hidden">
                <div className="max-w-5xl mx-auto text-center space-y-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <h2 className="text-3xl md:text-6xl font-black text-slate-900 uppercase tracking-tighter leading-tight">
                            Design for <span className="text-primary italic">Human Needs</span>
                        </h2>
                        <p className="text-lg md:text-2xl text-slate-500 font-medium leading-relaxed font-outfit uppercase">
                            Your creativity and professional craft, creative expression and problem-solving skills will grow at INSD as you explore interior design as a way of addressing social challenges.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left py-12">
                        <div className="p-10 rounded-[3rem] bg-slate-50 border border-slate-100 flex flex-col justify-between">
                            <Maximize className="text-primary mb-6" size={40} />
                            <p className="text-slate-600 font-bold text-sm md:text-base leading-relaxed uppercase">
                                You will explore how scale, light, colour, materials, and texture affect human reactions as you consider the social implications of design.
                            </p>
                        </div>
                        <div className="p-10 rounded-[3rem] bg-slate-900 text-white flex flex-col justify-between">
                            <Target className="text-primary mb-6" size={40} />
                            <p className="text-white/80 font-bold text-sm md:text-base leading-relaxed uppercase">
                                Gain experience designing for a range of interiors: from homes and hospitals to hotels and large-scale commercial spaces.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- PROFESSIONAL SKILLS --- */}
            <section className="py-24 px-6 md:px-12 lg:px-24 bg-slate-50 relative overflow-hidden">
                 <div className="max-w-7xl mx-auto space-y-16">
                    <div className="text-center md:text-left space-y-4">
                        <span className="text-primary font-black uppercase text-[10px] tracking-[0.4em]">Integrated Skills</span>
                        <h2 className="text-4xl md:text-7xl font-black text-slate-900 uppercase tracking-tighter leading-none">
                            Professional <br /> <span className="text-slate-300">Craft</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { title: "Sketching", desc: "Mastering the art of hand-drawn spatial concepts and perspectives.", icon: Pencil },
                            { title: "3D Digital Platforms", desc: "Architecting flawless spatial environments with industry-standard software.", icon: Box },
                            { title: "Photography", desc: "Documenting spatial narratives with professional architectural photography.", icon: Camera },
                            { title: "Model-making", desc: "Transforming 2D blueprints into tangible 3D scale models.", icon: Layers },
                            { title: "Collage", desc: "Synthesizing textures and materials into cohesive design boards.", icon: Palette },
                            { title: "Drafting", desc: "Technical precision in spatial mapping and blueprints.", icon: PenTool },
                        ].map((skill, idx) => (
                            <div key={idx} className="group p-8 bg-white rounded-[3rem] border border-slate-100 transition-all duration-500 hover:shadow-2xl hover:shadow-slate-200/50">
                                <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                                    <skill.icon size={28} />
                                </div>
                                <h4 className="text-xl font-black text-slate-900 uppercase tracking-tighter mb-2">{skill.title}</h4>
                                <p className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-tight leading-relaxed">{skill.desc}</p>
                            </div>
                        ))}
                    </div>
                 </div>
            </section>

            {/* --- ACADEMIC ROADMAP --- */}
            <section className="py-24 px-6 md:px-12 lg:px-24 bg-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto space-y-16">
                    <div className="text-center md:text-left space-y-4">
                        <span className="text-primary font-black uppercase text-[10px] tracking-[0.4em]">Academic Roadmap</span>
                        <h2 className="text-4xl md:text-7xl font-black text-slate-900 uppercase tracking-tighter leading-none">
                            Course <br /> <span className="text-slate-300">Structure</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                        {/* Semester Selectors */}
                        <div className="lg:col-span-4 space-y-3">
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
                                    <div className="flex items-center justify-between">
                                        <div className="flex flex-col">
                                            <span className="text-[10px] font-black uppercase tracking-widest opacity-60 mb-1">{sem.credits}</span>
                                            <span className="text-xl font-black uppercase tracking-tighter">{sem.semester}</span>
                                        </div>
                                        <ArrowRight size={18} className={`transition-transform ${expandedSemester === idx ? 'rotate-0 text-primary' : '-rotate-45'}`} />
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
                                    className="bg-slate-50 rounded-[3.5rem] p-8 md:p-16 border border-slate-100 min-h-[500px] relative overflow-hidden"
                                >
                                    <div className="absolute top-0 right-0 p-12 text-slate-200/40 pointer-events-none">
                                        <span className="text-[12rem] font-black leading-none uppercase tracking-tighter">
                                            {expandedSemester + 1}
                                        </span>
                                    </div>

                                    <div className="relative z-10 space-y-12">
                                        <div className="space-y-2">
                                            <h3 className="text-4xl font-black text-slate-900 uppercase tracking-tighter">
                                                {fullCurriculum[expandedSemester].semester} <span className="text-primary italic text-3xl">Detail</span>
                                            </h3>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {fullCurriculum[expandedSemester].subjects.map((subject, sIdx) => (
                                                <motion.div
                                                    key={sIdx}
                                                    initial={{ opacity: 0, x: -10 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: sIdx * 0.05 }}
                                                    className="flex items-center gap-4 bg-white p-5 rounded-2xl border border-slate-200/50 hover:border-primary/20 transition-all group"
                                                >
                                                    <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                                                        <CheckCircle2 size={16} />
                                                    </div>
                                                    <span className="text-sm font-black text-slate-700 uppercase tracking-tight group-hover:text-slate-900 transition-colors">
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
                    <div className="relative p-12 md:p-24 bg-slate-50 border border-slate-100 rounded-[3.5rem] overflow-hidden group shadow-2xl shadow-slate-200/50">
                        <div className="absolute inset-0 z-0 bg-primary/5 group-hover:bg-primary/10 transition-colors" />
                        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left">
                            <div className="space-y-4">
                                <h3 className="text-3xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter">
                                    Ready to design the <br /> <span className="text-primary italic">future?</span>
                                </h3>
                                <p className="text-slate-400 font-medium max-w-sm">Join the 2026 session. Limited seats for high-potential spatial visionaries.</p>
                            </div>
                            <button 
                                onClick={openAdmissionModal}
                                className="px-16 py-6 bg-slate-900 text-white rounded-full font-black uppercase text-xs tracking-widest shadow-2xl hover:bg-primary transition-all transform hover:scale-105"
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

export default InteriorDesigning;
