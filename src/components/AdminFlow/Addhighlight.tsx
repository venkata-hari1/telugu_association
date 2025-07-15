import { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';

const Addhighlight = () => {
  const [form, setForm] = useState({
    eventName: '',
    highlightText: '',
    image: null as File | null,
  });
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [errors, setErrors] = useState({
    eventName: '',
    highlightText: '',
    image: '',
  });
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;
    if (name === 'image' && files && files[0]) {
      setForm((prev) => ({ ...prev, image: files[0] }));
      setImagePreview(URL.createObjectURL(files[0]));
      setErrors((prev) => ({ ...prev, image: '' }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleRemoveImage = () => {
    setForm((prev) => ({ ...prev, image: null }));
    setImagePreview(null);
  };

  const validate = () => {
    let valid = true;
    const newErrors = { eventName: '', highlightText: '', image: '' };
    if (!form.eventName.trim()) {
      newErrors.eventName = 'Event name is required';
      valid = false;
    }
    if (!form.highlightText.trim()) {
      newErrors.highlightText = 'Highlight text is required';
      valid = false;
    }
    if (!form.image) {
      newErrors.image = 'Image is required';
      valid = false;
    }
    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    // Submit logic here
    setForm({ eventName: '', highlightText: '', image: null });
    setImagePreview(null);
    setErrors({ eventName: '', highlightText: '', image: '' });
    // Optionally show a toast or navigate
  };

  return (
    <Box sx={{ overflowX: { sm: 'hidden' } }}>
      <Box>
        <Box display="flex" alignItems="center" mb={4}>
          <ArrowBackIcon onClick={() => navigate(-1)} sx={{ cursor: 'pointer', color: '#3DB80C', mr: 1 }} />
          <Typography variant="h5" color="#3DB80C" fontWeight="500">
            Homepage Highlights
          </Typography>
        </Box>
      </Box>
      <form onSubmit={handleSubmit}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 4 }}>
          <Typography sx={{ minWidth: 120,fontSize:15, fontWeight: 500 }}>Events name</Typography>
          <TextField
            fullWidth
            size="small"
            name="eventName"
            value={form.eventName}
            onChange={handleChange}
            error={!!errors.eventName}
            helperText={errors.eventName}
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: errors.eventName ? 'red' : '#3DB80C' },
                '&:hover fieldset': { borderColor: errors.eventName ? 'red' : '#3DB80C' },
                '&.Mui-focused fieldset': { borderColor: errors.eventName ? 'red' : '#3DB80C' },
                borderRadius: '8px',
                width: { md: '600px', lg: '600px', xs: '100%', sm: '600px' },
              },
            }}
          />
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 4 }}>
          <Typography sx={{ minWidth: 120,fontSize:15, fontWeight: 500 }}>Highlight Text</Typography>
          <TextField
            fullWidth
            size="small"
            name="highlightText"
            value={form.highlightText}
            onChange={handleChange}
            error={!!errors.highlightText}
            helperText={errors.highlightText}
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: errors.highlightText ? 'red' : '#3DB80C' },
                '&:hover fieldset': { borderColor: errors.highlightText ? 'red' : '#3DB80C' },
                '&.Mui-focused fieldset': { borderColor: errors.highlightText ? 'red' : '#3DB80C' },
                borderRadius: '8px',
                width: { md: '600px', lg: '600px', xs: '100%', sm: '600px' },
              },
            }}
          />
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 4 }}>
          <Typography sx={{ minWidth: 120,fontSize:15, fontWeight: 500 }}>Images</Typography>
          <Box>
            <Button
              component="label"
              variant="outlined"
              tabIndex={-1}
              endIcon={<UploadFileIcon />}
              sx={{ borderColor: '#3DB80C', color: '#3DB80C', paddingTop: '7px', paddingBottom: '7px' }}
            >
              Upload
              <input
                type="file"
                name="image"
                accept="image/*"
                hidden
                onChange={handleChange}
              />
            </Button>
            {errors.image && (
              <Typography color="error" variant="caption">
                {errors.image}
              </Typography>
            )}
            <Typography variant="caption" display="block" sx={{ color: 'red', fontWeight: 400 }}>
              *Recommended size: 400 x 200 pixels (JPG or PNG)<br />Note: Image Must be 1 MB
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2, mb: 4 }}>
          <Typography sx={{ minWidth: 120, fontWeight: 600 }}>Preview</Typography>
          <Box>
          {imagePreview ? (
            <Box sx={{ width: 400, borderRadius: 2 }}>
              <Box sx={{ width: 400, height: 200,borderTopLeftRadius: 8, borderTopRightRadius: 8, position: 'relative', background: imagePreview ? `url(${imagePreview}) center center / cover no-repeat` : '#f0f0f0', mb: 0 }}>
                  <CloseIcon
                    onClick={handleRemoveImage}
                    sx={{ position: 'absolute', top: 8, right: 8, color: 'green', cursor: 'pointer', background: 'white', borderRadius: '50%' }}
                  />
              </Box>
              <Box sx={{
                width: '100%',
                background: '#fff',
                height: '48px',
                p: 1,
                pt:0,
                borderBottomLeftRadius: 8,
                borderBottomRightRadius: 8,
                display: 'flex',
                alignItems: 'center',
                overflow: 'hidden',
                boxShadow: '0 2px 4px rgba(0,0,0,0.04)'
              }}>
                <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 700 }}>
                  {form.highlightText}
                </Typography>
              </Box>
            </Box>
            ) : (
              <Typography sx={{ color: 'black', fontWeight: 600 }}>
                No preview available
              </Typography>
            )}
          </Box>
        </Box>
        <Box display="flex" justifyContent="center" mt={2}>
          <Button
            type="submit"
            variant="contained"
            sx={{ background: '#3DB80C', color: 'white', borderRadius: '8px', px: 6, py: 1.5, fontWeight: 600, fontSize: 16 }}
          >
            Save
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default Addhighlight; 