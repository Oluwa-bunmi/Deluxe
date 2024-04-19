import { Link } from "react-router-dom";
import logo from "../assets/logoTwo.png";
import facebook from "../assets/facebook.png";
import whatsapp from "../assets/whatsapp.png";
import twitter from "../assets/twitter.png";
import instagram from "../assets/instagram.png";
const Footer = () => {
  return (
    <footer className="bg-secondary pt-[80px] pb-[120px]">
      <div className="container flex flex-col lg:flex-row justify-between items-center">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <div className="flex flex-wrap gap-[50px] lg:gap-[30px]">
          <ul>
            <li className="text-primary leading-[24px] font-bold text-[16px] mb-[16px]">
              Useful Links
            </li>
            <li>
              <Link
                to="/about-us"
                className="leading-[24px] text-[16px] font-medium text-tertiary"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/contact-us"
                className="leading-[24px] text-[16px] font-medium text-tertiary"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                to="/shop"
                className="leading-[24px] text-[16px] font-medium text-tertiary"
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                to="/privacy-policy"
                className="leading-[24px] text-[16px] font-medium text-tertiary"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                to="/terms-and-conditions"
                className="leading-[24px] text-[16px] font-medium text-tertiary"
              >
                Terms & Conditions
              </Link>
            </li>
          </ul>
          <ul>
            <li className="text-primary leading-[24px] font-bold text-[16px] mb-[16px]">
              Contact Information
            </li>
            <li className="leading-[24px] text-[16px] font-medium text-tertiary">
              Email address: contact@deluxegem.com
            </li>
            <li className="leading-[24px] text-[16px] font-medium text-tertiary">
              Phone number: +123-456-7890
            </li>
          </ul>
          <ul>
            <li className="text-primary leading-[24px] font-bold text-[16px] mb-[16px]">
              Social
            </li>
            <li className="flex gap-[24px] items-center">
              <Link>
                <img src={instagram} alt="instagram-icon" />
              </Link>
              <Link>
                <img src={facebook} alt="facebook-icon" />
              </Link>
              <Link>
                <img src={twitter} alt="twitter-icon" />
              </Link>
              <Link>
                <img src={whatsapp} alt="whatsapp-icon" />
              </Link>
            </li>
          </ul>
          <ul>
            <li className="text-primary leading-[24px] font-bold text-[16px] mb-[16px]">
              Don't have an account?
            </li>
            <li>
              <Link
                to="/signup"
                className="bg-primary text-white text-[16px] px-[58px] rounded-lg py-3"
              >
                Register
              </Link>
            </li>
            <li className="mt-[39px] text-primary leading-[24px] text-[16px] font-medium">
              Opening Hours <br />
              <span className="text-tertiary">Mon - Sat: 7AM - 7PM</span>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
