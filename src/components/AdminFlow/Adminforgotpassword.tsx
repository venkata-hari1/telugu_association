import React, { useState } from 'react';
import {
  Box,
  TextField,
  Typography,
  Button,
  IconButton,
  InputAdornment,
  Paper,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import UploadIcon from '@mui/icons-material/Upload';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';

const MAX_IMAGE_SIZE = 1024 * 1024; // 1MB

const HomePageHighlights: React.FC = () => {
  const navigate = useNavigate();
  const [eventName, setEventName] = useState('');
  const [highlightText, setHighlightText] = useState('');
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [errors, setErrors] = useState({
    eventName: '',
    highlightText: '',
    imageFile: '',
  });

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!['image/jpeg', 'image/png'].includes(file.type)) {
      setErrors((prev) => ({ ...prev, imageFile: 'Only JPG or PNG images allowed.' }));
      return;
    }

    if (file.size > MAX_IMAGE_SIZE) {
      setErrors((prev) => ({ ...prev, imageFile: 'Image must be less than 1MB.' }));
      return;
    }

    setImageFile(file);
    setImagePreview(URL.createObjectURL(file));
    setErrors((prev) => ({ ...prev, imageFile: '' }));
  };

  const handleSubmit = () => {
    const newErrors = {
      eventName: eventName.trim() ? '' : 'Event name is required.',
      highlightText: highlightText.trim() ? '' : 'Highlight text is required.',
      imageFile: imageFile ? '' : 'Image is required.',
    };

    setErrors(newErrors);

    if (!newErrors.eventName && !newErrors.highlightText && !newErrors.imageFile) {
      alert('Form submitted!');
      console.log({ eventName, highlightText, imageFile });
    }
  };

  const removeImage = () => {
    setImageFile(null);
    setImagePreview(null);
  };

  return (
    <Box sx={{ bgcolor: '#fdf5e6', p: 4, minHeight: '100vh' }}>
      {/* Top Bar: Arrow + Title */}
      <Box display="flex" alignItems="center" gap={1} mb={3}>
        <IconButton onClick={() => navigate(-1)} sx={{ color: 'green' }}>
          <ArrowBackIcon />
        </IconButton>
        <Typography variant="h6" color="green" fontWeight={600}>
          Homepage Highlights
        </Typography>
      </Box>

      {/* Search Field */}
      <TextField
        placeholder="Search"
        size="small"
        variant="outlined"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon fontSize="small" />
            </InputAdornment>
          ),
        }}
        sx={{
          width: 250,
          mb: 4,
          backgroundColor: 'white',
          borderRadius: '4px',
        }}
      />

      {/* Form Fields */}
      <Box maxWidth={600}>
        {/* Event Name */}
        <Typography fontWeight={500} mb={0.5}>
          Events name
        </Typography>
        <TextField
          fullWidth
          size="small"
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
          error={!!errors.eventName}
          helperText={errors.eventName}
          sx={{
            mb: 2,
            '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: 'green',
            },
          }}
        />

        {/* Highlight Text */}
        <Typography fontWeight={500} mb={0.5}>
          Highlight Text
        </Typography>
        <TextField
          fullWidth
          size="small"
          value={highlightText}
          onChange={(e) => setHighlightText(e.target.value)}
          error={!!errors.highlightText}
          helperText={errors.highlightText}
          sx={{
            mb: 2,
            '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: 'green',
            },
          }}
        />

        {/* Upload Button */}
        <Typography fontWeight={500} mb={0.5}>
          Images
        </Typography>
        <Button
          component="label"
          variant="contained"
          size="small"
          startIcon={<UploadIcon />}
          sx={{
            backgroundColor: '#4caf50',
            textTransform: 'none',
            mb: 1,
            '&:hover': {
              backgroundColor: '#43a047',
            },
          }}
        >
          Upload
          <input hidden accept="image/png, image/jpeg" type="file" onChange={handleImageChange} />
        </Button>
        <Typography variant="caption" color="error" display="block" sx={{ lineHeight: '1.2' }}>
          *Recommended size: 400 x 200 pixels (JPG or PNG)
          <br />
          Note : Image Must be 1 MB
        </Typography>
        {errors.imageFile && (
          <Typography color="error" variant="body2" sx={{ mt: 0.5 }}>
            {errors.imageFile}
          </Typography>
        )}

        {/* Preview */}
        {imagePreview && (
          <Box mt={3}>
            <Typography fontWeight={500} mb={1}>
              Preview
            </Typography>
            <Paper
              sx={{
                width: 400,
                border: '2px solid dodgerblue',
                p: 1,
                position: 'relative',
              }}
            >
              <IconButton
                size="small"
                onClick={removeImage}
                sx={{
                  position: 'absolute',
                  top: 4,
                  right: 4,
                  backgroundColor: '#fff',
                  border: '1px solid #ccc',
                  zIndex: 1,
                }}
              >
                <CloseIcon fontSize="small" />
              </IconButton>
              <img
                src={imagePreview}
                alt="Preview"
                style={{ width: '100%', height: 200, objectFit: 'cover', borderRadius: 4 }}
              />
              <Typography variant="caption" display="block" mt={1}>
                {highlightText}
              </Typography>
            </Paper>
          </Box>
        )}

        {/* Save Button */}
        <Box mt={4} display="flex" justifyContent="flex-end">
          <Button
            variant="contained"
            sx={{ backgroundColor: '#4caf50', textTransform: 'none' }}
            onClick={handleSubmit}
          >
            Save
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default HomePageHighlights;
