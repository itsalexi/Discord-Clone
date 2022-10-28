import React, { useContext } from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import { AuthContext } from './AuthContext';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebase';
import { useEffect } from 'react';
export const UserInfoContext = createContext();

export const UserInfoContextProvider = ({ children }) => {
    const auth = useContext(AuthContext);

    const [user, setUser] = useState({});

    useEffect(() => {
        const findUser = async () => {
            const q = query(
                collection(db, 'users'),
                where('id', '==', auth?.uid)
            );

            const querySnapshot = await getDocs(q);
            await new Promise((r) => setTimeout(r, 2000));

            querySnapshot.forEach((doc) => {
                setUser(doc.data());
            });
        };

        try {
            findUser();
        } catch (err) {
            setUser({});
        }
    }, [auth]);

    return (
        <UserInfoContext.Provider value={{ user, setUser }}>
            {children}
        </UserInfoContext.Provider>
    );
};
