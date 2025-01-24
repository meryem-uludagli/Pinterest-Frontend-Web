import { configureStore } from "@reduxjs/toolkit";
import pintReducer from "./slices/PintSlice";

const store = configureStore({
  reducer: {
    pinterest: pintReducer,
  },
});

export default store;
