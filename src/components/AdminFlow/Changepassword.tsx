import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { showToast } from "../../Utils/ShowToast";

const Changepassword = () => {
  const navigate = useNavigate();

  const [currentshow, setCurrentShow] = useState(false);
  const [newshow, setNewShow] = useState(false);
  const [confirmshow, setConfirmShow] = useState(false);

  const [currenttype, setCurrentType] = useState("password");
  const [newtype, setNewType] = useState("password");
  const [confirmtype, setConfirmType] = useState("password");

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Error states
  const [currentError, setCurrentError] = useState("");
  const [newError, setNewError] = useState("");
  const [confirmError, setConfirmError] = useState("");

  // Button enabled state
  const [isSubmitEnabled, setIsSubmitEnabled] = useState(false);

  // Password validation criteria
  const validateNewPassword = (password: string) => {
    if (password.length < 6) {
      return "New password must be at least 6 characters";
    }
    return "";
  };

  // Handlers for show/hide passwords
  const toggleCurrentPassword = () => {
    setCurrentShow((prev) => !prev);
    setCurrentType((prev) => (prev === "password" ? "text" : "password"));
  };

  const toggleNewPassword = () => {
    setNewShow((prev) => !prev);
    setNewType((prev) => (prev === "password" ? "text" : "password"));
  };

  const toggleConfirmPassword = () => {
    setConfirmShow((prev) => !prev);
    setConfirmType((prev) => (prev === "password" ? "text" : "password"));
  };

  // Validation on input change
  const handleCurrentPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCurrentPassword(value);
    if (!value.trim()) {
      setCurrentError("Current password is required");
    } else {
      setCurrentError("");
    }
  };

  const handleNewPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setNewPassword(value);
    const errorMsg = validateNewPassword(value);
    setNewError(errorMsg);

    // Also validate confirm password when new changes
    if (confirmPassword && value !== confirmPassword) {
      setConfirmError("Confirm password does not match");
    } else {
      setConfirmError("");
    }
  };

  const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setConfirmPassword(value);

    if (!value.trim()) {
      setConfirmError("Confirm password is required");
    } else if (newPassword !== value) {
      setConfirmError("Confirm password does not match");
    } else {
      setConfirmError("");
    }
  };

  // Enable submit button only if all fields are valid and non-empty
  useEffect(() => {
    if (
      currentPassword &&
      !currentError &&
      newPassword &&
      !newError &&
      confirmPassword &&
      !confirmError
    ) {
      setIsSubmitEnabled(true);
    } else {
      setIsSubmitEnabled(false);
    }
  }, [currentPassword, currentError, newPassword, newError, confirmPassword, confirmError]);

  // Dummy submit handler
  const handleSubmit = () => {
    if (!isSubmitEnabled) return;


    showToast(true,'Password changed successfully!')
    // Reset all fields
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="90vh">
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
          Change Password
        </Typography>

        <Typography fontWeight="500" sx={{ alignSelf: "flex-start" }}>
          Current Password
        </Typography>
        <TextField
          type={currenttype}
          size="small"
          fullWidth
          value={currentPassword}
          onChange={handleCurrentPasswordChange}
          error={!!currentError}
          helperText={currentError}
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": { borderColor: "#3DB80C" },
              "&:hover fieldset": { borderColor: "#3DB80C" },
              "&.Mui-focused fieldset": { borderColor: "#3DB80C" },
            },
           
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end" sx={{ cursor: "pointer" }}>
                {currentshow ? (
                  <VisibilityOffIcon onClick={toggleCurrentPassword} />
                ) : (
                  <Visibility onClick={toggleCurrentPassword} />
                )}
              </InputAdornment>
            ),
          }}
        />

        <Typography fontWeight="500" sx={{ alignSelf: "flex-start" }}>
          New Password
        </Typography>
        <TextField
          type={newtype}
          size="small"
          fullWidth
          value={newPassword}
          onChange={handleNewPasswordChange}
          error={!!newError}
          helperText={newError}
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": { borderColor: "#3DB80C" },
              "&:hover fieldset": { borderColor: "#3DB80C" },
              "&.Mui-focused fieldset": { borderColor: "#3DB80C" },
            },
           
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end" sx={{ cursor: "pointer" }}>
                {newshow ? (
                  <VisibilityOffIcon onClick={toggleNewPassword} />
                ) : (
                  <Visibility onClick={toggleNewPassword} />
                )}
              </InputAdornment>
            ),
          }}
        />

        <Typography fontWeight="500" sx={{ alignSelf: "flex-start" }}>
          Confirm Password
        </Typography>
        <TextField
          type={confirmtype}
          size="small"
          fullWidth
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          error={!!confirmError}
          helperText={confirmError}
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": { borderColor: "#3DB80C" },
              "&:hover fieldset": { borderColor: "#3DB80C" },
              "&.Mui-focused fieldset": { borderColor: "#3DB80C" },
            },
            
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end" sx={{ cursor: "pointer" }}>
                {confirmshow ? (
                  <VisibilityOffIcon onClick={toggleConfirmPassword} />
                ) : (
                  <Visibility onClick={toggleConfirmPassword} />
                )}
              </InputAdornment>
            ),
          }}
        />

        <Box display="flex" flexDirection="column" sx={{width:{lg:"40%",xs:'100%',md:'100%'}}} mt={2}>
          <Button
            variant="contained"
            sx={{ background: "#3DB80C" }}
            disabled={!isSubmitEnabled}
            onClick={handleSubmit}
          >
            Submit
          </Button>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              pt: 2,
              gap: 0.5,
              cursor: "pointer",
              color: "#3DB80C",
              fontWeight: 500,
            }}
            onClick={() => navigate("/admin/profile")}
          >
            <ArrowBackIcon fontSize="small" />
            <Typography component="p">Back to Profile</Typography>
          </Box>
        </Box>
      </Grid>
    </Box>
  );
};

export default Changepassword;
