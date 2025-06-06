import { useState } from "react";
import {
  Box,
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
  IconButton,
  InputAdornment
} from "@mui/material";
import { Fragment } from "react/jsx-runtime";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../Redux/Store";
import { setLogin, } from "../../Redux/UserFlow";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {showToast} from "../../Utils/ShowToast";
import Login from "./Auth/Login";
import Otpinput from "./Auth/Otpinput";
import Forgotpassword from "./Auth/Forgotpassword";
import Resetpassword from "./Auth/Resetpassword";

const Volunteer = () => {
  const dispatch = useDispatch<AppDispatch>();
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
    address2: ''
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
    address1: ''
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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

  // Handle form submission
  const handleSubmit = () => {
    if (isFormValid()) {
      showToast(true,'Thank you for signing up! We’ve received your Volunteer Registration.')
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
        address2: ''
      });
      setErrors({
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
        address1: ''
      });
      setShowPassword(false);
      setShowConfirmPassword(false);
      setTimeout(()=>{
        dispatch(setLogin(true))
      },200)
    }
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
      Object.values(errors).every(error => !error)
    );
  };

  const handleLogin = () => {
    dispatch(setLogin(true));
  };

  return (
    <Box p={2}>
       <Login  value='Volunteer'/>
      <Forgotpassword />
      <Resetpassword />
      <Otpinput />

      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography color="#3DB80C" fontWeight="700">
          Volunteer Registration
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
            placeholder="Email"
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
              placeholder="Password"
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

        <Box width="100%" p={2}>
          <Box display="flex" justifyContent="flex-end" sx={{ marginRight: { md: "60px" } }}>
            <Button
              variant="contained"
              sx={{ background: "#3DB80C" }}
              disabled={!isFormValid()}
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Grid>
    </Box>
  );
};

export default Volunteer;