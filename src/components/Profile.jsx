/* eslint-disable prefer-destructuring */
/* eslint-disable no-alert */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';

import { Link } from 'react-router-dom';
import AuthContext from '../Contexts/AuthContext';
import NoImage from '../assets/images/Image_not_available.png';

const Profile = () => {
    //! Hooks
    const { updateUserProfile, setLoading, user } = useContext(AuthContext);
    const [input, setInput] = useState({
        names: '',
        email: user.email,
        phoneNumber: null,
        photoURL: 'testUrl',
        checked: false,
    });
    const [updateProfile, setUpdateProfile] = useState(false);

    // eslint-disable-next-line no-unused-vars
    const [error, setError] = useState(null);

    // Input field onChange event handler
    const onFieldChange = (event) => {
        let value = event.target.value;
        if (event.target.type === 'checkbox') {
            value = event.target.checked;
        }

        setInput({ ...input, [event.target.name]: value });
    };
    const { names, photoURL, phoneNumber } = input;

    // verifyMail functionality

    // updateUserProfile functionality
    const handleUpdateProfile = () => {
        const profile = {
            displayName: names,
            photoURL,
            phoneNumber,
        };
        console.log(photoURL, phoneNumber, names);

        updateUserProfile(profile)
            .then(() => {})
            .catch((err) => console.error(err))
            .finally(() => {
                setLoading(false);
            });
    };

    // form field onSubmit event handler
    const onSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        handleUpdateProfile();
        toast.success('Profile updated successfully');
        form.reset();
    };
    // update profile handler

    const handleUpdateClick = () => {
        setUpdateProfile(true);
    };

    return (
        <div className="grid min-h-90v place-items-center ">
            <div className="card card-side bg-base-100 shadow-xl">
                <div className="avatar p-5">
                    <div className=" w-36 h-36 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={user?.photoURL || NoImage} alt="" />
                    </div>
                </div>
                <div className="card-body ml-0 pl-0">
                    {(user.displayName && (
                        <h2 className="card-title">Hi, {user.displayName}</h2>
                    )) || <p>User Name: Not available </p>}

                    <p>email:{user.email}</p>
                    <p>Phone Number:{user.phoneNumber || 'Not Available'}</p>

                    <div className="card-actions justify-end">
                        <button
                            onClick={handleUpdateClick}
                            type="button"
                            className="btn btn-primary"
                        >
                            Update Profile
                        </button>
                    </div>
                </div>
            </div>

            {updateProfile && (
                <div className="w-full max-w-md space-y-3 rounded-xl p-8 dark:dark:bg-gray-900 dark:dark:text-gray-100">
                    {/* user profile  top card */}

                    <h1>{error}</h1>
                    <h1 className="text-center text-2xl font-bold">Update Profile</h1>
                    <form
                        onSubmit={onSubmit}
                        className="ng-untouched ng-pristine ng-valid space-y-6"
                    >
                        <div className="space-y-1 text-sm">
                            <label htmlFor="email" className="block dark:dark:text-gray-400">
                                email
                                <input
                                    defaultValue={user.email}
                                    readOnly
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="write your email"
                                    className="w-full rounded-md px-4 py-3 dark:dark:border-gray-700 dark:dark:bg-gray-900 dark:dark:text-gray-100 focus:dark:dark:border-violet-400"
                                />
                            </label>
                        </div>
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
                            <label htmlFor="url" className="block dark:dark:text-gray-400">
                                url
                                <input
                                    onChange={onFieldChange}
                                    name="photoURL"
                                    id="url"
                                    placeholder="write your url"
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
                            className="block w-full rounded-sm p-3 text-center dark:bg-violet-400 dark:text-gray-900"
                        >
                            Update
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
            )}
        </div>
    );
};

export default Profile;
