import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import router from './Routes/Routes';

const App = () => {
    console.log('app');

    return (
        <div>
            <RouterProvider router={router} />
            <Toaster />
        </div>
    );
};

export default App;
