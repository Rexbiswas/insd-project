import React, { useRef, useLayoutEffect } from 'react';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Twitter, Linkedin, Youtube, ArrowUpRight, Mail, Phone, MapPin, Download, MessageSquare, MessageCircle, ShieldCheck, Globe, Zap } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
    const footerRef = useRef(null);
    const gridRef = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            // Entrance Animation for CTA Nodes
            gsap.fromTo(".footer-node",
                { y: 40, autoAlpha: 0 },
                {
                    y: 0,
                    autoAlpha: 1,
                    stagger: 0.1,
                    ease: "power3.out",
                    duration: 1,
                    scrollTrigger: {
                        trigger: ".footer-node",
                        start: "top 90%",
                        toggleActions: "play none none none"
                    }
                }
            );

            // Giant Text Parallax Depth
            gsap.fromTo(".giant-footer-text",
                { xPercent: -10 },
                {
                    xPercent: 10,
                    scrollTrigger: {
                        trigger: footerRef.current,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: 1.5
                    }
                }
            );

            // Magnetic Grid Animation
            const nodes = document.querySelectorAll('.footer-node');
            nodes.forEach(node => {
                node.addEventListener('mousemove', (e) => {
                    const rect = node.getBoundingClientRect();
                    const x = e.clientX - rect.left - rect.width / 2;
                    const y = e.clientY - rect.top - rect.height / 2;
                    gsap.to(node.querySelector('.node-content'), {
                        x: x * 0.2,
                        y: y * 0.2,
                        duration: 0.5,
                        ease: "power2.out"
                    });
                    gsap.to(node.querySelector('.node-glow'), {
                        x: x * 0.5,
                        y: y * 0.5,
                        opacity: 1,
                        duration: 0.5
                    });
                });
                node.addEventListener('mouseleave', () => {
                    gsap.to(node.querySelector('.node-content'), { x: 0, y: 0, duration: 0.5 });
                    gsap.to(node.querySelector('.node-glow'), { opacity: 0, duration: 0.5 });
                });
            });

        }, footerRef);
        return () => ctx.revert();
    }, []);

    const socialLinks = [
        { icon: Instagram, label: "Instagram", color: "#E4405F" },
        { icon: Linkedin, label: "LinkedIn", color: "#0A66C2" },
        { icon: Facebook, label: "Facebook", color: "#1877F2" },
        { icon: Youtube, label: "YouTube", color: "#FF0000" }
    ];

    const ctas = [
        {
            label: "Apply Now",
            icon: Zap,
            desc: "Priority 2026 Admissions",
            color: "from-primary/40 to-primary/5",
            borderColor: "border-primary/20",
            glow: "bg-primary/20",
            link: "/apply",
            tag: "ACTIVATE"
        },
        {
            label: "Call Now",
            icon: Phone,
            desc: "+91 77019 33935",
            color: "from-secondary/40 to-secondary/5",
            borderColor: "border-secondary/20",
            glow: "bg-secondary/20",
            link: "tel:+917701933935",
            tag: "CONNECT"
        },
        {
            label: "Book Counselling",
            icon: MessageSquare,
            desc: "1-on-1 Expert Session",
            color: "from-indigo-500/40 to-indigo-500/5",
            borderColor: "border-indigo-500/20",
            glow: "bg-indigo-500/20",
            link: "#",
            tag: "ADVISE"
        },
        {
            label: "Brochure",
            icon: Download,
            desc: "Digital 2026 Prospectus",
            color: "from-orange-500/40 to-orange-500/5",
            borderColor: "border-orange-500/20",
            glow: "bg-orange-500/20",
            link: "#",
            tag: "EXPLORE"
        }
    ];

    return (
        <footer ref={footerRef} className="relative bg-[#050505] text-white pt-32 pb-12 overflow-hidden">

            {/* Atmospheric Orbs */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/10 blur-[150px] -translate-y-1/2 translate-x-1/2 rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/10 blur-[150px] translate-y-1/2 -translate-x-1/2 rounded-full pointer-events-none" />

            <div className="relative z-10 container mx-auto px-6 lg:px-12">

                {/* Header Phase: Next Level Editorial */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12 mb-32 border-b border-white/5 pb-20 relative group/header">
                    <div className="max-w-4xl relative">
                        {/* Decorative Vertical Line */}
                        <div className="absolute -left-8 top-0 bottom-0 w-px bg-linear-to-b from-primary via-transparent to-transparent opacity-20 hidden md:block" />

                        <div className="flex items-center gap-4 text-primary font-mono text-[10px] md:text-xs uppercase tracking-[0.5em] mb-10 reveal-card">
                            <span className="w-12 h-px bg-primary animate-pulse-slow"></span>
                            <span className="bg-primary/10 px-3 py-1 rounded-sm backdrop-blur-md">Creative Frontier</span>
                        </div>

                        <h2 className="text-6xl lg:text-[10rem] font-black uppercase tracking-tighter leading-[0.8] mb-8 relative">
                            <span className="block opacity-90">Ready to</span>
                            <span className="block text-transparent strok-text-white italic drop-shadow-[0_0_30px_rgba(255,255,255,0.15)] group-hover/header:text-white transition-all duration-1000 ease-expo">Evolve?</span>
                        </h2>

                        <p className="text-white/40 text-lg md:text-2xl font-light leading-relaxed max-w-xl reveal-card">
                            Join the global design elite. Our frontier is where your <span className="text-white font-medium">vision becomes institutionalized.</span>
                        </p>
                    </div>

                    {/* Quick Stats Reveal */}
                    <div className="hidden xl:flex flex-col items-end text-right gap-6">
                        <div className="reveal-card">
                            <h4 className="text-3xl font-black text-white">45+</h4>
                            <p className="text-[10px] text-white/30 uppercase tracking-[0.2em] font-bold">Global Chapters</p>
                        </div>
                        <div className="reveal-card">
                            <h4 className="text-3xl font-black text-white">98%</h4>
                            <p className="text-[10px] text-white/30 uppercase tracking-[0.2em] font-bold">Placement Index</p>
                        </div>
                    </div>

                    {/* Background Header Glow */}
                    <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-primary/20 blur-[130px] -z-10 rounded-full opacity-0 group-hover/header:opacity-100 transition-opacity duration-1000" />
                </div>

                {/* --- THE NEXUS ADMISSION COCKPIT --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-40">
                    {ctas.map((cta, i) => (
                        <motion.a
                            key={i}
                            href={cta.link}
                            whileHover={{ y: -12, scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            className="footer-node group relative min-h-[280px] rounded-[3rem] bg-[#0A0A0A] border border-white/5 overflow-hidden transition-all duration-700 flex flex-col justify-between p-10 hover:border-primary/40 hover:shadow-[0_40px_80px_-20px_rgba(219,52,54,0.2)]"
                        >
                            {/* Layer 0: Background Chromatic Bleed */}
                            <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-1000 ${cta.glow} blur-[100px] pointer-events-none`} />

                            {/* Layer 2: Top Meta Info */}
                            <div className="relative z-10 flex justify-between items-start">
                                <div className="relative">
                                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-500 overflow-hidden">
                                        <cta.icon className="w-6 h-6 transition-transform duration-500 group-hover:rotate-12 group-hover:scale-125" />
                                        {/* Radial Shine */}
                                        <div className="absolute inset-0 bg-linear-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </div>
                                    {/* Corner Accents */}
                                    <div className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-primary/40 rounded-tl-sm opacity-0 group-hover:opacity-100 transition-all duration-500" />
                                </div>
                                <div className="flex flex-col items-end">
                                    <span className="font-mono text-[9px] text-white/20 tracking-[0.4em] uppercase group-hover:text-primary/60 transition-colors">
                                        PHASE_0{i + 1}
                                    </span>
                                    <div className="w-8 h-[2px] bg-primary/20 mt-2 group-hover:w-12 transition-all duration-500"></div>
                                </div>
                            </div>

                            {/* Layer 3: Main Editorial Typography */}
                            <div className="relative z-10">
                                <h4 className="text-3xl md:text-4xl font-black uppercase tracking-tighter leading-none mb-3 transform-gpu group-hover:translate-x-2 transition-transform duration-700">
                                    {cta.label.split(' ').map((word, wi) => (
                                        <span key={wi} className={wi % 2 !== 0 ? "text-transparent strok-text-white italic opacity-80" : "block"}>
                                            {word}{" "}
                                        </span>
                                    ))}
                                </h4>
                                <p className="text-white/30 text-[10px] md:text-xs uppercase tracking-[0.2em] font-black group-hover:text-white transition-colors duration-500">
                                    {cta.desc}
                                </p>
                            </div>

                            {/* Layer 4: Interactive Status Bar */}
                            <div className="relative z-10 flex items-center gap-4 mt-6">
                                <div className="flex-1 h-px bg-white/5 overflow-hidden">
                                    <div className="w-full h-full bg-linear-to-r from-transparent via-primary to-transparent -translate-x-full group-hover:animate-shimmer transition-all duration-1000" />
                                </div>
                                <ArrowUpRight className="w-5 h-5 text-white/20 group-hover:text-primary group-hover:rotate-45 transition-all duration-500" />
                            </div>

                            {/* Layer 5: Massive Background Ghost Label */}
                            <div className="absolute -right-6 -bottom-8 text-[10rem] font-black text-white/[0.02] italic select-none pointer-events-none group-hover:text-primary/[0.06] transition-all duration-700 whitespace-nowrap uppercase tracking-tighter">
                                {cta.tag}
                            </div>
                        </motion.a>
                    ))}
                </div>

                {/* Secondary Links & Info */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 mb-32 pt-16 border-t border-white/5">

                    {/* Brand Meta */}
                    <div className="lg:col-span-5">
                        <div className="mb-12">
                            <h3 className="text-4xl font-black tracking-tighter mb-6 flex items-center gap-4">
                                <div className="w-2 h-12 bg-primary"></div>
                                INSD.
                            </h3>
                            <p className="text-lg text-white/60 leading-relaxed font-light">
                                International School of Design is a global design conglomerate. We don't teach design; we engineer visionaries. Our curriculum is an ever-evolving protocol for the future.
                            </p>
                        </div>

                        <div className="flex gap-3">
                            {socialLinks.map((social, idx) => (
                                <a key={idx} href="#"
                                    className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-500 group">
                                    <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Channels */}
                    <div className="lg:col-span-3">
                        <h5 className="text-xs font-bold uppercase tracking-[0.3em] text-white/30 mb-8 flex items-center gap-2">
                            Navigation
                        </h5>
                        <ul className="space-y-4">
                            {["Architecture", "The Protocol", "Campus Matrix", "Global Placements"].map((item, i) => (
                                <li key={i}>
                                    <a href="#" className="group flex items-center gap-3 text-white/60 hover:text-white transition-all">
                                        <span className="w-0 group-hover:w-4 h-px bg-primary transition-all"></span>
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Direct Connect */}
                    <div className="lg:col-span-4">
                        <h5 className="text-xs font-bold uppercase tracking-[0.3em] text-white/30 mb-8">
                            Base Communications
                        </h5>
                        <div className="space-y-8">
                            <div className="group cursor-pointer">
                                <span className="block text-xs uppercase tracking-widest text-primary mb-1">Admissions Elite</span>
                                <span className="text-xl font-bold border-b border-white/10 group-hover:border-primary transition-all pb-1">+91 98765 43210</span>
                            </div>
                            <div className="group cursor-pointer">
                                <span className="block text-xs uppercase tracking-widest text-white/40 mb-1">Global HQ</span>
                                <p className="text-white/60 text-sm leading-relaxed max-w-[250px]">
                                    3rd Floor, Metro Station, INSD Building, Preet Vihar, Delhi 110092
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Branding Parallax Layer (Ultra-Premium Spotlight Reveal) */}
                <div
                    className="relative h-[25vw] flex items-center justify-center overflow-hidden group/giant cursor-default"
                    onMouseMove={(e) => {
                        const { currentTarget, clientX, clientY } = e;
                        const { left, top, width, height } = currentTarget.getBoundingClientRect();
                        const x = ((clientX - left) / width) * 100;
                        const y = ((clientY - top) / height) * 100;
                        currentTarget.style.setProperty('--x', `${x}%`);
                        currentTarget.style.setProperty('--y', `${y}%`);
                    }}
                    style={{ '--x': '50%', '--y': '50%' }}
                >
                    {/* Layer 1: The "Ghost" Outline */}
                    <h1 className="absolute text-[35vw] font-black text-transparent stroke-text-white/2 select-none whitespace-nowrap leading-none tracking-[-0.05em] uppercase pointer-events-none">
                        INSD
                    </h1>

                    {/* Layer 2: The "Spotlight" Reveal */}
                    <h1
                        className="text-[35vw] font-black text-white/15 select-none whitespace-nowrap leading-none tracking-[-0.05em] uppercase pointer-events-none transition-all duration-300"
                        style={{
                            maskImage: 'radial-gradient(circle 300px at var(--x) var(--y), black 20%, transparent 100%)',
                            WebkitMaskImage: 'radial-gradient(circle 300px at var(--x) var(--y), black 20%, transparent 100%)',
                        }}
                    >
                        INSD
                    </h1>

                    {/* Ambient Luxury Detail */}
                    <div className="absolute inset-0 bg-linear-to-b from-transparent via-primary/2 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                </div>

                {/* Bottom Signature */}
                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-bold uppercase tracking-[0.3em] text-white/20">
                    <div className="flex items-center gap-4">
                        <Globe className="w-3 h-3 text-primary animate-spin-slow" />
                        Est. 2026 INSD Consortium
                    </div>

                    <div className="flex gap-10">
                        <a href="#" className="hover:text-primary transition-colors">Security</a>
                        <a href="#" className="hover:text-primary transition-colors">Privacy</a>
                        <a href="#" className="hover:text-primary transition-colors">Legal Matrix</a>
                    </div>

                    <a href="https://rishibiswas.dev" className="flex items-center gap-2 hover:text-white transition-colors">
                        <Zap className="w-3 h-3" />
                        Design By Rishi Biswas
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
