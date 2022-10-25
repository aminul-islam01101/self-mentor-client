import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseCategory = () => {
    const dataNew = useLoaderData();
    console.log(dataNew);
    return <div>courseCategory length {dataNew.length}</div>;
};

export default CourseCategory;
