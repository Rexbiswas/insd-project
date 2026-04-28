import React from 'react';
import Boneyard from './Boneyard';

const WebSkeleton = () => {
    return (
        <div className="w-full min-h-screen bg-white overflow-hidden">
            {/* Navbar Boneyard */}
            <div className="w-full h-16 md:h-20 flex items-center justify-between px-8 md:px-16 border-b border-slate-50 relative z-10 bg-white">
                <Boneyard.Bone width="140px" height="24px" />
                <div className="hidden md:flex items-center gap-10">
                    <Boneyard.Bone width="80px" height="12px" />
                    <Boneyard.Bone width="90px" height="12px" />
                    <Boneyard.Bone width="80px" height="12px" />
                </div>
                <Boneyard.Bone width="120px" height="40px" className="rounded-full" />
            </div>

            {/* Hero Boneyard */}
            <div className="relative w-full h-[60vh] md:h-[80vh] px-8 md:px-16 flex flex-col justify-center gap-8">
                <Boneyard.Bone width="60%" height="80px" className="md:h-[120px]" />
                <Boneyard.Bone width="40%" height="20px" />
                <div className="flex gap-4">
                    <Boneyard.Bone width="160px" height="56px" />
                    <Boneyard.Bone width="160px" height="56px" />
                </div>
                {/* Abstract wireframe element */}
                <div className="absolute right-0 top-1/4 w-1/3 h-2/3 border-l border-t border-slate-100 opacity-20 pointer-events-none" />
            </div>

            {/* Content Container */}
            <div className="max-w-7xl mx-auto px-6 py-20 space-y-24">
                
                {/* Section Template */}
                <div className="space-y-12">
                    <Boneyard.Bone width="300px" height="40px" />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <Boneyard.Card />
                        <Boneyard.Card />
                        <Boneyard.Card />
                    </div>
                </div>

                {/* Wireframe Block Template */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <Boneyard.Block height="500px" />
                    <div className="space-y-8">
                        <Boneyard.Bone width="80%" height="48px" />
                        <Boneyard.Text lines={6} />
                        <Boneyard.Bone width="180px" height="56px" />
                    </div>
                </div>

                {/* Stats / Joint Pattern */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-20 border-y border-slate-50">
                    {[1, 2, 3, 4].map(i => (
                        <div key={i} className="flex flex-col items-center gap-4">
                            <Boneyard.Joint />
                            <Boneyard.Bone width="60%" height="24px" />
                            <Boneyard.Bone width="40%" height="12px" />
                        </div>
                    ))}
                </div>
            </div>

            {/* Footer Area */}
            <div className="w-full h-64 bg-slate-50/50 mt-20 p-16 flex justify-between">
                <div className="space-y-4 w-1/4">
                    <Boneyard.Bone width="100%" height="20px" />
                    <Boneyard.Text lines={3} />
                </div>
                <div className="flex gap-12">
                    <div className="space-y-4"><Boneyard.Bone width="80px" height="12px" /><Boneyard.Bone width="80px" height="12px" /></div>
                    <div className="space-y-4"><Boneyard.Bone width="80px" height="12px" /><Boneyard.Bone width="80px" height="12px" /></div>
                </div>
            </div>
        </div>
    );
};

export default WebSkeleton;
