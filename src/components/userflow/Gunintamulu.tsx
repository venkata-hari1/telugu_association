import { Box, Button, Typography } from "@mui/material"
import gunintamulu from '../../assets/Gunintamulu.png'
import { useNavigate } from "react-router-dom"

const Gunintamulu = () => {

    const navigate=useNavigate(); 
    
  return (
      <Box width="100%" p={2}>
       <Typography color='#3DB80C' fontWeight="700">Telugu Gunintamulu</Typography>
        <Box display="flex" justifyContent="center">
            <Box component="img"  mt={2} src={gunintamulu} width="95%"
        />
       </Box>
       <Box display="flex" justifyContent="flex-end"> 
        <Button  onClick={()=>navigate('/telugu')} 
         sx={{color:'black',textDecoration:'underline',fontWeight:600}}>తిరిగి తెలుగు వ్యాకరణంకి</Button>
        </Box>
       </Box>


  )
}

export default Gunintamulu