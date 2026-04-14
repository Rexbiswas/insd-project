import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useAdmissionModal } from '../context/AdmissionModalContext';
import AdmissionFormWhite from './AdmissionFormWhite';

const AdmissionModal = () => {
    const { isAdmissionOpen, closeAdmissionModal, modalConfig } = useAdmissionModal();

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
                        className="fixed inset-0 bg-black/60 backdrop-blur-xl"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="relative w-full max-w-5xl z-10 max-h-[90vh] overflow-y-auto custom-scrollbar rounded-4xl bg-white border border-slate-100 shadow-2xl"
                    >
                        {/* Close Button */}
                        <button
                            onClick={closeAdmissionModal}
                            className="absolute top-4 right-4 md:top-6 md:right-6 z-[60] w-10 h-10 bg-slate-900/10 hover:bg-primary text-slate-900 hover:text-white rounded-full flex items-center justify-center transition-all duration-300"
                        >
                            <X size={20} />
                        </button>

                        <AdmissionFormWhite 
                            isModal={true} 
                        />
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default AdmissionModal;
