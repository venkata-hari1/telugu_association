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
import { Fragment, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PopUp from '../../Utils/Popup';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../Redux/Store';
import { setMessage, setPopUp } from '../../Redux/UserFlow';

const AdminOtp = () => {
  const [otp, setOtp] = useState('');
  const [otpError, setOtpError] = useState('');
  const navigate = useNavigate()
  const dispatch=useDispatch<AppDispatch>()
  const handleOtp=()=>{
   dispatch(setPopUp(true))
   dispatch(setMessage('OTP Verified Successfully'))
   setOtp('')
   setTimeout(()=>{
    navigate('/adminreset')
   },900)
  
  }
  return (
    <Fragment>
      <PopUp/>
    <Box
       sx={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: 'cover',           
        backgroundRepeat: 'no-repeat',      
        backgroundPosition: 'contain',
        backgroundAttachment: 'fixed',     
        minHeight: '100vh',                
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        overflowY: 'hidden',
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
          <Typography variant="h5" align="center" gutterBottom color="#3DB80C" sx={{ fontSize: '18px', fontWeight: 'bold' }}>
            Password Reset
          </Typography>

          <FormControl
            fullWidth
            size="small"
            variant="outlined"
            sx={{ mt: 3, justifyContent: 'center', alignItems: 'center', display: 'flex' }}
          >
            <OTPInput
              value={otp}
              onChange={(value) => {
                setOtp(value);
                if (value.length === 4) {
                  setOtpError('');
                } else {
                  setOtpError('Please enter a valid 4-digit OTP');
                }
              }}
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
                background: '#fff',
              }}
            />
            {otpError && (
              <Typography color="error" mt={1} fontSize="14px">
                {otpError}
              </Typography>
            )}
          </FormControl>


          <Box display="flex" justifyContent="center">
            <Button
              variant="contained"
              disabled={otp.length !== 4}
              onClick={handleOtp}
              sx={{ mt: 3, backgroundColor: '#3DB80C', width: "150px" }}
            >
              Continue
            </Button>
          </Box>
          <Typography display="flex" justifyContent="center" mt={2}>
            Dont Receive the Email? &nbsp;
            <Typography component="span" sx={{ textDecoration: 'underline', cursor: 'pointer' }}>Resend</Typography>
          </Typography>

          <Typography sx={{
            display: 'flex', justifyContent: 'center', mt: 2
          }} onClick={() => navigate('/login')}>
            <ArrowBackIcon />Back to Login
          </Typography>
        </CardContent>
      </Card>
    </Box>
    </Fragment>
  );
};

export default AdminOtp;
