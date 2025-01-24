import Client from "./instance";

export const fetchPinterestData = async (pinterestUrl) => {
  try {
    const response = await Client.get("/pinterest", {
      params: { url: pinterestUrl },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching Pinterest data:", error);
    throw error;
  }
};
