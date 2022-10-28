import React from 'react';

import { useEffect, useState, createContext, useContext } from 'react';
import { GuildsContext } from './GuildsContext';

export const CurrentContext = createContext();

export const CurrentContextProvider = ({ children }) => {
    const [channelId, setCurrentChannel] = useState(null);
    const [currentGuild, setCurrentGuild] = useState(null);
    const [currentChannel, setChannel] = useState({});
    const [currentGuildObj, setCurrentGuildObj] = useState({});
    const guilds = useContext(GuildsContext);

    useEffect(() => {
        console.log('this is cobj:', currentGuildObj);

        const channel = currentGuildObj?.channels?.find(
            (chan) => Number(chan.id) === Number(channelId)
        );
        console.log('channel id:', channelId);
        setChannel(channel);
    }, [currentGuildObj]);

    useEffect(() => {
        const guild = guilds?.find((guild) => guild.id === currentGuild);
        console.log(guild);
        setCurrentGuildObj(guild);
    }, [currentGuild]);

    return (
        <CurrentContext.Provider
            value={{
                channelId,
                currentGuild,
                setCurrentChannel,
                setCurrentGuild,
                currentGuildObj,
                currentChannel,
            }}
        >
            {children}
        </CurrentContext.Provider>
    );
};
