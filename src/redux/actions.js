import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { FETCH_ALL, FETCH_ONE } from "./config";

export const fetchAllCharacters = createAsyncThunk(
  "character/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(FETCH_ALL, {
        params: "",
      });
      return response.data.results;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "An error occurred"
      );
    }
  }
);

export const fetchCharacter = createAsyncThunk(
  "character/fetchOne",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(FETCH_ONE(id));
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "An error occurred"
      );
    }
  }
);
