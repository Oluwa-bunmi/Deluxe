import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    sendDataToProducts(state, action) {
      const { payload } = action;

      return [...payload];
    },
  },
});
export const { sendDataToProducts } = productSlice.actions;
export default productSlice.reducer;
