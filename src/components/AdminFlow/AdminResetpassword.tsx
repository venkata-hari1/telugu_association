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

  return (
    <Box
      sx={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: "100vh", // or any specific height
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

          <Box display="flex" justifyContent="center">
            <Button
              variant="contained"
              sx={{ mt: 3, backgroundColor: "#3DB80C", width: "150px" }}
            >
              Reset Password
            </Button>
          </Box>
        </CardContent>
        <CardContent>
          <Typography sx={{ display: "flex", justifyContent: "center" }}>
            <ArrowBackIcon />
            Back to Login
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default AdminResetpassword;
