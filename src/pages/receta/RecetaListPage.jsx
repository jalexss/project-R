import { Grid } from "@mui/material";

import { RecetaCard, RecetaFilters } from "../../components";
import { RecetaLayout } from "../../layouts";
import { useGetRecetasQuery } from "../../store/api";

export const RecetaListPage = () => {
  const { data, isLoading, isError } = useGetRecetasQuery();

  if (isError) {
    return (
      <RecetaLayout>
        <h3>Recetas load failed!</h3>
      </RecetaLayout>
    );
  }

  if (isLoading) {
    return (
      <RecetaLayout>
        <h3>loading... recetas</h3>
      </RecetaLayout>
    );
  }

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
          data.recetas?.map((receta) => (
            <RecetaCard key={receta._id} receta={receta} />
          ))
        }
      </Grid>
    </RecetaLayout>
  );
};
