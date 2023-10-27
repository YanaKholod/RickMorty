import axios, { AxiosResponse } from "axios";

const instance = axios.create({
  baseURL: "https://rickandmortyapi.com/api",
});

export const getCharacters = async (): Promise<AxiosResponse> => {
  const { data } = await instance.get("/character");
  return data;
};

export const getCharacterDetails = async (
  id: number
): Promise<AxiosResponse> => {
  const { data } = await instance.get(`/character/${id}`);
  return data;
};
