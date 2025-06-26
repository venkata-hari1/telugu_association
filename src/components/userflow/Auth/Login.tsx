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
  useTheme // Make sure useTheme is imported for useMediaQuery
} from "@mui/material";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../../Redux/Store";
import {
  setLogin,
  setForgetPassword,
} from "../../../Redux/UserFlow";
import Fb from "../../../assets/fb2.png";
import Googleimg from "../../../assets/google.com"; // Ensure this path is correct if it's an image
import { useNavigate } from "react-router-dom";
import { showToast } from "../../../Utils/ShowToast";

// --- START: Essential Redux and UserProfile/JWT imports for client-side state management ---
// You MUST ensure these files and their contents are set up correctly:
// 1. src/Redux/Reducers/authSlice.ts (with setAuthUser, clearAuthUser, checkAuthStatus actions)
// 2. src/Redux/Store.ts (updated to include authReducer)
// 3. src/Utils/jwtDecode.ts (even if not directly used for FB, it's a good utility to have for tokens)
import { setAuthUser, clearAuthUser } from '../../../Redux/Reducers/authSlice';
// The decodeJwt import is not strictly needed for the FB login part itself
// if no backend JWT is processed here, but is required if App.tsx uses it for session restore.
// import { decodeJwt } from '../../../Utils/jwtDecode';
// --- END: Essential Redux and UserProfile/JWT imports ---

// Declare FB as a global object (required for client-side Facebook SDK usage)
declare global {
  interface Window {
    FB: any; // Type this more specifically if you install @types/facebook-js-sdk
  }
}

// Define the UserProfile interface to match the data you'll store in Redux
interface UserProfile {
    userId: string;
    email: string;
    name: string;
    picture?: string; // Optional: if you get the profile picture URL
}


type IProps = {
  value: string;
};

