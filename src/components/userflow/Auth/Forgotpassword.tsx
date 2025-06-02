import { Box, Button, Grid, TextField, Typography } from "@mui/material"
import { useState } from "react";


const Forgotpassword = () => {

 
 

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
            <Typography  variant="h6">Forgot Password</Typography>
            <Typography >Enter Your Registered Email Address
            </Typography>
            <Typography >We will send you a 4-digit OTP to verfiy.
            </Typography>
            <Grid size={{lg:12,md:12,xs:12,sm:12}}>
             <Typography fontWeight="500">Email ID</Typography>     
            </Grid>
            <Grid size={{lg:12,md:12,xs:12,sm:12}}>
             <TextField  
              type="email"
              size="small"
              placeholder="Your Email id"
              fullWidth 
               sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: '#3DB80C',
                    },
                    '&:hover fieldset': {
                      borderColor: '#3DB80C',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#3DB80C',
                    },
                  },
                  background:'white'
                }}
    
              />     
            </Grid>
            
            
          
          
          <Box display="flex" flexDirection="column">
                <Button variant="contained" sx={{background:'#3DB80C'}}>Send OTP</Button>
              </Box>
    
          </Grid>
    
    
        </Box>


)
}

export default Forgotpassword