import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Root = () => {
    console.log('some');

    return (
        <div className="flex flex-col justify-between min-h-screen">
            <div>
                <Navbar />
                <div className="container">
                    <Outlet />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Root;
