import { useEffect } from "react";
import { Grid } from "@mui/material";

import { RecetaCard, RecetaFilters } from "../../components";
import { useRecetaStore } from "../../hooks";
import { RecetaLayout } from "../../layouts";

//import { recetas } from "../../helpers/recetaTest";

export const RecetaListPage = () => {
  const { recetas, startLoadingRecetas } = useRecetaStore();

  // console.log("recetas en recetaList", recetas);

  useEffect(() => {
    startLoadingRecetas();
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
            <RecetaCard key={receta.id} receta={receta} />
          ))
        }
      </Grid>
    </RecetaLayout>
  );
};
