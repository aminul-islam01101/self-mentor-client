import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => (
    <div>
        <div className="grid h-screen place-content-center bg-white">
            <div className="text-center">
                <strong className="text-9xl font-black text-gray-200">404</strong>

                <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    OOpsss
                </h1>

                <p className="mt-4 text-gray-500">Page is not available.</p>

                <Link
                    to="/"
                    className="mt-6 inline-block rounded button px-5 py-3 text-sm font-medium focus:outline-none focus:ring"
                >
                    Go Back Home
                </Link>
            </div>
        </div>
    </div>
);

export default Error;
