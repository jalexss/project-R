import { Avatar, CardHeader, IconButton, Link, Typography } from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { red } from '@mui/material/colors';

export const RecetaHeader = ({user, title}) => {

  const usernameFirtsChar = user.username.charAt(0);

  return (
    <>
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
          <Typography variant="titleRecetaCard" align="justify">
            {title}
          </Typography> 
        }
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
    </>
  )
}

