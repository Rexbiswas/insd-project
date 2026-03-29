import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
    {
        id: 1,
        name: "Ankit Khera",
        role: "Jobs Mall, Chhattarpur",
        course: "Fashion Design",
        image: "https://ik.imagekit.io/fmldynl4j4/Untitled%20folder/Untitled%20folder/Copy%20of%20Ankit%20Khera.jpeg",
        quote: "INSD helped me move from basic sketches to a strong portfolio and a full-time job as a Fashion Designer. The shows, juries and software training made interviews feel easy.",
        color: "from-blue-600 to-indigo-600"
    },
    {
        id: 2,
        name: "Sanchita Pal",
        role: "Freelance Designer",
        course: "Graphic Design",
        image: "https://ik.imagekit.io/fmldynl4j4/Untitled%20folder/Untitled%20folder/Copy%20of%20Sanchita%20Pal.jfif",
        quote: "I started taking small freelance graphic design projects in my second year. The feedback on my portfolio and support from faculty gave me the confidence to charge for my skills.",
        color: "from-orange-500 to-red-600"
    },
    {
        id: 3,
        name: "Sameer Siddiqui",
        role: "Gold Mark",
        course: "Jewellery Design",
        image: "https://ik.imagekit.io/fmldynl4j4/Untitled%20folder/Untitled%20folder/Copy%20of%20Sameer%20Siddiqui.jpeg",
        quote: "The hands-on training in jewellery design and the exposure to industry techniques helped me build strong technical skills. The portfolio development sessions and mentor guidance played a key role in helping me secure a position with a reputed jewellery brand.",
        color: "from-yellow-500 to-amber-600"
    },
    {
        id: 4,
        name: "Nitika Gautam",
        role: "Virgo Clothing Culture Private",
        course: "Interior Design",
        image: "https://ik.imagekit.io/fmldynl4j4/Untitled%20folder/Untitled%20folder/Copy%20of%20Nitika%20Gautam%20.jpeg",
        quote: "The placement cell connected me with a top interior design firm in Gurgaon. My 3D visualisation skills and studio projects made me job-ready from day one.",
        color: "from-green-600 to-emerald-600"
    },
    {
        id: 5,
        name: "Sanskriti Jha",
        role: "Graphic Designer at Government of India",
        course: "Graphic Design",
        image: "https://ik.imagekit.io/fmldynl4j4/Untitled%20folder/Untitled%20folder/Copy%20of%20Sanskriti%20Jha%20-%20Testimonial%205%20.jpg",
        quote: "Learning design software alongside creative concepts made a big difference for me. I was able to confidently apply for jobs because I had practical skills that companies were looking for.",
        color: "from-indigo-600 to-purple-600"
    },
    {
        id: 6,
        name: "Preeti Jangra",
        role: "Shiva Arjun Entertainment House (Mumbai)",
        course: "Fashion Design",
        image: "https://ik.imagekit.io/fmldynl4j4/Untitled%20folder/Untitled%20folder/Copy%20of%20Preeti%20Jangra.png",
        quote: "The exposure through workshops, industry visits, and live projects helped me understand how the design industry really works. By the time I graduated, I already had a strong portfolio and internship experience.",
        color: "from-pink-600 to-rose-600"
    },
    {
        id: 7,
        name: "Kajalpriya",
        role: "Aman Export International",
        course: "Interior Design",
        image: "https://ik.imagekit.io/fmldynl4j4/Untitled%20folder/Untitled%20folder/Copy%20of%20Kajalpriya.jpeg",
        quote: "The faculty at INSD constantly pushed us to think creatively and present our ideas professionally. The portfolio reviews and jury feedback prepared me extremely well for client presentations.",
        color: "from-cyan-600 to-blue-600"
    },
    {
        id: 8,
        name: "Muskan Singh",
        role: "Pluch Designs, Gurugram",
        course: "Fashion Design",
        image: "https://ik.imagekit.io/fmldynl4j4/Untitled%20folder/Untitled%20folder/Copy%20of%20Muskan%20Singh%20.jpeg",
        quote: "My time at INSD helped me discover my unique design style. The guidance from mentors and the opportunity to showcase my work in exhibitions boosted my confidence as a designer.",
        color: "from-violet-600 to-purple-600"
    },
    {
        id: 9,
        name: "Anshuman Deb",
        role: "The Design Atelier",
        course: "Interior Design",
        image: "https://ik.imagekit.io/fmldynl4j4/Untitled%20folder/Untitled%20folder/Copy%20of%20Anshuman%20deb.jpeg",
        quote: "The course structure balanced creativity with business understanding. I learned how to design, present, and market my work, which helped me start taking independent projects.",
        color: "from-slate-600 to-slate-900"
    },
    {
        id: 10,
        name: "Rahul Yadav",
        role: "Wriver",
        course: "Interior Design",
        image: "https://ik.imagekit.io/fmldynl4j4/Untitled%20folder/Untitled%20folder/Copy%20of%20Rahul%20Yadav.jpeg",
        quote: "The studio-based learning and practical assignments helped me build a strong design foundation. I felt prepared to handle real client requirements right after completing my course.",
        color: "from-emerald-600 to-teal-700"
    },
    {
        id: 11,
        name: "Himani",
        role: "Virgo Clothing Culture Private",
        course: "Fashion Design",
        image: "https://ik.imagekit.io/fmldynl4j4/Untitled%20folder/Untitled%20folder/Copy%20of%20Himani.jpeg",
        quote: "From mood boards to final collections, every project helped me improve my design thinking. The constant mentoring helped me refine my portfolio for placements.",
        color: "from-amber-600 to-orange-700"
    },
    {
        id: 12,
        name: "Shreya Sinha",
        role: "TO THE NEW Pvt Ltd",
        course: "Graphic Design",
        image: "https://ik.imagekit.io/fmldynl4j4/Untitled%20folder/Untitled%20folder/Copy%20of%20Shreya%20Sinha.jfif",
        quote: "INSD gave me the platform to experiment with different styles and techniques. The guidance from experienced faculty helped me turn my passion for design into a professional career.",
        color: "from-sky-600 to-blue-700"
    },
    {
        id: 13,
        name: "Chitra",
        role: "Casamink",
        course: "Interior Design",
        image: "https://ik.imagekit.io/fmldynl4j4/Untitled%20folder/Untitled%20folder/Copy%20of%20Chitra%20.jpeg",
        quote: "The practical approach to learning at INSD helped me understand design beyond theory. Working on live projects gave me real industry exposure and confidence.",
        color: "from-lime-600 to-green-700"
    },
    {
        id: 14,
        name: "Abhinav Rajput",
        role: "Magiccircle Communication Pvt Ltd",
        course: "Graphic Design",
        image: "https://ik.imagekit.io/fmldynl4j4/Untitled%20folder/Untitled%20folder/Copy%20of%20Abhinav%20Rajput.jfif",
        quote: "INSD gave me the right platform to explore my creativity. The continuous feedback from faculty helped me improve my work and build a strong portfolio.",
        color: "from-indigo-600 to-blue-800"
    },
    {
        id: 15,
        name: "Tamanna Das",
        role: "Sahil Kocchar, Noida",
        course: "Fashion Design",
        image: "https://ik.imagekit.io/fmldynl4j4/Untitled%20folder/Untitled%20folder/Copy%20of%20Tamanna%20Das.jpeg",
        quote: "The fashion shows and jury evaluations pushed me to perform better with every project. It really prepared me for the competitive industry outside.",
        color: "from-rose-600 to-pink-700"
    },
    {
        id: 16,
        name: "Sarabjeet",
        role: "Height Buildcon South",
        course: "Interior Design",
        image: "https://ik.imagekit.io/fmldynl4j4/Untitled%20folder/Untitled%20folder/Copy%20of%20Sarabjeet.jpeg",
        quote: "I learned how to convert ideas into practical designs through hands-on training. The software skills I gained helped me secure my first job quickly.",
        color: "from-teal-600 to-cyan-700"
    },
    {
        id: 17,
        name: "Nimit Lakhanpal",
        role: "GMS Group",
        course: "Graphic Design",
        image: "https://ik.imagekit.io/fmldynl4j4/Untitled%20folder/Untitled%20folder/Copy%20of%20Nimit%20Lakhanpal.jfif",
        quote: "The faculty support at INSD was incredible. They guided me at every step, from concept development to final portfolio presentation.",
        color: "from-violet-600 to-indigo-700"
    },
    {
        id: 18,
        name: "Nausheena Naaz",
        role: "Freelance Stylist",
        course: "Fashion Design",
        image: "https://ik.imagekit.io/fmldynl4j4/Untitled%20folder/Untitled%20folder/Copy%20of%20Nausheena%20Naaz.jpeg",
        quote: "The exposure to different design fields helped me discover my strengths. By the end of the course, I had clarity on my career path.",
        color: "from-fuchsia-600 to-pink-700"
    },
    {
        id: 19,
        name: "Tamanna Dua",
        role: "Portray Interior & Decors LLC, Abu dhabi",
        course: "Interior Design",
        image: "https://ik.imagekit.io/fmldynl4j4/Untitled%20folder/Untitled%20folder/Copy%20of%20Tamanna%20Dua%20.jpeg",
        quote: "INSD helped me build both creative and professional skills. The portfolio preparation and mock interviews made a huge difference during placements.",
        color: "from-emerald-600 to-blue-700"
    }
];

