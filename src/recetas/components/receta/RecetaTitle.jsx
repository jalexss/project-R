import { Grid, Typography } from "@mui/material"


export const RecetaTitle = ({ title }) => {
  return (
    <Grid 
      id="titulo"  
      item
      align="justify"
    >
      <Typography variant="titleReceta">
        {title}
      </Typography>
    </Grid>
  )
}
