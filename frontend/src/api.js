import axios from "axios";

const api = axios.create({
  baseURL: `${import.meta.env.VITE_BASE_URL}/api`,
  // baseURL: "http://localhost:8080/api",
  timeout: 10000,
  headers: {
    'Authorization': `Bearer ${import.meta.env.VITE_API_KEY}`,
  },
});

export default api;
