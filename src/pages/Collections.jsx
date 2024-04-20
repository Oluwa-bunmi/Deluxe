import Banner from "../components/Banner";
import Discount from "../components/Discount";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import discount from "../assets/discountBg.png";
const Collections = () => {
  return (
    <>
      <Navbar />
      <Banner
        title="Our Collections"
        display={`hidden`}
        description={`Check out our product collection grouped into categories <br> tailored to your needs!`}
        backgroundImage={`bg-collectionsBg`}
      />
      <Discount src={discount} />
      <Footer />
    </>
  );
};

export default Collections;
