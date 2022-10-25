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
            <div>
                {categories.map((category) => (
                    <p key={category.id}>
                        <Link to={`/courses/${category.id}`}>{category.name}</Link>
                    </p>
                ))}
            </div>
        </aside>
    );
};

export default Aside;
