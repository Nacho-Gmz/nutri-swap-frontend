import axios from "axios";

// Constants
const BASE_URL = import.meta.env.VITE_API_URL;

// Axios instance
const nutriSwapAPI = axios.create({
  baseURL: `${BASE_URL}`,
});

nutriSwapAPI.interceptors.request.use((config) => {
  const token = localStorage.getItem("access-token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export { nutriSwapAPI };
