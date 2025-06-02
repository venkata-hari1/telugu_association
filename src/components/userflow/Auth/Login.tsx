import { Box, Button, Dialog, DialogContent, Grid, TextField, Typography } from "@mui/material"
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useState } from "react";
import Fb from '../../../assets/fb.png'
import Googleimg from '../../../assets/google.png'

type IProps={
  value:boolean
  handleGetValue:(t:boolean)=>void
}
export default function Login({value,handleGetValue}:IProps) {

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

const handleRegister=()=>{
  handleGetValue(false)
}
  return (
    <Dialog open={value}>
      <DialogContent>
     <Box display="flex" justifyContent="center" alignItems="center">          
        <Grid container 
        sx={{display:'flex',flexDirection:'column',
        justifyContent:'center',alignItems:'center',
   
        padding:"40px",
        width:"450px",
        borderRadius:'15px',
        gap:2}}>
            <Typography  variant="h6">Login</Typography>
            <Typography >Don’t have an account?
             <Typography color="#3DB80C" component="span" sx={{cursor:'pointer'}} onClick={handleRegister}>  Register </Typography></Typography>
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
            <Box display="flex" justifyContent="space-between" sx={{width:'30%'}}> 
             <Box component="img" src={Fb} sx={{width:'50px', height:'50px',objectFit:'cover'}}/>
             <Box component="img" src={Googleimg} sx={{width:'40px',marginTop:'6px',height:'40px',objectFit:'cover'}}/>
            </Box>
          
          <Box display="flex" flexDirection="column">
                <Button variant="contained" sx={{background:'#3DB80C'}}>Submit</Button>
              
            </Box>
    
          </Grid>
    
    
        </Box>
        </DialogContent>
    </Dialog>
  )
}
