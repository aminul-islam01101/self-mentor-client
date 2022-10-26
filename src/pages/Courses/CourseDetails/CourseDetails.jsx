import React from 'react';
import { Link, useParams } from 'react-router-dom';

const CourseDetails = () => {
    const { id } = useParams();
    console.log(id);

    return (
        <div>
            <p>hello</p>
            <Link to={`/purchase/${id}`}>
                <button type="button" className="button">
                    purchase
                </button>
            </Link>
        </div>
    );
};

export default CourseDetails;
