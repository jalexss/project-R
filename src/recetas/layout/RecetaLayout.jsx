import { useState } from "react";

import { Box, Container, Toolbar } from "@mui/material"

import { Navbar } from "../components"
import { SideBar } from "../components"
import { grey } from "@mui/material/colors";


export const RecetaLayout = ({ children }) => {

    const [ openUi, setOpenUi ] = useState({
        drawerOpen : false,
    });

  return (
    <Box sx={{ display: 'flex' }} >
        
        <Navbar 
            openUi={ openUi } 
            setOpenUi={ setOpenUi }
        />
        
        <SideBar  
            openUi={ openUi } 
            setOpenUi={ setOpenUi } 
            drawerWidth = { 240 }
        /> 

        {/* <Container maxWidth="lg" sx={{ mt: 4, backgroundColor: grey[100], overflow: 'auto' }}>
            <Toolbar />
            { children }
        </Container> */}

        <Container 
            component="main"
            sx={{
              backgroundColor: grey[200],
              flexGrow: 1,
              height: '100vh',
              overflow: 'auto',
            }}
        >
            <Toolbar sx={{ mt: 1 }} />
            { children }
        </Container>
        
    </Box>
  )
}
