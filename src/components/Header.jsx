import React from "react";
import user from "../assets/user.png";
import NavList from "./NavList";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-between w-full">
      <div className="flex items-center">
        <h1 className="accia text-primary text-base lg:text-[24px]">
          Welcome {localStorage.getItem("username")}
        </h1>
        <div className="hidden lg:flex items-center justify-center gap-[16px] bg-light rounded-[20px] w-[325px] py-[10px]">
          <svg
            width="17"
            height="16"
            viewBox="0 0 17 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.16536 14C11.6632 14 14.4987 11.1645 14.4987 7.66671C14.4987 4.1689 11.6632 1.33337 8.16536 1.33337C4.66756 1.33337 1.83203 4.1689 1.83203 7.66671C1.83203 11.1645 4.66756 14 8.16536 14Z"
              stroke="#1B1B1B"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M15.1654 14.6667L13.832 13.3334"
              stroke="#1B1B1B"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <input
            type="text"
            placeholder="Search for something"
            className="bg-transparent outline-none text-sm font-normal text-primary"
          />
        </div>
      </div>
      <div className="flex items-center gap-[16px]">
        <img src={user} alt={localStorage.getItem("username")} />
        <Link to="/favorites" className="relative">
          <svg
            width="31"
            height="30"
            viewBox="0 0 31 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.275 26.0125C15.85 26.1625 15.15 26.1625 14.725 26.0125C11.1 24.775 3 19.6125 3 10.8625C3 7 6.1125 3.875 9.95 3.875C12.225 3.875 14.2375 4.975 15.5 6.675C16.7625 4.975 18.7875 3.875 21.05 3.875C24.8875 3.875 28 7 28 10.8625C28 19.6125 19.9 24.775 16.275 26.0125Z"
              stroke="#5B0F11"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <span className="flex items-center justify-center bg-darkTwo text-white font-bold rounded-[50%] w-[1.5rem] h-[1.5rem] text-base leading-[42px] absolute right-[-0.7rem] top-[-0.7rem]">
            0
          </span>
        </Link>
        <Link to="/cart" className="relative">
          <svg
            width="31"
            height="30"
            viewBox="0 0 31 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 2.5H5.17501C6.52501 2.5 7.5875 3.6625 7.475 5L6.4375 17.45C6.2625 19.4875 7.87499 21.2375 9.92499 21.2375H23.2375C25.0375 21.2375 26.6125 19.7625 26.75 17.975L27.425 8.60001C27.575 6.52501 26 4.83749 23.9125 4.83749H7.77501"
              stroke="#5B0F11"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M20.8125 27.5C21.6754 27.5 22.375 26.8004 22.375 25.9375C22.375 25.0746 21.6754 24.375 20.8125 24.375C19.9496 24.375 19.25 25.0746 19.25 25.9375C19.25 26.8004 19.9496 27.5 20.8125 27.5Z"
              stroke="#5B0F11"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10.8125 27.5C11.6754 27.5 12.375 26.8004 12.375 25.9375C12.375 25.0746 11.6754 24.375 10.8125 24.375C9.94956 24.375 9.25 25.0746 9.25 25.9375C9.25 26.8004 9.94956 27.5 10.8125 27.5Z"
              stroke="#5B0F11"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M11.75 10H26.75"
              stroke="#5B0F11"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <span className="flex items-center justify-center bg-darkTwo text-white font-bold rounded-[50%] w-[1.5rem] h-[1.5rem] text-base leading-[42px] absolute right-[-0.7rem] top-[-0.7rem]">
            0
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
