import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';





const InsdBackground = () => {
    return (
        <div className="fixed inset-0 z-0 w-full h-full pointer-events-none mix-blend-screen">
            <Canvas
                camera={{ position: [0, 0, 10], fov: 60 }}
                gl={{ alpha: true, antialias: true }}
                dpr={[1, 1.5]}
            >



                <Environment preset="city" />
            </Canvas>
        </div>
    );
};

export default InsdBackground;
