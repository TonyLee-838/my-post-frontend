import { AxiosResponse } from "axios";
import http from "./http";

export const login = (
  email: string,
  password: string
): Promise<AxiosResponse> => {
  return http.post("/auth", { email, password });
};
