import { Grid, Rating, Typography } from "@mui/material"


export const RecetaQualification = () => {
  return (
    <Grid 
      id="calificacion"
      item
    >
      {/* TODO : hacer que funcione */}
      <Typography>
        let your qualification
      </Typography>
      <Rating name="rating" value={1}  />
    </Grid>
  )
}

