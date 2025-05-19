import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";


const Changeemail = () => {
  const otpStyle = {
    width: "50px",
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#3DB80C",
      },
      "&:hover fieldset": {
        borderColor: "#3DB80C",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#3DB80C",
      },
    },
    input: {
      textAlign: "center",
      fontSize: "20px",
    },
    background: "#ffff",
  };
 const navigate= useNavigate()


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
        <Typography variant="h5" color="#3DB80C">
          Enter OTP
        </Typography>

        <Grid
          size={{ lg: 12, md: 12, xs: 12, sm: 12 }}
          sx={{ display: "flex", justifyContent: "center", gap: "10px" }}
        >
          <TextField
            variant="outlined"
            size="small"
            sx={otpStyle}
            inputProps={{ maxLength: 1 }}
          />
          <TextField
            variant="outlined"
            size="small"
            sx={otpStyle}
            inputProps={{ maxLength: 1 }}
          />
          <TextField
            variant="outlined"
            size="small"
            sx={otpStyle}
            inputProps={{ maxLength: 1 }}
          />
          <TextField
            variant="outlined"
            size="small"
            sx={otpStyle}
            inputProps={{ maxLength: 1 }}
          />
        </Grid>
        <Box sx={{ display: "flex" }}>
          <Typography component="p">Dont Receive to Email?</Typography>
          <Typography
            component="span"
            sx={{
              marginLeft: "8px",
              color: "#3DB80C",
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            Resend
          </Typography>
        </Box>

        <Box display="flex" flexDirection="column">
          <Button variant="contained" sx={{ background: "#3DB80C" }}>
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
            <Typography component="p" sx={{cursor:'pointer'}} onClick={()=>navigate('/admin/profile')}>Back to Profile</Typography>
          </Box>
        </Box>
      </Grid>
    </Box>
  );
};

export default Changeemail;
