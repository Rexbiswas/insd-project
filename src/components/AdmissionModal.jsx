import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAdmissionModal } from '../context/AdmissionModalContext';
import AdmissionFormWhite from './AdmissionFormWhite';

const AdmissionModal = () => {
    const { isAdmissionOpen, closeAdmissionModal } = useAdmissionModal();

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (isAdmissionOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isAdmissionOpen]);

    return (
        <AnimatePresence>
            {isAdmissionOpen && (
                <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 sm:p-6 lg:p-8">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeAdmissionModal}
                        className="fixed inset-0 bg-black/80 backdrop-blur-2xl"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="relative w-full max-w-7xl z-10"
                    >
                        <AdmissionFormWhite 
                            isModal={true} 
                            onClose={closeAdmissionModal}
                        />
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default AdmissionModal;

