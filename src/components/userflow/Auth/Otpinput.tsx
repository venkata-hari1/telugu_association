import { Box, Grid, Typography, Button, TextField, Dialog, DialogContent } from '@mui/material';
import OTPInput from 'react-otp-input';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../Redux/Store';
import { setNewPassword, setOtp } from '../../../Redux/UserFlow';

const Otpinput = () => {
  const value=useSelector((state:RootState)=>state.userFlow.otp)
  const dispatch=useDispatch<AppDispatch>()
  const handleOtp=()=>{
   dispatch(setOtp(false))
   dispatch(setNewPassword(true))
  }
  return (
    <Dialog open={value}>
      <DialogContent>
        <Box display="flex" justifyContent="center" alignItems="center">
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
            <Typography variant="h6" fontWeight="600">OTP Verification</Typography>
            <Typography component="span" fontWeight="600">We have sent 4-digit code to</Typography>
            <Typography component="span" variant="body1" fontWeight="600">your @gmail.com</Typography>

            <OTPInput
              numInputs={4}
              inputStyle={{
                width: '3rem',
                height: '3rem',
                margin: '0 0.5rem',
                fontSize: '2rem',
                borderRadius: '8px',
                border: '1px solid #3DB80C',
              }}
              renderInput={(props) => (
                <TextField
                  {...props}
                  variant="outlined"
                  inputProps={{
                    style: {
                      textAlign: 'center',
                      fontSize: '2rem',
                      height: '3rem',
                      padding: 0,
                    },
                  }}
                  sx={{ width: '4rem', mx: 0.5 }}
                />
              )}
              onChange={(otp: string) => {
                console.log('OTP:', otp); // Replace with your logic
              }}
            />

            <Box mt={3}>
              <Button variant="contained" sx={{ background: '#3DB80C', fontSize: '18px' }} onClick={handleOtp}>
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
