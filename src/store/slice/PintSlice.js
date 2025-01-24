import { createSlice } from "@reduxjs/toolkit";
import { fetchPins } from "../actions/PintAction";

const initialState = {
  pins: [],
  loading: false,
  error: null,
};

const pintSlice = createSlice({
  name: "pinterest",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(fetchPins.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(fetchPins.fulfilled, (state, action) => {
        state.loading = false;
        state.pins = action.payload;
      })

      .addCase(fetchPins.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default pintSlice.reducer;
