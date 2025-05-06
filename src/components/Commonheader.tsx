import { TextField,Box,InputAdornment, Avatar } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import NotificationsIcon from '@mui/icons-material/Notifications';

const Commonheader = () => {
  return (
  <Box sx={{display:"flex", justifyContent:"space-between", alignItems:"center",gap:10,boxShadow:1,pt:1,pb:1}}>
   <TextField 
   fullWidth
   type='search'
   placeholder='search'
   size='small'
   slotProps={{
           input: {
             startAdornment: <InputAdornment position="start">
               <SearchIcon sx={{color:"#3DB80C"}}/>
             </InputAdornment>,
           }
          }}  
  sx={{
           '& .MuiOutlinedInput-root': {
             '& fieldset': {
               borderColor: '#3DB80C', 
               borderRadius:'20px'
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
           width:{lg:'500px',md:'500px'},
       background:"white",
       borderRadius:'20px'
         }}/>

    <Avatar sx={{ backgroundColor: '#3DB80C', width: 30, height: 30 }}>
      <NotificationsIcon sx={{ fontSize: '20px', color: 'white' }} />
    </Avatar>
  </Box>

  )
}

export default Commonheader
