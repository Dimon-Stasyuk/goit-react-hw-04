import axios from "axios";

const UNSPLASH_KEY = "3Z46zA_fFEEfN3vaQErd4ajs7Wjc-SM06fdDR5AbjEg";
const BASE_URL = "https://api.unsplash.com";

export const getPhotos = async (query = "react", page = 1) => {
  const { data } = await axios.get(`${BASE_URL}/search/photos`, {
    params: {
      client_id: UNSPLASH_KEY,
      query: query,
      page: page,
    },
  });
  return data;
};
