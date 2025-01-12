/* eslint-disable react/prop-types */
import { createContext, useState, useContext, useEffect } from "react";

const AdminContext = createContext();

export const AdminProvider = ({ children }) => {

    const [admin, setAdmin] = useState(() => {
        const savedAdmin = localStorage.getItem("admin");
        return savedAdmin ? JSON.parse(savedAdmin) : null;
    });

    
    useEffect(() => {
        if (admin) {
            localStorage.setItem("admin", JSON.stringify(admin));
        } else {
            localStorage.removeItem("admin");
        }
    }, [admin]);

    return (
        <AdminContext.Provider value={{ admin, setAdmin }}>
            {children}
        </AdminContext.Provider>
    );
};

export const useAdmin = () => useContext(AdminContext);
