// Mainlayout.tsx
import { Box, Grid } from "@mui/material";
import { Outlet } from "react-router-dom";
import Commonheader from "./Commonheader";
import Sidebar from "./AdminSidebar";
import { useState } from "react";

const Mainlayout = () => {
  
  const [mobileOpen, setMobileOpen] = useState(false); // mobile sidebar toggle

  const handleToggleSidebar = () => {
    setMobileOpen(!mobileOpen);
  };



return (
    <Grid container spacing={1}>
      <Sidebar
        mobileOpen={mobileOpen}
        onCloseSidebar={() => setMobileOpen(false)}
      />
      <Box 
        sx={{
          display:'flex',
          justifyContent:'center',
          alignItems:'center',
          alignContent:'center',
          flexDirection:'column',
          width:'100%',
          ml: { md: '220px', lg: '250px' },
          transition: 'margin-left 0.3s',
        }}
      >
        <Box
         sx={{width:'100%'}}
        >
          <Commonheader onToggleSidebar={handleToggleSidebar} />
          </Box>
          <Box
          sx={{
            width:'96%',
           
          }}
        >
          <Box sx={{ flexGrow: 1, overflowY: 'auto', p: 2 }}>
            <Outlet />
          </Box>
        </Box>
        </Box>
    </Grid>
  );
};

export default Mainlayout;
