import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  countTo99: 0,
  countTo95: 0,
  countTo50: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    updateCountTo99: (state) => {
      state.countTo99 = state.countTo99 >= 99 ? 99 : state.countTo99 + 1;
    },
    updateCountTo95: (state) => {
      state.countTo95 = state.countTo95 >= 95 ? 95 : state.countTo95 + 1;
    },
    updateCountTo50: (state) => {
      state.countTo50 = state.countTo50 >= 50 ? 50 : state.countTo50 + 1;
    },
  },
});

export const { updateCountTo99, updateCountTo95, updateCountTo50 } =
  counterSlice.actions;

export default counterSlice.reducer;
