import InputField from "../components/InputField";
import { Link } from "react-router-dom";
import heroImg from "../assets/earringsBg.png";
import logo from "../assets/logo.png";
import { Axios } from "../config";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import Request from "../lib/requests";
import "react-toastify/dist/ReactToastify.css";
import { forgotPasswordSchema } from "../schemas";
const ForgotPassword = () => {
  const initialValues = {
    email: "",
  };
  const onSubmit = async (payload, actions) => {
    try {
      const res = await Axios.post(Request.forgotPassword, payload);
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
    handleChange,
    values,
    handleBlur,
    handleSubmit,
    isSubmitting,
    errors,
    touched,
  } = useFormik({
    initialValues,
    validationSchema: forgotPasswordSchema,
    onSubmit,
  });

  const getError = (key) => {
    return touched[key] && errors[key];
  };
  return (
    <section className="grid lg:grid-cols-2 font-hat lg:h-screen">
      <form
          onSubmit={handleSubmit}
        className="px-[20px] sm:px-[70px] lg:overflow-scroll"
      >
        <Link to="/" className="flex justify-center">
          <img src={logo} alt="logo" />
        </Link>
        <h1 className="accia lg:mt-[100px] text-primary font-semibold text-[40px] leading-[54.4px] text-center">
          Forgot Password?
        </h1>
        <p className="text-xl leading-[28px] text-[#A76A4D] font-medium text-center pt-[12px] pb-[32px]">
          Enter your email below to receive a password resent link
        </p>
        <div>
          <InputField
            label="Email"
            name="email"
            type="email"
            placeholder="Email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            error={getError("email")}
          />

          <button
            type="submit"
              disabled={isSubmitting}
              className="disabled:opacity-75 disabled:cursor-not-allowed bg-primary text-xl font-medium w-full text-white py-[16px] rounded-lg"
          >
          Reset Password
          </button>
        </div>

        <p className="text-[16px] text-center font-medium mt-[12px] leading-[24px]">
          Don't have an account?{" "}
          <Link to="/signup" className="text-primary font-bold">
            Sign Up
          </Link>
        </p>
      </form>
      <div className="hidden lg:block h-screen overflow-hidden">
        <img src={heroImg} alt="earring" className="w-full h-full object-cover" />
      </div>
    </section>
  );
};

export default ForgotPassword;
