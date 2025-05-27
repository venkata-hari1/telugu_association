import { Box, Typography } from "@mui/material"
import Organization_image from '../../assets/Organization_image.png'
const Organization = () => {
  return (
    <Box width="100%" height="100vh"p={2}>
        <Typography variant="h6" color="#3DB80C">ORGANIZATION</Typography>
    <Typography component="div" color="#3DB80C">
        TEAM is governed by Board of Directors, President and Executive Committee elected from the community for an annual term (Jan 1st to Dec 31st). The Executive Committee is supported by an Extended Committee consisting of Volunteers/members supporting the various activities and events such as Cultural, Marketing & Communication, Food etc. For more details, please read TEAM Bylaws. TEAM organizes several activities and programs through out the year for Telugu community. All activities and programs are open to public and are not restricted to its members. Membership dues are collected once a year towards event fees. Non-members pay a nominal amount per event either on an individual or family basis. Membership is open throughout the year.
    </Typography>
    <Box display="flex" justifyContent="center" alignItems="center">
      <Box component="img" mt={5} src={Organization_image} height="auto" width="65%"/>
    </Box>
    </Box>

  )
}

export default Organization