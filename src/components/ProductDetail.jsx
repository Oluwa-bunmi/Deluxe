import demo from "../assets/prodemo.png";
import { FiPlus, FiMinus } from "react-icons/fi";
import { IoHeartOutline, IoHeartSharp } from "react-icons/io5";
import { Link, useSearchParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import UseProducts from "../hooks/UseProducts";

const ProductDetail = () => {
  const [searchParams] = useSearchParams();
  const productId = searchParams.get("id");
  console.log(productId);
  const { products } = UseProducts();
  console.log(products);
  return (
    <section className="py-[69px]">
      <div className="container grid lg:grid-cols-2 gap-[52px] items-center">
        <div className="flex flex-col gap-7">
          <FaArrowLeft size={30} />
          <div className="relative">
            <img src={demo} alt="" />
            <span className=" absolute right-[1.3rem] top-[1.3rem]">
              <IoHeartOutline size={30} />
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-[36px]">
          <div>
            <h1 className="accia text-[32px] font-semibold text-primary leading-[43px]">
              Top Quality Gold Bracelet <br />
            </h1>
            <p className="font-bold text-xl leading-[28px]">₦3,500</p>
          </div>
          <p className="text-xl text-black">
            Top quality gold bracelets at affordable price. this is made of pure
            gold crafted from the finest raw materials and refined into a
            durable product. This product come in different sizes and colors to
            suite your fashion needs and make you comfortable, classy and
            looking great on any outfit.
          </p>
          <span className="text-black font-medium text-xl">
            Weighs 4.3 gram
          </span>
          <form className="flex flex-col sm:flex-row gap-[28px]">
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
          </form>
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
