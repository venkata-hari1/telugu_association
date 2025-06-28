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

// Extend the Window interface for global objects
declare global {
  interface Window {
    FB: any;
    google: any;
    gapi: any;
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

  // Configuration
  const FACEBOOK_APP_ID = '633072536472101';
  const GOOGLE_CLIENT_ID = '736560205496-pnlvrcnv0345lu503eocb99rh4b7vpvn.apps.googleusercontent.com'; // Replace with your actual Google Client ID

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

    // Initialize Facebook SDK
    if (window.FB && !window.FB._initialized) {
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
    } else if (!window.FB) {
      console.warn('Facebook SDK not loaded. Ensure the script is correctly placed in public/index.html.');
    }

    // Initialize Google Sign-In
    initializeGoogleSignIn();

  }, [email, password, emailTouched, passwordTouched]);

  const initializeGoogleSignIn = () => {
    // Method 1: Using Google Identity Services (recommended)
    if (window.google && window.google.accounts) {
      try {
        window.google.accounts.id.initialize({
          client_id: GOOGLE_CLIENT_ID,
          callback: handleGoogleCredentialResponse,
          auto_select: false,
          cancel_on_tap_outside: true,
        });
        console.log('Google Identity Services initialized');
      } catch (error) {
        console.error('Error initializing Google Identity Services:', error);
      }
    }
    // Method 2: Fallback to legacy gapi (if needed)
    else if (window.gapi) {
      window.gapi.load('auth2', () => {
        if (!window.gapi.auth2.getAuthInstance()) {
          window.gapi.auth2.init({
            client_id: GOOGLE_CLIENT_ID,
          }).then(() => {
            console.log('Google API initialized (legacy)');
          }).catch((error: any) => {
            console.error('Error initializing Google API:', error);
          });
        }
      });
    } else {
      console.warn('Google SDK not loaded. Ensure the script is correctly placed in public/index.html.');
    }
  };

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
    dispatch(setLogin(false));
  };

  // Facebook Login Implementation
  const handleFacebookLogin = () => {
    if (!window.FB) {
      console.error('Facebook SDK not available. Cannot initiate login.');
      showToast(false, 'Facebook login is not available. Please try again.');
      return;
    }

    window.FB.login(function (response: any) {
      if (response.authResponse) {
        console.log('Facebook login successful. Access Token:', response.authResponse.accessToken);

        window.FB.api('/me', { fields: 'id,name,email' }, function (userResponse: any) {
          if (userResponse && userResponse.id) {
            console.log('Good to see you, ' + userResponse.name + '.');
            console.log('User email from Facebook: ' + (userResponse.email || 'Not provided'));

            localStorage.setItem('isAuthenticated', 'true');
            showToast(true, `Logged in with Facebook as ${userResponse.name}!`);
            dispatch(setLogin(false));
            navigate('/');
            if (value === "member") {
              localStorage.setItem("member", "member");
            }
          } else {
            console.error('Facebook API response missing required user data (id or name).', userResponse);
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

  // Google Login Implementation - Method 1: Using Google Identity Services
  const handleGoogleCredentialResponse = (response: any) => {
    try {
      // Decode the JWT token to get user information
      const token = response.credential;
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      }).join(''));

      const userInfo = JSON.parse(jsonPayload);
      console.log('Google login successful:', userInfo);

      // IMPORTANT: In production, send the token to your backend for verification
      // DO NOT rely solely on client-side token decoding for security

      localStorage.setItem('isAuthenticated', 'true');
      showToast(true, `Logged in with Google as ${userInfo.name}!`);
      dispatch(setLogin(false));
      navigate('/');
      if (value === "member") {
        localStorage.setItem("member", "member");
      }
    } catch (error) {
      console.error('Error processing Google credential:', error);
      showToast(false, 'Google login failed. Please try again.');
    }
  };

  // Google Login Implementation - Method 2: Using popup (fallback)
  const handleGoogleLogin = () => {
  // Use Google OAuth popup only — avoids all FedCM issues
  if (window.google && window.google.accounts && window.google.accounts.oauth2) {
    const client = window.google.accounts.oauth2.initTokenClient({
      client_id: GOOGLE_CLIENT_ID,
      scope: 'profile email',
      callback: (response: any) => {
        if (response.access_token) {
          fetch(`https://www.googleapis.com/oauth2/v2/userinfo?access_token=${response.access_token}`)
            .then(res => res.json())
            .then(userInfo => {
              console.log('Google login success (popup):', userInfo);
              localStorage.setItem('isAuthenticated', 'true');
              showToast(true, `Logged in with Google as ${userInfo.name}!`);
              dispatch(setLogin(false));
              navigate('/');
              if (value === "member") {
                localStorage.setItem("member", "member");
              }
            })
            .catch(error => {
              console.error('User info fetch failed:', error);
              showToast(false, 'Google login failed. Please try again.');
            });
        } else {
          showToast(false, 'Google access token not returned.');
        }
      },
    });
    client.requestAccessToken();
  } else {
    console.error('Google SDK not available.');
    showToast(false, 'Google login is not available. Please ensure you have internet access.');
  }
};


  const showGoogleOneTapFallback = () => {
    // Alternative: trigger the Google popup directly
    if (window.google && window.google.accounts && window.google.accounts.oauth2) {
      const client = window.google.accounts.oauth2.initTokenClient({
        client_id: GOOGLE_CLIENT_ID,
        scope: 'profile email',
        callback: (response: any) => {
          if (response.access_token) {
            // Use the access token to get user info
            fetch(`https://www.googleapis.com/oauth2/v2/userinfo?access_token=${response.access_token}`)
              .then(res => res.json())
              .then(userInfo => {
                console.log('Google login successful (OAuth2):', userInfo);
                localStorage.setItem('isAuthenticated', 'true');
                showToast(true, `Logged in with Google as ${userInfo.name}!`);
                dispatch(setLogin(false));
                navigate('/');
                if (value === "member") {
                  localStorage.setItem("member", "member");
                }
              })
              .catch(error => {
                console.error('Error fetching user info:', error);
                showToast(false, 'Google login failed. Please try again.');
              });
          }
        },
      });
      client.requestAccessToken();
    }
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
              width: "450px",
              borderRadius: "15px",
              gap: 2,
            }}
          >
            <Typography variant="h6">Login</Typography>
            <Typography>
              Don't have an account?
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

            <Grid size={{xs:12}}>
              <Typography fontWeight="500">Email ID</Typography>
            </Grid>
            <Grid size={{xs:12}}>
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

            <Grid size={{xs:12}}>
              <Typography fontWeight="500">Password</Typography>
            </Grid>
            <Grid size={{xs:12}}>
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
            <Box sx={{ display:'flex',justifyContent:display?'center':'space-between',width: display?"100%":"30%", gap: '20px' }}>
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
                onClick={handleGoogleLogin} // Now fully functional
              />
            </Box>

            <Box display="flex" flexDirection="column" sx={{width:display?'100%':'30%'}} >
              <Button
                variant="contained"
                sx={{ background: "#3DB80C" }}
                onClick={handleLogin}
                disabled={!isFormValid}
              >
                Submit
              </Button>
            </Box>
          </Grid>
        </Box>
      </DialogContent>
    </Dialog>
  );
}