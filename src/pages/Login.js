import '../css/Login.css';
import { Link, useNavigate } from 'react-router-dom';
import AnimatedPage from '../components/AnimatedPage';
import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

function Login() {
    const navigate = useNavigate();

    const [error, setError] = useState(false);

    const handleSubmit = async (e) => {
        setError(false);
        e.preventDefault();
        const email = e.target[0].value;
        const password = e.target[1].value;

        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate('/');
            window.location.reload(false);
        } catch (err) {
            setError(true);
        }
    };

    return (
        <div className="login">
            <AnimatedPage>
                <div className="login-box">
                    <div className="login-left-box">
                        <p className="login-box__title">Welcome back!</p>
                        <p className="login-box__description">
                            We're so excited to see you again!
                        </p>
                        <form onSubmit={handleSubmit} className="login-form">
                            <label
                                htmlFor="login_email"
                                className="register_label"
                            >
                                EMAIL OR PHONE NUMBER{' '}
                                <span className="red-span">*</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="login_email"
                                className="login_input"
                                required={true}
                            />
                            <label
                                htmlFor="login_password"
                                className="register_label"
                            >
                                PASSWORD <span className="red-span">*</span>
                            </label>
                            <input
                                type="password"
                                name="password"
                                id="login_password"
                                className="login_input"
                                required={true}
                            />
                            <Link className="login__link" to="/login">
                                Forgot your password?
                            </Link>
                            {error && (
                                <div className="error-message">
                                    Something went wrong, try again
                                </div>
                            )}
                            <button type="submit" className="register_continue">
                                Login
                            </button>
                            <p className="login-redirect">
                                Need an account?{' '}
                                <Link className="login__link" to="/register">
                                    Register
                                </Link>
                            </p>
                        </form>
                    </div>
                    <div className="login-separator"></div>
                    <div className="login-right-box">
                        <img
                            className="login__qrcode"
                            alt="randomqr"
                            src="https://i.ibb.co/f9w9LD2/discordqr.png"
                        />
                        <p className="login-box__title center">
                            Log in with QR Code
                        </p>
                        <p className="login-box__description">
                            Don't scan this with the <b>Discord mobile app</b>{' '}
                            to log in instantly.
                        </p>
                    </div>
                </div>
            </AnimatedPage>
        </div>
    );
}

export default Login;
