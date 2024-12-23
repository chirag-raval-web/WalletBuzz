// src/redux/walletSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  address: "",
};

const walletSlice = createSlice({
  name: "wallet",
  initialState,
  reducers: {
    setWalletAddress: (state, action) => {
      state.address = action.payload;
    },
    clearWalletAddress: (state) => {
      state.address = "";
    },
  },
});

export const { setWalletAddress, clearWalletAddress } = walletSlice.actions;

export const selectWalletAddress = (state) => state.wallet.address;

export default walletSlice.reducer;
