import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    status: "checking", // 'authenticated, 'not-authenticated'
    user: {},
    token: null,
  },
  reducers: {
    onChecking: (state) => {
      state.status = "checking";
      state.user = {};
      state.errorMessage = undefined;
    },
    onLogin: (state, { payload }) => {
      state.status = "authenticated";
      state.user = payload;
      state.errorMessage = undefined;
      state.token = payload.token;
    },
    onLogout: (state, { payload }) => {
      state.status = "not-authenticated";
      state.user = {};
      state.errorMessage = payload;
      state.token = null;
    },
    clearErrorMessage: (state) => {
      state.errorMessage = undefined;
    },
    authethicated: (state, { payload }) => {
      state.status = "authenthicated";
      state.token = payload;
    },
  },
});

export const {
  onChecking,
  onLogin,
  onLogout,
  clearErrorMessage,
  authethicated,
} = authSlice.actions;
