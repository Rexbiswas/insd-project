import React from 'react';

const HeroSlider = () => {
    return (
        <div className="relative w-full h-full overflow-hidden group select-none rounded-none">
            {/* Main Hero Image */}
            <div className="relative w-full h-full overflow-hidden">
                <img
                    src="https://ik.imagekit.io/fmldynl4j4/Removed%20background.png"
                    alt="Student with Vision"
                    className="w-full h-full object-cover object-right"
                />
            </div>
        </div>
    );
};

export default HeroSlider;
