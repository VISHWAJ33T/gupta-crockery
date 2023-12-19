import { createSlice } from "@reduxjs/toolkit";

export const cartItemsSlice = createSlice({
    initialState: [],
    name: 'cartItemsSlice',
    reducers: {
        updateCartItemSlice: (state, action) => {
            return action.payload
        },
        incrementCartItemQty: (state, action) => {
            const item = state.find(item => item._id === action.payload);
            if (item) {
                item.qtyValue += 1;
            }
            return state;
        },
        decrementCartItemQty: (state, action) => {
            const item = state.find(item => item._id === action.payload);
            if (item && item.qtyValue > 0) {
                item.qtyValue -= 1;
            }
            return state;
        }
    }
})

export const { updateCartItemSlice, incrementCartItemQty, decrementCartItemQty } = cartItemsSlice.actions
export default cartItemsSlice.reducer