import '../css/Login.css';
import { Link, useNavigate } from 'react-router-dom';
import AnimatedPage from '../components/AnimatedPage';
function Login() {
    const navigate = useNavigate();

    return (
        <div className="login">
            <AnimatedPage>
                <div className="login-box">
                    <div className="login-left-box">
                        <p className="login-box__title">Welcome back!</p>
                        <p className="login-box__description">
                            We're so excited to see you again!
                        </p>
                        <form className="login-form">
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
                            <button
                                onClick={() => {
                                    navigate(`/`);
                                }}
                                type="submit"
                                className="register_continue"
                            >
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
                            src="https://i.ibb.co/Smpv7hf/discordqr.png"
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
