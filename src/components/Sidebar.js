import React from 'react';
import { UserInfoContext } from './UserInfoContext';
import { GuildsContext } from './GuildsContext';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CurrentContext } from './CurrentContext';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
const Sidebar = () => {
    const { user, setUser } = useContext(UserInfoContext);
    const guilds = useContext(GuildsContext);

    const { channelId, currentGuild } = useContext(CurrentContext);
    const [guild, setGuild] = useState({});
    const [currentChannel, setChannel] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        const isUserInGuild = user?.guilds?.find(
            (guild) => guild.id === currentGuild
        );

        if (isUserInGuild) {
            const guild = guilds.find((guild) => guild.id === currentGuild);
            setGuild(guild);
            console.log('user is in guild');
            console.log('Guild:', guild);
        } else {
            console.log('user is not in the guild lol');
        }

        setChannel(channelId);
    }, [channelId, currentGuild]);

    useEffect(() => {
        console.log(user);
    }, [user]);

    return (
        <div className="sidebar">
            {Object.keys(guild).length !== 0 ? (
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
                                    onClick={() => {
                                        if (
                                            Number(currentChannel) !==
                                            Number(channel.id)
                                        ) {
                                            navigate(
                                                `/${guild.id}/${channel.id}`
                                            );
                                        }
                                    }}
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
            ) : (
                <div className="top-sidebar">
                    <div className="sidebar-search">
                        <div className="find-conversation">
                            Find or start a conversation
                        </div>
                    </div>
                    <div className="sidebar-top-tabs">
                        <div className="friends-tab tab selected">
                            <svg
                                aria-hidden="true"
                                role="img"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                            >
                                <g fill="none" fillRule="evenodd">
                                    <path
                                        fill="currentColor"
                                        fillRule="nonzero"
                                        d="M0.5,0 L0.5,1.5 C0.5,5.65 2.71,9.28 6,11.3 L6,16 L21,16 L21,14 C21,11.34 15.67,10 13,10 C13,10 12.83,10 12.75,10 C8,10 4,6 4,1.5 L4,0 L0.5,0 Z M13,0 C10.790861,0 9,1.790861 9,4 C9,6.209139 10.790861,8 13,8 C15.209139,8 17,6.209139 17,4 C17,1.790861 15.209139,0 13,0 Z"
                                        transform="translate(2 4)"
                                    ></path>
                                    <path d="M0,0 L24,0 L24,24 L0,24 L0,0 Z M0,0 L24,0 L24,24 L0,24 L0,0 Z M0,0 L24,0 L24,24 L0,24 L0,0 Z"></path>
                                </g>
                            </svg>
                            Friends
                        </div>
                        <div className="nitro-tab tab">
                            <svg
                                role="img"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="currentColor"
                                    d="M2.98966977,9.35789159 C2.98966977,9.77582472 2.63442946,10.1240466 2.20807287,10.1240466 L1.78171628,10.1240466 C1.35535969,10.1240466 0.999948837,9.77582472 0.999948837,9.35789159 C0.999948837,8.93995846 1.35535969,8.59173658 1.78171628,8.59173658 L2.20807287,8.59173658 C2.63442946,8.59173658 2.98966977,8.93995846 2.98966977,9.35789159 Z M22.2467643,9.14892503 C24.0942527,12.9800344 22.3888264,17.5772989 18.3384388,19.3882867 C14.4302837,21.1297305 9.74036124,19.457998 7.9638186,15.6268886 C7.60857829,14.8607335 7.3954,14.0248673 7.32428372,13.189001 L5.76091938,13.189001 C5.33456279,13.189001 4.97932248,12.840612 4.97932248,12.4226788 C4.97932248,12.0047457 5.33456279,11.6565238 5.76091938,11.6565238 L8.03493488,11.6565238 C8.46129147,11.6565238 8.81653178,11.3083019 8.81653178,10.8903688 C8.81653178,10.4724357 8.46129147,10.1240466 8.03493488,10.1240466 L4.41090388,10.1240466 C3.98454729,10.1240466 3.62913643,9.77582472 3.62913643,9.35789159 C3.62913643,8.93995846 3.98454729,8.59173658 4.41090388,8.59173658 L9.45606667,8.59173658 C9.88242326,8.59173658 10.2376636,8.24334752 10.2376636,7.82541439 C10.2376636,7.40748126 9.88242326,7.05925937 9.45606667,7.05925937 L7.3954,7.05925937 C6.75586512,7.05925937 6.18727597,6.57161499 6.18727597,5.87517123 C6.18727597,5.24827153 6.68474884,4.69091591 7.3954,4.69091591 L15.4250589,4.69091591 C18.267493,4.8303384 20.9676946,6.43235968 22.2467643,9.14892503 Z M13.2662961,8.38056332 C11.0193969,9.3919615 10.0341721,11.9973566 11.065955,14.1998642 C12.097738,16.4023718 14.755645,17.3681317 17.0025442,16.3567335 C19.249614,15.3453354 20.2346682,12.7399402 19.2028853,10.5374326 C18.1711023,8.33492503 15.5131953,7.36916515 13.2662961,8.38056332 Z M16.8462589,9.84548582 L18.2673907,12.2138293 C18.338507,12.3530846 18.338507,12.4227958 18.2673907,12.5620512 L16.8462589,14.9303946 C16.7751426,15.0696499 16.6330806,15.0696499 16.5619643,15.0696499 L13.7906465,15.0696499 C13.6485845,15.0696499 13.5774682,14.9999387 13.5065225,14.9303946 L12.0852202,12.5620512 C12.0142744,12.4227958 12.0142744,12.3530846 12.0852202,12.2138293 L13.5065225,9.84548582 C13.5774682,9.7062305 13.7197008,9.7062305 13.7906465,9.7062305 L16.5619643,9.7062305 C16.7041969,9.63651925 16.7751426,9.7062305 16.8462589,9.84548582 Z"
                                ></path>
                            </svg>
                            Nitro
                        </div>
                    </div>
                    <div className="direct-messages-tab">
                        <div className="direct-messages-text">
                            <span>DIRECT MESSAGES</span>
                            <span className="direct-message-plus">+</span>
                        </div>
                        <svg
                            className="direct-messages-mock"
                            width="220"
                            height="428"
                            viewBox="0 0 220 428"
                        >
                            <rect
                                x="40"
                                y="6"
                                width="180"
                                height="20"
                                rx="10"
                            ></rect>
                            <circle cx="16" cy="16" r="16"></circle>
                            <rect
                                x="40"
                                y="50"
                                width="180"
                                height="20"
                                rx="10"
                                opacity="0.9"
                            ></rect>
                            <circle
                                cx="16"
                                cy="60"
                                r="16"
                                opacity="0.9"
                            ></circle>
                            <rect
                                x="40"
                                y="94"
                                width="180"
                                height="20"
                                rx="10"
                                opacity="0.8"
                            ></rect>
                            <circle
                                cx="16"
                                cy="104"
                                r="16"
                                opacity="0.8"
                            ></circle>
                            <rect
                                x="40"
                                y="138"
                                width="180"
                                height="20"
                                rx="10"
                                opacity="0.7"
                            ></rect>
                            <circle
                                cx="16"
                                cy="148"
                                r="16"
                                opacity="0.7"
                            ></circle>
                            <rect
                                x="40"
                                y="182"
                                width="180"
                                height="20"
                                rx="10"
                                opacity="0.6"
                            ></rect>
                            <circle
                                cx="16"
                                cy="192"
                                r="16"
                                opacity="0.6"
                            ></circle>
                            <rect
                                x="40"
                                y="226"
                                width="180"
                                height="20"
                                rx="10"
                                opacity="0.5"
                            ></rect>
                            <circle
                                cx="16"
                                cy="236"
                                r="16"
                                opacity="0.5"
                            ></circle>
                            <rect
                                x="40"
                                y="270"
                                width="180"
                                height="20"
                                rx="10"
                                opacity="0.4"
                            ></rect>
                            <circle
                                cx="16"
                                cy="280"
                                r="16"
                                opacity="0.4"
                            ></circle>
                            <rect
                                x="40"
                                y="314"
                                width="180"
                                height="20"
                                rx="10"
                                opacity="0.3"
                            ></rect>
                            <circle
                                cx="16"
                                cy="324"
                                r="16"
                                opacity="0.3"
                            ></circle>
                            <rect
                                x="40"
                                y="358"
                                width="180"
                                height="20"
                                rx="10"
                                opacity="0.2"
                            ></rect>
                            <circle
                                cx="16"
                                cy="368"
                                r="16"
                                opacity="0.2"
                            ></circle>
                            <rect
                                x="40"
                                y="402"
                                width="180"
                                height="20"
                                rx="10"
                                opacity="0.1"
                            ></rect>
                            <circle
                                cx="16"
                                cy="412"
                                r="16"
                                opacity="0.1"
                            ></circle>
                        </svg>
                    </div>
                </div>
            )}

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
                        onClick={() => {
                            signOut(auth);
                            setUser({});
                        }}
                        className="switcher tooltip"
                        data-tip="Logout"
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
