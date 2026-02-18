import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, Palette, PenTool, Layout, Monitor, Scissors, Home, Camera, Video } from 'lucide-react';
import Footer from '../components/Footer';

gsap.registerPlugin(ScrollTrigger);

const Undergraduate = () => {
    const containerRef = useRef(null);
    const [activeCategory, setActiveCategory] = React.useState("Undergraduate");

    const courseData = {
        "Undergraduate": {
            description: "Three and four year degrees",
            courses: ["Fashion Design", "Graphic Design", "Jewellery Design", "Textile Design", "Interior Design", "Animation", "Product Design"]
        },
        "Postgraduate": {
            description: "Advanced specialization degrees",
            courses: ["M.Des Fashion", "M.Des Interior", "Luxury Brand Management", "Fashion Management", "M.Sc Multimedia", "M.Sc Textile"]
        },
        "Advanced Diploma": {
            description: "Professional skill development",
            courses: ["Fashion Tech", "Interior Architecture", "Graphic Art", "VFX & Animation", "Diamond Grading"]
        },
        "Diploma": {
            description: "Foundation and core skills",
            courses: ["Fashion Design", "Interior Design", "Graphic Design", "Textile Design", "Photography"]
        },
        "Short Term Courses": {
            description: "Intensive workshops and certifications",
            courses: ["Fashion Styling", "Photography", "Draping", "Illustration", "AutoCAD", "Merchandising"]
        }
    };

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            // Hero Text Entrance
            gsap.from(".hero-title-char", {
                y: 100,
                opacity: 0,
                rotateX: -90,
                stagger: 0.05,
                duration: 1.5,
                ease: "power4.out",
                delay: 0.5
            });

            gsap.from(".hero-subtitle", {
                y: 20,
                opacity: 0,
                duration: 1,
                ease: "power2.out",
                delay: 1.5
            });

            // Manifesto Reveal
            gsap.from(".manifesto-text", {
                scrollTrigger: {
                    trigger: ".manifesto-section",
                    start: "top 70%",
                },
                y: 50,
                opacity: 0,
                stagger: 0.1,
                duration: 1,
                ease: "power3.out"
            });

            // Course Cards Stagger
            gsap.from(".course-card", {
                scrollTrigger: {
                    trigger: ".courses-grid",
                    start: "top 80%",
                },
                y: 100,
                opacity: 0,
                stagger: 0.1,
                duration: 1,
                ease: "power3.out"
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    const courses = [
        { title: "Fashion Design", icon: <Scissors />, desc: "From sketching to runway, master the art of couture and ready-to-wear.", color: "bg-pink-500", img: "https://images.pexels.com/photos/1579930/pexels-photo-1579930.jpeg?auto=compress&cs=tinysrgb&w=800" },
        { title: "Interior Design", icon: <Home />, desc: "Transform spaces with sustainable architecture and modern aesthetics.", color: "bg-blue-500", img: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800" },
        { title: "Graphic Design", icon: <Layout />, desc: "Visual storytelling through typography, branding, and digital art.", color: "bg-purple-500", img: "https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg?auto=compress&cs=tinysrgb&w=800" },
        { title: "textile Design", icon: <Palette />, desc: "Innovate with fabrics, prints, and sustainable weaving techniques.", color: "bg-orange-500", img: "https://images.pexels.com/photos/461428/pexels-photo-461428.jpeg?auto=compress&cs=tinysrgb&w=800" },
        { title: "Animation & VFX", icon: <Monitor />, desc: "Bring characters to life with 3D modeling and motion graphics.", color: "bg-green-500", img: "https://images.pexels.com/photos/356079/pexels-photo-356079.jpeg?auto=compress&cs=tinysrgb&w=800" },
        { title: "Photography", icon: <Camera />, desc: "Capture the world through professional lens and studio lighting.", color: "bg-yellow-500", img: "https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&w=800" },
        { title: "Jewellery Design", icon: <PenTool />, desc: "Craft exquisite pieces mixing traditional metals with modern gems.", color: "bg-teal-500", img: "https://images.pexels.com/photos/2735970/pexels-photo-2735970.jpeg?auto=compress&cs=tinysrgb&w=800" },
        { title: "UI/UX Design", icon: <Layout />, desc: "Design seamless digital experiences for web and mobile.", color: "bg-indigo-500", img: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800" },
        { title: "Filmmaking", icon: <Video />, desc: "Direct, shoot, and edit your cinematic vision.", color: "bg-red-500", img: "https://images.pexels.com/photos/2510428/pexels-photo-2510428.jpeg?auto=compress&cs=tinysrgb&w=800" },
    ];

    // Helper to split text
    const splitText = (text) => text.split("").map((char, i) => (
        <span key={i} className="hero-title-char inline-block">{char === " " ? "\u00A0" : char}</span>
    ));

    return (
        <div ref={containerRef} className="bg-slate-50 min-h-screen">

            {/* 1. Hero Section */}
            <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-black text-white px-4">
                <div className="absolute inset-0 z-0 opacity-40">
                    <img
                        src="https://images.pexels.com/photos/3771088/pexels-photo-3771088.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        className="w-full h-full object-cover"
                        alt="Hero Background"
                    />
                    <div className="absolute inset-0 bg-linear-to-b from-black via-transparent to-black" />
                </div>

                <div className="relative z-10 text-center max-w-5xl">
                    <div className="flex items-center justify-center gap-4 mb-8 hero-subtitle text-primary font-mono uppercase tracking-[0.4em] text-xs md:text-sm">
                        <span>Study at INSD</span>
                        <span className="w-12 h-px bg-primary" />
                        <span>Undergraduate</span>
                    </div>

                    <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-none mb-6">
                        {splitText("Incubator")} <br />
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">
                            {splitText("For Creativity")}
                        </span>
                    </h1>

                    <p className="hero-subtitle text-lg md:text-xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
                        A comprehensive ecosystem for lateral thinkers who always ask 'Why Not'.
                    </p>
                </div>

                {/* Decorative Scroll Hint */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 animate-bounce">
                    <span className="text-[10px] font-mono uppercase tracking-widest">Explore Programs</span>
                    <div className="w-px h-12 bg-white/30" />
                </div>
            </section>

            {/* 2. Manifesto Section - Based on the Reference Image */}
            <section className="manifesto-section py-24 md:py-32 px-4 max-w-6xl mx-auto text-center md:text-left">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
                    <div className="md:col-span-5 relative">
                        <div className="text-[12rem] font-black text-slate-200 leading-none absolute -top-20 -left-20 opacity-50 select-none z-0">
                            01
                        </div>
                        <h2 className="manifesto-text relative z-10 text-4xl md:text-6xl font-black uppercase tracking-tight text-slate-900 leading-tight">
                            The Directory <br /> of <span className="text-primary italic font-serif">Future</span> <span className="text-secondary">Shapers.</span>
                        </h2>
                    </div>
                    <div className="md:col-span-7 space-y-8 text-lg md:text-xl text-slate-600 font-light leading-relaxed">
                        <p className="manifesto-text">
                            <span className="font-bold text-slate-900">INSD was established</span> with an idea to create a place for young creative minds.
                            More than a college, it is an environment—an <span className="text-primary font-medium">ecosystem</span> that allows raw talent
                            to brush itself up in the right way.
                        </p>
                        <p className="manifesto-text border-l-4 border-secondary pl-6">
                            So if you are one of those lateral thinkers who always ask <span className="text-secondary font-bold font-mono">'Why Not?'</span>,
                            you have dropped by at the right place. Go through our comprehensive list of courses and take your pick.
                        </p>
                    </div>
                </div>
            </section>

            {/* 3. The Course Directory - Grid */}
            <section className="courses-grid py-20 bg-white px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {courses.map((course, idx) => (
                            <div key={idx} className="course-card group relative h-[400px] rounded-3xl overflow-hidden cursor-pointer bg-slate-900">
                                {/* Background Image */}
                                <img
                                    src={course.img}
                                    alt={course.title}
                                    className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 group-hover:scale-110 transition-all duration-700 ease-out"
                                />

                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent" />

                                {/* Content */}
                                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                    <div className="absolute top-8 right-8 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                                        <ArrowUpRight size={20} />
                                    </div>

                                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                        <div className={`w-12 h-1 ${course.color} mb-4 rounded-full w-0 group-hover:w-12 transition-all duration-500 delay-100`} />

                                        <div className="flex items-center gap-3 mb-2 text-white/80">
                                            {React.cloneElement(course.icon, { size: 18 })}
                                            <span className="text-xs font-mono uppercase tracking-widest">B.Des / B.Sc</span>
                                        </div>

                                        <h3 className="text-3xl font-bold text-white uppercase leading-none mb-3">
                                            {course.title}
                                        </h3>

                                        <p className="text-slate-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200 max-w-xs">
                                            {course.desc}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Program Directory List - Enhanced UI */}
            <section className="py-24 bg-slate-50 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-12">

                        {/* Sidebar / Menu */}
                        <div className="md:col-span-4 space-y-2">
                            {Object.keys(courseData).map((item, index) => (
                                <div
                                    key={index}
                                    className="group cursor-pointer"
                                    onClick={() => setActiveCategory(item)}
                                >
                                    <h3 className={`text-3xl md:text-4xl font-bold transition-all duration-300 ${activeCategory === item ? 'text-primary' : 'text-slate-400 hover:text-slate-800'}`}>
                                        <span className={`inline-block h-1 w-8 mb-2 mr-2 transition-all duration-300 ${activeCategory === item ? 'bg-primary w-12' : 'bg-transparent w-0 group-hover:w-8 group-hover:bg-slate-800'}`}></span>
                                        {item}
                                    </h3>
                                </div>
                            ))}
                        </div>

                        {/* Content Area */}
                        <div className="md:col-span-8 bg-white rounded-[3rem] p-12 shadow-xl shadow-slate-200/50 border border-slate-100 relative min-h-[400px] overflow-hidden">
                            {/* Animated Content Wrapper */}
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeCategory}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                >
                                    <div className="absolute top-8 right-8 text-pink-500 font-mono text-sm uppercase tracking-widest hidden md:block">
                                        {courseData[activeCategory].description}
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                                        {courseData[activeCategory].courses.map((course, i) => (
                                            <div key={i} className="group cursor-pointer border-b border-slate-100 pb-4 hover:border-secondary transition-colors duration-300">
                                                <div className="flex justify-between items-center text-lg md:text-xl text-slate-500 group-hover:text-secondary transition-colors font-medium">
                                                    <span>{course}</span>
                                                    <ArrowUpRight size={18} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                    </div>
                </div>
            </section>

            {/* 5. Why Choose Undergraduate at INSD? */}
            <section className="py-24 bg-slate-100">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4">Why Start Here?</h2>
                        <div className="w-24 h-1 bg-black mx-auto rounded-full" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: "Foundation First", desc: "We build your skills from the ground up. No prior experience needed, just passion." },
                            { title: "360° Exposure", desc: "Learn marketing, business, and production alongside creative design." },
                            { title: "Global Degree", desc: "International certification valid worldwide, opening doors to global universities." }
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-10 rounded-2xl shadow-sm border border-slate-200 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                                <h3 className="text-xl font-bold uppercase tracking-wide mb-3">{item.title}</h3>
                                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. CTA */}
            <section className="bg-primary text-white py-24 text-center px-4">
                <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8 leading-none">
                    Ready to <br /> Create?
                </h2>
                <div className="flex justify-center gap-6">
                    <button className="px-12 py-4 bg-white text-primary font-bold uppercase tracking-widest rounded-full hover:bg-black hover:text-white transition-colors duration-300">
                        Apply Now
                    </button>
                    <button className="px-12 py-4 border border-white text-white font-bold uppercase tracking-widest rounded-full hover:bg-white hover:text-primary transition-colors duration-300">
                        Download Brochure
                    </button>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Undergraduate;
