import http from "./httpServices";
import { apiUrl } from "../Config.json";

const endPoint = apiUrl + "/login";

export const login = (login, pass) => {
  return http.post(endPoint, { login, pass });
};

export const checkLogin = (login, pass) => {
  return http.post(endPoint, { login, pass });
};
