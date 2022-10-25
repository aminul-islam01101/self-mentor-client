/* eslint-disable no-underscore-dangle */
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CategoryDetailsCard from './CategoryDetailsCard';

const CourseCategory = () => {
    const dataNew = useLoaderData();
    console.log(dataNew);
    return (
        <div className="grid grid-cols-2 gap-5 p-5">
            {dataNew.map((item) => (
                <CategoryDetailsCard key={item._id} id={item._id} />
            ))}
        </div>
    );
};

export default CourseCategory;
