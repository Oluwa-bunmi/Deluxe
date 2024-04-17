import axios from "axios";
export const Axios = axios.create({
  baseURL: "https://deluxgem-2.onrender.com/",
  headers: {
    "Content-Type": "application/json",
    Authorization: `bearer ${localStorage.getItem("token")}`
    // "Access-Control-Allow-Origin": "*",
  },
});



