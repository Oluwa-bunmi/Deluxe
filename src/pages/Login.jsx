import { Link, useNavigate } from "react-router-dom";
import heroImg from "../assets/auth.png";
import logo from "../assets/logo.png";
import { loginSchema } from "../schemas";
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

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const initialValues = {
    email: "",
    password: "",
  };

  const onSubmit = async (payload, actions) => {
    if (!isChecked) {
      toast.error("Please check the box");
      return;
    }
    try {
      const res = await Axios.post(Request.login, payload);
     
      localStorage.setItem("token", res.data.token);
      navigate("/");
    } catch (error) {
     
      toast.error(error?.response.data.message);
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
    validationSchema: loginSchema,
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
          Welcome Back!
        </h1>
        <p className="text-xl leading-[28px] text-primary font-medium text-center pt-[12px] pb-[32px]">
          We're thrilled to have you back with us
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
          <div className="flex justify-between items-center mb-[20px] ">
            <div className="flex items-center gap-2">
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
            <Link
              to="/forgot-password"
              className="text-[16px] font-medium text-primary"
            >
              Forgot Password
            </Link>
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="disabled:opacity-75 disabled:cursor-not-allowed bg-primary text-xl font-medium w-full text-white py-[16px] rounded-lg"
          >
            Sign In
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
          Don't have an account?{" "}
          <Link to="/signup" className="text-primary font-bold">
            Sign Up
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

export default Login;
