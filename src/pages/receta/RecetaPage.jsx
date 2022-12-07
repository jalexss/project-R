import { useMemo, useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";
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
import { useRecetaStore } from "../../hooks";

export const RecetaPage = () => {
  const { recetaId } = useParams();
  const { activeReceta, startFindRecetaById } = useRecetaStore();

  const receta = activeReceta;

  useEffect(() => {
    startFindRecetaById(recetaId);
  }, []);

  if (!receta) {
    //TODO CAMBIAR POR ISLOADING
    return <Navigate to="/" />;
  }
  console.log("receta here ->", receta);
  const {
    createdAt,
    description,
    images,
    ingredients,
    instruction,
    updatedAt,
    minutes,
    title,
    stars = 30,
    usuario,
  } = receta;

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
        <RecetaTitle title={title} />

        <RecetaDetails
          username={usuario.username}
          avatar={usuario.avatar}
          time={minutes}
          lastUpdated={updatedAt}
          stars={stars}
          date={createdAt}
        />

        <RecetaInformation
          description={description}
          instruction={instruction}
          ingredients={ingredients}
        />

        {images > 0 && <RecetaMedia images={images} />}

        <RecetaQualification />

        <RecetaComments />
      </Grid>
    </RecetaLayout>
  );
};
