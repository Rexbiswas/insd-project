import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedUser = localStorage.getItem('insd_user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const processBackendUser = (backendUser) => {
        let stream = backendUser.academic?.stream || "General";
        let level = backendUser.academic?.level;
        let courseName = stream;

        if (level) {
            courseName = `${level} in ${stream.charAt(0).toUpperCase() + stream.slice(1)}`;
        } else {
            courseName = `${stream.charAt(0).toUpperCase() + stream.slice(1)} Design`;
        }

        let admissionYear = new Date().getFullYear();
        if (backendUser.createdAt) {
            admissionYear = new Date(backendUser.createdAt).getFullYear();
        }

        return {
            ...backendUser,
            courseName,
            admissionYear
        };
    };

    const register = async (userData) => {
        try {
            const response = await fetch('/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || "Registration failed");
            }

            return { success: true, message: data.message };
        } catch (error) {
            throw error;
        }
    };

    const login = async (email, password) => {
        try {
            const response = await fetch('/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || "Login failed");
            }

            // Remove password/token logic from user object and format it
            const formattedUser = processBackendUser(data);

            localStorage.setItem('insd_user', JSON.stringify(formattedUser));
            localStorage.setItem('insd_token', data.token);
            setUser(formattedUser);

            return formattedUser;
        } catch (error) {
            throw error;
        }
    };

    const logout = () => {
        localStorage.removeItem('insd_user');
        localStorage.removeItem('insd_token');
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, register, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};
