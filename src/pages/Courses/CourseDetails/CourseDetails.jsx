/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from 'react';
import { AiTwotoneStar, AiOutlineDownload } from 'react-icons/ai';
import { BsCalendar2Date } from 'react-icons/bs';
import { TiTickOutline } from 'react-icons/ti';

import { Link, useParams } from 'react-router-dom';
import Pdf from 'react-to-pdf';
import AuthContext from '../../../Contexts/AuthContext';

const ref = React.createRef();

const CourseDetails = () => {
    const { id } = useParams();
    const { allCoursesData } = useContext(AuthContext);
    const singleCourseData = allCoursesData.find((course) => course._id === id);
    const {
        courseTitle,

        totalEnrolled,
        ratings: { point, ratingsGiven },
        stats: { hours, lectures, level, tags, Language },
        author: { name, published_date, LastUpdated },
        image_url,
        details_1,
        details_2,

        keywords,

        bullets,
    } = singleCourseData;

    return (
        <div>
            <div>
                <div className="relative flex flex-col max-w-7xl p-6 divide-y  dark:bg-gray-900 dark:text-gray-100 divide-gray-700">
                    <div className="p-3 space-y-1 xl:ml-6">
                        <figure>
                            <img src={image_url} alt="" />
                        </figure>
                        <div className='p-6 space-y-3'>
                            <h3 className="text-3xl font-semibold">{courseTitle}</h3>
                            <div>
                                <small className="text-end">Created by {name}</small>
                            </div>
                            <div className="flex justify-between gap-3 flex-wrap items-center">
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
                                {hours} Total hours | {lectures} Lectures | {level} | Mode:
                                {Language}
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-10 items-center p-6 space-y-3 justify-center md:justify-start">
                        <img
                            alt=""
                            src="https://source.unsplash.com/100x100/?portrait"
                            className="object-cover w-20 h-20 rounded-full shadow dark:bg-gray-500"
                        />
                        <div className="space-y-1">
                            <div className="text-sm ">
                                <span className="flex gap-2 items-center mb-3">
                                    <BsCalendar2Date />
                                    <span>Published Date :</span>
                                    {published_date}
                                </span>
                                <span className="flex gap-2 items-center mb-3">
                                    <BsCalendar2Date />
                                    <span>Last Updated :</span>
                                    {LastUpdated}
                                </span>
                            </div>
                            <div className="flex flex-wrap mt-5 gap-3">
                                {keywords.map((keyword) => (
                                    <span
                                        key={Math.random()}
                                        className="inline-block px-2 py-1 text-sm font-semibold rounded-md bg-teal-500 dark:text-gray-900"
                                    >
                                        {keyword}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-3 flex-wrap justify-center
                    sm:justify-between mt-10 p-6 items-center">
                        <h4 className="text-xl font-bol "> About Course</h4>
                        <div>
                            <Pdf targetRef={ref} filename="code-example.pdf">
                                {({ toPdf }) => (
                                    <button type="button" className='button' onClick={toPdf}>
                                        <div className="flex items-center gap-2">
                                            <AiOutlineDownload /> Course summery
                                        </div>
                                    </button>
                                )}
                            </Pdf>
                        </div>
                    </div>
                    {/* course description */}
                    <div className="p-6" ref={ref}>
                        <h4>At a Glance</h4>

                        <p className="p-10">{details_1}</p>
                        <h4 className="text-xl font-bol "> What You Will learn</h4>
                        <div className="p-7">
                            {bullets.map((bullet) => (
                                <li className="list-none" key={Math.random()}>
                                    <div className="flex gap-2 items-center ">
                                        <TiTickOutline />
                                        {bullet}
                                    </div>
                                </li>
                            ))}
                        </div>
                        <p className="p-10">{details_2}</p>
                    </div>
                    <div className="flex flex-col items-center p-20">
                        <Link to={`/purchase/${id}`}>
                            <button type="button" className="button sm:px-36 block">
                                Get Premium access
                            </button>
                        </Link>
                        <div className="flex flex-col sm:flex-row sm:gap-10 flex-wrap ">
                            <small className="">* Lifetime access</small>
                            <small className="">* 30 days Money back access</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;
