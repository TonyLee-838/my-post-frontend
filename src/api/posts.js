import http from "./http";

const API_ENDPOINT = "/posts";

export const getPosts = async () => {
  const posts = await http.get(API_ENDPOINT);
  return posts.data;
};

export const getPostById = async (id) => {
  const post = await http.get(`${API_ENDPOINT}/${id}`);
  return post;
};
