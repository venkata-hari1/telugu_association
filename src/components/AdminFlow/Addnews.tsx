import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {showToast} from "../../Utils/ShowToast";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../Redux/Store";


const Addnews = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const masterText = `To celebrate Telugu festivals and perpetuate our culture from one generation to another, the Telugu Association of Minnesota (TEAM) offers a one-year family membership. This enables families to participate in events such as Sankranti, Ugadi, Deepawali, summer picnic, and more.
Members also get access to:
Telugu language competitions for children
Junior Tennis and Volleyball Tournaments
Cultural programs like Balavinodham (for kids under 10)
Volunteer opportunities such as FMSC (Feed My Starving Children)
While this membership does not include voting privileges, it offers full participation in TEAM's cultural and volunteer events for the year.
Note: After June, prorated membership fees apply.`;
  const [newsText, setNewsText] = useState<string>(masterText);
  const [error, setError] = useState<string>('');
  const validateDescription = (value: string): string => {

    return value.trim().length < 50 ? 'Description must have at least 50 characters' : '';
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setNewsText(value);
    setError(validateDescription(value));
  };

  // Handle discard
  const handleDiscard = () => {
    setNewsText(masterText);
    setError(validateDescription(masterText));
  };

  // Handle save
  const handleSave = () => {
    if (!error) {
     showToast(true,'News Added')
      setError('')
    }
  };

  // Check if form is valid
  const isFormValid = (): boolean => {
    return !error;
  };

  return (
    <Box>
      <Grid container spacing={4} sx={{ width: { lg: '60%', xs: '100%' } }}>
        <Grid size={{ xs: 12 }}>
          <Typography variant="h5" color="#3DB80C">
            <ArrowBackIcon onClick={() => navigate('/admin/dashboard')} sx={{ cursor: 'pointer' }} /> Add News
          </Typography>
        </Grid>

        <Grid size={{ xs: 12 }}>
          <Box sx={{ display: 'flex' }}>
            <Typography sx={{ fontSize: '15px', fontWeight: 'bold', marginRight: '10px' }}>
              Description
            </Typography>
            <TextField
              multiline
              rows={16}
              fullWidth
              value={newsText}
              onChange={handleChange}
              size="small"
              error={!!error}
              helperText={error}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: error ? "red" : "#3DB80C" },
                  "&:hover fieldset": { borderColor: error ? "red" : "#3DB80C" },
                  "&.Mui-focused fieldset": { borderColor: error ? "red" : "#3DB80C" },
                  borderRadius: "8px",
                },
              }}
            />
          </Box>
        </Grid>

        <Grid size={{ xs: 12 }} sx={{ width: '100%' }}>
          <Box display="flex" justifyContent="center" gap={6}>
            <Button
              variant="outlined"
              sx={{ borderColor: 'gray', color: "gray" }}
              onClick={handleDiscard}
            >
              Discard
            </Button>
            <Button
              variant="contained"
              sx={{ background: "#3DB80C", color: "white", border: 'none' }}
              onClick={handleSave}
              disabled={!isFormValid()}
            >
              Save
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Addnews;