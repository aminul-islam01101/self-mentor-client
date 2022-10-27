/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const Blogs = () => (
    <div className="mb-10">
        <section className="dark:bg-gray-800 dark:text-gray-100">
            <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
                <div
                    href="#"
                    className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-900"
                >
                    <img
                        src="https://img.freepik.com/free-photo/toy-bricks-table-with-word-blog_144627-47465.jpg?w=996&t=st=1666875181~exp=1666875781~hmac=f1f46289fe80f18aff49b09ae431cb85a4f1d065c9c7d5654d5d3365f9ce659d"
                        alt=""
                        className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500"
                    />
                    <div className="p-6 space-y-2 lg:col-span-5">
                        <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline text-center">
                            Blog
                        </h3>
                    </div>
                </div>
                {/* flex flex-col-reverse lg:flex-row  */}
                <div className="grid  p-8 shadow-lg gap-5 border rounded my-10">
                    <figure>
                        <img
                            className="w-full h-full"
                            src="https://i.ibb.co/82YMpgF/cors.jpg"
                            alt=""
                        />
                    </figure>
                    <div className=" ">
                        <h4 className="underline mb-5 text-xl">Blog-1: what is cors?</h4>
                        <br />
                        <p>
                            CORS stands for <strong>Cross-Origin Resource Sharing</strong>. It
                            allows us to relax the security applied to an API. This is done by
                            bypassing the Access-Control-Allow-Origin headers, which specify which
                            origins can access the API.
                        </p>
                        <br />

                        <p>
                            In other words, CORS is a browser security feature that restricts
                            cross-origin HTTP requests with other servers and specifies which
                            domains access your resources.
                        </p>
                    </div>
                </div>
                <div className="grid p-8 shadow-lg gap-5 border rounded my-10">
                    <figure>
                        <img
                            className="w-full h-full"
                            src="https://i.ibb.co/yQrmDQS/Firebase.png"
                            alt=""
                        />
                    </figure>
                    <div className=" ">
                        <h4 className="underline mb-5 text-xl">
                            Blog:2 Why are you using firebase? What other options do you have to
                            implement authentication?
                        </h4>
                        <br />
                        <p>
                            <strong>Firebase</strong>.is used to create serverless backend
                            (Backend-as-a-Service (Baas))that is very user friendly for user
                            authentication, hosting for web apps, mobile device etc.
                        </p>
                        <br />
                        <p>
                            It supports authentication using passwords, phone numbers, Google,
                            Facebook, Twitter, and more. The Firebase Authentication (SDK) can be
                            used to manually integrate one or more sign-in methods into an app.
                        </p>
                        <br />

                        <p>firebase alternative options</p>
                        <li>Back4App</li>
                        <li>AWS Amplify</li>
                        <li>Back4App</li>
                        <li>Kuzzle</li>
                        <li>Db2.</li>
                        <li>Backendless</li>
                    </div>
                </div>
                <div className="grid  p-8 shadow-lg gap-5 border rounded my-10">
                    <figure>
                        <img
                            className="w-full h-full"
                            src="https://i.ibb.co/DWtwDjt/private.webp"
                            alt=""
                        />
                    </figure>
                    <div className=" ">
                        <h4 className="underline mb-5 text-xl">
                            Blog:3 How does the private route work?
                        </h4>
                        <br />
                        <p>
                            <strong>The private route </strong>.component is the blueprint for all
                            protected routes in the application. that redirect URL and authenticate
                            condition.
                        </p>
                        <br />
                        <p>
                            Public routes are Log in, SignUp, Forgot Password, Reset Password. In
                            simple words, These routes can be accessed before login into the App.
                        </p>
                        <br />
                        <p>
                            it ensures users credential before entering secure part of a website,
                            and if not authenticated with proper information , redirects to ensure
                            credentials.
                        </p>
                    </div>
                </div>

                <div className="grid p-8 shadow-lg gap-5 border rounded my-10">
                    <figure>
                        <img
                            className="w-full h-full"
                            src="https://i.ibb.co/HFKghzf/node.png"
                            alt=""
                        />
                    </figure>
                    <div className=" ">
                        <h4 className="underline mb-5 text-xl">
                            Blog:4 What is Node? How does Node work?
                        </h4>
                        <br />
                        <p>
                            <strong>Node.js </strong> is an open-source, cross-platform JavaScript
                            runtime environment and library for running web applications outside the
                            client browser. Ryan Dahl developed it in 2009,
                        </p>
                        <br />
                        <p>
                            Node.js built on Google Chrome’s V8 engine, and for this reason its
                            execution time is very fast and it runs very quickly.
                        </p>
                        <br />
                        <p>
                            Node.js turns out to be quite useful for desktop applications in
                            addition to servers. Also note that Node applications aren’t limited to
                            pure JavaScript.At a high level, Node.js combines the Google V8
                            JavaScript engine, a single-threaded non-blocking event loop, and a
                            low-level I/O API.
                        </p>
                    </div>
                </div>
            </div>

            <div>
                <div className="my-10">
                    <section className="p-6 md:p-12 text-center md:text-left shadow-lg rounded-md">
                        <div className="flex justify-center">
                            <div className="max-w-3xl">
                                <div className="block p-6 rounded-lg shadow-lg bg-white m-4">
                                    <div className="md:flex md:flex-row items-center ">
                                        <div className="md:w-96 w-36 flex justify-center items-center mb-6 lg:mb-0 mx-auto md:mx-0">
                                            <img
                                                src="/author.jpg"
                                                className="rounded-full shadow-md"
                                                alt="avatar"
                                            />
                                        </div>
                                        <div className="md:ml-6">
                                            <p className="text-gray-500 font-light mb-6">
                                                Hei, I am Aminul Islam. Currently Working in TC-39,
                                                writing about javascript core concept for several
                                                years.
                                            </p>
                                            <p className="font-semibold text-xl mb-2 text-gray-800">
                                                Author: Aminul Islam
                                            </p>
                                            <p className="font-semibold text-gray-500 mb-0">
                                                Senior Programmer, TC-39
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </section>
    </div>
);

export default Blogs;
