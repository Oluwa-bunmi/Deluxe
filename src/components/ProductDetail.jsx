import { FiPlus, FiMinus } from "react-icons/fi";
import { IoHeartOutline, IoHeartSharp } from "react-icons/io5";
import { FaArrowLeft } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { formattedAmount } from "../utils/FormattedAmount";

const ProductDetail = ({ id, closeModal }) => {
  const products = useSelector((data) => data.products);
  const product = products.find((data) => data._id === id);
  return (
    <section className="pt-[200px]">
      <div className="container grid lg:grid-cols-2 gap-[52px] items-center">
        <div className="flex flex-col gap-7">
          <FaArrowLeft
            size={30}
            onClick={closeModal}
            className="cursor-pointer"
          />
          <div className="relative">
            <img src={`data:image/png;base64,${product.Photo}`} alt="" />
            <span className=" absolute right-[1.3rem] top-[1.3rem]">
              <IoHeartOutline size={30} />
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-[36px]">
          <div>
            <h1 className="accia text-[32px] font-semibold text-primary leading-[43px]">
              {product.productname}
            </h1>
            <p className="font-bold text-xl leading-[28px]">
              {formattedAmount(product.price)}
            </p>
          </div>
          <p className="text-xl text-black">{product.description}</p>
          {/* <span className="text-black font-medium text-xl">
            Weighs 4.3 gram
          </span> */}
          {/* <form className="flex flex-col sm:flex-row gap-[28px]">
            <div className="flex items-center gap-[28px] lg:gap-[10px] xl:gap-[28px]">
              <label
                htmlFor="size"
                className="text-xl font-normal text-primary"
              >
                Ring Size
              </label>
              <select
                name="size"
                id="size"
                required
                className="outline-none border-primary border w-[170px] rounded-lg py-3"
              >
                <option selected disabled value="">
                  Choose Option
                </option>
                <option value="1">1</option>
                <option value="3">12</option>
                <option value="3">15</option>
              </select>
            </div>
            <div className="flex items-center gap-[28px] lg:gap-[10px] xl:gap-[28px]">
              <label
                htmlFor="color"
                className="text-xl font-normal text-primary"
              >
                Color
              </label>
              <select
                name=""
                id="color"
                className="outline-none border-primary border w-[170px] rounded-lg py-3"
              >
                <option selected disabled value="">
                  Choose Option
                </option>
                <option value="1">Gold</option>
                <option value="3">12</option>
                <option value="3">15</option>
              </select>
            </div>
          </form> */}
          <div className="flex items-center gap-[28px]">
            <span className="text-xl font-normal text-primary">Quantity</span>
            <div className="border-primary border items-center justify-center gap-7 h-[38px] rounded-lg w-[170px] flex ">
              <FiPlus className="cursor-pointer text-xl font-medium text-primary" />
              <span className="text-[#94939C] text-base">0</span>
              <FiMinus className="cursor-pointer text-xl font-medium text-primary" />
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-primary py-3 text-white font-medium text-base rounded-lg"
          >
            Order Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
