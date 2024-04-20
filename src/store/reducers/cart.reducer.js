import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    sendDataToCart(state, action) {
      const { payload } = action;
      state.push(payload);
    },
  },
});
export const { sendDataToCart } = cartSlice.actions;
export default cartSlice.reducer;
