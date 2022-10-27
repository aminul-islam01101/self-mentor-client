/* eslint-disable react/self-closing-comp */
import React from 'react';

const Testimonials = () => (
    <div>
        <section className="bg-white dark:bg-gray-900">
            <div className="container px-6 py-10 mx-auto">
                <h1 className="text-3xl font-semibold text-center text-gray-800 capitalize xl:text-5xl lg:text-4xl dark:text-white">
                    What clients saying
                </h1>

                <div className="flex justify-center mx-auto mt-6">
                    <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
                    <span className="inline-block w-3 h-1 mx-1 bg-blue-500 rounded-full"></span>
                    <span className="inline-block w-1 h-1 bg-blue-500 rounded-full"></span>
                </div>

                <div className="flex items-start max-w-6xl mx-auto mt-16">
                    <button
                        type="button"
                        className="hidden p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 lg:block hover:bg-gray-100"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15 19l-7-7 7-7"
                            />
                        </svg>
                    </button>

                    <div>
                        <p className="flex items-center text-center text-gray-500 lg:mx-8">
                            I am a learner of self mentor. I have enrolled in course in 2021 while i
                            was passing a depression due to Lock down of Corona Pandemic. However,
                            the course give me back, the inner strength that lost some where. By
                            they are student friendly and mentors are supportive.
                        </p>

                        <div className="flex flex-col items-center justify-center mt-8">
                            <img
                                className="object-cover rounded-full w-14 h-14"
                                src="https://images.unsplash.com/photo-1499470932971-a90681ce8530?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                                alt=""
                            />

                            <div className="mt-4 text-center">
                                <h1 className="font-semibold text-gray-800 dark:text-white">
                                    Mia Brown
                                </h1>
                                <span className="text-sm text-gray-500 dark:text-gray-400">
                                    Marketer
                                </span>
                            </div>
                        </div>
                    </div>

                    <button
                        type="button"
                        className="hidden p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 lg:block hover:bg-gray-100"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    </div>
);

export default Testimonials;
