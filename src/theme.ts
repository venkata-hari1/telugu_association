import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    background: {
      default: '#FDF7E1',
    },
  },
  typography: {
    fontFamily: 'Lato',
    fontSize: 12,
    h5: {
      fontSize: '1.5rem',
    },
    button: {
      fontSize: '0.875rem',
      textTransform: 'none',
    },
  },
  components: {
    MuiTableCell: {
      styleOverrides: {
        head: {
          fontSize: '14px', 
          padding:'12px',
          whiteSpace:'nowrap',
          fontWeight: 'bold',
        },
        body: {
         
          fontSize: '13.5px',
        
        },
      },
    },
  },
});

export default theme;
