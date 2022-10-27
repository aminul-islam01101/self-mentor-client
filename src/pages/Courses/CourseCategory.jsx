/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Aside = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        setCategories([]);
        fetch('https://self-mentor-server.vercel.app/category')
            .then((res) => res.json())

            .then((data) => setCategories(data));
    }, []);

    return (
        <aside className='p-6'>
            <h4>All Category: {categories.length}</h4>
            <div className="grid ">
                <div className=" flex flex-wrap gap-6  p-6">
                    {categories.map((category) => (
                        <p className="hover:underline" key={category.id}>
                            <Link to={`/courses/category/${category.id}`}>{category.name}</Link>
                        </p>
                    ))}
                </div>
            </div>
        </aside>
    );
};

export default Aside;
