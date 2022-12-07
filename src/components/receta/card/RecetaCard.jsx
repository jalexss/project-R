import { Card, Divider, Grid } from "@mui/material";

import {
  RecetaHeader,
  RecetaMedia,
  RecetaContent,
  RecetaAction,
} from "./receta";

export const RecetaCard = ({ receta }) => {
  console.log("la receta aqui", receta);
  const { id, description, images, title, usuario } = receta;
  console.log(usuario);

  return (
    <Grid item sx={{ mb: 2 }}>
      <Card sx={{ width: "425px" }}>
        <RecetaHeader user={usuario} title={title} />
        {!!images ? (
          <Divider variant="middle" />
        ) : (
          <>
            <Divider variant="middle" />
            <RecetaMedia images={images} user={usuario} />
          </>
        )}

        <RecetaContent description={description} id={id} user={usuario} />

        <Divider variant="middle" />

        <RecetaAction />
      </Card>
    </Grid>
  );
};
