import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartValue: 0,
  },
  reducers: {
    addToCart: (state) => {
      state.cartValue = state.cartValue + 1;
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
