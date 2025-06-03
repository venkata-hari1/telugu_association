import { Box, Typography,useMediaQuery } from '@mui/material'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import bathukamma from '../../assets/bathukamma.jpg'
import { useStyles } from './Styles/makeStyles';
type IProps=any

export default function UpcomingEvents() {
    const display=useMediaQuery((theme)=>theme.breakpoints.down('lg'))
 const { classes }:IProps = useStyles();
    const eventdata=[
        {id:1,name:'bathukamma',img:bathukamma},
        {id:2,name:'bathukamma',img:bathukamma},
        {id:3,name:'bathukamma',img:bathukamma}
      ]
  return (
    <Box>
      <Box className={classes.upcomingevents_title}>  
      <Typography component="div" variant="h6" color="#3DB80C" sx={{fontSize:'14px',fontWeight:'bold'}} padding={2}>
         UPCOMING EVENTS
      </Typography>
      <Typography component="div" variant="h6" color="#3DB80C" sx={{fontSize:'14px',justifySelf: 'end',fontWeight:'bold'}} padding={2}>
        View All
      </Typography>
      </Box>
     <Box className={classes.upcomingevents} >
     {eventdata.map(event => (
    <Box key={event.id} sx={{width:'80%'}}>    
    <Box
      component="img"
      src={event.img}
      alt=""
      sx={{width:'100%'}}
    />
    </Box>
  ))}
      </Box>
 
    
</Box>
  )
}
