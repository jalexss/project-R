import { Grid, ImageList, ImageListItem } from "@mui/material"


export const FormRecetaImages = ({ selectedFile }) => {
  return (
    <Grid >
      {
        selectedFile 
        && <ImageList rowHeight={200} cols={3} gap={4} sx={{ 
          width: "auto", 
          height: 280,
        }} > 
          {
            selectedFile && [...selectedFile ].map((file)=>(
              <ImageListItem 
                 
                key={file.name} 
              >
                <img
                  src={ URL.createObjectURL(file) }
                  alt='Receta Images'
                />
              </ImageListItem> 
            ))
          }
        </ImageList> 
      }
    </Grid>
  )
}

