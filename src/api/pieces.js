import http from "./http";

const API_ENDPOINT = "/pieces";

export const getPieces = async () => {
  const pieces = await http.get(API_ENDPOINT);
  return pieces.data;
};

export const getPieceById = async (id) => {
  const piece = await http.get(`${API_ENDPOINT}/${id}`);
  return piece;
};
