import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import Matter from 'matter-js';
import gsap from 'gsap';

const certificates = [
    {
        id: 1,
        image: "https://ik.imagekit.io/fmldynl4j4/insd-awards/WhatsApp%20Image%202025-05-03%20at%205.24.15%20PM%20(3).jpeg",
        title: "National Award Best Design College",
        tag: "National"
    },
    {
        id: 2,
        image: "https://ik.imagekit.io/fmldynl4j4/insd-awards/academic%20leader%20award.jpg",
        title: "Academic Leader Award",
        tag: "Excellence"
    },
    {
        id: 3,
        image: "https://ik.imagekit.io/fmldynl4j4/insd-awards/Best%20design%20school%20award%202017%20insd.jpg",
        title: "Best Design School Award",
        tag: "Global"
    },
    {
        id: 4,
        image: "https://ik.imagekit.io/fmldynl4j4/insd-awards/INSD%20receives%20National%20award.jpg",
        title: "National Award Outstanding Placement Record",
        tag: "Career"
    },
    {
        id: 5,
        image: "https://image2url.com/r2/default/images/1772097879772-cf85dfcb-8056-49cc-b5f6-a8f006ec8f8a.jpg",
        title: "International College of the Year",
        tag: "Career"
    },
    {
        id: 6,
        image: "https://ik.imagekit.io/fmldynl4j4/insd-awards/Award%20-%20International%20College%20of%20the%20Year%202021_page-0001.jpg?updatedAt=1772091967595",
        title: "International College of the Year",
        tag: "Career"
    }
];

