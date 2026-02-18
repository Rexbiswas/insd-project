import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, Briefcase, Award, TrendingUp, Users, Zap, Globe } from 'lucide-react';
import Footer from '../components/Footer';

gsap.registerPlugin(ScrollTrigger);

const StudentCareers = () => {
    const containerRef = useRef(null);
    const heroRef = useRef(null);
    const marqueeRef = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            // Hero Animation
            gsap.from(".hero-text", {
                y: 100,
                opacity: 0,
                duration: 1.5,
                stagger: 0.2,
                ease: "power4.out",
                delay: 0.5
            });

            gsap.from(".hero-sub", {
                y: 50,
                opacity: 0,
                duration: 1.5,
                ease: "power4.out",
                delay: 1
            });

            // Marquee Animation
            gsap.to(marqueeRef.current, {
                xPercent: -50,
                repeat: -1,
                duration: 25,
                ease: "linear",
            });

            // Reveal Sections
            const sections = gsap.utils.toArray('.reveal-section');
            sections.forEach(section => {
                gsap.from(section.querySelectorAll('.reveal-el'), {
                    scrollTrigger: {
                        trigger: section,
                        start: "top 80%",
                    },
                    y: 50,
                    opacity: 0,
                    stagger: 0.2,
                    duration: 1,
                    ease: "power3.out"
                });
            });

            // Card Hover Effect (Parallax tilt logic handled via CSS/simple transforms if needed, keeping it light here)

        }, containerRef);

        return () => ctx.revert();
    }, []);

    const careerPaths = [
        { title: "Fashion Styling", role: "Celebrity Stylist", img: "https://images.pexels.com/photos/1579930/pexels-photo-1579930.jpeg?auto=compress&cs=tinysrgb&w=800" },
        { title: "Luxury Management", role: "Brand Manager", img: "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=800" },
        { title: "Interior Design", role: "Space Planner", img: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800" },
        { title: "Textile Design", role: "Fabric Innovator", img: "https://images.pexels.com/photos/461428/pexels-photo-461428.jpeg?auto=compress&cs=tinysrgb&w=800" },
        { title: "Graphic Design", role: "Creative Director", img: "https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg?auto=compress&cs=tinysrgb&w=800" },
        { title: "Animation & VFX", role: "Visual Artist", img: "https://images.pexels.com/photos/356079/pexels-photo-356079.jpeg?auto=compress&cs=tinysrgb&w=800" },
    ];

    const stats = [
        { val: "99%", label: "Placement Assistance", icon: <Briefcase /> },
        { val: "500+", label: "Hiring Partners", icon: <Users /> },
        { val: "12L", label: "Highest Package", icon: <TrendingUp /> },
        { val: "Global", label: "Alumni Network", icon: <Globe /> },
    ];

    const hiringPartners = [
        "Vogue", "Chanel", "Zara", "H&M", "Prada", "Gucci", "Raymond", "Pantaloons", "Shoppers Stop", "Lifestyle",
        "Vogue", "Chanel", "Zara", "H&M", "Prada", "Gucci", "Raymond", "Pantaloons", "Shoppers Stop", "Lifestyle"
    ];

    return (
        <div ref={containerRef} className="bg-slate-50 min-h-screen overflow-hidden">

            {/* 1. Hero Section */}
            <section ref={heroRef} className="relative h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="w-full h-full object-cover opacity-10" alt="Background" />
                    <div className="absolute inset-0 bg-linear-to-b from-slate-50 via-transparent to-slate-50" />
                </div>

                <div className="relative z-10 max-w-5xl mx-auto">
                    <div className="flex items-center justify-center gap-4 mb-6 hero-sub">
                        <span className="w-12 h-px bg-primary" />
                        <span className="text-primary font-mono uppercase tracking-[0.3em] text-sm">Career Services</span>
                        <span className="w-12 h-px bg-primary" />
                    </div>
                    <h1 className="hero-text text-6xl md:text-9xl font-black uppercase tracking-tighter text-slate-900 leading-[0.9] mb-8">
                        Design Your <br />
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">Future.</span>
                    </h1>
                    <p className="hero-sub text-xl md:text-2xl text-slate-500 max-w-2xl mx-auto font-light leading-relaxed">
                        From campus to corporate, we bridge the gap. Launch your career with industry-leading placements and global opportunities.
                    </p>
                    <div className="hero-sub mt-12">
                        <button className="px-10 py-4 bg-black text-white rounded-full font-bold uppercase tracking-widest hover:bg-primary transition-colors duration-300">
                            Explore Opportunities
                        </button>
                    </div>
                </div>
            </section>

            {/* 2. Marquee Section */}
            <section className="bg-black py-8 overflow-hidden rotate-1 scale-105 border-y-4 border-white z-20 relative">
                <div ref={marqueeRef} className="flex whitespace-nowrap gap-16 md:gap-32 text-white/80 font-black uppercase text-4xl md:text-6xl tracking-tight">
                    {hiringPartners.map((partner, i) => (
                        <span key={i} className="hover:text-primary transition-colors cursor-default">{partner}</span>
                    ))}
                </div>
            </section>

            {/* 3. The Career Ecosystem (Bento Grid) */}
            <section className="reveal-section py-24 md:py-32 px-4 bg-white relative z-10 border-b border-slate-100">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-20">
                        <h2 className="reveal-el text-5xl md:text-8xl font-black uppercase tracking-tighter text-slate-900 leading-[0.85]">
                            The Career <br />
                            <span className="text-secondary">Ecosystem.</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[350px]">

                        {/* Card 1: Live Projects (Large Image) */}
                        <div className="reveal-el md:col-span-2 row-span-2 relative rounded-[2.5rem] overflow-hidden group">
                            <img
                                src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt="Live Projects"
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-90" />
                            <div className="absolute bottom-0 left-0 p-10 md:p-14">
                                <div className="mb-4 inline-flex items-center gap-2 px-4 py-1 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-xs font-mono uppercase tracking-widest text-white">
                                    <Zap size={14} className="text-yellow-400" />
                                    <span>Real World Experience</span>
                                </div>
                                <h3 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight mb-4">Industry Live Projects</h3>
                                <p className="text-lg text-slate-300 max-w-md hidden md:block opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0">
                                    Work on real briefs from top brands while you study. Build your portfolio with deployed commercial work.
                                </p>
                            </div>
                        </div>

                        {/* Card 2: Internship Support (Dark) */}
                        <div className="reveal-el bg-slate-900 text-white rounded-[2.5rem] p-10 flex flex-col justify-between group hover:bg-slate-950 transition-colors">
                            <div className="flex justify-between items-start">
                                <Briefcase size={40} className="text-primary" />
                                <ArrowUpRight size={24} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                            <div>
                                <h3 className="text-4xl font-bold mb-2">100%</h3>
                                <div className="h-1 w-12 bg-primary mb-4" />
                                <h4 className="text-xl font-bold uppercase tracking-wide">Internship Support</h4>
                                <p className="text-slate-400 text-sm mt-2">Guaranteed opportunities with our 500+ corporate partners.</p>
                            </div>
                        </div>

                        {/* Card 3: Global Masterclasses (Light) */}
                        <div className="reveal-el bg-slate-100 text-slate-900 rounded-[2.5rem] p-10 flex flex-col justify-between group hover:bg-slate-200 transition-colors">
                            <div className="flex justify-between items-start">
                                <Globe size={40} className="text-secondary" />
                                <div className="px-3 py-1 bg-white rounded-full text-[10px] font-bold uppercase tracking-wider border border-slate-200">Global</div>
                            </div>
                            <div>
                                <h4 className="text-xl font-bold uppercase tracking-wide mb-2">Masterclasses</h4>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    Learn directly from international designers and visiting faculty from Paris, Milan & London.
                                </p>
                            </div>
                        </div>

                        {/* Card 4: Portfolio Development (Accent) */}
                        <div className="reveal-el md:col-span-2 bg-primary text-white rounded-[2.5rem] p-10 md:p-14 flex flex-col md:flex-row items-start md:items-center justify-between group relative overflow-hidden">
                            <div className="relative z-10">
                                <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-4">Portfolio Engineering</h3>
                                <p className="text-white/80 max-w-lg text-lg">
                                    We don't just compile work; we curate your professional identity.
                                </p>
                            </div>
                            <div className="relative z-10 mt-8 md:mt-0">
                                <button className="w-16 h-16 bg-white text-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <ArrowUpRight size={32} />
                                </button>
                            </div>

                            {/* Abstract Decorative Circle */}
                            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none group-hover:scale-150 transition-transform duration-700" />
                        </div>

                    </div>
                </div>
            </section>

            {/* 4. Impact Stats */}
            <section className="reveal-section py-24 md:py-32 px-4 bg-white relative z-10">
                <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
                    {stats.map((stat, i) => (
                        <div key={i} className="reveal-el group p-8 rounded-3xl bg-slate-50 hover:bg-black hover:text-white transition-all duration-500 border border-slate-100">
                            <div className="mb-6 flex justify-center text-primary group-hover:text-white transition-colors">
                                {React.cloneElement(stat.icon, { size: 40 })}
                            </div>
                            <div className="text-5xl md:text-6xl font-black mb-2">{stat.val}</div>
                            <div className="text-sm font-mono uppercase tracking-widest opacity-60">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* 4. Career Paths Grid */}
            <section className="reveal-section py-24 md:py-32 px-4 bg-slate-50">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-20 text-center">
                        <h2 className="reveal-el text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6 text-slate-900">
                            Where Can You <span className="text-primary italic font-serif">Go?</span>
                        </h2>
                        <p className="reveal-el text-slate-500 max-w-xl mx-auto text-lg">
                            The design industry is vast. Here are just a few of the roles our alumni have conquered.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {careerPaths.map((path, i) => (
                            <div key={i} className="reveal-el group relative h-[500px] overflow-hidden rounded-3xl cursor-pointer">
                                <img
                                    src={path.img}
                                    alt={path.title}
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent transition-opacity duration-500 group-hover:opacity-80" />

                                <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <div className="h-1 bg-primary mb-4 w-0 group-hover:w-12 transition-all duration-500 delay-100" />
                                    <h3 className="text-3xl font-bold text-white uppercase mb-2 leading-none">{path.title}</h3>
                                    <p className="text-slate-300 font-mono text-sm tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                                        / {path.role}
                                    </p>
                                    <div className="mt-6 flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300">
                                        <span className="text-sm font-bold uppercase">View Path</span>
                                        <ArrowUpRight size={16} />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. CTA Section */}
            <section className="reveal-section py-32 bg-slate-900 text-white relative overflow-hidden text-center px-4">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-secondary/20 via-slate-900 to-slate-950 pointer-events-none" />

                <div className="relative z-10 max-w-4xl mx-auto">
                    <div className="mb-8 inline-block p-2 px-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-primary font-mono text-xs uppercase tracking-widest">
                        Corporate Relations
                    </div>
                    <h2 className="reveal-el text-5xl md:text-8xl font-black uppercase tracking-tighter mb-8 leading-none">
                        Start Your <br />
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">Career Arc.</span>
                    </h2>
                    <p className="reveal-el text-slate-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto">
                        Whether you're a student looking for internships or a recruiter looking for talent, we're here to facilitate the next big step.
                    </p>
                    <div className="reveal-el flex flex-col md:flex-row gap-6 justify-center">
                        <button className="px-10 py-4 bg-white text-black rounded-full font-bold uppercase tracking-widest hover:bg-primary hover:text-white transition-colors duration-300">
                            For Students
                        </button>
                        <button className="px-10 py-4 border border-white/20 text-white rounded-full font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors duration-300">
                            For Recruiters
                        </button>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default StudentCareers;
