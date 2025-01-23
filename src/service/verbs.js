import axios from "axios";

const options = {
  method: "GET",
  url: "https://pinterest-video-and-image-downloader.p.rapidapi.com/pinterest",
  params: {
    url: "https://in.pinterest.com/pin/1095852521805152932/",
  },
  headers: {
    "x-rapidapi-key": "c7ad3a1f0dmsh93d1a5f5f25a157p167b37jsn96949fa914e8",
    "x-rapidapi-host": "pinterest-video-and-image-downloader.p.rapidapi.com",
  },
};

try {
  const response = await axios.request(options);
  console.log(response.data);
} catch (error) {
  console.error(error);
}
