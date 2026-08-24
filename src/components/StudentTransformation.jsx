'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import { ArrowRight, User, Briefcase, Star, Sparkles } from 'lucide-react';
import Link from 'next/link';

const TransformationCard = ({ student, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: index * 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="group relative bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-[0_4px_24px_-1px_rgba(0,0,0,0.02)] hover:shadow-[0_80px_100px_-20px_rgba(0,0,0,0.12)] transition-all duration-1000"
        >
            {/* Single Image View */}
            <div className="relative h-[180px] md:h-[200px] overflow-hidden group">
                <img
                    src={student.img}
                    alt={student.name}
                    className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-950/60 via-transparent to-transparent" />
                
                {/* Floating Tags */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                    <span className="text-[10px] font-black uppercase tracking-wider text-white bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                        {student.discipline}
                    </span>
                </div>
            </div>

            {/* Content Space */}
            <div className="p-4 md:p-6 flex flex-col justify-between h-[200px] md:h-[220px]">
                <div>
                    <h3 className="text-base md:text-lg font-black uppercase tracking-tight text-slate-900 mb-1 line-clamp-1">
                        {student.name}
                    </h3>
                    <p className="text-slate-500 font-medium text-xs leading-relaxed line-clamp-3 mb-4 italic">
                        "{student.quote}"
                    </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <div>
                        <span className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 block mb-0.5">Placed At</span>
                        <span className="text-xs md:text-sm font-black text-primary tracking-tight line-clamp-1 block">{student.placement}</span>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-900 group-hover:bg-primary group-hover:text-white transition-colors duration-500 shrink-0">
                        <ArrowRight size={14} className="transform -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const MetricCounter = ({ value, suffix, label, delay = 0 }) => {
    const [displayValue, setDisplayValue] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    useEffect(() => {
        if (isInView) {
            // Handle numeric strings vs numbers
            const numericValue = typeof value === 'string' ? parseFloat(value.replace(/,/g, '')) : value;
            
            if (isNaN(numericValue)) {
                // If it's a pure string like "Global", just set it
                setDisplayValue(value);
                return;
            }

            const controls = animate(0, numericValue, {
                duration: 2,
                delay: delay,
                ease: [0.16, 1, 0.3, 1],
                onUpdate: (latest) => {
                    if (typeof value === 'string' && value.includes(',')) {
                        // Format with commas if original was formatted
                        setDisplayValue(Math.floor(latest).toLocaleString('en-IN'));
                    } else {
                        setDisplayValue(Math.floor(latest));
                    }
                }
            });
            return () => controls.stop();
        }
    }, [isInView, value, delay]);

    return (
        <div ref={ref} className="text-center group">
            <h4 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-slate-900 mb-2 flex items-center justify-center">
                <span>{displayValue}</span>
                <span className="text-primary tracking-normal">{suffix}</span>
            </h4>
            <p className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-slate-400 group-hover:text-slate-900 transition-colors duration-300">
                {label}
            </p>
        </div>
    );
};

const StudentTransformation = () => {
    const sectionRef = useRef(null);

    const students = [
        {
            name: "Ankit Khera",
            discipline: "Fashion Design",
            img: "https://ik.imagekit.io/fmldynl4j4/Untitled%20folder/Untitled%20folder/Copy%20of%20Ankit%20Khera.jpeg",
            quote: "INSD helped me move from basic sketches to a strong portfolio and a full-time job as a Fashion Designer. The shows, juries and software training made interviews feel easy.",
            placement: "Lifestyle"
        },
        {
            name: "Sanchita Pal",
            discipline: "Graphic Design",
            img: "https://ik.imagekit.io/fmldynl4j4/Untitled%20folder/Untitled%20folder/Copy%20of%20Sanchita%20Pal.jfif",
            quote: "I started taking small freelance graphic design projects in my second year. The feedback on my portfolio and support from faculty gave me the confidence to charge for my skills.",
            placement: "Lenskart"
        },
        {
            name: "Sameer Siddiqui",
            discipline: "Jewellery Design",
            img: "https://ik.imagekit.io/fmldynl4j4/Untitled%20folder/Untitled%20folder/Copy%20of%20Sameer%20Siddiqui.jpeg",
            quote: "The hands-on training in jewellery design and the exposure to industry techniques helped me build strong technical skills. The mentor guidance played a key role in helping me secure a position.",
            placement: "Gold Mark"
        },
        {
            name: "Nitika Gautam",
            discipline: "Interior Design",
            img: "https://ik.imagekit.io/fmldynl4j4/Untitled%20folder/Untitled%20folder/Copy%20of%20Nitika%20Gautam%20.jpeg",
            quote: "The placement cell connected me with a top interior design firm in Gurgaon. My 3D visualisation skills and studio projects made me job-ready from day one.",
            placement: "Virgo Clothing"
        },
        {
            name: "Harshita Sharma",
            discipline: "Interior Design",
            img: "https://ik.imagekit.io/fmldynl4j4/Untitled%20folder/Untitled%20folder/Copy%20of%20Harshita%20Sharma.jpeg",
            quote: "Live site visits and practical studio work helped me understand materials, lighting and spaces clearly. It gave me the confidence to present designs to clients directly.",
            placement: "Casamink"
        },
        {
            name: "Abhinav Rajput",
            discipline: "Graphic Design",
            img: "https://ik.imagekit.io/fmldynl4j4/Untitled%20folder-20260526T180408Z-3-001/Untitled%20folder/Copy%20of%20Abhinav%20Rajput.jfif",
            quote: "INSD gave me the right platform to explore my creativity. The continuous feedback from faculty helped me improve my work.",
            placement: "Magiccircle Communication Pvt Ltd"
        },
        {
            name: "Tamanna Das",
            discipline: "Fashion Design",
            img: "https://ik.imagekit.io/fmldynl4j4/Untitled%20folder-20260526T180408Z-3-001/Untitled%20folder/Copy%20of%20Tamanna%20Das.jpeg",
            quote: "The fashion shows and jury evaluations pushed me to perform better with every project. It really prepared me for the competitive industry outside.",
            placement: "Sahil Kocchar, Noida"
        },
        {
            name: "Sarabjeet",
            discipline: "Interior Design",
            img: "https://ik.imagekit.io/fmldynl4j4/Untitled%20folder-20260526T180408Z-3-001/Untitled%20folder/Copy%20of%20Sarabjeet.jpeg",
            quote: "I learned how to convert ideas into practical designs through hands-on training. The software skills I gained helped me secure my first job quickly.",
            placement: "Height Buildcon South"
        },
        {
            name: "Nimit Lakhanpal",
            discipline: "Graphic Design",
            img: "https://ik.imagekit.io/fmldynl4j4/Untitled%20folder-20260526T180408Z-3-001/Untitled%20folder/Copy%20of%20Nimit%20Lakhanpal.jfif",
            quote: "The faculty support at INSD was incredible. They guided me at every step, from concept development to final portfolio presentation.",
            placement: "GMS Group"
        },
        {
            name: "Nausheena Naaz",
            discipline: "Fashion Design",
            img: "https://ik.imagekit.io/fmldynl4j4/Untitled%20folder-20260526T180408Z-3-001/Untitled%20folder/Copy%20of%20Nausheena%20Naaz.jpeg",
            quote: "The exposure to different design fields helped me discover my strengths. By the end of the course, I had clarity on my career path.",
            placement: "Freelance Stylist"
        },
        {
            name: "Tamanna Dua",
            discipline: "Interior Design",
            img: "https://ik.imagekit.io/fmldynl4j4/Untitled%20folder-20260526T180408Z-3-001/Untitled%20folder/Copy%20of%20Tamanna%20Dua%20.jpeg",
            quote: "INSD helped me build both creative and professional skills. The portfolio preparation and mock interviews made a huge difference during placements.",
            placement: "Portray Interior & Decors LLC, Abu Dhabi"
        },
        {
            name: "Vandana",
            discipline: "Interior Design",
            img: "https://ik.imagekit.io/fmldynl4j4/Untitled%20folder-20260526T180408Z-3-001/Untitled%20folder/Copy%20of%20Vandana%20.jpeg",
            quote: "Workshops and industry interactions gave me insights into real-world design practices. It helped me stay ahead and be job-ready.",
            placement: "Dazor Constructions"
        }
    ];

    return (
        <section ref={sectionRef} className="relative py-24 md:py-40 bg-[#f3f3f3] overflow-hidden selection:bg-primary selection:text-white z-20">
            {/* Background Narrative */}
            <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-slate-50/50 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 opacity-30 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col mb-16 md:mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex items-center gap-4 mb-8"
                    >
                        <div className="h-px w-12 bg-primary"></div>
                        <span className="text-primary font-black uppercase tracking-[0.4em] text-xs">Transformation Journal</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 100, rotateX: -20 }}
                        whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="text-5xl md:text-8xl font-black uppercase tracking-tighter text-slate-900 leading-none mb-12"
                    >
                        From Classroom <br />
                        <span className="text-slate-800 italic font-serif">to</span> Career: <br />
                        <span className="text-primary">Voices of INSDians</span>
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="max-w-3xl"
                    >
                        <h3 className="text-2xl md:text-4xl font-black uppercase tracking-tight text-slate-900 mb-6 leading-tight">
                            Every story is different. <br />
                            The common link is simple – <span className="text-primary">skills, portfolios and confidence.</span>
                        </h3>
                    </motion.div>
                </div>

                <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-12 px-4 -mx-4 md:px-0 md:mx-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                    {students.map((student, index) => (
                        <div key={index} className="w-[240px] md:w-[260px] snap-center shrink-0">
                            <TransformationCard student={student} index={index} />
                        </div>
                    ))}
                </div>



                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mt-20 text-center"
                >
                    <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 mb-8">success record</p>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 mb-20 bg-white/50 backdrop-blur-sm p-10 md:p-16 rounded-[4rem] border border-white/50 shadow-sm">
                        {[
                            { value: 98, suffix: "%", label: "Placement Track Record" },
                            { value: 500, suffix: "+", label: "Hiring Partners" },
                            { value: "1,50,000", suffix: "/ PM", label: "Highest Package 2025" },
                            { value: "Global", suffix: "", label: "Alumni Network" }
                        ].map((metric, i) => (
                            <MetricCounter key={i} {...metric} delay={i * 0.1} />
                        ))}
                    </div>

                    <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 mb-8">Ready to write your own story?</p>
                    <Link href="/course-apply-now" className="h-16 md:h-20 px-12 bg-slate-900 text-white rounded-full font-black uppercase tracking-widest hover:bg-primary transition-all duration-500 shadow-xl inline-flex items-center justify-center mx-auto w-max">
                        Start Your Evolution
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default StudentTransformation;
