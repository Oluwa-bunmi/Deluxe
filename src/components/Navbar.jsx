import { Link, NavLink } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

import logo from "../assets/logo.png";
const Navbar = () => {
  const token = localStorage.getItem("token");
  return (
    <nav>
      <div className="container flex justify-between items-center">
        <FaBars className="lg:hidden text-dark text-3xl" />
        <Link to="/">
          {/* style={{ marginTop: "2.5rem" }} */}
          <img src={logo} alt="logo" />
        </Link>
        <ul className="hidden lg:flex items-center gap-[30px]">
          <li className="text-[16px] font-normal text-tertiary leading-[24px]">
            <NavLink to="/about-us">Home</NavLink>
          </li>
          <li className="text-[16px] font-normal text-tertiary leading-[24px]">
            <NavLink to="/about-us">About Us</NavLink>
          </li>
          <li className="text-[16px] font-normal text-tertiary leading-[24px]">
            <NavLink to="/contact-us">Contact Us</NavLink>
          </li>
          <li className="text-[16px] font-normal text-tertiary leading-[24px]">
            <NavLink to="/collections">Collections</NavLink>
          </li>
        </ul>
        <div className="flex items-center gap-[34px]">
          {/* <div className="bg-light w-[300px] py-[12px] gap-[16px] flex justify-center items-center rounded-[20px] text-primary">
            <FiSearch />
            <input
              type="text"
              placeholder="Search for something"
              className="text-[12px] border-none outline-none bg-transparent text-primary"
            />
          </div> */}
          <div className="bg-primary cursor-pointer w-[3rem] h-[3rem] rounded-[50%] flex justify-center items-center">
            <FiSearch className="text-white text-xl" />
          </div>
          <div className="hidden md:block">
            {token ? (
              <Link
                to="/dashboard"
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
        className="bg-white fixed z-[9999] top-0 left-0 w-full max-w-[300px] h-screen"
      >
        <div className="flex justify-between items-center px-[15px] py-[20px]">
          <Link>
            <img src={logo} alt="" />
          </Link>
          <IoClose className="text-3xl text-primary"/>
        </div>
        <ul className="bloc">
          <li className="text-[16px] font-normal text-tertiary leading-[24px] border-y border-gray ">
            <NavLink to="/about-us" className="px-[15px] py-[20px] leading-4">Home</NavLink>
          </li>
          <li className="text-[16px] font-normal text-tertiary leading-[24px] border-y border-gray ">
            <NavLink to="/about-us" className="px-[15px] py-[20px] leading-4">About Us</NavLink>
          </li>
          <li className="text-[16px] font-normal text-tertiary leading-[24px]">
            <NavLink to="/contact-us">Contact Us</NavLink>
          </li>
          <li className="text-[16px] font-normal text-tertiary leading-[24px]">
            <NavLink to="/collections">Collections</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
