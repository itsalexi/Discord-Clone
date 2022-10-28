import { useEffect, useState, createContext } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebase';

export const GuildsContext = createContext();

export const GuildsContextProvider = ({ children }) => {
    const [guilds, setGuilds] = useState([]);

    useEffect(() => {
        // this is where we would get the guilds but we will hard-code it for now
        const getGuilds = async () => {
            const q = query(collection(db, 'guilds'));
            const querySnapshot = await getDocs(q);

            let guilds = [];
            querySnapshot.forEach((doc) => {
                guilds.push(doc.data());
            });

            setGuilds(guilds);
        };

        try {
            getGuilds();
        } catch (err) {
            setGuilds([]);
        }
    }, []);

    return (
        <GuildsContext.Provider value={guilds}>
            {children}
        </GuildsContext.Provider>
    );
};
