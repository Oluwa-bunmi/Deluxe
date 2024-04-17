import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import profile from "../assets/profile.png";
import call from "../assets/call.png";
import closesquare from "../assets/closesquare.png";
import setting from "../assets/setting.png";
import shop from "../assets/shop.png";
import shoppingCart from "../assets/shoppingCart.png";
import walletadd from "../assets/walletadd.png";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Sidenav = () => {
  const navigate = useNavigate();
  const routes = [
    { path: "./", name: "Collection", icon: shop },
    { path: "/", name: "Order", icon: shoppingCart },
    { path: "./", name: "Payment", icon: walletadd },
    { path: "./", name: "My Account", icon: profile },
    { path: "./", name: "Settings", icon: setting },
    { path: "./", name: "Customer Support", icon: call },
  ];

  const [isMobile, setIsMobile] = useState(false);
  const [isActiveItem, setActiveItem] = useState("");

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleClick = (name) => {
    setActiveItem(name);
  };
  const handleLogout = () => {
    localStorage.removeItem("token");
    toast.success("Successfully logged out");
    navigate("/login");
  };
  return (
    <>
      <nav className={`h-screen  ${isMobile ? "w-full" : "w-72"} bg-light `}>
        <div className=" flex justify-center">
          <img
            src={logo}
            alt="Deluxe Gem logo"
            className={`${
              isMobile ? "w-52" : "w-64"
            } mt-1='true' ml-5='true' mr-4='true'`}
          />
        </div>

        <ul className={`${isMobile ? "ml-4" : "ml-10"} p-4 mb-36`}>
          {routes.map((route, index) => (
            <li
              key={index}
              onClick={() => handleClick(route.name)}
              className={`flex ${
                isMobile ? "flex-col items-center" : "flex-row"
              } w-${
                isMobile ? "full" : "72"
              } mb-7 space-x-4 text-dark font-hat font-medium text-sm ${
                isActiveItem === route.name
                  ? "bg-primary text-lightTwo w-[233px] h-[60px] rounded-tl-lg rounded-bl-lg pt-4 pb-4 pr-2.5 pl-2.5"
                  : ""
              }`}
            >
              {!isMobile && (
                <img src={route.icon} alt={route.name} className="w-5 h-5" />
              )}
              <Link to={route.path}>{route.name}</Link>
            </li>
          ))}
        </ul>

        <div
          className={`flex justify-center mb-4.5 space-x-4 pt-4 mt-${
            isMobile ? "20" : "36"
          } pl-2.5 text-primary font-hat font-medium text-sm`}
        >
         
            <button className="font-hat font-medium text-sm" onClick={handleLogout}>Log Out</button>
         
          {!isMobile && (
            <div>
              <img src={closesquare} alt="close icon" className="w-5 h-5" />
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Sidenav;
