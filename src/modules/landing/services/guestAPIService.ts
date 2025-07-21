import axios, { AxiosError } from "axios";

// Constants
const BASE_URL = import.meta.env.VITE_API_URL;

// Axios instance
const apiClient = axios.create({
  baseURL: `${BASE_URL}`,
});

// Request interceptor
apiClient.interceptors.request.use(
  async (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// Response interceptor
apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    return Promise.reject(error);
  },
);

// ApiService
export const guestApiService = {
  get: async (endpoint: string) => {
    try {
      const { data } = await apiClient.get(endpoint);
      return [null, data];
    } catch (error) {
      return [error as AxiosError];
    }
  },
  post: async (
    endpoint: string,
    body: unknown,
    responseType?: "json" | "blob" | "arraybuffer" | "text",
  ) => {
    try {
      const config = responseType ? { responseType } : {};
      const { data } = await apiClient.post(endpoint, body, config);
      return [null, data];
    } catch (error) {
      return [error as AxiosError];
    }
  },
  put: async (endpoint: string, body: unknown) => {
    try {
      const { data } = await apiClient.put(endpoint, body);
      return [null, data];
    } catch (error) {
      return [error as AxiosError];
    }
  },
};
