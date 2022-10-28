import '../css/Register.css';
import { Link } from 'react-router-dom';
import AnimatedPage from '../components/AnimatedPage';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth, db } from '../firebase';
import { useState } from 'react';
import { doc, setDoc, arrayUnion, updateDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

function Register() {
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    const generatePFP = () => {
        const pfps = [
            'https://better-default-discord.netlify.app/Icons/Gradient-Orange.png',
            'https://better-default-discord.netlify.app/Icons/Gradient-Red.png',
            'https://better-default-discord.netlify.app/Icons/Gradient-Yellow.png',
            'https://better-default-discord.netlify.app/Icons/Gradient-Green.png',
            'https://better-default-discord.netlify.app/Icons/Gradient-Indigo.png',
            'https://better-default-discord.netlify.app/Icons/Gradient-Blue.png',
            'https://better-default-discord.netlify.app/Icons/Gradient-Violet.png',
            'https://better-default-discord.netlify.app/Icons/Gradient-Pink.png',
            'https://better-default-discord.netlify.app/Icons/Gradient-Black.png',
            'https://better-default-discord.netlify.app/Icons/Gradient-Gray.png',
        ];

        const randomIndex = Math.floor(Math.random() * pfps.length);
        return pfps[randomIndex];
    };

    const handleSubmit = async (e) => {
        setError(false);
        e.preventDefault();
        const email = e.target[0].value;
        const username = e.target[1].value;
        const password = e.target[2].value;

        try {
            const res = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );

            const randomPFP = generatePFP();
            const discrim = Math.floor(1000 + Math.random() * 9000);

            await updateProfile(res.user, {
                displayName: username,
                photoURL: randomPFP,
            });

            await setDoc(doc(db, 'users', res.user.uid), {
                id: res.user.uid,
                name: username,
                email,
                tag: discrim,
                profileImg: randomPFP,
                guilds: [
                    {
                        id: 'CtfjiqCHgr2RBkqKTVDP',
                    },
                ],
            });

            // since there is no way to create servers/ manage servers
            // for now, we will "invite" everyone to one main server

            await updateDoc(doc(db, 'guilds', 'CtfjiqCHgr2RBkqKTVDP'), {
                members: arrayUnion({
                    id: res.user.uid,
                    name: username,
                    profileImg: randomPFP,
                }),
            });

            navigate('/');
        } catch (err) {
            console.log(err);
            setError(true);
        }
    };

    return (
        <div className="register">
            <AnimatedPage>
                <div className="register-box">
                    <p className="register-box__title">Create an account</p>
                    <form onSubmit={handleSubmit} className="register-form">
                        <label
                            htmlFor="register_email"
                            className="register_label"
                        >
                            EMAIL
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="register_email"
                            className="register_input"
                            required={true}
                        />
                        <label
                            htmlFor="register_user"
                            className="register_label"
                        >
                            USERNAME
                        </label>
                        <input
                            type="text"
                            name="user"
                            id="register_user"
                            className="register_input"
                            required={true}
                        />
                        <label
                            htmlFor="register_password"
                            className="register_label"
                        >
                            PASSWORD
                        </label>
                        <input
                            type="password"
                            name="password"
                            id="register_password"
                            className="register_input"
                            required={true}
                        />
                        {error && (
                            <span className="error-message">
                                Something went wrong, try again
                            </span>
                        )}
                        <button type="submit" className="register_continue">
                            Continue
                        </button>
                    </form>
                    <Link
                        className="register__link register__login-redirect"
                        to="/login"
                    >
                        Already have an account?
                    </Link>
                    <p className="register__tos">
                        By registering, you agree to Alexi's{' '}
                        <Link className="register__link">Terms of Service</Link>{' '}
                        and{' '}
                        <Link className="register__link">Privacy Policy.</Link>
                    </p>
                </div>
            </AnimatedPage>
        </div>
    );
}

export default Register;
