import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./";
import { authApi, recetaApi } from "./api";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [recetaApi.reducerPath]: recetaApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(authApi.middleware, recetaApi.middleware),
});
