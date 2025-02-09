import axios from "axios";

const api = axios.create({
  baseURL: "https://backend-rewear-production.up.railway.app",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
