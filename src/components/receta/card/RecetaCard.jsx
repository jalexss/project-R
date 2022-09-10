import { Card, Divider, Grid} from "@mui/material";

import { RecetaHeader, RecetaMedia, RecetaContent, RecetaAction } from "./receta";

export const RecetaCard = ({ receta }) => {

  //console.log(receta)
  const {
      id, 
      description, 
      images,
      title, 
      user, 
  } = receta;

    
  return (
    <Grid item sx={{ mb:2 }} >
      <Card sx={{ width: '425px'}}>
        <RecetaHeader user={user} title={title} />

        <Divider variant="middle" />
        
        {
          (!!images) && <RecetaMedia images={images} user={user} />
        }

        <RecetaContent description={description} id={id} user={user}/>
          
        <Divider variant="middle" />
          
        <RecetaAction /> 
      </Card>
    </Grid>
      
  )
}
