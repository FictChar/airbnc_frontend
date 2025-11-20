import axios from "axios";

const BASE_URL = "https://airbnc-project.onrender.com/api/";

export const getProperties = async () => {
  const { data } = await axios.get(`${BASE_URL}properties`);
  return data.properties;
};
