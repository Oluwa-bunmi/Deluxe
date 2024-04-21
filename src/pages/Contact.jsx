import Banner from "../components/Banner";
import lady from "../assets/contactLady.png";
import discount from "../assets/necklaceDiscount.png";
import { contactSchema } from "../schemas";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useFormik } from "formik";
import Request from "../lib/requests";
import { Axios } from "../config";
import Discount from "../components/Discount";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
const Contact = () => {
  const initialValues = {
    message: "",
  };
  const onSubmit = async (payload, actions) => {
    try {
      const res = await Axios.post(Request.contactUs, payload);
      if (res.data.status === "success") {
        toast.success("Message sent successfully!", {
          position: "top-right",
          style: {
            zIndex: "100",
          },
        });
      } else {
        toast.error("Message sending unsuccessful. Please try again.", {
          position: "top-right",
        });
      }
    } catch (error) {
      toast.error("An error occurred. Please try again later.", {
        position: "top-right",
      });
    }
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
  };
  const {
    values,
    touched,
    handleChange,
    handleBlur,
    errors,
    handleSubmit,
    isSubmitting,
  } = useFormik({
    initialValues,
    validationSchema: contactSchema,
    onSubmit,
  });
  const getError = (key) => {
    return touched[key] && errors[key];
  };
  return (
    <>
      <Navbar />
      <Banner
        title="Contact Us"
        description={`Enjoy Luxury at its Peak with Quality Jewelry <br> that you can Trust!`}
        display={`hidden`}
        backgroundImage={`bg-contactBg`}
      />
      <section className="pt-[46px] pb-[100px]">
        <div className="container grid lg:grid-cols-2 items-center gap-[53px]">
          <img
            src={lady}
            alt="a smiling lady with headphone plugged in."
            className="lg:order-2"
          />
          <form onSubmit={handleSubmit} className="lg:order-1">
            <h2 className="accia text-[32px] font-semibold text-primary leading-[43px]">
              Send us a message
            </h2>
            <p className="text-xl leading-[28px] text-darkTwo mb-[48px]">
              Want to contact us or find out more about our products and
              services? Please send us a message
            </p>
            <div>
              <textarea
                placeholder="Type your message here"
                name="message"
                value={values.message}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full h-[294px] text-darkTwo resize-none border-black rounded-lg outline-none px-[24px] py-[20px] border-[0.5px] ${
                  getError("message") ? "!border-red-500" : ""
                }`}
              ></textarea>

              {getError("message") && (
                <p className="text-red-500 text-sm font-medium">
                  {getError("message")}
                </p>
              )}
            </div>
            <button
              className="text-xl mt-[64px] bg-primary rounded-[12px] text-white font-medium px-[38px] py-2"
              type="submit"
            >
              Send
            </button>
          </form>
        </div>
      </section>
      <Discount src={discount} />
      <Footer />
    </>
  );
};

export default Contact;
