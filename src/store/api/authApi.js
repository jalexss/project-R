import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authUser",

  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_API_URL}/auth`,
  }),

  prepareHeaders: (headers, { getState }) => {
    // By default, if we have a token in the store, let's use that for authenticated requests
    const { token } = getState().auth;
    console.log("toke header", token);
    if (token) {
      headers.set("x-token", token);
    }
    // const token = localStorage.get(token);
    // if (token) {
    //   headers.set("x-token", token);
    // }
    return headers;
  },

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
    // getDataUser: builder.query({
    //   query: () => ({ url: `/user` }),
    // }),
    getDataUser: builder.mutation({
      query: () => ({
        url: "/user",
        method: "GET",
        // timeout: 5000, // tiempo de espera de 5 segundos
      }),
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation, useGetDataUserMutation } =
  authApi;
