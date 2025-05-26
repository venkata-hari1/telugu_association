// Mainlayout.tsx
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Commonheader from "./Commonheader";
import Sidebar from "./Sidebar";
import { useState } from "react";

const Mainlayout = () => {
  
  const [mobileOpen, setMobileOpen] = useState(false); // mobile sidebar toggle

  const handleToggleSidebar = () => {
    setMobileOpen(!mobileOpen);
  };



return (
    <>
      <Sidebar
        mobileOpen={mobileOpen}
        onCloseSidebar={() => setMobileOpen(false)}
      />

      <Box
        sx={{
          marginLeft: { lg: '250px', md: '220px', sm: 0, xs: 0 },
          display: 'flex',
          flexDirection: 'column',
          height: '100vh',
          overflow: 'hidden'
        }}
      >
        <Commonheader onToggleSidebar={handleToggleSidebar} />

        <Box sx={{ flexGrow: 1, overflowY: 'auto', p: 2 }}>
          <Outlet />
        </Box>
      </Box>
    </>
  );
};

export default Mainlayout;
