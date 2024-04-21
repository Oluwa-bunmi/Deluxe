import * as yup from "yup";

export const loginSchema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Required"),
  password: yup
    .string()
    .min(5, "Password must be at least 5 characters long")
    .required("Required"),
});
export const signupSchema = yup.object().shape({
  username: yup.string().required("Required"),
  email: yup.string().email("Invalid email").required("Required"),
  password: yup
    .string()
    .min(5, "Password must be at least 5 characters long")
    .required("Required"),
});

export const forgotPasswordSchema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Required"),
});
export const newPasswordSchema = yup.object().shape({
  code: yup
    .string()
    .length(5, "Code must be exactly 5 characters")
    .required("Required"),
  password: yup
    .string()
    .min(5, "Password must be at least 5 characters long")
    .required("Required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Required"),
});
export const contactSchema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Required"),
  message: yup
    .string()
    .min(10, "Message must be at least 10 characters")
    .required("Required"),
});
