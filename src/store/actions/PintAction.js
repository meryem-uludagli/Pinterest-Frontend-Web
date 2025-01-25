import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL, IMAGES } from "../../service/urls";

export const fetchPins = createAsyncThunk(
  "pinterest/fetchPins",
  async (pinterestUrl, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${BASE_URL}${IMAGES}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching pins:", error);
      return rejectWithValue(error.response?.data || "Something went wrong");
    }
  }
);
