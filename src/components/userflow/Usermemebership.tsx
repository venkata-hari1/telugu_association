import { Box, Paper, Typography } from "@mui/material"
import { useLocation } from "react-router-dom"
import Membershipplans from "../AdminFlow/Membershipplans"

const Usermemebership = () => {
  
  const location=useLocation()
  const pathname=location.pathname
  console.log(pathname)
  return (
   <Box width="100%">
    <Typography color="#3DB80C" fontWeight="600">Membership Plans</Typography>
      <Paper
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  p: 1,
                  margin: "auto",
                  marginTop: "10px",
                  width: "95%",
                }}
              >
                <Typography sx={{ color: "#3DB80C", fontSize: 14, fontWeight: 600 }}>
                  Membership Registration
                  </Typography>
      </Paper>
     <Box width="100%" gap={2} overflow="hidden"> 
     {pathname==='/usermembership'&&<Membershipplans 
    />} 
     </Box>
    <Box>

    </Box>

   </Box>
  )
}

export default Usermemebership
