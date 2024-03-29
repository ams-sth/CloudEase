import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pageColor: "dark",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setGreenColor(state) {
      state.pageColor = "green";
    },
    setDarkColor(state) {
      state.pageColor = "dark";
    },
  },
});

export const { setGreenColor, setDarkColor } = themeSlice.actions;

export default themeSlice.reducer;