export default function Login({ value }: IProps) {
  const login = useSelector((state: RootState) => state.userFlow.login);
  const dispatch = useDispatch<AppDispatch>();
  const theme = useTheme(); // Import useTheme for useMediaQuery
  const isMobileOrTablet = useMediaQuery(theme.breakpoints.down('lg')); // Use isMobileOrTablet for clarity

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

  // Your Facebook App ID (from developers.facebook.com)
  const FACEBOOK_APP_ID = '633072536472101'; 
  
  function showcurrentPassword() {
    setCurrentShow(true);
    setCurrentType("text");
  }

  function hidecurrentPassword() {
    setCurrentShow(false);
    setCurrentType("password");
  }

  const validateEmail = (emailValue: string) => { // Renamed parameter to avoid conflict
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(emailValue);
  };

  useEffect(() => {
    if (emailTouched) {
      setEmailError(validateEmail(email) ? "" : "Invalid email format");
    }

    if (passwordTouched) {
      setPasswordError(password.length >= 6 ? "" : "Minimum 6 characters required");
    }

    setIsFormValid(validateEmail(email) && password.length >= 6);

    // Initialize Facebook SDK. This assumes the SDK script is in public/index.html
    // and that your deployed site is on HTTPS.
    if (!window.FB) {
        console.warn('Facebook SDK not loaded. Ensure the script is in public/index.html');
        return; // Exit if FB SDK is not available
    }

    // Initialize only once to avoid multiple initializations
    if (!window.FB._initialized) {
        window.FB.init({
            appId: FACEBOOK_APP_ID,
            cookie: true, // Enables cookies to allow the server to access the session
            xfbml: true, // Parse social plugins on this page
            version: 'v19.0' // Using a consistent recent API version
        });
        window.FB._initialized = true; // Custom flag to prevent re-initialization
        console.log('Facebook SDK Initialized from Login.tsx');

        // Optional: Check Facebook login status on load
        window.FB.getLoginStatus(function(response: any) {
            if (response.status === 'connected') {
                console.log('User is already logged into Facebook.');
                // You could fetch user data and update Redux here if you want auto-login
                // when a user is already authenticated with Facebook. For now, we rely
                // on the button click to initiate app login.
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
    // This is for regular email/password login submission
    setEmail("");
    setPassword("");
    setEmailError("");
    setPasswordError("");
    setEmailTouched(false);
    setPasswordTouched(false);
    setTimeout(() => {
      dispatch(setLogin(false));
    }, 1000);

    showToast(true, 'Login Successfully');
    navigate('/');
    if (value === "member") {
      localStorage.setItem("member", "member");
    }
  };

  // --- MODIFIED function for Facebook Login (Client-Side Only with Robust Checks) ---
  const handleFacebookLogin = () => {
    if (!window.FB) {
      console.error('Facebook SDK not available.');
      showToast(false, 'Facebook login not available. Please try again.');
      return;
    }

    window.FB.login(function (response: any) {
      if (response.authResponse) {
        // User logged into Facebook and authorized your app
        console.log('Facebook login successful. Attempting to fetch user info...');
        window.FB.api('/me', { fields: 'id,name,email,picture' }, function (userResponse: any) {
          // --- START: Robust Data Validation ---
          // Check if essential user data (id, name, email) is present
          if (userResponse && userResponse.id && userResponse.name && userResponse.email) {
            console.log('Good to see you, ' + userResponse.name + '.');
            console.log('User email: ' + userResponse.email);

            const userProfile: UserProfile = {
              userId: userResponse.id,
              email: userResponse.email,
              name: userResponse.name,
              picture: userResponse.picture?.data?.url // Optional, if you want profile pic
            };

            // Dispatch user info to your Redux state
            dispatch(setAuthUser(userProfile));
            console.log('User data dispatched to Redux state.');

            // Store user info in localStorage for simple persistence (client-side only)
            localStorage.setItem('currentUser', JSON.stringify(userProfile));
            localStorage.setItem('isAuthenticated', 'true'); // Simple flag for a non-backend validated session

            showToast(true, `Logged in with Facebook as ${userResponse.name}!`);
            dispatch(setLogin(false)); // Close login dialog on success
            navigate('/'); // Navigate to home/dashboard
            if (value === "member") {
              localStorage.setItem("member", "member"); // Your existing logic
            }
          } else {
            // Case where userResponse is missing expected fields (e.g., name or email)
            console.error('Facebook API response missing required user data (id, name, or email).', userResponse);
            showToast(false, 'Facebook login failed: Essential user data missing or permission denied. Please ensure you grant required permissions.');
            
            // Crucial: Clear any potentially partial or invalid authentication state
            localStorage.removeItem('currentUser');
            localStorage.removeItem('isAuthenticated');
            dispatch(clearAuthUser()); // Clear Redux auth state to ensure no "undefined" user is logged in
            // The dialog should ideally remain open to allow retry, or navigate to a clean login state.
            // Since `navigate('/')` might close the dialog depending on routing,
            // we rely on the `dispatch(clearAuthUser())` to ensure the app doesn't think a valid user is logged in.
            dispatch(setLogin(true)); // Keep dialog open if it was already open and login failed
          }
          // --- END: Robust Data Validation ---
        });
      } else {
        // User cancelled Facebook login or did not authorize the app
        console.log('User cancelled Facebook login or did not fully authorize.');
        showToast(false, 'Facebook login cancelled or not authorized.');
        
        // Crucial: Clear any potentially partial authentication state
        localStorage.removeItem('currentUser');
        localStorage.removeItem('isAuthenticated');
        dispatch(clearAuthUser()); // Clear Redux auth state
        // Keep the dialog open or ensure navigation to a clear login state for retry.
        dispatch(setLogin(true)); // Ensure dialog remains open after cancellation
      }
    }, { scope: 'public_profile,email' }); // Request basic permissions (id, name, email)
  };
  // --- End of MODIFIED function for Facebook Login ---

  const handleClose = () => {
    dispatch(setLogin(false));
  };

  return (
    <Dialog open={login} onClose={handleClose}>
      <DialogContent sx={{ p: isMobileOrTablet ? '20px' : '40px', maxWidth: '450px', mx: 'auto' }}>
        <Box display="flex" justifyContent="center" alignItems="center">
          <Grid
            container
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              borderRadius: "15px",
              gap: 2,
            }}
          >
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

            <Grid item xs={12} sx={{ width: '100%' }}>
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

            <Grid item xs={12} sx={{ width: '100%' }}>
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
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                width: '100%',
                gap: '20px',
                mt: 1,
                mb: 1,
              }}
            >
              <Box
                component="img"
                src={Fb}
                sx={{ width: "40px", height: "40px", objectFit: "cover", cursor: "pointer" }}
                onClick={handleFacebookLogin} // This now initiates FB login and processes client-side
              />
              <Box
                component="img"
                src={Googleimg}
                sx={{ width: "40px", height: "40px", objectFit: "cover", cursor: "pointer" }}
                // Placeholder for Google login if you implement it similarly
              />
            </Box>

            <Box display="flex" flexDirection="column" sx={{ width: '100%' }} >
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