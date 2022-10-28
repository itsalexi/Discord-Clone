import { useEffect, useState, createContext } from 'react';

export const GuildsContext = createContext();

export const GuildsContextProvider = ({ children }) => {
    const [guilds, setGuilds] = useState([]);

    useEffect(() => {
        // this is where we would get the guilds but we will hard-code it for now

        const currentGuilds = [
            {
                id: '1',
                name: 'alexi | playground',
                serverImg:
                    'https://cdn.discordapp.com/icons/1031097804682178592/8ee79450b7ad415709b25517858e4531.webp?size=1024',
                channels: [
                    {
                        id: '1',
                        name: 'general',
                        topic: 'chat whatever you want lmao',
                        messages: [],
                    },
                    {
                        id: '2',
                        name: 'help',
                        topic: 'this is where u get help or something',
                        messages: [],
                    },
                    {
                        id: '3',
                        name: 'study',
                        topic: 'this is where we do the studying',
                        messages: [],
                    },
                ],
                members: [
                    {
                        id: '1',
                        name: 'itsAlexi',
                        profileImg:
                            'https://cdn.discordapp.com/avatars/571238926451212288/bee15463914b38ed11a8185f206ed374.webp?size=512',
                    },
                ],
            },
            {
                id: '2',
                name: 'alexi | test',
                serverImg:
                    'https://cdn.discordapp.com/icons/997441395289768026/18deddb196c19860a8d725781cdebe07.webp?size=1024',
                channels: [
                    {
                        id: '1',
                        name: 'general',
                        topic: 'chat all you want here :) this is a testing ground',
                        messages: [],
                    },
                ],
                members: [
                    {
                        id: '1',
                        name: 'itsAlexi',
                        profileImg:
                            'https://cdn.discordapp.com/avatars/571238926451212288/bee15463914b38ed11a8185f206ed374.webp?size=512',
                    },
                ],
            },
        ];

        setGuilds(currentGuilds);
    }, []);

    return (
        <GuildsContext.Provider value={guilds}>
            {children}
        </GuildsContext.Provider>
    );
};
