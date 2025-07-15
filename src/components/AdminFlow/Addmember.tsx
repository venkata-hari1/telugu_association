import { useState } from "react";
import {
  Box,
  FormControlLabel,
  Grid,
  Paper,
  Radio,
  TextField,
  Typography,
  FormControl,
  Select,
  MenuItem
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import { GreenTextField, Submit } from "../../adminstyles/MembershiptableStyles";
import { showToast } from "../../Utils/ShowToast";

const AddMember = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<{
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    paymentMethod: string;
    subscriptionPlan: string;
    startDate: string;
    endDate: string;
  }>({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    paymentMethod: 'zelle',
    subscriptionPlan: 'One Year',
    startDate: '',
    endDate: ''
  });

  const [errors, setErrors] = useState<{
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    paymentMethod: string;
    subscriptionPlan: string;
    startDate: string;
    endDate: string;
  }>({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    paymentMethod: '',
    subscriptionPlan: '',
    startDate: '',
    endDate: ''
  });

  // Validate individual field
  const validateField = (name: string, value: string): string => {
    switch (name) {
      case 'firstName':
        return value.trim().length < 3 ? 'First name must be at least 3 characters' : '';
      case 'lastName':
        return value.trim().length < 3 ? 'Last name must be at least 3 characters' : '';
      case 'email':
        return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? 'Invalid email format' : '';
      case 'phoneNumber':
        return !/^\d{10}$/.test(value.replace(/[\(\)\-\s]/g, '')) ? 'Invalid phone number (10 digits required)' : '';
      case 'paymentMethod':
        return !value ? 'Payment method is required' : '';
      case 'subscriptionPlan':
        return !value ? 'Subscription plan is required' : '';
      case 'startDate':
        return !value ? 'Start date is required' : '';
      case 'endDate':
        if (!value) return 'End date is required';
        if (formData.startDate && value < formData.startDate) {
          return 'End date must be after start date';
        }
        return '';
      default:
        return '';
    }
  };

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | { name?: string; value: unknown }> | any) => {
    const { name, value } = e.target as HTMLInputElement;
    if (name) {
      setFormData(prev => ({ ...prev, [name]: value as string }));
      setErrors(prev => ({
        ...prev,
        [name]: validateField(name, value as string),
        ...(name === 'startDate' ? { endDate: validateField('endDate', prev.endDate) } : {})
      }));
    }
  };

  // Handle form submission
  const handleSubmit = () => {
    if (isFormValid()) {
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        paymentMethod: 'zelle',
        subscriptionPlan: 'One Year',
        startDate: '',
        endDate: ''
      });
      setErrors({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        paymentMethod: '',
        subscriptionPlan: '',
        startDate: '',
        endDate: ''
      });
    }
    showToast(true,'Member Added Successfully')
  };

  // Check if form is valid
  const isFormValid = (): boolean => {
    return (
      formData.firstName.trim().length >= 3 &&
      formData.lastName.trim().length >= 3 &&
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) &&
      /^\d{10}$/.test(formData.phoneNumber.replace(/[\(\)\-\s]/g, '')) &&
      !!formData.paymentMethod &&
      !!formData.subscriptionPlan &&
      !!formData.startDate &&
      !!formData.endDate &&
      formData.endDate >= formData.startDate &&
      Object.values(errors).every(error => error === '')
    );
  };

  return (
    <Box sx={{ overflowX: { sm: "hidden" } }}>
      <Box display="flex" alignItems="center" mb={2}>
        <ArrowBackIcon onClick={() => navigate(-1)} sx={{ cursor: 'pointer', color: '#3DB80C', mr: 1 }} />
        <Typography variant="h5" color="#3DB80C">
          Membership Management / <Typography component="span" fontSize={22} fontWeight={300}>Add Member</Typography>
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {/* First Name */}
        <Grid size={{ xs: 12, sm: 12, md: 2, lg: 2 }}>
          <Typography>First Name</Typography>
        </Grid>
        <Grid size={{ xs: 12, sm: 12, md: 10, lg: 10 }}>
          <TextField
            fullWidth
            size="small"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            error={!!errors.firstName}
            helperText={errors.firstName}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: errors.firstName ? "red" : "#3DB80C" },
                "&:hover fieldset": { borderColor: errors.firstName ? "red" : "#3DB80C" },
                "&.Mui-focused fieldset": { borderColor: errors.firstName ? "red" : "#3DB80C" },
                borderRadius: "8px",
                width: { md: "600px", lg: "600px", xs: "100%", sm: "600px" },
              },
            }}
          />
        </Grid>

        {/* Last Name */}
        <Grid size={{ xs: 12, sm: 12, md: 2, lg: 2 }}>
          <Typography>Last Name</Typography>
        </Grid>
        <Grid size={{ xs: 12, sm: 12, md: 10, lg: 10 }}>
          <TextField
            type="text"
            fullWidth
            size="small"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            error={!!errors.lastName}
            helperText={errors.lastName}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: errors.lastName ? "red" : "#3DB80C" },
                "&:hover fieldset": { borderColor: errors.lastName ? "red" : "#3DB80C" },
                "&.Mui-focused fieldset": { borderColor: errors.lastName ? "red" : "#3DB80C" },
                borderRadius: "8px",
                width: { md: "600px", lg: "600px", xs: "100%", sm: "600px" },
              },
            }}
          />
        </Grid>

        {/* Email Address */}
        <Grid size={{ xs: 12, sm: 12, md: 2, lg: 2 }}>
          <Typography>Email Address</Typography>
        </Grid>
        <Grid size={{ xs: 12, sm: 12, md: 10, lg: 10 }}>
          <TextField
            fullWidth
            type="email"
            size="small"
            name="email"
            value={formData.email}
            onChange={handleChange}
            error={!!errors.email}
            helperText={errors.email}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: errors.email ? "red" : "#3DB80C" },
                "&:hover fieldset": { borderColor: errors.email ? "red" : "#3DB80C" },
                "&.Mui-focused fieldset": { borderColor: errors.email ? "red" : "#3DB80C" },
                borderRadius: "8px",
                width: { md: "600px", lg: "600px", xs: "100%", sm: "600px" },
              },
            }}
          />
        </Grid>

        {/* Phone Number */}
        <Grid size={{ xs: 12, sm: 12, md: 2, lg: 2 }}>
          <Typography>Phone Number</Typography>
        </Grid>
        <Grid size={{ xs: 12, sm: 12, md: 10, lg: 10 }}>
          <TextField
            fullWidth
            type="text"
            size="small"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            error={!!errors.phoneNumber}
            helperText={errors.phoneNumber}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: errors.phoneNumber ? "red" : "#3DB80C" },
                "&:hover fieldset": { borderColor: errors.phoneNumber ? "red" : "#3DB80C" },
                "&.Mui-focused fieldset": { borderColor: errors.phoneNumber ? "red" : "#3DB80C" },
                borderRadius: "8px",
                width: { md: "600px", lg: "600px", xs: "100%", sm: "600px" },
              },
            }}
          />
        </Grid>

        {/* Payment Method */}
        <Grid size={{ xs: 12, sm: 12, md: 2, lg: 2 }}>
          <Typography>Payment Method</Typography>
        </Grid>
        <Grid size={{ xs: 12, sm: 12, md: 10, lg: 10 }}>
          <Paper
            variant="outlined"
            sx={{
              borderColor: errors.paymentMethod ? "red" : "#3DB80C",
              px: 2,
              py: 0.5,
              borderRadius: 2,
              display: "flex",
              alignItems: "center",
              width: "150px",
              background: "transparent",
            }}
          >
            <FormControlLabel
              value="zelle"
              control={<Radio size="small" checked={formData.paymentMethod === 'zelle'} />}
              label="Zelle"
              onChange={handleChange}
              name="paymentMethod"
              sx={{
                m: 0,
                "& .MuiRadio-root": { padding: "7px" },
                width: "100%",
                "& .MuiRadio-root.Mui-checked": {
                  color: "#3DB80C",
                },
              }}
            />
          </Paper>
          {errors.paymentMethod && (
            <Typography color="error" variant="caption" sx={{ mt: 1, display: 'block' }}>
              {errors.paymentMethod}
            </Typography>
          )}
        </Grid>

        {/* Subscription Plan */}
        <Grid size={{ xs: 12, sm: 12, md: 2, lg: 2 }}>
          <Typography>Subscription Plan</Typography>
        </Grid>
        <Grid size={{ xs: 12, sm: 12, md: 10, lg: 10 }}>
          <FormControl size="small">
            <Select
              name="subscriptionPlan"
              value={formData.subscriptionPlan}
              onChange={handleChange}
              variant="outlined"
              displayEmpty
              IconComponent={() => (
                <ArrowDropDownIcon sx={{ color: "#3DB80C", cursor: "pointer" }} />
              )}
              MenuProps={{
                PaperProps: {
                  sx: {
                    backgroundColor: "#FDF7E1",
                    marginTop: "4px",
                    "& .MuiMenuItem-root": {
                      backgroundColor: "#FDF7E1",
                      color: "#3DB80C",
                      "&:hover": {
                        backgroundColor: "#3DB80C",
                        color: "white",
                      },
                    },
                  },
                },
              }}
              sx={{
                color: "#3DB80C",
                backgroundColor: "#FDF7E1",
                border: errors.subscriptionPlan ? "1px solid red" : "1px solid #3DB80C",
                borderRadius: "8px",
                width: "140px",
                padding: "2px 2px",
                "& .MuiSelect-outlined": {
                  padding: "8px 10px",
                  color: "#3DB80C",
                  background: "transparent",
                },
                "& fieldset": {
                  border: "none",
                },
              }}
            >
              <MenuItem value="One Month">One Month</MenuItem>
              <MenuItem value="Six Months">Six Months</MenuItem>
              <MenuItem value="One Year">One Year</MenuItem>
            </Select>
            {errors.subscriptionPlan && (
              <Typography color="error" variant="caption" sx={{ mt: 1, display: 'block' }}>
                {errors.subscriptionPlan}
              </Typography>
            )}
          </FormControl>
        </Grid>

        {/* Membership Date */}
        <Grid size={{ xs: 12, sm: 12, md: 2, lg: 2 }}>
          <Typography>Membership Date</Typography>
        </Grid>
        <Grid size={{ xs: 12, sm: 12, md: 10, lg: 10 }}>
          <Box display="flex" alignItems="center" gap={3}>
            <GreenTextField
              type="date"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              InputLabelProps={{ shrink: true }}
              size="small"
              error={!!errors.startDate}
              helperText={errors.startDate}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: errors.startDate ? "red" : "#3DB80C" },
                  "&:hover fieldset": { borderColor: errors.startDate ? "red" : "#3DB80C" },
                  "&.Mui-focused fieldset": { borderColor: errors.startDate ? "red" : "#3DB80C" },
                  borderRadius: "8px",
                },
              }}
            />
            <Typography>To</Typography>
            <GreenTextField
              type="date"
              name="endDate"
              value={formData.endDate}
              onChange={handleChange}
              InputLabelProps={{ shrink: true }}
              size="small"
              error={!!errors.endDate}
              helperText={errors.endDate}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: errors.endDate ? "red" : "#3DB80C" },
                  "&:hover fieldset": { borderColor: errors.endDate ? "red" : "#3DB80C" },
                  "&.Mui-focused fieldset": { borderColor: errors.endDate ? "red" : "#3DB80C" },
                  borderRadius: "8px",
                },
              }}
            />
          </Box>
        </Grid>

        {/* Submit Button */}
        <Grid size={{ xs: 12, sm: 12, md: 10, lg: 10 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mt: 3,
            }}
          >
            <Submit
              variant="contained"
              size="large"
              disabled={!isFormValid()}
              onClick={handleSubmit}
            >
              Submit
            </Submit>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AddMember;