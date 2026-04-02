import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    CheckCircle2, 
    ChevronDown, 
    Gem, 
    Sparkles, 
    Scissors, 
    Layers, 
    ArrowRight,
    Palette,
    Globe,
    Award,
    Target,
    Download,
    BookOpen,
    Clock,
    GraduationCap
} from 'lucide-react';
import SEO from '../components/SEO';
import Footer from '../components/Footer';
import { useAdmissionModal } from '../context/AdmissionModalContext';

const JewelleryDesigning = () => {
    const { openAdmissionModal } = useAdmissionModal();
    const [activeOutline, setActiveOutline] = useState('Bachelors');
    const [expandedSem, setExpandedSem] = useState(1);

    const curriculumData = {
        PG: {
            "Year 1": [
                "Gemology: Identification & Grading",
                "Advanced Accessory Design",
                "Jewelry Illustration & Rendering",
                "Traditional Metal-smithing",
                "History of Global Jewelry",
                "Material Science: Precious Metals",
                "Jewelry Casting Techniques",
                "Design Ideation & Sketching"
            ],
            "Year 2": [
                "CAD for Jewelry (Rhino/Matrix)",
                "Luxury Brand Management",
                "Diamond Grading & Valuation",
                "Sustainable Jewelry Practices",
                "Appraisal & Quality Control",
                "Professional Portfolio & Exhibition"
            ]
        },
        Bachelors: {
            "Semester 1": [
                "Manual Designing: Motives & Jewelry Knowledge",
                "Shading & Rendering: White Gold, Yellow Gold, Gemstones",
                "Costume Jewellery: Bead & Stone Craft",
                "Metallurgy: Basic Knowledge & Terminology"
            ],
            "Semester 2": [
                "Advanced Manual Design Techniques",
                "Gemology: Study of Gemstones, Shapes & Origin",
                "Gemstone Occurrence & Identification",
                "Diamond Grading: Basic Knowledge & 4Cs"
            ],
            "Semester 3": [
                "Production Management & Designing Projects",
                "State, Country, & Temple Jewellery Projects",
                "Detachable Jewelry Projects",
                "Advanced Gemology & Diamond Grading"
            ],
            "Semester 4": [
                "Market Surveys & Trend Analysis",
                "CAD Designing: Rhino & Matrix Mastery",
                "Fashion Accessory Design",
                "Hallmarking Systems of Jewellery",
                "History of Eras & Era Design Practical",
                "Accessory Designing Practical"
            ],
            "Semester 5": [
                "Human Resource Management",
                "Custom Made Jewellery Boutique",
                "Entrepreneurship Development",
                "Scientific Study of Pearls",
                "Inspirational & State Designing Practicals"
            ],
            "Semester 6": [
                "Marketing & Brand Management",
                "Retail Sales & Quality Control",
                "Portfolio Case Study"
            ],
            "Semester 7": [
                "High-End Industry Projects",
                "Entrepreneurial Strategy",
                "Corporate Design Standards"
            ],
            "Semester 8": [
                "Professional Internship",
                "On-the-Job Industry Training",
                "Market Dynamics & Placement Readiness"
            ]
        }
    };

    return (
        <div className="bg-white min-h-screen font-sans selection:bg-primary selection:text-white">
            <SEO 
                title="Bachelors in Jewellery Design | INSD International School of Design"
                description="Master the art of innovative jewellery design with INSD's internationally-renowned degree. Learn manual design, gemology, CAD/CAM, and luxury marketing."
            />

            {/* --- HERO SECTION --- */}
            <section className="relative h-[70vh] md:h-[85vh] flex items-center justify-center text-center px-6 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img 
                        src="https://ik.imagekit.io/fmldynl4j4/Untitled%20folder/Copy%20of%20JD.PNG" 
                        alt="Jewellery Design Studio" 
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
                            Jewellery Design Excellence
                        </span>
                        <h1 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none mb-6">
                            Bachelors in <br /> <span className="text-primary italic">Jewellery</span> Design
                        </h1>
                        <p className="text-lg md:text-xl text-white/80 font-medium leading-relaxed max-w-4xl mx-auto mb-10">
                            You will be inspired to create innovative designs both – traditional and modern, also discuss and understand questions facing the jewellery sector in INSD’s internationally-renowned Jewellery Design degree.
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
                                Download Syllabus
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

            {/* --- ABOUT THE COURSE --- */}
            <section className="py-24 px-6 md:px-12 lg:px-24 bg-white relative overflow-hidden">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    <h2 className="text-4xl md:text-6xl font-black text-slate-900 uppercase tracking-tighter">
                        Crafting <span className="text-primary">Vision</span>
                    </h2>
                    <p className="text-lg md:text-xl text-slate-600 font-medium leading-relaxed">
                        Our Bachelors course has a reputation of producing graduates who are creative thinkers with accomplished technical skills and a strong grasp of the latest technology. You’ll follow a proven path that has led to INSD graduates securing roles at some of the top jewellers.
                    </p>
                    <p className="text-base text-slate-500 leading-relaxed">
                        This course places strong emphasis on design, craft, theory, social responsibility, and professional development. It covers every facet of traditional metalworking skills, digital processes, design, history, theory, ethical practices, and professional development.
                    </p>
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
                        {/* --- WHY CHOOSE INSD --- */}
            <section className="py-24 px-6 md:px-12 lg:px-24 bg-white relative overflow-hidden">
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
                                    <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm relative z-10 mx-auto lg:mx-0">
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
                               src="https://images.unsplash.com/photo-1573408302185-1dffcc7442ca?auto=format&fit=crop&q=80&w=800"
                               alt="Why Choose INSD"
                               className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                           />
                           <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
                           <div className="absolute bottom-12 left-12 right-12 p-8 md:p-12 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl">
                               <p className="text-white font-bold text-sm md:text-base leading-relaxed italic text-center">
                                   "INSD focuses on the technical precision and luxury styling needed for the global market. It truly prepared me for my jewelry career."
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
            <section className="py-24 px-6 md:px-12 lg:px-24 bg-slate-50">
                <div className="max-w-7xl mx-auto space-y-12">
                    <div className="space-y-4">
                        <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter uppercase">
                            Career Paths
                        </h2>
                        <p className="text-slate-500 font-bold max-w-2xl">
                            Unlock your potential and pursue diverse career opportunities in Jewellery Designing with INSD Global.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
                        {[
                            { title: "High-Jewellery Designer", desc: "Designing exclusive, one-of-a-kind masterpieces for luxury international heritage brands.", img: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=800" },
                            { title: "Gemologist", desc: "Expertly identifying and grading diamonds and precious gemstones based on the 4Cs.", img: "https://images.unsplash.com/photo-1598560917541-4043969b4a4d?auto=format&fit=crop&q=80&w=800" },
                            { title: "CAD Jewellery Designer", desc: "Using advanced 3D software to create high-precision digital models for production.", img: "https://images.unsplash.com/photo-1588444839799-eb0c797b00c8?auto=format&fit=crop&q=80&w=800" },
                            { title: "Product Head", desc: "Managing the end-to-end design and manufacturing lifecycle of jewellery collections.", img: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&q=80&w=800" },
                            { title: "Visual Merchandiser", desc: "Designing high-impact storefronts and displays for luxury jewellery boutiques.", img: "https://images.unsplash.com/photo-1610492421943-8347fa65e236?auto=format&fit=crop&q=80&w=800" },
                            { title: "Brand Consultant", desc: "Setting the strategic identity and market positioning for global gem houses.", img: "https://images.unsplash.com/photo-1534073828943-f801091bb18c?auto=format&fit=crop&q=80&w=800" },
                            { title: "Quality Assurance", desc: "Inspecting every piece for structural integrity, plating quality, and stone setting.", img: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=800" },
                            { title: "Luxury Retail Merchant", desc: "Managing high-value inventory, luxury showroom operations and premium brand sales.", img: "https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg?auto=compress&cs=tinysrgb&w=800" },
                            { title: "Luxury Entrepreneur", desc: "Launching and managing your own independent bespoke jewellery label and atelier.", img: "https://images.unsplash.com/photo-1467043237213-65f2da53396f?auto=format&fit=crop&q=80&w=800" },
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
            <section className="py-24 px-6 md:px-12 lg:px-24 bg-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 blur-full rounded-full -translate-y-1/2 translate-x-1/2" />
                
                <div className="max-w-7xl mx-auto space-y-16">
                    <div className="text-center space-y-4">
                        <span className="text-primary font-black uppercase text-[10px] tracking-[0.4em]">Future-Proof Pedagogy</span>
                        <h2 className="text-4xl md:text-7xl font-black text-slate-900 uppercase tracking-tighter leading-none">
                            The Design <br /> <span className="text-slate-300">Edge</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-32">
                        {[
                            { title: "Gem Grading", desc: "Scientific identification and grading of precious stones using industry-caliber equipment.", icon: Gem },
                            { title: "Rhino CAD/CAM", desc: "Mastering the gold standard of 3D jewelry design for photorealistic prototyping.", icon: Palette },
                            { title: "Bench Mastery", desc: "Traditional metalsmithing skills including soldering, setting, and archival craftsmanship.", icon: Scissors },
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
                                    Ready to craft a <br /> <span className="text-primary italic">legacy?</span>
                                </h3>
                                <p className="text-white/50 font-medium max-w-sm">Join the 2026 session. Limited seats for high-potential luxury creative visionaries.</p>
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

export default JewelleryDesigning;
