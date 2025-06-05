import { Box, Button, Grid, Paper, TextField, Typography } from "@mui/material";
import { Fragment } from "react/jsx-runtime";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../Redux/Store";
import { setLogin } from "../../Redux/UserFlow";
import Login from "./Auth/Login";
import PopUp from "../../Utils/Popup";
import Resetpassword from "./Auth/Resetpassword";
import Otpinput from "./Auth/Otpinput";

import Forgotpassword from "./Auth/Forgotpassword";
const Volunteer = () => {
const dispatch = useDispatch<AppDispatch>()
const handleLogin = () => {
    dispatch(setLogin(true))
  }
  return (
    <Box p={2}>
       <Login />
      <Forgotpassword />
      <Resetpassword />
      <Otpinput />
      <PopUp />
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography color="#3DB80C" fontWeight="700">
           Volunteer Registration
        </Typography>
      </Box>

    
        <Paper
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            p: 1,
            margin: "auto",
            marginTop: "10px",
            marginBottom: "10px",
            width: "100%",
          }}
        >
          <Typography sx={{ fontSize: 14, fontWeight: 600 }}>
            Already have an account?{" "}
            <Typography component="span" color="#3DB80C" sx={{ cursor: "pointer" }} onClick={handleLogin}>
              Log In
            </Typography>
          </Typography>
        </Paper>
   

      {/* Form fields */}
      <Grid container spacing={3} sx={{ padding: { xs: '20px', md: '20px', lg: '2px' } }} justifyContent="center" alignItems="center" component={Paper} paddingTop={2}>
        <Grid size={{ sm: 12, md: 6 }} sx={{ width: { xs: "100%", sm: "100%", md: "40%" } }}>
          <Typography fontWeight="600">
            First Name<Typography component="span" color="red">*</Typography>
          </Typography>
          <TextField
            fullWidth
            id="first-name"
            name="first-name"
            variant="outlined"
            placeholder="Your First Name"
            size="small"
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "#3DB80C" },
                "&:hover fieldset": { borderColor: "#3DB80C" },
                "&.Mui-focused fieldset": { borderColor: "#3DB80C" },
              },
            }}
          />
        </Grid>
        <Grid size={{ sm: 12, md: 6 }} sx={{ width: { xs: "100%", sm: "100%", md: "40%" } }}>
          <Typography fontWeight="600">
            Last Name<Typography component="span" color="red">*</Typography>
          </Typography>
          <TextField
            fullWidth
            id="last-name"
            name="last-name"
            variant="outlined"
            size="small"
            placeholder="Your Last Name"
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "#3DB80C" },
                "&:hover fieldset": { borderColor: "#3DB80C" },
                "&.Mui-focused fieldset": { borderColor: "#3DB80C" },
              },
            }}
          />
        </Grid>

        <Grid size={{ sm: 12, md: 6 }} sx={{ width: { xs: "100%", sm: "100%", md: "40%" } }}>
          <Typography fontWeight="600">
            Email<Typography component="span" color="red">*</Typography>
          </Typography>
          <TextField
            fullWidth
            id="email"
            name="email"
            variant="outlined"
            placeholder="Your Email ID"
            size="small"
            type="email"
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "#3DB80C" },
                "&:hover fieldset": { borderColor: "#3DB80C" },
                "&.Mui-focused fieldset": { borderColor: "#3DB80C" },
              },
            }}
          />
        </Grid>
        <Grid size={{ sm: 12, md: 6 }} sx={{ width: { xs: "100%", sm: "100%", md: "40%" } }}>
          <Typography fontWeight="600">
            Mobile No<Typography component="span" color="red">*</Typography>
          </Typography>
          <TextField
            fullWidth
            id="mobile-no"
            name="mobile-no"
            variant="outlined"
            size="small"
            type='number'
            placeholder="Your Mobile Number"
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "#3DB80C" },
                "&:hover fieldset": { borderColor: "#3DB80C" },
                "&.Mui-focused fieldset": { borderColor: "#3DB80C" },
              },
            }}
          />
        </Grid>
        <Fragment>
          <Grid size={{ sm: 12, md: 6 }} sx={{ width: { xs: "100%", sm: "100%", md: "40%" } }}>
            <Typography fontWeight="600">
              Password<Typography component="span" color="red">*</Typography>
            </Typography>
            <TextField
              fullWidth
              id="password"
              name="password"
              variant="outlined"
              placeholder="Your Password"
              size="small"
              type="password"
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "#3DB80C" },
                  "&:hover fieldset": { borderColor: "#3DB80C" },
                  "&.Mui-focused fieldset": { borderColor: "#3DB80C" },
                },
              }}
            />
          </Grid>
          <Grid size={{ sm: 12, md: 6 }} sx={{ width: { xs: "100%", sm: "100%", md: "40%" } }}>
            <Typography fontWeight="600">
              Confirm Password<Typography component="span" color="red">*</Typography>
            </Typography>
            <TextField
              fullWidth
              id="confirm-password"
              name="confirm-password"
              variant="outlined"
              size="small"
              placeholder="Confirm Password"
              type="password"
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "#3DB80C" },
                  "&:hover fieldset": { borderColor: "#3DB80C" },
                  "&.Mui-focused fieldset": { borderColor: "#3DB80C" },
                },
              }}
            />
          </Grid>

          <Grid size={{ sm: 12, md: 6 }} sx={{ width: { xs: "100%", sm: "100%", md: "40%" } }}>
            <Typography fontWeight="600">
              State<Typography component="span" color="red">*</Typography>
            </Typography>
            <TextField
              fullWidth
              id="state"
              name="state"
              variant="outlined"
              placeholder="Your State"
              size="small"
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "#3DB80C" },
                  "&:hover fieldset": { borderColor: "#3DB80C" },
                  "&.Mui-focused fieldset": { borderColor: "#3DB80C" },
                },
              }}
            />
          </Grid>
          <Grid size={{ sm: 12, md: 6 }} sx={{ width: { xs: "100%", sm: "100%", md: "40%" } }}>
            <Typography fontWeight="600">
              City<Typography component="span" color="red">*</Typography>
            </Typography>
            <TextField
              fullWidth
              id="city"
              name="city"
              variant="outlined"
              size="small"
              placeholder="Your City Name"
              type="text"
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "#3DB80C" },
                  "&:hover fieldset": { borderColor: "#3DB80C" },
                  "&.Mui-focused fieldset": { borderColor: "#3DB80C" },
                },
              }}
            />
          </Grid>

          <Grid size={{ sm: 12, md: 6 }} sx={{ width: { xs: "100%", sm: "100%", md: "40%" } }}>
            <Typography fontWeight="600">
              Country<Typography component="span" color="red">*</Typography>
            </Typography>
            <TextField
              fullWidth
              id="country"
              name="country"
              variant="outlined"
              placeholder="Your Country"
              size="small"
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "#3DB80C" },
                  "&:hover fieldset": { borderColor: "#3DB80C" },
                  "&.Mui-focused fieldset": { borderColor: "#3DB80C" },
                },
              }}
            />
          </Grid>
          <Grid size={{ sm: 12, md: 6 }} sx={{ width: { xs: "100%", sm: "100%", md: "40%" } }}>
            <Typography fontWeight="600">
              Zip Code<Typography component="span" color="red">*</Typography>
            </Typography>
            <TextField
              fullWidth
              id="zip-code"
              name="zip-code"
              variant="outlined"
              size="small"
              placeholder="Enter Zip Code"
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "#3DB80C" },
                  "&:hover fieldset": { borderColor: "#3DB80C" },
                  "&.Mui-focused fieldset": { borderColor: "#3DB80C" },
                },
              }}
            />
          </Grid>

          <Grid size={{ sm: 12, md: 6 }} sx={{ width: { xs: "100%", sm: "100%", md: "40%" } }}>
            <Typography fontWeight="600">
              Address1<Typography component="span" color="red">*</Typography>
            </Typography>
            <TextField
              fullWidth
              id="address1"
              name="address1"
              variant="outlined"
              placeholder="Your Address"
              multiline
              rows={3}
              size="small"
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "#3DB80C" },
                  "&:hover fieldset": { borderColor: "#3DB80C" },
                  "&.Mui-focused fieldset": { borderColor: "#3DB80C" },
                },
              }}
            />
          </Grid>
          <Grid size={{ sm: 12, md: 6 }} sx={{ width: { xs: "100%", sm: "100%", md: "40%" } }}>
            <Typography fontWeight="600">Address 2</Typography>
            <TextField
              fullWidth
              id="address2"
              name="address2"
              variant="outlined"
              size="small"
              placeholder="Your Address2"
              multiline
              rows={3}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "#3DB80C" },
                  "&:hover fieldset": { borderColor: "#3DB80C" },
                  "&.Mui-focused fieldset": { borderColor: "#3DB80C" },
                },
              }}
            />
          </Grid>
        </Fragment>
      

       

        <Box width="100%" p={2}>
          <Box display="flex" justifyContent="flex-end" sx={{ marginRight: { md: "60px" } }}>
            <Button variant="contained" sx={{ background: "#3DB80C" }}>
              Submit
            </Button>
          </Box>
        </Box>
      </Grid>
    </Box>
  );
};

export default Volunteer;