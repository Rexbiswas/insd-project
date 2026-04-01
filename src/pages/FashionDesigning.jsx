import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    CheckCircle2, 
    ChevronDown, 
    Sparkles, 
    Palette, 
    Layers, 
    Scissors, 
    BookOpen,
    ArrowRight,
    Globe,
    Award,
    Target,
    Download,
    Users,
    Briefcase,
    Milestone,
    Zap
} from 'lucide-react';
import SEO from '../components/SEO';
import Footer from '../components/Footer';
import { useAdmissionModal } from '../context/AdmissionModalContext';

const FashionDesigning = () => {
    // Current semester being viewed in the roadmap

    const careerPaths = [
        { title: "Designer/Assistant Designer", img: "https://images.pexels.com/photos/3735169/pexels-photo-3735169.jpeg?auto=compress&cs=tinysrgb&w=400" },
        { title: "Pattern Designer", img: "https://images.pexels.com/photos/4614214/pexels-photo-4614214.jpeg?auto=compress&cs=tinysrgb&w=400" },
        { title: "Fashion Illustrator", img: "https://images.pexels.com/photos/5692271/pexels-photo-5692271.jpeg?auto=compress&cs=tinysrgb&w=400" },
        { title: "Fashion Entrepreneur", img: "https://images.pexels.com/photos/4960250/pexels-photo-4960250.jpeg?auto=compress&cs=tinysrgb&w=400" },
        { title: "Costume designer", img: "https://images.pexels.com/photos/4580749/pexels-photo-4580749.jpeg?auto=compress&cs=tinysrgb&w=400" },
        { title: "Fashion consultant", img: "https://images.pexels.com/photos/3965548/pexels-photo-3965548.jpeg?auto=compress&cs=tinysrgb&w=400" },
        { title: "Personal stylist", img: "https://images.pexels.com/photos/6069554/pexels-photo-6069554.jpeg?auto=compress&cs=tinysrgb&w=400" },
        { title: "Technical designer", img: "https://images.pexels.com/photos/3823488/pexels-photo-3823488.jpeg?auto=compress&cs=tinysrgb&w=400" },
        { title: "Production pattern maker", img: "https://images.pexels.com/photos/4614165/pexels-photo-4614165.jpeg?auto=compress&cs=tinysrgb&w=400" },
        { title: "Fashion coordinator", img: "https://images.pexels.com/photos/3735153/pexels-photo-3735153.jpeg?auto=compress&cs=tinysrgb&w=400" }
    ];

    const practitioners = [
        { name: "Christian Guellerin", desc: "Executive Director L’Ecole de Design Nantes Atlantique", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400" },
        { name: "Sophie Pereira", desc: "Image Coach, Paris", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400" },
        { name: "Jean Doucet", desc: "Designer", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400" },
        { name: "Shikha Sehejpal", desc: "Expert in Design Ideation with 16+ years of experience", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400" },
        { name: "Anu Sharma", desc: "Ex-HOD Amity University; PhD in Textile Design", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400" }
    ];

    const technicalSkills = [
        { title: "Design development", desc: "Translate your inspiration into wearable art through rigorous design research.", icon: Palette },
        { title: "Planning", desc: "Master the architecture of a fashion collection, from range planning to delivery.", icon: Milestone },
        { title: "Pattern cutting", desc: "Transform 2D sketches into 3D forms using advanced flat-pattern and draping skills.", icon: Scissors },
        { title: "Garment construction", desc: "Industrial-grade stitching and finishing techniques for professional results.", icon: Layers },
        { title: "Tailoring", desc: "The pinnacle of fashioning: master the art of bespoke suit and jacket construction.", icon: Briefcase }
    ];

    const fullCurriculum = [
        {
            semester: "Semester 1",
            credits: "20 Credits",
            subjects: ["Foundation Art", "Principle of fashion design", "Intro of Pattern making & GMT", "Fashion & Apparel design fundamental", "Practical -1", "Portfolio Making", "Practical-2", "Pattern Making & Grading"]
        },
        {
            semester: "Semester 2",
            credits: "20 Credits",
            subjects: ["History of the western world fashion", "Introduction to textile", "Grooming & Communication Skills", "Fashion a design foundation", "Creative yarn craft", "Basic of computer Application", "Practical"]
        },
        {
            semester: "Semester 3",
            credits: "20 Credits",
            subjects: ["Intro to fashion illustration", "Sewing Technology", "Introduction to draping", "Creative Embroidery", "Practical -1", "Inspirations on Project", "Practical-2", "Pattern Making & Sewing"]
        },
        {
            semester: "Semester 4",
            credits: "20 Credits",
            subjects: ["Garment Construction", "Sewing Technology part-ii", "Textile science processing", "Advance Computer", "History of Indian Fashion", "Market Dynamics", "Practical-1", "Portfolio Development"]
        },
        {
            semester: "Semester 5",
            credits: "24 Credits",
            subjects: ["Fabric Testing a quality control", "Fashion Analysis", "Vintage costumes", "History of western world fashion", "Market Dynamics", "Practical-1", "Mood board’s and fashion forecasting", "Practical -2"]
        },
        {
            semester: "Semester 6",
            credits: "20 Credits",
            subjects: ["Industry Project", "Visual Merchandising", "Fashion Accessory", "Advance Fashion Illustration", "Production Management", "Quality Control", "Entrepreneurship"]
        },
        {
            semester: "Semester 7",
            credits: "24 Credits",
            subjects: ["Industry Projects", "Entrepreneurship"]
        },
        {
            semester: "Semester 8",
            credits: "20 Credits",
            subjects: ["Internship & On the Job Training", "Entrepreneurship"]
        }
    ];

    const [expandedSemester, setExpandedSemester] = useState(0);
    const { openAdmissionModal } = useAdmissionModal();

    return (
        <div className="bg-white min-h-screen font-sans selection:bg-primary selection:text-white">
            <SEO 
                title="Bachelors in Fashion Design | Top Institute for Design Careers at INSD"
                description="Study Bachelors in Fashion Design at INSD. 3 or 4-year UGC accredited degree with industry training. Launch your career as a fashion designer, stylist, or entrepreneur."
                keywords="bachelors in fashion design, fashion design degree UGC, fashion design careers, INSD fashion design, best design institute in India"
            />

            {/* --- HERO SECTION --- */}
            <section className="relative h-[70vh] md:h-[80vh] flex items-center justify-center text-center px-6 overflow-hidden">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <img 
                        src="https://t3.ftcdn.net/jpg/01/85/83/48/360_F_185834867_qisP0T3zX8a7rflZFKlbmj3i3BYLVUGC.jpg" 
                        alt="Bachelors in Fashion Design" 
                        className="w-full h-full object-cover scale-100"
                    />
                    <div className="absolute inset-0 bg-black/70" />
                </div>

                <div className="relative z-10 max-w-6xl mx-auto space-y-8 flex flex-col items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="text-center"
                    >
                        
                        
                        <h1 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none mb-8">
                            Bachelors in <br /><span className="text-primary italic">Fashion Design</span>
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
                                onClick={() => openAdmissionModal()}
                                className="w-full sm:w-auto px-16 py-6 bg-primary text-white rounded-full font-black uppercase text-xs tracking-widest hover:bg-white hover:text-slate-900 transition-all transform hover:scale-105 shadow-2xl shadow-primary/20"
                            >
                                Apply Now 2026
                            </button>
                            <button 
                                onClick={() => openAdmissionModal()}
                                className="w-full sm:w-auto flex items-center justify-center gap-3 px-12 py-6 bg-white/5 backdrop-blur-md border border-white/20 text-white rounded-full font-black uppercase text-xs tracking-widest hover:bg-white/10 transition-all font-outfit"
                            >
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
                            Elevate Your <span className="text-primary italic">Creative Vision</span>
                        </h2>
                        <p className="text-lg md:text-2xl text-slate-500 font-medium leading-relaxed font-outfit uppercase">
                            Let your creativity take flight at INSD as you learn essential creative design and practical skills demanded by the global fashion industry and shape your future career.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left py-12">
                        <div className="p-10 rounded-[3rem] bg-slate-50 border border-slate-100 flex flex-col justify-between">
                            <Zap className="text-primary mb-6" size={40} />
                            <p className="text-slate-600 font-bold text-sm md:text-base leading-relaxed uppercase">
                                We’ll encourage you to innovate as well as to understand historic and contemporary trends in fashion.
                            </p>
                        </div>
                        <div className="p-10 rounded-[3rem] bg-slate-900 text-white flex flex-col justify-between">
                            <Target className="text-primary mb-6" size={40} />
                            <p className="text-white/80 font-bold text-sm md:text-base leading-relaxed uppercase">
                                By the time you graduate with our highly-regarded qualification, you’ll be equipped with the right design and manufacturing skills to take your unique creative vision to the global stage.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- CURRICULUM SECTION --- */}
            <section className="py-24 px-6 md:px-12 lg:px-24 bg-white">
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
                                        <div className={`p-2 rounded-xl border transition-colors ${expandedSemester === idx ? 'bg-primary/20 border-primary/30 text-primary' : 'bg-slate-50 border-slate-100 text-slate-300'}`}>
                                            <ArrowRight size={18} className={`transition-transform ${expandedSemester === idx ? 'rotate-0' : '-rotate-45'}`} />
                                        </div>
                                    </div>
                                </button>
                            ))}
                        </div>

                        {/* Subject Display */}
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
                                    {/* Abstract Background Design */}
                                    <div className="absolute top-0 right-0 p-12 text-slate-200/40 pointer-events-none">
                                        <span className="text-[12rem] font-black leading-none uppercase tracking-tighter">
                                            {expandedSemester + 1}
                                        </span>
                                    </div>

                                    <div className="relative z-10 space-y-12">
                                        <div className="space-y-2">
                                            <h3 className="text-4xl font-black text-slate-900 uppercase tracking-tighter">
                                                {fullCurriculum[expandedSemester].semester} <span className="text-primary italic">Detail</span>
                                            </h3>
                                            <p className="text-slate-400 font-bold uppercase text-xs tracking-widest leading-relaxed">
                                                Curriculum focused on {fullCurriculum[expandedSemester].subjects.length} core subject areas for this term.
                                            </p>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
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
            <section className="py-24 px-6 md:px-12 lg:px-24 bg-slate-50 relative overflow-hidden">
                <div className="max-w-7xl mx-auto space-y-16">
                    <div className="text-center md:text-left space-y-4">
                        <span className="text-primary font-black uppercase text-[10px] tracking-[0.4em]">Expert Led Training</span>
                        <h2 className="text-4xl md:text-7xl font-black text-slate-900 uppercase tracking-tighter leading-none">
                            Learn from <br /> <span className="text-slate-300">the Masters</span>
                        </h2>
                        <p className="max-w-2xl text-slate-500 font-bold uppercase text-xs md:text-sm tracking-tight leading-relaxed pt-4">
                            Your insight into how the industry works will grow through guest lectures, seminars and workshops with acclaimed practitioners, stylists and academics.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {practitioners.map((mentor, idx) => (
                            <motion.div 
                                key={idx}
                                whileHover={{ y: -10 }}
                                className="group bg-white p-8 rounded-[3rem] border border-slate-100 shadow-sm transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5"
                            >
                                <div className="flex items-center gap-6 mb-8">
                                    <div className="w-20 h-20 rounded-2xl overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                                        <img src={mentor.img} alt={mentor.name} className="w-full h-full object-cover" />
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="text-xl font-black text-slate-900 uppercase tracking-tighter leading-none mb-2">{mentor.name}</h4>
                                        <div className="h-0.5 w-8 bg-primary/20 group-hover:w-full transition-all duration-500" />
                                    </div>
                                </div>
                                <p className="text-[10px] md:text-xs font-black text-slate-400 uppercase tracking-[0.1em] leading-relaxed">
                                    {mentor.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- TECHNICAL SKILLS --- */}
            <section className="py-24 px-6 md:px-12 lg:px-24 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col lg:flex-row gap-20 items-center">
                        <div className="w-full lg:w-1/2 space-y-10">
                            <div className="space-y-4">
                                <span className="text-primary font-black uppercase text-[10px] tracking-[0.4em]">Core Competencies</span>
                                <h2 className="text-5xl md:text-7xl font-black text-slate-900 uppercase tracking-tighter leading-none">
                                    Technical <br /> <span className="text-slate-300">Excellence</span>
                                </h2>
                                <p className="text-slate-500 font-bold text-sm md:text-base pt-4">
                                    You’ll develop essential technical skills to support your design thinking across the entire fashion value chain.
                                </p>
                            </div>
                            
                            <div className="space-y-4">
                                {technicalSkills.map((skill, idx) => (
                                    <div key={idx} className="group p-6 rounded-2xl border border-slate-50 hover:border-primary/20 hover:bg-slate-50/50 transition-all duration-300 flex items-center gap-6">
                                        <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                                            <skill.icon size={24} />
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="font-black text-slate-900 uppercase tracking-tight group-hover:text-primary transition-colors">{skill.title}</h4>
                                            <p className="text-[10px] md:text-xs font-bold text-slate-400 uppercase">{skill.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="w-full lg:w-1/2 relative bg-slate-100 rounded-[3.5rem] aspect-square overflow-hidden group">
                           <img 
                               src="https://images.unsplash.com/photo-1551232864-3f0890e580d9?auto=format&fit=crop&q=80&w=1000" 
                               className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                               alt="Fashion Skills"
                           />
                           <div className="absolute inset-0 bg-linear-to-t from-primary/60 to-transparent mix-blend-multiply opacity-30" />
                        </div>
                    </div>
                </div>
            </section>

            {/* --- CAREER PATHS --- */}
            <section className="py-24 px-6 md:px-12 lg:px-24 bg-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto space-y-16 relative z-10">
                    <div className="text-center space-y-4">
                        <span className="text-primary font-black uppercase text-[10px] tracking-[0.4em]">Future Outlook</span>
                        <h2 className="text-4xl md:text-7xl font-black text-slate-900 uppercase tracking-tighter leading-none">
                            Career <span className="text-slate-300">Landscapes</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4">
                        {careerPaths.map((path, idx) => (
                            <motion.div 
                                key={idx}
                                whileHover={{ scale: 1.02, y: -5 }}
                                className="relative aspect-4/5 md:aspect-square overflow-hidden rounded-[2.5rem] group border border-slate-100 shadow-sm"
                            >
                                <img 
                                    src={path.img} 
                                    alt={path.title} 
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                                
                                <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col items-center text-center">
                                    <Briefcase className="text-primary mb-3 scale-75 md:scale-100 group-hover:animate-pulse" size={20} />
                                    <span className="text-[10px] md:text-xs font-black text-white leading-tight uppercase tracking-wider group-hover:text-primary transition-colors">
                                        {path.title}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Final CTA Strip */}
                    <div className="relative p-12 md:p-20 bg-slate-50 border border-slate-100 rounded-[3.5rem] overflow-hidden group mt-20 shadow-2xl shadow-slate-200/50">
                        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left">
                            <div className="space-y-4">
                                <h3 className="text-3xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter">
                                    Ready to set the <br /> <span className="text-primary italic text-6xl">next trend?</span>
                                </h3>
                                <p className="text-slate-400 font-bold max-w-sm uppercase text-xs">Join the 2026 session. Limited seats for high-potential creative visionaries.</p>
                            </div>
                            <div className="flex flex-col gap-4">
                                <button 
                                    onClick={() => openAdmissionModal()}
                                    className="px-16 py-6 bg-slate-900 text-white rounded-full font-black uppercase text-xs tracking-[0.2em] shadow-2xl hover:bg-primary transition-all transform hover:scale-105"
                                >
                                    Apply Now 2026
                                </button>
                                <span className="text-slate-300 text-[10px] font-black uppercase tracking-widest text-center">Batch Starting July 2026</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default FashionDesigning;
