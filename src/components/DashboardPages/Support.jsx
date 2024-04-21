import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useFormik } from "formik";
import { useState } from "react";
import Header from "../Header";
import { Axios } from "../../config";
import { faqData } from "../../constants/data";
import Request from "../../lib/requests";
import { contactSchema } from "../../schemas";
const Support = () => {
  const [tabs, setTabs] = useState("faq");
  const [faqAnswer, setFaqAnswer] = useState(null);

  const supportTabs = [
    {
      tab: "faq",
      text: "FAQ",
    },
    {
      tab: "contact",
      text: "Contact us",
    },
  ];
  const handleToggle = (key) => {
    if (faqAnswer === key) {
      setFaqAnswer(null);
    } else {
      setFaqAnswer(key);
    }
  };
  const initialValues = {
    message: "",
    email: "",
  };
  const onSubmit = async (payload, actions) => {
    try {
      const res = await Axios.post(Request.contactUs, payload);
      if (res.data.status === "success") {
        toast.success("Message sent successfully!");
      } else {
        toast.error("Unsuccessful, Please try again.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again later.");
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
    <div>
      <Header />
      <div className="container">
        <div className="flex mt-[76px] mb-8">
          {supportTabs.map((item) => (
            <h3
              key={item.tab}
              onClick={() => setTabs(item.tab)}
              className={`text-xl font-medium cursor-pointer w-[50%] pb-2 flex items-center justify-center translate-y-[2px] ${
                item.tab === tabs
                  ? "text-primary border-b-[3px] border-primary transition-all duration-300"
                  : "text-dark"
              }`}
            >
              {item.text}
            </h3>
          ))}
        </div>
        {tabs === "faq" && (
          <div className="w-full p-8 flex flex-col items-start justify-start bg-white rounded-2xl shadow-shadow">
            {faqData.map((item, i) => (
              <div
                key={i}
                onClick={() => handleToggle(i)}
                className="w-full flex flex-col items-start justify-start py-4 border-b border-gray last:border-none cursor-pointer"
              >
                <h2 className="text-base text-dark">{item.question}</h2>
                <p
                  className={`text-base opacity-70 overflow-hidden transition-all duration-300 ${
                    faqAnswer === i ? "max-h-[1000px] pt-4" : "max-h-0"
                  }`}
                >
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        )}
        {tabs === "contact" && (
          <form onSubmit={handleSubmit}>
            <h2 className="accia mb-[48px] text-xl font-semibold text-primary leading-[43px]">
              Need help?
            </h2>
            <div className="mb-6">
              <input
                type="email"
                name="email"
                placeholder="Email address"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`text-darkTwo w-full border-black rounded-lg outline-none px-[24px] py-[20px] border-[0.5px] ${
                  getError("email") ? "!border-red-500" : ""
                }`}
              />
              {getError("email") && (
                <p className="text-red-500 text-sm font-medium">
                  {getError("email")}
                </p>
              )}
            </div>
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
              className="text-xl mt-[64px] bg-primary rounded-[12px] text-white font-medium px-[88px] py-2"
              type="submit"
            >
              Send
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Support;
