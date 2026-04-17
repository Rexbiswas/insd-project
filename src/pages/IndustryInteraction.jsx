import React from 'react';
import { motion } from 'framer-motion';
import { 
    Users, 
    MessageSquare, 
    Video, 
    Calendar, 
    Award, 
    Globe, 
    TrendingUp,
    Mic2,
    Briefcase,
    Star,
    ArrowRight,
    X,
    Cpu,
    Target,
    Layers,
    ShieldCheck,
    BarChart3
} from 'lucide-react';
import SEO from '../components/SEO';
import Footer from '../components/Footer';
import PartnerFormModal from '../components/PartnerFormModal';

const IndustryInteraction = () => {
    const [isFormOpen, setIsFormOpen] = React.useState(false);
    const [isVideoOpen, setIsVideoOpen] = React.useState(false);

    React.useEffect(() => {
        if (isVideoOpen) {
            const script = document.createElement('script');
            script.src = "https://go.screenpal.com/player/appearance/cOfbepnObYX";
            script.async = true;
            document.body.appendChild(script);
            return () => {
                document.body.removeChild(script);
            };
        }
    }, [isVideoOpen]);

    return (
        <div className="bg-white min-h-screen font-sans selection:bg-primary selection:text-white">
            <SEO 
                title="Industry Interaction & Expert Sessions | INSD"
                description="Connect with the world's most influential design leaders through INSD's industry interaction program. We host regular masterclasses, workshops, and expert sessions to bridge the gap between classroom and career."
            />

            {/* --- HERO SECTION --- */}
            <section className="relative pt-32 pb-48 px-6 md:px-12 lg:px-24 overflow-hidden bg-slate-50">
                <div className="absolute inset-0 z-0">
                    <img 
                        src="https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?auto=format&fit=crop&q=80&w=1600" 
                        alt="Industry Interaction" 
                        className="w-full h-full object-cover opacity-5 grayscale"
                    />
                    <div className="absolute inset-0 bg-linear-to-b from-slate-50 via-slate-50/90 to-transparent" />
                </div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="max-w-4xl space-y-8 text-center md:text-left mx-auto md:mx-0">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="space-y-4"
                        >
                            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-[10px] font-black uppercase tracking-[0.3em] border border-primary/10">
                                Bridging the Gap
                            </span>
                            <h1 className="text-5xl md:text-[6rem] font-black text-slate-900 uppercase tracking-tighter leading-[0.9]">
                                Industry <br />
                                <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">Interaction</span>
                            </h1>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-lg md:text-xl text-slate-600 font-bold max-w-2xl leading-relaxed uppercase tracking-tight"
                        >
                            Exposing students to real-world workflows through high-impact masterclasses, workshops, and live interactions with global design titans.
                        </motion.p>
                        
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="flex flex-wrap items-center justify-center md:justify-start gap-8 pt-4"
                        >
                                <button className="px-10 py-4 bg-slate-900 text-white rounded-full font-black uppercase text-xs tracking-widest hover:bg-primary transition-all transform hover:scale-105 shadow-xl shadow-slate-900/10">
                                    Our Ecosystem
                                </button>
                            <button 
                                onClick={() => setIsVideoOpen(true)}
                                className="flex items-center gap-3 text-slate-900 group"
                            >
                                <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-slate-900 group-hover:text-white transition-all">
                                    <Video className="w-5 h-5" />
                                </div>
                                <span className="font-black uppercase text-xs tracking-widest">Watch Archives</span>
                            </button>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* --- INTERACTION MODES --- */}
            <section className="py-32 px-6 md:px-12 lg:px-24 bg-white relative z-20">
                <div className="max-w-7xl mx-auto space-y-24">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                        {[
                            { 
                                title: "Masterclasses", 
                                icon: Mic2, 
                                desc: "Deep dives into specialized techniques led by international masters." 
                            },
                            { 
                                title: "Live Portfolio Reviews", 
                                icon: Star, 
                                desc: "Get one-on-one feedback from industry leaders on your professional body of work." 
                            },
                            { 
                                title: "Workshop Residencies", 
                                icon: Briefcase, 
                                desc: "Intensive 3-5 day programs focused on product innovation and execution." 
                            },
                            { 
                                title: "Virtual Summits", 
                                icon: Globe, 
                                desc: "Connecting with global design trends through online interaction labs." 
                            }
                        ].map((mode, idx) => (
                            <motion.div 
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="space-y-6 group"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm border border-slate-100">
                                    <mode.icon size={28} />
                                </div>
                                <h3 className="text-xl font-black text-slate-900 uppercase tracking-tighter">{mode.title}</h3>
                                <p className="text-slate-500 font-bold text-xs uppercase tracking-widest leading-relaxed">
                                    {mode.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    {/* --- FEATURED GUESTS GRID --- */}
                    <div className="space-y-16">
                        <div className="flex flex-col md:flex-row justify-between items-end gap-8">
                            <div className="space-y-4">
                                <span className="text-primary font-black uppercase text-[10px] tracking-[0.4em]">Elite Leadership</span>
                                <h2 className="text-4xl md:text-6xl font-black text-slate-900 uppercase tracking-tighter leading-none">
                                    Voices That <br /> <span className="text-slate-300">Resonate</span>
                                </h2>
                            </div>
                            <p className="text-slate-500 font-bold text-sm uppercase tracking-tight max-w-md md:text-right">
                                Our students have learned from the best in the business, from Luxury CEOs to award-winning creative directors.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
                            {[
                                { name: "International Designers", role: "Paris Fashion Week", img: "https://images.unsplash.com/photo-1544928147-3949a376c94e?auto=format&fit=crop&q=80&w=800" },
                                { name: "Creative Directors", role: "Global Ad Agencies", img: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80&w=800" },
                                { name: "Luxury Brand Managers", role: "European Labels", img: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800" }
                            ].map((person, idx) => (
                                <div key={idx} className="relative aspect-4/5 overflow-hidden group cursor-pointer bg-slate-900">
                                    <img 
                                        src={person.img} 
                                        alt={person.name} 
                                        className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 shadow-2xl grayscale hover:grayscale-0"
                                    />
                                    <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-transparent to-transparent opacity-80" />
                                    <div className="absolute bottom-10 left-10 space-y-2">
                                        <h4 className="text-white text-2xl font-black uppercase tracking-tighter">{person.name}</h4>
                                        <p className="text-primary text-[10px] font-black uppercase tracking-widest">{person.role}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* --- VIDEO SHOWCASE: INDUSTRY VISITS --- */}
                    <div className="pt-32 space-y-16">
                        <div className="text-center space-y-4">
                            <span className="text-primary font-black uppercase text-[10px] tracking-[0.4em]">Live from the Hub</span>
                            <h2 className="text-4xl md:text-7xl font-black text-slate-900 uppercase tracking-tighter leading-none">
                                INDUSTRY <span className="text-slate-300">EXPOSURE</span>
                            </h2>
                            <p className="text-slate-500 font-bold text-xs md:text-sm uppercase tracking-widest max-w-lg mx-auto leading-relaxed">
                                Experience the raw energy of our industry visits and masterclasses through the lens of our students.
                            </p>
                        </div>

                        <motion.div 
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative aspect-video rounded-[3.5rem] overflow-hidden bg-slate-900 group shadow-2xl"
                        >
                            <img 
                                src="https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?auto=format&fit=crop&q=80&w=1600" 
                                alt="Industry Visit Video Cover" 
                                className="w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-1000"
                            />
                            
                            {/* Animated Play Button Wrapper */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="relative w-24 h-24 md:w-32 md:h-32 bg-white rounded-full flex items-center justify-center shadow-2xl transition-all group-hover:bg-primary group-hover:text-white"
                                >
                                    <ArrowRight size={32} className="ml-2 group-hover:scale-110 transition-transform" />
                                    
                                    {/* Pulse Effect */}
                                    <div className="absolute inset-0 rounded-full border border-white/50 animate-ping opacity-20" />
                                </motion.button>
                            </div>

                            <div className="absolute bottom-12 left-12 right-12 flex flex-col md:flex-row justify-between items-end gap-6 pointer-events-none">
                                <div className="space-y-2">
                                    <span className="text-white/60 font-black uppercase tracking-[0.4em] text-[10px]">Documentary Series</span>
                                    <h4 className="text-white text-3xl font-black uppercase tracking-tighter">Day in the life: Paris Fashion Week</h4>
                                </div>
                                <div className="px-6 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white text-[10px] font-black uppercase tracking-widest">
                                    12:45 MIN
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* --- NEW EDIC SECTION: THE INDUSTRIAL NERVE CENTER --- */}
            <section className="py-32 px-6 md:px-12 lg:px-24 bg-slate-900 overflow-hidden relative">
                <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                     <div className="absolute inset-0 bg-[radial-gradient(#db3436_1px,transparent_1px)] [background-size:40px_40px]" />
                </div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                        <div className="space-y-12">
                            <div className="space-y-6">
                                <span className="inline-block px-4 py-1.5 bg-primary/20 text-primary rounded-full text-[10px] font-black uppercase tracking-[0.4em] border border-primary/30">
                                    Entrepreneurship & Design Innovation Center
                                </span >
                                <h2 className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter leading-[0.85]">
                                    THE <br /> <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">NERVE CENTER</span>
                                </h2>
                                <p className="text-slate-400 font-bold text-lg md:text-xl uppercase tracking-tight leading-relaxed max-w-xl">
                                    EDIC bridges the gap between creative excellence and industrial scalability, transforming student concepts into market-dominant ventures.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                {[
                                    { icon: Target, title: "Incubation", desc: "Seed funding & workspace for high-potential design startups." },
                                    { icon: Cpu, title: "Tech Integration", desc: "Harnessing AI & robotics for modern product manufacturing." },
                                    { icon: Layers, title: "Market Access", desc: "Direct pipelines to global retail and industrial distribution." },
                                    { icon: ShieldCheck, title: "IP Protection", desc: "Navigating patent laws and design registration frameworks." }
                                ].map((item, i) => (
                                    <div key={i} className="p-8 bg-white/5 backdrop-blur-xl rounded-[2rem] border border-white/10 hover:bg-white/10 transition-all group">
                                        <item.icon className="w-10 h-10 text-primary mb-6 group-hover:scale-110 transition-transform" />
                                        <h4 className="text-white text-xl font-black uppercase tracking-tighter mb-2">{item.title}</h4>
                                        <p className="text-slate-500 text-xs font-bold uppercase tracking-widest leading-relaxed">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative">
                            <div className="relative aspect-square rounded-[4rem] overflow-hidden border border-white/10 shadow-2xl">
                                <img 
                                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200" 
                                    alt="EDIC Tech Hub" 
                                    className="w-full h-full object-cover grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-1000"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-slate-900 to-transparent" />
                                
                                <div className="absolute bottom-12 left-12 right-12">
                                    <div className="p-8 bg-primary/90 backdrop-blur-xl rounded-3xl text-white space-y-2">
                                        <span className="text-[10px] font-black uppercase tracking-[0.4em] opacity-80">Industrial Impact</span>
                                        <div className="flex justify-between items-end">
                                            <h5 className="text-4xl font-black italic tracking-tighter">500+</h5>
                                            <span className="text-[10px] font-black uppercase tracking-widest mb-1">Partnerships Active</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Decorative Floating Element */}
                            <div className="absolute -top-12 -right-12 w-48 h-48 bg-secondary/20 blur-[80px] rounded-full animate-pulse" />
                        </div>
                    </div>
                </div>
            </section>

            {/* --- NEW DESIGN CONCLAVE SECTION: THE GLOBAL SUMMIT --- */}
            <section className="py-32 px-6 md:px-12 lg:px-24 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto space-y-24">
                    <div className="flex flex-col md:flex-row justify-between items-end gap-12">
                        <div className="space-y-6">
                            <span className="text-primary font-black uppercase text-[10px] tracking-[0.5em]">Annual Flagship Summit</span>
                            <h2 className="text-6xl md:text-[9rem] font-black text-slate-900 uppercase tracking-tighter leading-[0.8]">
                                DESIGN <br /> <span className="text-slate-200">CONCLAVE</span>
                            </h2>
                        </div>
                        <div className="max-w-md text-right space-y-6">
                             <p className="text-slate-500 font-bold text-sm uppercase tracking-widest leading-relaxed">
                                Our industry benchmark event where international CEOs, luxury curators, and tech pioneers converge to set the design agenda for the next decade.
                             </p>
                             <button className="px-8 py-4 bg-slate-950 text-white rounded-full font-black uppercase text-[10px] tracking-[0.3em] hover:bg-primary transition-all">
                                Explore previous editions
                             </button>
                        </div>
                    </div>

                    <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
                        {[
                            { title: "Industry Summit", tag: "Conclave '25", img: "https://ik.imagekit.io/fmldynl4j4/qwe/WhatsApp%20Image%202025-04-24%20at%2014.06.59%20(1).jpeg" },
                            { title: "Global Benchmarking", tag: "Strategy", img: "https://ik.imagekit.io/fmldynl4j4/qwe/WhatsApp%20Image%202025-04-24%20at%2014.06.59%20(2).jpeg" },
                            { title: "Creative Exchange", tag: "Innovation", img: "https://ik.imagekit.io/fmldynl4j4/qwe/WhatsApp%20Image%202025-04-24%20at%2014.06.59.jpeg" },
                            { title: "Leadership Panel", tag: "Summit", img: "https://ik.imagekit.io/fmldynl4j4/qwe/WhatsApp%20Image%202025-04-24%20at%2014.07.00.jpeg" },
                            { title: "Visionary Talks", tag: "Expertise", img: "https://ik.imagekit.io/fmldynl4j4/qwe/WhatsApp%20Image%202025-04-24%20at%2014.07.01%20(1).jpeg" },
                            { title: "Design Innovation", tag: "Masterclass", img: "https://ik.imagekit.io/fmldynl4j4/qwe/WhatsApp%20Image%202025-04-24%20at%2014.07.01%20(2).jpeg" },
                            { title: "Career Fair", tag: "Placements", img: "https://ik.imagekit.io/fmldynl4j4/qwe/WhatsApp%20Image%202025-04-24%20at%2014.07.01.jpeg" },
                            { title: "Portfolio Lab", tag: "Mentorship", img: "https://ik.imagekit.io/fmldynl4j4/qwe/WhatsApp%20Image%202025-04-24%20at%2014.07.02.jpeg" },
                            { title: "Alumnae Meet", tag: "Networking", img: "https://ik.imagekit.io/fmldynl4j4/qwe/WhatsApp%20Image%202025-04-24%20at%2014.09.17.jpeg" },
                            { title: "Curator Series", tag: "Elite", img: "https://ik.imagekit.io/fmldynl4j4/qwe/WhatsApp%20Image%202025-04-24%20at%2014.09.18%20(1).jpeg" },
                            { title: "Future Trends", tag: "Roundtable", img: "https://ik.imagekit.io/fmldynl4j4/qwe/WhatsApp%20Image%202025-04-24%20at%2014.09.18.jpeg" },
                            { title: "Mastery Session", tag: "Workshop", img: "https://ik.imagekit.io/fmldynl4j4/qwe/WhatsApp%20Image%202025-04-24%20at%2014.09.19.jpeg" }
                        ].map((card, i) => (
                            <motion.div 
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className="relative break-inside-avoid rounded-[2.5rem] overflow-hidden group shadow-2xl mb-8"
                            >
                                <img 
                                    src={card.img} 
                                    alt={card.title} 
                                    className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/10 to-transparent" />
                                <div className="absolute bottom-8 left-8 space-y-3">
                                    <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-[8px] font-black text-white uppercase tracking-widest border border-white/10">
                                        {card.tag}
                                    </span>
                                    <h4 className="text-xl md:text-2xl font-black text-white uppercase tracking-tighter leading-none">{card.title}</h4>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>


            {/* --- TESTIMONIAL --- */}
            <section className="py-32 px-6 md:px-12 lg:px-24 bg-white">
                <div className="max-w-4xl mx-auto text-center space-y-12">
                    <div className="flex justify-center gap-2">
                        {[1, 2, 3, 4, 5].map((_, i) => <Star key={i} size={20} className="text-primary fill-primary" />)}
                    </div>
                    <blockquote className="text-2xl md:text-4xl font-black text-slate-800 uppercase tracking-tighter leading-tight italic">
                        "The guest sessions at INSD weren't just lectures; they were reality checks. Hearing directly from someone building the brands we only see in magazines changed how I approached my designs."
                    </blockquote>
                    <div className="space-y-1">
                        <p className="text-slate-900 font-black uppercase tracking-widest text-sm">— ARYA MALHOTRA</p>
                        <p className="text-slate-400 font-bold uppercase tracking-widest text-[10px]">Master of Fashion Design '24</p>
                    </div>
                </div>
            </section>

            {/* --- FINAL CTA --- */}
            <section className="py-24 px-6 md:px-12 lg:px-24 bg-slate-900 relative overflow-hidden">
                 <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 blur-[150px] rounded-full" />
                 
                 <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
                     <div className="space-y-6 text-center md:text-left">
                         <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none">
                             Join the <br /> <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">Conversation</span>
                         </h2>
                         <p className="text-slate-400 font-bold text-lg uppercase tracking-tight max-w-md">
                             Are you a design leader interested in mentoring the next generation of creative talent?
                         </p>
                     </div>
                     <div className="flex flex-col sm:flex-row gap-6">

                        <button 
                            onClick={() => setIsFormOpen(true)}
                            className="px-10 py-5 border border-white/20 text-white rounded-full font-black uppercase text-xs tracking-widest hover:bg-white hover:text-slate-900 transition-all"
                        >
                            Partner with us
                        </button>
                     </div>
                 </div>
            </section>

            <PartnerFormModal isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />

            {/* --- VIDEO ARCHIVE MODAL --- */}
            {isVideoOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="absolute inset-0 bg-slate-950/90 backdrop-blur-xl"
                        onClick={() => setIsVideoOpen(false)}
                    />
                    
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        className="relative w-full max-w-[400px] bg-black rounded-[3rem] overflow-hidden shadow-2xl border border-white/10"
                    >
                        <button 
                            onClick={() => setIsVideoOpen(false)}
                            className="absolute top-6 right-6 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center backdrop-blur-md transition-all"
                        >
                            <X size={20} />
                        </button>

                        <div className="p-2">
                             <div 
                                className="sp-embed-player" 
                                data-id="cOfbepnObYX" 
                                data-aspect-ratio="0.562500" 
                                data-padding-top="177.777778%" 
                                style={{ position: 'relative', width: '100%', paddingTop: '177.777778%', height: 0 }}
                             >
                                <iframe 
                                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }} 
                                    scrolling="no" 
                                    src="https://go.screenpal.com/player/cOfbepnObYX?ff=1&ahc=1&dcc=1&tl=1&bg=transparent&share=1&download=1&embed=1&cl=1" 
                                    allowFullScreen={true}
                                ></iframe>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}

            <Footer />
        </div>
    );
};

export default IndustryInteraction;
