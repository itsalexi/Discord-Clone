import React from 'react';

import { useEffect, useState, createContext } from 'react';

export const CurrentContext = createContext();

export const CurrentContextProvider = ({ children }) => {
    const [channelId, setCurrentChannel] = useState(null);
    const [currentGuild, setCurrentGuild] = useState(null);

    return (
        <CurrentContext.Provider
            value={{
                channelId,
                currentGuild,
                setCurrentChannel,
                setCurrentGuild,
            }}
        >
            {children}
        </CurrentContext.Provider>
    );
};
