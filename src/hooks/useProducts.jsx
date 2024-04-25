import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendDataToProducts } from "../store/reducers/product.reducer";
import { sendDataToCart } from "../store/reducers/cart.reducer";
import Request from "../lib/requests";
import { Axios } from "../config";
import { toast } from "react-toastify";
import ErrorHandler from "../utils/ErrorHandler";
const useProducts = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  const fetchProducts = async () => {
    try {
      const res = await Axios.get(Request.latestArrivals);
      dispatch(sendDataToProducts(res.data));
    } catch (error) {
      ErrorHandler(error);
    }
  };
  const addToCart = (item) => {
    dispatch(sendDataToCart({ ...item, quantity: 1 }));
    toast.success(`${item.productname} added to cart`);
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  return { products, addToCart };
};

export default useProducts;
// what is happening now, let's try again, tired alreadyyyyy
