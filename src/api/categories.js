import http from "./http";

const API_ENDPOINT = "/categories";

export const getCategories = async () => {
  const categories = await http.get(API_ENDPOINT);
  return categories;
};
