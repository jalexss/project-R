import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';


import { SearchInput } from "../";
import { MenuNavbar } from "./";

export const Navbar = ({ openUi, setOpenUi }) => {

    const { drawerOpen } = openUi;

    const handleDrawerToggle = () => {
        
        setOpenUi({...openUi, drawerOpen: !drawerOpen });
    };

    return(

        <AppBar 
            position="absolute"
            sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
        >
            <Toolbar sx={{ justifyContent: 'space-between' }} >

                <IconButton
                    color="inherit"
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={{ mr: 2, display: { sm: 'none' } }}
                >
                    <MenuIcon />
                </IconButton>

                <Typography 
                    variant="h6" 
                    component="div" 
                    noWrap
                >
                    Project-R
                </Typography>
                
                <SearchInput />

                <MenuNavbar />

            </Toolbar>
        </AppBar>
    )
}

