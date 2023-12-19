import { createSlice } from "@reduxjs/toolkit";



export const cartItemsSlice = createSlice({
    initialState: [],
    name: 'cartItemsSlice',
    reducers: {
        updateCartItemSlice: (state, action) => {
            return action.payload
        }
    }
})

export const { updateCartItemSlice } = cartItemsSlice.actions
export default cartItemsSlice.reducer