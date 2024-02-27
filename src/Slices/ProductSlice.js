import axios from 'axios'
import { createSlice } from "@reduxjs/toolkit";

import {URL} from "../constants"

const STATUS = {
    LOADING: "LOADING",
    SUCCESS: "SUCCESS",
    FAILED:"FAILED"
} 

const productSlice = createSlice({
    name: "Product",
    initialState: {
        data: [],
        status:STATUS.LOADING
    },
    reducers: {
        setProducts(state, action) {
            state.data = action.payload
        },
        setLoading(state, action) {
            state.status = action.payload
        }
        
    }
})

export const { setProducts,setLoading } = productSlice.actions 

export default productSlice.reducer 


//async function writing here so the data can be added to store directly, so that the data is available
// acroos application and we dont have to make api call everytime in different components. 
 // Since the data is available globally any component can consume the data
export function fetchProducts() {
    return async function fetchDataThunk(dispatch) {
        dispatch(setLoading(STATUS.LOADING))

        try {
            const response = await axios.get(URL)
            dispatch(setProducts(response.data))
            dispatch(setLoading(STATUS.SUCCESS))
         }
        catch (err) {
            dispatch(setLoading(STATUS.FAILED))
            console.log(err);
        }
    }
}