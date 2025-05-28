import { Box, Button, Typography } from "@mui/material"
import vemanapadyalu from '../../assets/vemanapadyalu.png'
import { useNavigate } from "react-router-dom"

const Vemanapadyalu = () => {
  
  const navigate=useNavigate(); 
  return (
     <Box width="100%" p={2}>
       <Typography color='#3DB80C' fontWeight="700">Vemana Padyalu</Typography>
        <Box display="flex" justifyContent="center">
            <Box component="img"  mt={2} src={vemanapadyalu} width="95%"
        />
       </Box>
       <Box display="flex" justifyContent="flex-end"> 
        <Button  onClick={()=>navigate('/telugu')} 
         sx={{color:'black',textDecoration:'underline',fontWeight:600}}>తిరిగి తెలుగు వ్యాకరణంకి</Button>
        </Box>
       </Box>


  )
}

export default Vemanapadyalu