import {
  Box,
  Button,
  Card,
  CardContent,
  FormControl,
  Typography,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import OTPInput from "react-otp-input";
import { useNavigate } from "react-router-dom";

const Profileotp = () => {
  const navigate = useNavigate();
  return (
    <Box display="flex" justifyContent="center" alignItems="center"  minHeight="90vh">
      <Card
        sx={{
          width: 400,
          p: 3,
          boxShadow: 3,
          background: "#f0f3d3",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <CardContent>
          <Typography
            variant="h5"
            align="center"
            gutterBottom
            color="#3DB80C"
            sx={{ fontSize: "18px", fontWeight: "bold" }}
          >
            Edit Email
          </Typography>
          <Typography>
            We’ll send a verification code to Email*@gmail.com
          </Typography>
          <FormControl
            fullWidth
            size="small"
            variant="outlined"
            sx={{
              mt: 3,
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
            }}
          >
            <OTPInput
              value="1"
              numInputs={4}
              renderInput={(props) => <input {...props} />}
              inputStyle={{
                width: "3rem",
                height: "3rem",
                margin: "0 0.5rem",
                fontSize: "1.5rem",
                borderRadius: "4px",
                border: "1px solid #3DB80C",
                textAlign: "center",
                background: "#fff",
              }}
            />
            <Typography color="error" mt={1} fontSize="14px"></Typography>
          </FormControl>

          <Box display="flex" justifyContent="center">
            <Button
              variant="contained"
              sx={{ mt: 3, backgroundColor: "#3DB80C", width: "150px" }}
            >
              Continue
            </Button>
          </Box>
          <Typography display="flex" justifyContent="center" mt={2}>
            Dont Receive the Email? &nbsp;
            <Typography
              component="span"
              sx={{
                textDecoration: "underline",
                cursor: "pointer",
                color: "#3DB80C",
              }}
            >
              Resend
            </Typography>
          </Typography>

          <Typography
            sx={{
              display: "flex",
              justifyContent: "center",
              mt: 2,
              cursor:'pointer'
            }}
            onClick={() => navigate("/admin/profile")}
          >
            <ArrowBackIcon />
            Back to Login
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Profileotp;