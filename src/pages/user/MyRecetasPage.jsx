// import { MyRecetaCard } from "../../components";
// import { MyRecetaCard } from "../../components";
import { Grid } from "@mui/material";
import { RecetaCard } from "../../components";
import { MyRecetaCard } from "../../components/user/myRecetas/card/MyRecetaCard";
import { RecetaLayout } from "../../layouts";
import { useMyRecetasQuery } from "../../store/api";

export const MyRecetasPage = () => {
  const { data, isLoading, isError } = useMyRecetasQuery();

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
      <Grid container spacing={4}>
        {data.map((receta) => (
          <RecetaCard key={receta._id} receta={receta} />
        ))}
      </Grid>
    </RecetaLayout>
  );
};
