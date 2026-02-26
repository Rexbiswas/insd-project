import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, User, Briefcase, Star, Sparkles } from 'lucide-react';

const TransformationCard = ({ student, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: index * 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="group relative bg-white rounded-[3.5rem] overflow-hidden border border-slate-100 shadow-[0_4px_24px_-1px_rgba(0,0,0,0.02)] hover:shadow-[0_80px_100px_-20px_rgba(0,0,0,0.12)] transition-all duration-1000"
        >
            {/* Split View Container */}
            <div className="relative h-[450px] overflow-hidden flex">
                {/* Before Side - The Raw Talent */}
                <div className="w-1/2 relative overflow-hidden bg-slate-100 group">
                    <img
                        src={student.beforeImg}
                        alt="Initial Phase"
                        className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[1px]" />
                    <div className="absolute top-8 left-8 z-10">
                        <span className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-md text-[10px] font-black uppercase tracking-widest text-white border border-white/20">
                            Day 01: Raw Creative
                        </span>
                    </div>
                </div>

                {/* After Side - The INSD Professional */}
                <div className="w-1/2 relative overflow-hidden">
                    <img
                        src={student.afterImg}
                        alt="Professional Mastery"
                        className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-slate-950/40 via-transparent to-transparent" />
                    <div className="absolute top-8 right-8 z-10">
                        <span className="px-4 py-2 rounded-full bg-primary backdrop-blur-md text-[10px] font-black uppercase tracking-widest text-white border border-primary/20 animate-pulse">
                            INSD Graduate Power
                        </span>
                    </div>
                </div>

                {/* Central Identity Badge */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-white shadow-2xl z-30 flex items-center justify-center border-4 border-slate-50">
                    <Sparkles className="text-primary w-6 h-6 group-hover:rotate-90 transition-transform duration-700" />
                </div>
            </div>

            {/* Content Section */}
            <div className="p-10 md:p-14 relative">
                <div className="flex justify-between items-start mb-10">
                    <div>
                        <div className="flex items-center gap-2 mb-3">
                            <span className="text-[10px] font-black uppercase tracking-widest text-primary bg-primary/5 px-2 py-0.5 rounded">INSD Alumni</span>
                            <span className="text-[10px] font-bold text-slate-300">Class of 2024</span>
                        </div>
                        <h4 className="text-4xl font-black text-slate-900 tracking-tighter leading-none mb-1">
                            {student.name}
                        </h4>
                        <p className="text-slate-400 font-bold uppercase tracking-[0.3em] text-[10px]">
                            {student.discipline} • {student.program}
                        </p>
                    </div>
                </div>

                <div className="space-y-6 mb-12">
                    <div className="p-6 rounded-3xl bg-slate-50 border border-slate-100 group-hover:bg-white group-hover:border-primary/20 transition-colors duration-500">
                        <p className="text-slate-600 text-base md:text-lg font-medium leading-relaxed italic relative">
                            <span className="text-primary text-4xl font-serif absolute -top-4 -left-2 opacity-20">"</span>
                            {student.quote}
                            <span className="text-primary text-4xl font-serif absolute -bottom-10 right-0 opacity-20">"</span>
                        </p>
                    </div>
                </div>

                {/* Placement Branding */}
                <div className="pt-10 border-t border-slate-100 flex flex-col md:flex-row items-center gap-8 justify-between">
                    <div className="flex items-center gap-6">
                        <div className="flex -space-x-4">
                            {[1, 2, 3].map(i => (
                                <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                                    <img src={`https://i.pravatar.cc/100?img=${index + i + 10}`} alt="avatar" />
                                </div>
                            ))}
                        </div>
                        <div>
                            <p className="text-[9px] font-black uppercase tracking-widest text-slate-400 mb-1">Hired By Global Giant</p>
                            <p className="font-black text-xl text-slate-900 tracking-tighter uppercase">{student.placement}</p>
                        </div>
                    </div>

                    <button className="flex items-center gap-4 px-8 py-4 bg-slate-50 rounded-2xl group/btn hover:bg-primary transition-all duration-500">
                        <span className="text-xs font-black uppercase tracking-widest text-slate-900 group-hover/btn:text-white">Review Portfolio</span>
                        <ArrowRight size={16} className="text-slate-400 group-hover/btn:text-white transform group-hover/btn:translate-x-2 transition-transform" />
                    </button>
                </div>
            </div>
        </motion.div>
    );
};

const StudentTransformation = () => {
    const sectionRef = useRef(null);

    const students = [
        {
            name: "Isha Malhotra",
            discipline: "Fashion Design",
            program: "B.Des Excellence",
            beforeImg: "https://images.pexels.com/photos/4458554/pexels-photo-4458554.jpeg?auto=compress&cs=tinysrgb&w=800",
            afterImg: "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800",
            quote: "At INSD, I didn't just learn to stitch; I learned the business of couture. My final project landed me directly at the Lakmé Fashion Week studio.",
            placement: "Manish Malhotra",
            portfolio: "#"
        },
        {
            name: "Kabir Mehra",
            discipline: "Interior Design",
            program: "M.Des Leadership",
            beforeImg: "https://images.pexels.com/photos/545012/pexels-photo-545012.jpeg?auto=compress&cs=tinysrgb&w=800",
            afterImg: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
            quote: "The INSD Studio Labs provided the exact ecosystem I needed to transition from amateur floor plans to commercial retail architecture for premium lifestyle brands.",
            placement: "Hafele India",
            portfolio: "#"
        }
    ];

    return (
        <section ref={sectionRef} className="relative py-24 md:py-40 bg-white overflow-hidden selection:bg-primary selection:text-white z-20">
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
                        className="text-6xl md:text-9xl font-black uppercase tracking-tighter text-slate-900 leading-none mb-12"
                    >
                        From Student <br />
                        <span className="text-slate-800 italic font-serif">to</span> Professional
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="max-w-3xl"
                    >
                        <h3 className="text-2xl md:text-4xl font-black uppercase tracking-tight text-slate-900 mb-6 leading-tight">
                            Witness the evolution of <br />
                            the <span className="text-primary">next-gen</span> creative leaders.
                        </h3>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {students.map((student, index) => (
                        <TransformationCard key={index} student={student} index={index} />
                    ))}
                </div>

                {/* Visual Narrative Grid (Portfolios & Studios) */}
                <div className="mt-24 md:mt-32 grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 group">
                    {[
                        "https://images.pexels.com/photos/1036808/pexels-photo-1036808.jpeg?auto=compress&cs=tinysrgb&w=800",
                        "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800",
                        "https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg?auto=compress&cs=tinysrgb&w=800",
                        "https://images.pexels.com/photos/7005481/pexels-photo-7005481.jpeg?auto=compress&cs=tinysrgb&w=800"
                    ].map((img, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: i * 0.1 }}
                            className="aspect-square rounded-4xl overflow-hidden relative border border-slate-100 shadow-sm hover:translate-y-[-10px] transition-all duration-700"
                        >
                            <img src={img} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" />
                            <div className="absolute inset-0 bg-slate-950/20 opacity-0 hover:opacity-100 transition-opacity" />
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mt-20 text-center"
                >
                    <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 mb-8">Ready to write your own story?</p>
                    <button className="px-12 py-5 bg-slate-900 text-white rounded-full font-black uppercase tracking-widest hover:bg-primary transition-all duration-500 shadow-xl">
                        Start Your Evolution
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default StudentTransformation;
