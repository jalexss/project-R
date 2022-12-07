import { configureStore } from "@reduxjs/toolkit";
import { authSlice, recetaSlice } from "./";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    recetas: recetaSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
