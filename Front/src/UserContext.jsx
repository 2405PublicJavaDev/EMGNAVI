import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [reload, setReload] = useState(false);

    const handleReload = (value) => setReload(value);



    const [values, setValues] = useState({
        userId: '',
        userNickname: '',
    });

    const handleUser = (userId, userNickname) => setValues({
        userId: userId,
        userNickname: userNickname,
    });

    return (
        <UserContext.Provider value={{ reload, handleReload, ...values, handleUser }}>
            {children}
        </UserContext.Provider >
    );
};
