import { configureStore } from "@reduxjs/toolkit";
import { characterReducer } from "./slice";

export const store = configureStore({
  reducer: {
    characters: characterReducer,
  },
});
