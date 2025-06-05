import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import PopUp from "../../Utils/Popup";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../Redux/Store";
import { setMessage, setPopUp } from "../../Redux/UserFlow";

const Addnews = () => {
  const navigate = useNavigate();

  // Master text (original content)
  const masterText = `To celebrate Telugu festivals and perpetuate our culture from one generation to another, the Telugu Association of Minnesota (TEAM) offers a one-year family membership. This enables families to participate in events such as Sankranti, Ugadi, Deepawali, summer picnic, and more.
Members also get access to:
Telugu language competitions for children
Junior Tennis and Volleyball Tournaments
Cultural programs like Balavinodham (for kids under 10)
Volunteer opportunities such as FMSC (Feed My Starving Children)
While this membership does not include voting privileges, it offers full participation in TEAM's cultural and volunteer events for the year.
Note: After June, prorated membership fees apply.`;

  const [newsText, setNewsText] = useState(masterText);
 const dispatch=useDispatch<AppDispatch>()
  const handleDiscard = () => {
    setNewsText(masterText); // Reset to original
  };

  const handleSave = () => {
    dispatch(setPopUp(true))
    dispatch(setMessage('News Added'))
  };

  return (
    <Box>
      <PopUp/>
      <Grid container spacing={4} sx={{width:{lg:'60%',xs:'100%'}}}>
        <Grid size={{xs:12}}>
          <Typography variant="h5" color="#3DB80C">
            <ArrowBackIcon onClick={() => navigate('/admin/dashboard')} sx={{ cursor: 'pointer' }} />&nbsp;&nbsp;Add News
          </Typography>
        </Grid>

        <Grid size={{xs:12}}>
          <Box sx={{display:'flex'}}>
          <Typography sx={{fontSize:'15px',fontWeight:'bold',marginRight:'10px'}}>Description</Typography>
          <TextField
            multiline
            rows={16}
            fullWidth
            value={newsText}
            onChange={(e) => setNewsText(e.target.value)}
            size="small"
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#3DB80C",
                },
                "&:hover fieldset": {
                  borderColor: "#3DB80C",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#3DB80C",
                },
                borderRadius: "8px",
               
              },
            }}
          />
          </Box>
        </Grid>

      

        <Grid size={{xs:12}} sx={{width:'100%'}}>
          <Box display="flex" justifyContent="center" gap={6}>
            <Button
              variant="outlined"
              sx={{ borderColor: 'gray', color: "gray" }}
              onClick={handleDiscard}
            >
              Discard
            </Button>
            <Button
              variant="outlined"
              sx={{ background: "#3DB80C", color: "white", border: 'none' }}
              onClick={handleSave}
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
