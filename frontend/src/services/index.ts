import axios from "axios";

function getCookie(name: string) {
  let cookieValue = null;
  if (document.cookie && document.cookie !== "") {
    const cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      // Does this cookie string begin with the name we want?
      if (cookie.substring(0, name.length + 1) === name + "=") {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
}

export const csrftoken = getCookie("csrftoken");

// axios.defaults.xsrfCookieName = "csrftoken";
// axios.defaults.xsrfHeaderName = "X-CSRFToken";

const api = axios.create({
  baseURL: "http://localhost:8000/",
  headers: {
    // "X-CSRFToken": csrftoken,
    // "X-Requested-With": "XMLHttpRequest",
    "Content-Type": "application/json"
  },
});

export default api;
