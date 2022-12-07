import { useState } from "react";

import {
  Grid,
  Menu,
  MenuItem,
  IconButton,
  Stack,
  Typography,
  Avatar,
  Divider,
} from "@mui/material";
import { useAuthStore } from "../../../hooks/useAuthStore";

export const MenuNavbar = () => {
  const { user, startLogout } = useAuthStore();
  console.log(user);

  const [anchorEl, setAnchorEl] = useState(false);

  const onMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const onClickUserMenu = () => {
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
        <IconButton size="large" onClick={onMenu}>
          <Avatar alt={user.username} src={user.avatar} />
        </IconButton>
      </Stack>
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        open={Boolean(anchorEl)}
        onClose={onClickUserMenu}
      >
        <MenuItem onClick={onClickUserMenu}>{user.username}</MenuItem>
        <MenuItem onClick={onClickUserMenu}>Dark Mode</MenuItem>
        <MenuItem onClick={startLogout}>Log out</MenuItem>
      </Menu>
    </Grid>
  );
};
