import { useEffect, useState } from "react";
import {
  Box,
  Button,
  Divider,
  FormControlLabel,
  Grid,
  Paper,
  Radio,
  RadioGroup,
  TextField,
  Typography,
  IconButton,
  InputAdornment
} from "@mui/material";
import { Fragment } from "react/jsx-runtime";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../Redux/Store";
import { setLogin, } from "../../../Redux/UserFlow";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import PopUp1 from "../../../Utils/PopUp1";
import PopUp2 from "../../../Utils/PopUp2";
import Login from "./Login";
import Resetpassword from "./Resetpassword";
import Forgotpassword from "./Forgotpassword";
import Otpinput from "./Otpinput";

const Registration = () => {
  const dispatch = useDispatch<AppDispatch>();
  const[open,setOpen]=useState(false)
const[display,setDisplay]=useState(false)
  const [formData, setFormData] = useState<{
    firstName: string;
    lastName: string;
    email: string;
    mobileNumber: string;
    password: string;
    confirmPassword: string;
    state: string;
    city: string;
    country: string;
    zipCode: string;
    address1: string;
    address2: string;
    membershipType: string;
    paymentMethod: string;
  }>({
    firstName: '',
    lastName: '',
    email: '',
    mobileNumber: '',
    password: '',
    confirmPassword: '',
    state: '',
    city: '',
    country: '',
    zipCode: '',
    address1: '',
    address2: '',
    membershipType: '0',
    paymentMethod: ''
  });

  const [errors, setErrors] = useState<{
    firstName: string;
    lastName: string;
    email: string;
    mobileNumber: string;
    password: string;
    confirmPassword: string;
    state: string;
    city: string;
    country: string;
    zipCode: string;
    address1: string;
    membershipType: string;
    paymentMethod: string;
  }>({
    firstName: '',
    lastName: '',
    email: '',
    mobileNumber: '',
    password: '',
    confirmPassword: '',
    state: '',
    city: '',
    country: '',
    zipCode: '',
    address1: '',
    membershipType: '',
    paymentMethod: ''
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
 const[badge,setBadge]=useState('')
 const[membershipAmount,setMemberShipAmount]=useState('')
 const[disabled,setDisabled]=useState(true)
 useEffect(()=>{
   const plan=localStorage.getItem('plan') || ''
   setBadge(plan)
 },[badge])
  // Validate individual field
  const validateField = (name: string, value: string): string => {
    switch (name) {
      case 'firstName':
        return value.trim().length < 3 ? 'First name must be at least 3 characters' : '';
      case 'lastName':
        return value.trim().length < 3 ? 'Last name must be at least 3 characters' : '';
      case 'email':
        return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? 'Invalid email format' : '';
      case 'mobileNumber':
        return !/^\d{10}$/.test(value.replace(/[\(\)\-\s]/g, '')) ? 'Invalid phone number (10 digits required)' : '';
      case 'password':
        return value.length < 6 ? 'Password must be at least 6 characters' : '';
      case 'confirmPassword':
        return value !== formData.password ? 'Passwords do not match' : '';
      case 'state':
        return !value.trim() ? 'State is required' : '';
      case 'city':
        return !value.trim() ? 'City is required' : '';
      case 'country':
        return !value.trim() ? 'Country is required' : '';
      case 'zipCode':
        return !/^\d{5}$/.test(value) ? 'Invalid zip code (5 digits required)' : '';
      case 'address1':
        return !value.trim() ? 'Address is required' : '';
      case 'membershipType':
        return !value ? 'Membership type is required' : '';
      case 'paymentMethod':
        return !value ? 'Payment method is required' : '';
      default:
        return '';
    }
  };

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: validateField(name, value) }));
    if (name === 'password') {
      setErrors(prev => ({
        ...prev,
        confirmPassword: formData.confirmPassword && value !== formData.confirmPassword ? 'Passwords do not match' : ''
      }));
    }
  };

  // Toggle password visibility
  const handleTogglePassword = () => {
    setShowPassword(prev => !prev);
  };

  // Toggle confirm password visibility
  const handleToggleConfirmPassword = () => {
    setShowConfirmPassword(prev => !prev);
  };

  // Get amount based on membership type


  // Handle form submission
  const handleSubmit = () => {
    if (isFormValid()) {
  
      setShowPassword(false);
      setShowConfirmPassword(false);
    }
    setDisplay(true)
  };

  // Check if form is valid
  const isFormValid = (): boolean => {
    return (
      formData.firstName.trim().length >= 3 &&
      formData.lastName.trim().length >= 3 &&
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) &&
      /^\d{10}$/.test(formData.mobileNumber.replace(/[\(\)\-\s]/g, '')) &&
      formData.password.length >= 6 &&
      formData.confirmPassword === formData.password &&
      formData.state.trim().length > 0 &&
      formData.city.trim().length > 0 &&
      formData.country.trim().length > 0 &&
      /^\d{5}$/.test(formData.zipCode) &&
      formData.address1.trim().length > 0 &&
      !!formData.membershipType &&
      !!formData.paymentMethod &&
      Object.values(errors).every(error => !error)
    );
  };

  const handleLogin = () => {
    dispatch(setLogin(true));
  };
