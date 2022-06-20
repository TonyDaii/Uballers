// import
import { createSlice } from "@reduxjs/toolkit";
const testData = require("../../groundsData.json");

export const groundSlice = createSlice({
  // name to call the slice
  name: "groundData",
  // the initialState is the data we get from the imported testData and create an array to put favorite
  initialState: {
    dataGround: testData,
    favorites: [],
    filtered: [],
  },

  reducers: {
    // here i create the specific action
    addFavorite(state, action) {
      // i get the state inside my initial state
      const { favorites } = state;
      // here i will find inside my favorites state the dataGroundId and i get the other groundId with action payload and i compare if it's true then it's inside my favorites
      const existState = favorites.find(
        (data) => data.groundId === action.payload.groundId
      );
      // and here if it's true then i return my state
      if (existState) {
        return {
          ...state,
        };
        // and else if it's false then i push inside my array
      } else {
        favorites.push(action.payload);
      }
    },
    deleteFavorite(state, action) {
      const { favorites } = state;
      // here i will filter and compare to get an false value then remove from the array
      const newState = favorites.filter(
        (data) => data.groundId !== action.payload.groundId
      );

      return {
        ...state,
        // here i change my old array with the new array
        favorites: [...newState],
      };
    },
    filteredGround(state, action) {
      // same i get the data
      const { allGrounds } = state.dataGround;

      // then i filter if my action.payload is the same as all then i just return my all state else return all date with the same limit
      const filteredGround = allGrounds.filter((data) => {
        if (action.payload === "all") {
          return data;
        } else {
          return data.limit === action.payload;
        }
      });

      // if filteredground is false then i do nothing else i return all the state and put inside my empty array the new value
      if (!filteredGround) {
        return {
          ...state,
        };
      } else {
        return {
          ...state,
          filtered: [...filteredGround],
        };
      }
    },
  },
});

export const { addFavorite, deleteFavorite, filteredGround } =
  groundSlice.actions;
