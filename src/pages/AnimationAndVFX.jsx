import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    CheckCircle2, 
    ChevronDown, 
    Film, 
    Box, 
    Zap, 
    Play, 
    ArrowRight,
    Sparkles,
    Globe,
    Award,
    Target,
    Download,
    Monitor,
    Camera,
    Clock,
    GraduationCap,
    BookOpen,
    Layers,
    PenTool
} from 'lucide-react';
import SEO from '../components/SEO';
import Footer from '../components/Footer';
import { useAdmissionModal } from '../context/AdmissionModalContext';

const AnimationAndVFX = () => {
    const { openAdmissionModal } = useAdmissionModal();
    const [activeOutline, setActiveOutline] = useState('Bachelors');
    const [expandedSem, setExpandedSem] = useState(1);

    const curriculumData = {
        Bachelors: {
            "Semester 1": [
                "Fundamentals of Art & Design",
                "Digital Imaging & Manipulation",
                "Principles of 2D Animation",
                "Traditional Animation Concepts",
                "History of Visual Media",
                "Sketching & Anatomy Study"
            ],
            "Semester 2": [
                "3D Basics: Modeling & Assets",
                "Texture & Shading Fundamentals",
                "Lighting & Rendering Basics",
                "Introduction to VFX Compositing",
                "Digital Storyboarding Art",
                "Visual Communication"
            ],
            "Semester 3": [
                "Advanced 3D Modeling (Prop & Environment)",
                "Character Rigging Fundamentals",
                "3D Character Animation",
                "Digital Sculpting Basics",
                "Dynamics & Particle Systems I",
                "Pre-visualization Techniques"
            ],
            "Semester 4": [
                "Advanced Character Animation",
                "Performance Animation & Acting",
                "Motion Graphics & Titles",
                "Video Editing & Color Grading",
                "Intermediate Compositing (Nuke)",
                "Match-moving & Tracking"
            ],
            "Semester 5": [
                "High-End VFX Compositing",
                "Dynamics & Fluid Simulations",
                "Advanced Look Development",
                "Digital Matte Painting",
                "Production Pipeline Workflow",
                "Advanced Character Rigging"
            ],
            "Semester 6": [
                "Unreal Engine for Production",
                "Real-time Rendering & Lighting",
                "Interactive Media Design",
                "Major Production Project",
                "Showreel Development",
                "Portfolio Mentorship"
            ],
            "Semester 7": [
                "Industrial Internship Projects",
                "Entrepreneurship in Creative Media",
                "Global Market Dynamics"
            ],
            "Semester 8": [
                "On-the-Job training (OJT)",
                "Placement Preparation",
                "Final Thesis & Showcase"
            ]
        },
        PG: {
            "Year 1": [
                "Advanced Cinematic Lighting",
                "Digital Sculpting Mastery",
                "Cinematic Look Development",
                "Advanced Dynamics & VFX",
                "VFX Pipeline Management",
                "Global Industry Trends"
            ],
            "Year 2": [
                "Master Production Project",
                "Showreel & Portfolio Lab",
                "Creative Business Leadership",
                "Industry Placement Show"
            ]
        }
    };

    const careerPaths = [
        { title: "3D Modeler", desc: "Crafting detailed 3D assets, environments, and characters for global film and gaming studios.", img: "https://images.unsplash.com/photo-1616440830467-31735ec00713?auto=format&fit=crop&q=80&w=800" },
        { title: "Character Animator", desc: "Bringing digital characters to life through complex movement and emotional storytelling performance.", img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800" },
        { title: "VFX Supervisor", desc: "Overseeing the technical and creative execution of high-end visual effects on cinematic sets.", img: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=800" },
        { title: "Compositor", desc: "Seamlessly blending live-action footage with CGI and VFX to create final cinematic masterpieces.", img: "https://images.unsplash.com/photo-1478720143907-29bd9484b9df?auto=format&fit=crop&q=80&w=800" },
        { title: "Game Artist", desc: "Developing immersive environments and interactive assets for the multi-billion dollar gaming industry.", img: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=800" },
        { title: "Motion Artist", desc: "Creating high-impact animated graphics for national television, film titles, and digital ads.", img: "https://images.unsplash.com/photo-1558591710-4b4a1ad0f04d?auto=format&fit=crop&q=80&w=800" },
        { title: "Lighting Artist", desc: "Setting the cinematic mood and atmosphere of digital scenes through advanced virtual lighting.", img: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=800" },
        { title: "Technical Director", desc: "Engineers the production pipeline and develops specialized tools for major animation houses.", img: "https://images.unsplash.com/photo-1512496015851-a90fb38ba496?auto=format&fit=crop&q=80&w=800" },
        { title: "Concept Artist", desc: "Visualizing characters and worlds before production begins to guide the creative direction.", img: "https://images.unsplash.com/photo-1520633215439-d49eec2030ca?auto=format&fit=crop&q=80&w=800" }
    ];

    return (
        <div className="bg-white min-h-screen font-sans selection:bg-primary selection:text-white">
            <SEO 
                title="Animation & VFX Degree | Cinematic Visual Effects @ INSD"
                description="Master the art of cinematic visual effects. Our Animation & VFX program balances technical engineering with high-impact digital storytelling."
            />

            {/* --- HERO SECTION --- */}
            <section className="relative h-[70vh] md:h-[85vh] flex items-center justify-center pt-20 md:pt-32 text-center px-6 overflow-hidden bg-slate-900">
                <div className="absolute inset-0 z-0">
                    <img 
                        src="https://ik.imagekit.io/fmldynl4j4/Untitled%20folder/Copy%20of%20animation%20.png" 
                        alt="Animation & VFX Studio" 
                        className="w-full h-full object-cover opacity-60 scale-105"
                    />
                    <div className="absolute inset-0 bg-linear-to-b from-black/80 via-black/20 to-black/80" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="space-y-6"
                    >

                        <h1 className="text-4xl md:text-8xl lg:text-[10rem] font-black text-white uppercase tracking-tighter leading-tight md:leading-[0.85] mb-8">
                            
                            <span className="text-primary italic">Animation</span> <br className="hidden md:block" /> 
                            & VFX
                        </h1>
                        
                        
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <button 
                                onClick={() => openAdmissionModal()}
                                className="px-12 py-5 bg-white text-slate-900 rounded-full font-black uppercase text-xs tracking-widest hover:bg-primary hover:text-white transition-all transform hover:scale-105 shadow-2xl"
                            >
                                Secure Admission
                            </button>
                            <div className="flex items-center gap-4 text-white/50 animate-bounce cursor-default">
                                <span className="text-[10px] font-black uppercase tracking-widest">Scroll to Explore</span>
                                <ArrowRight size={16} className="rotate-90" />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* --- COURSE HIGHLIGHTS --- */}
            <section className="py-12 bg-black overflow-hidden relative border-y border-white/5">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { label: "Degree", value: "Bachelors accredited by UGC", icon: GraduationCap },
                        { label: "Course Length", value: "3 or 4 Years Option", icon: Clock },
                        { label: "Eligibility", value: "10+2 Any Stream", icon: BookOpen },
                    ].map((item, idx) => (
                        <motion.div 
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="flex items-center gap-6 p-8 rounded-[2.5rem] bg-white/5 border border-white/10 group hover:border-primary/50 transition-all duration-500"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
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

            {/* --- LEARNING OUTCOMES --- */}
            <section className="py-24 px-6 md:px-12 lg:px-24 bg-black text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 blur-3xl rounded-full" />
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
                    <div className="space-y-8">
                        <h2 className="text-3xl md:text-4xl font-black tracking-tight leading-none mb-2">
                            Digital <br /> Magic
                        </h2>
                        <div className="space-y-6">
                            {[
                                { title: "Character Rigging", desc: "Scientific approach to skeleton anatomy and motion dynamics for photorealistic characters." },
                                { title: "VFX Pipeline", desc: "Mastering the industrial workflow from green screen sets to final high-end compositing." },
                                { title: "Unreal Engine", desc: "The future of real-time rendering and virtual production for film and gaming." }
                            ].map((outcome, i) => (
                                <div key={i} className="flex gap-6 group">
                                    <div className="w-px h-16 bg-white/10 group-hover:bg-primary transition-colors" />
                                    <div>
                                        <h4 className="font-black uppercase text-sm tracking-widest text-primary mb-2">{outcome.title}</h4>
                                        <p className="text-white/50 text-xs font-bold leading-relaxed max-w-md uppercase tracking-tight">{outcome.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 h-auto md:h-[600px]">
                        <div className="col-span-1 md:col-span-7 h-[300px] md:h-full rounded-2xl overflow-hidden shadow-2xl">
                            <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover" alt="Animation" />
                        </div>
                        <div className="col-span-1 md:col-span-5 grid grid-cols-2 md:grid-cols-1 gap-4 h-[200px] md:h-full">
                            <div className="rounded-2xl overflow-hidden shadow-2xl">
                                <img src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover" alt="VFX" />
                            </div>
                            <div className="hidden md:block rounded-2xl overflow-hidden shadow-2xl">
                                <img src="https://images.unsplash.com/photo-1512496015851-a90fb38ba496?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover" alt="Animation Kit" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- CURRICULUM SECTION --- */}
            <section className="py-24 px-6 md:px-12 lg:px-24 bg-slate-50">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                        <div className="space-y-4">

                            <h2 className="text-5xl md:text-7xl font-black text-slate-900 uppercase tracking-tighter leading-none">
                                Course <br /> <span className="text-slate-300">Curriculum</span>
                            </h2>
                        </div>
                        
                        <div className="flex bg-white p-2 rounded-full border border-slate-200 shadow-sm overflow-x-auto no-scrollbar">
                            {[
                                { id: 'Bachelors', label: 'Undergraduate', sub: 'B.Des | B.Voc' },
                                { id: 'PG', label: 'Post Graduate', sub: 'M.Des | M.Voc' }
                            ].map((tab) => (
                                <button 
                                    key={tab.id}
                                    onClick={() => {
                                        setActiveOutline(tab.id);
                                        setExpandedSem(1);
                                    }}
                                    className={`px-8 py-3 rounded-full font-black uppercase text-[10px] tracking-widest transition-all whitespace-nowrap flex flex-col items-center gap-1 ${
                                        activeOutline === tab.id 
                                        ? 'bg-slate-900 text-white shadow-lg' 
                                        : 'text-slate-400 hover:text-slate-900'
                                    }`}
                                >
                                    <span>{tab.label}</span>
                                    {tab.sub && <span className="text-[7px] opacity-60 tracking-tighter font-medium">{tab.sub}</span>}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {curriculumData[activeOutline] && Object.entries(curriculumData[activeOutline]).map(([semName, items], idx) => {
                            const semNumber = idx + 1;
                            return (
                                <div 
                                    key={semName}
                                    className={`border border-slate-100 rounded-3xl md:rounded-4xl overflow-hidden transition-all duration-500 ${
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
                                                            <span className="text-slate-600 font-black text-xs uppercase tracking-tight group-hover/item:text-slate-900 transition-colors">
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
            <section className="py-24 px-6 md:px-12 lg:px-24 bg-white relative">
                <div className="max-w-7xl mx-auto space-y-20">
                    <div className="text-center space-y-4">

                        <h2 className="text-4xl md:text-7xl font-black text-slate-900 uppercase tracking-tighter leading-none">
                            Career <br /> <span className="text-slate-300">Archetypes</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
                        {careerPaths.map((role, idx) => (
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
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-8 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                    <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-tighter leading-none mb-2">
                                        {role.title.split(' ').map((word, i) => (
                                            <span key={i} className="block">{word}</span>
                                        ))}
                                    </h3>
                                    <p className="text-white/60 text-[10px] md:text-xs font-bold leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 uppercase tracking-tight">
                                        {role.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- WHY CHOOSE SECTION --- */}
            <section className="py-24 px-6 md:px-12 lg:px-24 bg-slate-50 relative overflow-hidden">
                <div className="max-w-7xl mx-auto space-y-20">
                    <div className="text-center space-y-4">

                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 uppercase tracking-tighter leading-none">
                            Why Choose <br /> <span className="text-primary">INSD</span> Animation & VFX Courses?
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            { 
                                title: "100% Placement Support", 
                                desc: "Career focused learning with continuous guidance, ensuring you don’t just learn fashion—you build a real career in it.", 
                                icon: GraduationCap 
                            },
                            { 
                                title: "Industry + AI Integrated Curriculum", 
                                desc: "Learn what the industry actually demands with a curriculum that blends real-world practices and the latest AI-driven tools shaping fashion today.", 
                                icon: Sparkles 
                            },
                            { 
                                title: "Hands-On Training & Portfolio Building", 
                                desc: "From practical projects to creating your own professional portfolio, every step is focused on making you industry-ready.", 
                                icon: PenTool 
                            },
                            { 
                                title: "Expert Mentorship & Global Exposure", 
                                desc: "Learn from experienced faculty, gain global insights, and grow through a fast-paced learning environment designed for future designers.", 
                                icon: Globe 
                            }
                        ].map((item, idx) => (
                            <div key={idx} className="group p-10 rounded-[2.5rem] bg-white border border-slate-100 hover:border-primary/20 transition-all duration-500 hover:shadow-2xl hover:shadow-slate-200/50">
                                <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                                    <item.icon size={32} />
                                </div>
                                <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tighter mb-4 leading-tight group-hover:text-primary transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-slate-500 text-sm leading-relaxed font-medium transition-colors">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Final CTA Strip */}
                    <div className="relative p-12 md:p-24 bg-slate-900 rounded-[3.5rem] overflow-hidden group">
                        <div className="absolute inset-0 z-0 bg-primary/10 group-hover:bg-primary/20 transition-colors" />
                        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left">
                            <div className="space-y-4">
                                <h3 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter">
                                    Ready to model the <br /> <span className="text-primary italic">impossible?</span>
                                </h3>
                                <p className="text-white/50 max-w-sm uppercase text-xs tracking-widest font-black">Join the 2026 session. Limited seats for high-potential creative visionaries.</p>
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

export default AnimationAndVFX;