const TestimonialSlider = () => {
    const scrollRef = React.useRef(null);
    const [scrolled, setScrolled] = useState(0);

    const scroll = (direction) => {
        if (scrollRef.current) {
            const container = scrollRef.current;
            const scrollAmount = container.clientWidth * 0.8;
            container.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    const handleScroll = () => {
        if (scrollRef.current) {
            const container = scrollRef.current;
            const progress = container.scrollLeft / (container.scrollWidth - container.clientWidth);
            setScrolled(progress);
        }
    };

    return (
        <section className="relative w-full bg-[#f3f3f3] py-32 overflow-hidden border-y border-slate-300">
            {/* Ambient Background Noise */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30 mix-blend-multiply pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20 md:mb-32">
                    <div className="max-w-2xl">
                        <motion.span 
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="text-primary font-black uppercase tracking-[0.4em] text-xs mb-6 inline-block"
                        >
                            Success Stories
                        </motion.span>
                        <motion.h2 
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-5xl md:text-8xl font-black text-slate-900 leading-[0.8] tracking-tighter uppercase"
                        >
                            From Classroom to Career: <br />
                            <span className="italic font-serif font-light text-slate-300">Voices of INSDians.</span>
                        </motion.h2>
                    </div>

                    {/* Navigation Buttons (Desktop) */}
                    <div className="hidden md:flex gap-4">
                        <button
                            onClick={() => scroll('left')}
                            className="w-20 h-20 rounded-full border border-slate-300 flex items-center justify-center text-slate-400 hover:text-slate-900 hover:bg-white transition-all duration-300 group bg-white/50"
                        >
                            <ChevronLeft className="w-8 h-8 group-hover:-translate-x-1 transition-transform" />
                        </button>
                        <button
                            onClick={() => scroll('right')}
                            className="w-20 h-20 rounded-full border border-slate-300 flex items-center justify-center text-slate-400 hover:text-slate-900 hover:bg-white transition-all duration-300 group bg-white/50"
                        >
                            <ChevronRight className="w-8 h-8 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>

                {/* Horizontal Scroll Track */}
                <div 
                    ref={scrollRef}
                    onScroll={handleScroll}
                    className="flex gap-8 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-24 -mx-12 px-12"
                >
                    {testimonials.map((item, idx) => (
                        <div 
                            key={item.id}
                            className="min-w-[85vw] md:min-w-[45vw] lg:min-w-[32vw] snap-center"
                        >
                            <motion.div 
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="h-full bg-white/70 backdrop-blur-2xl border border-slate-200 rounded-[3rem] p-10 flex flex-col justify-between shadow-2xl relative group overflow-hidden"
                            >
                                {/* Decorative Gradient Overlay */}
                                <div className={`absolute -top-1/2 -right-1/2 w-full h-full bg-linear-to-br ${item.color} blur-[120px] opacity-[0.05] rounded-full pointer-events-none group-hover:opacity-[0.1] transition-opacity duration-700`}></div>

                                <Quote className="w-12 h-12 text-slate-200 mb-8 shrink-0" />

                                <div className="flex-1">
                                    <p className="text-xl md:text-2xl font-light leading-relaxed text-slate-700 italic mb-12">
                                        "{item.quote}"
                                    </p>
                                </div>

                                <div className="flex items-center gap-6 border-t border-slate-100 pt-10 mt-auto">
                                    <div className="relative w-20 h-20 shrink-0">
                                        <div className="absolute inset-0 rounded-full border-2 border-dashed border-slate-200 group-hover:animate-[spin_8s_linear_infinite]"></div>
                                        <div className="absolute inset-1.5 rounded-full overflow-hidden border-2 border-white shadow-lg">
                                            <img 
                                                src={item.image} 
                                                alt={item.name} 
                                                className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="text-slate-900 font-bold text-lg leading-tight mb-0.5">{item.name}</h4>
                                        <p className="text-[10px] font-mono uppercase tracking-widest text-slate-400 mb-1">{item.course}</p>
                                        <p className="text-xs font-bold text-slate-600 mb-3">{item.role}</p>
                                        <div className="inline-block px-3 py-1 rounded-full bg-linear-to-r from-primary to-secondary text-white text-[9px] font-black uppercase tracking-widest">
                                            Alumni
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>

                {/* Progress Bar & Mobile Indicators */}
                <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="w-full md:w-1/3 h-1 bg-slate-200 rounded-full overflow-hidden relative">
                        <motion.div 
                            className="absolute left-0 top-0 h-full bg-primary"
                            style={{ width: `${scrolled * 100}%` }}
                        />
                    </div>
                    
                    <div className="flex gap-3">
                        {testimonials.map((_, i) => (
                            <div 
                                key={i}
                                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${Math.round(scrolled * (testimonials.length - 1)) === i ? 'w-8 bg-primary' : 'bg-slate-300'}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};


export default TestimonialSlider;
