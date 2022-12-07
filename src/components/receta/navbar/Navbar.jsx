import { Link as RouterLink } from "react-router-dom";
import { AppBar, IconButton, Link, Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import { SearchInput } from "../";
import { MenuNavbar } from "./";

export const Navbar = ({ openUi, setOpenUi }) => {
  const { drawerOpen } = openUi;

  const handleDrawerToggle = () => {
    setOpenUi({ ...openUi, drawerOpen: !drawerOpen });
  };

  return (
    <AppBar
      position="fixed"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <IconButton
          color="inherit"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { lg: "none" } }}
        >
          <MenuIcon />
        </IconButton>

        <Link
          variant="h6"
          component={RouterLink}
          to={"/"}
          noWrap
          color="inherit"
          underline="none"
          sx={{ display: { xs: "none", sm: "flex" } }}
        >
          Project-R
        </Link>

        <SearchInput />

        <MenuNavbar />
      </Toolbar>
    </AppBar>
  );
};
