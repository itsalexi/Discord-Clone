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
        let channel;
        if (channelId) {
            channel = currentGuildObj?.channels?.find(
                (chan) => String(chan.id) === String(channelId)
            );
        } else {
            if (currentGuildObj?.channels?.length > 0) {
                channel = currentGuildObj.channels[0];
                setCurrentChannel(channelId);
            }
        }

        setChannel(channel);
        console.log('this is the channel:', channel);
    }, [currentGuildObj, guilds]);

    useEffect(() => {
        const guild = guilds?.find(
            (guild) => String(guild.id) === String(currentGuild)
        );
        console.log('setting this to cobj', guild);

        setCurrentGuildObj(guild);
    }, [currentGuild, guilds]);

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
