import { configureStore } from "@reduxjs/toolkit";
import charactersReducer from "./config";

export const store = configureStore({
  reducer: {
    characters: charactersReducer,
  },
});
