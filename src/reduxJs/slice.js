import { createSlice } from "@reduxjs/toolkit";
import { fetchAllCharacters, fetchCharacter } from "./actions";

const charactersSlice = createSlice({
  name: "characters",
  initialState: {
    characters: {
      data: [],
      loading: "idle",
      error: null,
    },
    character: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllCharacters.pending, (state) => {
        state.characters.loading = "pending";
        state.characters.error = null;
      })
      .addCase(fetchAllCharacters.fulfilled, (state, action) => {
        state.characters.loading = "fulfilled";
        state.characters.data = action.payload;
        console.log("dhdhdgdghd", state.characters.data);
      })
      .addCase(fetchAllCharacters.rejected, (state, action) => {
        state.characters.loading = "rejected";
        state.characters.error = action.error.message;
      })
      .addCase(fetchCharacter.pending, (state) => {
        state.character = null;
        state.characters.loading = "pending";
        state.characters.error = null;
      })
      .addCase(fetchCharacter.fulfilled, (state, action) => {
        state.character = action.payload;
        state.characters.loading = "fulfilled";
      })
      .addCase(fetchCharacter.rejected, (state, action) => {
        state.characters.loading = "rejected";
        state.characters.error = action.error.message;
      });
  },
});

export default charactersSlice.reducer;
