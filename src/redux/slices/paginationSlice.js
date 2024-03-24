import { initState } from "../initState";
import { createSlice } from "@reduxjs/toolkit";

const paginationSlice = createSlice({
  name: 'paginationValue',
  initialState: initState.paginationValue,
  reducers: {
    selectPaginationValue(_, action) {
      return action.payload;
    }
  }
});

export const { selectPaginationValue } = paginationSlice.actions;
export const paginationValueReducer = paginationSlice.reducer;
export const getPaginationValueSelector = (state) => state.paginationValue;