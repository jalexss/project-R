import { createApi } from "@reduxjs/toolkit/query/react";
import baseQuery from "./baseQuery";

export const recetaApi = createApi({
  reducerPath: "recetas",

  baseQuery,

  endpoints: (builder) => ({
    getRecetas: builder.query({
      query: () => "/recetas/",
    }),
    getRecetaById: builder.query({
      query: (recetaId) => `/recetas/${recetaId}`,
    }),
    createReceta: builder.mutation({
      query: ({ description, ingredients, instruction, minutes, title }) => ({
        url: "/recetas/create",
        method: "POST",
        body: { description, ingredients, instruction, minutes, title },
        timeout: 5000, // tiempo de espera de 5 segundos
      }),
    }),
    // getDataUser: builder.mutation({
    //   query: () => ({
    //     url: "/user",
    //     method: "GET",
    //   }),
    // }),
  }),
});

export const {
  useGetRecetasQuery,
  useGetRecetaByIdQuery,
  useCreateRecetaMutation,
} = recetaApi;
