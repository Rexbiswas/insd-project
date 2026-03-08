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

            const isMobile = window.innerWidth < 768;
            const containerWidth = sceneRef.current.clientWidth;
            const containerHeight = isMobile ? 400 : 600;

            // Initialize Matter.js Engine
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

            // Add boundaries
            const floor = Matter.Bodies.rectangle(
                containerWidth / 2,
                containerHeight + 10,
                containerWidth,
                20,
                { isStatic: true, render: { fillStyle: 'transparent' } }
            );
            
            // Add side walls with a bit of offset to prevent icons from getting stuck behind floating buttons on the far right
            const wallThickness = 40;
            const leftWall = Matter.Bodies.rectangle(
                -wallThickness/2,
                containerHeight / 2,
                wallThickness,
                containerHeight,
                { isStatic: true, render: { fillStyle: 'transparent' } }
            );
            
            // On mobile, we avoid the right-most edge where floating buttons are
            const rightWallX = isMobile ? containerWidth - 20 : containerWidth + wallThickness/2;
            const rightWall = Matter.Bodies.rectangle(
                rightWallX,
                containerHeight / 2,
                wallThickness,
                containerHeight,
                { isStatic: true, render: { fillStyle: 'transparent' } }
            );

            // Create a single, larger bouncy award body
            const targetSize = isMobile 
                ? Math.min(300, containerWidth * 0.75) 
                : Math.min(500, containerWidth * 0.8);
                
            const scale = targetSize / textureImg.width;
            const aspect = textureImg.height / textureImg.width;

            const width = targetSize;
            const height = targetSize * aspect;

            const awardBody = Matter.Bodies.rectangle(
                containerWidth / 2,
                -200,
                width,
                height,
                {
                    chamfer: { radius: 10 },
                    restitution: 0.6, // Higher bounce
                    friction: 0.1,
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

            // Add mouse control (handles touch automatically)
            const mouse = Matter.Mouse.create(render.canvas);
            const mouseConstraint = Matter.MouseConstraint.create(engine, {
                mouse: mouse,
                constraint: {
                    stiffness: 0.2,
                    render: { visible: false }
                }
            });
            Matter.Composite.add(engine.world, mouseConstraint);

            // Fix for scrolling on touch devices while interacting with physics
            mouse.element.removeEventListener("mousewheel", mouse.mousewheel);
            mouse.element.removeEventListener("DOMMouseScroll", mouse.mousewheel);
            
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
        <section ref={containerRef} className="relative py-16 md:py-32 bg-[#f3f3f3] overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                {/* Text Content matching the UI in screenshot */}
                <div className="text-center mb-10 md:mb-16 times-header-content">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-white border border-slate-200 text-primary font-black tracking-[0.2em] uppercase text-[10px] mb-6 shadow-sm">
                        Times of India
                    </span>
                    <h2 className="text-3xl md:text-7xl font-black uppercase tracking-tighter text-slate-900 leading-none mb-4">
                        Awards Given By <br className="md:hidden" /> <span className="text-slate-800">Times of India</span>
                    </h2>
                    <p className="text-slate-500 font-medium text-xs md:text-base max-w-xl mx-auto opacity-70">
                        Use your finger to drag and throw the award around the stage.
                    </p>
                </div>

                {/* Interactive Stage */}
                <div 
                    ref={sceneRef}
                    className="w-full max-w-4xl mx-auto h-[400px] md:h-[600px] bg-white/50 backdrop-blur-sm border border-slate-200/50 rounded-[2rem] md:rounded-[3rem] relative shadow-inner overflow-hidden"
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
