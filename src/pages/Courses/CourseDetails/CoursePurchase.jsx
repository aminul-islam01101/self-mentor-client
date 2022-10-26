/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-underscore-dangle */
import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';

import Swal from 'sweetalert2'
import AuthContext from '../../../Contexts/AuthContext';
import FormatCurrency from '../../../Utilities/FormateCurrency';

const CoursePurchase = () => {
    const { id } = useParams();
    const { allCoursesData } = useContext(AuthContext);
    const singleCourseData = allCoursesData.find((course) => course._id === id);
    const {
        courseTitle,

        image_url,
        author: { name },
        price,
    } = singleCourseData;
    const handleClick = () => {
        Swal.fire('Thanks!', 'For Purchasing!', 'success');
    };

    return (
        <div>
            <section className="dark:bg-gray-800 dark:text-gray-100">
                <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
                    <a
                        rel="noopener noreferrer"
                        href="#"
                        className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-900"
                    >
                        <img
                            src={image_url}
                            alt=""
                            className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500"
                        />
                        <div className="p-6 space-y-2 lg:col-span-5">
                            <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">
                                {courseTitle}
                            </h3>
                            <span className="text-xs dark:text-gray-400">{name}</span>
                            <h3>{FormatCurrency(price)}</h3>
                            <p>
                                Apply coupon <input className="text-black" type="text" />
                            </p>
                            <button className="button" type="button" onClick={handleClick}>
                                Click to Pay
                            </button>
                        </div>
                    </a>
                </div>
            </section>
        </div>
    );
};

export default CoursePurchase;
