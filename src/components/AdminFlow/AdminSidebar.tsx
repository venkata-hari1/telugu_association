import { useState } from 'react';
import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Drawer,
  Typography
} from '@mui/material';
import tlogo from '../../assets/taLogo.png';
import GridViewIcon from '@mui/icons-material/GridView';
import GroupIcon from '@mui/icons-material/Group';
import PaymentsIcon from '@mui/icons-material/Payments';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import { useLocation, useNavigate } from 'react-router-dom';
import Logout from './Logout';



const Sidebar = ({ mobileOpen, onCloseSidebar }:{mobileOpen:boolean,onCloseSidebar:() => void}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const sidemenu = [
    { id: 1, title: 'Dashboard', icon: <GridViewIcon />, link: 'admin/dashboard' },
    { id: 2, title: 'Membership Management', icon: <GroupIcon />, link: 'admin/membership' },
    { id: 3, title: 'Sponsors & Donations', icon: <PaymentsIcon />, link: 'admin/sponsorship' },
    { id: 4, title: 'Gallery & Media', icon: <InsertPhotoIcon />, link: 'admin/admingallery' },
    { id: 5, title: 'Events & Calendar', icon: <CalendarMonthIcon />, link: 'admin/events' },
    { id: 6, title: 'Board & Leadership', icon: <SupervisedUserCircleIcon />, link: 'admin/board' },
    { id: 7, title: 'Profile', icon: <AccountCircleIcon />, link: 'admin/profile' },
  ];
  const[state,setState]=useState(false)
  function handleLogout(){
     setState(prev=>!prev)

  }
  const drawerContent = (
    <Box
      sx={{
        width: '100%',
        background: "linear-gradient(to bottom, #5BE823, #3DB80C)",
        height: "100%",
        display: 'flex',
        flexDirection: 'column',
        
      }}
    >
      <Box component="img" src={tlogo} alt="Telugu Association"
        sx={{ width: "150px", height: "auto", margin: 'auto', display: 'block',whiteSpace:'nowrap' }} />

      <Box sx={{ flexGrow: 1 }}>
        <List sx={{ color: 'white' }}>
          {sidemenu.map(item => (
            <ListItemButton
            key={item.id}
            selected={location.pathname === `/${item.link}`}
            onClick={() => {
              navigate(`/${item.link}`);
              onCloseSidebar();
            }}
            sx={{
              '&.Mui-selected': {
                backgroundColor: '#E4E139',
                color: 'white',
                fontWeight: 'bold',
              },
              '&:hover': {
                backgroundColor: '#EE4E130',
              },
            }}
          >
            <ListItemIcon
              sx={{
                color: location.pathname === `/${item.link}` ? 'green' : 'white',
                minWidth: 'unset',
                marginRight: '15px',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              {item.icon}
            </ListItemIcon>
            <ListItemText primary={<Typography sx={{fontSize:'14.5px',fontWeight:'550',lineHeight:'30px'}}>{item.title}</Typography>}/>
          </ListItemButton>
          
          ))}
        </List>
      </Box>

      <Box>
        <ListItemButton
          onClick={handleLogout}
          sx={{
            color: 'white',
            
            '&:hover': {
              backgroundColor: '#d4d115',
              color: 'white',
            },
          }}
        >
          <ListItemIcon sx={{ color: 'white' }}>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText primary={<Typography sx={{fontSize:'15px',fontWeight:'550'}}>Logout</Typography>}  />
        </ListItemButton>
     </Box>
      
    </Box>



);

  return (
    <>
      {/* Permanent Sidebar for lg/md */}
      <Box
        sx={{
          display: { xs: 'none', md: 'block' },
          height: "100vh",
          width: { lg: '250px', md: '220px' },
          minWidth: '200px',
          background: "linear-gradient(to bottom, #5BE823, #3DB80C)",
          position: 'fixed',
          top: 0,
          left: 0,
          overflowY: 'auto',
          zIndex: 1000,
        }}
      >
        
        {drawerContent}
      </Box>
        
      {/* Drawer for mobile */}
      <Drawer
        open={mobileOpen}
        onClose={onCloseSidebar}
        sx={{ display: { xs: 'block', md: 'none' } }}
      >
        {drawerContent}
      </Drawer>
       <Logout open={state} handleClose={() => setState(false)} />        
    </>
  );
};

export default Sidebar;
