import React, { createContext, useContext, useState } from 'react';

const RegisterModalContext = createContext();

export const RegisterModalProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    return (
        <RegisterModalContext.Provider value={{ isOpen, openModal, closeModal }}>
            {children}
        </RegisterModalContext.Provider>
    );
};

export const useRegisterModal = () => {
    const context = useContext(RegisterModalContext);
    if (!context) {
        throw new Error('useRegisterModal must be used within a RegisterModalProvider');
    }
    return context;
};
