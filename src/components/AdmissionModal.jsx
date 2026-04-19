import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAdmissionModal } from '../context/AdmissionModalContext';
import AdmissionFormWhite from './AdmissionFormWhite';
import StepLeadForm from './StepLeadForm';

const AdmissionModal = () => {
    const { isAdmissionOpen, closeAdmissionModal, modalConfig } = useAdmissionModal();

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (isAdmissionOpen) {
            document.body.classList.add('hide-navbar');
            document.body.style.overflow = 'hidden';
        } else {
            document.body.classList.remove('hide-navbar');
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.classList.remove('hide-navbar');
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
                        className="fixed inset-0 bg-white/90 backdrop-blur-3xl"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="relative w-full max-w-7xl z-10"
                    >
                        {modalConfig.formType === 'step' ? (
                            <StepLeadForm 
                                isModal={true} 
                                title={modalConfig.title} 
                                subtitle={modalConfig.subtitle} 
                            />
                        ) : (
                            <AdmissionFormWhite 
                                isModal={true} 
                                onClose={closeAdmissionModal}
                            />
                        )}
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default AdmissionModal;

