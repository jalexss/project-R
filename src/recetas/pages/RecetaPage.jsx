import { useMemo, /* useState */ } from "react";
import { Navigate, useParams } from "react-router-dom";
import { Divider, Grid, Stack } from "@mui/material"
import { grey } from "@mui/material/colors";

import { RecetaLayout } from "../layout/RecetaLayout"
import { getRecetaById } from "../../helpers";
import { 
  RecetaDetails, 
  RecetaTitle, 
  RecetaQualification,
  RecetaComments,
  RecetaMedia,
  RecetaInformation,
  BackToHomeButton, 
} from "../components";

export const RecetaPage = () => {

  const {id : recetaId } = useParams();
  //console.log(id)

  const receta = useMemo(()=> getRecetaById(recetaId), [ recetaId ]); //se disparara cuando el id cambie
  //console.log(receta.title.length);

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
    user: { username, avatar }
  } = receta

  if(!receta) {
    return <Navigate to="/" />
  }

  //const [starsRate, setStarsRate] = useState(stars);
  //const onChangeRate = TODO///

  return (
    <RecetaLayout>

      <BackToHomeButton />

      <Grid 
        id="este es el container" 
        container
        alignItems="center" 
        flexDirection="column"
        sx={{
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
          username={username} 
          avatar={avatar} 
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

        <RecetaMedia images={images} />

        <RecetaQualification />

        <RecetaComments />
        
      </Grid>
    </RecetaLayout>
  )
}

