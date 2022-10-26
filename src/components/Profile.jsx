/* eslint-disable prefer-destructuring */
/* eslint-disable no-alert */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';

import { Link } from 'react-router-dom';
import AuthContext from '../Contexts/AuthContext';

const Profile = () => {
    //! Hooks
    const [input, setInput] = useState({
        names: '',
        email: '',
        phoneNumber: null,

        photoURL: '',
        checked: false,
    });
    // eslint-disable-next-line no-unused-vars
    const [error, setError] = useState(null);
    const { createUser, updateUserProfile } = useContext(AuthContext);

    // Input field onChange event handler
    const onFieldChange = (event) => {
        let value = event.target.value;
        if (event.target.type === 'checkbox') {
            value = event.target.checked;
        }

        setInput({ ...input, [event.target.name]: value });
    };
    const { names, email, password, photoURL, phoneNumber } = input;

    // verifyMail functionality

    // updateUserProfile functionality
    const handleUpdateProfile = () => {
        const profile = {
            displayName: names,
            photoURL,
            phoneNumber,
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

        // createUser functionality
        createUser(email, password)
            .then((result) => {
                const { user } = result;
                console.log(user);
                form.reset();

                handleUpdateProfile(names, photoURL);
                toast.success('Profile updated successfully');
            })
            .catch((err) => console.error(err));
    };

    return (
        <div className="grid min-h-90v place-items-center ">
            <div className="w-full max-w-md space-y-3 rounded-xl p-8 dark:dark:bg-gray-900 dark:dark:text-gray-100">
                <h1>{error}</h1>
                <h1 className="text-center text-2xl font-bold">Sign-up</h1>
                <form onSubmit={onSubmit} className="ng-untouched ng-pristine ng-valid space-y-6">
                    <div className="space-y-1 text-sm">
                        <label htmlFor="names" className="block dark:dark:text-gray-400">
                            Names
                            <input
                                onChange={onFieldChange}
                                name="names"
                                id="names"
                                placeholder="write your name"
                                className="w-full rounded-md px-4 py-3 dark:dark:border-gray-700 dark:dark:bg-gray-900 dark:dark:text-gray-100 focus:dark:dark:border-violet-400"
                            />
                        </label>
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="names" className="block dark:dark:text-gray-400">
                            Phone Number
                            <input
                                type="number"
                                onChange={onFieldChange}
                                name="phoneNumber"
                                id="phoneNumber"
                                placeholder="write your Phone Number"
                                className="w-full rounded-md px-4 py-3 dark:dark:border-gray-700 dark:dark:bg-gray-900 dark:dark:text-gray-100 focus:dark:dark:border-violet-400"
                            />
                        </label>
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="photoUrl" className="block dark:dark:text-gray-400">
                            Photo Url
                            <input
                                onChange={onFieldChange}
                                name="photoUrl"
                                id="photoUrl"
                                placeholder="place your photoUrl"
                                className="w-full rounded-md px-4 py-3 dark:dark:border-gray-700 dark:dark:bg-gray-900 dark:dark:text-gray-100 focus:dark:dark:border-violet-400"
                            />
                        </label>
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="email" className="block dark:dark:text-gray-400">
                            email
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="write your email"
                                className="w-full rounded-md px-4 py-3 dark:dark:border-gray-700 dark:dark:bg-gray-900 dark:dark:text-gray-100 focus:dark:dark:border-violet-400"
                                required
                                onChange={onFieldChange}
                            />
                        </label>
                    </div>

                    <div className="space-y-1 text-sm">
                        <label htmlFor="conditions" className="block dark:dark:text-gray-400">
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
                        className="block w-full rounded-sm p-3 text-center dark:dark:bg-violet-400 dark:dark:text-gray-900"
                    >
                        Sign up
                    </button>
                </form>

                <p className="text-center text-xs dark:dark:text-gray-400 sm:px-6">
                    Already have an account?
                    <Link
                        to="/login"
                        rel="noopener noreferrer"
                        className="underline dark:dark:text-gray-100"
                    >
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Profile;
