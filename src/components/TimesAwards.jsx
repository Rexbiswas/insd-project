import React, { useRef, useEffect } from 'react';
import { useInView } from 'framer-motion';
import Matter from 'matter-js';
import gsap from 'gsap';

const TimesAwards = () => {
    const containerRef = useRef(null);
    const sceneRef = useRef(null);
    const engineRef = useRef(null);
    const isInView = useInView(containerRef, { margin: "-100px 0px", once: true });

    useEffect(() => {
        if (!isInView || !sceneRef.current) return;

        // Entrance Animation for text
        gsap.fromTo(".times-header-content",
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
        );

        let engine;
        let render;
        let runner;

        const initMatter = (textureImg) => {
            if (!sceneRef.current) return;

            // Initialize Matter.js Engine
            engine = Matter.Engine.create();
            render = Matter.Render.create({
                element: sceneRef.current,
                engine: engine,
                options: {
                    width: sceneRef.current.clientWidth,
                    height: 600,
                    wireframes: false,
                    background: 'transparent'
                }
            });

            // Add boundaries
            const floor = Matter.Bodies.rectangle(
                sceneRef.current.clientWidth / 2,
                610,
                sceneRef.current.clientWidth,
                20,
                { isStatic: true, render: { fillStyle: 'transparent' } }
            );
            const leftWall = Matter.Bodies.rectangle(
                -10,
                300,
                20,
                600,
                { isStatic: true, render: { fillStyle: 'transparent' } }
            );
            const rightWall = Matter.Bodies.rectangle(
                sceneRef.current.clientWidth + 10,
                300,
                20,
                600,
                { isStatic: true, render: { fillStyle: 'transparent' } }
            );

            // Create a single, larger bouncy award body
            const targetSize = Math.min(500, sceneRef.current.clientWidth * 0.8);
            const scale = targetSize / textureImg.width;
            const aspect = textureImg.height / textureImg.width;

            const width = targetSize;
            const height = targetSize * aspect;

            const awardBody = Matter.Bodies.rectangle(
                sceneRef.current.clientWidth / 2,
                -200,
                width,
                height,
                {
                    chamfer: { radius: 10 },
                    restitution: 0.4,
                    friction: 0.8,
                    frictionAir: 0.02,
                    density: 0.05,
                    render: {
                        sprite: {
                            texture: textureImg.src,
                            xScale: scale,
                            yScale: scale
                        }
                    }
                }
            );

            // Resists spinning to help it stand upright
            Matter.Body.setInertia(awardBody, Infinity);

            Matter.Composite.add(engine.world, [floor, leftWall, rightWall, awardBody]);

            // Add mouse control
            const mouse = Matter.Mouse.create(render.canvas);
            const mouseConstraint = Matter.MouseConstraint.create(engine, {
                mouse: mouse,
                constraint: {
                    stiffness: 0.2,
                    render: { visible: false }
                }
            });
            Matter.Composite.add(engine.world, mouseConstraint);

            render.mouse = mouse;

            Matter.Render.run(render);
            runner = Matter.Runner.create();
            Matter.Runner.run(runner, engine);

            engineRef.current = engine;
        };

        const img = new window.Image();
        // The high-quality TBA Award image from INSD collection
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
    }, [isInView]);

    return (
        <section ref={containerRef} className="relative py-24 md:py-32 bg-[#f3f3f3] overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                {/* Text Content matching the UI in screenshot */}
                <div className="text-center mb-16 times-header-content">
                    <span className="inline-block px-6 py-2 rounded-full bg-slate-200/80 text-slate-700 font-black tracking-[0.2em] uppercase text-[10px] md:text-xs mb-6 shadow-sm">
                        Times of India
                    </span>
                    <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter text-slate-900 leading-none mb-4">
                        Awards Given By <span className="text-slate-800">Times of India</span>
                    </h2>
                    <p className="text-slate-500 font-medium text-sm md:text-base max-w-xl mx-auto opacity-70">
                        Use your mouse or finger to drag and throw the award around.
                    </p>
                </div>

                {/* Interactive Stage */}
                <div 
                    ref={sceneRef}
                    className="w-full max-w-4xl mx-auto h-[600px] bg-transparent rounded-[3rem] relative cursor-grab active:cursor-grabbing"
                >
                    {/* The Physics Canvas is injected here */}
                </div>
            </div>

            {/* Subtle background ambient glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none opacity-40">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px]"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-[100px]"></div>
            </div>
        </section>
    );
};

export default TimesAwards;
