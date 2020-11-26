import http from "./http";

const API_ENDPOINT = "/posts";

export type PostReceiveType = {
  _id: string;
  title: string;
  content: string;
  timeCreated: number;
  categoryId: string;
  tags: string[];
  description?: string;
};

export type PostSendOutType = {
  title: string;
  content: string;
  userId: string;
  categoryId: string;
  tags: string[];
  description?: string;
};

export const getPosts = async (): Promise<PostReceiveType[]> => {
  const posts = await http.get(API_ENDPOINT);
  return posts.data;
};

export const getPostById = async (id: string): Promise<PostReceiveType> => {
  const post = await http.get(`${API_ENDPOINT}/${id}`);
  return post.data[0];
};

export const postPost = async (post: PostSendOutType, token: string) => {
  return await http.post(API_ENDPOINT, post, {
    headers: {
      "x-auth-token": token,
    },
  });
};
