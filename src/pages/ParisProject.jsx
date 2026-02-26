import React, { useRef, useLayoutEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Footer from '../components/Footer';

gsap.registerPlugin(ScrollTrigger);

const ParisProject = () => {
  const containerRef = useRef(null);
  const horizontalRef = useRef(null);
  const galleryContainerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: galleryContainerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["-40%", "0%"]);
  const y3 = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
        // Horizontal Scroll Section
        const pinWrap = horizontalRef.current;
        if (pinWrap) {
          let pinWrapWidth = pinWrap.scrollWidth;
          let horizontalScrollLength = pinWrapWidth - window.innerWidth;

          gsap.to(pinWrap, {
            scrollTrigger: {
              scrub: 1,
              trigger: "#paris-journey",
              pin: true,
              start: "center center",
              end: () => "+=" + horizontalScrollLength,
              invalidateOnRefresh: true
            },
            x: () => -horizontalScrollLength,
            ease: "none"
          });
        }

        // Reveal Text
        gsap.utils.toArray('.reveal-up').forEach((elem) => {
            gsap.fromTo(elem, 
                { y: 50, opacity: 0 },
                { 
                    y: 0, 
                    opacity: 1, 
                    duration: 1, 
                    scrollTrigger: {
                        trigger: elem,
                        start: "top 80%",
                    }
                }
            );
        });
    }, containerRef); // Scope to containerRef

    return () => ctx.revert(); // Clean up on unmount
  }, []);

  return (
    <div ref={containerRef} className="bg-[#f3f3f3] min-h-screen text-slate-900 overflow-hidden font-sans">
      


      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center pt-20 px-6 z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vh] h-[60vh] md:w-[80vh] md:h-[80vh] bg-slate-200 rounded-full blur-3xl opacity-50 z-0 mix-blend-multiply"></div>
        
        <div className="relative z-10 flex flex-col items-center text-center max-w-5xl mx-auto">
            <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-300 bg-white/50 backdrop-blur-md mb-8"
            >
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Global Exposure Program</span>
            </motion.div>

            <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.4, ease: [0.215, 0.61, 0.355, 1] }}
                className="text-6xl md:text-8xl lg:text-[10rem] font-serif leading-[0.85] tracking-tighter text-slate-900"
            >
                The Paris<br/>
                <span className="text-slate-400 italic font-light">Project.</span>
            </motion.h1>

            <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, delay: 1 }}
                className="mt-8 md:mt-12 text-slate-500 max-w-2xl text-lg md:text-xl font-light leading-relaxed tracking-wide"
            >
                Immerse yourself in the fashion capital of the world. A curated, month-long intensive where INSD designers collaborate with European luxury houses.
            </motion.p>
        </div>

        {/* Floating Hero Image */}
        <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: -2 }}
            transition={{ duration: 1.5, delay: 0.8 }}
            className="absolute bottom-10 right-10 w-64 md:w-96 aspect-[3/4] p-2 bg-white shadow-2xl z-20 hidden lg:block"
        >
            <img src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=1000" alt="Paris Architecture" className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700" />
            <div className="absolute -bottom-4 -left-4 bg-slate-900 text-white px-4 py-2 text-xs font-mono uppercase tracking-widest">
                Paris, France
            </div>
        </motion.div>
      </section>

      {/* Intro Stats */}
      <section className="py-20 border-y border-slate-300 relative z-10 bg-[#f3f3f3]">
        <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 divide-x divide-slate-300">
               {[
                   { label: "Duration", value: "30 Days" },
                   { label: "Industry Visits", value: "15+" },
                   { label: "Masterclasses", value: "08" },
                   { label: "Cohort Size", value: "Min. 25" }
               ].map((stat, i) => (
                   <div key={i} className="pl-6 md:pl-12 reveal-up">
                       <h3 className="text-4xl md:text-5xl font-serif text-slate-900 mb-2">{stat.value}</h3>
                       <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">{stat.label}</p>
                   </div>
               ))}
            </div>
        </div>
      </section>

      {/* Horizontal Journey Section */}
      <section id="paris-journey" className="h-[150vh] w-full relative z-10 bg-[#f3f3f3]">
         <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden">
             
             <div className="absolute top-20 left-6 md:left-20 z-20 reveal-up">
                 <h2 className="text-4xl md:text-6xl font-serif text-slate-900 leading-none">The <span className="italic text-slate-400">Itinerary</span></h2>
             </div>

             <div ref={horizontalRef} className="flex gap-16 px-6 md:px-20 items-center w-[max-content] mt-20">
                 
                 {[
                     { day: "Week 01", title: "Haute Couture Exposure", img: "https://images.unsplash.com/photo-1550614000-4b95d4ebf0b8?q=80&w=800", desc: "Private tours of legendary ateliers and museum archives." },
                     { day: "Week 02", title: "Street Luxury & Sourcing", img: "https://images.unsplash.com/photo-1509631179647-0c114ee3c235?q=80&w=800", desc: "Sourcing finest fabrics in Le Marais and studying urban trends." },
                     { day: "Week 03", title: "Design Sprint", img: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=800", desc: "Intensive 48-hour design challenge mentored by Parisian designers." },
                     { day: "Week 04", title: "The Final Showcase", img: "https://images.unsplash.com/photo-1545291730-faff8ca1d4b0?q=80&w=800", desc: "Presenting capsule collections at a bespoke gallery in Paris." }
                 ].map((item, i) => (
                     <div key={i} className="relative w-[85vw] md:w-[40vw] h-[55vh] md:h-[65vh] shrink-0 flex flex-col lg:flex-row gap-8 items-center bg-white p-6 shadow-xl border border-slate-200">
                         <div className="w-full lg:w-1/2 h-48 lg:h-full overflow-hidden relative">
                             <img src={item.img} alt={item.title} className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-1000" />
                             <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-slate-900">
                                 {item.day}
                             </div>
                         </div>
                         <div className="w-full lg:w-1/2 flex flex-col justify-center">
                             <h3 className="text-3xl md:text-4xl font-serif text-slate-900 mb-4">{item.title}</h3>
                             <p className="text-slate-500 font-light leading-relaxed">{item.desc}</p>
                             <div className="w-12 h-[1px] bg-slate-300 mt-8"></div>
                         </div>
                     </div>
                 ))}

             </div>
         </div>
      </section>

      {/* Immersive Parallax Gallery */}
      <section ref={galleryContainerRef} className="relative h-[150vh] bg-[#f3f3f3] overflow-hidden z-10 w-full flex items-center justify-center">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 text-center pointer-events-none mix-blend-difference w-full">
              <h2 className="text-7xl md:text-[12rem] font-serif text-white uppercase tracking-tighter leading-none">L'Éternité</h2>
              <p className="text-white text-lg md:text-2xl uppercase tracking-[0.5em] mt-4 font-bold stroke-text-white/50">The Archives</p>
          </div>
          
          <div className="flex justify-center gap-4 md:gap-8 h-[200vh] w-full px-4 md:px-12 -rotate-6 scale-110 opacity-80 hover:opacity-100 transition-opacity duration-700">
              
              {/* Column 1 - Travels Up */}
              <motion.div style={{ y: y1 }} className="flex flex-col gap-4 md:gap-8 w-1/3 pt-[20vh]">
                  <img src="https://images.unsplash.com/photo-1548624313-0396c75e4b1a?q=80&w=800" alt="Archive 1" className="w-full object-cover filter grayscale hover:grayscale-0 hover:z-20 transform hover:scale-105 transition-all duration-700 shadow-2xl" />
                  <img src="https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?q=80&w=800" alt="Archive 2" className="w-full object-cover filter grayscale hover:grayscale-0 hover:z-20 transform hover:scale-105 transition-all duration-700 shadow-2xl" />
                  <img src="https://images.unsplash.com/photo-1581044777550-4cfa60707c03?q=80&w=800" alt="Archive 3" className="w-full object-cover filter grayscale hover:grayscale-0 hover:z-20 transform hover:scale-105 transition-all duration-700 shadow-2xl" />
              </motion.div>

              {/* Column 2 - Travels Down */}
              <motion.div style={{ y: y2 }} className="flex flex-col gap-4 md:gap-8 w-1/3">
                  <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800" alt="Archive 4" className="w-full object-cover filter grayscale hover:grayscale-0 hover:z-20 transform hover:scale-105 transition-all duration-700 shadow-2xl" />
                  <img src="https://images.unsplash.com/photo-1571285227289-5f259ce34cc7?q=80&w=800" alt="Archive 5" className="w-full object-cover filter grayscale hover:grayscale-0 hover:z-20 transform hover:scale-105 transition-all duration-700 shadow-2xl" />
                  <img src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=800" alt="Archive 6" className="w-full object-cover filter grayscale hover:grayscale-0 hover:z-20 transform hover:scale-105 transition-all duration-700 shadow-2xl" />
              </motion.div>

              {/* Column 3 - Travels Up Fast */}
              <motion.div style={{ y: y3 }} className="flex flex-col gap-4 md:gap-8 w-1/3 pt-[10vh]">
                  <img src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=800" alt="Archive 7" className="w-full object-cover filter grayscale hover:grayscale-0 hover:z-20 transform hover:scale-105 transition-all duration-700 shadow-2xl" />
                  <img src="https://images.unsplash.com/photo-1550614000-4b95d4ebf0b8?q=80&w=800" alt="Archive 8" className="w-full object-cover filter grayscale hover:grayscale-0 hover:z-20 transform hover:scale-105 transition-all duration-700 shadow-2xl" />
                  <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=800" alt="Archive 9" className="w-full object-cover filter grayscale hover:grayscale-0 hover:z-20 transform hover:scale-105 transition-all duration-700 shadow-2xl" />
              </motion.div>

          </div>
      </section>

      {/* Immersive Fashion Show Showcase */}
      <section className="relative w-full min-h-[120vh] bg-white overflow-hidden flex items-center justify-center py-32 z-10 border-y border-slate-300">
          <div className="absolute inset-0 w-full h-full object-cover">
             <motion.img 
                initial={{ scale: 1.1 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 2, ease: "easeOut" }}
                viewport={{ once: true }}
                src="https://images.unsplash.com/photo-1509631179647-0c114ee3c235?q=80&w=2000&auto=format&fit=crop" 
                alt="Paris Fashion Runway" 
                className="w-full h-full object-cover filter grayscale opacity-20 object-top"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-[#f3f3f3] via-transparent to-white/80"></div>
          </div>
          
          <div className="relative z-10 container mx-auto px-6 max-w-7xl flex flex-col items-center">
              <div className="text-center mb-16 reveal-up">
                  <span className="text-xs uppercase tracking-[0.4em] font-bold text-slate-400 mb-6 block border border-slate-300 inline-block px-4 py-1 rounded-full bg-white/50 backdrop-blur-md">The Pinnacle</span>
                  <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif text-slate-900 leading-[0.9] tracking-tighter">
                      Parisian <br/><span className="italic text-slate-400 font-light">Runway.</span>
                  </h2>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full mt-8">
                  <motion.div 
                      initial={{ y: 50, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 1, delay: 0.2 }}
                      viewport={{ once: true }}
                      className="relative aspect-[3/4] w-full max-w-md mx-auto lg:mr-auto overflow-hidden group shadow-2xl bg-slate-100 p-3"
                  >
                      <img src="https://images.unsplash.com/photo-1545291730-faff8ca1d4b0?q=80&w=1000" alt="Couture Detail" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 filter grayscale group-hover:grayscale-0" />
                      <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-500"></div>
                      <div className="absolute bottom-6 left-6 right-6">
                           <div className="bg-white/95 backdrop-blur-md p-5 flex justify-between items-end border border-slate-200 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]">
                               <div>
                                   <p className="text-[10px] uppercase font-bold tracking-widest text-slate-500 mb-1">Look 01</p>
                                   <h4 className="font-serif text-2xl text-slate-900">Avant-Garde</h4>
                               </div>
                               <span className="text-slate-900/40 font-serif italic text-lg">Paris</span>
                           </div>
                      </div>
                  </motion.div>
                  
                  <div className="flex flex-col gap-12 lg:pl-10">
                      <motion.div className="reveal-up">
                          <p className="text-3xl lg:text-4xl font-light text-slate-800 leading-snug font-serif italic mb-6">
                             Experience the raw energy of a live runway show in the heart of Paris. 
                          </p>
                          <div className="w-16 h-[1px] bg-slate-300 mb-6"></div>
                          <p className="text-slate-500 font-light leading-relaxed text-lg">
                             Watch top-tier models showcase collections engineered by INSD visionaries, backed by the dramatic architecture of historic Parisian venues. This isn't just an exhibition; it's a statement of arrival on the global stage. Immerse in the flash bulbs, the elite networking, and the pinnacle of global high-fashion.
                          </p>
                      </motion.div>
                      
                      <motion.div 
                          initial={{ x: 30, opacity: 0 }}
                          whileInView={{ x: 0, opacity: 1 }}
                          transition={{ duration: 1, delay: 0.4 }}
                          viewport={{ once: true }}
                          className="relative aspect-[16/9] w-full overflow-hidden shadow-xl group border border-slate-200"
                      >
                           <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1200" alt="Backstage" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100" />
                           <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                           <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md px-4 py-2 text-[10px] uppercase font-bold tracking-widest text-slate-900 border border-slate-200 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                               Backstage Pass
                           </div>
                      </motion.div>
                  </div>
              </div>
          </div>
      </section>

      {/* Editorial Footer CTA */}
      <section className="py-40 flex items-center justify-center text-center px-6 relative z-10 bg-[#f3f3f3]">
        <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-7xl font-serif text-slate-900 mb-8 leading-[1.1]">
                Your Journey to the <span className="italic text-slate-400">Capital</span>
            </h2>
            <p className="text-slate-500 mb-12 text-lg font-light max-w-xl mx-auto">
                Applications for The Paris Project are highly competitive. Secure your interview slot today for the upcoming cohort.
            </p>
            <button className="bg-slate-900 text-white px-12 py-5 text-sm tracking-[0.2em] font-bold uppercase hover:bg-slate-700 transition-colors duration-300 shadow-2xl">
                Apply for Paris
            </button>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ParisProject;
