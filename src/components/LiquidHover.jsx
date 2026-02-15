import React, { useRef, useMemo, useState, Suspense } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import * as THREE from 'three';

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
  }
`;

const fragmentShader = `
  varying vec2 vUv;
  uniform sampler2D uTexture;
  uniform float uTime;
  uniform float uHover;
  uniform vec2 uMouse;

  void main() {
    vec2 uv = vUv;
    
    // Smooth Liquid frequency
    float freq = 8.0;
    float speed = 1.5;
    
    vec2 pulse = vec2(
        sin(uv.y * freq + uTime * speed),
        cos(uv.x * freq + uTime * speed)
    ) * 0.015 * uHover;
    
    // Mouse interaction displacement
    float dist = distance(uv, uMouse);
    float mouseStrength = smoothstep(0.5, 0.0, dist);
    vec2 mouseOffset = (uv - uMouse) * mouseStrength * 0.1 * uHover;
    
    vec2 finalUv = uv + pulse + mouseOffset;
    
    // Protection against UV overflow
    finalUv = clamp(finalUv, 0.001, 0.999);
    
    // Sample texture with chromatic aberration
    float r = texture2D(uTexture, finalUv + vec2(0.005 * uHover, 0.0)).r;
    float g = texture2D(uTexture, finalUv).g;
    float b = texture2D(uTexture, finalUv - vec2(0.005 * uHover, 0.0)).b;
    
    gl_FragColor = vec4(r, g, b, 1.0);
  }
`;

const LiquidPlane = ({ imageUrl, isHovered }) => {
    const meshRef = useRef();

    // Force anonymous CORS for external images (Pexels)
    const texture = useLoader(THREE.TextureLoader, imageUrl, (loader) => {
        loader.setCrossOrigin('anonymous');
    });

    if (texture) {
        texture.minFilter = THREE.LinearFilter;
        texture.magFilter = THREE.LinearFilter;
        texture.wrapS = texture.wrapT = THREE.ClampToEdgeWrapping;
    }

    const [mouse, setMouse] = useState(new THREE.Vector2(0.5, 0.5));

    const uniforms = useMemo(() => ({
        uTexture: { value: texture },
        uTime: { value: 0 },
        uHover: { value: 0 },
        uMouse: { value: new THREE.Vector2(0.5, 0.5) }
    }), [texture]);

    useFrame((state) => {
        const { clock } = state;
        uniforms.uTime.value = clock.getElapsedTime();
        const targetHover = isHovered ? 1.0 : 0.0;
        uniforms.uHover.value = THREE.MathUtils.lerp(uniforms.uHover.value, targetHover, 0.1);
        uniforms.uMouse.value.lerp(mouse, 0.1);
    });

    return (
        <mesh
            ref={meshRef}
            onPointerMove={(e) => setMouse(e.uv)}
        >
            <planeGeometry args={[2, 2]} />
            <shaderMaterial
                vertexShader={vertexShader}
                fragmentShader={fragmentShader}
                uniforms={uniforms}
                transparent
            />
        </mesh>
    );
};

const LiquidHover = ({ imageUrl, className }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className={`w-full h-full relative overflow-hidden bg-cover bg-center ${className}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
        >
            <Canvas
                gl={{ antialias: true, alpha: true }}
                camera={{ position: [0, 0, 1] }}
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'auto' }}
                onCreated={({ gl }) => {
                    gl.setClearColor(0x000000, 0); // Transparent background
                }}
            >
                <Suspense fallback={null}>
                    <LiquidPlane imageUrl={imageUrl} isHovered={isHovered} />
                </Suspense>
            </Canvas>
        </div>
    );
};

export default LiquidHover;
