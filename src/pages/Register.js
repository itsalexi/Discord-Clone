import '../css/Register.css';
import { Link } from 'react-router-dom';
import AnimatedPage from '../components/AnimatedPage';

function Register() {
    return (
        <div className="register">
            <AnimatedPage>
                <div className="register-box">
                    <p className="register-box__title">Create an account</p>
                    <form className="register-form">
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
