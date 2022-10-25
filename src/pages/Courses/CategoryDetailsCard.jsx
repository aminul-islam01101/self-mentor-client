import React from 'react';
import { Link } from 'react-router-dom';

const CategoryDetailsCard = ({id}) => (
    <div>
        <div className="card w-full glass h-full">
            <figure>
                <img src="https://placeimg.com/400/225/arch" alt="car!" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Life hack</h2>
                <p>How to park your car at your garage?</p>
                <div className="card-actions justify-end">
                    <Link to={`/course-details/${id}`}>
                        <button type="button" className="btn btn-primary">
                            course Details
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    </div>
);

export default CategoryDetailsCard;
