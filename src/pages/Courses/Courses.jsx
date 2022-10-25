/* eslint-disable no-underscore-dangle */

import { Outlet } from 'react-router-dom';
import Aside from './CourseCategory';

const Courses = () => (
    <div className="grid grid-cols-[1fr_3fr]">
        <Aside />
        <Outlet />
    </div>
);

export default Courses;
