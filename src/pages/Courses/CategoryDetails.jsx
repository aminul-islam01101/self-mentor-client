/* eslint-disable no-underscore-dangle */
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CategoryDetailsCard from './CategoryDetailsCard';

const CourseCategory = () => {
    const categoriesData = useLoaderData();

    return (
        <div className="mt-10">
            {(categoriesData.length === 0 && (
                <h4 className="text-xl">
                    {categoriesData.length} Course Found. Search other category
                </h4>
            )) ||
                (categoriesData.length === 1 && (
                    <h4 className="text-xl">
                        {categoriesData.length} Course Found in this category
                    </h4>
                )) ||
                (categoriesData.length > 1 && (
                    <h4 className="text-xl">
                        {categoriesData.length} Courses Found in this category
                    </h4>
                ))}

            <div className="grid lg:grid-cols-2 gap-5 p-10 lg:p-5">
                {categoriesData.map((item) => (
                    <CategoryDetailsCard key={item._id} singleCourseData={item} />
                ))}
            </div>
        </div>
    );
};

export default CourseCategory;
