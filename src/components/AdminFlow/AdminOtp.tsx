import {
  Box,
  Button,
  Card,
  CardContent,
  FormControl,
  Typography,
} from '@mui/material';
import Logo from '../../assets/logo.png';
import backgroundImg from '../../assets/BackgroundImage.png';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import OTPInput from 'react-otp-input';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminOtp = () => {
  const [otp, setOtp] = useState('');
 
 const navigate=useNavigate()
  return (
    <Box
      sx={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '100vh',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <Box
        component="img"
        src={Logo}
        sx={{
          width: 200,
          height: 'auto',
          mb: 2,
        }}
      />

      <Card
        sx={{
          width: 400,
          p: 3,
          boxShadow: 3,
          background: '#f0f3d3',
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
        <CardContent>
          <Typography variant="h5" align="center" gutterBottom color="#3DB80C">
            Password Reset
          </Typography>

          <FormControl fullWidth size="small" variant="outlined" sx={{ mt: 3,
            justifyContent:'center',alignItems:'center',display:'flex'
           }}>
           <OTPInput
  value={otp}
  onChange={setOtp}
  numInputs={4}
  renderInput={(props) => <input {...props} />}
  inputStyle={{
    width: '3rem',
    height: '3rem',
    margin: '0 0.5rem',
    fontSize: '1.5rem',
    borderRadius: '4px',
    border: '1px solid #3DB80C',
    textAlign: 'center',
    background: '#fff', // Optional
  }}
/>
          </FormControl>

          <Box display="flex" justifyContent="center">
          <Button
                variant="contained"
                sx={{ mt: 3, backgroundColor: '#3DB80C',width:"150px" }}
              >
             Continue
          </Button>
          </Box>    
         <Typography display="flex" justifyContent="center" mt={2}>
           Dont Receive the Email? &nbsp;
          <Typography component="span" sx={{textDecoration:'underline',cursor:'pointer'}}>Resend</Typography> 
         </Typography>

         <Typography sx={{display:'flex',justifyContent:'center', mt:2
         }} onClick={()=>navigate('/login')}>
            <ArrowBackIcon/>Back to Login
            </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default AdminOtp;
