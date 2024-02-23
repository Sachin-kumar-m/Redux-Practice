import { createSlice } from "@reduxjs/toolkit";

//create a slice. it accepts an object with name, initial state and reducer function.
// reducers will have all the function that is used to modify or alter our state. like add, increment etc

const cartSlice = createSlice({
    name: "Cart",
    initialState: [],
    reducers: {
        add(state, action) {
            state.push(action.payload)
        }
    }
})

export const { add } = cartSlice.actions // exporting our reducers

export default cartSlice.reducer //exporting the slices