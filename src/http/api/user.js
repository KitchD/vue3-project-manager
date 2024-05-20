import http from "../index";

export function login(data) {
  return http.post("/api/login", data);
}
