import Visibility from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import {
  Dialog,
  DialogContent,
  Box,
  Grid,
  Typography,
  TextField,
  InputAdornment,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../../Redux/Store";
import {
  setLogin,
  setForgetPassword,
} from "../../../Redux/UserFlow";
import Fb from "../../../assets/fb2.png";
import Googleimg from "../../../assets/google.png";
import { useNavigate } from "react-router-dom";
import { showToast } from "../../../Utils/ShowToast";

type IProps = {
  value: string;
};

declare global {
  interface Window {
    FB: any;
  }
}

export default function Login({ value }: IProps) {
  const login = useSelector((state: RootState) => state.userFlow.login);
  const dispatch = useDispatch<AppDispatch>();
  const theme = useTheme();
  const display = useMediaQuery(theme.breakpoints.down('lg'));

  const [currentshow, setCurrentShow] = useState(false);
  const [currenttype, setCurrentType] = useState("password");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [emailTouched, setEmailTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);

  const [isFormValid, setIsFormValid] = useState(false);
  const navigate = useNavigate();

  const FACEBOOK_APP_ID = '633072536472101'; 

  function showcurrentPassword() {
    setCurrentShow(true);
    setCurrentType("text");
  }

  function hidecurrentPassword() {
    setCurrentShow(false);
    setCurrentType("password");
  }

  const validateEmail = (value: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };

  useEffect(() => {
    if (emailTouched) {
      setEmailError(validateEmail(email) ? "" : "Invalid email format");
    }

    if (passwordTouched) {
      setPasswordError(password.length >= 6 ? "" : "Minimum 6 characters required");
    }

    setIsFormValid(validateEmail(email) && password.length >= 6);

    if (!window.FB) {
      console.warn('Facebook SDK not loaded. Ensure the script is in public/index.html');
      return;
    }

    if (!window.FB._initialized) {
      window.FB.init({
        appId: FACEBOOK_APP_ID,
        cookie: true,
        xfbml: true,
        version: 'v19.0'
      });
      window.FB._initialized = true;
      console.log('Facebook SDK Initialized from Login.tsx');

      window.FB.getLoginStatus(function(response: any) {
        if (response.status === 'connected') {
          console.log('User is already logged into Facebook.');
        } else {
          console.log('User is not logged into Facebook.');
        }
      });
    }
  }, [email, password, emailTouched, passwordTouched]);

  const handleRegister = () => {
    dispatch(setLogin(false));
  };

  const handleForgetPassword = () => {
    dispatch(setForgetPassword(true));
    dispatch(setLogin(false));
  };

  const handleLogin = () => {
    setEmail("");
    setPassword("");
    setEmailError("");
    setPasswordError("");
    setEmailTouched(false);
    setPasswordTouched(false);
    
    localStorage.setItem('isAuthenticated', 'true');

    showToast(true, 'Login Successfully!');
    navigate('/');
    if (value === "member") {
      localStorage.setItem("member", "member");
    }
    setTimeout(() => {
      dispatch(setLogin(false));
    }, 500);
  };

  // fb component
  const handleFacebookLogin = () => {
    if (!window.FB) {
      console.error('Facebook SDK not available.');
      showToast(false, 'Facebook login not available. Please try again.');
      return;
    }

    window.FB.login(function (response: any) {
      if (response.authResponse) {
        console.log('Facebook login successful. Attempting to fetch user info...');
        window.FB.api('/me', { fields: 'id,name,email' }, function (userResponse: any) {
          if (userResponse && userResponse.id && userResponse.name && userResponse.email) {
            console.log('Good to see you, ' + userResponse.name + '.');
            console.log('User email: ' + userResponse.email);

            localStorage.setItem('isAuthenticated', 'true');

            showToast(true, `Logged in with Facebook as ${userResponse.name}!`);
            dispatch(setLogin(false));
            navigate('/');
            if (value === "member") {
              localStorage.setItem("member", "member");
            }
          } else {
            console.error('Facebook API response missing required user data (id, name, or email).', userResponse);
            showToast(false, 'Facebook login failed: Essential user data missing or permission denied.');
            localStorage.removeItem('isAuthenticated');
            dispatch(setLogin(true));
          }
        });
      } else {
        console.log('User cancelled Facebook login or did not fully authorize.');
        showToast(false, 'Facebook login cancelled or not authorized.');
        localStorage.removeItem('isAuthenticated');
        dispatch(setLogin(true));
      }
    }, { scope: 'public_profile,email' });
  };

  const handleClose = () => {
    dispatch(setLogin(false));
  };

  return (
    <Dialog open={login} onClose={handleClose}>
      <DialogContent>
        <Box display="flex" justifyContent="center" alignItems="center">
          <Grid
            container
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: display ? "" : "40px",
              width: "450px", // Fixed width for the entire login form container
              borderRadius: "15px",
              gap: 2,
            }}
          >
            <>
                <Typography variant="h6">Login</Typography>
                <Typography>
                  Don’t have an account?
                  <Typography
                    color="#3DB80C"
                    component="span"
                    sx={{ cursor: "pointer" }}
                    onClick={handleRegister}
                  >
                    {" "}
                    Register{" "}
                  </Typography>
                </Typography>

                <Grid item xs={12} component="div" sx={{ width: '100%' }}> {/* Ensure this Grid item takes full width */}
                  <Typography fontWeight="500">Email ID</Typography>
                  <TextField
                    type="email"
                    size="small"
                    placeholder="Your Email id"
                    fullWidth
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onBlur={() => setEmailTouched(true)}
                    error={emailTouched && !!emailError}
                    helperText={emailTouched && emailError}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": { borderColor: "#3DB80C" },
                        "&:hover fieldset": { borderColor: "#3DB80C" },
                        "&.Mui-focused fieldset": { borderColor: "#3DB80C" },
                      },
                      background: "white",
                    }}
                  />
                </Grid>

                <Grid item xs={12} component="div" sx={{ width: '100%' }}> {/* Ensure this Grid item takes full width */}
                  <Typography fontWeight="500">Password</Typography>
                  <TextField
                    type={currenttype}
                    size="small"
                    placeholder="Your Password"
                    fullWidth
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onBlur={() => setPasswordTouched(true)}
                    error={passwordTouched && !!passwordError}
                    helperText={passwordTouched && passwordError}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          {!currentshow ? (
                            <VisibilityOffIcon
                              onClick={showcurrentPassword}
                              sx={{ cursor: "pointer" }}
                            />
                          ) : (
                            <Visibility
                              onClick={hidecurrentPassword}
                              sx={{ cursor: "pointer" }}
                            />
                          )}
                        </InputAdornment>
                      ),
                    }}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": { borderColor: "#3DB80C" },
                        "&:hover fieldset": { borderColor: "#3DB80C" },
                        "&.Mui-focused fieldset": { borderColor: "#3DB80C" },
                      },
                      background: "white",
                    }}
                  />
                  <Box display="flex" justifyContent="flex-end">
                    <Typography sx={{ cursor: "pointer" }} onClick={handleForgetPassword}>
                      Forgot password?
                    </Typography>
                  </Box>
                </Grid>

                <Typography>Or</Typography>
                <Box sx={{ display: 'flex', justifyContent: display ? 'center' : 'space-between', width: display ? "100%" : "30%", gap: '20px' }}>
                  <Box
                    component="img"
                    src={Fb}
                    sx={{ width: "40px", height: "40px", objectFit: "cover", cursor: "pointer" }}
                    onClick={handleFacebookLogin}
                  />
                  <Box
                    component="img"
                    src={Googleimg}
                    sx={{ width: "40px", height: "40px", objectFit: "cover", cursor: "pointer" }}
                  />
                </Box>

                <Box display="flex" flexDirection="column" sx={{ width: '100%' }} > {/* Ensure this Box takes full width */}
                  <Button
                    variant="contained"
                    sx={{ background: "#3DB80C" }}
                    onClick={handleLogin}
                    disabled={!isFormValid}
                  >
                    Submit
                  </Button>
                </Box>
              </>
          </Grid>
        </Box>
      </DialogContent>
    </Dialog>
  );
}