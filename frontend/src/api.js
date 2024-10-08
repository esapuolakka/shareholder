import axios from "axios";

const api = axios.create({
  baseURL: "/api",
  timeout: 10000,
  headers: {
    'Authorization': `Bearer ${import.meta.env.VITE_API_KEY}`,
  },
});

export default api;
