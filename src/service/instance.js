import axios from "axios";
import { BASE_URL, IMAGES } from "./urls";

const instance = axios.create({
  baseURL: BASE_URL,
});

export const fetchPinterestPosts = async () => {
  try {
    const response = await instance.get(IMAGES);
    return response.data;
  } catch (error) {
    console.error("Error fetching Pinterest posts:", error);
    return [];
  }
};

export default instance;
