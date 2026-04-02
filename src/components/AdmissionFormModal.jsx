import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useAdmissionModal } from '../context/AdmissionModalContext';
import StepLeadForm from './StepLeadForm';

const AdmissionFormModal = () => {
    const { isAdmissionOpen, closeAdmissionModal, modalConfig } = useAdmissionModal();

    // Lock body scroll when modal is open
    useEffect(() => {
        if (isAdmissionOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isAdmissionOpen]);

    if (!isAdmissionOpen) return null;

    return (
        <AnimatePresence>
            {isAdmissionOpen && (
                <div className="fixed inset-0 z-[10001] flex items-center justify-center p-4">
                    {/* Dark Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeAdmissionModal}
                        className="absolute inset-0 bg-slate-950/90 backdrop-blur-xl"
                    />

                    {/* Modal Content container */}
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 30 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 30 }}
                        transition={{ 
                            type: "spring", 
                            stiffness: 300, 
                            damping: 30,
                            delay: 0.1
                        }}
                        className="relative w-full max-w-6xl max-h-[95vh] overflow-y-auto no-scrollbar rounded-[2.5rem] md:rounded-[4rem] shadow-3xl bg-white border border-slate-200"
                    >
                        {/* Custom Close Button */}
                        <button
                            onClick={closeAdmissionModal}
                            className="absolute top-4 md:top-6 right-4 md:right-6 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-900 transition-all backdrop-blur-md z-50 group border border-slate-200 shadow-sm"
                        >
                            <X size={24} className="group-hover:rotate-90 transition-transform duration-300" />
                        </button>

                        {/* We use the existing AdmissionForm here */}
                        <div className="md:scale-95 origin-center">
                            <StepLeadForm 
                                isModal={true} 
                                title={modalConfig.title} 
                                subtitle={modalConfig.subtitle}
                                initialChoice={modalConfig.initialChoice}
                            />
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default AdmissionFormModal;
