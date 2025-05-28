import { Box, Button, Typography } from "@mui/material"
import aksharamala from '../../assets/aksharamala.png'
import { useNavigate } from "react-router-dom"

const Aksaramala = () => {
    
    const navigate=useNavigate(); 
  
    return (
        <Box width="100%" p={2}>
              <Typography color='#3DB80C' fontWeight="700">Telugu Aksaramala</Typography>
               <Box display="flex" justifyContent="center">
                   <Box component="img"  mt={2} src={aksharamala} width="100%"
               />
              </Box>
              <Box display="flex" justifyContent="flex-end"> 
               <Button  onClick={()=>navigate('/telugu')} 
                sx={{color:'black',textDecoration:'underline',fontWeight:600}}>తిరిగి తెలుగు వ్యాకరణంకి</Button>
               </Box>
              </Box>
   
  )
}

export default Aksaramala