import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

const store = configureStore({
  reducer: {
    // slices
    cart: cartSlice,
  },
});

export default store;
