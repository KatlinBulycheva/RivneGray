import { initState } from "../initState";
import { createSlice } from "@reduxjs/toolkit";

const sortSlice = createSlice({
  name: 'sortValue',
  initialState: initState.sortValue,
  reducers: {
    selectSortValue(_, action) {
      return action.payload;
    }
  }
});

export const { selectSortValue } = sortSlice.actions;
export const sortValueReducer = sortSlice.reducer;
export const getSortValueSelector = (state) => state.sortValue;