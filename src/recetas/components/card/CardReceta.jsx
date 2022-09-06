import { Link as RouterLink } from "react-router-dom"
import { 
    Typography,
    Card, 
    CardHeader, 
    Avatar, 
    IconButton, 
    CardMedia, 
    CardContent,
    CardActions,
    Link,
    Divider,
    Grid,
    Button,
} from "@mui/material";
import { blue, red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import imgNotAvailable from '../../../localstorage/imgNotAvailable.jpg';


export const CardReceta = ({ receta }) => {

    //console.log(receta)

    const {
        id, 
        description, 
        images,
        title, 
        user, 
    } = receta;

    const usernameFirtsChar = user.username.charAt(0);
    
    return (
      <Grid item sx={{ mb:2 }} >
        <Card sx={{ width: '425px'}}>
            <CardHeader
                avatar={
                    <Avatar 
                        sx={{ bgcolor: red[500] }} 
                        aria-label="recipe"
                        alt={user.username}
                        src={user.avatar}
                    >
                        { usernameFirtsChar }
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title={ 
                    <Typography variant="titleRecetaCard">
                        {title}
                    </Typography> }
                subheader={
                    <Link 
                        underline="hover" 
                        variant="subtitle1" 
                        color="secondary.dark"
                        href="/#"
                    >
                        Created by {user.username}.
                    </Link>
                }
            />
            <Divider  variant="middle" />
            <CardMedia
                component="img"
                height="194"
                image={ images[0] || imgNotAvailable }
                alt={user.username}
            />

            <CardContent>
                <Typography sx={{ mb: 1 }} variant="body2" color="text.secondary">
                    {description}
                </Typography>
                <Link 
                    component={ RouterLink }
                    to={`/receta/${id}`} 
                    color="#37474f" 
                    underline="hover" 
                    sx={{ mt: 2 }}
                >
                    View details...
                </Link>
            </CardContent>
            <Divider  variant="middle" />
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
        </Card>
      </Grid>
        
    )
}
