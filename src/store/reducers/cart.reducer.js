import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
const initialState = [];
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    sendDataToCart(state, action) {
      const { payload } = action;
      const item = state.find((data) => data._id === payload._id);
      if (item) {
        item.quantity = item.quantity + 1;
        return;
      }
      state.push(payload);
    },
    updateCartItemQuantity(state, action) {
      const { payload } = action;
      const item = state.find((data) => data._id === payload.id);
      if (payload.type === "increment") {
        if (item.quantity >= item.instock) {
          toast.error("Maximum quantity reached");
          return;
        }
        item.quantity = item.quantity + 1;
        return;
      }
      item.quantity = item.quantity - 1;
    },
    removeItemFromCart(state, action) {
      const { payload } = action;
      const item = state.findIndex((data) => data._id === payload._id);
      state.splice(item, 1);
    },
  },
});
export const { sendDataToCart, updateCartItemQuantity, removeItemFromCart } =
  cartSlice.actions;
export default cartSlice.reducer;
