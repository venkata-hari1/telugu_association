import { Box, Button, Typography } from "@mui/material"
import samvastaralu from '../../assets/samvastaralu.png'
import { useNavigate } from "react-router-dom"

const Samvatsaralu = () => {
  const navigate=useNavigate();  
  return (

     <Box width="100%" p={2}>
    <Typography color='#3DB80C' fontWeight="700">Telugu Samvatsaralu</Typography>
     <Box display="flex" justifyContent="center">
         <Box component="img"  mt={2} src={samvastaralu} width="80%"
     />
    </Box>
    <Box display="flex" justifyContent="flex-end"> 
     <Button  onClick={()=>navigate('/telugu')} 
      sx={{color:'black',marginRight:'70px',textDecoration:'underline',fontWeight:600}}>తిరిగి తెలుగు వ్యాకరణంకి</Button>
     </Box>
    </Box>
 
  )
}

export default Samvatsaralu