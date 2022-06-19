// import
import { configureStore } from "@reduxjs/toolkit";
import { groundSlice } from "../store";

// the store
export const store = configureStore({
    reducer: {
        groundData: groundSlice.reducer
    }
})