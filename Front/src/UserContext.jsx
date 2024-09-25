import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [values, setValues] = useState({
        uEmail: '',
    });

    const handleUser = (email) => setValues({
        uEmail: email,
    });

    return (
        <UserContext.Provider value={{ ...values, handleUser }}>
            {children}
        </UserContext.Provider >
    );
};
