import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCartPush(state, action) {
            state.cartItems.push(action.payload);
        },
        removeFromCart(state, action) {
            state.cartItems = state.cartItems.filter(item => item.id !== action.payload.id);
        },
    },
});

export const { addToCartPush, removeFromCart} = cartSlice.actions;
export default cartSlice.reducer



