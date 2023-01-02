import { useParams } from "react-router-dom";
import { Grid } from "@mui/material";
import { grey } from "@mui/material/colors";

import { RecetaLayout } from "../../layouts";
import {
  BackToHomeButton,
  RecetaComments,
  RecetaDetails,
  RecetaInformation,
  RecetaMedia,
  RecetaQualification,
  RecetaTitle,
} from "../../components";
import { useGetRecetaByIdQuery } from "../../store/api";

export const RecetaPage = () => {
  const { recetaId } = useParams();
  const {
    data: receta,
    isLoading,
    isError,
  } = useGetRecetaByIdQuery(recetaId, {
    refetchOnMountOrArgChange: true,
  });

  if (isError) {
    return (
      <RecetaLayout>
        <h3>Error: recetas load failed!</h3>
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
      <BackToHomeButton />
      <Grid
        alignItems="center"
        flexDirection="column"
        sx={{
          display: "flex",
          my: 1,
          py: 1,
          px: 2,
          backgroundColor: grey[50],
          borderRadius: "5px",
          boxShadow: 1,
        }}
      >
        <RecetaTitle title={receta.title} />

        <RecetaDetails
          usuario={receta.usuario}
          minutes={receta.minutes}
          updatedAt={receta.updatedAt}
          stars={receta.stars}
          createdAt={receta.createdAt}
        />

        <RecetaInformation
          description={receta.description}
          instruction={receta.instruction}
          ingredients={receta.ingredients}
        />

        {receta.images?.length > 0 && <RecetaMedia images={receta.images} />}

        <RecetaQualification />

        <RecetaComments />
      </Grid>
    </RecetaLayout>
  );
};
