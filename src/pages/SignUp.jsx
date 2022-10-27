/* eslint-disable prefer-destructuring */
/* eslint-disable no-alert */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';

import { Link, Navigate, useLocation } from 'react-router-dom';
import AuthContext from '../Contexts/AuthContext';

const SignUp = () => {
    //! Hooks
    const [input, setInput] = useState({
        names: '',
        email: '',
        password: '',
        confirmPassword: '',
        photoURL: 'testUrl',

        checked: false,
    });
    const location = useLocation();

    const [error, setError] = useState(null);
    const { user: fUser, createUser, verifyMail, updateUserProfile } = useContext(AuthContext);
    const from = location.state?.from?.pathname || '/';

    // Input field onChange event handler
    const onFieldChange = (event) => {
        let value = event.target.value;
        if (event.target.type === 'checkbox') {
            value = event.target.checked;
        }

        setInput({ ...input, [event.target.name]: value });
    };
    const { photoURL, names, email, password, confirmPassword } = input;

    // verifyMail functionality
    const handleVerifyMail = () => {
        verifyMail()
            .then(() => {})
            .catch((e) => console.error(e));
    };
    // updateUserProfile functionality
    const handleUpdateProfile = () => {
        const profile = {
            displayName: names,
            photoURL,
        };
        updateUserProfile(profile)
            .then(() => {})
            .catch((err) => console.error(err));
    };

    // form field onSubmit event handler
    const onSubmit = (event) => {
        event.preventDefault();
        const form = event.target;

        // password validation

        if (password.length < 6) {
            setError('password must be 6 ch');
            alert('password must be 6 ch');

            return;
        }
        if (password !== confirmPassword) {
            setError('password did not match');
            alert('pass did not match');

            return;
        }

        setError('signed up successfully');
        alert('signed up successfully');

        // createUser functionality
        createUser(email, password)
            .then((result) => {
                const { user } = result;
                console.log(user);
                form.reset();
                handleVerifyMail();
                toast.success('please verifyMail');
                handleUpdateProfile();
                user?.uid && Navigate(from, { replace: true });
            })
            .catch((err) => console.error(err));
    };
    console.log(fUser);

    return (
        <div className="grid min-h-90v place-items-center my-36 ">
            <div className="w-full max-w-md space-y-3 rounded-xl p-8 dark:bg-gray-900 dark:text-gray-100 bg-slate-300">
                <h1>{error}</h1>
                <h1 className="text-center text-2xl font-bold">Sign-up</h1>
                <form onSubmit={onSubmit} className="ng-untouched ng-pristine ng-valid space-y-6">
                    <div className="space-y-1 text-sm">
                        <label htmlFor="names" className="block dark:text-gray-400">
                            Name
                            <input
                                onChange={onFieldChange}
                                name="names"
                                id="names"
                                placeholder="write your name"
                                className="w-full rounded-md px-4 py-3 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
                            />
                        </label>
                    </div>
                    {/* photo url */}
                    <div className="space-y-1 text-sm">
                        <label htmlFor="url" className="block dark:text-gray-400">
                            Photo Url
                            <input
                                onChange={onFieldChange}
                                name="photoURL"
                                id="url"
                                placeholder="insert your Photo Url"
                                className="w-full rounded-md px-4 py-3 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
                            />
                        </label>
                    </div>
                    {/* email */}

                    <div className="space-y-1 text-sm">
                        <label htmlFor="email" className="block dark:text-gray-400">
                            email
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="write your email"
                                className="w-full rounded-md px-4 py-3 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
                                required
                                onChange={onFieldChange}
                            />
                        </label>
                    </div>
                    {/* password */}
                   
                    <div className="space-y-1 text-sm">
                        <label htmlFor="password" className="block dark:text-gray-400">
                            Password
                            <input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="write Password"
                                className="w-full rounded-md px-4 py-3 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
                                required
                                onChange={onFieldChange}
                            />
                        </label>
                    </div>
                    {/* confirm password */}
                    <div className="space-y-1 text-sm">
                        <label htmlFor="confirmPassword" className="block dark:text-gray-400">
                            Confirm Password
                            <input
                                type="password"
                                name="confirmPassword"
                                id="confirmPassword"
                                placeholder="Confirm Password"
                                className="w-full rounded-md px-4 py-3 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
                                required
                                onChange={onFieldChange}
                            />
                        </label>
                    </div>

                    <div className="space-y-1 text-sm">
                        <label htmlFor="conditions" className="block dark:text-gray-400">
                            I agree to the terms and conditions
                            <input
                                type="checkbox"
                                name="conditions"
                                onChange={onFieldChange}
                                required
                            />
                        </label>
                    </div>
                    <button
                        type="submit"
                        className="button block w-full rounded-sm p-3 text-center"
                    >
                        Sign up
                    </button>
                </form>

                <p className="text-center text-xs dark:text-gray-400 sm:px-6">
                    Already have an account?
                    <Link
                        to="/login"
                        rel="noopener noreferrer"
                        className="underline dark:text-gray-100"
                    >
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default SignUp;
