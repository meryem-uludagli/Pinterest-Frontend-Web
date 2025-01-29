import { configureStore } from "@reduxjs/toolkit";
import pintReducer from "../store/slice/PintSlice";
import SavedImagesReducer from "./slice/SavedImageSlice";
const store = configureStore({
  reducer: {
    pinterest: pintReducer,
    savedImages: SavedImagesReducer,
  },
});

export default store;
