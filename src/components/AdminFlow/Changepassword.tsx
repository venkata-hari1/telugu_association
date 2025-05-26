import { Box, Button, Grid, TextField, Typography } from "@mui/material"
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Changepassword =() => {

const navigate=useNavigate()

 const[currentshow,setCurrentShow]=useState(false)
 const[newshow,setNewShow]=useState(false)
 const[confirmshow,setConfirmShow]=useState(false)

 const [currenttype,setCurrentType]=useState("password")
 const [newtype,setNewType]=useState("password")
 const [confirmtype,setConfirmType]=useState("password")

 function showcurrentPassword(){
  setCurrentShow(true) 
  setCurrentType("text")     
}
function hidecurrentPassword(){
  setCurrentShow(false)
  setCurrentType("password")
}

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
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="90vh">
            
    <Grid container 
    sx={{display:'flex',flexDirection:'column',
    justifyContent:'center',alignItems:'center',
    background:'#E4EFC585',
    padding:"40px",
    width:"450px",
    borderRadius:'15px',
    gap:2}}>
        <Typography color="#3DB80C" variant="h5">Change Password</Typography>
        <Grid size={{lg:12,md:12,xs:12,sm:12}}>
         <Typography fontWeight="500">Current Password</Typography>     
        </Grid>
        <Grid size={{lg:12,md:12,xs:12,sm:12}}>
         <TextField  
          type={currenttype}
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
                {!currentshow&& <VisibilityOffIcon onClick={showcurrentPassword} sx={{cursor:'pointer'}}/> } 
                {currentshow&& <Visibility onClick={hidecurrentPassword} sx={{cursor:'pointer'}}/>}
              </InputAdornment>
            ),
          },
        }}
          />     
        </Grid>
       <Grid size={{lg:12,md:12,xs:12,sm:12}}>
         <Typography fontWeight="500">New Password</Typography>     
        </Grid>

         <Grid size={{lg:12,md:12,xs:12,sm:12}}>
         <TextField  
          type={newtype}
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
            <Button variant="contained" sx={{background:'#3DB80C'}}>Submit</Button>
           <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',pt:2}}>
           <ArrowBackIcon fontSize="small"/><Typography component="p" onClick={()=>navigate('/admin/profile')}
            sx={{cursor:'pointer'}}>Back to Profile</Typography>
           </Box>
        </Box>

      </Grid>


    </Box>
  )
}

export default Changepassword
