import { RiDeleteBin6Line } from "react-icons/ri";
import { FiPlus, FiMinus } from "react-icons/fi";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import demo from "../assets/newdemo.png";
import { Link } from "react-router-dom";
const Cart = () => {
  return (
    <>
      <Navbar />
      <section className="py-[70px]">
        <div className="container">
          <h2 className="text-[32px] text-primary font-bold mb-12">
            Shopping Cart
          </h2>
          <div className="grid lg:grid-cols-[70%_30%] gap-4">
            <table className="w-full">
              <tr>
                <th className="text-start pb-3">PRODUCT</th>
                <th className="text-start pb-3">PRICE</th>
                <th className="text-start pb-3">QUANTITY</th>
                <th className="text-start pb-3">TOTAL</th>
              </tr>
              <tr className="border-y border-[#f5f5f5]">
                <td className=" py-8">
                  <div className="flex items-center gap-2">
                    <div>
                      <img
                        src={demo}
                        alt=""
                        className="w-[100px] h-[76px] rounded-lg mb-3"
                      />
                      <span className="flex items-center text-primary cursor-pointer font-semibold">
                        <RiDeleteBin6Line className="text-xl" />
                        Remove
                      </span>
                    </div>
                    <h2 className="text-dark text-base font-medium">
                      Statement steel rings
                    </h2>
                  </div>
                </td>
                <td className="text-dark py-8 text-base font-medium">₦12000</td>
                <td>
                  <div className="text-center flex items-center">
                    <button className="bg-[#f5f5f5] px-[12px] h-6 rounded-t-[17px rounded-l-[17px]">
                      <FiPlus />
                    </button>
                    <input
                      type="text"
                      className="w-[3.3rem] px-[10px] bg-white h-6 outline-none text-center border-[#f5f5f5]  border-y"
                      value="1"
                      disabled
                    />
                    <button className="bg-[#f5f5f5]  px-[12px] h-6 rounded-r-[17px] rounded-b-[17px">
                      <FiMinus />
                    </button>
                  </div>
                </td>
                <td className="text-dark py-8 text-base font-medium">₦12000</td>
              </tr>
              <tr className="border-y border-[#f5f5f5]">
                <td className=" py-8">
                  <div className="flex items-center gap-2">
                    <div>
                      <img
                        src={demo}
                        alt=""
                        className="w-[100px] h-[76px] rounded-lg mb-3"
                      />
                      <span className="flex items-center text-primary cursor-pointer font-semibold">
                        <RiDeleteBin6Line className="text-xl" />
                        Remove
                      </span>
                    </div>
                    <h2 className="text-dark text-base font-medium">
                      Statement steel rings
                    </h2>
                  </div>
                </td>
                <td className="text-dark py-8 text-base font-medium">₦12000</td>
                <td>
                  <div className="text-center flex items-center">
                    <button className="bg-[#f5f5f5] px-[12px] h-6 rounded-t-[17px rounded-l-[17px]">
                      <FiPlus />
                    </button>
                    <input
                      type="text"
                      className="w-[3.3rem] px-[10px] bg-white h-6 outline-none text-center border-[#f5f5f5]  border-y"
                      value="1"
                      disabled
                    />
                    <button className="bg-[#f5f5f5]  px-[12px] h-6 rounded-r-[17px] rounded-b-[17px">
                      <FiMinus />
                    </button>
                  </div>
                </td>
                <td className="text-dark py-8 text-base font-medium">₦12000</td>
              </tr>
              <tr className="border-y border-[#f5f5f5]">
                <td className=" py-8">
                  <div className="flex items-center gap-2">
                    <div>
                      <img
                        src={demo}
                        alt=""
                        className="w-[100px] h-[76px] rounded-lg mb-3"
                      />
                      <span className="flex items-center text-primary cursor-pointer font-semibold">
                        <RiDeleteBin6Line className="text-xl" />
                        Remove
                      </span>
                    </div>
                    <h2 className="text-dark text-base font-medium">
                      Statement steel rings
                    </h2>
                  </div>
                </td>
                <td className="text-dark py-8 text-base font-medium">₦12000</td>
                <td>
                  <div className="text-center flex items-center">
                    <button className="bg-[#f5f5f5] px-[12px] h-6 rounded-t-[17px rounded-l-[17px]">
                      <FiPlus />
                    </button>
                    <input
                      type="text"
                      className="w-[3.3rem] px-[10px] bg-white h-6 outline-none text-center border-[#f5f5f5]  border-y"
                      value="1"
                      disabled
                    />
                    <button className="bg-[#f5f5f5]  px-[12px] h-6 rounded-r-[17px] rounded-b-[17px">
                      <FiMinus />
                    </button>
                  </div>
                </td>
                <td className="text-dark py-8 text-base font-medium">₦12000</td>
              </tr>
            </table>
            <div className="sticky top-0 p-8 shadow-shadow bg-white h-fit">
              <div className="flex justify-between text-cyber font-medium">
                <p>TOTAL</p>
                <p>₦45000</p>
              </div>
              <p className="mb-4 mt-8 text-cyber text-base font-medium">Shipping & taxes calculated at checkout</p>
              <Link className="" to="/checkout">
                <button className="bg-primary text-white text-[16px] px-[38px] rounded-lg py-2">
                  Checkout
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Cart;
