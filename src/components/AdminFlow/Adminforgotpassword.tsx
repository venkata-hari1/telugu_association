import { Box, Button, Card, CardContent, FormControl, OutlinedInput, Typography } from '@mui/material'
import backgroundImg from '../../assets/BackgroundImage.png'
import Logo from '../../assets/logo.png'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';


const Adminforgotpassword = () => {
  
     const navigate=useNavigate()
  return (
     <Box sx={{
        backgroundImage:`url(${backgroundImg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '100vh', 
        width: '100%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column',
        
       }}>
    
      <Box  component="img"
      src={Logo} sx={{
        width: 150,
        height: 'auto'}}/>
    
      <Card sx={{ width: 400, p: 3, boxShadow: 3,background:'#f0f3d3',
        display:'flex',justifyContent:'center',flexDirection:'column' }}>
      
      <CardContent>
        <Typography variant="h5" align="center" gutterBottom
        color='#3DB80C' >
                Login
        </Typography>
        <FormControl fullWidth size='small' variant="outlined">
          <Typography variant="subtitle2" sx={{ mb: 0.5,fontWeight:700 }}>
                  Email ID
                </Typography>
            <OutlinedInput id="email" type='email' 
            placeholder='Your Email ID'
              sx={{
        backgroundColor: 'white',
        '& .MuiOutlinedInput-notchedOutline': {
          borderColor: '#3DB80C',
        },
        '&:hover .MuiOutlinedInput-notchedOutline': {
          borderColor: '#3DB80C',
        },
        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
          borderColor: '#3DB80C',
        }
      }}
              />
        </FormControl>
     
       
         <Box display="flex" justifyContent="center">
          <Button
                variant="contained"
                
                sx={{ mt: 3, backgroundColor: '#3DB80C',width:"150px" }}
         onClick={()=>navigate('/adminreset')}     >
             Reset Password
          </Button>
          </Box> 
        </CardContent> 
        <CardContent>
    <Typography sx={{display:'flex',justifyContent:'center',cursor:'pointer'}} onClick={()=>navigate('/login')}>
     <ArrowBackIcon/>Back to Login
    </Typography>
   </CardContent> 
      </Card>
    </Box>
  )
}

export default Adminforgotpassword
