import { Box, Button, Typography } from "@mui/material"
import nakshatralu from '../../assets/nakshtralu.png'
import { useNavigate } from "react-router-dom"

const Nakshatralu = () => {

  const navigate=useNavigate();
    return (
  <Box width="100%" p={2}>
    <Typography color='#3DB80C' fontWeight="700" fontSize={17}>Telugu Nakshatralu</Typography>
     <Box display="flex" justifyContent="center">
         <Box component="img"  mt={2} src={nakshatralu} width="80%"
     />
    </Box>
    <Box display="flex" justifyContent="flex-end"> 
     <Button  onClick={()=>navigate('/telugu')} 
      sx={{color:'black',marginRight:'70px',textDecoration:'underline',fontWeight:600}}>తిరిగి తెలుగు వ్యాకరణంకి</Button>
     </Box>
    </Box>
  )
}

export default Nakshatralu