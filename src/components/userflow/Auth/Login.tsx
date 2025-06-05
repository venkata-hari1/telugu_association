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
} from "@mui/material";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../../Redux/Store";
import {
  setLogin,
  setForgetPassword,
  setPopUp,
  setMessage,
} from "../../../Redux/UserFlow";
import Fb from "../../../assets/fb2.png";
import Googleimg from "../../../assets/google.png";
type IProps={
  value:string
}
export default function Login({value}:IProps) {
  const login = useSelector((state: RootState) => state.userFlow.login);
  const dispatch = useDispatch<AppDispatch>();
  const display=useMediaQuery((theme)=>theme.breakpoints.down('lg'))
  const [currentshow, setCurrentShow] = useState(false);
  const [currenttype, setCurrentType] = useState("password");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [emailTouched, setEmailTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);

  const [isFormValid, setIsFormValid] = useState(false);

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
  }, [email, password, emailTouched, passwordTouched]);

  const handleRegister = () => {
    dispatch(setLogin(false));
  };

  const handleForgetPassword = () => {
    dispatch(setForgetPassword(true));
    dispatch(setLogin(false));
  };

  const handleLogin = () => {
    dispatch(setPopUp(true));
    setEmail("");
    setPassword("");
    setEmailError("");
    setPasswordError("");
    setEmailTouched(false);
    setPasswordTouched(false);
    setTimeout(() => {
      dispatch(setLogin(false));
    }, 1000);
    dispatch(setMessage("Login successful!"));
    if(value==="member"){
    localStorage.setItem("member", "member");
    }
  };
const handleClose=()=>{
  dispatch(setLogin(false))
}
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
              padding: display?"":"40px",
              width:"450px",
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
            <Box  sx={{ display:'flex',justifyContent:display?'center':'space-between',width: display?"100%":"30%" }}>
              <Box
                component="img"
                src={Fb}
                sx={{ width: "40px", height: "40px", objectFit: "cover" }}
              />
              <Box
                component="img"
                src={Googleimg}
                sx={{ width: "40px", height: "40px", objectFit: "cover" }}
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
