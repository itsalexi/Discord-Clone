import { useEffect } from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../components/AuthContext';
import Guilds from '../components/Guilds';
import { GuildsContext } from '../components/GuildsContext';
import Sidebar from '../components/Sidebar';
import '../css/Home.css';

function Home() {
    const user = useContext(AuthContext);
    const guilds = useContext(GuildsContext);

    const [currentGuild, setCurrentGuild] = useState(0);
    const [currentChannel, setCurrentChannel] = useState(0);

    const params = useParams();

    useEffect(() => {
        setCurrentGuild(params.guildId);
        setCurrentChannel(params.channelId);
    }, [params]);

    return (
        <div className="home">
            <nav>
                <Guilds guildId={currentGuild} />
                <Sidebar guildId={currentGuild} channelId={currentChannel} />
            </nav>
        </div>
    );
}

export default Home;
