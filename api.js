import axios from "axios";

const BASE_URL = "https://airbnc-project.onrender.com/api/";

export function getProperties(filters = {}) {
  const params = {};


  if (filters.minprice) params.minprice = filters.minprice;
  if (filters.maxprice) params.maxprice = filters.maxprice;

  if (filters.sort === "minPriceAsc") {
    params.sort_by = "price";
    params.order = "asc";
  } else if (filters.sort === "maxPriceDesc") {
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

