// import
import { configureStore } from "@reduxjs/toolkit";
import { favoriteSlice } from "../store";


export const store = configureStore({
    reducer: {
        favorite: favoriteSlice.reducer
    }
})