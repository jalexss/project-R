import { createApi } from "@reduxjs/toolkit/query/react";
import baseQuery from "./baseQuery";

export const recetaApi = createApi({
  reducerPath: "recetas",

  baseQuery,

  endpoints: (builder) => ({
    myRecetas: builder.query({
      query: () => "/recetas/myRecetas",
    }),
    getRecetas: builder.query({
      query: () => "/recetas/",
    }),
    getRecetaById: builder.query({
      query: (recetaId) => `/recetas/${recetaId}`,
    }),
    getRecetasByUserId: builder.query({
      query: (userId) => `/recetas/user/${userId}`,
    }),
    createReceta: builder.mutation({
      query: ({ description, ingredients, instruction, minutes, title }) => ({
        url: "/recetas/create",
        method: "POST",
        body: { description, ingredients, instruction, minutes, title },
        timeout: 5000, // tiempo de espera de 5 segundos
      }),
    }),
  }),
});

export const {
  useMyRecetasQuery,
  useGetRecetasQuery,
  useGetRecetaByIdQuery,
  userGetRecetasByUserId,
  useCreateRecetaMutation,
} = recetaApi;
