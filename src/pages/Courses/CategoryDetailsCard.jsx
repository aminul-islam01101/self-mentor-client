/* eslint-disable camelcase */
import React from 'react';
import { Link } from 'react-router-dom';
import { AiTwotoneStar } from 'react-icons/ai';

const CategoryDetailsCard = ({ singleCourseData }) => {
    const {
        courseTitle,
        _id: id,
        // totalEnrolled,
        ratings: { point, ratingsGiven },
        stats: { hours, lectures, level, tags },
        author: { name },
        thumbnail_url,
    } = singleCourseData;

    return (
        <div>
            <div className="card  w-full glass h-full">
                <figure>
                    <img src={thumbnail_url} alt="car!" />
                </figure>
                <div className="card-body space-y-3">
                    <div>
                        <h2 className="font-bold text-lg">{courseTitle}</h2>
                        <small className="text-end">----by {name}</small>
                    </div>
                    <div className="flex justify-between flex-wrap gap-3">
                        <p className="text-yellow-700 flex items-center gap-2">
                            <AiTwotoneStar />
                            {point}
                            <span>({ratingsGiven})</span>
                        </p>
                        <div className="flex ">
                            <span className="px-4 py-1 text-xs whitespace-nowrap bg-yellow-400 text-center">
                                {tags}
                            </span>
                        </div>
                    </div>
                    <p className="text-xs">
                        {hours} total hours | {lectures} lectures | {level}
                    </p>

                    <div className=" ">
                        <Link to={`/course-details/${id}`}>
                            <button type="button" className="button text-xs w-full py-2">
                                course Details
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryDetailsCard;
