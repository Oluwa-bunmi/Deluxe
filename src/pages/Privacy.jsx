import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Privacy = () => {
  const content = [
    {
      title: "Information We Collect",
      description:
        "We collect personal information from users which may include name, address, email, location, payment information (credit card number, billing address, etc.), order history, browsing activity and other details relevant to your transactions.",
    },
    {
      title: "How We Use Your Information",
      description:
        "We use the collected information for purposes such as processing orders and payments, providing customer support, analyzing website performance and user behavior, improving our website and services, communicating with users about orders confirmation and updates, preventing fraud and ensuring security, marketing and promotions (with user consent).",
    },
    {
      title: "Sharing Your Information",
      description:
        "We may share users' personal information with third party services such as payment processors, shipping providers, service providers (e.g. website hosting, analytics), legal authorities if required by law or to protect our rights and interests.",
    },
    {
      title: "Data Security ",
      description:
        "We take appropriate measures to protect users' personal information from unauthorized access, disclosure, alteration, or destruction. These measures include encryption, secure servers, and access controls.",
    },
    {
      title: "Cookies and Tracking",
      description:
        "We use cookies and other tracking technologies to collect information about users' browsing behavior and preferences. Users can manage cookie preferences through their browser settings. ",
    },
    {
      title: "User Choices",
      description:
        "Users have the following choices regarding their personal information: Opting out of certain data collection practices, Updating or deleting their personal information.",
    },
    {
      title: "Access and Correction",
      description:
        "Users can access and update their personal information stored by our website by logging into their account or contacting us directly.",
    },
    {
      title: "Policy Review",
      description:
        "This Policy will be reviewed annually and updated as necessary to ensure its effectiveness and relevance.",
    },
    {
      title: "Contact Information",
      description:
        "If you have any questions or concerns about this privacy policy or our data practices, please contact us at deluxgem@gmail.com or visit the contact page.",
    },
  ];

  return (
    <>
      <Navbar />
      <section className="py-16">
        <div className="container">
          <h1 className="text-primary text-center font-bold text-3xl mb-[30px]">
            OUR PRIVACY POLICY
          </h1>
          <p className="text-cyber mt-4 mb-6 leading-[30px] text-[17px]">
            Deluxe gem is committed to protecting the privacy of our users. This
            Privacy Policy explains how we collect, use, share, and protect the
            personal information of our users. By accessing or using our
            website, you agree to the terms of this Privacy Policy.
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

export default Privacy;
