import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import cartReducer from "./reducers/cart.reducer";
import productReducer from "./reducers/product.reducer";

const store = configureStore({
  reducer: { cart: cartReducer, products: productReducer },
  middleware: (getDefaultMiddleware) => {
    const middleware = getDefaultMiddleware({});
    if (process.env.NODE_ENV === "development") middleware.push(logger);
    return middleware;
  },
});
export default store;
