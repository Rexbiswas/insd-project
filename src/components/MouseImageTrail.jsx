import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const MouseImageTrail = ({ containerRef }) => {
    const imagesRef = useRef([]);
    const lastPos = useRef({ x: 0, y: 0 });
    const distanceThreshold = 100; // Pixels distance before spawning next image

    const trailImages = [
        "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?auto=format&fit=crop&w=400&q=70", // Campus
        "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=300&q=70", // Fashion
        "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=300&q=70", // Interior
        "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?auto=format&fit=crop&w=300&q=70", // Graphic
        "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=300&q=70", // Art
        "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=300&q=70", // Classroom
        "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=300&q=70", // Design Process
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=300&q=70", // Digital Tech
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=300&q=70", // Product Design
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
