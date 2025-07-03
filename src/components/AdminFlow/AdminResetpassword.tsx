import {
  Box,
  Button,
  Card,
  CardContent,
  FormControl,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Typography,
} from "@mui/material";
import backgroundImg from "../../assets/BackgroundImage.png";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Fragment, useState } from "react";
import Logo from "../../assets/logo.png";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import {showToast} from "../../Utils/ShowToast";


const AdminResetpassword = () => {
  const navigate = useNavigate();

  const [currentshow, setCurrentShow] = useState(false);
  const [currenttype, setCurrentType] = useState("password");
  const [confirmshow, setConfirmshow] = useState(false);
  const [confirmtype, setConfirmtype] = useState("password");

  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmError, setConfirmError] = useState("");
  function showcurrentPassword() {
    setCurrentShow(true);
    setCurrentType("text");
  }
  function hidecurrentPassword() {
    setCurrentShow(false);
    setCurrentType("password");
  }

  function confirmshowPassword() {
    setConfirmshow(true);
    setConfirmtype("text");
  }

  function hideconfirmPassword() {
    setConfirmshow(false);
    setConfirmtype("password");
  }

  function passwordHandler(event: any) {
    setPassword(event.target.value);
    if (event.target.value.length < 8) {
      setPasswordError("Password must be at least 8 characters long");
    } else {
      setPasswordError("");
    }
  }

  function confirmpwdHandler(event: any) {
    setConfirmpassword(event.target.value);
    if (event.target.value !== password) {
      setConfirmError("Passwords do not match");
    } else {
      setConfirmError("");
    }
  }

  function submitResetHanlder() {

   showToast(true,'Password Changed Successfully')
   setTimeout(()=>{
    navigate('/login')
   },900)

   
  }
  const isDisabled =
  password.length < 8 || confirmpassword !== password || !!passwordError || !!confirmError;
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
      <Box component="img" src={Logo} sx={{ width: 150, height: "auto" }} />

      <Card
        sx={{
          width: 400,
          p: 4,
          boxShadow: 3,
          background: "#f0f3d3",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <CardContent>
          <Typography variant="h5" align="center" gutterBottom color="#3DB80C">
            Set New Password
          </Typography>
          <Typography display="flex" justifyContent="center">
            <Typography component="span" fontWeight="700">
              Must be Atleast 8 Characters
            </Typography>
          </Typography>

          {/* Password Field */}
          <FormControl fullWidth margin="normal" size="small" variant="outlined">
            <Typography variant="subtitle2" sx={{ mb: 0.5, fontWeight: 700 }}>
              Password
            </Typography>
            <OutlinedInput
              id="password"
              type={currenttype}
              value={password}
              placeholder="Your Password"
              onChange={passwordHandler}
              sx={{
                backgroundColor: "white",
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#3DB80C",
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#3DB80C",
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#3DB80C",
                },
              }}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton edge="end">
                    {!currentshow ? (
                      <VisibilityOffIcon onClick={showcurrentPassword} sx={{ cursor: "pointer" }} />
                    ) : (
                      <VisibilityIcon onClick={hidecurrentPassword} sx={{ cursor: "pointer" }} />
                    )}
                  </IconButton>
                </InputAdornment>
              }
            />
            {passwordError && (
              <Typography color="error" sx={{ fontSize: "13px", mt: 0.5 }}>
                {passwordError}
              </Typography>
            )}
          </FormControl>

          
          <FormControl fullWidth margin="normal" size="small" variant="outlined">
            <Typography variant="subtitle2" sx={{ mb: 0.5, fontWeight: 700 }}>
              Confirm Password
            </Typography>
            <OutlinedInput
              id="confirmpassword"
              type={confirmtype}
              value={confirmpassword}
              placeholder="Your Password"
              onChange={confirmpwdHandler}
              sx={{
                backgroundColor: "white",
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#3DB80C",
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#3DB80C",
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#3DB80C",
                },
              }}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton edge="end">
                    {!confirmshow ? (
                      <VisibilityOffIcon onClick={confirmshowPassword} sx={{ cursor: "pointer" }} />
                    ) : (
                      <VisibilityIcon onClick={hideconfirmPassword} sx={{ cursor: "pointer" }} />
                    )}
                  </IconButton>
                </InputAdornment>
              }
            />
            {confirmError && (
              <Typography color="error" sx={{ fontSize: "13px", mt: 0.5 }}>
                {confirmError}
              </Typography>
            )}
          </FormControl>

          <Box display="flex" justifyContent="center">
            <Button
              variant="contained"
              sx={{ mt: 2, backgroundColor: "#3DB80C", width: "180px" }}
              onClick={submitResetHanlder}
              disabled={isDisabled}
            >
              Reset Password
            </Button>
          </Box>
        </CardContent>

        <CardContent>
          <Typography
            sx={{ display: "flex", justifyContent: "center", cursor: "pointer" }}
            onClick={() => navigate("/login")}
          >
            <ArrowBackIcon />
            Back to Login
          </Typography>
        </CardContent>
      </Card>
    </Box>
    </Fragment>
  );
};

export default AdminResetpassword;
