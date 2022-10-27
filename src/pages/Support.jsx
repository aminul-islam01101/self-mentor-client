import React from 'react';
import { Link } from 'react-router-dom';

const Support = () => (
    <div className='bg-slate-200 p-5 my-10'>
        <div className='text-center mt-10 bg-slate-200 shadow-lg'>
            <h3>We have 24 hrs support system throuh email.</h3>
            <h4>However, Some frequently asked question are displayed below.</h4>
        </div>
        <h2 className="text-center my-10 font-bold text-3xl text-rose-500">FAQ</h2>
        <div className="space-y-4">
            <details className="group rounded-lg bg-gray-50 p-6" open>
                <summary className="flex cursor-pointer items-center justify-between">
                    <h2 className="font-medium text-gray-900">How can i enroll in the course?</h2>

                    <span className="relative ml-1.5 h-5 w-5 flex-shrink-0">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="absolute inset-0 h-5 w-5 opacity-100 group-open:opacity-0"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="absolute inset-0 h-5 w-5 opacity-0 group-open:opacity-100"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                    </span>
                </summary>

                <p className="mt-4 leading-relaxed text-gray-700">
                    -- its pretty simple. just sign up in website and checkout in course
                    <Link className="underline" to="./courses">
                        purchase page
                    </Link>
                </p>
            </details>

            <details className="group rounded-lg bg-gray-50 p-6">
                <summary className="flex cursor-pointer items-center justify-between">
                    <h2 className="font-medium text-gray-900">
                        Can I get life time access for the course?
                    </h2>

                    <span className="relative ml-1.5 h-5 w-5 flex-shrink-0">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="absolute inset-0 opacity-100 group-open:opacity-0"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="absolute inset-0 opacity-0 group-open:opacity-100"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                    </span>
                </summary>

                <p className="mt-4 leading-relaxed text-gray-700">Yes, You will get .</p>
            </details>
            <details className="group rounded-lg bg-gray-50 p-6">
                <summary className="flex cursor-pointer items-center justify-between">
                    <h2 className="font-medium text-gray-900">
                        How can i get update of a particular course?
                    </h2>

                    <span className="relative ml-1.5 h-5 w-5 flex-shrink-0">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="absolute inset-0 opacity-100 group-open:opacity-0"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="absolute inset-0 opacity-0 group-open:opacity-100"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                    </span>
                </summary>

                <p className="mt-4 leading-relaxed text-gray-700">
                    It will update autometiacally. Do not worry about it at all.
                </p>
            </details>
            <details className="group rounded-lg bg-gray-50 p-6">
                <summary className="flex cursor-pointer items-center justify-between">
                    <h2 className="font-medium text-gray-900">Could i use coupon code?</h2>

                    <span className="relative ml-1.5 h-5 w-5 flex-shrink-0">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="absolute inset-0 opacity-100 group-open:opacity-0"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="absolute inset-0 opacity-0 group-open:opacity-100"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                    </span>
                </summary>

                <p className="mt-4 leading-relaxed text-gray-700">
                    Right now coupon code is not available. you will be notified throuh email.
                </p>
            </details>
            <details className="group rounded-lg bg-gray-50 p-6">
                <summary className="flex cursor-pointer items-center justify-between">
                    <h2 className="font-medium text-gray-900">
                        is there any offer for enrolling in multiple course?
                    </h2>

                    <span className="relative ml-1.5 h-5 w-5 flex-shrink-0">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="absolute inset-0 opacity-100 group-open:opacity-0"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="absolute inset-0 opacity-0 group-open:opacity-100"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                    </span>
                </summary>

                <p className="mt-4 leading-relaxed text-gray-700">
                    You will get 10% cashback in enrolling second course
                </p>
            </details>
        </div>
    </div>
);

export default Support;
