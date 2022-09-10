import { useMemo } from "react";
import { Navigate, useParams } from "react-router-dom";
import { Grid } from "@mui/material"
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
import { getReceta } from "../../helpers";

export const RecetaPage = () => {

  const {username, recetaId} = useParams();

  const receta = useMemo(()=> getReceta(recetaId, username), [ recetaId ]); //se disparara cuando el id cambie

  if(!receta) {
    return <Navigate to="/" />
  }

  const {
    date,
    description,
    images,
    ingredients,
    instruction,
    lastUpdated,
    time,
    title,
    stars, 
    user,
  } = receta


  return (
    <RecetaLayout>

      <BackToHomeButton />
      
      <Grid 
        alignItems="center" 
        flexDirection="column"
        sx={{
          display: 'flex',
          my: 1,
          py: 1,
          px: 2, 
          backgroundColor: grey[50],
          borderRadius: '5px',
          boxShadow: 1,
        }}
      >
        <RecetaTitle title={title} />
        
        <RecetaDetails 
          username={user.username} 
          avatar={user.avatar} 
          time={time} 
          lastUpdated={lastUpdated}
          stars={stars}
          date={date}
        />

        <RecetaInformation 
          description={description} 
          instruction={instruction} 
          ingredients={ingredients}  
        />

        {
          images && <RecetaMedia images={images} />
        }
      
        <RecetaQualification />

        <RecetaComments />
        
      </Grid>
    </RecetaLayout>
  )
}

