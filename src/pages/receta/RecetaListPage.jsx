import { Grid } from "@mui/material";

import { RecetaCard, RecetaFilters } from "../../components";
import { RecetaLayout } from "../../layouts";

import { recetas } from "../../helpers/recetaTest";

export const RecetaListPage = () => {


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
        { //Grid items -> Cards
          recetas.map( receta => (
            <RecetaCard  key={ receta.id }  receta = { receta }  /> 
          ))
        }
      </Grid>

    </RecetaLayout>
  )
}

