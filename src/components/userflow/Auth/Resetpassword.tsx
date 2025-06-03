import { Box, Button, Dialog, DialogContent, Grid, TextField, Typography } from "@mui/material"
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../Redux/Store";


const Resetpassword = () => {
 const[newshow,setNewShow]=useState(false)
 const[confirmshow,setConfirmShow]=useState(false)
 const [newtype,setNewType]=useState("password")
 const [confirmtype,setConfirmType]=useState("password")
 const value=useSelector((state:RootState)=>state.userFlow.newPassword)
function shownewPassword(){
  setNewShow(true)
  setNewType("text")

}
function hidenewPassword(){
  setNewShow(false)
  setNewType("password")

}

function showconfirmPassword(){
  setConfirmShow(true)
  setConfirmType("text")
}

function hideconfirmPassword(){
  setConfirmShow(false)
  setConfirmType("password")
}
  return (
    <Dialog open={value}>
      <DialogContent>
      <Box display="flex" justifyContent="center" alignItems="center">
            
            <Grid container 
            sx={{display:'flex',flexDirection:'column',
            justifyContent:'center',alignItems:'center',
            background:'#ffffff',
            padding:"40px",
            width:"450px",
            borderRadius:'15px',
            gap:2}}>
                <Typography color="#3DB80C" variant="h5">Reset Your Password</Typography>
                
              
               <Grid size={{lg:12,md:12,xs:12,sm:12}}>
                 <Typography fontWeight="500">Password</Typography>     
                </Grid>
        
                 <Grid size={{lg:12,md:12,xs:12,sm:12}}>
                <TextField  
                  type={newtype}
                  placeholder="Enter Password"
                  size="small"
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
                        {!newshow&& <VisibilityOffIcon onClick={shownewPassword}/> } 
                        {newshow&& <Visibility onClick={hidenewPassword} sx={{cursor:'pointer'}}/>}
                      </InputAdornment>
                    ),
                  },
                }}/>     
                        
                </Grid>
        
                <Grid size={{lg:12,md:12,xs:12,sm:12}}>
                 <Typography fontWeight="500">Confirm Password</Typography>     
                </Grid>
        
                 <Grid size={{lg:12,md:12,xs:12,sm:12}}>
                 <TextField  
                  type={confirmtype}
                  placeholder="Confirm Password"
                  size="small"
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
                      background:'white',
                      
        
                    }}
        
                   slotProps={{
                  input: {
                    endAdornment: (
                        <InputAdornment position="end">
                        {!confirmshow&& <VisibilityOffIcon onClick={showconfirmPassword} sx={{cursor:'pointer'}}/> } 
                        {confirmshow&& <Visibility onClick={hideconfirmPassword} sx={{cursor:'pointer'}}/>}
                      </InputAdornment>
        
                    ),
                  },
                }}/>     
                </Grid>
                <Box display="flex" flexDirection="column">
                    <Button variant="contained" sx={{background:'#3DB80C'}}>Continue</Button>
                  
                </Box>
        
              </Grid>
        
        
            </Box>
      </DialogContent>
     
    </Dialog>


  )
}

export default Resetpassword