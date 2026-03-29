import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const MouseImageTrail = ({ containerRef }) => {
    const imagesRef = useRef([]);
    const lastPos = useRef({ x: 0, y: 0 });
    const distanceThreshold = 100; // Pixels distance before spawning next image

    const trailImages = [
        "https://ik.imagekit.io/fmldynl4j4/insd-awards/Gemini_Generated_Image_wy3si8wy3si8wy3s.png", // Creative Visualization
        "https://ik.imagekit.io/fmldynl4j4/insd-awards/Gemini_Generated_Image_u2ubidu2ubidu2ub.png", // Design Excellence
        "https://ik.imagekit.io/fmldynl4j4/insd-awards/Gemini_Generated_Image_hzzhu5hzzhu5hzzh.png", // Professional Profile
        "https://ik.imagekit.io/fmldynl4j4/insd-awards/Screenshot%202026-03-10%20162457.png", // AI Future Design
        "https://ik.imagekit.io/fmldynl4j4/Untitled%20folder/Copy%20of%20Fd%20.png", // Fashion Studio
        "https://images.unsplash.com/photo-1539109132332-94a105686730?auto=format&fit=crop&q=80&w=400", // Haute Couture
        "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=400", // Design Process
        "https://insd.edu.in/wp-content/uploads/2021/04/India_Today_Group_Logo.png", // Press Recognition
        "https://insd.edu.in/wp-content/uploads/2021/04/TheHindu-Logo.png", // Press Recognition
        "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=400", // Luxury Interior
    ];

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        let imageIndex = 0;

        const handleMouseMove = (e) => {
            const rect = container.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            // Calculate distance from last position
            const dist = Math.hypot(x - lastPos.current.x, y - lastPos.current.y);

            if (dist > distanceThreshold) {
                spawnImage(x, y);
                lastPos.current = { x, y };
            }
        };

        const spawnImage = (x, y) => {
            const img = document.createElement('img');
            const randomImage = trailImages[Math.floor(Math.random() * trailImages.length)];
            img.src = randomImage;
            
            // Random variation to make it look "hand-generated"
            const randomRotation = Math.random() * 40 - 20; // -20 to 20 deg
            const randomXOffset = Math.random() * 40 - 20;
            const randomYOffset = Math.random() * 40 - 20;
            const randomScale = 0.4 + Math.random() * 0.4; // 0.4 to 0.8

            img.className = "absolute w-40 h-52 object-contain rounded-lg shadow-[0_20px_50px_rgba(0,0,0,0.3)] pointer-events-none z-0 opacity-0 border border-white/20 bg-white/10 backdrop-blur-sm p-1";
            img.style.left = `${x + randomXOffset}px`;
            img.style.top = `${y + randomYOffset}px`;
            img.style.transform = `translate(-50%, -50%) rotate(${randomRotation}deg) scale(${randomScale})`;

            container.appendChild(img);

            // GSAP Animation - High-end elastic feel
            gsap.to(img, {
                opacity: 1,
                scale: 1,
                duration: 0.6,
                ease: "expo.out"
            });

            gsap.to(img, {
                opacity: 0,
                scale: 1.2,
                y: "-=50",
                duration: 0.8,
                delay: 0.5,
                ease: "power2.in",
                onComplete: () => {
                    img.remove();
                }
            });
        };

        container.addEventListener('mousemove', handleMouseMove);
        return () => container.removeEventListener('mousemove', handleMouseMove);
    }, [containerRef]);

    return null; // This component just handles side effects
};

export default MouseImageTrail;
