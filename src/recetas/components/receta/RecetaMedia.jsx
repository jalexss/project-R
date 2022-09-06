import { Grid, ImageList, ImageListItem, Typography } from "@mui/material"
import { red } from "@mui/material/colors";

import imgNotAvailable from '../../../localstorage/imgNotAvailable.jpg';


export const RecetaMedia = ({ images }) => {
  return (
    <Grid 
      sx={{ 
        backgroundColor: red[100],
        display: 'flex', 
      }}
    >
      <ImageList sx={{ width: 700, height: 500 }} cols={3} rowHeight={259} >
      {images.map((image, index) => { return (
        <ImageListItem key={index}>
          <img
            src={image.length < 1 ? imgNotAvailable : image }
            alt={image}
            loading="lazy"
          />
        </ImageListItem>
      )})}
      </ImageList>
    </Grid>
  )
}

