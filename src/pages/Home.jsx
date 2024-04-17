import { Link } from "react-router-dom";
import heroImg from "../assets/heroImg.png";
import discount from "../assets/discountBg.png";
import deluxeIntro from "../assets/intro.png";
import GridContainer from "../components/GridContainer";
import Testimonial from "../components/Testimonial";
import Discount from "../components/Discount";
import Footer from "../components/Footer";
const Home = () => {
  return (
    <>
      <section className="bg-light ">
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
      {/* <Testimonial /> */}
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
