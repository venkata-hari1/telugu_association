import { Box, Button, Card, CardContent, FormControl, IconButton, InputAdornment, OutlinedInput, Typography } from '@mui/material'
import backgroundImg from '../../assets/BackgroundImage.png'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import {  useEffect, useState } from 'react';
import Logo from '../../assets/logo.png'
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {

  const navigate=useNavigate()

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

const [email,setEmail]=useState('')

function handleEmail(event:any){
  setEmail(event.target.value)
}

function isEmailVaild(email:any){
 const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
 return emailRegex.test(email)
}

const isEmail=isEmailVaild(email)
console.log(isEmail)

const[emailError,setEmailerror]=useState('')

useEffect(()=>{
emailHandlingError(isEmail)
},[email]) 

function emailHandlingError(isEmail:any){

  if(isEmail==false && email.length>0){
     setEmailerror("Invalid Email")
    }
  else if(isEmail==true &&email.length>0){
    setEmailerror("")
  }
}

const[pwd,setPwd]=useState('')

const [pwdError, setPwdError] = useState('');

function handlerPassword(event:any){
  
  const value=event.target.value
  setPwd(value)
  console.log(pwd)
 
if(value.length>0 && value.length<8){
   
  setPwdError("Password should be 8 charecters")
 }else{
  setPwdError("")
 }

}

return (
   <Box sx={{
    backgroundImage:`url(${backgroundImg})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: '100vh', 
    width: '100%',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'column',
    overflowX:'hidden'
   }}>

  <Box  component="img"
  src={Logo} sx={{
    width: 150,
    height: 'auto'}}/>

  <Card sx={{ width: 400, p: 3, boxShadow: 3,background:'#f0f3d3',
    display:'flex',justifyContent:'center',flexDirection:'column' }}>
  
  <CardContent>
    <Typography variant="h5" align="center" gutterBottom
    color='#3DB80C' >
            Login
    </Typography>
    <FormControl fullWidth size='small' variant="outlined">
      <Typography variant="subtitle2" sx={{ mb: 0.5,fontWeight:700 }}>
              Email ID
            </Typography>
        <OutlinedInput id="email" type='email'
        onChange={handleEmail} 
        placeholder='Your Email ID'
          sx={{
        backgroundColor: 'white',
        '& .MuiOutlinedInput-notchedOutline': {
        borderColor: '#3DB80C',
        },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#3DB80C',
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#3DB80C',
          }
        }}
          />
    </FormControl>
    {emailError&&<Typography color='red'>{emailError}</Typography>}
   
    <FormControl fullWidth margin="normal"  size='small' variant="outlined">
            
      <Typography variant="subtitle2" sx={{ mb: 0.5, fontWeight:700 }}>
             Password
      </Typography>
            <OutlinedInput id="password" type={currenttype}  
             onChange={handlerPassword}
             placeholder='Your Password' 
              sx={{
            backgroundColor: 'white',
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: '#3DB80C',
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: '#3DB80C',
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: '#3DB80C',
            }
          }}
            
             endAdornment={
              <InputAdornment position="end">
               <IconButton edge="end">
            
               {!currentshow&& <VisibilityOffIcon onClick={showcurrentPassword} sx={{cursor:'pointer'}}/> } 
                    {currentshow&& <VisibilityIcon onClick={hidecurrentPassword} sx={{cursor:'pointer'}}/>}
        </IconButton>
               </InputAdornment> 
            }
            />
     </FormControl>
    {pwdError && <Typography color='red'>{pwdError}</Typography>}

    <Box display='flex' justifyContent="flex-end">
      <Typography sx={{cursor:'pointer',textDecoration:'underline'}} 
      onClick={() => {navigate('/adminforgot')
      }}>Forgot Password?</Typography>
    </Box>
     <Box display="flex" justifyContent="center">
      
      <Button
            variant="contained"
            disabled={!isEmail || pwd.length<8}
            sx={{ mt: 3, backgroundColor: '#3DB80C',width:"100px" }}
          >
            Login
      </Button>
      
      </Box> 
    </CardContent>  
  </Card>
</Box>
  )
}

export default AdminLogin
