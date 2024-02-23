import { configureStore } from '@reduxjs/toolkit'
import Cart from './Slices/CartSlice'

//here we are creatting and confugiring store
//we import this store where ever required.

export const store = configureStore({
    reducer:{
        Cart
    }
})