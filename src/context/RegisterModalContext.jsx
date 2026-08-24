'use client';

import React, { createContext, useContext, useState } from 'react';

const defaultRegister = {
    isOpen: false,
    openModal: () => {},
    closeModal: () => {}
};

const RegisterModalContext = createContext(defaultRegister);

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
    return context || defaultRegister;
};
