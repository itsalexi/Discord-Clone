import React from 'react';
import { AuthContext } from './AuthContext';
import { GuildsContext } from './GuildsContext';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Sidebar = (props) => {
    const user = useContext(AuthContext);
    const guilds = useContext(GuildsContext);
    const { guildId, channelId } = props;
    const [guild, setGuild] = useState({});
    const [currentChannel, setChannel] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        const isUserInGuild = user?.guilds?.find(
            (guild) => guild.id === guildId
        );

        if (isUserInGuild) {
            const guild = guilds.find((guild) => guild.id === guildId);
            setGuild(guild);
            console.log('user is in guild');
        } else {
            console.log('user is not in the guild lol');
        }

        if (!channelId) {
            console.log('there is no channel id');
            setChannel(1);
        } else {
            setChannel(channelId);
        }
    }, [guildId, channelId]);

    useEffect(() => {
        console.log(currentChannel);
    }, [currentChannel]);

    return (
        <div className="sidebar">
            <div className="top-sidebar">
                <div className="guild-information">{guild.name}</div>
                <div className="channel-list">
                    {guild?.channels?.map((channel) => {
                        return (
                            <div
                                key={channel.id}
                                className={
                                    Number(currentChannel) ===
                                    Number(channel.id)
                                        ? 'channel selected'
                                        : 'channel'
                                }
                                onClick={() =>
                                    navigate(`/${guild.id}/${channel.id}`)
                                }
                            >
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    className="icon-2W8DHg"
                                    role="img"
                                >
                                    <path
                                        fill="currentColor"
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M5.88657 21C5.57547 21 5.3399 20.7189 5.39427 20.4126L6.00001 17H2.59511C2.28449 17 2.04905 16.7198 2.10259 16.4138L2.27759 15.4138C2.31946 15.1746 2.52722 15 2.77011 15H6.35001L7.41001 9H4.00511C3.69449 9 3.45905 8.71977 3.51259 8.41381L3.68759 7.41381C3.72946 7.17456 3.93722 7 4.18011 7H7.76001L8.39677 3.41262C8.43914 3.17391 8.64664 3 8.88907 3H9.87344C10.1845 3 10.4201 3.28107 10.3657 3.58738L9.76001 7H15.76L16.3968 3.41262C16.4391 3.17391 16.6466 3 16.8891 3H17.8734C18.1845 3 18.4201 3.28107 18.3657 3.58738L17.76 7H21.1649C21.4755 7 21.711 7.28023 21.6574 7.58619L21.4824 8.58619C21.4406 8.82544 21.2328 9 20.9899 9H17.41L16.35 15H19.7549C20.0655 15 20.301 15.2802 20.2474 15.5862L20.0724 16.5862C20.0306 16.8254 19.8228 17 19.5799 17H16L15.3632 20.5874C15.3209 20.8261 15.1134 21 14.8709 21H13.8866C13.5755 21 13.3399 20.7189 13.3943 20.4126L14 17H8.00001L7.36325 20.5874C7.32088 20.8261 7.11337 21 6.87094 21H5.88657ZM9.41045 9L8.35045 15H14.3504L15.4104 9H9.41045Z"
                                    ></path>
                                </svg>
                                {channel.name}
                            </div>
                        );
                    })}
                </div>
            </div>
            <section className="panel">
                <div className="user-info">
                    <div className="avatar-wrapper">
                        <img
                            className="avatar"
                            src={user.profileImg}
                            alt="avatar"
                        />
                        <div className="status-holder">
                            <div className="status-icon"></div>
                        </div>
                    </div>
                    <div className="name-tag">
                        <h1
                            className="username tooltip"
                            data-tip="Click to copy username"
                        >
                            {user.name}
                        </h1>
                        <p className="tag">#{user.tag}</p>
                    </div>
                </div>
                <div className="buttons-container">
                    <button className="switcher tooltip" data-tip="Unmute">
                        <svg
                            aria-hidden="true"
                            role="img"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                        >
                            <path
                                d="M6.7 11H5C5 12.19 5.34 13.3 5.9 14.28L7.13 13.05C6.86 12.43 6.7 11.74 6.7 11Z"
                                fill="currentColor"
                            ></path>
                            <path
                                d="M9.01 11.085C9.015 11.1125 9.02 11.14 9.02 11.17L15 5.18V5C15 3.34 13.66 2 12 2C10.34 2 9 3.34 9 5V11C9 11.03 9.005 11.0575 9.01 11.085Z"
                                fill="currentColor"
                            ></path>
                            <path
                                d="M11.7237 16.0927L10.9632 16.8531L10.2533 17.5688C10.4978 17.633 10.747 17.6839 11 17.72V22H13V17.72C16.28 17.23 19 14.41 19 11H17.3C17.3 14 14.76 16.1 12 16.1C11.9076 16.1 11.8155 16.0975 11.7237 16.0927Z"
                                fill="currentColor"
                            ></path>
                            <path
                                d="M21 4.27L19.73 3L3 19.73L4.27 21L8.46 16.82L9.69 15.58L11.35 13.92L14.99 10.28L21 4.27Z"
                                fill="currentColor"
                            ></path>
                        </svg>
                    </button>
                    <button className="switcher tooltip" data-tip="Deafen">
                        <svg
                            aria-hidden="true"
                            role="img"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24">
                                <path
                                    d="M12 2.00305C6.486 2.00305 2 6.48805 2 12.0031V20.0031C2 21.1071 2.895 22.0031 4 22.0031H6C7.104 22.0031 8 21.1071 8 20.0031V17.0031C8 15.8991 7.104 15.0031 6 15.0031H4V12.0031C4 7.59105 7.589 4.00305 12 4.00305C16.411 4.00305 20 7.59105 20 12.0031V15.0031H18C16.896 15.0031 16 15.8991 16 17.0031V20.0031C16 21.1071 16.896 22.0031 18 22.0031H20C21.104 22.0031 22 21.1071 22 20.0031V12.0031C22 6.48805 17.514 2.00305 12 2.00305Z"
                                    fill="currentColor"
                                ></path>
                            </svg>
                        </svg>
                    </button>
                    <button
                        className="switcher tooltip"
                        data-tip="User Settings"
                    >
                        <svg
                            aria-hidden="true"
                            role="img"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                        >
                            <path
                                fill="currentColor"
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M19.738 10H22V14H19.739C19.498 14.931 19.1 15.798 18.565 16.564L20 18L18 20L16.565 18.564C15.797 19.099 14.932 19.498 14 19.738V22H10V19.738C9.069 19.498 8.203 19.099 7.436 18.564L6 20L4 18L5.436 16.564C4.901 15.799 4.502 14.932 4.262 14H2V10H4.262C4.502 9.068 4.9 8.202 5.436 7.436L4 6L6 4L7.436 5.436C8.202 4.9 9.068 4.502 10 4.262V2H14V4.261C14.932 4.502 15.797 4.9 16.565 5.435L18 3.999L20 5.999L18.564 7.436C19.099 8.202 19.498 9.069 19.738 10ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                            ></path>
                        </svg>
                    </button>
                </div>
            </section>
        </div>
    );
};

export default Sidebar;
