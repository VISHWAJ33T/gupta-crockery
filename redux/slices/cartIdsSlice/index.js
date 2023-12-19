import { createSlice } from "@reduxjs/toolkit";



export const cartIdsSlice = createSlice({
    initialState: {},
    name: 'cartIdsSlice',
    reducers: {
        updateCartIdsSlice: (state, action) => {
            return action.payload
        }
    }
})

export const { updateCartIdsSlice } = cartIdsSlice.actions
export default cartIdsSlice.reducer