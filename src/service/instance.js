import axios from "axios";
import { BASE_URL } from "./urls";

const Client = axios.create({
  baseURL: BASE_URL,
  headers: {
    "x-rapidapi-key": "c7ad3a1f0dmsh93d1a5f5f25a157p167b37jsn96949fa914e8",
    "x-rapidapi-host": "pinterest-video-and-image-downloader.p.rapidapi.com",
    "Content-Type": "application/json",
    accept: "application/json",
  },
});

export default Client;
