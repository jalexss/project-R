import { useState } from "react";

import { Container, Toolbar, Grid } from "@mui/material";
import { grey } from "@mui/material/colors";

import { Navbar, SideBar } from "../components";

export const RecetaLayout = ({ children }) => {
  const [openUi, setOpenUi] = useState({
    drawerOpen: false,
  });

  // return (
  //   <Grid sx={{ display: 'flex', backgroundColor: grey[200], }} >

  //     <Navbar
  //       openUi={ openUi }
  //       setOpenUi={ setOpenUi }
  //     />

  //     <SideBar
  //       openUi={ openUi }
  //       setOpenUi={ setOpenUi }
  //       drawerWidth = { 240 }

  //     />

  //     <Container
  //       component="main"
  //       sx={{
  //         flexGrow: 12,
  //         height: '100vh',
  //         overflow: 'auto',
  //       }}
  //     >
  //       <Toolbar sx={{ mt: 1 }} />
  //       { children }
  //     </Container>

  //   </Grid>
  // )
  return (
    <>
      <nav>
        <Navbar openUi={openUi} setOpenUi={setOpenUi} />
      </nav>

      <Grid
        container
        justifyContent="space-between"
        direction="row"
        spacing={1}
      >
        <SideBar openUi={openUi} setOpenUi={setOpenUi} drawerWidth={240} />
        <main
          style={{
            margin: "88px auto",
            maxWidth: "1440px",
            padding: "0px 30px",
          }}
        >
          {children}
        </main>
      </Grid>
    </>
  );
};
