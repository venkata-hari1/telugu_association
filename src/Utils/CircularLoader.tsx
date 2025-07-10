import { Box, CircularProgress } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(() => ({
    circulr: {
        position: 'absolute',
        top: '40%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 3900,
        background: 'white',
        padding: '4px',
        boxShadow: '0 0 3px grey',
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      },
}));

export default function Loading() {
  const { classes } = useStyles();
  return (
    <Box
      className={classes.circulr}
    >
      <CircularProgress sx={{
          '& .MuiCircularProgress-circle': {
            stroke: 'rgb(60 181 11)', 
          },
        }} 
        thickness={5} 
        size={25}/>
    </Box>
  );
}
