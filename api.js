import axios from "axios";

const BASE_URL = "https://airbnc-project.onrender.com/api/";

export function getProperties(filters = {}) {
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

  return axios
    .get(`${BASE_URL}properties`, { params })
    .then((res) => res.data.properties);
}

export function getPropertyById(id) {
  return axios
    .get(`${BASE_URL}properties/${id}`)
    .then((res) => res.data.property);
}

