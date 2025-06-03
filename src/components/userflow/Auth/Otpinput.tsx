import { Box, Grid, Typography,Button, TextField } from '@mui/material'
import OTPInput from 'react-otp-input';


const Otpinput = () => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="90vh"
     >

       <Grid container 
        sx={{display:'flex',flexDirection:'column',
        justifyContent:'center',alignItems:'center',
        background:'white',
        padding:"40px",
        width:"450px",
        borderRadius:'15px',
        gap:2}}>
       <Typography  variant="h6" fontWeight="600">OTP Verification</Typography>
       <Typography   component="span" fontWeight="600" >We have sent 4-digit code to</Typography> 
       <Typography  component="span" variant="body1" fontWeight="600">your @gmail.com</Typography> 
        
        <OTPInput
          value={1}            
          numInputs={4}
          inputStyle={{
          width: '3rem',
          height: '3rem',
          margin: '0 0.5rem',
          fontSize: '1.5rem',
          borderRadius: '4px',
          border: '1px solid #3DB80C',
        }}
        renderInput={(props) => 
           <TextField
            {...props}
            variant="outlined"
            inputProps={{ style: { textAlign: 'center', fontSize: '1.5rem' } }}
            sx={{ width: '3rem', mx: 0.5 }}
          />
      
      }
      />

      <Box mt={3}>
        <Button variant="contained"  sx={{background:'#3DB80C',fontSize:'18px'}} >
          Continue
        </Button>
      </Box>
        
        
        
        </Grid>

     </Box>
  )
}

export default Otpinput
