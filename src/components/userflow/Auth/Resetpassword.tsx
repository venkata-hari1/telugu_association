import { Box, Button, Dialog, DialogContent, Grid, TextField, Typography, InputAdornment, useMediaQuery, Theme } from "@mui/material";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../Redux/Store";
import { setLogin, setMessage, setNewPassword, setPopUp } from "../../../Redux/UserFlow";

const Resetpassword = () => {
  const [newshow, setNewShow] = useState(false);
  const [confirmshow, setConfirmShow] = useState(false);
  const [newtype, setNewType] = useState("password");
  const [confirmtype, setConfirmType] = useState("password");
 const display=useMediaQuery((theme:Theme)=>theme.breakpoints.down('lg'))
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const value = useSelector((state: RootState) => state.userFlow.newPassword);
  const dispatch = useDispatch<AppDispatch>();

  function shownewPassword() {
    setNewShow(true);
    setNewType("text");
  }
  function hidenewPassword() {
    setNewShow(false);
    setNewType("password");
  }

  function showconfirmPassword() {
    setConfirmShow(true);
    setConfirmType("text");
  }
  function hideconfirmPassword() {
    setConfirmShow(false);
    setConfirmType("password");
  }

  // Validate password length live
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setPassword(val);

    if (val.length < 6) {
      setPasswordError("Password must be at least 6 characters.");
    } else {
      setPasswordError("");
    }

    // Also check confirm password matches when password changes
    if (confirmPassword && val !== confirmPassword) {
      setConfirmPasswordError("Passwords do not match.");
    } else {
      setConfirmPasswordError("");
    }
  };

  // Validate confirm password live
  const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setConfirmPassword(val);

    if (val !== password) {
      setConfirmPasswordError("Passwords do not match.");
    } else {
      setConfirmPasswordError("");
    }
  };

  const handleResetPassword = () => {
    // Final check before submit
    if (!passwordError && !confirmPasswordError && password.length >= 6 && password === confirmPassword) {
      dispatch(setNewPassword(false));
      dispatch(setLogin(true));
      dispatch(setMessage('Password Changed Successfully'));
      dispatch(setPopUp(true));
      // Clear inputs on success
      setPassword("");
      setConfirmPassword("");
    }
  };

  return (
    <Dialog open={value}>
      <DialogContent>
        <Box display="flex" justifyContent="center" alignItems="center">

          <Grid
            container
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              background: '#ffffff',
              padding:display?'0px': "40px",
              width: "450px",
              borderRadius: '15px',
              gap: 2
            }}
          >
            <Typography color="#3DB80C" variant="h5" sx={{fontSize:'15px'}}>Reset Your Password</Typography>

            <Grid size={{ lg: 12, md: 12, xs: 12, sm: 12 }}>
              <Typography fontWeight="500">Password</Typography>
            </Grid>

            <Grid size={{ lg: 12, md: 12, xs: 12, sm: 12 }}>
              <TextField
                type={newtype}
                placeholder="Enter Password"
                size="small"
                fullWidth
                value={password}
                onChange={handlePasswordChange}
                error={!!passwordError}
                helperText={passwordError}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: '#3DB80C',
                    },
                    '&:hover fieldset': {
                      borderColor: '#3DB80C',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#3DB80C',
                    },
                  },
                  background: 'white'
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end" sx={{ cursor: 'pointer' }}>
                      {!newshow && <VisibilityOffIcon onClick={shownewPassword} />}
                      {newshow && <Visibility onClick={hidenewPassword} />}
                    </InputAdornment>
                  )
                }}
              />
            </Grid>

            <Grid size={{ lg: 12, md: 12, xs: 12, sm: 12 }}>
              <Typography fontWeight="500">Confirm Password</Typography>
            </Grid>

            <Grid size={{ lg: 12, md: 12, xs: 12, sm: 12 }}>
              <TextField
                type={confirmtype}
                placeholder="Confirm Password"
                size="small"
                fullWidth
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                error={!!confirmPasswordError}
                helperText={confirmPasswordError}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: '#3DB80C',
                    },
                    '&:hover fieldset': {
                      borderColor: '#3DB80C',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#3DB80C',
                    },
                  },
                  background: 'white',
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end" sx={{ cursor: 'pointer' }}>
                      {!confirmshow && <VisibilityOffIcon onClick={showconfirmPassword} />}
                      {confirmshow && <Visibility onClick={hideconfirmPassword} />}
                    </InputAdornment>
                  )
                }}
              />
            </Grid>

            <Box display="flex" flexDirection="column" width="100%" mt={2}>
              <Button
                variant="contained"
                sx={{ background: '#3DB80C', width: display?'100%':'30%', mx: 'auto' }}
                onClick={handleResetPassword}
                disabled={!!passwordError || !!confirmPasswordError || !password || !confirmPassword}
              >
                Continue
              </Button>
            </Box>

          </Grid>

        </Box>
      </DialogContent>
    </Dialog>
  );
}

export default Resetpassword;
