import React from 'react';
import { Link } from 'react-router-dom';

const CourseDetails = () => {
    console.log('hello');

    return (
        <div>
            <p>hello</p>
            <Link to={`/purchase/${'0282e0e58a5c404fbd15261f11c2ab6a'}}`}>
                <button type="button" className="button">
                    purchase
                </button>
            </Link>
        </div>
    );
};

export default CourseDetails;
