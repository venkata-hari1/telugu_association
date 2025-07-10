import { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  TextField,
  Typography,
} from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import CloseIcon from '@mui/icons-material/Close';

const AddhomepageHighlights = () => {
  const [image, setImage] = useState<string | null>(
    'https://res.cloudinary.com/demo/image/upload/sample.jpg'
  );
  const [eventName, setEventName] = useState('');
  const [highlightText, setHighlightText] = useState('');

  const handleRemoveImage = () => setImage(null);

  return (
    <Box sx={{ p: 4, backgroundColor: '#fffce8', minHeight: '100vh' }}>
      <Typography variant="h5" color="#3DB80C" mb={3}>
        ← Homepage Highlights
      </Typography>

      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 6 }}>
          <TextField
            fullWidth
            label="Events name"
            variant="outlined"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
            size="small"
          />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <TextField
            fullWidth
            label="Highlight Text"
            variant="outlined"
            value={highlightText}
            onChange={(e) => setHighlightText(e.target.value)}
            size="small"
          />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Button
            variant="outlined"
            startIcon={<CloudUploadIcon />}
            sx={{
              borderColor: '#3DB80C',
              color: '#3DB80C',
              textTransform: 'none',
            }}
            size="small"
          >
            Upload
          </Button>
          <Typography
            variant="body2"
            color="error"
            mt={1}
            fontSize="12px"
            fontStyle="italic"
          >
            *Recommended size: 400 x 200 pixels (JPG or PNG)
            <br />
            Note: Image Must be 1 MB
          </Typography>
        </Grid>

        {image && (
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                position: 'relative',
                width: 300,
                borderRadius: 1,
                border: '1px solid #ddd',
              }}
            >
              <IconButton
                size="small"
                onClick={handleRemoveImage}
                sx={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  zIndex: 2,
                  background: 'white',
                  color: 'green',
                }}
              >
                <CloseIcon fontSize="small" />
              </IconButton>
              <CardMedia
                component="img"
                image={image}
                sx={{ height: 200, objectFit: 'cover', width: '100%' }}
              />
              <CardContent sx={{ p: 1 }}>
                <Typography variant="body2">
                  Had a great time at the recent event! #AssociationCommunity
                </Typography>
              </CardContent>
            </Box>
          </Grid>
        )}

        <Grid size={{ xs: 12 }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#3DB80C',
              color: 'white',
              textTransform: 'none',
              px: 5,
            }}
            size="medium"
          >
            Save
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AddhomepageHighlights;
