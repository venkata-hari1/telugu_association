import { Box, Button, Grid, TextField, Typography } from "@mui/material"
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useState } from "react";
import Fb2 from '../../../assets/fb2.png'
import Googleimg from '../../../assets/google.png'


export default function Login() {

 const[currentshow,setCurrentShow]=useState(false)
 
 const [currenttype,setCurrentType]=useState("password")
 
 function showcurrentPassword(){
  setCurrentShow(true) 
  setCurrentType("text")     
}
function hidecurrentPassword(){
  setCurrentShow(false)
  setCurrentType("password")
}


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
            <Typography  variant="h6">Login</Typography>
            <Typography >Don’t have an account?
             <Typography color="#3DB80C" component="span">  Register </Typography></Typography>
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
            
            
            <Grid size={{lg:12,md:12,xs:12,sm:12}}>
             <Typography fontWeight="500">Current Password</Typography>     
            </Grid>
            <Grid size={{lg:12,md:12,xs:12,sm:12}}>
             <TextField  
              type={currenttype}
              size="small"
              placeholder="Your Password"
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
    
               slotProps={{
              input: {
                endAdornment: (
                  <InputAdornment position="end">
                    {!currentshow&& <VisibilityOffIcon onClick={showcurrentPassword} sx={{cursor:'pointer'}}/> } 
                    {currentshow&& <Visibility onClick={hidecurrentPassword} sx={{cursor:'pointer'}}/>}
                  </InputAdornment>
                ),
              },
            }}
              />   
             <Box display="flex" justifyContent="flex-end"> 
             <Typography >Forgot password?</Typography>  
             </Box> 
            </Grid>
            <Typography>Or</Typography>
           
            <Box display="flex" alignItems="center" justifyContent="center"> 
             <Box component="img" src={Fb2} sx={{width:'40px', height:'40px',marginTop:"-10px"}}/>
             <Box component="img" src={Googleimg} sx={{width:'40px',height:'40px'}}/>
            </Box>
          
          <Box display="flex" flexDirection="column">
                <Button variant="contained" sx={{background:'#3DB80C'}}>Submit</Button>
              </Box>
    
          </Grid>
    
    
        </Box>
  )
}
