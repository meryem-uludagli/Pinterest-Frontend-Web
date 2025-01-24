import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchPinterestData } from "../services/verbs";

export const fetchPins = createAsyncThunk(
  "pinterest/fetchPins",
  async (pinterestUrl, { rejectWithValue }) => {
    try {
      const data = await fetchPinterestData(pinterestUrl);
      return data;
    } catch (error) {
      console.error("Error fetching pins:", error);
      return rejectWithValue(error.response?.data || "Something went wrong");
    }
  }
);
