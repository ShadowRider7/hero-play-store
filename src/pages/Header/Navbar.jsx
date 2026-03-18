import React from "react";
import logoImg from "../../assets/logo.png";
import github from "../../assets/fi_2111432.svg";
import { Link, NavLink } from "react-router";

const navLinkClass = ({ isActive }) =>
  `text-2xl font-medium pb-1 border-b-2 transition ${
    isActive
      ? " bg-clip-text md:border-purple-600 text-transparent bg-linear-to-r from-[#632EE3] to-[#9F62F2]"
      : "text-gray-800  border-transparent  hover:bg-gray-200"
  }`;

const links = (
  <>
    <NavLink to="/" className={navLinkClass}>
      Home
    </NavLink>

    <NavLink to="/apps" className={navLinkClass}>
      Apps
    </NavLink>

    <NavLink to="/installation" className={navLinkClass}>
      Installation
    </NavLink>
  </>
);

const Navbar = () => {
  return (
    <div className="bg-base-100 shadow-sm">
      <div className="navbar  max-w-380 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow space-y-2"
            >
              {links}
            </ul>
          </div>
          <Link to={"/"} className="flex  items-center text-xl md:ms-5 ">
            <img className="w-10" src={logoImg} alt="" />
            <h2 className="bg-clip-text text-transparent bg-linear-to-r from-[#632EE3] to-[#9F62F2]">
              HERO.IO
            </h2>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex items-center gap-12">{links}</ul>
        </div>
        <div className="navbar-end ">
          <a
            href="https://github.com/Apollo-Level2-Web-Dev/Mission-Restart-A3"
            className="btn rounded-xl bg-linear-to-r from-[#632EE3] to-[#9F62F2]"
          >
            <img src={github} alt="" />
            Contribute
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
