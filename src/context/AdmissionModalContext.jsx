'use client';

import React, { createContext, useContext, useState } from 'react';

const defaultAdmission = {
    isAdmissionOpen: false,
    openAdmissionModal: () => {},
    closeAdmissionModal: () => {},
    modalConfig: { title: '', subtitle: '', formType: 'admission' }
};

const AdmissionModalContext = createContext(defaultAdmission);

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
    return context || defaultAdmission;
};
