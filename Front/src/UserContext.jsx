import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [values, setValues] = useState({
        id: '',
    });

    const handleUser = (id) => setValues({
        id: id,
    });

    return (
        <UserContext.Provider value={{ ...values, handleUser }}>
            {children}
        </UserContext.Provider >
    );
};
