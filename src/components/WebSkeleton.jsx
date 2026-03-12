import React from 'react';

const WebSkeleton = () => {
    return (
        <div className="w-full min-h-screen bg-white">
            {/* Shimmer Effect Definition */}
            <style>
                {`
                @keyframes shimmer {
                    0% {
                        background-position: -1000px 0;
                    }
                    100% {
                        background-position: 1000px 0;
                    }
                }
                .shimmer {
                    animation: shimmer 2s infinite linear;
                    background: linear-gradient(to right, #f6f7f8 0%, #edeef1 20%, #f6f7f8 40%, #f6f7f8 100%);
                    background-size: 1000px 100%;
                }
                `}
            </style>

            {/* Navbar Skeleton Placeholder */}
            <div className="w-full h-16 md:h-20 flex items-center justify-between px-8 md:px-16 border-b border-slate-50 relative z-10 bg-white/50 backdrop-blur-sm">
                <div className="h-8 w-32 md:w-40 shimmer rounded-lg"></div>
                <div className="hidden md:flex items-center gap-10">
                    <div className="h-4 w-20 shimmer rounded-md"></div>
                    <div className="h-4 w-24 shimmer rounded-md"></div>
                    <div className="h-4 w-20 shimmer rounded-md"></div>
                    <div className="h-4 w-24 shimmer rounded-md"></div>
                </div>
                <div className="h-10 w-24 md:w-32 shimmer rounded-full"></div>
            </div>

            {/* Hero Section Skeleton */}
            <div className="w-full h-[60vh] md:h-[80vh] shimmer -mt-16 md:-mt-20"></div>

            {/* Content Container */}
            <div className="max-w-7xl mx-auto px-6 py-12 space-y-12">
                
                {/* Section Title */}
                <div className="h-10 w-64 shimmer rounded-md mb-8"></div>

                {/* Grid of items */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="space-y-4">
                            <div className="h-48 w-full shimmer rounded-xl"></div>
                            <div className="h-6 w-3/4 shimmer rounded-md"></div>
                            <div className="h-4 w-full shimmer rounded-md"></div>
                            <div className="h-4 w-5/6 shimmer rounded-md"></div>
                        </div>
                    ))}
                </div>

                {/* Long Text Block */}
                <div className="space-y-6 pt-12">
                    <div className="h-8 w-48 shimmer rounded-md"></div>
                    <div className="space-y-3">
                        <div className="h-4 w-full shimmer rounded-md"></div>
                        <div className="h-4 w-full shimmer rounded-md"></div>
                        <div className="h-4 w-full shimmer rounded-md"></div>
                        <div className="h-4 w-3/4 shimmer rounded-md"></div>
                    </div>
                </div>

                {/* Another Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12">
                     <div className="h-64 w-full shimmer rounded-2xl"></div>
                     <div className="space-y-6 flex flex-col justify-center">
                        <div className="h-8 w-1/2 shimmer rounded-md"></div>
                        <div className="h-4 w-full shimmer rounded-md"></div>
                        <div className="h-4 w-full shimmer rounded-md"></div>
                        <div className="h-12 w-40 shimmer rounded-full mt-4"></div>
                     </div>
                </div>
            </div>

            {/* Footer-like area */}
            <div className="w-full h-32 shimmer mt-24 opacity-50"></div>
        </div>
    );
};

export default WebSkeleton;
