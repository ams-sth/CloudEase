import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentImageIndex: 0,
};

const imageSlice = createSlice({
  name: "image",
  initialState,
  reducers: {
    changeImage: (state, action) => {
      state.currentImageIndex = action.payload;
    },
  },
});

export const { changeImage } = imageSlice.actions;
export default imageSlice.reducer;
