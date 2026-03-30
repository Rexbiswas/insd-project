import React, { createContext, useContext, useState } from 'react';

const AdmissionModalContext = createContext();

export const AdmissionModalProvider = ({ children }) => {
    const [isAdmissionOpen, setIsAdmissionOpen] = useState(false);

    const openAdmissionModal = () => setIsAdmissionOpen(true);
    const closeAdmissionModal = () => setIsAdmissionOpen(false);

    return (
        <AdmissionModalContext.Provider value={{ isAdmissionOpen, openAdmissionModal, closeAdmissionModal }}>
            {children}
        </AdmissionModalContext.Provider>
    );
};

export const useAdmissionModal = () => {
    const context = useContext(AdmissionModalContext);
    if (!context) {
        throw new Error('useAdmissionModal must be used within an AdmissionModalProvider');
    }
    return context;
};
