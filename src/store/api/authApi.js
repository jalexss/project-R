import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authUser",

  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_API_URL}/auth`,
  }),

  prepareHeaders: (headers, { getState }) => {
    // By default, if we have a token in the store, let's use that for authenticated requests
    const {
      user: { token },
    } = getState().auth;
    if (token) {
      headers.set("x-token", token);
    }
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
  }),
});

export const { useLoginMutation } = authApi;
