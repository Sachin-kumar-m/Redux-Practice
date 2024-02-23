import { configureStore } from "@reduxjs/toolkit";
import Cart from "./Slices/CartSlice";

export const store = configureStore({
    reducer: {
        Cart,
    }
})