import { configureStore } from "@reduxjs/toolkit";
import { getInitState } from "./initState";
import { filtersReduce } from "./slices/filtersSlice";
import { REDUX_LS_KEY } from "../utils/constants";
import { sortValueReducer } from "./slices/sortSlice";
import { searchValueReduser } from "./slices/searchSlice";
import { paginationValueReducer } from "./slices/paginationSlice";
import { userReducer } from "./slices/userSlice";
import { cartReducer } from "./slices/cartSlice";

export const store = configureStore({
  preloadedState: getInitState(),
  reducer: {
    filters: filtersReduce,
    sortValue: sortValueReducer,
    searchValue: searchValueReduser,
    paginationValue: paginationValueReducer,
    user: userReducer,
    cart: cartReducer,
  },
});

store.subscribe(() => {
  window.localStorage.setItem(REDUX_LS_KEY, JSON.stringify(store.getState()));
});