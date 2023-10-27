import axios, { AxiosResponse } from "axios";
import { Character } from "../pages/HomePage";

const instance = axios.create({
  baseURL: "https://rickandmortyapi.com/api",
});

export interface CharacterApiResponse {
  results: Character[];
}
export const getCharacters = async (): Promise<
  AxiosResponse<CharacterApiResponse>
> => {
  const response = await instance.get<CharacterApiResponse>("/character");
  return response;
};

export const getCharacterDetails = async (
  id: number
): Promise<AxiosResponse> => {
  const { data } = await instance.get(`/character/${id}`);
  return data;
};
