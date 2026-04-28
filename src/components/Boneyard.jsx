import React from 'react';
import { motion } from 'framer-motion';



const Shimmer = () => (
    <div className="absolute inset-0 boneyard-shimmer pointer-events-none" />
);

export const BoneyardBone = ({ width = "100%", height = "12px", className = "" }) => (
    <div 
        className={`boneyard-bone ${className}`} 
        style={{ width, height }}
    >
        <Shimmer />
    </div>
);

export const BoneyardJoint = ({ className = "" }) => (
    <div className={`boneyard-joint boneyard-shimmer ${className}`}>
        <Shimmer />
    </div>
);

export const BoneyardBlock = ({ width = "100%", height = "100%", className = "" }) => (
    <div 
        className={`boneyard-base boneyard-wireframe ${className}`} 
        style={{ width, height }}
    >
        <Shimmer />
    </div>
);

export const BoneyardCircle = ({ size = "40px", className = "" }) => (
    <div 
        className={`rounded-full boneyard-base ${className}`} 
        style={{ width: size, height: size }}
    >
        <Shimmer />
    </div>
);

// High-level Layout Loaders
export const BoneyardCard = () => (
    <div className="p-6 border border-gray-100 rounded-none bg-white space-y-4">
        <BoneyardBlock height="160px" className="mb-4" />
        <BoneyardBone width="70%" height="16px" />
        <BoneyardBone width="40%" height="12px" />
        <div className="flex justify-between items-center pt-4">
            <BoneyardBone width="60px" height="24px" />
            <BoneyardCircle size="32px" />
        </div>
    </div>
);

export const BoneyardTextLine = ({ lines = 3 }) => (
    <div className="space-y-2">
        {[...Array(lines)].map((_, i) => (
            <BoneyardBone 
                key={i} 
                width={i === lines - 1 ? "60%" : "100%"} 
                height="10px" 
            />
        ))}
    </div>
);

export const BoneyardSection = ({ title = true }) => (
    <div className="space-y-6 w-full max-w-4xl mx-auto p-8">
        {title && <BoneyardBone width="40%" height="32px" className="mb-8" />}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <BoneyardCard />
            <BoneyardCard />
            <BoneyardCard />
        </div>
    </div>
);

const Boneyard = {
    Bone: BoneyardBone,
    Joint: BoneyardJoint,
    Block: BoneyardBlock,
    Circle: BoneyardCircle,
    Card: BoneyardCard,
    Text: BoneyardTextLine,
    Section: BoneyardSection
};

export default Boneyard;
