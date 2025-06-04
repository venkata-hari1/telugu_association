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
import { useState } from "react";
import Logo from "../../assets/logo.png";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";



const AdminResetpassword = () => {
  const [currentshow, setCurrentShow] = useState(false);
  const [currenttype, setCurrentType] = useState("password");

  function showcurrentPassword() {
    setCurrentShow(true);
    setCurrentType("text");
  }
  function hidecurrentPassword() {
    setCurrentShow(false);
    setCurrentType("password");
  }

  const [confirmshow, setConfirmshow] = useState(false);
  const [confirmtype, setConfirmtype] = useState("password");

  function confirmshowPassword() {
    setConfirmshow(true);
    setConfirmtype("text");
  }

  function hideconfirmPassword() {
    setConfirmshow(false);
    setConfirmtype("password");
  }

const[password,setPassword]=useState()
const[confirmpassword,setConfirmpassword]=useState()

function passwordHandler(event:any){
 setPassword(event.target.value)
}

function confirmpwdHandler(event:any){
  setConfirmpassword(event.target.value)
}

const[errorValue,setErrorvalue]=useState('')

function submitResetHanlder(){
  if(password!==confirmpassword){
   setErrorvalue('Password & Confirm password should be match')
  }else{
    setErrorvalue('')
  }
}

 const navigate=useNavigate()
  return (
    <Box
      sx={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: "100vh",  
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Box
        component="img"
        src={Logo}
        sx={{
          width: 150,
          height: "auto",
        }}
      />

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
              Must be Atleast 8 Charecters
            </Typography>
          </Typography>
          <FormControl
            fullWidth
            margin="normal"
            size="small"
            variant="outlined"
          >
            <Typography variant="subtitle2" sx={{ mb: 0.5, fontWeight: 700 }}>
              Password
            </Typography>
            <OutlinedInput
              id="password"
              type={currenttype}
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
                    {!currentshow && (
                      <VisibilityOffIcon
                        onClick={showcurrentPassword}
                        sx={{ cursor: "pointer" }}
                      />
                    )}
                    {currentshow && (
                      <VisibilityIcon
                        onClick={hidecurrentPassword}
                        sx={{ cursor: "pointer" }}
                      />
                    )}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>

          <FormControl
            fullWidth
            margin="normal"
            size="small"
            variant="outlined"
          >
            <Typography variant="subtitle2" sx={{ mb: 0.5, fontWeight: 700 }}>
              Confirm Password
            </Typography>
            <OutlinedInput
              id="password"
              type={confirmtype}
              placeholder="Your Password"
              onClick={confirmpwdHandler}
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
                    {!confirmshow && (
                      <VisibilityOffIcon
                        onClick={confirmshowPassword}
                        sx={{ cursor: "pointer" }}
                      />
                    )}
                    {confirmshow && (
                      <VisibilityIcon
                        onClick={hideconfirmPassword}
                        sx={{ cursor: "pointer" }}
                      />
                    )}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
            {errorValue&& <Typography color="red">{errorValue}</Typography>}  
          <Box display="flex" justifyContent="center">
            <Button
              variant="contained"
              sx={{ mt: 2, backgroundColor: "#3DB80C", width: "180px" }}
            onClick={submitResetHanlder}
            >
              Reset Password
            </Button>
          </Box>
           
        </CardContent>
        <CardContent>
          <Typography sx={{ display: "flex", justifyContent: "center",cursor:'pointer' }} onClick={()=>navigate('/login')}>
            <ArrowBackIcon />
            Back to Login
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default AdminResetpassword;
