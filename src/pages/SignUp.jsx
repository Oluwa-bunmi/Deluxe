import { Link } from "react-router-dom";
import heroImg from "../assets/auth.png";
import logo from "../assets/logo.png";
import { signupSchema } from "../schemas";
import { Axios } from "../config";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import Request from "../lib/requests";
import "react-toastify/dist/ReactToastify.css";

import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import InputField from "../components/InputField";
import AuthBtn from "../components/AuthBtn";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
   const [isChecked, setIsChecked] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const initialValues = {
    username: "",
    email: "",
    password: "",
  };

  const onSubmit = async (payload, actions) => {
     if (!isChecked) {
       toast.error("Please check the box", {
         position: "top-right",
         style: {
           zIndex: "100",
         },
       });
       return;
     }
    try {
      const res = await Axios.post(Request.signup, payload);
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
     setIsChecked(false);
    
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
    validationSchema: signupSchema,
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
        <h1 className="accia text-primary font-semibold text-[40px] leading-[54.4px] text-center">
          Create Account
        </h1>
        <p className="text-xl leading-[28px] text-primary font-medium text-center pt-[12px] pb-[32px]">
          Unlock Exclusive Access to our Stunning Collection!
        </p>
        <div>
          <InputField
            label="Username"
            name="username"
            type="text"
            placeholder="Name"
            value={values.username}
            onChange={handleChange}
            onBlur={handleBlur}
            error={getError("username")}
          />

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
          <div className="flex flex-col mb-[20px]">
            <label
              htmlFor="location"
              className="text-[16px] text-dark font-medium"
            >
              Location/Area
            </label>
            <select
              id="location"
              name="location"
              className="border-gray outline-none border p-2 rounded-lg text-gray"
            >
              <option value="">Location</option>
              <option value="">Lagos</option>
              <option value="">Port Harcourt</option>
              <option value="">Abeokuta</option>
              <option value="">Benue</option>
            </select>
          </div>
          <div className="flex flex-col mb-[20px]">
            <label
              htmlFor="password"
              className="text-[16px] text-dark font-medium"
            >
              Password
            </label>
            <div
              className={`flex gap-4 justify-between border-gray outline-none border p-2 rounded-lg items-center ${
                errors.password && touched.password
                  ? "border border-red-500"
                  : ""
              }`}
            >
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                name="password"
                id="password"
                className={`outline-none border-none w-full ${
                  errors.password && touched.password
                    ? "border border-red-500"
                    : ""
                }`}
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                error={getError("password")}
              />
              {showPassword ? (
                <FaEye
                  onClick={togglePasswordVisibility}
                  className="text-gray cursor-pointer"
                />
              ) : (
                <FaEyeSlash
                  onClick={togglePasswordVisibility}
                  className="text-gray cursor-pointer"
                />
              )}
            </div>
            {errors.password && touched.password && (
              <p className="text-red-500 text-sm font-medium">
                {errors.password}
              </p>
            )}
          </div>
          <div className="mb-[20px] flex items-center gap-2">
            <input
              id="remember"
              name="remember"
              type="checkbox"
              checked={isChecked}
              onChange={() => setIsChecked(!isChecked)}
            />
            <label
              htmlFor="remember"
              className="text-[16px] text-dark font-medium"
            >
              Remember me
            </label>
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="disabled:opacity-75 disabled:cursor-not-allowed bg-primary text-xl font-medium w-full text-white py-[16px] rounded-lg"
          >
            Sign up
          </button>
        </div>
        <p className="text-primary text-xl font-bold text-center my-[32px]">
          OR
        </p>
        <AuthBtn
          icon={FcGoogle}
          text="Sign up with Google"
          color="#1877F2"
          size={25}
        />
        <AuthBtn
          icon={FaFacebook}
          text="Sign up with Facebook"
          color="#1877F2"
          size={25}
        />

        <p className="text-[16px] text-center font-medium">
          Already have an account?{" "}
          <Link to="/login" className="text-primary font-bold">
            Login
          </Link>
        </p>
      </form>
      <div className="hidden lg:block h-screen overflow-hidden">
        <img
          src={heroImg}
          alt="jewellery"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default SignUp;
