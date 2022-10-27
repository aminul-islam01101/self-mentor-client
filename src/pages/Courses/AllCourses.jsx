/* eslint-disable no-underscore-dangle */
import React, { useContext } from 'react';
import AuthContext from '../../Contexts/AuthContext';
import CategoryDetailsCard from './CategoryDetailsCard';

const AllCourses = () => {
    const { allCoursesData } = useContext(AuthContext);
    return (
        <div>
            <div className="grid lg:grid-cols-2 gap-5 p-10">
                {allCoursesData.map((courses) => (
                    <CategoryDetailsCard key={courses._id} singleCourseData={courses} />
                ))}
            </div>
        </div>
    );
};

export default AllCourses;
