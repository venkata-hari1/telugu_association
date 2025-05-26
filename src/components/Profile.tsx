import { Box, Button, Grid, Paper, Typography,InputAdornment } from "@mui/material";
import EditNoteIcon from "@mui/icons-material/EditNote";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import TextField from "@mui/material/TextField";
const Profile = () => {
  const profiledata = [
    { id: 1, key: "Phone Number", value: "+91-9292929292" },
    { id: 2, key: "Email", value: "srikanth@gmail.com" },
    { id: 3, key: "Password", value: "******" },
  ];

  const navigate = useNavigate();
  const [email, setEmail] = useState(false);
  function editEmailHanlder() {
    setEmail((prev) => !prev);
  }

  return (
    <Box >
      {/* <Box display="flex" justifyContent="space-between" sx={{ mb: 2 }}>
        <Typography variant="h5" color="#3DB80C">
          Profile
        </Typography>
      </Box> */}

      <Paper
        sx={{
          maxWidth: "1000px",
          bgcolor: "#E4EFC585",
          p: 3,
        }}
      >
        <Typography variant="h5" color="#3DB80C">
          Srikanth
        </Typography>
        {profiledata.map((profile) => (
          <Grid container spacing={2} key={profile.id} mt={2}>
            <Grid size={{ xs: 6, sm: 6, lg: 3, md: 3 }}>
              <Typography fontWeight="bold">{profile.key}</Typography>
            </Grid>
             <Grid size={{ xs:6,sm:6,lg:9,md:9}}>
              {profile.id === 2 && email ? (
                <TextField
                size="small"  
                defaultValue={profile.value}
                   InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <Button variant="contained" size="small" sx={{ bgcolor: '#3DB80C' }}>
                          Update
                        </Button>
                      </InputAdornment>
                    )
                  }}
                />
              ) : (
                <Box display="flex" alignItems="center">
                  <Typography>{profile.value}</Typography>
                  {profile.id === 2 && (
                    <EditNoteIcon
                      fontSize="small"
                      sx={{ color: '#3DB80C', marginLeft: '15px', cursor: 'pointer' }}
                      onClick={editEmailHanlder}
                    />
                  )}
                  {profile.id === 3 && (
                    <Button
                      size="small"
                      variant="outlined"
                      sx={{ borderColor: '#3DB80C', color: '#000', marginLeft: '15px' }}
                      onClick={() => navigate('change-password')}
                    >
                      Change Password
                    </Button>
                  )}
                </Box>
              )}
            </Grid>


          </Grid>
        ))}
      </Paper>
    </Box>
  );
};
export default Profile;
