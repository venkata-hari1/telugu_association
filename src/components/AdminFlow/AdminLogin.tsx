
import { Box, Button, Card, CardContent, FormControl, IconButton, InputAdornment, OutlinedInput, Typography } from '@mui/material'
import backgroundImg from '../../assets/BackgroundImage.png'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import {  Fragment, useEffect, useState } from 'react';
import Logo from '../../assets/logo.png'
import { useNavigate } from 'react-router-dom';
import { showToast } from '../../Utils/ShowToast';
import { useDispatch, useSelector } from 'react-redux';
  import { loginUser } from '../../fetures/auth/authSlice';
import { AppDispatch } from '../../Redux/Store';





const AdminLogin = () => {

  const navigate=useNavigate()
  const dispatch = useDispatch<AppDispatch>();
  const { signInUser, loading, error, } = useSelector((state: any) => state.login)
  const [email,setEmail]=useState<string>('')
  const[pwd,setPwd]=useState<string>('')

const [pwdError, setPwdError] = useState('');
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


function handleEmail(event:any){
  setEmail(event.target.value)
}

function isEmailVaild(email:any){
 const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
 return emailRegex.test(email)
}

const isEmail=isEmailVaild(email)
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



function handlerPassword(event: any) {
  const newPassword = event.target.value;
  setPwd(newPassword);
  if (newPassword.length === 0) {
    setPwdError("Password is required");
  } else if (newPassword.length < 8) {
    setPwdError("Password should be at least 8 characters");
  }  else {
    setPwdError("");
  }
}


 const handleLogin = async() => {
  try{
  const data={
    email:email,
    password:pwd
  }
const response = await dispatch(loginUser({data:data}));
const fullfilled=response.payload
  if (fullfilled.status) {
    showToast(true, fullfilled.message);
    setEmail("");
  setPwd("");
  setEmailerror("");
  setPwdError("");
    setTimeout(()=>{ navigate('/admin/dashboard')},200)
  } else {
    showToast(false,fullfilled.message );
  }
}
 
 catch(error){}
 finally{

 }
}


return (
  <Fragment>

   <Box 
   sx={{
    backgroundImage: `url(${backgroundImg})`,
    backgroundSize: 'cover',           
    backgroundRepeat: 'no-repeat',      
    backgroundPosition: 'contain',
    backgroundAttachment: 'fixed',     
    minHeight: '100vh',                
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    overflowY: 'hidden',
  }}
   >

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
         value={email}
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
            value={pwd} 
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
      

      {/* <Button
  variant="contained"
  disabled={!isEmail || pwd.length < 8 || loading}

  sx={{ mt: 3, backgroundColor: '#3DB80C', width: "100px" }}
>
  {loading ? 'Logging in...' : 'Login'}
</Button> */}

<form onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
  {/* Email input */}
  {/* Password input */}
  
  <Button
    type="submit"
    variant="contained"
    disabled={!isEmail || pwd.length < 8 || loading}
    sx={{ mt: 3, backgroundColor: '#3DB80C', width: "100px" }}
  >
    {loading ? 'Logging in...' : 'Login'}
  </Button>
</form>


      
      </Box> 
    </CardContent>  
  </Card>
</Box>
</Fragment>
  )
}

export default AdminLogin
