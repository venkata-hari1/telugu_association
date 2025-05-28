import { Box, Typography } from "@mui/material"
import heritage from '../../assets/heritage.png'

export default function AboutUs() {
  return (
   <Box width="100%"  p={2}>
    <Typography variant="h6" color="#3DB80C">Our Mission</Typography>
    <Typography component="div" color="#3DB80C">
      Preserve and perpetuate the cultural heritage of Telugu speaking people of Greater Minnesota. Assist and promote cultural, charitable, educational, social and community affairs of the Telugu speaking people in Greater Minnesota. Foster harmony within the Telugu community and to share our diverse culture with the Greater Minnesota community.
    </Typography>
    <Box display="flex" justifyContent="center" flexDirection="column" alignItems="center">
    <Typography component="div" display="flex"
    variant="h6" alignItems="center" color="#3DB80C" 
    justifyContent="center" mt={2} fontWeight="700">April 2025 is Telugu Language and Heritage Month</Typography>
     <Box component="img" mt={2} src={heritage} height="auto" width="65%"/> 
    </Box>
   
   </Box>
  )
}
