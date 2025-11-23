import axios from "axios";

const BASE_URL = "https://airbnc-project.onrender.com/api/";

export const getProperties = async (filters = {}) => {
  const params = {};

  if (filters.minPrice) params.minprice = filters.minPrice;

  if (filters.maxPrice) params.maxprice = filters.maxPrice;

  if (filters.sort === "minPriceAsc") {
    params.sort_by = "price";
    params.order = "asc";
  }

  if (filters.sort === "maxPriceDesc") {
    params.sort_by = "price";
    params.order = "desc";
  }

  const { data } = await axios.get(`${BASE_URL}properties`, { params });
  return data.properties;
};
