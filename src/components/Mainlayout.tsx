import { Box,Grid } from "@mui/material"
import Commonheader from "./Commonheader"
import { Outlet } from "react-router-dom"
import Sidebar from "./Sidebar"

const Mainlayout = () => {
  return (
   <>
    <Sidebar />

<Box
  sx={{
    marginLeft: { lg: '250px', md: '220px', sm: 0, xs: 0 },
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    overflow: 'hidden'
  }}
>
  <Commonheader />

  <Box sx={{ flexGrow: 1, overflowY: 'auto', p: 2 }}>
    <Outlet />
  </Box>
</Box>
</>
       
  )
}

export default Mainlayout
