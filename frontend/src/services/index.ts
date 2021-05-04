import axios from "axios";

const baseURL = process.env.REACT_APP_BACKEND_URL;

const api = axios.create({
  baseURL: `${baseURL}/`,
});

export default api;
