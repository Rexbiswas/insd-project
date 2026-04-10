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
    Users,
    Briefcase,
    Zap,
    Clock,
    GraduationCap,
    PenTool,
    Globe
} from 'lucide-react';
import SEO from '../components/SEO';
import Footer from '../components/Footer';
import { useAdmissionModal } from '../context/AdmissionModalContext';

const FashionDesigning = () => {
    const { openAdmissionModal } = useAdmissionModal();
    const [activeOutline, setActiveOutline] = useState('UG Course');
    const [expandedSem, setExpandedSem] = useState(1);

    const curriculumData = {
        "Industry Diploma": {
            "Part 1: Creative Foundation": [
                "Foundation with AI",
                "Elements of Design with AI",
                "Basic Design Idea / Fashion Language",
                "Fashion Illustration",
                "Computer Aided Design (CAD) + AI Platforms",
                "Design to Concept & Fashion Forecasting with AI",
                "Dummy to Concept & Draping",
                "Colour Idea & Concept on Texture Fabric with AI"
            ],
            "Part 2: Professional Mastery": [
                "Client Profile",
                "Project on Brands + Understanding data based Market Trends with AI",
                "Garment Construction (GMT)",
                "Pattern Making (PMT)",
                "Basic Embroidery & State Embroideries with AI",
                "Textile Theory (Fibre to Fabric)",
                "Grooming Standard",
                "Personality Development"
            ]
        },
        "UG Course": {
            "Semester 1": [
                "Foundation Art & Design",
                "Principles of Fashion Design",
                "Introduction to Pattern Making & GMT",
                "Fashion & Apparel Design Fundamentals",
                "Portfolio Making Basics",
                "Industrial Garment Grading"
            ],
            "Semester 2": [
                "History of Western World Fashion",
                "Introduction to Textile Science",
                "Grooming & Communication Skills",
                "Fashion Design Foundation Theory",
                "Creative Yarn Craft",
                "Basics of Computer Applications"
            ],
            "Semester 3": [
                "Introduction to Fashion Illustration",
                "Sewing Technology & Advanced Stitching",
                "Introduction to Draping Techniques",
                "Creative Embroidery & Surface Ornamentation",
                "Inspiration-based Design Projects",
                "Pattern Making & Sewing Lab"
            ],
            "Semester 4": [
                "Advanced Garment Construction",
                "Sewing Technology Part-II",
                "Textile Science & Processing",
                "Advanced Computer Aided Design (CAD)",
                "History of Indian Fashion",
                "Market Dynamics & Client Research"
            ],
            "Semester 5": [
                "Fabric Testing & Quality Control",
                "Advanced Fashion Analysis",
                "Vintage Costumes & Historical Studies",
                "Global Fashion Forecasting",
                "Mood Board & Trend Analysis",
                "Production Planning & Management"
            ],
            "Semester 6": [
                "Visual Merchandising & Retail Design",
                "Fashion Accessory Design",
                "Advanced Fashion Illustration",
                "Production & Operations Management",
                "Total Quality Management",
                "Entrepreneurship Development"
            ],
            "Semester 7": [
                "Industrial Internship Projects",
                "Advanced Entrepreneurial Strategy",
                "Collection Development"
            ],
            "Semester 8": [
                "Internship & On-the-Job training",
                "Market Placement Program",
                "Final Graduation Showcase"
            ]
        },
        "PG Course": {
            "Year 1": [
                "Advanced Fashion Theory",
                "Luxury Brand Perception",
                "Apparel Manufacturing Technology",
                "Global Marketing & Sourcing",
                "Advanced Draping & Construction",
                "Digital Illustration Mastery"
            ],
            "Year 2": [
                "Strategic Fashion Management",
                "E-Commerce & Digital Retail",
                "Sustainable Fashion Practices",
                "Major Research Project",
                "Final Collection & Exhibition"
            ]
        }
    };

    const careerPaths = [
        { title: "Couture Designer", desc: "Crafting exclusive, high-end bespoke garments for international luxury labels.", img: "https://images.pexels.com/photos/3735169/pexels-photo-3735169.jpeg?auto=compress&cs=tinysrgb&w=800" },
        { title: "Fashion Illustrator", desc: "Translating concepts into high-impact visual narratives for global publications.", img: "https://images.pexels.com/photos/5692271/pexels-photo-5692271.jpeg?auto=compress&cs=tinysrgb&w=800" },
        { title: "Personal Stylist", desc: "Setting the visual identity for celebrities, influencers, and luxury brand ambassadors.", img: "https://images.pexels.com/photos/6069554/pexels-photo-6069554.jpeg?auto=compress&cs=tinysrgb&w=800" },
        { title: "Fashion Entrepreneur", desc: "Launching and managing independent fashion labels and high-end boutiques.", img: "https://images.pexels.com/photos/4960250/pexels-photo-4960250.jpeg?auto=compress&cs=tinysrgb&w=800" },
        { title: "Costume Designer", desc: "Designing evocative wardrobes for high-production theatre, film, and media.", img: "https://images.pexels.com/photos/4580749/pexels-photo-4580749.jpeg?auto=compress&cs=tinysrgb&w=800" },
        { title: "Fashion Consultant", desc: "Strategic advising for heritage brands on trend forecasting and market positioning.", img: "https://images.pexels.com/photos/3965548/pexels-photo-3965548.jpeg?auto=compress&cs=tinysrgb&w=800" },
        { title: "Technical Designer", desc: "Mastering the blueprint of garments and ensuring engineering precision in apparel.", img: "https://images.pexels.com/photos/3823488/pexels-photo-3823488.jpeg?auto=compress&cs=tinysrgb&w=800" },
        { title: "Brand Merchant", desc: "Managing inventory and sales strategies for global luxury fashion houses.", img: "https://images.pexels.com/photos/3735153/pexels-photo-3735153.jpeg?auto=compress&cs=tinysrgb&w=800" },
        { title: "Pattern Scientist", desc: "Precision engineering of complex silhouettes and fit dynamics for manufacturing.", img: "https://images.pexels.com/photos/4614165/pexels-photo-4614165.jpeg?auto=compress&cs=tinysrgb&w=800" }
    ];

    return (
        <div className="bg-white min-h-screen font-sans selection:bg-primary selection:text-white">
            <SEO 
                title="The Art of Couture Engineering | Premiere Fashion Design Degree @ INSD"
                description="Master the intersection of creative vision and technical precision. Our 'Art of Couture Engineering' program equips you with global techniques in draping, pattern science, and luxury couture strategy."
            />

            {/* --- HERO SECTION --- */}
            <section className="relative h-[70vh] md:h-[85vh] flex items-center justify-center pt-20 md:pt-32 text-center px-6 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img 
                        src="https://t3.ftcdn.net/jpg/01/85/83/48/360_F_185834867_qisP0T3zX8a7rflZFKlbmj3i3BYLVUGC.jpg" 
                        alt="Fashion Design Studio" 
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
                        <h1 className="text-4xl md:text-7xl lg:text-9xl font-black text-white uppercase tracking-tighter leading-tight md:leading-none mb-6">
                            <span className="text-primary italic">Fashion</span> Design
                        </h1>
                        
                        
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <button 
                                onClick={() => openAdmissionModal()}
                                className="px-12 py-5 bg-white text-slate-900 rounded-full font-black uppercase text-xs tracking-widest hover:bg-primary hover:text-white transition-all transform hover:scale-105 shadow-2xl"
                            >
                                Enroll Now
                            </button>
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
                        { label: "Eligibility", value: "10+2 Any Stream", icon: BookOpen },
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
                        <h2 className="text-4xl md:text-6xl lg:text-8xl font-black text-slate-900 uppercase tracking-tighter leading-[1.1] md:leading-[0.85]">
                            The Art of <br className="hidden md:block" /> 
                            <span className="text-primary italic">Couture</span> <br className="hidden md:block" /> 
                            Engineering
                        </h2>
                        <p className="text-lg text-slate-600 font-medium leading-relaxed">
                            We’ll encourage you to innovate as well as to understand historic and contemporary trends in fashion. By graduation, you’ll be equipped with the design and manufacturing skills to take your unique creative vision to the global stage.
                        </p>
                        <div className="grid grid-cols-2 gap-6">
                            {[
                                "Design Development", "Pattern Cutting", 
                                "Draping Skills", "Garment Construction",
                                "Fashion Illustration", "Collection Planning"
                            ].map((tech, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <CheckCircle2 size={18} className="text-primary" />
                                    <span className="text-sm font-black uppercase tracking-tighter text-slate-700">{tech}</span>
                                </div>
                            ))}
                        </div>
                        <p className="text-slate-500 leading-relaxed italic border-l-4 border-primary pl-6">
                            "INSD prepares you for the high-intensity fashion industry, balancing traditional artisanal techniques with modern digital tools."
                        </p>
                    </div>
                    <div className="relative group">
                        <div className="aspect-4/5 rounded-[4rem] overflow-hidden shadow-2xl">
                            <img 
                                src="https://images.unsplash.com/photo-1551232864-3f0890e580d9?auto=format&fit=crop&q=80&w=800" 
                                alt="Fashion Experimentation" 
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                        </div>
                        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                </div>
            </section>

            {/* --- LEARNING OUTCOMES --- */}
            <section className="py-24 px-6 md:px-12 lg:px-24 bg-black text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 blur-3xl rounded-full" />
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
                    <div className="space-y-8">
                        <h2 className="text-3xl md:text-4xl font-black tracking-tight leading-none mb-2">
                            Learning outcomes
                        </h2>
                        <p className="text-lg md:text-xl text-white/70 leading-relaxed font-bold tracking-tight">
                            INSD's Fashion Design program equips students with cutting-edge design techniques and fosters innovation and creativity. Through hands-on training, students master trend analysis, develop professional portfolios, and gain critical business acumen. With a strong emphasis on sustainability and ethics, our program prepares students for success in the dynamic fashion world. Internships and global perspectives further enhance their readiness to thrive in diverse fashion environments.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 h-auto md:h-[600px]">
                        <div className="col-span-1 md:col-span-7 h-[300px] md:h-full rounded-2xl overflow-hidden shadow-2xl">
                            <img 
                                src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80&w=800" 
                                alt="Fashion Design Student Work" 
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="col-span-1 md:col-span-5 grid grid-cols-2 md:grid-cols-1 gap-4 h-[200px] md:h-full">
                            <div className="rounded-2xl overflow-hidden shadow-2xl">
                                <img 
                                    src="https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&q=80&w=800" 
                                    alt="Sketching Sessions" 
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="rounded-2xl overflow-hidden shadow-2xl">
                                <img 
                                    src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=800" 
                                    alt="Final Garment Construction" 
                                    className="w-full h-full object-cover"
                                />
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
                                { id: 'Industry Diploma', label: 'Industry Diploma', sub: '', badge: 'Featured' },
                                { id: 'PG Course', label: 'PG Course', sub: 'MBA | MSC | M.DES | MVOK' },
                                { id: 'UG Course', label: 'UG Course', sub: 'BCS IN FD | BDES | B.VOC' }
                            ].map((tab) => (
                                <button 
                                    key={tab.id}
                                    onClick={() => {
                                        setActiveOutline(tab.id);
                                        setExpandedSem(1);
                                    }}
                                    className={`px-8 py-3 rounded-full font-black uppercase text-[10px] tracking-widest transition-all whitespace-nowrap flex flex-col items-center gap-1 relative overflow-visible ${
                                        activeOutline === tab.id 
                                        ? 'bg-slate-900 text-white shadow-lg' 
                                        : 'text-slate-400 hover:text-slate-900'
                                    }`}
                                >
                                    <div className="flex items-center gap-2">
                                        <span>{tab.label}</span>
                                        {tab.badge && (
                                            <span className="px-1.5 py-0.5 text-[8px] font-black uppercase tracking-tighter bg-primary text-white rounded-xs animate-pulse">
                                                {tab.badge}
                                            </span>
                                        )}
                                    </div>
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
                                    className={`border border-slate-100 rounded-[2.5rem] overflow-hidden transition-all duration-500 ${
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
                            Unlock your potential and pursue diverse career opportunities in Fashion Design with INSD Global.
                        </p>
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
                                    <p className="text-white/60 text-[10px] md:text-xs font-bold leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 uppercase">
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
                        <span className="text-primary font-black uppercase text-[10px] tracking-[0.4em]">Academic Excellence</span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 uppercase tracking-tighter leading-none">
                            Why Choose <br /> <span className="text-primary">INSD</span> Fashion Design Courses?
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
                                    Ready to set the <br /> <span className="text-primary italic">next trend?</span>
                                </h3>
                                <p className="text-white/50 font-medium max-w-sm">Join the 2026 session. Limited seats for high-potential creative visionaries.</p>
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

export default FashionDesigning;
