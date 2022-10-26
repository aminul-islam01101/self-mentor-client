/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from 'react';
import { AiTwotoneStar } from 'react-icons/ai';
import { BsCalendar2Date } from 'react-icons/bs';
import { Link, useParams } from 'react-router-dom';
import AuthContext from '../../../Contexts/AuthContext';

const CourseDetails = () => {
    const { id } = useParams();
    const { allCoursesData } = useContext(AuthContext);
    const singleCourseData = allCoursesData.find((course) => course._id === id);
    const {
        courseTitle,

        totalEnrolled,
        ratings: { point, ratingsGiven },
        stats: { hours, lectures, level, tags },
        author: { name, published_date, LastUpdated, img },
        image_url,
        details_1,
        details_2,
        price,
        keywords,
        language,
    } = singleCourseData;

    return (
        <div>
            <div>
                <div className="relative flex flex-col max-w-xl p-6 divide-y xl:flex-row xl:divide-y-0 xl:divide-x dark:bg-gray-900 dark:text-gray-100 divide-gray-700">
                    <div className="p-3 space-y-1 xl:ml-6">
                        <figure>
                            <img src={image_url} alt="" />
                        </figure>
                        <h3 className="text-3xl font-semibold">{courseTitle}</h3>
                        <div>
                            <small className="text-end">Created by {name}</small>
                        </div>
                        <div className="flex justify-between gap-3">
                            <p className="text-yellow-600 flex items-center gap-2">
                                <AiTwotoneStar />
                                {point}
                                <span>({ratingsGiven})</span>
                            </p>
                            <span className="text-yellow-600 ">
                                {totalEnrolled} Learners Enrolled
                            </span>
                            <div className="flex ">
                                <span className="px-4 py-1 text-xs whitespace-nowrap bg-yellow-500 text-black text-center">
                                    {tags}
                                </span>
                            </div>
                        </div>
                        <p className="text-xs">
                            {hours} total hours | {lectures} lectures | {level} | mode:{language}
                        </p>
                    </div>
                    <div className="flex items-center p-3 space-x-3">
                        <img
                            alt=""
                            src="https://source.unsplash.com/100x100/?portrait"
                            className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500"
                        />
                        <div className="space-y-1">
                            <div className="text-sm">
                                <span className="flex gap-2 items-center">
                                    <BsCalendar2Date />
                                    <span>Published Date :</span>
                                    {published_date}
                                </span>
                                <span className="flex gap-2 items-center">
                                    <BsCalendar2Date />
                                    <span>Last Updated :</span>
                                    {LastUpdated}
                                </span>
                            </div>
                            <div className="flex flex-wrap space-x-3">
                                {keywords.map((keyword) => (
                                    <span className="inline-block px-2 py-1 text-sm font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900">
                                        {keyword}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <h4 className="text-xl font-bol mt-5 pt-5"> About Course</h4>
                    </div>
                </div>
            </div>
            <Link to={`/purchase/${id}`}>
                <button type="button" className="button">
                    purchase
                </button>
            </Link>
        </div>
    );
};

export default CourseDetails;
