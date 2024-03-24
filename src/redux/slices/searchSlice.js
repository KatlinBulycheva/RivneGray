const { createSlice } = require("@reduxjs/toolkit");
const { initState } = require("../initState");

const searchSlice = createSlice({
  name: 'searchValue',
  initialState: initState.searchValue,
  reducers: {
    setSearchValue(_, action) {
      return action.payload;
    }
  }
});

export const { setSearchValue } = searchSlice.actions;
export const searchValueReduser = searchSlice.reducer;
export const searchValueSelector = (state) => state.searchValue;