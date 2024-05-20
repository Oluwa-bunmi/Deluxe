import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendDataToProducts } from "../store/reducers/product.reducer";
import { sendDataToCart } from "../store/reducers/cart.reducer";
import Request from "../lib/requests";
import { Axios } from "../config";
import ErrorHandler from "../utils/ErrorHandler";

const useProducts = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    try {
      const res = await Axios.get(Request.latestArrivals);
      dispatch(sendDataToProducts(res.data));
    } catch (error) {
      ErrorHandler(error);
    } finally {
      setLoading(false); // Set loading to false after the fetch is complete
    }
  };
  const addToCart = (item) => {
    dispatch(sendDataToCart({ ...item, quantity: 1 }));
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  return { products, addToCart, loading };
};

export default useProducts;
