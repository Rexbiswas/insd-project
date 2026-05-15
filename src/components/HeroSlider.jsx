import React from 'react';

const HeroSlider = () => {
    return (
        <div className="relative w-full h-full overflow-hidden group select-none rounded-none">
            {/* Main Hero Image */}
            <div className="relative w-full h-full overflow-hidden">
                <img
                    src="https://ik.imagekit.io/fmldynl4j4/Removed%20background.png?tr=w-1600,q-80,f-auto"
                    alt="Student with Vision"
                    className="w-full h-full object-cover object-right"
                />
            </div>
        </div>
    );
};

export default HeroSlider;
