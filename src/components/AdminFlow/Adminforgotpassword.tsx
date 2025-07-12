import {
  Box, Button, Card, CardContent, FormControl,
  OutlinedInput, Typography
} from '@mui/material';
import backgroundImg from '../../assets/BackgroundImage.png';
import Logo from '../../assets/logo.png';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import { Fragment, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../Redux/Store';
import { forgotPassword } from '../../Redux/authSlice';
import { showToast } from '../../Utils/ShowToast';
import Loading from '../../Utils/CircularLoader';



const Adminforgotpassword = () => {
  const {loading}=useSelector((state:RootState)=>state.login)
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
const dispatch=useDispatch<AppDispatch>()
  function handleEmailChange(event: any) {
    const value = event.target.value;
    setEmail(value);
    validateEmail(value);
  }

  function validateEmail(value: string) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (value.length === 0) {
      setEmailError('Email is required');
    } else if (!emailRegex.test(value)) {
      setEmailError('Invalid email format');
    } else {
      setEmailError('');
    }
  }
 const handleResetPassword=async()=>{
  console.log(email)
const data={
  email:email
}
const response=await dispatch(forgotPassword({data:data}))
const fullfilled=response.payload
if(fullfilled.status){
  setEmail('')
  localStorage.setItem('email',email)
  showToast(true,fullfilled.message)
  setTimeout(()=>{
    navigate('/adminotp')
  },100)
}
else{
  showToast(false,fullfilled.message)
}
  
 }
  const isFormValid = email.length > 0 && emailError === '';

  return (
    <Fragment>
      {loading&&<Loading/>}
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
      <Box component="img" src={Logo} sx={{ width: 150, height: 'auto' }} />
      <Card sx={{
        width: 400, p: 3, boxShadow: 3, background: '#f0f3d3',
        display: 'flex', justifyContent: 'center', flexDirection: 'column'
      }}>
        <CardContent>
          <Typography variant="h5" align="center" gutterBottom
            color='#3DB80C' sx={{ fontSize: '18px', fontWeight: 'bold' }}>
            Forget Password
          </Typography>
          <FormControl fullWidth size='small' variant="outlined">
            <Typography variant="subtitle2" sx={{ mb: 0.5, fontWeight: 700 }}>
              Email ID
            </Typography>
            <OutlinedInput
              id="email"
              type='email'
              value={email}
              onChange={handleEmailChange}
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
          {emailError && <Typography color="red" sx={{ mt: 1 }}>{emailError}</Typography>}

          <Box display="flex" justifyContent="center">
            <Button
              variant="contained"
              disabled={loading || !isFormValid}
              sx={{ mt: 3, backgroundColor: '#3DB80C', width: "150px" ,whiteSpace:'nowrap'}}
              onClick={handleResetPassword}
            >
              {loading?'Reset Password...':'Reset Password'}
            </Button>
          </Box>
        </CardContent>

        <CardContent>
          <Typography
            sx={{ display: 'flex', justifyContent: 'center', cursor: 'pointer' }}
            onClick={() => navigate('/login')}>
            <ArrowBackIcon /> Back to Login
          </Typography>
        </CardContent>
      </Card>
    </Box>
    </Fragment>
  );
};

export default Adminforgotpassword;