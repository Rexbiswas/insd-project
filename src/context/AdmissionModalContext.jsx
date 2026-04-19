import React, { createContext, useContext, useState } from 'react';

const AdmissionModalContext = createContext();

export const AdmissionModalProvider = ({ children }) => {
    const [isAdmissionOpen, setIsAdmissionOpen] = useState(false);
    const [modalConfig, setModalConfig] = useState({ title: '', subtitle: '', formType: 'admission' });

    const openAdmissionModal = (config = {}) => {
        setModalConfig({
            title: config.title || '',
            subtitle: config.subtitle || '',
            formType: config.formType || 'admission'
        });
        setIsAdmissionOpen(true);
    };
    const closeAdmissionModal = () => setIsAdmissionOpen(false);

    return (
        <AdmissionModalContext.Provider value={{ isAdmissionOpen, openAdmissionModal, closeAdmissionModal, modalConfig }}>
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
