import { configureStore } from "@reduxjs/toolkit";
import Cart from "./Slices/CartSlice";
import Product from "./Slices/ProductSlice"

export const store = configureStore({
    reducer: {
        Cart,
        Product,
    }
})