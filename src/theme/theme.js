import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    primary: {
        main: '#6AF763'
    },
    secondary: {
        main: '#D426BD'
    },
    error: {
        main: red.A400
    }
  },
  typography: {
    customCursive: {
      fontFamily: 'Shadows Into Light',
    },
    titleReceta: {
      color: '#D426BD',
      fontFamily: 'Shadows Into Light',
      fontSize: '3rem',
      lineHeight: 1.1,
    },
    titleRecetaCard: {
      fontSize: '1.25rem',
      lineHeight: 1.1,
    },
    ingredient: {
      //color: '#D64B36',
      fontFamily: 'Dancing Script',
      fontSize: '1.75rem',
    }
  }
})