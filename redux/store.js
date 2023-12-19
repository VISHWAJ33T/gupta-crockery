import { configureStore } from '@reduxjs/toolkit'
import cartItemsSlice from './slices/cartItemsSlice'
import cartIdsSlice from './slices/cartIdsSlice'


export const store = configureStore({
    reducer: {
        cartItemsSlice: cartItemsSlice,
        cartIdsSlice: cartIdsSlice,
    },
})
