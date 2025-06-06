import { useEffect, useState } from "react";
import {
  Box,
  Grid,
  TextField,
  Typography,
  FormControl,
  Button,
  Select,
  MenuItem
} from "@mui/material";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import CancelIcon from '@mui/icons-material/Cancel';
import { GreenTextField, Submit, VisuallyHiddenInput } from "../../adminstyles/MembershiptableStyles";
import {showToast} from "../../Utils/ShowToast";

const Addsponsor = () => {
  const [formData, setFormData] = useState<{
    companyName: string;
    sponsorName: string;
    email: string;
    website: string;
    sponsorshipPlan: string;
    membershipDuration: string;
    startDate: string;
    endDate: string;
    image: File | null;
  }>({
    companyName: '',
    sponsorName: '',
    email: '',
    website: '',
    sponsorshipPlan: 'Platinum',
    membershipDuration: '',
    startDate: '',
    endDate: '',
    image: null
  });

  const [errors, setErrors] = useState<{
    companyName: string;
    sponsorName: string;
    email: string;
    website: string;
    sponsorshipPlan: string;
    membershipDuration: string;
    startDate: string;
    endDate: string;
    image: string;
  }>({
    companyName: '',
    sponsorName: '',
    email: '',
    website: '',
    sponsorshipPlan: '',
    membershipDuration: '',
    startDate: '',
    endDate: '',
    image: ''
  });

  const [imagePreview, setImagePreview] = useState<string | null>(null);

  // Validate individual field
  const validateField = (name: string, value: string | File | null): string => {
    switch (name) {
      case 'companyName':
        return typeof value === 'string' && value.trim().length < 3
          ? 'Company name must be at least 3 characters'
          : '';
      case 'sponsorName':
        return typeof value === 'string' && value.trim().length < 3
          ? 'Sponsor name must be at least 3 characters'
          : '';
      case 'email':
        return typeof value === 'string' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
          ? 'Invalid email format'
          : '';
      case 'website':
        return typeof value === 'string' && !/^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/.test(value)
          ? 'Invalid URL format'
          : '';
      case 'sponsorshipPlan':
        return typeof value === 'string' && !value
          ? 'Sponsorship plan is required'
          : '';
      case 'membershipDuration':
        return typeof value === 'string' && !value
          ? 'Membership duration is required'
          : '';
      case 'startDate':
        return typeof value === 'string' && !value
          ? 'Start date is required'
          : '';
      case 'endDate':
        if (typeof value === 'string' && !value) {
          return 'End date is required';
        }
        if (typeof value === 'string' && formData.startDate && value < formData.startDate) {
          return 'End date must be after start date';
        }
        return '';
      case 'image':
        return !value ? 'Image is required' : '';
      default:
        return '';
    }
  };

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement> | { target: { name?: string; value: unknown } }) => {
      const { name, value } = e.target as HTMLInputElement | { name?: string; value: unknown };
      const files = (e.target as HTMLInputElement).files;
    
    if (name) {
      if (name === 'image' && files && files[0]) {
        const file = files[0];
        setFormData(prev => ({ ...prev, image: file }));
        setErrors(prev => ({ ...prev, image: validateField(name, file) }));
        setImagePreview(URL.createObjectURL(file));
      } else {
        setFormData(prev => ({ ...prev, [name]: value as string }));
        setErrors(prev => ({
          ...prev,
          [name]: validateField(name, value as string),
          ...(name === 'startDate' ? { endDate: validateField('endDate', prev.endDate) } : {})
        }));
      }
    }
  };

  // Handle image cancel
  const handleCancelImage = () => {
    setFormData(prev => ({ ...prev, image: null }));
    setErrors(prev => ({ ...prev, image: 'Image is required' }));
    setImagePreview(null);
    const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement;
    if (fileInput) fileInput.value = '';
  };

  // Handle form submission
  const handleSubmit = () => {
    if (isFormValid()) {
      setFormData({
        companyName: '',
        sponsorName: '',
        email: '',
        website: '',
        sponsorshipPlan: 'Platinum',
        membershipDuration: '',
        startDate: '',
        endDate: '',
        image: null
      });
      setErrors({
        companyName: '',
        sponsorName: '',
        email: '',
        website: '',
        sponsorshipPlan: '',
        membershipDuration: '',
        startDate: '',
        endDate: '',
        image: ''
      });
      showToast(true,'Sponor Added Successfully')
      setImagePreview(null);
      const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement;
      if (fileInput) fileInput.value = '';
    }
  };

  // Check if form is valid
  const isFormValid = (): boolean => {
    return (
      formData.companyName.trim().length >= 3 &&
      formData.sponsorName.trim().length >= 3 &&
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) &&
      /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/.test(formData.website) &&
      !!formData.sponsorshipPlan &&
      !!formData.membershipDuration &&
      !!formData.startDate &&
      !!formData.endDate &&
      formData.endDate >= formData.startDate &&
      formData.image !== null &&
      Object.values(errors).every(error => error === '')
    );
  };

  // Cleanup preview URL on component unmount
  useEffect(() => {
    return () => {
      if (imagePreview) {
        URL.revokeObjectURL(imagePreview);
      }
    };
  }, [imagePreview]);

  return (
    <Box sx={{ overflowX: { sm: 'hidden' } }}>
      <Grid container spacing={2}>
        {/* Company Name */}
        <Grid size={{ xs: 12, sm: 12, md: 2, lg: 2 }}>
          <Typography>Company Name</Typography>
        </Grid>
        <Grid size={{ xs: 12, sm: 12, md: 10, lg: 10 }}>
          <TextField
            fullWidth
            size="small"
            name="companyName"
            value={formData.companyName}
            onChange={(event) => handleChange(event as React.ChangeEvent<HTMLInputElement> | { target: { name?: string; value: unknown } })}
            error={!!errors.companyName}
            helperText={errors.companyName}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: errors.companyName ? "red" : "#3DB80C" },
                "&:hover fieldset": { borderColor: errors.companyName ? "red" : "#3DB80C" },
                "&.Mui-focused fieldset": { borderColor: errors.companyName ? "red" : "#3DB80C" },
                borderRadius: "8px",
                width: { md: "600px", lg: "600px", xs: "100%", sm: "600px" },
              },
            }}
          />
        </Grid>

        {/* Sponsor Name */}
        <Grid size={{ xs: 12, sm: 12, md: 2, lg: 2 }}>
          <Typography>Sponsor Name</Typography>
        </Grid>
        <Grid size={{ xs: 12, sm: 12, md: 10, lg: 10 }}>
          <TextField
            type="text"
            fullWidth
            size="small"
            name="sponsorName"
            value={formData.sponsorName}
            onChange={handleChange}
            error={!!errors.sponsorName}
            helperText={errors.sponsorName}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: errors.sponsorName ? "red" : "#3DB80C" },
                "&:hover fieldset": { borderColor: errors.sponsorName ? "red" : "#3DB80C" },
                "&.Mui-focused fieldset": { borderColor: errors.sponsorName ? "red" : "#3DB80C" },
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

        {/* Website */}
        <Grid size={{ xs: 12, sm: 12, md: 2, lg: 2 }}>
          <Typography>Website</Typography>
        </Grid>
        <Grid size={{ xs: 12, sm: 12, md: 10, lg: 10 }}>
          <TextField
            fullWidth
            type="text"
            size="small"
            name="website"
            value={formData.website}
            onChange={handleChange}
            error={!!errors.website}
            helperText={errors.website}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: errors.website ? "red" : "#3DB80C" },
                "&:hover fieldset": { borderColor: errors.website ? "red" : "#3DB80C" },
                "&.Mui-focused fieldset": { borderColor: errors.website ? "red" : "#3DB80C" },
                borderRadius: "8px",
                width: { md: "600px", lg: "600px", xs: "100%", sm: "600px" },
              },
            }}
          />
        </Grid>

        {/* Sponsorship Plan */}
        <Grid size={{ xs: 12, sm: 12, md: 2, lg: 2 }}>
          <Typography>Sponsorship Plan</Typography>
        </Grid>
        <Grid size={{ xs: 12, sm: 12, md: 10, lg: 10 }}>
          <FormControl size="small">
            <Select
              name="sponsorshipPlan"
              value={formData.sponsorshipPlan}
              onChange={handleChange}
              variant="outlined"
              displayEmpty
              IconComponent={() => (
                <ArrowDropDownIcon sx={{ color: '#3DB80C', cursor: 'pointer' }} />
              )}
              MenuProps={{
                PaperProps: {
                  sx: {
                    backgroundColor: '#FDF7E1',
                    marginTop: '4px',
                    '& .MuiMenuItem-root': {
                      backgroundColor: '#FDF7E1',
                      color: '#3DB80C',
                      '&:hover': {
                        backgroundColor: '#3DB80C',
                        color: 'white',
                      },
                    },
                  },
                },
              }}
              sx={{
                color: '#3DB80C',
                backgroundColor: '#FDF7E1',
                border: errors.sponsorshipPlan ? '1px solid red' : '1px solid #3DB80C',
                borderRadius: '8px',
                width: '140px',
                padding: '1px 1px',
                '& .MuiSelect-outlined': {
                  padding: '8px 10px',
                  color: "#3DB80C",
                  background: 'transparent'
                },
                '& fieldset': {
                  border: 'none',
                },
              }}
            >
              <MenuItem value="Platinum">Platinum</MenuItem>
              <MenuItem value="Gold">Gold</MenuItem>
              <MenuItem value="Silver">Silver</MenuItem>
            </Select>
            {errors.sponsorshipPlan && (
              <Typography color="error" variant="caption" sx={{ mt: 1, display: 'block' }}>
                {errors.sponsorshipPlan}
              </Typography>
            )}
          </FormControl>
        </Grid>

        {/* Membership Duration */}
        <Grid size={{ xs: 12, sm: 12, md: 2, lg: 2 }}>
          <Typography>Membership Duration</Typography>
        </Grid>
        <Grid size={{ xs: 12, sm: 12, md: 10, lg: 10 }}>
          <FormControl size="small">
            <Select
              name="membershipDuration"
              value={formData.membershipDuration}
              onChange={handleChange}
              variant="outlined"
              displayEmpty
              IconComponent={() => (
                <ArrowDropDownIcon sx={{ color: '#3DB80C', cursor: 'pointer' }} />
              )}
              MenuProps={{
                PaperProps: {
                  sx: {
                    backgroundColor: '#FDF7E1',
                    marginTop: '4px',
                    '& .MuiMenuItem-root': {
                      backgroundColor: '#FDF7E1',
                      color: '#3DB80C',
                      '&:hover': {
                        backgroundColor: '#3DB80C',
                        color: 'white',
                      },
                    },
                  },
                },
              }}
              sx={{
                color: '#3DB80C',
                backgroundColor: '#FDF7E1',
                border: errors.membershipDuration ? '1px solid red' : '1px solid #3DB80C',
                borderRadius: '8px',
                width: '140px',
                padding: '1px 1px',
                '& .MuiSelect-outlined': {
                  padding: '8px 10px',
                  color: "#3DB80C",
                  background: 'transparent'
                },
                '& fieldset': {
                  border: 'none',
                },
              }}
            >
              <MenuItem value="One Month">One Month</MenuItem>
              <MenuItem value="Six Months">Six Months</MenuItem>
              <MenuItem value="One Year">One Year</MenuItem>
            </Select>
            {errors.membershipDuration && (
              <Typography color="error" variant="caption" sx={{ mt: 1, display: 'block' }}>
                {errors.membershipDuration}
              </Typography>
            )}
          </FormControl>
        </Grid>

        {/* Date */}
        <Grid size={{ xs: 12, sm: 12, md: 2, lg: 2 }}>
          <Typography>Date</Typography>
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

        {/* Image Upload and Preview */}
        <Grid size={{ xs: 12, sm: 12, md: 2, lg: 2 }}>
          <Typography>Load Image</Typography>
        </Grid>
        <Grid size={{ xs: 12, sm: 12, md: 10, lg: 10 }}>
          <Box display="flex" alignItems="center" gap={2}>
            <Button
              component="label"
              variant="outlined"
              tabIndex={-1}
              endIcon={<UploadFileIcon />}
              sx={{ borderColor: '#3DB80C', color: '#3DB80C', paddingTop: "7px", paddingBottom: '7px' }}
            >
              Upload
              <VisuallyHiddenInput
                type="file"
                name="image"
                onChange={handleChange}
                accept="image/*"
              />
            </Button>
            {imagePreview && (
              <Button
                variant="outlined"
                color="error"
                onClick={handleCancelImage}
                startIcon={<CancelIcon />}
                sx={{ paddingTop: "7px", paddingBottom: '7px' }}
              >
                Cancel
              </Button>
            )}
          </Box>
          {imagePreview && (
            <Box sx={{ mt: 2 }}>
              <img
                src={imagePreview}
                alt="Sponsor preview"
                style={{ maxWidth: '200px', maxHeight: '200px', objectFit: 'contain' }}
              />
            </Box>
          )}
          {errors.image && (
            <Typography color="error" variant="caption" sx={{ mt: 1, display: 'block' }}>
              {errors.image}
            </Typography>
          )}
        </Grid>

        {/* Submit Button */}
        <Grid size={{ xs: 12, sm: 12, md: 10, lg: 10 }}>
          <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
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

export default Addsponsor;