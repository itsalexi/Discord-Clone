import { useEffect, useState, createContext } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebase';
import { useCollectionData } from 'react-firebase-hooks/firestore';

export const GuildsContext = createContext();

export const GuildsContextProvider = ({ children }) => {
    const q = query(collection(db, 'guilds'));
    const [guildsData] = useCollectionData(q, { idField: 'id' });
    const [guilds, setGuilds] = useState([]);

    useEffect(() => {
        setGuilds(guildsData);
    }, [guildsData]);

    return (
        <GuildsContext.Provider value={guilds}>
            {children}
        </GuildsContext.Provider>
    );
};
