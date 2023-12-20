import { createSlice } from "@reduxjs/toolkit";

export const cartIdsSlice = createSlice({
  initialState: {},
  name: 'cartIdsSlice',
  reducers: {
    updateCartIdsSlice: (state, action) => {
      return action.payload
    },
    incrementCartIdQty: (state, action) => {
      return { ...state, [action.payload]: +(state[action.payload] || 0) + 1 }
    },
    decrementCartIdQty: (state, action) => {
      if (state[action.payload] > 0) {
        return { ...state, [action.payload]: +state[action.payload] - 1 }
      }
      return state;
    }
  }
})

export const { updateCartIdsSlice, incrementCartIdQty, decrementCartIdQty } = cartIdsSlice.actions
export default cartIdsSlice.reducer