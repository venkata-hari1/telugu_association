import { Box, Button, Typography } from "@mui/material"
import tithulu from '../../assets/tithulu.png'
import { useNavigate } from "react-router-dom"

const Tithulu = () => {
  const navigate=useNavigate(); 

  return (
     <Box width="100%" p={2}>
       <Typography color='#3DB80C' fontWeight="700">Telugu Tidhulu</Typography>
        <Box display="flex" justifyContent="center">
            <Box component="img"  mt={2} src={tithulu} width="100%"
        />
       </Box>
       <Box display="flex" justifyContent="flex-end"> 
        <Button  onClick={()=>navigate('/telugu')} 
         sx={{color:'black',textDecoration:'underline',fontWeight:600}}>తిరిగి తెలుగు వ్యాకరణంకి</Button>
        </Box>
       </Box>

  )
}

export default Tithulu