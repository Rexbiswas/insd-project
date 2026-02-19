import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Briefcase, Award } from 'lucide-react';
import Footer from '../components/Footer';

gsap.registerPlugin(ScrollTrigger);

const Section = ({ id, title, children, className = "" }) => (
    <div id={id} className={`py-24 md:py-32 px-6 ${className}`}>
        <div className="container mx-auto">
            <h2 className="text-3xl md:text-5xl font-light uppercase tracking-widest mb-16 text-center">
                <span className="border-b border-black/20 pb-4">{title}</span>
            </h2>
            {children}
        </div>
    </div>
);

const MscLuxury = () => {
    const containerRef = useRef(null);
    const [activeSection, setActiveSection] = useState('about');
    const [activeTab, setActiveTab] = useState('director');

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Hero Animations
            gsap.fromTo(".hero-title",
                { y: 100, opacity: 0 },
                { y: 0, opacity: 1, duration: 1.2, ease: "power4.out", delay: 0.2 }
            );

            gsap.fromTo(".hero-image",
                { scale: 1.1, opacity: 0 },
                { scale: 1, opacity: 1, duration: 1.5, ease: "power2.out" }
            );

            // Subnav Sticky & Active State
            ScrollTrigger.create({
                trigger: ".subnav-container",
                start: "top top",
                end: "bottom bottom",
                pin: true,
                pinSpacing: false,
                display: "none"
            });

            // Message Section Animation
            gsap.fromTo(".message-content",
                { opacity: 0, x: 20 },
                { opacity: 1, x: 0, duration: 0.5, scrollTrigger: { trigger: ".message-section", start: "top 80%" } }
            );

        }, containerRef);

        return () => ctx.revert();
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            const offset = 80;
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
            setActiveSection(id);
        }
    };

    const navItems = [
        { id: 'about', label: 'About' },
        { id: 'academic', label: 'Academic Content' },
        { id: 'industry', label: 'Industry Exposure' },
        { id: 'career', label: 'Career' },
        { id: 'leadership', label: 'Leadership' },
        { id: 'admission', label: 'Admission' },
        { id: 'fees', label: 'Fees' },
    ];

    return (
        <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-black selection:text-white" ref={containerRef}>

            {/* Hero Section */}
            <div className="relative h-[90vh] flex flex-col md:flex-row overflow-hidden bg-[#fdfdfd]">
                <div className="w-full md:w-1/2 h-1/2 md:h-full relative overflow-hidden order-2 md:order-1">
                    <img
                        src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2832&auto=format&fit=crop"
                        alt="Luxury Management"
                        className="hero-image w-full h-full object-cover grayscale-20 hover:grayscale-0 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-black/10 md:bg-transparent"></div>
                </div>

                <div className="w-full md:w-1/2 h-1/2 md:h-full flex items-center justify-center p-8 md:p-24 bg-white order-1 md:order-2 relative">
                    <div className="max-w-xl relative z-10">
                        <div className="hero-title">
                            <h3 className="text-sm md:text-base font-bold tracking-[0.3em] text-gray-500 mb-4 uppercase">Master of Science</h3>
                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium leading-[0.9] text-black mb-8">
                                LUXURY <br />
                                <span className="italic font-light">BRAND</span> <br />
                                MANAGEMENT
                            </h1>
                            <p className="text-lg text-gray-600 mb-10 font-light leading-relaxed max-w-sm">
                                Elevate your expertise in the world of high-end fashion, luxury goods, and premium lifestyle brands.
                            </p>
                            <Link to="/apply" className="group inline-flex items-center gap-4 bg-black text-white px-10 py-5 rounded-none hover:bg-zinc-800 transition-all duration-300">
                                <span className="uppercase tracking-widest text-sm font-medium">Apply Now</span>
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>
                    <div className="absolute top-10 right-10 w-32 h-32 border-t border-r border-black/5"></div>
                    <div className="absolute bottom-10 left-10 w-32 h-32 border-b border-l border-black/5"></div>
                </div>
            </div>

            {/* Sticky Sub-Navigation */}
            <div className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-100 flex justify-center overflow-x-auto custom-scrollbar">
                <div className="flex whitespace-nowrap">
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className={`px-6 py-5 text-xs md:text-sm uppercase tracking-widest transition-all duration-300 border-b-2 hover:bg-gray-50 ${activeSection === item.id
                                    ? 'border-black text-black font-semibold'
                                    : 'border-transparent text-gray-500 hover:text-black'
                                }`}
                        >
                            {item.label}
                        </button>
                    ))}
                    <Link to="/apply" className="px-8 py-5 text-xs md:text-sm uppercase tracking-widest bg-black text-white hover:bg-zinc-800 transition-colors hidden md:block">
                        Enquire
                    </Link>
                </div>
            </div>

            {/* ABOUT SECTION */}
            <Section id="about" title="The Program">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div className="text-lg md:text-xl font-light leading-relaxed text-gray-700 space-y-6">
                        <p>
                            The MSc in Luxury Brand Management is designed for visionary individuals aspiring to lead in the global luxury sector. This distinct program blends creative intuition with strategic business acumen.
                        </p>
                        <p>
                            We decode the DNA of luxury, exploring heritage, craftsmanship, and the modern digital narrative that defines premium brands today.
                        </p>
                    </div>
                    <div className="relative">
                        <div className="aspect-4/5 bg-gray-100 overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop" alt="Luxury Interior" className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105" />
                        </div>
                        <div className="absolute -bottom-10 -left-10 bg-white p-8 shadow-xl max-w-xs hidden md:block">
                            <p className="font-serif italic text-2xl text-gray-400">"True luxury is being able to own your time - to be able to take a walk, sit on your porch, read the paper, not take the call, not be compelled by obligation."</p>
                        </div>
                    </div>
                </div>
            </Section>

            {/* ACADEMIC CONTENT */}
            <div id="academic" className="bg-zinc-900 text-white py-32 px-6">
                <div className="container mx-auto">
                    <h2 className="text-3xl md:text-5xl font-light uppercase tracking-widest mb-20 text-center">Academic Structure</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10">
                        {[
                            { title: "Strategic Management", desc: "Understanding the luxury value chain, brand equity, and global market dynamics." },
                            { title: "Consumer Behavior", desc: "Analyzing the psychology of the affluent consumer and the new luxury paradigm." },
                            { title: "Digital Luxury", desc: "Navigating the intersection of heritage brands and the metaverse/e-commerce landscape." },
                            { title: "Retail Experience", desc: "Designing immersive flagship experiences and omni-channel strategies." },
                            { title: "Sustainable Luxury", desc: "Ethical sourcing, circular economy, and social responsibility in premium goods." },
                            { title: "Innovation & Design", desc: "Managing creativity and innovation processes within heritage houses." }
                        ].map((item, i) => (
                            <div key={i} className="p-10 bg-zinc-900 hover:bg-zinc-800 transition-colors group">
                                <h3 className="text-xl font-serif mb-4 flex items-center gap-3">
                                    <span className="w-2 h-2 rounded-full bg-white opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                    {item.title}
                                </h3>
                                <p className="text-gray-400 font-light leading-relaxed group-hover:text-gray-300 transition-colors">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* INDUSTRY EXPOSURE */}
            <Section id="industry" title="Industry Immersion">
                <div className="flex flex-col md:flex-row gap-8">
                    <div className="w-full md:w-1/2 space-y-8">
                        <div className="group relative overflow-hidden h-96 cursor-pointer">
                            <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Showroom" />
                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <span className="text-white text-xl uppercase tracking-widest border border-white px-6 py-3">In-Store Visits</span>
                            </div>
                        </div>
                        <div className="bg-gray-50 p-8">
                            <h4 className="text-xl font-bold uppercase tracking-wide mb-4">Paris & Milan Tours</h4>
                            <p className="text-gray-600 font-light">Direct interaction with ateliers and headquarters of iconic brands like LVMH, Kering, and Richemont.</p>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 flex flex-col justify-center px-4 md:px-12">
                        <ul className="space-y-6">
                            {[
                                "Guest lectures from CEOs of luxury houses",
                                "Live projects with premium brands",
                                "Exclusive access to fashion weeks",
                                "Internships at top-tier luxury firms"
                            ].map((point, i) => (
                                <li key={i} className="flex items-start gap-4">
                                    <div className="mt-1 min-w-6 min-h-6 rounded-full border border-black flex items-center justify-center">
                                        <Check size={12} />
                                    </div>
                                    <span className="text-lg font-light">{point}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </Section>

            {/* CAREER */}
            <div id="career" className="relative py-32 bg-gray-100 overflow-hidden">
                <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-black to-transparent"></div>

                <div className="container mx-auto px-6 relative z-10">
                    <h2 className="text-3xl md:text-5xl font-light uppercase tracking-widest mb-16 text-center">Career Pathways</h2>

                    <div className="flex flex-wrap justify-center gap-6">
                        {["Brand Manager", "Retail Director", "Product Merchandiser", "Luxury Consultant", "Marketing Director", "PR Specialist", "Private Client Manager"].map((job, i) => (
                            <div key={i} className="bg-white px-8 py-4 shadow-sm border border-gray-200 uppercase tracking-wider text-sm hover:bg-black hover:text-white transition-all cursor-default">
                                {job}
                            </div>
                        ))}
                    </div>

                    <div className="mt-20 flex justify-center">
                        <div className="max-w-4xl w-full grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                            {[
                                { num: "100%", label: "Placement Assistance" },
                                { num: "40+", label: "Luxury Partners" },
                                { num: "12L", label: "Avg. Starting Package" },
                                { num: "Global", label: "Alumni Network" }
                            ].map((stat, i) => (
                                <div key={i}>
                                    <h4 className="text-4xl md:text-5xl font-serif mb-2">{stat.num}</h4>
                                    <p className="text-xs uppercase tracking-widest text-gray-500">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* LEADERSHIP / MESSAGE SECTION */}
            <div id="leadership" className="py-24 md:py-32 px-6 bg-white message-section">
                <div className="container mx-auto">
                    <h2 className="text-3xl md:text-5xl font-light uppercase tracking-widest mb-16 text-center">
                        <span className="border-b border-black/20 pb-4">Why Join <span className="font-bold">MiLuxBM</span></span>
                    </h2>

                    <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
                        {/* Tabs */}
                        <div className="w-full lg:w-1/4 flex flex-col gap-2">
                            <button
                                onClick={() => setActiveTab('director')}
                                className={`text-left px-6 py-4 text-sm font-bold uppercase tracking-wide transition-all ${activeTab === 'director'
                                        ? 'bg-gray-100 border-l-4 border-black text-black'
                                        : 'text-gray-400 hover:text-black hover:bg-gray-50 border-l-4 border-transparent'
                                    }`}
                            >
                                Message from the Program Director
                            </button>
                            <button
                                onClick={() => setActiveTab('founder')}
                                className={`text-left px-6 py-4 text-sm font-bold uppercase tracking-wide transition-all ${activeTab === 'founder'
                                        ? 'bg-gray-100 border-l-4 border-black text-black'
                                        : 'text-gray-400 hover:text-black hover:bg-gray-50 border-l-4 border-transparent'
                                    }`}
                            >
                                Message from the Founder
                            </button>
                        </div>

                        {/* Content */}
                        <div className="w-full lg:w-3/4 message-content min-h-[400px]">
                            {activeTab === 'director' && (
                                <div className="bg-gray-800 text-white p-8 md:p-12 relative overflow-hidden shadow-2xl">
                                    <div className="flex flex-col md:flex-row gap-8 items-center relative z-10">
                                        <div className="flex-1 space-y-6">
                                            <p className="font-serif italic text-2xl text-gray-300 leading-relaxed">
                                                "The luxury industry in India is here to stay. I invite you to become a part of the MiLuxBM community and start your journey to become future leaders of the luxury industry."
                                            </p>
                                            <p className="text-gray-400 font-light text-sm leading-relaxed">
                                                Think management, business strategy, selling, marketing, retailing, buying and merchandising — the MiLuxBM program is designed to equip you with all the skills to be a future luxury brand manager.
                                            </p>
                                            <div className="mt-8 pt-8 border-t border-white/10">
                                                <h4 className="text-xl font-bold uppercase tracking-widest">Pranav Raj Aggarwal</h4>
                                                <p className="text-gray-400 text-sm mt-1 uppercase tracking-wide">Program Director, MiLuxBM</p>
                                            </div>
                                        </div>
                                        <div className="w-full md:w-1/3 relative">
                                            <div className="aspect-[3/4] overflow-hidden border-4 border-white/10 shadow-inner">
                                                <img
                                                    src="https://insd.edu.in/wp-content/uploads/2023/10/pranav-sir.jpg"
                                                    alt="Pranav Raj Aggarwal"
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                            {/* Decorative pattern behind image */}
                                            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-white/5 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:8px_8px] -z-10"></div>
                                        </div>
                                    </div>
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                                </div>
                            )}

                            {activeTab === 'founder' && (
                                <div className="bg-zinc-900 text-white p-8 md:p-12 relative overflow-hidden shadow-2xl">
                                    <div className="flex flex-col md:flex-row gap-8 items-center relative z-10">
                                        <div className="flex-1 space-y-6">
                                            <p className="font-serif italic text-2xl text-gray-300 leading-relaxed">
                                                "Design is not just about aesthetics; it's about solving problems and creating experiences. Our mission is to nurture the next generation of creative thinkers."
                                            </p>
                                            <p className="text-gray-400 font-light text-sm leading-relaxed">
                                                INSD was founded with a vision to provide world-class design education in India. We believe in practical learning and industry exposure to prepare our students for the real world.
                                            </p>
                                            <div className="mt-8 pt-8 border-t border-white/10">
                                                <h4 className="text-xl font-bold uppercase tracking-widest">Sunjey Aggarwal</h4>
                                                <p className="text-gray-400 text-sm mt-1 uppercase tracking-wide">Founder & CEO, INSD</p>
                                            </div>
                                        </div>
                                        <div className="w-full md:w-1/3 relative">
                                            <div className="aspect-[3/4] overflow-hidden border-4 border-white/10 shadow-inner">
                                                <img
                                                    src="https://insd.edu.in/wp-content/uploads/2022/02/Sunjey-Aggarwal.jpg"
                                                    alt="Sunjey Aggarwal"
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-white/5 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:8px_8px] -z-10"></div>
                                        </div>
                                    </div>
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* ADMISSION & FEES */}
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div id="admission" className="p-16 md:p-24 bg-white flex flex-col justify-center border-r border-gray-100">
                    <Briefcase size={40} className="mb-8 text-gray-300" />
                    <h2 className="text-3xl font-light uppercase tracking-widest mb-8">Admission Process</h2>
                    <ol className="space-y-6 relative border-l border-gray-200 ml-3 pl-8">
                        {[
                            "Submit Online Application",
                            "Portfolio Review / Interview",
                            "Offer Letter Issuance",
                            "Enrollment Confirmation"
                        ].map((step, i) => (
                            <li key={i} className="relative">
                                <span className="absolute -left-[41px] top-1 w-6 h-6 bg-black text-white rounded-full flex items-center justify-center text-xs">{i + 1}</span>
                                <h4 className="text-lg font-medium">{step}</h4>
                            </li>
                        ))}
                    </ol>
                    <Link to="/apply" className="mt-12 inline-block border-b border-black pb-1 uppercase tracking-widest text-sm hover:text-gray-600 transition-colors w-max">Start Application</Link>
                </div>

                <div id="fees" className="p-16 md:p-24 bg-gray-50 flex flex-col justify-center">
                    <Award size={40} className="mb-8 text-gray-300" />
                    <h2 className="text-3xl font-light uppercase tracking-widest mb-8">Program Fees</h2>
                    <p className="text-gray-600 font-light mb-8">
                        Invest in a future defined by excellence. We offer flexible payment plans and scholarship opportunities for meritorious candidates.
                    </p>
                    <div className="space-y-4">
                        <div className="flex justify-between items-center border-b border-gray-200 pb-4">
                            <span className="font-medium">Tuition Fee</span>
                            <span className="font-light">₹ 4,50,000 / year</span>
                        </div>
                        <div className="flex justify-between items-center border-b border-gray-200 pb-4">
                            <span className="font-medium">Registration</span>
                            <span className="font-light">₹ 50,000</span>
                        </div>
                    </div>
                    <button className="mt-12 inline-block border-b border-black pb-1 uppercase tracking-widest text-sm hover:text-gray-600 transition-colors w-max text-left">Download Fee Structure</button>
                </div>
            </div>

            <div className="py-24 bg-black text-center">
                <h2 className="text-3xl font-serif text-white mb-8 italic">"Luxury is in each detail."</h2>
                <Link to="/apply" className="bg-white text-black px-10 py-4 uppercase tracking-widest font-bold hover:bg-gray-200 transition-colors">
                    Apply Now
                </Link>
            </div>

            <Footer />
        </div>
    );
};

export default MscLuxury;
