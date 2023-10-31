import { createSlice } from "@reduxjs/toolkit";
import { fetchAllCharacters, fetchCharacter } from "./actions";

const charactersSlice = createSlice({
  name: "characters",
  initialState: {
    charactersArray: [],
    character: null,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllCharacters.pending, (state) => {
        state.error = null;
      })
      .addCase(fetchAllCharacters.fulfilled, (state, action) => {
        state.charactersArray = action.payload;

        state.error = null;
      })
      .addCase(fetchAllCharacters.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(fetchCharacter.pending, (state) => {
        state.character = null;
        state.error = null;
      })
      .addCase(fetchCharacter.fulfilled, (state, action) => {
        console.log(action.payload, "action");
        state.character = action.payload;
      })
      .addCase(fetchCharacter.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export const characterReducer = charactersSlice.reducer;
