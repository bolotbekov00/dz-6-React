import {configureStore} from "@reduxjs/toolkit";
import addOneReducer from './cartCauntReducer.js';
import cartCountReducer from './cartCauntReducer.js';
import cartSlice from "./cartReducer.js";

export const store = configureStore({
    reducer:{
        addOne: addOneReducer,
        cart: cartCountReducer,
        pushAdd: cartSlice,
    }
});


