/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Avatar from '../assets/images/avatar.png';
import Logo from '../assets/images/logo.png';

const Navbar = () => {
    const pages = [
        { pageName: 'Home', link: '/home', id: 1 },
        { pageName: 'Courses', link: '/courses', id: 2 },
        { pageName: 'FAQ', link: '/faq', id: 3 },
        { pageName: 'Blogs', link: '/blogs', id: 4 },
    ];

    return (
        <div className="bg-gray-100 shadow-lg ">
            <div className="navbar  container ">
                <div className=" navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost sm:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </label>
                        <ul
                            tabIndex={0}
                            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                        >
                            {pages.map((page) => (
                                <li key={page.id}>
                                    <NavLink to={page.link}>{page.pageName}</NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <NavLink to="/" className="btn btn-ghost normal-case hidden sm:flex text-xl">
                        <img className="w-12" src={Logo} alt="logo" />
                        <span>Self-Mentor</span>
                    </NavLink>
                </div>
                <div className="navbar-center lg:flex text-sm">
                    <ul className=" sm:flex sm:flex-row p-0 hidden  gap-3 ">
                        {pages.map((page) => (
                            <li
                                className=" rounded px-3 py-2 hover:bg-[#d3ecf3] transition ease-in-out delay-150 hover:shadow-lg  "
                                key={page.id}
                            >
                                <NavLink
                                    to={page.link}
                                    className={({ isActive }) =>
                                        isActive
                                            ? 'bg-[#0097C3]   text-white px-3 py-2 rounded shadow-lg '
                                            : ''
                                    }
                                >
                                    {page.pageName}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                    <Link to="/home" className="btn btn-ghost normal-case text-xl sm:hidden">
                        <img className="w-12" src={Logo} alt="logo" />
                        <span>QuiZeal</span>
                    </Link>
                </div>
                <div className="navbar-end text-sm">
                    <div className=" mr-2 hidden sm:flex">
                        <NavLink to="/login">Login</NavLink>
                    </div>
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-8 rounded-full">
                                <img src={Avatar} alt="img" />
                            </div>
                        </label>
                        <ul
                            tabIndex={0}
                            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                        >
                            <li>
                                <Link to="/login" className="justify-between flex sm:hidden">
                                    Login
                                </Link>
                            </li>
                            <li>
                                <Link to="/signup" className="justify-between">
                                    Signup
                                </Link>
                            </li>

                            <li>
                                <Link to="/home">Logout</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
