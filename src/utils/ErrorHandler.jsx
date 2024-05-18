import { toast } from "react-toastify";

const ErrorHandler = (error, message) => {
  // Check if there's no error object
  if (!error) {
    toast.error(message || "Oops, something went wrong");
    return;
  }

  // Handle cases where error does not have a response or response.data
  if (!error.response || !error.response.data) {
    toast.error(error.message || "An unexpected error occurred");
    return;
  }

  // Handle cases where response.data.message is a string
  if (typeof error.response.data.message === "string") {
    toast.error(error.response.data.message);
  }
  // Handle cases where response.data.message is an array
  else if (Array.isArray(error.response.data.message)) {
    toast.error(error.response.data.message[0]);
  }
  // Handle cases where response.data.message is not a string or array
  else {
    toast.error("An unexpected error occurred");
  }
};

export default ErrorHandler;
