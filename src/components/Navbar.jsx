import { Link, NavLink } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { BsCart2 } from "react-icons/bs";

import logo from "../assets/logo.png";
import { useState } from "react";
import { useSelector } from "react-redux";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const count = useSelector((data) => data.cart);
  const [modal, setModal] = useState(false);
  const token = localStorage.getItem("token");
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <nav className="w-full fixed bg-white z-10">
      {modal && (
        <div className="fixed bg-light w-full h-screen flex items-center justify-center z-[999] ">
          <div className="border border-primary p-8 rounded">
            <div className="flex items-center">
              <input
                className="w-[232px] sm:w-[370px] border-gray px-6 h-[60px] outline-none"
                placeholder="search"
                type="text"
                // value={searchQuery}
                // onChange={(e) => setSearchQuery(e.target.value)}
              />

              <button
                className="bg-primary text-white px-6 h-[60px]"
                type="submit"
                aria-label="search button"
                // onClick={handleSearch}
              >
                <svg
                  className="header__search--button__svg"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 512 512"
                >
                  <path
                    d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z"
                    fill="none"
                    stroke="currentColor"
                    stroke-miterlimit="10"
                    stroke-width="32"
                  ></path>
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-miterlimit="10"
                    stroke-width="32"
                    d="M338.29 338.29L448 448"
                  ></path>
                </svg>
              </button>
            </div>
            <button
              onClick={() => setModal(false)}
              className="w-full mt-8 text-xl bg-primary rounded text-white p-3"
            >
              Close
            </button>
          </div>
        </div>
      )}
      <div className="container flex justify-between items-center">
        <FaBars className="lg:hidden text-dark text-3xl" onClick={handleNav} />
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <ul className="hidden lg:flex items-center gap-[30px]">
          <li className="text-[16px] font-normal text-tertiary leading-[24px] hover:font-bold">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="text-[16px] font-normal text-tertiary leading-[24px] hover:font-bold">
            <NavLink to="/about-us">About Us</NavLink>
          </li>
          <li className="text-[16px] font-normal text-tertiary leading-[24px] hover:font-bold">
            <NavLink to="/contact-us">Contact Us</NavLink>
          </li>
          <li className="text-[16px] font-normal text-tertiary leading-[24px] hover:font-bold">
            <NavLink to="/collections">Collections</NavLink>
          </li>
        </ul>
        <div className="flex items-center gap-[15px] md:gap-[20px]">
          {/* <div className="bg-light w-[300px] py-[12px] gap-[16px] flex justify-center items-center rounded-[20px] text-primary">
            <FiSearch />
            <input
              type="text"
              placeholder="Search for something"
              className="text-[12px] border-none outline-none bg-transparent text-primary"
            />
          </div> */}
          <div className="bg-light cursor-pointer w-[3rem] h-[3rem] rounded-[50%] flex justify-center items-center">
            <FiSearch
              className="text-primary text-xl"
              onClick={() => setModal(true)}
            />
          </div>
          <Link to="/cart" className="relative">
            <BsCart2 className="text-3xl text-primary" />
            <span className="flex items-center justify-center bg-darkTwo text-white font-bold rounded-[50%] w-[1.5rem] h-[1.5rem] text-base leading-[42px] absolute right-[-0.7rem] top-[-0.7rem]">
              {count.length}
            </span>
          </Link>
          <div className="hidden md:block">
            {token ? (
              <Link
                to="/dashboard/collection"
                className="bg-primary text-white text-[16px] px-[38px] rounded-lg py-2"
              >
                Account
              </Link>
            ) : (
              <Link
                to="/login"
                className="bg-primary text-white text-[16px] px-[38px] rounded-lg py-2"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
      <div
        style={{
          transition: "all 0.3s ease",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.15)",
        }}
        className={
          nav
            ? "bg-white fixed z-[9999] top-0 left-0 w-full max-w-[300px] h-screen"
            : "hidden"
        }
      >
        <div className="flex justify-between items-center px-[15px] py-[20px]">
          <Link>
            <img src={logo} alt="" />
          </Link>
          <IoClose className="text-3xl text-primary" onClick={handleNav} />
        </div>
        <ul>
          <li className="text-xl px-[15px] py-[20px] font-normal text-tertiary leading-[24px] border-y border-gray ">
            <NavLink to="/about-us" className="leading-4" onClick={handleNav}>
              Home
            </NavLink>
          </li>
          <li className="text-xl px-[15px] py-[20px] font-normal text-tertiary leading-[24px] border-b border-gray ">
            <NavLink to="/about-us" className="leading-4" onClick={handleNav}>
              About Us
            </NavLink>
          </li>
          <li className="text-xl px-[15px] py-[20px] font-normal text-tertiary leading-[24px] border-b border-gray">
            <NavLink to="/contact-us" onClick={handleNav}>
              Contact Us
            </NavLink>
          </li>
          <li className="text-xl px-[15px] py-[20px] font-normal text-tertiary leading-[24px] border-b border-gray">
            <NavLink to="/collections" onClick={handleNav}>
              Collections
            </NavLink>
          </li>
          <li className=" mx-[15px] my-[30px]">
            {token ? (
              <Link
                to="/dashboard"
                className="bg-primary text-white text-xl px-[38px] rounded-lg py-2"
              >
                Account
              </Link>
            ) : (
              <Link
                to="/login"
                className="bg-primary text-white text-xl px-[38px] rounded-lg py-2"
              >
                Login
              </Link>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
