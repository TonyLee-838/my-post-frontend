import http from "./http";

const URL = "http://localhost:5504/api";
const API_ENDPOINT = "/posts";

export const getPosts = async () => {
  const posts = await http.get(URL + API_ENDPOINT);
  console.log(posts.data);
  return posts.data;
};

export const getPostById = async (id) => {
  const post = await http.get(`${URL}${API_ENDPOINT}/${id}`);
  return post;
};
