import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendDataToProducts } from "../store/reducers/product.reducer";
import Request from "../lib/requests";
import { Axios } from "../config";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { sendDataToCart } from "../store/reducers/cart.reducer";
const UseProducts = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  useEffect(() => {
    fetchProducts();

    // Clean-up function (if needed)
    return () => {
      // Any clean-up code here
    };
  }, [dispatch]);
  const fetchProducts = async () => {
    try {
      const res = await Axios.get(Request.latestArrivals);
      dispatch(sendDataToProducts(res.data));
      console.log(res);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
    const addToCart = (item) => {
      dispatch(sendDataToCart(item));
        toast.success(`${item.productname} added to cart`);
    };

  return {products, addToCart};
};

export default UseProducts;
