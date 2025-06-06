import { Box, Button, Grid, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import OtpInput from "react-otp-input";
import { CSSProperties } from "react"; // Import CSSProperties for type safety
import {showToast} from "../../Utils/ShowToast";



const Changeemail = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(""); // State for OTP value
  const [error, setError] = useState(""); // State for error message

  // OTP input styles as CSSProperties
  const otpStyle: CSSProperties = {
    width: "50px",
    height: "40px",
    margin: "0 5px",
    fontSize: "20px",
    textAlign: "center", // Use TextAlign value
    border: `2px solid ${error ? "#FF0000" : "#3DB80C"}`, // Red border on error, green otherwise
    borderRadius: "4px",
    background: "#fff",
    outline: "none",
  };

  // Handle OTP change
  const handleOtpChange = (otpValue: string) => {
    setOtp(otpValue);
    if (error && otpValue.length === 4) {
      setError(""); // Clear error if OTP is complete
    }
  };

  // Handle Continue button click
  const handleContinue = () => {
    if (otp.length !== 4) {
      setError("Please enter a valid 4-digit OTP");
    } else if (!/^\d{4}$/.test(otp)) {
      setError("OTP must contain only digits");
    } else {
      setError("");
      // Proceed with OTP verification logic (e.g., API call)
  
      showToast(true,'Email Update Successfully')
      setTimeout(()=>{
        navigate('/admin/profile')
      },500)
      // Add navigation or further logic here
    }
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <Grid
        container
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "#E4EFC585",
          padding: "40px",
          width: "450px",
          borderRadius: "15px",
          gap: 2,
        }}
      >
        <Typography color="#3DB80C" variant="h5">
          Edit Email
        </Typography>
        <Typography component="p">
          We’ll send a verification code to Email*@gmail.com
        </Typography>
     

        <Grid
          size={{ lg: 12, md: 12, xs: 12, sm: 12 }}
          sx={{ display: "flex", justifyContent: "center", gap: "10px" }}
        >
          <OtpInput
            value={otp}
            onChange={handleOtpChange}
            numInputs={4}
            renderInput={(props) => <input {...props} />}
            inputStyle={otpStyle}
            containerStyle={{ justifyContent: "center" }}
          />
        </Grid>
        {error && (
          <Typography color="#FF0000" variant="body2" sx={{ mt: 1 }}>
            {error}
          </Typography>
        )}
        <Box sx={{ display: "flex" }}>
          <Typography component="p">Don't Receive to Email?</Typography>
          <Typography
            component="span"
            sx={{
              marginLeft: "8px",
              color: "#3DB80 air",
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            Resend
          </Typography>
        </Box>

        <Box display="flex" flexDirection="column">
          <Button
            variant="contained"
            sx={{ background: "#3DB80C" }}
            onClick={handleContinue}
          >
            Continue
          </Button>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              pt: 2,
            }}
          >
            <ArrowBackIcon fontSize="small" />
            <Typography
              component="p"
              sx={{ cursor: "pointer" }}
              onClick={() => navigate("/admin/profile")}
            >
              Back to Profil
            </Typography>
          </Box>
        </Box>
      </Grid>
    </Box>
  );
};

export default Changeemail;