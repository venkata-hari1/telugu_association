import { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  Paper,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { showToast } from "../../Utils/ShowToast";

const Donate = () => {
  const [paymentValue, setPaymentValue] = useState("");
  const [formData, setFormData] = useState<{
    firstName: string;
    lastName: string;
    email: string;
    mobileNumber: string;
    donationAmount: string;
    totalAmount: string;
    paymentMethod: string;
  }>({
    firstName: "",
    lastName: "",
    email: "",
    mobileNumber: "",
    donationAmount: "",
    totalAmount: "",
    paymentMethod: "",
  });

  const [errors, setErrors] = useState<{
    firstName: string;
    lastName: string;
    email: string;
    mobileNumber: string;
    donationAmount: string;
    paymentMethod: string;
  }>({
    firstName: "",
    lastName: "",
    email: "",
    mobileNumber: "",
    donationAmount: "",
    paymentMethod: "",
  });
  // Validate individual field
  const validateField = (name: string, value: string): string => {
    switch (name) {
      case "firstName":
        return value.trim().length < 3
          ? "First name must be at least 3 characters"
          : "";
      case "lastName":
        return value.trim().length < 3
          ? "Last name must be at least 3 characters"
          : "";
      case "email":
        return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
          ? "Invalid email format"
          : "";
      case "mobileNumber":
        return !/^\d{10}$/.test(value.replace(/[\(\)\-\s]/g, ""))
          ? "Invalid phone number (10 digits required)"
          : "";
      case "donationAmount":
        const amount = parseFloat(value);
        return isNaN(amount) || amount < 5
          ? "Donation amount must be at least $5.00"
          : "";
      case "paymentMethod":
        return !value ? "Payment method is required" : "";
      default:
        return "";
    }
  };

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "donationAmount") {
      const amount = parseFloat(value);
      const total = isNaN(amount) ? "" : (amount + amount * 0.03).toFixed(2);
      setFormData((prev) => ({
        ...prev,
        donationAmount: value,
        totalAmount: total,
      }));
    } else if (name === "paymentMethod") {
      setPaymentValue(value);
      setFormData((prev) => ({ ...prev, paymentMethod: value }));
      setErrors((prev) => ({
        ...prev,
        paymentMethod: validateField("paymentMethod", value),
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
      setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
    }
  };

  // Handle form submission
  const handleSubmit = () => {
    if (isFormValid()) {
      showToast(
        true,
        `Thank you! Your donation of $${formData.donationAmount} has been submitted successfully.`
      );
      setTimeout(() => {
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          mobileNumber: "",
          donationAmount: "",
          totalAmount: "",
          paymentMethod: "",
        });
        setErrors({
          firstName: "",
          lastName: "",
          email: "",
          mobileNumber: "",
          donationAmount: "",
          paymentMethod: "",
        });
      }, 200);
      setPaymentValue("");
    }
  };

  // Check if form is valid
  const isFormValid = (): boolean => {
    return (
      formData.firstName.trim().length >= 3 &&
      formData.lastName.trim().length >= 3 &&
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) &&
      /^\d{10}$/.test(formData.mobileNumber.replace(/[\(\)\-\s]/g, "")) &&
      parseFloat(formData.donationAmount || "0") >= 5 &&
      !!formData.paymentMethod &&
      Object.values(errors).every((error) => !error)
    );
  };

  return (
    <Box p={2}>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography color="#3DB80C" fontWeight="700">
          Donate Now
        </Typography>
      </Box>
      <Box
        component={Paper}
        mt={2}
        sx={{
          padding: "10px",
          display: "flex",
          justifyItems: "center",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "90%",
            display: "grid",
            gridTemplateColumns: { lg: "80% 20%", xs: "100%", md: "100%" },
          }}
        >
          <Typography fontWeight="600" sx={{ mt: 1.5 }}>
            Enter Your Donation Amount
          </Typography>
          <Box sx={{ display: "flex", height: "40px", mt: { xs: 1, md: 1 } }}>
            <Box
              sx={{
                backgroundColor: "#3DB80C",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                px: 1.2,
                borderTopLeftRadius: "8px",
                borderBottomLeftRadius: "8px",
                border: errors.donationAmount
                  ? "1px solid red"
                  : "1px solid #3DB80C",
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
              name="donationAmount"
              type="number"
              value={formData.donationAmount}
              onChange={handleChange}
              error={
                !!errors.donationAmount &&
                parseFloat(formData.donationAmount || "0") < 5
              }
              helperText={
                !!errors.donationAmount &&
                parseFloat(formData.donationAmount || "0") < 5
                  ? errors.donationAmount
                  : ""
              }
              placeholder=""
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderTopLeftRadius: 0,
                  borderBottomLeftRadius: 0,
                  borderTopRightRadius: "8px",
                  borderBottomRightRadius: "8px",
                  height: "100%",
                  "& fieldset": {
                    borderColor:
                      !!errors.donationAmount &&
                      parseFloat(formData.donationAmount || "0") < 5
                        ? "red"
                        : "#3DB80C",
                  },
                  "&:hover fieldset": {
                    borderColor:
                      !!errors.donationAmount &&
                      parseFloat(formData.donationAmount || "0") < 5
                        ? "red"
                        : "#3DB80C",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor:
                      !!errors.donationAmount &&
                      parseFloat(formData.donationAmount || "0") < 5
                        ? "red"
                        : "#3DB80C",
                  },
                },
              }}
            />
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "flex-end",
          mb: 2,
        }}
      >
        <Typography
          sx={{ fontSize: "12px", fontWeight: 550, mt: 1, color: "#F4260A" }}
        >
          Note: Donation amount should be min of a $5.00
        </Typography>
      </Box>
      {/* Form fields */}
      <Box
        component={Paper}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          p: { xs: "20px", md: "20px", lg: "20px" },
        }}
      >
        <Box
          sx={{
            width: { lg: "90%", xs: "98%", md: "98%" },
            ml: { lg: 1, xs: 0, md: 0 },
          }}
        >
          <Box
            sx={{
              width: "100%",
              display: "grid",
              gridTemplateColumns: { lg: "49% 49%", xs: "100%", md: "100%" },
              gridGap: "2%",
              mb: 2,
            }}
          >
            {/* Donation Amount */}

            {/* Empty column for grid alignment */}

            {/* First Name */}
            <FormControl fullWidth sx={{ mb: 2 }}>
              <Typography fontWeight="600">
                First Name
                <Typography component="span" color="red">
                  *
                </Typography>
              </Typography>
              <TextField
                fullWidth
                id="first-name"
                name="firstName"
                variant="outlined"
                placeholder="Your First Name"
                size="small"
                value={formData.firstName}
                onChange={handleChange}
                error={!!errors.firstName}
                helperText={errors.firstName}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: errors.firstName ? "red" : "#3DB80C",
                    },
                    "&:hover fieldset": {
                      borderColor: errors.firstName ? "red" : "#3DB80C",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: errors.firstName ? "red" : "#3DB80C",
                    },
                  },
                }}
              />
            </FormControl>

            {/* Last Name */}
            <FormControl fullWidth sx={{ mb: 2 }}>
              <Typography fontWeight="600">
                Last Name
                <Typography component="span" color="red">
                  *
                </Typography>
              </Typography>
              <TextField
                fullWidth
                id="last-name"
                name="lastName"
                variant="outlined"
                size="small"
                placeholder="Your Last Name"
                value={formData.lastName}
                onChange={handleChange}
                error={!!errors.lastName}
                helperText={errors.lastName}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: errors.lastName ? "red" : "#3DB80C",
                    },
                    "&:hover fieldset": {
                      borderColor: errors.lastName ? "red" : "#3DB80C",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: errors.lastName ? "red" : "#3DB80C",
                    },
                  },
                }}
              />
            </FormControl>

            {/* Email */}
            <FormControl fullWidth sx={{ mb: 2 }}>
              <Typography fontWeight="600">
                Email
                <Typography component="span" color="red">
                  *
                </Typography>
              </Typography>
              <TextField
                fullWidth
                id="email"
                name="email"
                variant="outlined"
                placeholder="Your Email ID"
                size="small"
                type="email"
                value={formData.email}
                onChange={handleChange}
                error={!!errors.email}
                helperText={errors.email}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: errors.email ? "red" : "#3DB80C",
                    },
                    "&:hover fieldset": {
                      borderColor: errors.email ? "red" : "#3DB80C",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: errors.email ? "red" : "#3DB80C",
                    },
                  },
                }}
              />
            </FormControl>

            {/* Mobile Number */}
            <FormControl fullWidth sx={{ mb: 2 }}>
              <Typography fontWeight="600">
                Mobile No
                <Typography component="span" color="red">
                  *
                </Typography>
              </Typography>
              <TextField
                fullWidth
                id="mobile-no"
                name="mobileNumber"
                variant="outlined"
                size="small"
                type="text"
                placeholder="Your Mobile Number"
                value={formData.mobileNumber}
                onChange={handleChange}
                error={!!errors.mobileNumber}
                helperText={errors.mobileNumber}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: errors.mobileNumber ? "red" : "#3DB80C",
                    },
                    "&:hover fieldset": {
                      borderColor: errors.mobileNumber ? "red" : "#3DB80C",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: errors.mobileNumber ? "red" : "#3DB80C",
                    },
                  },
                }}
              />
            </FormControl>
          </Box>

          {/* Payment Information */}
          <FormControl fullWidth sx={{ mb: 2 }}>
            <Typography fontWeight="600">
              Payment Information
              <Typography component="span" color="red">
                *
              </Typography>
            </Typography>
            <RadioGroup
              row
              value={paymentValue}
              onChange={(e) =>
                handleChange({
                  target: { name: "paymentMethod", value: e.target.value },
                } as any)
              }
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { lg: "row", xs: "column", md: "column" },
                  alignItems: "center",
                  border: errors.paymentMethod
                    ? "1px solid red"
                    : "1px solid #3DB80C",
                  p: 2,
                  width: "100%",
                }}
              >
                <Paper
                  variant="outlined"
                  sx={{
                    borderColor: errors.paymentMethod ? "red" : "#3DB80C",
                    px: 2,
                    py: 0.5,
                    borderRadius: 2,
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    width: { lg: "200px", xs: "100%" },
                    mb: { xs: 2, lg: 0 },
                    mr: { lg: 2, xs: 0 },
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
                <Paper
                  variant="outlined"
                  sx={{
                    borderColor: errors.paymentMethod ? "red" : "#3DB80C",
                    px: 2,
                    py: 0.5,
                    borderRadius: 2,
                    display: "flex",
                    width: { lg: "200px", xs: "100%" },
                    mb: { xs: 2, lg: 0 },
                    mr: { lg: 2, xs: 0 },
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
                <Box
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  width={{ lg: "200px", xs: "100%" }}
                >
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
                        border: errors.donationAmount
                          ? "1px solid red"
                          : "1px solid #3DB80C",
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
                      value={formData.totalAmount}
                      disabled
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          borderTopLeftRadius: 0,
                          borderBottomLeftRadius: 0,
                          borderTopRightRadius: "8px",
                          borderBottomRightRadius: "8px",
                          height: "100%",
                          "& fieldset": {
                            borderColor: errors.donationAmount
                              ? "red"
                              : "#3DB80C",
                          },
                          "&:hover fieldset": {
                            borderColor: errors.donationAmount
                              ? "red"
                              : "#3DB80C",
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: errors.donationAmount
                              ? "red"
                              : "#3DB80C",
                          },
                        },
                      }}
                    />
                  </Box>
                  <Typography>Service charge: 3%</Typography>
                  {errors.paymentMethod && (
                    <Typography color="error" variant="caption" sx={{ mt: 1 }}>
                      {errors.paymentMethod}
                    </Typography>
                  )}
                </Box>
              </Box>
            </RadioGroup>
          </FormControl>

          <Box width="100%" p={2}>
            <Box
              display="flex"
              justifyContent="flex-end"
              sx={{ marginRight: { md: "60px" } }}
            >
              <Button
                variant="contained"
                sx={{ background: "#3DB80C" }}
                disabled={!isFormValid()}
                onClick={handleSubmit}
              >
                Submit
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Donate;
