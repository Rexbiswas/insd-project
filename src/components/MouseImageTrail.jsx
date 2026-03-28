import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const MouseImageTrail = ({ containerRef }) => {
    const imagesRef = useRef([]);
    const lastPos = useRef({ x: 0, y: 0 });
    const distanceThreshold = 100; // Pixels distance before spawning next image

    const trailImages = [
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=400&q=80", // High Fashion
        "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=400&q=80", // Luxury Interior
        "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=400&q=80", // Digital Design
        "https://images.unsplash.com/photo-1515562141207-7a88fb0ce33e?auto=format&fit=crop&w=400&q=80", // Jewelry Craft
        "https://images.unsplash.com/photo-1633167606207-d840b5070fc2?auto=format&fit=crop&w=400&q=80", // 3D Animation
        "https://images.unsplash.com/photo-1558583082-409143c794ca?auto=format&fit=crop&w=400&q=80", // Fashion Sketching
        "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=400&q=80", // Modern Campus
        "https://images.unsplash.com/photo-1460661419201-fd4ce186860d?auto=format&fit=crop&w=400&q=80", // Artistic Process
        "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=400&q=80", // Editorial Fashion
        "https://images.unsplash.com/photo-1616486341353-c9e0338272ca?auto=format&fit=crop&w=400&q=80", // Architectural Interior
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=400&q=80", // Graphic Layout
        "https://images.unsplash.com/photo-1576016773322-2616239f1504?auto=format&fit=crop&w=400&q=80", // Luxury Product Design
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
