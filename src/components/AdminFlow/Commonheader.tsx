// Commonheader.tsx
import { TextField, Box, InputAdornment,Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import { useLocation } from 'react-router-dom';

const Commonheader = ({ onToggleSidebar}:{onToggleSidebar: () => void }) => {
  
  const location=useLocation()
  
  const breeadcrumbmap:Record<string,{main:string,sub:string}>={
    '/admin/gallery/addgallery':{main: 'Gallery and Media', sub: 'Add Gallery' },
    '/admin/membership/addmember':{main:'Membership Management',sub:'Add Member'},
    '/admin/membership/volunteermgmt/addvolunteer':{main:'Volunteer Management',sub:'Add Volunteer'},
    '/admin/sponsorship/addsponsor':{main: 'Sponsorship Management', sub: 'Add Sponsor'},
    '/admin/events/addevent': { main: 'Event Management', sub: 'Add Event' },
    '/admin/board/addboard': { main: 'Board Management', sub: 'Add Board Member'},
    '/admin/profile':{main:'Profile',sub:''},
  }

const current = breeadcrumbmap[location.pathname];
 
 return (
    <Box
      sx={{
        display:'flex',justifyContent:'center',alignItems:'center',alignContent:'center',flexDirection:'column',
        gap: 2,
        width:'100%',
        boxShadow: 1,
        pt: 1,
        pb: 1,
        pr: 2,
        pl: 2
      }}
    >
      <Box sx={{width:'96%'}}>
      {/* Mobile toggle icon */}
      <Box sx={{ display: { xs: "block", md: "none" }, cursor: 'pointer' }} onClick={onToggleSidebar}>
        <FormatAlignJustifyIcon />
      </Box>
  {current?(<Box display="flex"  justifyContent="flex-start"  alignItems="center">
        <Typography variant="h5" color="#3DB80C">
  {current.main}
  {current.sub && (
    <>
      /{' '}
      <Typography component="span" fontSize={22} fontWeight="300">
        {current.sub}
      </Typography>
    </>
  )}
</Typography>
    </Box>):(
      <TextField
        fullWidth
        type='search'
        placeholder='Search'
        size='small'
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: "#3DB80C" }} />
              </InputAdornment>
            ),
          }
        }}
        sx={{
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#3DB80C',
              borderRadius: '20px'
            },
            '&:hover fieldset': {
              borderColor: '#3DB80C',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#3DB80C',
            },
          },
          '& input::placeholder': {
            color: '#3DB80C',
            opacity: 1,
          },
          width: { lg: '500px', md: '500px' },
          background: "white",
          borderRadius: '20px'
        }}
      />

    )}
      
</Box>
    </Box>
  );
};

export default Commonheader;
