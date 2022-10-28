import { useEffect } from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Guilds from '../components/Guilds';
import Sidebar from '../components/Sidebar';
import '../css/Home.css';
import { CurrentContext } from '../components/CurrentContext';
import MainSection from '../components/MainSection';
import { UserInfoContext } from '../components/UserInfoContext';
import SpinnerVideo from '../assets/spinner.webm';

function Home() {
    const { user } = useContext(UserInfoContext);

    const { setCurrentChannel, setCurrentGuild } = useContext(CurrentContext);

    const params = useParams();

    useEffect(() => {
        setCurrentGuild(params?.guildId);
        setCurrentChannel(params?.channelId);
    }, [params]);

    return (
        <div className="home">
            {Object.keys(user).length !== 0 ? (
                <nav>
                    <Guilds />
                    <Sidebar />
                    <MainSection />
                </nav>
            ) : (
                <div className="loading-screen">
                    <video
                        className="loading-video"
                        preload
                        autoPlay
                        loop
                        muted
                    >
                        <source src={SpinnerVideo} type="video/mp4" />
                    </video>
                    <div className="loading-title">DID YOU KNOW</div>
                    <div className="loading-desc">
                        This isn't actually Discord! This is just a clone
                        created by Alexi!
                    </div>
                </div>
            )}
        </div>
    );
}

export default Home;
