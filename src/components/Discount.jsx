import { Link } from "react-router-dom";
const Discount = ({src, orderOne, orderTwo}) => {
  return (
    <section>
      <div className="container grid lg:grid-cols-2 items-center pb-[55px] gap-[60px]">
        <img
          src={src}
          alt="gold rings on a white surface."
          className={`${orderOne} lg:w-full`}
        />
        <div className={`${orderTwo}`}>
          <h2 className="accia font-semibold text-[40px] leading-[54px] text-primary">
            Buy with Discount today!
          </h2>
          <p className="text-xl leading-[28px] text-darkTwo mb-[48px]">
            Discover unbeatable deals limited-time offers on a variety of
            products!
          </p>
          <Link
            to="/shop"
            className="text-xl mt-[64px] bg-primary rounded-[12px] text-white font-medium px-[38px] py-2"
          >
            Shop With Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Discount;
