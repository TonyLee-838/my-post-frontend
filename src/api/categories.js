import http from "./http";

const API_ENDPOINT = "/categories";

export const getCategories = async () => {
  const response = await http.get(API_ENDPOINT);
  return response.data;
};
