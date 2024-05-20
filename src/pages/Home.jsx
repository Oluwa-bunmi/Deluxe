import { Link, useLocation } from "react-router-dom";
import heroImg from "../assets/heroImg.png";
import discount from "../assets/discountBg.png";
import deluxeIntro from "../assets/intro.png";
import GridContainer from "../components/GridContainer";
import Testimonial from "../components/Testimonial";
import Discount from "../components/Discount";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import useProducts from "../hooks/useProducts";
import ProductDetail from "../components/ProductDetail";
import { formattedAmount } from "../utils/FormattedAmount";
import { useSelector } from "react-redux";
import { FaCircleNotch } from "react-icons/fa6";

const Home = () => {
  const { products, addToCart, loading } = useProducts();
  const [productId, setProductId] = useState(undefined);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get("id");
  const cart = useSelector((state) => state.cart);
  useEffect(() => {
    if (id) {
      setProductId(id);
    }
  }, [id]);
  const appendQuery = (value) => {
    window.history.pushState("", "", `/?id=${value}`);
    setProductId(value);
  };
  const closeModal = () => {
    window.history.pushState("", "", "/");
    setProductId(undefined);
  };
  return (
    <>
      {productId && (
        <div className="fixed bg-light w-screen h-screen z-full overflow-y-auto ">
          <ProductDetail id={productId} closeModal={closeModal} />
        </div>
      )}
      <Navbar />
      <section className="bg-light">
        <div className="grid lg:grid-cols-2 items-center gap-[44px] container">
          <div className="lg:order-2">
            <img
              src={heroImg}
              alt="A girl's neck adorned with jewellery."
              width="100%"
            />
          </div>
          <div className="flex flex-col justify-center lg:order-1">
            <h1 className="text-[48px] font-semibold accia text-primary leading-[65.28px]">
              Welcome to Deluxe Gem: Your Jewelry Plug
            </h1>
            <p className="text-[24px] leading-[32.64px] text-dark accia mt-[24px] mb-[64px] font-light">
              Enjoy Luxury at its Peak with Quality Jewelry that you can Trust
              at Affordable Prices!
            </p>
            <Link
              to="/shop"
              className="bg-primary w-fit mb-[44px] lg:mb-0 text-white text-xl font-medium px-[38px] rounded-lg py-2"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </section>
      <GridContainer
        space={`pt-[53px]`}
        heading="Welcome to Deluxe Gem's your Jewelry Haven"
        subtitle={`<br> Get ready to explore our latest collections, track your orders, and enjoy personalized recommendations just for you. Let's make your Deluxe Gem experience even more unforgettable!"`}
        src={deluxeIntro}
      />
      <section className="pt-[48px] pb-[56px]">
        <div className="container">
          <h2 className="accia text-center font-semibold text-[32px] text-primary leading-[43.52px]">
            Latest Arrivals!
          </h2>
          <p className="leading-[28px] text-xl text-center mb-[44px]">
            Be the first to check out our <br /> latest arrivals section and
            discover our hottest trends and newest products
          </p>
          {loading ? (
            <FaCircleNotch className="block mx-auto animate-spin text-primary text-xl" />
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-[70px] gap-x-[20px] sm:gap-x-[80px]">
              {products.map((item, i) => (
                <div key={i} className="flex flex-col justify-between">
                  <img
                    src={`data:image/png;base64,${item.Photo}`}
                    onClick={() => appendQuery(item._id)}
                    alt={item.productname}
                  />
                  <div>
                    <p className="mt-[24px] leading-[28px] text-xl text-dark font-normal">
                      {item.productname}
                    </p>
                    <p className="mb-[16px] font-bold text-primary leading-[24px]">
                      {formattedAmount(item.price)}
                    </p>

                    {cart.some((favItem) => favItem._id === item._id) ? (
                      <p>Added to cart</p>
                    ) : (
                      <button
                        onClick={() => addToCart(item)}
                        className="w-full bg-primary py-2 rounded-lg text-white font-medium text-base"
                      >
                        Add to Cart
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
      <Testimonial />
      <Discount
        src={discount}
        orderOne={`lg:order-2`}
        orderTwo={`lg:order-1`}
      />

      <Footer />
    </>
  );
};

export default Home;
