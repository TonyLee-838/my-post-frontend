import { AxiosPromise } from "axios";
import http from "./http";

export const login = (
  email: string,
  password: string
): AxiosPromise<string> => {
  return http.post("/auth", { email, password });
};
