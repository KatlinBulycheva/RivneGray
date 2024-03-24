import { createSlice } from "@reduxjs/toolkit";
import { initState } from "../initState";

const userSlice = createSlice({
  name: 'user',
  initialState: initState.user,
  reducers: {
    setTokenUser(state, action) {
      state.token = action.payload;
    },
  }
});

export const { setTokenUser } = userSlice.actions;
export const userReducer = userSlice.reducer;
export const getTokenSelector = (state) => state.user.token;