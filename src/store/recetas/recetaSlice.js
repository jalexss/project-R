import { createSlice } from "@reduxjs/toolkit";
import { recetas } from "../../helpers/recetaTest";

export const recetaSlice = createSlice({
  name: "recetas",
  initialState: {
    isLoadingRecetas: true,
    recetas: [],
    activeReceta: null,
  },
  reducers: {
    onSetActiveReceta: (state, { payload }) => {
      state.activeReceta = payload;
    },
    // onAddNewReceta: ( state, { payload }) => {
    //     state.recetas.push( payload );
    //     state.activeReceta = null;
    // },
    // onUpdateReceta: ( state, { payload } ) => {
    //     state.recetas = state.recetas.map( receta => {
    //         if ( receta.id === payload.id ) {
    //             return payload;
    //         }

    //         return receta;
    //     });
    // },
    // onDeleteReceta: ( state ) => {
    //     if ( state.activeReceta ) {
    //         state.recetas = state.recetas.filter( recetas => recetas.id !== state.activeReceta.id );
    //         state.activeReceta = null;
    //     }
    // },
    onLoadRecetas: (state, { payload = [] }) => {
      state.isLoadingRecetas = false;
      state.recetas = payload;
      // payload.forEach((recetas) => {
      //   const exists = state.recetas.some(
      //     (dbReceta) => dbReceta.id === recetas.id
      //   );
      //   if (!exists) {
      //     state.recetas.push(recetas);
      //   }
      // });
    },
    // onLogoutCalendar: ( state ) => {
    //     state.isLoadingRecetas = true,
    //     state.recetas      = []
    //     state.activeReceta = null
    // }
  },
});

// Action creators are generated for each case reducer function
export const {
  // onAddNewReceta,
  // onDeleteReceta,
  onLoadRecetas,
  // onLogoutCalendar,
  //onSetActiveReceta,
  // onUpdateReceta,
} = recetaSlice.actions;
