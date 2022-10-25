import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Error from '../pages/Error';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import Courses from '../pages/Courses/Courses';
import Root from './Root';

import Faq from '../pages/Home/Faq';
import Blogs from '../pages/Blogs/Blogs';
import CourseCategory from '../pages/Courses/CourseCategory';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Root />} errorElement={<Error />}>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            {/* <Route path="/shop" element={<Shop />} />
            <Route path="/shop/:shopId" element={<ProductDetails />} /> */}

            <Route path="/courses" element={<Courses />}>
                <Route
                    path="/courses/:id"
                    element={<CourseCategory />}
                    loader={async ({ params }) =>
                        fetch(`https://self-mentor-server.vercel.app/category/${params.id}`)
                    }
                />
            </Route>
            <Route path="/faq" element={<Faq />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
        </Route>
    )
);

export default router;
