/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Aside = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://self-mentor-server.vercel.app/category')
            .then((res) => res.json())
            .then((data) => setCategories(data));
    }, []);

    return (
        <aside>
            <h4>All Category: {categories.length}</h4>
            <div className="grid grid-cols-[1fr_3fr]">
                <div>
                    {categories.map((category) => (
                        <p key={category.id}>
                            <Link to={`/courses/category/${category.id}`}>{category.name}</Link>
                        </p>
                    ))}
                </div>
            </div>
        </aside>
    );
};

export default Aside;