const handlePlan=(e:any)=>{
  const plan=e.target.value
  switch(plan){
    case 'One Year':{
      setMemberShipAmount('45')
      break;
    }
    case 'Two Years':{
      setMemberShipAmount('80')
      break;
    }
    case 'Lifetime':{
      setMemberShipAmount('500')
      break;
    }
  }
localStorage.setItem('plan',plan)
setBadge(e.target.values)
setDisabled(false)


}
const handleClose=(t:boolean)=>{
  setOpen(t)
}
const handleDisplay=(data:{value:boolean,message:string})=>{
setDisplay(data.value)
if(data?.message==='confirm'){
  dispatch(setLogin(true));
setMemberShipAmount('')
setFormData({
  firstName: '',
  lastName: '',
  email: '',
  mobileNumber: '',
  password: '',
  confirmPassword: '',
  state: '',
  city: '',
  country: '',
  zipCode: '',
  address1: '',
  address2: '',
  membershipType: '',
  paymentMethod: ''
});
}
}

  return (
    <Box p={2}>

      <PopUp1 badge={badge} open={open} handleClose={handleClose}/>
      <PopUp2 display={display} handleDisplay={handleDisplay}/>
      <Login value='member'/>
      <Forgotpassword />
      <Resetpassword />
      <Otpinput />
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography color="#3DB80C" fontWeight="700">
          Member Registration
        </Typography>
      </Box>

      <Paper
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          p: 1,
          margin: "auto",
          marginTop: "10px",
          marginBottom: "10px",
          width: "100%",
        }}
      >
        <Typography sx={{ fontSize: 14, fontWeight: 600 }}>
          Already have an account?{" "}
          <Typography component="span" color="#3DB80C" sx={{ cursor: "pointer" }} onClick={handleLogin}>
            Log In
          </Typography>
        </Typography>
      </Paper>

      {/* Form fields */}
      <Grid container spacing={3} sx={{ padding: { xs: '20px', md: '20px', lg: '2px' } }} justifyContent="center" alignItems="center" component={Paper} paddingTop={2}>
        <Grid size={{ sm: 12, md: 6 }} sx={{ width: { xs: "100%", sm: "100%", md: "40%" } }}>
          <Typography fontWeight="600">
            First Name<Typography component="span" color="red">*</Typography>
          </Typography>
          <TextField
            fullWidth
            id="first-name"
            name="firstName"
            variant="outlined"
            placeholder="Your First Name"
            size="small"
            value={formData.firstName}
            onChange={handleChange}
            error={!!errors.firstName}
            helperText={errors.firstName}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: errors.firstName ? "red" : "#3DB80C" },
                "&:hover fieldset": { borderColor: errors.firstName ? "red" : "#3DB80C" },
                "&.Mui-focused fieldset": { borderColor: errors.firstName ? "red" : "#3DB80C" },
              },
            }}
          />
        </Grid>
        <Grid size={{ sm: 12, md: 6 }} sx={{ width: { xs: "100%", sm: "100%", md: "40%" } }}>
          <Typography fontWeight="600">
            Last Name<Typography component="span" color="red">*</Typography>
          </Typography>
          <TextField
            fullWidth
            id="last-name"
            name="lastName"
            variant="outlined"
            size="small"
            placeholder="Your Last Name"
            value={formData.lastName}
            onChange={handleChange}
            error={!!errors.lastName}
            helperText={errors.lastName}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: errors.lastName ? "red" : "#3DB80C" },
                "&:hover fieldset": { borderColor: errors.lastName ? "red" : "#3DB80C" },
                "&.Mui-focused fieldset": { borderColor: errors.lastName ? "red" : "#3DB80C" },
              },
            }}
          />
        </Grid>

        <Grid size={{ sm: 12, md: 6 }} sx={{ width: { xs: "100%", sm: "100%", md: "40%" } }}>
          <Typography fontWeight="600">
            Email<Typography component="span" color="red">*</Typography>
          </Typography>
          <TextField
            fullWidth
            id="email"
            name="email"
            variant="outlined"
            placeholder="Your Email ID"
            size="small"
            type="email"
            value={formData.email}
            onChange={handleChange}
            error={!!errors.email}
            helperText={errors.email}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: errors.email ? "red" : "#3DB80C" },
                "&:hover fieldset": { borderColor: errors.email ? "red" : "#3DB80C" },
                "&.Mui-focused fieldset": { borderColor: errors.email ? "red" : "#3DB80C" },
              },
            }}
          />
        </Grid>
        <Grid size={{ sm: 12, md: 6 }} sx={{ width: { xs: "100%", sm: "100%", md: "40%" } }}>
          <Typography fontWeight="600">
            Mobile No<Typography component="span" color="red">*</Typography>
          </Typography>
          <TextField
            fullWidth
            id="mobile-no"
            name="mobileNumber"
            variant="outlined"
            size="small"
            type="text"
            placeholder="Your Mobile Number"
            value={formData.mobileNumber}
            onChange={handleChange}
            error={!!errors.mobileNumber}
            helperText={errors.mobileNumber}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: errors.mobileNumber ? "red" : "#3DB80C" },
                "&:hover fieldset": { borderColor: errors.mobileNumber ? "red" : "#3DB80C" },
                "&.Mui-focused fieldset": { borderColor: errors.mobileNumber ? "red" : "#3DB80C" },
              },
            }}
          />
        </Grid>

        <Fragment>
          <Grid size={{ sm: 12, md: 6 }} sx={{ width: { xs: "100%", sm: "100%", md: "40%" } }}>
            <Typography fontWeight="600">
              Password<Typography component="span" color="red">*</Typography>
            </Typography>
            <TextField
              fullWidth
              id="password"
              name="password"
              variant="outlined"
              placeholder="Your Password"
              size="small"
              type={showPassword ? "text" : "password"}
              value={formData.password}
              onChange={handleChange}
              error={!!errors.password}
              helperText={errors.password}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleTogglePassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: errors.password ? "red" : "#3DB80C" },
                  "&:hover fieldset": { borderColor: errors.password ? "red" : "#3DB80C" },
                  "&.Mui-focused fieldset": { borderColor: errors.password ? "red" : "#3DB80C" },
                },
              }}
            />
          </Grid>
          <Grid size={{ sm: 12, md: 6 }} sx={{ width: { xs: "100%", sm: "100%", md: "40%" } }}>
            <Typography fontWeight="600">
              Confirm Password<Typography component="span" color="red">*</Typography>
            </Typography>
            <TextField
              fullWidth
              id="confirm-password"
              name="confirmPassword"
              variant="outlined"
              size="small"
              placeholder="Confirm Password"
              type={showConfirmPassword ? "text" : "password"}
              value={formData.confirmPassword}
              onChange={handleChange}
              error={!!errors.confirmPassword}
              helperText={errors.confirmPassword}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle confirm password visibility"
                      onClick={handleToggleConfirmPassword}
                      edge="end"
                    >
                      {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: errors.confirmPassword ? "red" : "#3DB80C" },
                  "&:hover fieldset": { borderColor: errors.confirmPassword ? "red" : "#3DB80C" },
                  "&.Mui-focused fieldset": { borderColor: errors.confirmPassword ? "red" : "#3DB80C" },
                },
              }}
            />
          </Grid>

          <Grid size={{ sm: 12, md: 6 }} sx={{ width: { xs: "100%", sm: "100%", md: "40%" } }}>
            <Typography fontWeight="600">
              State<Typography component="span" color="red">*</Typography>
            </Typography>
            <TextField
              fullWidth
              id="state"
              name="state"
              variant="outlined"
              placeholder="Your State"
              size="small"
              value={formData.state}
              onChange={handleChange}
              error={!!errors.state}
              helperText={errors.state}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: errors.state ? "red" : "#3DB80C" },
                  "&:hover fieldset": { borderColor: errors.state ? "red" : "#3DB80C" },
                  "&.Mui-focused fieldset": { borderColor: errors.state ? "red" : "#3DB80C" },
                },
              }}
            />
          </Grid>
          <Grid size={{ sm: 12, md: 6 }} sx={{ width: { xs: "100%", sm: "100%", md: "40%" } }}>
            <Typography fontWeight="600">
              City<Typography component="span" color="red">*</Typography>
            </Typography>
            <TextField
              fullWidth
              id="city"
              name="city"
              variant="outlined"
              size="small"
              placeholder="Your City Name"
              type="text"
              value={formData.city}
              onChange={handleChange}
              error={!!errors.city}
              helperText={errors.city}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: errors.city ? "red" : "#3DB80C" },
                  "&:hover fieldset": { borderColor: errors.city ? "red" : "#3DB80C" },
                  "&.Mui-focused fieldset": { borderColor: errors.city ? "red" : "#3DB80C" },
                },
              }}
            />
          </Grid>

          <Grid size={{ sm: 12, md: 6 }} sx={{ width: { xs: "100%", sm: "100%", md: "40%" } }}>
            <Typography fontWeight="600">
              Country<Typography component="span" color="red">*</Typography>
            </Typography>
            <TextField
              fullWidth
              id="country"
              name="country"
              variant="outlined"
              placeholder="Your Country"
              size="small"
              value={formData.country}
              onChange={handleChange}
              error={!!errors.country}
              helperText={errors.country}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: errors.country ? "red" : "#3DB80C" },
                  "&:hover fieldset": { borderColor: errors.country ? "red" : "#3DB80C" },
                  "&.Mui-focused fieldset": { borderColor: errors.country ? "red" : "#3DB80C" },
                },
              }}
            />
          </Grid>
          <Grid size={{ sm: 12, md: 6 }} sx={{ width: { xs: "100%", sm: "100%", md: "40%" } }}>
            <Typography fontWeight="600">
              Zip Code<Typography component="span" color="red">*</Typography>
            </Typography>
            <TextField
              fullWidth
              id="zip-code"
              name="zipCode"
              variant="outlined"
              size="small"
              placeholder="Enter Zip Code"
              value={formData.zipCode}
              onChange={handleChange}
              error={!!errors.zipCode}
              helperText={errors.zipCode}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: errors.zipCode ? "red" : "#3DB80C" },
                  "&:hover fieldset": { borderColor: errors.zipCode ? "red" : "#3DB80C" },
                  "&.Mui-focused fieldset": { borderColor: errors.zipCode ? "red" : "#3DB80C" },
                },
              }}
            />
          </Grid>

          <Grid size={{ sm: 12, md: 6 }} sx={{ width: { xs: "100%", sm: "100%", md: "40%" } }}>
            <Typography fontWeight="600">
              Address1<Typography component="span" color="red">*</Typography>
            </Typography>
            <TextField
              fullWidth
              id="address1"
              name="address1"
              variant="outlined"
              placeholder="Your Address"
              multiline
              rows={3}
              size="small"
              value={formData.address1}
              onChange={handleChange}
              error={!!errors.address1}
              helperText={errors.address1}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: errors.address1 ? "red" : "#3DB80C" },
                  "&:hover fieldset": { borderColor: errors.address1 ? "red" : "#3DB80C" },
                  "&.Mui-focused fieldset": { borderColor: errors.address1 ? "red" : "#3DB80C" },
                },
              }}
            />
          </Grid>
          <Grid size={{ sm: 12, md: 6 }} sx={{ width: { xs: "100%", sm: "100%", md: "40%" } }}>
            <Typography fontWeight="600">Address 2</Typography>
            <TextField
              fullWidth
              id="address2"
              name="address2"
              variant="outlined"
              size="small"
              placeholder="Your Address2"
              multiline
              rows={3}
              value={formData.address2}
              onChange={handleChange}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "#3DB80C" },
                  "&:hover fieldset": { borderColor: "#3DB80C" },
                  "&.Mui-focused fieldset": { borderColor: "#3DB80C" },
                },
              }}
            />
          </Grid>
        </Fragment>

        <>
          <Divider sx={{ border: "1px groove #3DB80C", width: "83%" }} />

          <Grid size={{ md: 6, xs: 6 }} sx={{ width: { xs: "100%", sm: "100%", md: "40%" } }}>
            <Typography fontWeight="600">
              Membership Type<Typography component="span" color="red">*</Typography>
            </Typography>
          </Grid>
          <Grid
            size={{ md: 6, xs: 6 }}
            display="flex"
            justifyContent={{ md: "flex-end" }}
            sx={{ width: { xs: "100%", sm: "100%", md: "40%" } }}
          >
            <IconButton disabled={disabled} onClick={()=>setOpen(!open)}>
            <Typography sx={{ color: disabled?'grey':"#3DB80C", textDecoration: "underline" ,cursor:'pointer'}}>
              Membership Plan Details
            </Typography>
            </IconButton>
          </Grid>

          <Grid container sx={{ width: '85%' }}>
            <RadioGroup
              row
              value={formData.membershipType}
              onChange={(e) => handleChange({ target: { name: 'membershipType', value: e.target.value } } as any)}
            >
              <Grid container spacing={2}>
                <Grid size={{ xs: 12, md: 12, lg: 4 }}>
                  <Paper
                    variant="outlined"
                    sx={{
                      borderColor: errors.membershipType ? "red" : "#3DB80C",
                      px: 2,
                      py: 0.5,
                      borderRadius: 2,
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                      width: "100%",
                      background: "transparent",
                    }}
                  >
                    <FormControlLabel
                      value="One Year"
                      onChange={handlePlan}
                      control={<Radio size="small" />}
                      label="One Year - $45"
                      sx={{
                        m: 0,
                        "& .MuiRadio-root": { padding: "7px" },
                        width: "100%",
                        "& .MuiRadio-root.Mui-checked": { color: "#3DB80C" },
                      }}
                    />
                  </Paper>
                </Grid>
                <Grid size={{ xs: 12, md: 12, lg: 4 }}>
                  <Paper
                    variant="outlined"
                    sx={{
                      borderColor: errors.membershipType ? "red" : "#3DB80C",
                      px: 2,
                      py: 0.5,
                      borderRadius: 2,
                      display: "flex",
                      width: "100%",
                      background: "transparent",
                    }}
                  >
                    <FormControlLabel
                      value="Two Years"
                      onChange={handlePlan}               
                      control={<Radio size="small" />}
                      label="Two Years - $80"
                      sx={{
                        whiteSpace: 'nowrap',
                        m: 0,
                        "& .MuiRadio-root": { padding: "7px" },
                        width: "100%",
                        "& .MuiRadio-root.Mui-checked": { color: "#3DB80C" },
                      }}
                    />
                  </Paper>
                </Grid>
                <Grid size={{ xs: 12, md: 12, lg: 4 }}>
                  <Paper
                    variant="outlined"
                    sx={{
                      borderColor: errors.membershipType ? "red" : "#3DB80C",
                      px: 2,
                      py: 0.5,
                      borderRadius: 2,
                      display: "flex",
                      width: "100%",
                      background: "transparent",
                    }}
                  >
                    <FormControlLabel
                      value="Lifetime"
                      onChange={handlePlan}
                      control={<Radio size="small" />}
                      label="Life Time - $500"
                      sx={{
                        whiteSpace: 'nowrap',
                        m: 0,
                        "& .MuiRadio-root": { padding: "7px" },
                        width: "100%",
                        "& .MuiRadio-root.Mui-checked": { color: "#3DB80C" },
                      }}
                    />
                  </Paper>
                </Grid>
              </Grid>
            </RadioGroup>
            {errors.membershipType && (
              <Typography color="error" variant="caption" sx={{ mt: 1, ml: 2 }}>
                {errors.membershipType}
              </Typography>
            )}

            <Grid size={{ xs: 12, md: 12 }}>
              <Divider sx={{ border: "1px groove #3DB80C", width: "100%", mt: 2, mb: 2 }} />
              <Typography fontWeight="600" sx={{ mb: 1 }}>
                Payment Information<Typography component="span" color="red">*</Typography>
              </Typography>
            </Grid>

            <RadioGroup
              row
              value={formData.paymentMethod}
              onChange={(e) => handleChange({ target: { name: 'paymentMethod', value: e.target.value } } as any)}
            >
              <Grid container margin="auto" spacing={0} border={errors.paymentMethod ? "1px solid red" : "1px solid #3DB80C"}>
                <Grid size={{ xs: 6, md: 6, lg: 4 }} width="100%" p={2}>
                  <Paper
                    variant="outlined"
                    sx={{
                      borderColor: errors.paymentMethod ? "red" : "#3DB80C",
                      px: 2,
                      py: 0.5,
                      borderRadius: 2,
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                      width: "200px",
                      background: "transparent",
                    }}
                  >
                    <FormControlLabel
                      value="paypal"
                      control={<Radio size="small" />}
                      label="PayPal"
                      sx={{
                        m: 0,
                        "& .MuiRadio-root": { padding: "7px" },
                        width: "100%",
                        "& .MuiRadio-root.Mui-checked": { color: "#3DB80C" },
                      }}
                    />
                  </Paper>
                </Grid>
                <Grid size={{ xs: 6, md: 6, lg: 8 }} p={2}>
                  <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                    <Paper
                      variant="outlined"
                      sx={{
                        alignSelf: 'flex-start',
                        borderColor: errors.paymentMethod ? "red" : "#3DB80C",
                        px: 2,
                        py: 0.5,
                        borderRadius: 2,
                        display: "flex",
                        width: "200px",
                        background: "transparent",
                      }}
                    >
                      <FormControlLabel
                        value="zelle"
                        control={<Radio size="small" />}
                        label="Zelle"
                        sx={{
                          m: 0,
                          "& .MuiRadio-root": { padding: "7px" },
                          width: "100%",
                          "& .MuiRadio-root.Mui-checked": { color: "#3DB80C" },
                        }}
                      />
                    </Paper>
                  </Box>
                </Grid>

                <Grid size={{ sm: 12, md: 4 }} p={2}>
                  <Paper
                    variant="outlined"
                    sx={{
                      borderColor: "#3DB80C",
                      px: 2,
                      py: 0.5,
                      borderRadius: 2,
                      display: "flex",
                      width: "200px",
                      background: "transparent",
                    }}
                  >
                    <Box flexDirection="column" width="100%">
                      <Typography display="flex" justifyContent="space-between" component="div">
                        <Typography component="span">Subtotal:</Typography>
                        <Typography component="span">${membershipAmount}</Typography>
                      </Typography>
                      <Typography display="flex" justifyContent="space-between" component="div">
                        <Typography component="span">Tax:</Typography>
                        <Typography component="span">$0.00</Typography>
                      </Typography>
                      <Typography
                        display="flex"
                        justifyContent="space-between"
                        component="div"
                        sx={{ background: "#3DB80C", width: "100%", p: 0.5 }}
                      >
                        <Typography component="div" color="white">
                          Total:
                        </Typography>
                        <Typography component="div" color="white">
                          ${membershipAmount}
                        </Typography>
                      </Typography>
                    </Box>
                  </Paper>
                </Grid>
              </Grid>
            </RadioGroup>
            {errors.paymentMethod && (
              <Typography color="error" variant="caption" sx={{ mt: 1, ml: 2 }}>
                {errors.paymentMethod}
              </Typography>
            )}
          </Grid>
        </>

        <Box width="100%" p={2}>
          <Box display="flex" justifyContent="flex-end" sx={{ marginRight: { md: "60px" } }}>
            <Button
              variant="contained"
              sx={{ background: "#3DB80C" }}
              disabled={!isFormValid()}
              onClick={handleSubmit}
            >
              Continue
            </Button>
          </Box>
        </Box>
      </Grid>
    </Box>
  );
};

export default Registration;