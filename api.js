import axios from "axios";

const BASE_URL = "https://airbnc-project.onrender.com/api/";

export const getProperties = async (filters = {}) => {
    const params = {};

if (filters.minprice) params.minprice =filters.minprice;
if (filters.maxprice) params.maxprice =filters.maxprice;
if (filters.property_type) params.property_type =filters.property_type;

const { data } = await axios.get(`${BASE_URL}properties`, { params });

return data.properties;
};
