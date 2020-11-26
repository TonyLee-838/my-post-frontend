import http from "./http";

const API_ENDPOINT = "/pieces";

export type PieceReceiveType = {
  _id: string;
  title: string;
  content: string;
  timeCreated: number;
};

export type PieceSendOutType = {
  title: string;
  content: string;
  userId: string;
};

export const getPieces = async (): Promise<PieceReceiveType[]> => {
  const pieces = await http.get(API_ENDPOINT);
  return pieces.data;
};

export const getPieceById = async (id: string): Promise<PieceReceiveType> => {
  const piece = await http.get(`${API_ENDPOINT}/${id}`);
  console.log(piece.data);
  return piece.data[0];
};

export const postPiece = async (piece: PieceSendOutType, token: string) => {
  return http.post(API_ENDPOINT, piece, {
    headers: {
      "x-auth-token": token,
    },
  });
};
