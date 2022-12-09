import { useMemo, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
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
import { projectRApi } from "../../api";

export const RecetaPage = () => {
  const { recetaId } = useParams();
  const [isLoadingReceta, setIsLoadingReceta] = useState(true);
  const [receta, setReceta] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    //startFindRecetaById(recetaId);
    let ignore = false;

    projectRApi
      .get(`/recetas/${recetaId}`)
      .then(({ data: { receta } }) => {
        if (ignore) {
          return;
        }

        setReceta(receta);
        setIsLoadingReceta(false);
      })
      .catch((error) => {
        console.log(error);
        //TODO CAMBIAR POR 404 COMPONENT sin replace
        navigate("/", { replace: true });
      });

    return () => (ignore = true);
  }, [recetaId]);

  return (
    <RecetaLayout>
      <BackToHomeButton />

      {isLoadingReceta && <h3>cargando...</h3>}

      {!isLoadingReceta && (
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
      )}
    </RecetaLayout>
  );
};
