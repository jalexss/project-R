import { Card, Divider, Grid } from "@mui/material";

import {
  RecetaHeader,
  RecetaMedia,
  RecetaContent,
  RecetaAction,
} from "./receta";

export const RecetaCard = ({ receta }) => {
  const { _id, description, images, title, usuario } = receta;

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

        <RecetaContent description={description} _id={_id} />

        <Divider variant="middle" />

        <RecetaAction />
      </Card>
    </Grid>
  );
};
