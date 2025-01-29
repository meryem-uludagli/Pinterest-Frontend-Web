import { createSlice } from "@reduxjs/toolkit";

const SavedImagesSlice = createSlice({
  name: "savedImages",
  initialState: [],
  reducers: {
    addImage: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addImage } = SavedImagesSlice.actions;
export default SavedImagesSlice.reducer;
