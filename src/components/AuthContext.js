import { useEffect, useState, createContext } from 'react';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState({});

    useEffect(() => {
        // this is where we would auth but we will hard-code a user for now
        const user = {
            id: '1',
            name: 'itsAlexi',
            tag: '1535',
            profileImg:
                'https://cdn.discordapp.com/avatars/571238926451212288/bee15463914b38ed11a8185f206ed374.webp?size=512',
            guilds: [
                {
                    id: '1',
                },
                {
                    id: '2',
                },
            ],
        };

        setCurrentUser(user);
    }, []);

    return (
        <AuthContext.Provider value={currentUser}>
            {children}
        </AuthContext.Provider>
    );
};
