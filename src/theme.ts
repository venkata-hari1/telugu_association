import { createTheme } from '@mui/material/styles';
const theme = createTheme({
    palette: {
        background: {
          default:'#FDF7E1', 
        },
    },
    typography: {
      fontFamily: 'Roboto',
        fontSize: 12,
      h5: {
      fontSize: '1.5rem',
    },  
    button: {
      fontSize: '0.875rem',
      textTransform: 'none',
       // Optional: removes UPPERCASE from buttons
    },
    },
    
  });
export default theme
  