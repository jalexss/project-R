import { Grid } from "@mui/material";

import { RecetaCard } from "../components"
import { RecetaLayout } from "../layout/RecetaLayout";
import { recetas } from "../../helpers/recetaTest";
import { RecetaFilters } from "../components/filter"
//console.log(recetas);

export const RecetaList = () => {

  return (
    <RecetaLayout>
     
      <RecetaFilters /> 

      <Grid 
        container 
        sx={{ 
          my: 4,
          justifyContent: 'space-between'
        }}
            
      >    
        {
          recetas.map( receta => (
            <RecetaCard  key={ receta.id }  receta = { receta }  /> 
          ))
        }
      </Grid>

    </RecetaLayout>
  )
}

