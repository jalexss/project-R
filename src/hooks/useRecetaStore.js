import { useDispatch, useSelector } from "react-redux";
import { projectRApi } from "../api";
import { onLoadRecetas, onSetActiveReceta } from "../store";

export const useRecetaStore = () => {
  const dispatch = useDispatch();
  const { recetas, activeReceta } = useSelector((state) => state.recetas);

  //TODO: CAMBIAR POR UNA PAGINACION
  const startLoadingRecetas = async () => {
    try {
      const { data } = await projectRApi.get("/recetas");
      console.log(data);
      dispatch(onLoadRecetas(data.recetas));
    } catch (error) {
      console.log(error);
    }
  };

  const startFindRecetaById = async (recetaId) => {
    try {
      const { data } = await projectRApi.get(`/recetas/${recetaId}`);
      dispatch(onSetActiveReceta(data.receta));
      return data.receta;
    } catch (error) {
      console.log(error);
    }
  };

  // const setActiveReceta = ( calendarEvent ) => {
  //   dispatch( onSetActiveReceta( calendarEvent ) )
  // }

  return {
    //property
    activeReceta,
    recetas,

    //methods
    startLoadingRecetas,
    startFindRecetaById,
  };
};
