// import
import { createSlice } from "@reduxjs/toolkit";
const testData = require("../../groundsData.json");


export const favoriteSlice = createSlice({
    // name to call the slice
    name: "favorite",
    // the initialState is the data we get from the imported testData
    initialState: testData,
})