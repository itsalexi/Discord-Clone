import { onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState, createContext } from 'react';
import { auth } from '../firebase';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [currentAuth, setCurrentAuth] = useState({});

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (user) => {
            setCurrentAuth(user);
            console.log('currently:', user);
        });

        return () => {
            unsub();
        };
    }, []);

    return (
        <AuthContext.Provider value={currentAuth}>
            {children}
        </AuthContext.Provider>
    );
};
