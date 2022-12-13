import { createApi } from "@reduxjs/toolkit/query/react";
import baseQuery from "./baseQuery";

export const authApi = createApi({
  reducerPath: "authUser",

  baseQuery,

  endpoints: (builder) => ({
    login: builder.mutation({
      query: ({ username, password }) => ({
        url: "/",
        method: "POST",
        body: { username, password },
        timeout: 5000, // tiempo de espera de 5 segundos
      }),
    }),
    register: builder.mutation({
      query: ({ email, username, password }) => ({
        url: "/new",
        method: "POST",
        body: { email, username, password },
        timeout: 5000, // tiempo de espera de 5 segundos
      }),
    }),
    getDataUser: builder.mutation({
      query: () => ({
        url: "/user",
        method: "GET",
      }),
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation, useGetDataUserMutation } =
  authApi;
