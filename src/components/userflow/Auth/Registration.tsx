import { Box, Button, Divider, FormControlLabel, Grid, Paper, Radio, RadioGroup, TextField, Typography } from "@mui/material";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { Fragment } from "react/jsx-runtime";
import { useState } from "react";
import Login from "./Login";

const Registration = ({ type }: { type:any }) => {
  const [membershipValue, setMembershipValue] = useState('');
  const [paymentValue, setPaymentValue] = useState('');
  const[value,setValue]=useState(false)
  const handleLogin=()=>{
   setValue(!value)
  }
  const handleGetValue=(x:boolean)=>{
   setValue(x)
  }
  return (
    <Box p={2}>
      <Login value={value} handleGetValue={handleGetValue}/>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography color="#3DB80C" fontWeight="700">
          {type === '/donate' ? "Donate Now" : type === '/member' ? "Member Registration" : "Volunteer Registration"}
        </Typography>
      </Box>

      {/* Donation amount code */}
      {type === '/donate' ? (
        <Paper
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            p: 1,
            marginTop: "10px",
            marginBottom: "10px",
            width: "100%",
          }}
        >
          <Typography variant="h6">Enter Your Donation Amount</Typography>
          <Box sx={{ display: "flex", width: "20%", height: "40px" }}>
            <Box
              sx={{
                backgroundColor: "#3DB80C",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                px: 1.2,
                borderTopLeftRadius: "8px",
                borderBottomLeftRadius: "8px",
                border: "1px solid #3DB80C",
                borderRight: "none",
              }}
            >
              <AttachMoneyIcon sx={{ color: "white" }} />
            </Box>
            <TextField
              variant="outlined"
              size="small"
              fullWidth
              id="donation-amount"
              name="donation-amount"
              type='number'
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderTopLeftRadius: 0,
                  borderBottomLeftRadius: 0,
                  borderTopRightRadius: "8px",
                  borderBottomRightRadius: "8px",
                  height: "100%",
                },
                "& .MuiOutlinedInput-root.Mui-focused fieldset": {
                  borderColor: "#3DB80C",
                },
              }}
            />
          </Box>
        </Paper>
      ) : (
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
      )}

      {/* Form fields */}
      <Grid container spacing={3} justifyContent="center" alignItems="center" component={Paper} paddingTop={2}>
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
        {(type==="/member" || type==="/volunteer")&&<Fragment>
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
        </Fragment>}
        {type === '/member' && (
          <>
            <Divider sx={{ border: "1px groove #3DB80C", width: "83%" }} />

            <Grid size={{ md: 6, xs: 6 }} sx={{ width: { xs: "100%", sm: "100%", md: "40%" } }}>
              <Typography fontWeight="600">
                Membership Type<Typography component="span" color="red">*</Typography>
              </Typography>
            </Grid>
            <Grid
              size={{ md: 6, xs: 6 }}
              display="flex"
              justifyContent={{ md: "flex-end" }}
              sx={{ width: { xs: "100%", sm: "100%", md: "40%" } }}
            >
              <Typography sx={{ color: "#3DB80C", textDecoration: "underline" }}>
                Membership Plan Details
              </Typography>
            </Grid>
          
            <Grid container sx={{width:'85%'}}>
            <RadioGroup
           
  row
  value={membershipValue}
  onChange={(e) => setMembershipValue(e.target.value)}
>
             <Grid container spacing={2}>
              <Grid size={{ sm: 12, md: 4 }}>
                <Paper
                  variant="outlined"
                  sx={{
                    borderColor: "#3DB80C",
                    px: 2,
                    py: 0.5,
                    borderRadius: 2,
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    width: "200px",
                    background: "transparent",
                  }}
                >

                  <FormControlLabel
                    value="One Year $45"
                    control={<Radio size="small" />}
                    label="One Year- $45"
                    sx={{
                      m: 0,
                      "& .MuiRadio-root": { padding: "7px" },
                      width: "100%",
                      "& .MuiRadio-root.Mui-checked": { color: "#3DB80C" },
                    }}
                  />
       
                </Paper>
              </Grid>
              <Grid size={{ sm: 12, md: 4 }}>
                <Paper
                  variant="outlined"
                  sx={{
                    borderColor: "#3DB80C",
                    px: 2,
                    py: 0.5,
                    borderRadius: 2,
                    display: "flex",
                    width: "200px",
                    background: "transparent",
                  }}
                >
                  <FormControlLabel
                    value="Two Years $80"
                    control={<Radio size="small" />}
                    label="Two Years-$80"
                    sx={{
                      m: 0,
                      "& .MuiRadio-root": { padding: "7px" },
                      width: "100%",
                      "& .MuiRadio-root.Mui-checked": { color: "#3DB80C" },
                    }}
                  />
                </Paper>
              </Grid>
              <Grid size={{ sm: 12, md: 4 }}>
                <Paper
                  variant="outlined"
                  sx={{
                    borderColor: "#3DB80C",
                    px: 2,
                    py: 0.5,
                    borderRadius: 2,
                    display: "flex",
                    width: "200px",
                    background: "transparent",
                  }}
                >
                  <FormControlLabel
                    value="Life Time $500"
                    control={<Radio size="small" />}
                    label="Life Time-$500"
                    sx={{
                      m: 0,
                      "& .MuiRadio-root": { padding: "7px" },
                      width: "100%",
                      "& .MuiRadio-root.Mui-checked": { color: "#3DB80C" },
                    }}
                  />
                </Paper>
              </Grid>
              </Grid>
              </RadioGroup>

              {(type === "/donate" || type === "/member") && (
                <Grid size={{ xs: 12, md: 12 }}>
                  <Divider sx={{ border: "1px groove #3DB80C", width: "100%" ,mt:2,mb:2}} />
                  <Typography fontWeight="600" sx={{mb:1}}>
                    Payment Information<Typography component="span" color="red">*</Typography>
                  </Typography>
                </Grid>
              )}
            <RadioGroup
           
           row
           value={paymentValue}
           onChange={(e) => setPaymentValue(e.target.value)}
         >
              <Grid container margin="auto" spacing={0} border="1px solid #3DB80C">
                <Grid size={{ sm: 12, md: 4 }} width="100%" p={2}>
                  <Paper
                    variant="outlined"
                    sx={{
                      borderColor: "#3DB80C",
                      px: 2,
                      py: 0.5,
                      borderRadius: 2,
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                      width: "200px",
                      background: "transparent",
                    }}
                  >
                    <FormControlLabel
                      value="paypal"
                      control={<Radio size="small" />}
                      label="PayPal"
                      sx={{
                        m: 0,
                        "& .MuiRadio-root": { padding: "7px" },
                        width: "100%",
                        "& .MuiRadio-root.Mui-checked": { color: "#3DB80C" },
                      }}
                    />
                  </Paper>
                </Grid>
                <Grid size={{ sm: 12, md: 8 }} p={2}>
                  <Paper
                    variant="outlined"
                    sx={{
                      borderColor: "#3DB80C",
                      px: 2,
                      py: 0.5,
                      borderRadius: 2,
                      display: "flex",
                      width: "200px",
                      background: "transparent",
                    }}
                  >
                    <FormControlLabel
                      value="zelle"
                      control={<Radio size="small" />}
                      label="Zelle"
                      sx={{
                        m: 0,
                        "& .MuiRadio-root": { padding: "7px" },
                        width: "100%",
                        "& .MuiRadio-root.Mui-checked": { color: "#3DB80C" },
                      }}
                    />
                  </Paper>
                </Grid>

                <Grid size={{ sm: 12, md: 4 }} p={2}>
                  <Paper
                    variant="outlined"
                    sx={{
                      borderColor: "#3DB80C",
                      px: 2,
                      py: 0.5,
                      borderRadius: 2,
                      display: "flex",
                      width: "200px",
                      background: "transparent",
                    }}
                  >
                    <Box flexDirection="column" width="100%">
                      <Typography display="flex" justifyContent="space-between" component="div">
                        <Typography component="span">Subtotal:</Typography>
                        <Typography component="span">$45.00</Typography>
                      </Typography>
                      <Typography display="flex" justifyContent="space-between" component="div">
                        <Typography component="span">Tax</Typography>
                        <Typography component="span">$00.00</Typography>
                      </Typography>
                      <Typography
                        display="flex"
                        justifyContent="space-between"
                        component="div"
                        sx={{ background: "#3DB80C", width: "100%" }}
                      >
                        <Typography component="div" color="white">
                          Total
                        </Typography>
                        <Typography component="div" color="white">
                          $45.00
                        </Typography>
                      </Typography>
                    </Box>
                  </Paper>
                </Grid>
              </Grid>
              </RadioGroup>
            </Grid>
          </>
        )}

        {type === '/donate' && (
          <>
            <Grid size={{ xs: 12, md: 12 }} sx={{ marginLeft: { md: "68px" } }}>
              <Typography fontWeight="600">
                Payment Information<Typography component="span" color="red">*</Typography>
              </Typography>
            </Grid>
            <RadioGroup
          
          row
          value={paymentValue}
          onChange={(e) => setPaymentValue(e.target.value)}
        >
            <Grid container margin="auto" alignItems="center" spacing={0} border="1px solid #3DB80C">
              <Grid size={{ sm: 12, md: 4 }} width="100%" p={2}>
                <Paper
                  variant="outlined"
                  sx={{
                    borderColor: "#3DB80C",
                    px: 2,
                    py: 0.5,
                    borderRadius: 2,
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    width: "200px",
                    background: "transparent",
                  }}
                >
                  <FormControlLabel
                    value="paypal"
                    control={<Radio size="small" />}
                    label="PayPal"
                    sx={{
                      m: 0,
                      "& .MuiRadio-root": { padding: "7px" },
                      width: "100%",
                      "& .MuiRadio-root.Mui-checked": { color: "#3DB80C" },
                    }}
                  />
                </Paper>
              </Grid>
              <Grid size={{ sm: 12, md: 4 }} p={2}>
                <Paper
                  variant="outlined"
                  sx={{
                    borderColor: "#3DB80C",
                    px: 2,
                    py: 0.5,
                    borderRadius: 2,
                    display: "flex",
                    width: "200px",
                    background: "transparent",
                  }}
                >
                  <FormControlLabel
                    value="zelle"
                    control={<Radio size="small" />}
                    label="Zelle"
                    sx={{
                      m: 0,
                      "& .MuiRadio-root": { padding: "7px" },
                      width: "100%",
                      "& .MuiRadio-root.Mui-checked": { color: "#3DB80C" },
                    }}
                  />
                </Paper>
              </Grid>
              <Grid size={{ sm: 12, md: 4 }} p={2}>
                <Box display="flex" flexDirection="column" alignItems="center">
                  <Typography>Total Amount</Typography>
                  <Box sx={{ display: "flex", width: "100%", height: "40px" }}>
                    <Box
                      sx={{
                        backgroundColor: "#3DB80C",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-end",
                        px: 1.2,
                        borderTopLeftRadius: "8px",
                        borderBottomLeftRadius: "8px",
                        border: "1px solid #3DB80C",
                        borderRight: "none",
                      }}
                    >
                      <AttachMoneyIcon sx={{ color: "white" }} />
                    </Box>
                    <TextField
                      variant="outlined"
                      size="small"
                      fullWidth
                      id="total-amount"
                      type="number"
                      name="total-amount"
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          borderTopLeftRadius: 0,
                          borderBottomLeftRadius: 0,
                          borderTopRightRadius: "8px",
                          borderBottomRightRadius: "8px",
                          height: "100%",
                        },
                        "& .MuiOutlinedInput-root.Mui-focused fieldset": {
                          borderColor: "#3DB80C",
                        },
                      }}
                    />
                  </Box>
                  <Typography>Service charge: 3%</Typography>
                </Box>
              </Grid>
            </Grid>
            </RadioGroup>
          </>
        )}

        <Box width="100%" p={2}>
          <Box display="flex" justifyContent="flex-end" sx={{ marginRight: { md: "60px" } }}>
            <Button variant="contained" sx={{ background: "#3DB80C" }}>
              {type==="/member"?"Continue":"Submit"}
            </Button>
          </Box>
        </Box>
      </Grid>
    </Box>
  );
};

export default Registration;