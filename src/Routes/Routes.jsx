/* eslint-disable no-underscore-dangle */
import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Error from '../pages/Error';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import Courses from '../pages/Courses/Courses';
import Root from './Root';
import ProtectedRoute from './ProtectedRoute';

import Faq from '../pages/Home/Faq';
import Blogs from '../pages/Blogs/Blogs';
import CourseCategory from '../pages/Courses/CategoryDetails';
import CourseDetails from '../pages/Courses/CourseDetails/CourseDetails';
import CoursePurchase from '../pages/Courses/CourseDetails/CoursePurchase';
import Profile from '../components/Profile';
import AllCourses from '../pages/Courses/AllCourses';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route
            path="/"
            element={<Root />}
            errorElement={<Error />}
            loader={async () => fetch('https://self-mentor-server.vercel.app/courses')}
        >
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            {/* <Route path="/shop" element={<Shop />} />
            <Route path="/shop/:shopId" element={<ProductDetails />} /> */}

            <Route path="/courses" element={<Courses />}>
                <Route path="/courses" element={<AllCourses />} />
                <Route
                    path="/courses/category/:id"
                    element={<CourseCategory />}
                    loader={async ({ params }) =>
                        fetch(`https://self-mentor-server.vercel.app/category/${params.id}`)
                    }
                />
            </Route>
            <Route
                path="/course-details/:id"
                element={<CourseDetails />}
                loader={async ({ params }) =>
                    fetch(`https://self-mentor-server.vercel.app/course/${params._id}`)
                }
            />
            <Route
                path="/purchase/:id"
                element={
                    <ProtectedRoute>
                        <CoursePurchase />
                    </ProtectedRoute>
                }
                loader={async ({ params }) =>
                    fetch(`https://self-mentor-server.vercel.app/course/${params.id}`)
                }
            />

            <Route
                path="/profile"
                element={
                    <ProtectedRoute>
                        <Profile />
                    </ProtectedRoute>
                }
            />
            <Route path="/faq" element={<Faq />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
        </Route>
    )
);

export default router;
