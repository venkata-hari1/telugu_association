import { Box, Button, Dialog, DialogContent, Grid, TextField, Typography } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../../../Redux/Store"
import { setForgetPassword, setOtp } from "../../../Redux/UserFlow"

const Forgotpassword = () => {
const value=useSelector((state:RootState)=>state.userFlow.forgetPassword)
const dispatch=useDispatch<AppDispatch>()
const handleSendOTP=()=>{
 dispatch(setOtp(true))
 dispatch(setForgetPassword(false))
}
return (
   <Dialog open={value}>
       <DialogContent>
  <Box display="flex" justifyContent="center" alignItems="center" 
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
                <Button variant="contained" sx={{background:'#3DB80C'}} onClick={handleSendOTP}>Send OTP</Button>
              </Box>
    
          </Grid>
    
    
        </Box>
        </DialogContent>
        </Dialog>

)
}

export default Forgotpassword