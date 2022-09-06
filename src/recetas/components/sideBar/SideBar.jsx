import { Box,Drawer,Toolbar } from '@mui/material';

import { SideBarListItem } from './SideBarListItem';

export const SideBar = ({ openUi, setOpenUi, drawerWidth = 240 }) => {
    
    const { drawerOpen } = openUi;

    const handleDrawerToggle = () => {
        
        setOpenUi({...openUi, drawerOpen: !drawerOpen });
    };

    return (
        <Box sx={{ display: 'flex'}}>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
            >
                <Drawer
                    variant="temporary"
                    open={drawerOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        boxShadow: 2, 
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    <Toolbar />
                    <SideBarListItem />
                </Drawer>

                <Drawer
                    variant="permanent"
                    sx={{
                        width: drawerWidth,
                        boxShadow: 2, 
                        flexShrink: 0,
                        display: { xs: 'none', sm:'block'},
                        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
                        
                    }}
                >
                    <Toolbar />
                    <Box sx={{ overflow: 'auto' }}>
                        <SideBarListItem />
                    </Box>
                </Drawer>
                
            </Box>
        </Box>
    );
}
