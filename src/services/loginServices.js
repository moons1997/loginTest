import http from "./httpServices";
import { apiUrl } from "../Config.json";

const endPoint = apiUrl + "/login";

export const login = (name, password) => {
  return http.post(endPoint, { name, password });
};