const TOICertification = () => {
    const containerRef = useRef(null);
    const sceneRef = useRef(null);
    const physicsSectionRef = useRef(null);
    const engineRef = useRef(null);
    const isSceneInView = useInView(sceneRef, { margin: "-100px 0px" });
    const isPhysicsInView = useInView(physicsSectionRef, { margin: "-100px 0px", once: true });

    React.useEffect(() => {
        if (isPhysicsInView && physicsSectionRef.current) {
            gsap.fromTo(".physics-header",
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
            );
            gsap.fromTo(sceneRef.current,
                { scale: 0.95, opacity: 0, y: 30 },
                { scale: 1, opacity: 1, y: 0, duration: 1, delay: 0.2, ease: "back.out(1.2)" }
            );
        }
    }, [isPhysicsInView]);

    React.useEffect(() => {
        if (!isSceneInView || !sceneRef.current) return;

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
                    height: 800,
                    wireframes: false,
                    background: 'transparent'
                }
            });

            // Add boundaries
            const floor = Matter.Bodies.rectangle(
                sceneRef.current.clientWidth / 2,
                810,
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

            // Create a single, larger bouncy award body using the provided image
            // We use a responsive massive size to make it feel like a real significant award inside the box
            const targetSize = Math.min(650, sceneRef.current.clientWidth * 0.9);
            const scale = targetSize / textureImg.width;
            const aspect = textureImg.height / textureImg.width;

            const width = targetSize;
            const height = targetSize * aspect;

            const x = sceneRef.current.clientWidth / 2; // Center horizontally
            const y = -200; // Drop from above

            const awardBody = Matter.Bodies.rectangle(x, y, width, height, {
                // A very slight chamfer so it isn't an exact rigid box but retains a flat bottom for standing upright.
                chamfer: { radius: 10 },
                restitution: 0.3, // less bouncy so it settles faster
                friction: 0.8, // more surface friction
                frictionAir: 0.02, // slight air resistance to fall straight
                density: 0.05, // make it heavier
                render: {
                    sprite: {
                        texture: textureImg.src,
                        xScale: scale,
                        yScale: scale
                    }
                }
            });

            // Set high angular inertia so it resists spinning to help it land standing up
            Matter.Body.setInertia(awardBody, Infinity);

            Matter.Composite.add(engine.world, [floor, leftWall, rightWall, awardBody]);

            // Add mouse control
            const mouse = Matter.Mouse.create(render.canvas);
            const mouseConstraint = Matter.MouseConstraint.create(engine, {
                mouse: mouse,
                constraint: {
                    stiffness: 0.2,
                    render: {
                        visible: false
                    }
                }
            });
            Matter.Composite.add(engine.world, mouseConstraint);

            // Keep the mouse in sync with rendering
            render.mouse = mouse;

            Matter.Render.run(render);
            runner = Matter.Runner.create();
            Matter.Runner.run(runner, engine);

            engineRef.current = engine;
        };

        const img = new window.Image();
        img.src = "https://ik.imagekit.io/fmldynl4j4/insd-awards/WhatsApp_Image_2025-05-03_at_5.24.15_PM__1_-removebg-preview.png";
        img.onload = () => {
            initMatter(img);
        };

        return () => {
            img.onload = null;
            if (render) {
                Matter.Render.stop(render);
                if (render.canvas) {
                    render.canvas.remove();
                }
            }
            if (runner) Matter.Runner.stop(runner);
            if (engine) {
                Matter.World.clear(engine.world);
                Matter.Engine.clear(engine);
            }
        };
    }, [isSceneInView]);

    return (
        <section ref={containerRef} className="relative py-24 md:py-32 bg-[#f3f3f3] overflow-hidden">
            {/* Header */}
            <div className="container mx-auto px-6 mb-16 text-center relative z-10">
                <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary font-bold tracking-[0.3em] uppercase text-[10px] md:text-xs mb-6">
                    Official Recognition
                </span>
                <h2 className="text-[8vw] md:text-[4vw] font-black uppercase leading-[0.9] tracking-tighter text-slate-900">
                    Times of India <br className="md:hidden" /> award & <br className="hidden md:block" /> certification badges
                </h2>
            </div>

            {/* Cards Grid */}
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {certificates.map((cert) => (
                        <div
                            key={cert.id}
                            className="relative w-full aspect-[4/5] flex-shrink-0 group rounded-3xl bg-white border border-slate-100 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.1)] transition-all duration-500 overflow-hidden flex flex-col items-center justify-center p-8 cursor-pointer"
                        >
                            {/* Inner Shine Hover Effect */}
                            <div className="absolute inset-0 bg-linear-to-bl from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-20" />

                            {/* Tag */}
                            <div className="absolute top-6 left-6 z-20">
                                <span className="bg-slate-50 text-slate-600 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border border-slate-100 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-colors duration-500">
                                    {cert.tag}
                                </span>
                            </div>

                            {/* Image Container */}
                            <div className="relative w-full h-[60%] flex items-center justify-center mt-8 mb-6 z-10">
                                <img
                                    src={cert.image}
                                    alt={cert.title}
                                    className="max-w-full max-h-full object-contain drop-shadow-xl group-hover:scale-110 transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]"
                                />
                            </div>

                            {/* Title */}
                            <div className="relative z-10 text-center w-full mt-auto">
                                <h3 className="text-lg md:text-xl font-black text-slate-800 uppercase tracking-tighter leading-none group-hover:text-primary transition-colors duration-500">
                                    {cert.title}
                                </h3>
                            </div>

                            {/* Decorative bottom border */}
                            <div className="absolute bottom-0 left-0 w-full h-1.5 bg-slate-100 group-hover:bg-linear-to-r group-hover:from-primary group-hover:to-secondary transition-all duration-500" />
                        </div>
                    ))}
                </div>
            </div>

            {/* Matter.js Interactive Physics Showcase */}
            <div className="container mx-auto px-6 mt-32 relative z-10" ref={physicsSectionRef}>
                <div className="text-center mb-10 physics-header">
                    <span className="inline-block px-4 py-1 rounded-full bg-slate-200 text-slate-800 font-bold tracking-[0.2em] uppercase text-[10px] md:text-xs mb-4">
                        Times of India
                    </span>
                    <h3 className="text-2xl md:text-4xl font-black uppercase tracking-tight text-slate-900">
                        Awards Given By Times Of India
                    </h3>
                    <p className="text-slate-500 mt-2 text-sm max-w-lg mx-auto">Use your mouse or finger to drag and throw the award around.</p>
                </div>

                {/* Physics Container */}
                <div
                    ref={sceneRef}
                    className="w-full max-w-5xl mx-auto h-[600px] bg-[#f3f3f3] rounded-3xl overflow-hidden relative cursor-grab active:cursor-grabbing"
                >
                    {/* The canvas injects here */}
                </div>
            </div>
        </section>
    );
};

export default TOICertification;
