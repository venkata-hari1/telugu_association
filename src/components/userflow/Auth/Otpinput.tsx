import { Box, Grid, Typography, Button, TextField, Dialog, DialogContent } from '@mui/material';
import OTPInput from 'react-otp-input';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../Redux/Store';
import { setMessage, setNewPassword, setOtp, setPopUp } from '../../../Redux/UserFlow';
import { useState, useEffect } from 'react';

const Otpinput = () => {
  const value = useSelector((state: RootState) => state.userFlow.otp);
  const email=localStorage.getItem('email')
  const dispatch = useDispatch<AppDispatch>();

  const [otp, setOtpValue] = useState('');
  const [otpTouched, setOtpTouched] = useState(false);
  const [otpError, setOtpError] = useState('');

  // Validate OTP length
  useEffect(() => {
    if (otpTouched) {
      setOtpError(otp.length === 4 ? '' : 'Please enter 4-digit OTP');
    } else {
      setOtpError('');
    }
  }, [otp, otpTouched]);

  const handleOtpSubmit = () => {
    if (otp.length === 4) {
      dispatch(setOtp(false));
      dispatch(setNewPassword(true));
      dispatch(setMessage('Otp Verified'));
      dispatch(setPopUp(true));
      setOtpValue('');
      setOtpTouched(false);
      setOtpError('');
    } else {
      setOtpTouched(true);
      setOtpError('Please enter 4-digit OTP');
    }
  };

  return (
    <Dialog open={value}>
      <DialogContent>
        <Box display="flex" justifyContent="center" alignItems="center" >
          <Grid
            container
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              background: 'white',
              padding: '40px',
              width: '450px',
              borderRadius: '15px',
              gap: 2,
            }}
          >
            <Typography variant="h6" fontWeight="600">
              OTP Verification
            </Typography>
            <Typography component="span" fontWeight="600">
              We have sent 4-digit code to
            </Typography>
            <Typography component="span" variant="body1" fontWeight="600">
              {email}
            </Typography>

            <OTPInput
  numInputs={4}
  value={otp}
  onChange={(val: string) => {
    setOtpValue(val);
    if (!otpTouched) setOtpTouched(true);
  }}
  inputStyle={{
    width: '3rem',
    height: '3rem',
    margin: '0 0.5rem',
    fontSize: '2rem',
    borderRadius: '8px',
    // remove border here
  }}
  renderInput={(props) => (
    <TextField
      {...props}
      variant="outlined"
      onBlur={() => setOtpTouched(true)}
      inputProps={{
        style: {
          textAlign: 'center',
          fontSize: '2rem',
          height: '3rem',
          padding: 0,
        },
      }}
      sx={{ width: '4rem', mx: 0.5 }}
      error={!!otpError}
    />
  )}
/>

            {otpError && (
              <Typography color="error" sx={{ mt: 1 }}>
                {otpError}
              </Typography>
            )}
        
        <Box display="flex" flexDirection="column" width="100%">
              <Button
                variant="contained"
                sx={{ background: '#3DB80C', fontSize: '18px',width:'30%', mx: 'auto' ,mt:3 }}
                onClick={handleOtpSubmit}
                disabled={otp.length !== 4}
              >
                Continue
              </Button>
            </Box>
          </Grid>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default Otpinput;
