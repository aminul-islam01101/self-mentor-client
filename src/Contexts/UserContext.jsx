/* eslint-disable react/jsx-no-constructed-context-values */
import {
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    onAuthStateChanged,
    sendEmailVerification,
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,
} from 'firebase/auth';
import { useEffect, useState } from 'react';
import auth from '../configs/firebase.config';

import AuthContext from './AuthContext';

const UserContext = ({ children }) => {
    // hooks
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // create user functionality
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };
    // signIn functionality
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };
    // logout functionality
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    };
    // verifyMail functionality
    const verifyMail = () => sendEmailVerification(auth.currentUser);

    // reset pass functionality
    const sendPassResetEmail = (email) => sendPasswordResetEmail(auth, email);

    // update profile functionality
    const updateUserProfile = (profile) => updateProfile(auth.currentUser, profile);

    // useEffect observer
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
            console.log(firebaseUser);

            if (firebaseUser?.emailVerified) {
                setUser(firebaseUser);
            } else {
                setUser(null);
            }

            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    // google authentication
    const provider = new GoogleAuthProvider();
    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    };

    // const value = useMemo(() => ({ authInfo }), []) as UserValue;
    return (
        <AuthContext.Provider
            value={{
                verifyMail,
                user,
                loading,
                createUser,
                signIn,
                logOut,
                setLoading,
                sendPassResetEmail,
                updateUserProfile,
                googleSignIn,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;