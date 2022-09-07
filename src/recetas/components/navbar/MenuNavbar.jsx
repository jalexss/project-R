import { useState } from "react";

import { Grid, Menu, MenuItem, IconButton } from "@mui/material";
import AccountCircle from '@mui/icons-material/AccountCircle';
import { recetas } from "../../../helpers/recetaTest";


export const MenuNavbar = () => {
    //TODO
    //perfil -> receta -> usuario -> nami - avatar
    //const avatarNami = recetas[0].user.avatar;

    const [anchorEl, setAnchorEl] = useState(false);

    const onMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };
    
    const onClose = () => {
        setAnchorEl(false);
    };

    return (
        <Grid>
            <IconButton
                size="large"
                onClick={ onMenu }
                color="inherit"
            >
                <AccountCircle />
            </IconButton>
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
                onClose={ onClose} 
            >
                <MenuItem onClick={ onClose }>Profile</MenuItem>
                <MenuItem onClick={ onClose }>My account</MenuItem>
                <MenuItem onClick={ onClose }>Log out</MenuItem>
            </Menu>
        </Grid>   
    )
}

