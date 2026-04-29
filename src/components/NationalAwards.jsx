import React, { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import Matter from 'matter-js';

const NationalAwards = () => {
    // --- INTERACTIVE AWARD LOGIC ---
    const awardContainerRef = useRef(null);
    const sceneRef = useRef(null);
    const awardInView = useInView(awardContainerRef, { margin: "-100px 0px", once: true });

    useEffect(() => {
        if (!awardInView || !sceneRef.current) return;

        let engine;
        let render;
        let runner;

        const initMatter = (textureImg) => {
            if (!sceneRef.current) return;

            const isMobile = window.innerWidth < 768;
            const containerWidth = sceneRef.current.clientWidth;
            const containerHeight = isMobile ? 350 : 450;

            engine = Matter.Engine.create();
            render = Matter.Render.create({
                element: sceneRef.current,
                engine: engine,
                options: {
                    width: containerWidth,
                    height: containerHeight,
                    wireframes: false,
                    background: 'transparent'
                }
            });

            const floor = Matter.Bodies.rectangle(containerWidth / 2, containerHeight + 10, containerWidth, 20, { isStatic: true, render: { fillStyle: 'transparent' } });
            const leftWall = Matter.Bodies.rectangle(-20, containerHeight / 2, 40, containerHeight, { isStatic: true, render: { fillStyle: 'transparent' } });
            const rightWall = Matter.Bodies.rectangle(containerWidth + 20, containerHeight / 2, 40, containerHeight, { isStatic: true, render: { fillStyle: 'transparent' } });

            const targetSize = isMobile ? containerWidth * 0.6 : 320;
            const scale = targetSize / textureImg.width;
            const aspect = textureImg.height / textureImg.width;

            const awardBody = Matter.Bodies.rectangle(
                containerWidth / 2,
                -100,
                targetSize,
                targetSize * aspect,
                {
                    chamfer: { radius: 10 },
                    restitution: 0.6,
                    friction: 0.1,
                    render: {
                        sprite: {
                            texture: textureImg.src,
                            xScale: scale,
                            yScale: scale
                        }
                    }
                }
            );

            Matter.Body.setInertia(awardBody, Infinity);
            Matter.Composite.add(engine.world, [floor, leftWall, rightWall, awardBody]);

            const mouse = Matter.Mouse.create(render.canvas);
            const mouseConstraint = Matter.MouseConstraint.create(engine, {
                mouse: mouse,
                constraint: { stiffness: 0.2, render: { visible: false } }
            });
            Matter.Composite.add(engine.world, mouseConstraint);

            // Allow scroll penetration
            mouse.element.removeEventListener("mousewheel", mouse.mousewheel);
            mouse.element.removeEventListener("DOMMouseScroll", mouse.mousewheel);

            Matter.Render.run(render);
            runner = Matter.Runner.create();
            Matter.Runner.run(runner, engine);
        };

        const img = new window.Image();
        img.src = "https://ik.imagekit.io/fmldynl4j4/insd-awards/WhatsApp_Image_2025-05-03_at_5.24.15_PM__1_-removebg-preview.png";
        img.onload = () => initMatter(img);

        return () => {
            img.onload = null;
            if (render) {
                Matter.Render.stop(render);
                if (render.canvas) render.canvas.remove();
            }
            if (runner) Matter.Runner.stop(runner);
            if (engine) {
                Matter.World.clear(engine.world);
                Matter.Engine.clear(engine);
            }
        };
    }, [awardInView]);
    // ----------------------------

    return (
        <section className="relative py-32 md:py-48 bg-slate-950 overflow-hidden">
            {/* Confidence Accents */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-linear-to-r from-transparent via-white/20 to-transparent"></div>
                <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -translate-x-1/2"></div>
                <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] translate-x-1/2"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    {/* Confident Proofing Header (Merged Award Section) */}
                    <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-20 md:mb-24">
                        <div className="flex-1 text-center md:text-left">
                            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40 mb-6">India's Design Powerhouse</p>
                            <h2 className="text-clamp-3xl font-black text-white tracking-tighter leading-[0.9] uppercase mb-8">
                                <span className="text-primary">National</span> <br />
                                Award-Winning <br />
                                <span className="text-white/60">Disruptors.</span>
                            </h2>

                            <div className="flex gap-8 md:gap-16 justify-center md:justify-start">
                                <div className="text-center md:text-left">
                                    <p className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-1">99%</p>
                                    <p className="text-[8px] md:text-[9px] font-bold uppercase tracking-widest text-primary">Career Success</p>
                                </div>
                                <div className="text-center md:text-left">
                                    <p className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-1">500+</p>
                                    <p className="text-[8px] md:text-[9px] font-bold uppercase tracking-widest text-primary">Global Partners</p>
                                </div>
                            </div>
                        </div>

                        {/* Interactive Physics Award - Replaced Static Image */}
                        <div ref={awardContainerRef} className="relative w-full md:w-[400px] lg:w-[480px] group">
                            <div className="absolute inset-0 bg-primary/5 blur-[80px] rounded-full group-hover:bg-primary/10 transition-colors duration-1000"></div>
                            <div
                                ref={sceneRef}
                                className="relative z-10 w-full h-[300px] md:h-[450px] cursor-grab active:cursor-grabbing border-y md:border-x border-white/5 rounded-3xl overflow-hidden"
                            >
                                <div className="absolute top-4 left-1/2 -translate-x-1/2 text-[8px] md:text-[9px] font-bold uppercase tracking-[0.3em] text-white/20 whitespace-nowrap pointer-events-none">
                                    <span className="text-primary italic">Times of India</span> • Drag to Interact
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NationalAwards;
