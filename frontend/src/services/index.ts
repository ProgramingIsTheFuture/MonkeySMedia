import axios from "axios";

const baseURL = "http://api.themonkeysmedia.com:8000"; // process.env.REACT_APP_BACKEND_URL

const api = axios.create({
  baseURL: `${baseURL}/`,
});

export default api;
