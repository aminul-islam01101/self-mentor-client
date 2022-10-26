/* eslint-disable no-underscore-dangle */
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CategoryDetailsCard from './CategoryDetailsCard';

const CourseCategory = () => {
    const categoriesData = useLoaderData();

    return (
        <div className="grid grid-cols-2 gap-5 p-5">
            {categoriesData.map((item) => (
                <CategoryDetailsCard key={item._id} singleCourseData={item} />
            ))}
        </div>
    );
};

export default CourseCategory;
