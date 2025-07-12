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
import {showToast} from '../../Utils/ShowToast';
import { verifyOtp } from '../../Redux/authSlice';
import {  useLocation } from 'react-router-dom';
import { useEffect } from 'react'; 
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from '../../Redux/Store'; 
import { forgotPassword } from '../../Redux/authSlice';
import Loading from '../../Utils/CircularLoader';




const AdminOtp = () => {
  const {loading}=useSelector((state:RootState)=>state.login)
  const [otp, setOtp] = useState('');
  const [otpError, setOtpError] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();


  
const location = useLocation();
const email = location.state?.email || localStorage.getItem("email");

useEffect(() => {
 
}, [email]);

  
const handleOtp = async () => {
  const trimmedOtp = otp.trim();
  const isValidOtp = /^\d{4}$/.test(trimmedOtp); 

  if (!isValidOtp || !email) {
    setOtpError("Please enter a valid 4-digit OTP");
    return;
  }

  try {
    const response = await dispatch(verifyOtp({ data: { email, otp: trimmedOtp } }));
    const fulfilled = response.payload;

    if (response.meta.requestStatus === "fulfilled" && fulfilled?.status) {
      showToast(true, fulfilled.message || "OTP Verified Successfully");
      localStorage.setItem("email", email);

      setOtp("");
      setOtpError("");
      setTimeout(() => {
        navigate("/adminreset", { state: { email } });
      }, 200);
    } else {
      showToast(false, fulfilled?.message || "Invalid OTP");
    }
  } catch (error) {
    console.error("OTP verification failed", error);
    showToast(false, "Something went wrong");
  }
};

const handleResendOtp = async () => {
  if (!email) {
    showToast(false, "Email not found. Cannot resend OTP.");
    return;
  }

  try {
    const response = await dispatch(forgotPassword({ data: { email } }));
    const result = response.payload;

    if (response.meta.requestStatus === "fulfilled" && result?.status) {
      showToast(true, result.message || "OTP resent successfully");
    } else {
      showToast(false, result?.message || "Failed to resend OTP");
    }
  } catch (err) {
    console.error("Error resending OTP:", err);
    showToast(false, "Something went wrong");
  }
};


  return (
    <Fragment>
      {loading&&<Loading/>}
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
            { <OTPInput
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
}
           
            {otpError && (
              <Typography color="error" mt={1} fontSize="14px">
                {otpError}
              </Typography>
            )}
          </FormControl>


          <Box display="flex" justifyContent="center">
            <Button
              variant="contained"
              // disabled={otp.length !== 4}
              disabled={loading || !/^\d{4}$/.test(otp)}

              onClick={handleOtp}
              sx={{ mt: 3, backgroundColor: '#3DB80C', width: "150px" }}
            >
              {loading?'Continue...':'Continue'}
            </Button>
          </Box>
          <Typography display="flex" justifyContent="center" mt={2}>
            Dont Receive the Email? &nbsp;
            <Typography component="span" sx={{ textDecoration: 'underline', cursor: 'pointer' }} onClick={handleResendOtp}>Resend</Typography>
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
