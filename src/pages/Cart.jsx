import { RiDeleteBin6Line } from "react-icons/ri";
import { FiPlus, FiMinus } from "react-icons/fi";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeItemFromCart, updateCartItemQuantity } from "../store/reducers/cart.reducer";
import { formattedAmount } from "../utils/FormattedAmount";
import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { payment } from "../constants/data";
const Cart = () => {
  const [openModal, setOpenModal] = useState(false);
  const cartItems = useSelector((state) => state.cart);
  const totalAmount = cartItems.reduce((accumulator, item) => {
    return accumulator + item.quantity * item.price;
  }, 0);
  return (
    <>
      {openModal && (
        <div className="fixed bg-primary w-full h-full z-full overflow-y-auto z-[100]">
          <div className="bg-white p-[80px] w-[50%] mx-auto mt-12">
            <div className="mb-[48px] flex gap-[100px]">
              <FaArrowLeft
                size={30}
                className="cursor-pointer"
                onClick={() => setOpenModal(false)}
              />
              <p>Select Payment Options</p>
            </div>
            <div>
              {payment.map((item, i) => (
                <div
                  key={i}
                  className="flex mb-[48px] justify-between items-center w-full border border-dark rounded-lg cursor-pointer px-[32px] py-[23px]"
                >
                  <span className="text-xl text-dark">{item.method}</span>
                  <img src={item.image} alt="" />
                </div>
              ))}
            </div>
            <button className="bg-primary rounded-lg text-white block mx-auto px-[70px] py-[14px] text-base font-medium">
              Confirm
            </button>
          </div>
        </div>
      )}
      <Navbar />
      <section className="pt-[200px] pb-[70px]">
        <div className="container">
          <h2 className="text-[32px] text-primary font-bold mb-12">
            Shopping Cart
          </h2>
          {cartItems.length > 0 ? (
            <div className="grid lg:grid-cols-[70%_30%] gap-4">
              <table className="w-full">
                <tr>
                  <th className="text-start pb-3">PRODUCT</th>
                  <th className="text-start pb-3">PRICE</th>
                  <th className="text-start pb-3">QUANTITY</th>
                  <th className="text-start pb-3">TOTAL</th>
                </tr>
                {cartItems.map((item, i) => (
                  <CartItem item={item} key={i} />
                ))}
              </table>
              <div className="sticky top-0 p-8 shadow-shadow bg-white h-fit">
                <div className="flex justify-between text-cyber font-medium">
                  <p>TOTAL</p>
                  <p>{formattedAmount(totalAmount)}</p>
                </div>
                <p className="mb-4 mt-8 text-cyber text-base font-medium">
                  Shipping & taxes calculated at checkout
                </p>
                {/* <Link className="" to="/checkout"> */}
                <button
                  onClick={() => setOpenModal(true)}
                  className="bg-primary text-white text-[16px] px-[38px] rounded-lg py-2"
                >
                  Checkout
                </button>
                {/* </Link> */}
              </div>
            </div>
          ) : (
            <p className="text-xl">
              Your cart is currently empty, <Link to="/" className="text-primary underline"> return to shop</Link>
            </p>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
};
const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const handleChange = (type) => {
    dispatch(updateCartItemQuantity({ type, id: item._id }));
  };
  const handleRemove = () => {
    dispatch(removeItemFromCart(item));
  };
  return (
    <tr className="border-y border-[#f5f5f5]">
      <td className=" py-8">
        <div className="flex items-center gap-2">
          <div>
            <img
              src={`data:image/png;base64,${item.Photo}`}
              alt={item.productname}
              className="w-[100px] h-[76px] rounded-lg mb-3"
            />
            <span
              onClick={handleRemove}
              className="flex items-center text-primary cursor-pointer font-semibold"
            >
              <RiDeleteBin6Line className="text-xl" />
              Remove
            </span>
          </div>
          <h2 className="text-dark text-base font-medium">
            {item.productname}
          </h2>
        </div>
      </td>
      <td className="text-dark py-8 text-base font-medium">
        {formattedAmount(item.price)}
      </td>
      <td>
        <div className="text-center flex items-center">
          <button
            onClick={() => handleChange("increment")}
            disabled={item.quantity >= item.instock}
            className={`bg-[#f5f5f5] px-[12px] h-6 rounded-t-[17px rounded-l-[17px] ${
              item.quantity >= item.instock
                ? "cursor-not-allowed opacity-50"
                : "cursor-pointer"
            }`}
          >
            <FiPlus />
          </button>
          <input
            type="text"
            className="w-[3.3rem] px-[10px] bg-white h-6 outline-none text-center border-[#f5f5f5]  border-y"
            value={item.quantity}
            disabled
          />
          <button
            onClick={() => handleChange("decrement")}
            disabled={item.quantity <= 1}
            className={`bg-[#f5f5f5] px-[12px] h-6 rounded-t-[17px rounded-l-[17px] ${
              item.quantity <= 1
                ? "cursor-not-allowed opacity-50"
                : "cursor-pointer"
            }`}
          >
            <FiMinus />
          </button>
        </div>
      </td>
      <td className="text-dark py-8 text-base font-medium">
        {formattedAmount(item.price * item.quantity)}
      </td>
    </tr>
  );
};
export default Cart;
