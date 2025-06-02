import { Box, Paper, Typography } from "@mui/material"
import eventcalender from '../../assets/calender.png'
const EventDetails = () => {

return (
     <Box sx={{width:'100%',p:2}}>
        <Typography component="div" sx={{color:'#3DB80C',fontSize:14,fontWeight:600}}>Event Details</Typography>
        <Paper sx={{display:'flex',justifyContent:'center',margin:'auto',marginTop:2,marginBottom:2, alignItems:'center',p:1,width:'80%'}}>
            <Typography sx={{color:'#3DB80C',fontSize:14,fontWeight:600}}>TAM Telugu Calendar 2025</Typography>
        </Paper>
        <Typography display="flex" mt={2} gap={2}>
        <Typography component="span" sx={{color:'#3DB80C'}}>Date & Time:</Typography>{''}  
        <Typography component="span" sx={{ color: 'black',fontWeight:600 }}>
         Jan 01, 2025 -to- Dec 31, 2025 (CST)
         </Typography>
         </Typography>

         <Typography display="flex" mt={2} gap={2}>
         <Typography component="span" sx={{color:'#3DB80C'}}>Location:</Typography>{''}  
        <Typography component="span" sx={{ color: 'black',fontWeight:600 }}>
          HTGC Temple, 10915 Lemont Rd Lemont IL 60439
         </Typography>
         </Typography>
         <Box display="flex" justifyContent="center"> 
         <Box component="img" mt={2} src={eventcalender} height="auto" width="65%"/>
         </Box> 
          
     </Box>
    
  )
}

export default EventDetails