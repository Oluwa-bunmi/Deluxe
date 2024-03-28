import { Link, NavLink } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import logo from "../assets/logo.png";
const Navbar = () => {
  return (
    <nav>
      <div className="container flex justify-between items-center">
        <Link>
          <img src={logo} alt="logo" />
        </Link>
        <ul className="flex items-center gap-[30px]">
          <li className="text-[16px] font-normal text-primary">
            <NavLink to="">Home</NavLink>
          </li>
          <li className="text-[16px] font-normal text-primary">
            <NavLink to="">About Us</NavLink>
          </li>
          <li className="text-[16px] font-normal text-primary">
            <NavLink to="">Contact Us</NavLink>
          </li>
          <li className="text-[16px] font-normal text-primary">
            <NavLink to="">Collections</NavLink>
          </li>
        </ul>
        <div className="flex items-center gap-[34px]">
          <div className="bg-light w-[300px] py-[12px] gap-[16px] flex justify-center items-center rounded-[20px] text-primary">
            <FiSearch />
            <input
              type="text"
              placeholder="Search for something"
              className="text-[12px] border-none outline-none bg-transparent text-primary"
            />
          </div>
          <Link
            to="/shop"
            className="bg-primary text-white text-[16px] px-[38px] rounded-lg py-2"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
