import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const Page = ({ title }) => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-slate-50 text-slate-900 pt-32 px-4">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="max-w-4xl w-full mx-auto text-center"
            >
                <motion.h1
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-6xl md:text-8xl font-black mb-6 text-slate-900"
                >
                    {title}
                </motion.h1>
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100px" }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="h-2 bg-gradient-to-r from-pink-500 to-violet-600 mx-auto rounded-full mb-8"
                />
                <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-xl text-slate-600 max-w-2xl mx-auto"
                >
                    We are currently crafting an extraordinary experience for this page. Stay tuned.
                </motion.p>
            </motion.div>
        </div>
    );
};

export default Page;
