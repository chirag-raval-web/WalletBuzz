// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import walletReducer from "./walletSlice";

const store = configureStore({
  reducer: {
    wallet: walletReducer,
  },
});

export default store;