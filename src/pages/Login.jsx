/* eslint-disable jsx-a11y/anchor-is-valid */

import { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { FaFacebook, FaGithub, FaGoogle, FaTwitter } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import AuthContext from '../Contexts/AuthContext';

const Login = () => {
    const [input, setInput] = useState({
        email: '',
        password: '',
    });

    const { signIn, sendPassResetEmail, setLoading, googleSignIn, githubSignIn } =
        useContext(AuthContext);
    const { email, password } = input;
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const onFieldChange = (event) => {
        const { value } = event.target;

        setInput({ ...input, [event.target.name]: value });
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;

        signIn(email, password)
            .then((result) => {
                const { user } = result;
                console.log(user);
                form.reset();

                user.emailVerified
                    ? navigate(from, { replace: true })
                    : toast.error('not verified');
            })
            .catch((error) => console.error(error))
            .finally(() => {
                setLoading(false);
            });
    };
    const handleForgetPass = () => {
        if (!email) {
            alert('please enter a valid email');
            return;
        }
        sendPassResetEmail(email)
            .then(() => {
                toast.success('reset email sent');
            })
            .catch((error) => {
                console.error(error);
            });
    };
    // handle google sign in
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then((result) => {
                const { user } = result;

                user.emailVerified && navigate(from, { replace: true });
            })
            .catch((error) => {
                console.error(error);
            })
            .finally(() => {
                setLoading(false);
            });
    };
    // handle github sign in
    const handleGithubSignIn = () => {
        githubSignIn()
            .then((result) => {
                const { user } = result;
                console.log(user, user.emailVerified, user.uid);

                user?.uid && navigate(from, { replace: true });
            })
            .catch((error) => {
                console.error(error);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <div className="grid min-h-90v place-items-center ">
            <div className="w-full max-w-md space-y-3 rounded-xl p-8 dark:dark:bg-gray-900 dark:dark:text-gray-100">
                <h1 className="text-center text-2xl font-bold">Login</h1>
                <form
                    onSubmit={handleSubmit}
                    className="ng-untouched ng-pristine ng-valid space-y-6"
                >
                    <div className="space-y-1 text-sm">
                        <label htmlFor="username" className="block dark:dark:text-gray-400">
                            email
                            <input
                                onChange={onFieldChange}
                                type="email"
                                name="email"
                                id="email"
                                placeholder="write your email"
                                className="w-full rounded-md px-4 py-3 dark:dark:border-gray-700 dark:dark:bg-gray-900 dark:dark:text-gray-100 focus:dark:dark:border-violet-400"
                                required
                            />
                        </label>
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="password" className="block dark:dark:text-gray-400">
                            Password
                            <input
                                onChange={onFieldChange}
                                type="password"
                                name="password"
                                id="password"
                                placeholder="Password"
                                className="w-full rounded-md px-4 py-3 dark:dark:border-gray-700 dark:dark:bg-gray-900 dark:dark:text-gray-100 focus:dark:dark:border-violet-400"
                                required
                            />
                        </label>
                    </div>
                    <div className="flex justify-end text-xs dark:dark:text-gray-400">
                        Forgot Password? please
                        <button type="button" className="button" onClick={handleForgetPass}>
                            Reset
                        </button>
                    </div>
                    <button
                        type="submit"
                        className="block w-full rounded-sm p-3 text-center dark:dark:bg-violet-400 dark:dark:text-gray-900"
                    >
                        Login
                    </button>
                </form>
                <div className="flex items-center space-x-1 pt-4">
                    <div className="h-px flex-1 dark:dark:bg-gray-700 sm:w-16" />
                    <p className="px-3 text-sm dark:dark:text-gray-400">
                        Login with social accounts
                    </p>
                    <div className="h-px flex-1 dark:dark:bg-gray-700 sm:w-16" />
                </div>
                <div className="flex justify-center space-x-4">
                    <button
                        onClick={handleGoogleSignIn}
                        type="button"
                        aria-label="Log in with Google"
                        className="rounded-sm p-3"
                    >
                        <FaGoogle />
                    </button>
                    <button
                        type="button"
                        aria-label="Log in with Twitter"
                        className="rounded-sm p-3"
                    >
                        <FaTwitter />
                    </button>
                    <button
                        onClick={handleGithubSignIn}
                        type="button"
                        aria-label="Log in with GitHub"
                        className="rounded-sm p-3"
                    >
                        <FaGithub />
                    </button>
                    <button
                        type="button"
                        aria-label="Log in with Facebook"
                        className="rounded-sm p-3"
                    >
                        <FaFacebook />
                    </button>
                </div>
                <p className="text-center text-xs dark:dark:text-gray-400 sm:px-6">
                    Dont&#39;s have an account?
                    <Link
                        to="/signup"
                        rel="noopener noreferrer"
                        className="underline dark:dark:text-gray-100"
                    >
                        Sign up
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
