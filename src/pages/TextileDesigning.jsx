import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    CheckCircle2, 
    ChevronDown, 
    Layers, 
    Wind, 
    Palette, 
    ArrowRight,
    Globe,
    Award,
    Target,
    Download,
    Sparkles,
    Scissors,
    BookOpen,
    Clock,
    GraduationCap,
    PenTool,
    Briefcase
} from 'lucide-react';
import SEO from '../components/SEO';
import Footer from '../components/Footer';
import { useAdmissionModal } from '../context/AdmissionModalContext';

const TextileDesigning = () => {
    const { openAdmissionModal } = useAdmissionModal();
    const [activeOutline, setActiveOutline] = useState('Bachelors');
    const [expandedSem, setExpandedSem] = useState(1);

    const curriculumData = {
        PG: {
            "Year 1": [
                "Advanced Textile Science",
                "Woven & Non-Woven Structures",
                "Dyeing & Printing Technology",
                "Surface Ornamentation Mastery",
                "History of Global Textiles",
                "Fiber Analysis & Chemistry",
                "Sustainable Material Research",
                "Digital Textile Design (CAD)"
            ],
            "Year 2": [
                "Smart & Functional Textiles",
                "Luxury Fabric Development",
                "Global Textile Sourcing",
                "Apparel Production & Ethics",
                "Entrepreneurship in Textiles",
                "Professional Portfolio & Showcase"
            ]
        },
        Bachelors: {
            "Semester 1": [
                "Introduction to Traditional Textiles",
                "Study of Textile Fibers",
                "Physical & Chemical Properties of Fiber",
                "Fiber Manufacturing Systems"
            ],
            "Semester 2": [
                "Yarn Formation & Looms",
                "Types of Yarn & Applications",
                "Basic Weaves & Structures",
                "Communication Skills & Presentation"
            ],
            "Semester 3": [
                "Introduction to Wet Processes",
                "Advance Weaving Processes",
                "Industrial Visit Project on Weaves",
                "Fabric Construction Analysis"
            ],
            "Semester 4": [
                "Introduction to Print Processes",
                "Article on Block Printing",
                "Stencil Printing, Tie & Dye Techniques",
                "Market Dynamics & Client Research"
            ],
            "Semester 5": [
                "Fundamentals of Knitting Processes",
                "Textile Finishing Processes",
                "Surface Ornamentation Techniques",
                "Dyeing & Color Chemistry"
            ],
            "Semester 6": [
                "Advanced Knitting Systems",
                "Specialized Finishing Processes",
                "Quality Assurance in Textiles",
                "Digital Print Design Mastery"
            ],
            "Semester 7": [
                "High-End Industry Projects",
                "Entrepreneurship & Startup Strategy",
                "Sustainable Material Research"
            ],
            "Semester 8": [
                "Professional Internship",
                "On-the-Job Industry Training",
                "Global Market Dynamics & Trends"
            ]
        }
    };

    return (
        <div className="bg-white min-h-screen font-sans selection:bg-primary selection:text-white">
            <SEO 
                title="Bachelors in Textile Design | INSD International School of Design"
                description="Engineers the future of fabrics with INSD's Textile Design program. Learn advanced weaving, sustainable material science, and luxury surface design."
            />

            {/* --- HERO SECTION --- */}
            <section className="relative h-[70vh] md:h-[85vh] flex items-center justify-center text-center px-6 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img 
                        src="https://plus.unsplash.com/premium_photo-1661962617583-e61b799dc558?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2V3aW5nJTIwY2xhc3N8ZW58MHx8MHx8fDA%3D" 
                        alt="Textile Design Loom" 
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
                        <span className="inline-block px-6 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white text-xs font-black uppercase tracking-widest mb-6">
                            Material Excellence
                        </span>
                        <h1 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none mb-6">
                            Bachelors in <br /> <span className="text-primary italic">Textile</span> Design
                        </h1>
                        <p className="text-lg md:text-xl text-white/80 font-medium leading-relaxed max-w-4xl mx-auto mb-10">
                            Experiment and explore the broad context and future of textile design at INSD as you develop your professional skills and personal style through commercial and creative briefs.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <button 
                                onClick={() => openAdmissionModal()}
                                className="px-12 py-5 bg-white text-slate-900 rounded-full font-black uppercase text-xs tracking-widest hover:bg-primary hover:text-white transition-all transform hover:scale-105 shadow-2xl"
                            >
                                Enroll Now
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

            {/* --- COURSE HIGHLIGHTS --- */}
            <section className="py-12 bg-slate-900 overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { label: "Degree", value: "Bachelors accredited by UGC", icon: GraduationCap },
                        { label: "Course Length", value: "3 or 4 Years Option", icon: Clock },
                        { label: "Eligibility", value: "10+2 Standard", icon: BookOpen },
                    ].map((item, idx) => (
                        <motion.div 
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="flex items-center gap-6 p-8 rounded-3xl bg-white/5 border border-white/10 group hover:border-primary/50 transition-colors"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                                <item.icon size={28} />
                            </div>
                            <div>
                                <p className="text-white/40 text-[10px] font-black uppercase tracking-[0.2em] mb-1">{item.label}</p>
                                <p className="text-white font-black text-lg tracking-tight uppercase">{item.value}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* --- CORE PHILOSOPHY --- */}
            <section className="py-24 px-6 md:px-12 lg:px-24 bg-white relative overflow-hidden">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div className="space-y-8">
                        <h2 className="text-4xl md:text-6xl font-black text-slate-900 uppercase tracking-tighter leading-none">
                            The Science & <span className="text-primary italic">Soul</span> of Fabric
                        </h2>
                        <p className="text-lg text-slate-600 font-medium leading-relaxed">
                            Our Bachelors degree will encourage you to try a range of techniques, from traditional processes to 21st century technology. You won't be asked to specialize-in or follow a house style.
                        </p>
                        <div className="grid grid-cols-2 gap-6">
                            {[
                                "Hand-printing", "Weaving", 
                                "Knit & Stitch", "Material Explorations",
                                "Digital Design", "Industrial Making"
                            ].map((tech, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <CheckCircle2 size={18} className="text-primary" />
                                    <span className="text-sm font-black uppercase tracking-tighter text-slate-700">{tech}</span>
                                </div>
                            ))}
                        </div>
                        <p className="text-slate-500 leading-relaxed italic border-l-4 border-primary pl-6">
                            "We will help you to find your preferred working methods. With expert teaching and technical support, our course develops your skills and nurtures your unique perspective."
                        </p>
                    </div>
                    <div className="relative group">
                        <div className="aspect-4/5 rounded-[4rem] overflow-hidden">
                            <img 
                                src="https://images.unsplash.com/photo-1558591710-4b4a1ad0f04d?auto=format&fit=crop&q=80&w=800" 
                                alt="Textile Experimentation" 
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                        </div>
                        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                </div>
            </section>

            {/* --- CURRICULUM SECTION --- */}
            <section className="py-24 px-6 md:px-12 lg:px-24 bg-slate-50">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                        <div className="space-y-4">
                            <span className="text-primary font-black uppercase text-[10px] tracking-[0.4em]">Integrated Learning</span>
                            <h2 className="text-5xl md:text-7xl font-black text-slate-900 uppercase tracking-tighter leading-none">
                                Course <br /> <span className="text-slate-300">Curriculum</span>
                            </h2>
                        </div>
                        
                        <div className="flex bg-white p-2 rounded-full border border-slate-200 shadow-sm">
                            {['Bachelors', 'PG'].map((type) => (
                                <button 
                                    key={type}
                                    onClick={() => {
                                        setActiveOutline(type);
                                        setExpandedSem(1);
                                    }}
                                    className={`px-8 py-3 rounded-full font-black uppercase text-[10px] tracking-widest transition-all ${
                                        activeOutline === type 
                                        ? 'bg-slate-900 text-white shadow-lg' 
                                        : 'text-slate-400 hover:text-slate-900'
                                    }`}
                                >
                                    {type === 'Bachelors' ? 'Undergraduate' : 'Post Graduate'}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {Object.entries(curriculumData[activeOutline]).map(([semName, items], idx) => {
                            const semNumber = idx + 1;
                            return (
                                <div 
                                    key={semName}
                                    className={`border border-slate-100 rounded-[2rem] overflow-hidden transition-all duration-500 ${
                                        expandedSem === semNumber 
                                        ? 'bg-white shadow-2xl shadow-slate-200/50 border-primary/20 ring-1 ring-primary/10' 
                                        : 'bg-slate-50 hover:bg-white'
                                    }`}
                                >
                                    <button 
                                        onClick={() => setExpandedSem(expandedSem === semNumber ? 0 : semNumber)}
                                        className="w-full flex items-center justify-between p-8 group"
                                    >
                                        <div className="flex items-center gap-6">
                                            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-black transition-all ${
                                                expandedSem === semNumber ? 'bg-primary text-white' : 'bg-white text-slate-400 group-hover:text-primary border border-slate-100'
                                            }`}>
                                                {semNumber}
                                            </div>
                                            <span className="text-xl font-black text-slate-900 tracking-tight uppercase">{semName}</span>
                                        </div>
                                        <div className={`transition-transform duration-500 ${expandedSem === semNumber ? 'rotate-180 text-primary' : 'text-slate-300'}`}>
                                            <ChevronDown size={24} />
                                        </div>
                                    </button>
                                    
                                    <AnimatePresence initial={false}>
                                        {expandedSem === semNumber && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
                                            >
                                                <div className="px-8 pb-10 space-y-4">
                                                    <div className="h-px w-full bg-slate-100 mb-6" />
                                                    {items.map((item, i) => (
                                                        <motion.div 
                                                            key={i}
                                                            initial={{ opacity: 0, x: -10 }}
                                                            animate={{ opacity: 1, x: 0 }}
                                                            transition={{ delay: i * 0.05 }}
                                                            className="flex items-start gap-4 group/item"
                                                        >
                                                            <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/30 group-hover/item:bg-primary group-hover/item:scale-150 transition-all shrink-0" />
                                                            <span className="text-slate-600 font-bold text-sm uppercase tracking-tight group-hover/item:text-slate-900 transition-colors">
                                                                {item}
                                                            </span>
                                                        </motion.div>
                                                    ))}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            );
                        })}
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
                            Unlock your potential and pursue diverse career opportunities in Textile Design with INSD Global.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
                        {[
                            { title: "Prints & Patterns Designer", desc: "Creating innovative surface designs and repeated patterns for fashion and home interiors.", img: "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&q=80&w=800" },
                            { title: "Weaving Consultant", desc: "Expertly directing the structural composition of fabrics through traditional and modern weaving.", img: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&q=80&w=800" },
                            { title: "Material Researcher", desc: "Exploring sustainable and high-tech fibers to define the next generation of performance fabrics.", img: "https://images.unsplash.com/photo-1558591710-4b4a1ad0f04d?auto=format&fit=crop&q=80&w=800" },
                            { title: "Home Furnishing Lead", desc: "Designing comprehensive textile collections for luxury upholstery, curtains, and linens.", img: "https://images.unsplash.com/photo-1513519245088-0e12902e35ca?auto=format&fit=crop&q=80&w=800" },
                            { title: "Dyeing Specialist", desc: "Mastering color chemistry and sustainable finishing techniques for large-scale production.", img: "https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?auto=format&fit=crop&q=80&w=800" },
                            { title: "Textile Quality Head", desc: "Ensuring every meter of fabric meets international standards for durability and aesthetics.", img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800" },
                            { title: "Embroidery Designer", desc: "Elevating garments through intricate hand and machine embellishment techniques.", img: "https://images.unsplash.com/photo-1512496015851-a90fb38ba496?auto=format&fit=crop&q=80&w=800" },
                            { title: "Sustainable Director", desc: "Leading the transition toward circular textiles and eco-friendly manufacturing ecosystems.", img: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800" },
                            { title: "Independent Artist", desc: "Launching a boutique studio focused on artisanal, handcrafted, and limited-edition textiles.", img: "https://images.unsplash.com/photo-1459156212016-c812468e2115?auto=format&fit=crop&q=80&w=800" },
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
                <div className="max-w-7xl mx-auto space-y-16">
                    <div className="text-center space-y-4">
                        <span className="text-primary font-black uppercase text-[10px] tracking-[0.4em]">Future-Proof Pedagogy</span>
                        <h2 className="text-4xl md:text-7xl font-black text-slate-900 uppercase tracking-tighter leading-none">
                            The Fabric <br /> <span className="text-slate-300">Edge</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-32">
                        {[
                            { title: "Material Science", desc: "Scientific exploration of fibers, chemistry, and smart fabrics for the high-performance market.", icon: Layers },
                            { title: "Surface Alchemy", desc: "Mastering advanced dyeing, printing, and sustainable fabric transformation techniques.", icon: Wind },
                            { title: "Sustainable Weaves", desc: "Reviving traditional weaving methods integrated with modern industrial efficiency.", icon: Scissors },
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
                                    Ready to weave the <br /> <span className="text-primary italic">future?</span>
                                </h3>
                                <p className="text-white/50 font-medium max-w-sm">Join the 2026 session. Limited seats for high-potential material visionaries.</p>
                            </div>
                            <button 
                                onClick={() => openAdmissionModal()}
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

// Placeholder icons for missing definitions
const Shield = ({ size }) => <Target size={size} />;

export default TextileDesigning;
