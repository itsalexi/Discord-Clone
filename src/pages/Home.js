import { useEffect } from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../components/AuthContext';
import Guilds from '../components/Guilds';
import { GuildsContext } from '../components/GuildsContext';
import Sidebar from '../components/Sidebar';
import '../css/Home.css';
import { CurrentContext } from '../components/CurrentContext';
import MainSection from '../components/MainSection';

function Home() {
    const user = useContext(AuthContext);
    const guilds = useContext(GuildsContext);

    const { setCurrentChannel, setCurrentGuild } = useContext(CurrentContext);

    const params = useParams();

    useEffect(() => {
        console.log(params);
        setCurrentGuild(params.guildId);
        setCurrentChannel(params.channelId ? params.channelId : 1);
    }, [params]);

    return (
        <div className="home">
            <nav>
                <Guilds />
                <Sidebar />
                <MainSection />
            </nav>
        </div>
    );
}

export default Home;
