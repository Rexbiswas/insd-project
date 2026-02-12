import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { ContactShadows, Environment } from '@react-three/drei';
import * as THREE from 'three';

const MorphingBlob = () => {
    const blobRef = useRef();
    const materialRef = useRef();

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        const { mouse } = state;

        // Blob Rotation
        if (blobRef.current) {
            blobRef.current.rotation.x = Math.sin(t / 2) * 0.2 + (mouse.y * 0.2);
            blobRef.current.rotation.y = Math.sin(t / 4) * 0.2 + (mouse.x * 0.2);
        }

        // Interactive Material Properties
        if (materialRef.current) {
            // Calculate target color based on Mouse X (-1 to 1)
            // Map -1 (Left) -> Pink (#db2777) | 1 (Right) -> Violet (#7c3aed)
            const targetColor = new THREE.Color().lerpColors(
                new THREE.Color("#db2777"),
                new THREE.Color("#7c3aed"),
                (mouse.x + 1) / 2
            );

            // Smoothly lerp current color to target
            materialRef.current.color.lerp(targetColor, 0.05);

            // Dynamic Distortion based on Mouse distance from center
            const mouseDist = Math.sqrt(mouse.x ** 2 + mouse.y ** 2);
            const targetDistort = 0.4 + (mouseDist * 0.4); // 0.4 to 0.8

            // LERP distortion for smoothness
            materialRef.current.distort = THREE.MathUtils.lerp(materialRef.current.distort, targetDistort, 0.05);
        }
    });

    return (
        null
    );
};

const Particles = () => {
    const count = 500;
    const positions = new Float32Array(count * 3);

    for (let i = 0; i < count * 3; i++) {
        positions[i] = (Math.random() - 0.5) * 20; // Spread wide
    }

    return (
        <points>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    args={[positions, 3]}
                    count={count}
                    itemSize={3}
                    array={positions}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.05}
                color="#8b5cf6" // Violet
                transparent
                opacity={0.6}
                sizeAttenuation={true}
            />
        </points>
    );
};

const Background3D = () => {
    return (
        <div className="fixed inset-0 z-0 pointer-events-none bg-slate-50/50">
            <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
                <ambientLight intensity={0.8} />
                <pointLight position={[10, 10, 10]} intensity={1.5} color="#ec4899" />
                <pointLight position={[-10, -10, -10]} intensity={0.5} color="#6366f1" />

                {/* Environment for nice reflections on the blob */}
                <Environment preset="city" />

                <group position={[3, 0, 0]}>
                    <MorphingBlob />
                </group>

                <Particles />

                <ContactShadows
                    position={[0, -3.5, 0]}
                    opacity={0.4}
                    scale={20}
                    blur={2}
                    far={4.5}
                />
            </Canvas>
        </div>
    );
};

export default Background3D;
