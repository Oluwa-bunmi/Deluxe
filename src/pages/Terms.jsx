import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Terms = () => {
  const content = [
    {
      title: "Account Registration ",
      description:
        "You must be at least 18 years old to create an account on Deluxe Gem. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.",
    },
    {
      title: "Product Information",
      description:
        "Deluxe Gem strives to provide accurate and up-to-date product listings and descriptions. However, we do not guarantee the accuracy, completeness, or reliability of any product information on our web app.",
    },
    {
      title: "Shipping and Delivery",
      description:
        "Deluxe Gem will make reasonable efforts to deliver orders to the specified shipping address within the estimated delivery timeframe. However, we do not guarantee delivery dates and times. ",
    },
    {
      title: "Returns and Refunds",
      description:
        "Deluxe Gem accepts returns and offers refunds for eligible products. Any item may be returned for refund within 5 days. Item(s) must be returned in original condition.",
    },
    {
      title: "Intellectual Property",
      description:
        "All content and materials on Deluxe Gem, including product images, descriptions, logos, and trademarks, are the property of Deluxe Gem and are protected by copyright and other intellectual property laws. ",
    },
    {
      title: "User Conduct",
      description:
        "You agree to use Deluxe Gem for lawful purposes only and to comply with all applicable laws and regulations. You agree not to engage in any activities that may disrupt or interfere with the operation of Deluxe Gem or the experiences of other users. ",
    },
    {
      title: "Limitation of Liability",
      description:
        "Deluxe Gem, employees, and agents shall not be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in any way connected with the use of our web app or the products purchased through our web app. ",
    },
    {
      title: "Modification of Terms",
      description:
        "Deluxe Gem reserves the right to modify or update these terms and conditions at any time without prior notice. Changes will be effective immediately upon posting on our web app. ",
    },
   
  ];

  return (
    <>
      <Navbar />
      <section className="py-16">
        <div className="container">
          <h1 className="text-primary text-center font-bold text-3xl mb-[30px]">
            OUR TERMS AND CONDITIONS
          </h1>
          <p className="text-cyber mt-4 mb-6 leading-[30px] text-[17px]">
            Welcome to Deluxe Gem! Before using our jewelry e-commerce web app,
            please read the following terms and conditions carefully. By
            accessing or using our web app, you agree to be bound by these terms
            and conditions.
          </p>
          <ul>
            {content.map((item) => (
              <li key={item.title}>
                <h3 className="text-xl font-semibold text-dark">
                  {item.title}
                </h3>
                <p className="mb-[25px] mt-4 text-[17px] text-cyber leading-[30px]">
                  {item.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Terms;
