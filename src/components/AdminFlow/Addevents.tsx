import { useEffect, useState } from "react";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { GreenTextField, Submit, VisuallyHiddenInput } from "../../adminstyles/MembershiptableStyles";
import UploadFileIcon from '@mui/icons-material/UploadFile';
import CancelIcon from '@mui/icons-material/Cancel';
import { setMessage, setPopUp } from "../../Redux/UserFlow";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../Redux/Store";
import PopUp from "../../Utils/Popup";

const Addevent = () => {
  // State for form values and errors
  const [formData, setFormData] = useState<{
    eventTitle: string;
    date: string;
    eventTime: string;
    eventVenue: string;
    eventDescription: string;
    image: File | null;
  }>({
    eventTitle: '',
    date: '',
    eventTime: '',
    eventVenue: '',
    eventDescription: '',
    image: null
  });

  const [errors, setErrors] = useState<{
    eventTitle: string;
    date: string;
    eventTime: string;
    eventVenue: string;
    eventDescription: string;
    image: string;
  }>({
    eventTitle: '',
    date: '',
    eventTime: '',
    eventVenue: '',
    eventDescription: '',
    image: ''
  });

  // State for image preview URL
  const [imagePreview, setImagePreview] = useState<string | null>(null);

 const dispatch=useDispatch<AppDispatch>()
  const validateField = (name: string, value: string | File | null): string => {
    switch (name) {
      case 'eventTitle':
        return typeof value === 'string' && value.trim().length < 3 ? 'Event title must be at least 3 characters' : '';
      case 'date':
        return typeof value === 'string' && !value ? 'Date is required' : '';
      case 'eventTime':
        return typeof value === 'string' && !value ? 'Time is required' : '';
      case 'eventVenue':
        return typeof value === 'string' && value.trim().length < 3 ? 'Venue must be at least 3 characters' : '';
      case 'eventDescription':
        return typeof value === 'string' && value.trim().length < 10 ? 'Description must be at least 10 characters' : '';
      case 'image':
        return !value ? 'Image is required' : '';
      default:
        return '';
    }
  };

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;
    
    // Handle file input separately
    if (name === 'image' && files && files[0]) {
      const file = files[0];
      setFormData(prev => ({
        ...prev,
        image: file
      }));
      setErrors(prev => ({
        ...prev,
        image: validateField(name, file)
      }));
      // Create preview URL
      setImagePreview(URL.createObjectURL(file));
    } else if (name !== 'image') {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
      setErrors(prev => ({
        ...prev,
        [name]: validateField(name, value)
      }));
    }
  };

  // Handle image cancel
  const handleCancelImage = () => {
    setFormData(prev => ({
      ...prev,
      image: null
    }));
    setErrors(prev => ({
      ...prev,
      image: 'Image is required'
    }));
    setImagePreview(null);
    const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement;
    if (fileInput) fileInput.value = '';
  };

  // Handle form submission
  const handleSubmit = () => {
    if (isFormValid()) {
      setFormData({
        eventTitle: '',
        date: '',
        eventTime: '',
        eventVenue: '',
        eventDescription: '',
        image: null
      });
      setErrors({
        eventTitle: '',
        date: '',
        eventTime: '',
        eventVenue: '',
        eventDescription: '',
        image: ''
      });
      dispatch(setPopUp(true))
      dispatch(setMessage('Event Added Successfully'))
      setImagePreview(null);
      const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement;
      if (fileInput) fileInput.value = '';
    }
  };

  // Check if form is valid
  const isFormValid = (): boolean => {
    return (
      formData.eventTitle.trim().length >= 3 &&
      !!formData.date &&
      !!formData.eventTime &&
      formData.eventVenue.trim().length >= 3 &&
      formData.eventDescription.trim().length >= 10 &&
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
    <Box sx={{overflowX:{sm:'hidden'}}}>
      <PopUp/>
      <Grid container spacing={4} mt={4}>
        {/* Event Title */}
        <Grid size={{ xs: 12, sm: 12, md: 2, lg: 2 }}>
          <Typography>Event Title</Typography>
        </Grid>
        <Grid size={{ xs: 12, sm: 12, md: 10, lg: 10 }}>
          <TextField
            fullWidth
            size="small"
            name="eventTitle"
            value={formData.eventTitle}
            onChange={handleChange}
            error={!!errors.eventTitle}
            helperText={errors.eventTitle}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: errors.eventTitle ? "red" : "#3DB80C" },
                "&:hover fieldset": { borderColor: errors.eventTitle ? "red" : "#3DB80C" },
                "&.Mui-focused fieldset": { borderColor: errors.eventTitle ? "red" : "#3DB80C" },
                borderRadius: "8px",
                width: { md: "600px", lg: "600px", xs: "100%", sm: "600px" },
              },
            }}
          />
        </Grid>

        {/* Date */}
        <Grid size={{ xs: 12, sm: 12, md: 2, lg: 2 }}>
          <Typography>Date</Typography>
        </Grid>
        <Grid size={{ xs: 12, sm: 12, md: 10, lg: 10 }}>
          <Box display="flex" alignItems="center" gap={3}>
            <GreenTextField
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              InputLabelProps={{ shrink: true }}
              size="small"
              error={!!errors.date}
              helperText={errors.date}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: errors.date ? "red" : "#3DB80C" },
                  "&:hover fieldset": { borderColor: errors.date ? "red" : "#3DB80C" },
                  "&.Mui-focused fieldset": { borderColor: errors.date ? "red" : "#3DB80C" },
                  borderRadius: "8px",
                },
              }}
            />
          </Box>
        </Grid>

        {/* Event Time */}
        <Grid size={{ xs: 12, sm: 12, md: 2, lg: 2 }}>
          <Typography>Event Time</Typography>
        </Grid>
        <Grid size={{ xs: 12, sm: 12, md: 10, lg: 10 }}>
          <TextField
            
            type="time"
            name="eventTime"
            value={formData.eventTime}
            onChange={handleChange}
            InputLabelProps={{ shrink: true }}
            inputProps={{ step: 600 }}
            size="small"
            error={!!errors.eventTime}
            helperText={errors.eventTime}
            sx={{
               width:'15%',
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: errors.eventTime ? "red" : "#3DB80C" },
                "&:hover fieldset": { borderColor: errors.eventTime ? "red" : "#2A8A08" },
                "&.Mui-focused fieldset": { borderColor: errors.eventTime ? "red" : "#1D6E06" },
                borderRadius: "8px",
              },
              color: '#3DB80C'
            }}
          />
        </Grid>

        {/* Event Venue */}
        <Grid size={{ xs: 12, sm: 12, md: 2, lg: 2 }}>
          <Typography>Event Venue</Typography>
        </Grid>
        <Grid size={{ xs: 12, sm: 12, md: 10, lg: 10 }}>
          <TextField
            fullWidth
            size="small"

            name="eventVenue"
            value={formData.eventVenue}
            onChange={handleChange}
            error={!!errors.eventVenue}
            helperText={errors.eventVenue}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: errors.eventVenue ? "red" : "#3DB80C" },
                "&:hover fieldset": { borderColor: errors.eventVenue ? "red" : "#3DB80C" },
                "&.Mui-focused fieldset": { borderColor: errors.eventVenue ? "red" : "#3DB80C" },
                borderRadius: "8px",
                width: { md: "600px", lg: "600px", xs: "100%", sm: "600px" },
              },
            }}
          />
        </Grid>

        {/* Event Description */}
        <Grid size={{ xs: 12, sm: 12, md: 2, lg: 2 }}>
          <Typography>Event Description</Typography>
        </Grid>
        <Grid size={{ xs: 12, sm: 12, md: 10, lg: 10 }}>
          <TextField
            fullWidth
            size="small"
            name="eventDescription"
            value={formData.eventDescription}
            onChange={handleChange}
            error={!!errors.eventDescription}
            helperText={errors.eventDescription}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: errors.eventDescription ? "red" : "#3DB80C" },
                "&:hover fieldset": { borderColor: errors.eventDescription ? "red" : "#3DB80C" },
                "&.Mui-focused fieldset": { borderColor: errors.eventDescription ? "red" : "#3DB80C" },
                borderRadius: "8px",
                width: { md: "600px", lg: "600px", xs: "100%", sm: "600px" },
              },
            }}
          />
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
              sx={{borderColor:'#3DB80C',color:'#3DB80C',paddingTop:"7px",paddingBottom:'7px'}}
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
                sx={{paddingTop:"7px",paddingBottom:'7px'}}
              >
                Cancel
              </Button>
            )}
          </Box>
          {imagePreview && (
            <Box sx={{mt: 2}}>
              <img
                src={imagePreview}
                alt="Event preview"
                style={{maxWidth: '200px', maxHeight: '200px', objectFit: 'contain'}}
              />
            </Box>
          )}
          {errors.image && (
            <Typography color="error" variant="caption" sx={{mt: 1, display: 'block'}}>
              {errors.image}
            </Typography>
          )}
        </Grid>

        {/* Submit Button */}
        <Grid size={{ xs: 12, sm: 12, md: 10, lg: 10 }}>
          <Box sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
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

export default Addevent;