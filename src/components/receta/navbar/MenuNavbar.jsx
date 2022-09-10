import { useState } from "react";

import { Grid, Menu, MenuItem, IconButton, Stack, Typography, Avatar } from "@mui/material";
import { recetas } from "../../../helpers/recetaTest";

export const MenuNavbar = () => {

  //perfil -> receta -> usuario -> nami - (user, avatar)
  const { user } = recetas[0];

  const [anchorEl, setAnchorEl] = useState(false);

  const onMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  
  const onClickAvatar = () => {
    setAnchorEl(false);
  };

  return (
    <Grid>
      <Stack
        direction="row"
        justifyContent="flex-end"
        alignItems="center"
        spacing={1}
      >
        <Typography>
          {user.username}
        </Typography>
        <IconButton
          size="large"
          onClick={ onMenu }
        >
          <Avatar alt={user.username} src={user.avatar} />
        </IconButton>

      </Stack>
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorEl)}
        onClose={ onClickAvatar } 
      >
        <MenuItem onClick={ onClickAvatar }>Profile</MenuItem>
        <MenuItem onClick={ onClickAvatar }>Dark Mode</MenuItem>
        <MenuItem onClick={ onClickAvatar }>Log out</MenuItem>
      </Menu>
    </Grid>   
  )
}

