import Banner from "../components/Banner";
import Navbar from "../components/Navbar";

const About = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Banner
        title="About Us"
        description={`Enjoy Luxury at its Peak with Quality Jewelry <br> that you can Trust!`}
        link="Shop Now"
        path="/shop"
        backgroundImage={`bg-aboutBg`}
      />
      {/* <div className="container"></div> */}
    </>
  );
};

export default About;
