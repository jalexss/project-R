import { Avatar } from "@mui/material";
import { red } from "@mui/material/colors";


export const HeaderAvatar = ({user}) => {

  const usernameFirtsChar = user.username.charAt(0);

  return (
    <Avatar 
      sx={{ bgcolor: red[500] }} 
      aria-label="recipe"
      alt={user.username}
      src={user.avatar}
    >
      { usernameFirtsChar }
    </Avatar>
  )
}

