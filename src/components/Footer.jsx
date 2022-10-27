/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/self-closing-comp */
import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';
import Logo from '../assets/images/logo.png';

const Footer = () => (
    <div>
        <footer aria-label="" className="bg-gray-400 dark:bg-gray-600">
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-2">
                    <div className="border-b border-gray-800  py-5 lg:order-last lg:border-b-0 lg:border-l lg:pl-12">
                        <div className="flex justify-center text-teal-300 lg:hidden">
                            {/* logo place */}
                            <NavLink to="/" className="btn btn-ghost normal-case flex text-xl">
                                <img className="w-8 mr-2" src={Logo} alt="logo" />
                                <span>Self-Mentor</span>
                            </NavLink>
                        </div>

                        <div className="mt-12 space-y-4 ">
                            <div className="text-center lg:text-left">
                                <div className="grid place-items-center">
                                    <p className="text-lg font-medium text-white">Helpful Links</p>
                                    <nav aria-label=" Nav" className="mt-4">
                                        <ul className="space-y-1.5 text-sm">
                                            <li>
                                                <a
                                                    className="text-white transition hover:text-white/75"
                                                    href="/"
                                                >
                                                    FAQs
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="text-white transition hover:text-white/75"
                                                    href="/"
                                                >
                                                    Support
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="group flex justify-center gap-1.5 lg:justify-start"
                                                    href="/"
                                                >
                                                    <span className="text-white transition group-hover:text-white/75">
                                                        Live Chat
                                                    </span>
                                                    <span className="relative flex h-2 w-2">
                                                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-75"></span>
                                                        <span className="relative inline-flex h-2 w-2 rounded-full bg-teal-500"></span>
                                                    </span>
                                                </a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className=" pt-3 lg:pr-12">
                        <div className="hidden text-teal-300 lg:flex">
                            <NavLink
                                to="/"
                                className="btn btn-ghost normal-case hidden md:flex text-xl"
                            >
                                <img className="w-8 mr-2" src={Logo} alt="logo" />
                                <span>Self-Mentor</span>
                            </NavLink>
                        </div>

                        <div className="grid justify-center gap-10 text-center ">
                            <div className=" mt-10">
                                <p className="text-lg font-medium text-white">Follow us</p>

                                <nav aria-label="Footer Services Nav" className="mt-4">
                                    <ul className="text-xl flex justify-center gap-3">
                                        <li>
                                            <a
                                                className="text-blue-500"
                                                href="https://www.facebook.com/"
                                            >
                                                <FaFacebook />
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="text-sky-500 "
                                                href="https://www.twitter.com/"
                                            >
                                                <FaTwitter />
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="text-rose-500"
                                                href="https://www.instagram.com/"
                                            >
                                                <FaInstagram />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.github.com/">
                                                <FaGithub />
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>

                        <div className="mt-16 border-t border-gray-800 pt-8 text-sm text-white lg:mt-24">
                            <p className="text-center lg:text-left">
                                <a
                                    className="inline-block text-white underline transition hover:text-white/75"
                                    href="/"
                                >
                                    Privacy Policy
                                </a>

                                <span>&middot;</span>

                                <a
                                    className="inline-block text-white underline transition hover:text-white/75"
                                    href="/"
                                >
                                    Terms & Conditions
                                </a>

                                <span>&middot;</span>

                                <a
                                    className="inline-block text-white underline transition hover:text-white/75"
                                    href="/"
                                >
                                    Cookies
                                </a>
                            </p>

                            <p className="mt-4 text-center lg:text-left">
                                &copy; 2022 codereality.com. All rights reserved.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
);

export default Footer;
