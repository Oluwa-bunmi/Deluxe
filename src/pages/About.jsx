import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import necklaceOne from "../assets/necklaceOne.png";
import necklaceTwo from "../assets/necklaceTwo.png";
import GridContainer from "../components/GridContainer";
import Discount from "../components/Discount";
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
      <GridContainer
        space={`pt-[53px]`}
        heading="About Deluxe Gem"
        subtitle={` Welcome to Deluxe Gem, your ultimate destination for stress-free
              online shopping! At Deluxe Gem, we are passionate about providing
              quality and affordable jewelry for you. <br /> <br /> Our mission is to make
              online purchase as smooth and seamless as possible. Our products
              are of top quality and durability with prices that are affordable
              for you. <br /> <br /> Our platform will make it very easy for you to browse our
              collection of products, make your order, track your order and
              receive your purchase within a very short time.`}
        src={necklaceOne}
      />
      <GridContainer
        orderOne={`lg:order-2`}
        orderTwo={`lg:order-1`}
        heading="What We Offer"
        subtitle={`We provide anything you need to slay in the world of fashion, we sell quality and affordable jewelries and accessories at affordable prices. With our user-friendly platform, we make it easy for you to browse through our collection and make your orders with ease. <br> <br> Our luxury jewelries range from  necklaces to wrist watches to rings all made of gold, diamond and sapphire, bringing you quality and sophisticated jewelries with ease. `}
        src={necklaceTwo}
      />
      <Discount />
    </>
  );
};

export default About;
