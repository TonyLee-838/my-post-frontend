import http from "./http";

const API_ENDPOINT = "/pieces";

export type PieceType = {
  id: string;
  title: string;
  markdown: string;
  timeCreated: number;
};

export const getPieces = async (): Promise<PieceType[]> => {
  const pieces = await http.get(API_ENDPOINT);
  return pieces.data;
};

export const getPieceById = async (id: string): Promise<PieceType> => {
  const piece = await http.get(`${API_ENDPOINT}/${id}`);
  console.log(piece.data);
  return piece.data[0];
};
