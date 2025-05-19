import { Box, Button, FormControl, Grid, Select, TextField, Typography } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Submit, VisuallyHiddenInput } from "../adminstyles/MembershiptableStyles";
import UploadFileIcon from '@mui/icons-material/UploadFile';

const Addboard = () => {
  return (
    <Box sx={{ overflowX: { sm: "hidden" } }}>
      <Box display="flex">
        <Typography variant="h5" color="#3DB80C">
          Board and Leadership/
        </Typography>
        <Typography variant="h5" component="span" color="#3DB80C">
          Add Board
        </Typography>
      </Box>
      <Box>
        <FormControl size="small">
          <Select
            value="Year"
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
              backgroundColor: "white",
              border: "1px solid #3DB80C",
              borderRadius: "2px",
              width: "120px",
              padding: "1px 1px",
              "& .MuiSelect-outlined": {
                padding: "8px 10px",
                color: "#3DB80C",
                background: "transparent",
              },
              "& fieldset": {
                border: "none",
              },
              marginTop: "5px",
            }}
          >
            <MenuItem value="Year">2025</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Grid container spacing={5} mt={1}>
        <Grid size={{ xs: 12, sm: 12, md: 2, lg: 2 }}>
          <Typography>FirstName</Typography>
        </Grid>
        <Grid size={{ xs: 12, sm: 12, md: 10, lg: 10 }}>
          <TextField
            fullWidth
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
                width: { md: "600px", lg: "600px", xs: "100%", sm: "600px" },
              },
            }}
          />
        </Grid>

          <Grid size={{ xs: 12, sm: 12, md: 2, lg: 2 }}>
          <Typography>LastName</Typography>
        </Grid>
        <Grid size={{ xs: 12, sm: 12, md: 10, lg: 10 }}>
          <TextField
            fullWidth
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
                width: { md: "600px", lg: "600px", xs: "100%", sm: "600px" },
              },
            }}
          />
        </Grid>

         <Grid size={{ xs: 12, sm: 12, md: 2, lg: 2 }}>
             <Typography>Role</Typography>
           </Grid>
           <Grid size={{ xs: 12, sm: 12, md: 10, lg: 10 }}>
           <FormControl size="small">
     <Select
       
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
         border: '1px solid #3DB80C',
         borderRadius: '6px',
         width: '200px',
         padding: '1px 1px',
         '& .MuiSelect-outlined': {
           padding: '8px 10px',
           color:"#3DB80C",
           background:'transparent'
         },
         '& fieldset': {
           border: 'none',
         },
       }}
     >  
        <MenuItem value="Role">Select Role</MenuItem> 
       <MenuItem value="presedent">Presedent</MenuItem>
       <MenuItem value="vice-presedent">Vicepresedent</MenuItem>
       <MenuItem value="marketing secretary">Vicepresedent</MenuItem>
       <MenuItem value="vice-presedent">Food Secretary</MenuItem>
       <MenuItem value="marketing secretary">Culture Secretary</MenuItem>
       <MenuItem value="marketing secretary">Volunteer Secretary</MenuItem>
        <MenuItem value="marketing secretary">Event Secretery</MenuItem>
        <MenuItem value="marketing secretary">Language/Media Secretery</MenuItem>
              <MenuItem value="marketing secretary">Others</MenuItem>
     </Select>
   </FormControl>
   </Grid>
    <Grid size={{ xs: 12, sm: 12, md: 2, lg: 2 }}>
                <Typography>Load Image</Typography>
       </Grid>
       <Grid size={{ xs: 12, sm: 12, md: 10, lg: 10 }}>
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
       
       multiple
     />
   </Button>
   <Box mt={2}>
    <Typography component="p" color="#F34646">*Please upload the sponsor logo in landscape format (Preferred size: 300px width × 100px height)</Typography>
   </Box>
    </Grid>
    
     <Grid size={{ xs: 12, sm: 12, md: 10, lg: 10 }}>
       <Box sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
       <Submit variant="contained" size="large">Submit</Submit>
    
       </Box>
       </Grid>
</Grid>
    </Box>
  );
};

export default Addboard;
