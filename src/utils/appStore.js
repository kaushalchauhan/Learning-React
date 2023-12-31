import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../utils/slices/cartSlice";

const appStore = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default appStore;
