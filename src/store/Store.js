import { configureStore } from "@reduxjs/toolkit";
import pintReducer from "../store/slice/PintSlice";

const store = configureStore({
  reducer: {
    pinterest: pintReducer,
  },
});

export default store;
