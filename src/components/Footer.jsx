import React, { useRef, useLayoutEffect } from 'react';
import { Facebook, Instagram, Twitter, Linkedin, Youtube, ArrowUpRight, Mail, Phone, MapPin, Download, MessageSquare, ShieldCheck, Globe, Zap } from 'lucide-react';
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
            desc: "+91 98765 43210",
            color: "from-secondary/40 to-secondary/5",
            borderColor: "border-secondary/20",
            glow: "bg-secondary/20",
            link: "tel:+919876543210",
            tag: "CONNECT"
        },
        {
            label: "Counselling",
            icon: MessageSquare,
            desc: "1-on-1 Expert Session",
            color: "from-emerald-500/40 to-emerald-500/5",
            borderColor: "border-emerald-500/20",
            glow: "bg-emerald-500/20",
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

                {/* Header Phase */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12 mb-32 border-b border-white/5 pb-20">
                    <div className="max-w-2xl">
                        <div className="flex items-center gap-3 text-primary font-mono text-xs uppercase tracking-[0.4em] mb-6">
                            <span className="w-8 h-px bg-primary"></span>
                            Creative Frontier
                        </div>
                        <h2 className="text-5xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.85]">
                            Ready to <span className="text-transparent stroke-text-white italic">Evolve?</span>
                        </h2>
                    </div>
                </div>

                {/* Nexus Command Center (Enhanced CTAs) */}
                <div className="flex flex-col lg:flex-row gap-4 mb-40">
                    {ctas.map((cta, i) => (
                        <a
                            key={i}
                            href={cta.link}
                            className="footer-node group relative flex-1 min-h-[120px] lg:h-32 rounded-2xl bg-white/2 border border-white/5 overflow-hidden transition-all duration-700 hover:flex-[1.5] hover:bg-white/5 hover:border-primary/30"
                        >
                            {/* Layer 0: Background Glow */}
                            <div className={`node-glow absolute inset-0 ${cta.glow} blur-[40px] opacity-0 transition-opacity duration-700 pointer-events-none`} />

                            {/* Layer 1: Holographic Data Stream */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none">
                                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
                            </div>

                            {/* Layer 2: Interactive Content */}
                            <div className="node-content relative h-full w-full flex items-center justify-between px-8 z-20">
                                <div className="flex items-center gap-6">
                                    {/* Icon Housing */}
                                    <div className="relative">
                                        <div className="p-4 rounded-xl bg-white/5 border border-white/10 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                                            <cta.icon className="w-6 h-6 text-white group-hover:text-primary transition-colors" />
                                        </div>
                                        {/* Corner Brackets */}
                                        <div className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    </div>

                                    <div className="flex flex-col">
                                        <span className="font-mono text-[9px] text-primary tracking-[0.4em] mb-1 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500 uppercase">
                                            {cta.tag}_PROTOCOL
                                        </span>
                                        <h4 className="text-xl md:text-2xl font-black uppercase tracking-tighter leading-none transition-transform group-hover:translate-x-1">
                                            {cta.label}
                                        </h4>
                                        <p className="hidden md:block text-white/40 text-[10px] uppercase tracking-widest mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                                            {cta.desc}
                                        </p>
                                    </div>
                                </div>

                                {/* Action Blade */}
                                <div className="flex items-center gap-3">
                                    <div className="hidden sm:flex flex-col items-end mr-4">
                                        <div className="w-12 h-1 bg-white/10 rounded-full overflow-hidden">
                                            <div className="w-full h-full bg-primary -translate-x-full group-hover:translate-x-0 transition-transform duration-1000" />
                                        </div>
                                        <span className="text-[8px] font-mono text-white/20 mt-1 uppercase">Ready_to_Initialize</span>
                                    </div>
                                    <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-500">
                                        <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform duration-500" />
                                    </div>
                                </div>
                            </div>

                            {/* Background Number Accent */}
                            <div className="absolute -right-4 -bottom-4 text-[6rem] font-black text-white/2 select-none pointer-events-none group-hover:text-primary/5 transition-colors leading-none">
                                0{i + 1}
                            </div>
                        </a>
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
