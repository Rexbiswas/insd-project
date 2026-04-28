import React from 'react';
import Boneyard from './Boneyard';
import { motion, AnimatePresence } from 'framer-motion';
const BoneyardContainer = ({ isLoading, type = "Section", children, ...props }) => {
    return (
        <AnimatePresence mode="wait">
            {isLoading ? (
                <motion.div
                    key="loader"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-full h-full"
                >
                    {(() => {
                        const Loader = Boneyard[type] || Boneyard.Section;
                        return <Loader {...props} />;
                    })()}
                </motion.div>
            ) : (
                <motion.div
                    key="content"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-full h-full"
                >
                    {children}
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default BoneyardContainer;
