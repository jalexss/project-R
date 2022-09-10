import { Button, CardActions } from "@mui/material"
import { blue, red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';

export const RecetaAction = () => {
  return (
    <CardActions spacing={0} sx={{ justifyContent: 'space-between'}} >      
      <Button 
        startIcon={<FavoriteIcon sx={{ color: red[400] }} />}
        color="secondary"
        aria-label="add to favorites"
      >
        Add to favorite
      </Button>
  
      <Button 
        startIcon={<ShareIcon sx={{ color: blue[800] }} />} 
        color="secondary"
        aria-label="share it"
      >
        Share it!
      </Button>            
    </CardActions>
  )
}

