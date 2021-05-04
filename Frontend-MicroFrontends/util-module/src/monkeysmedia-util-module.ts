import axios, { Canceler } from "axios";
import { navigateToUrl, getMountedApps } from "single-spa";

export function getCookie(name: string) {
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

export const baseUrl = "http://localhost:8000/";

const api = axios.create({ baseURL: baseUrl });

const getToken = () => {
  let token = localStorage.getItem("auth");
  return JSON.parse(token).token;
};

export const apiGet = (url: string, noToken?: boolean) => {
  if (!noToken) {
    let token = getToken();

    let headerConf = {
      Authorization: `Token ${token}`,
    };

    return api.get(url, {
      headers: headerConf,
    });
  }
  return api.get(url);
};

export const apiPost = (url: string, data: any, noToken?: boolean) => {
  if (!noToken) {
    let token = getToken();

    return api.post(url, data, {
      headers: { Authorization: `Token ${token}` },
    });
  }
  return api.post(url, data);
};

export const apiPostRegister = (url: string, data: any, headers: any) => {
  return api.post(url, data, headers);
};

export const getUsernamePropsUrl = () => {
  let username = window.location.pathname.split("/");
  if (username[username.length - 1] === "") {
    return username[username.length - 2];
  }
  return username[username.length - 1];
};

export const RedirectTo = (url: string) => {
  navigateToUrl(url);
};
