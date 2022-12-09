import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Grid } from "@mui/material";

import { RecetaCard, RecetaFilters } from "../../components";
import { RecetaLayout } from "../../layouts";
import { projectRApi } from "../../api";

export const RecetaListPage = () => {
  const navigate = useNavigate();
  const [recetas, setRecetas] = useState([]);
  const [isLoadingReceta, setIsLoadingReceta] = useState(true);

  useEffect(() => {
    let ignore = false;

    projectRApi
      .get(`/recetas`)
      .then(({ data: { recetas } }) => {
        if (ignore) {
          return;
        }

        setRecetas(recetas);
        setIsLoadingReceta(false);
      })
      .catch((error) => {
        console.log(error);
        //TODO CAMBIAR POR eror al cargar las recetas! sin replace
        //o por un useState que si aqui hay error, manda un valor booleano para cambiar de componentes
        // entre el ques e muestra las recetasCard y uno que diga error con boton de recarga
        navigate("/", { replace: true });
      });

    return () => (ignore = true);
  }, []);

  return (
    <RecetaLayout>
      <RecetaFilters />

      <Grid
        container
        columns={1}
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{
          my: 4,
        }}
      >
        {
          //Grid items -> Cards
          recetas.map((receta) => (
            <RecetaCard key={receta._id} receta={receta} />
          ))
        }
      </Grid>
    </RecetaLayout>
  );
};
