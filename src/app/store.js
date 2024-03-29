import { configureStore } from "@reduxjs/toolkit";
import reviewSlice from "./Features/reviewSlice";
import themeSlice from "./Features/themeSlice";
import imageSlice from "./Features/imageSlice";
import counterSlice from "./Features/counterSlice";

const store = configureStore({
  reducer: {
    image: imageSlice,
    counter: counterSlice,
    reviews: reviewSlice,
    theme: themeSlice,
  },
});

export default store;
