import { Box, Button, Grid, TextField, Typography } from "@mui/material"
import { GreenTextField, Submit, VisuallyHiddenInput } from "../adminstyles/MembershiptableStyles"
import UploadFileIcon from '@mui/icons-material/UploadFile';



const Addevent = () => {
  return (
   <Box sx={{overflowX:{sm:'hidden'}}}>
      <Box display="flex" justifyContent="space-between">
                <Typography variant="h5" color="#3DB80C">
                  Events and Calendar/
                  <Typography component="span" fontSize={22} fontWeight="300">
                    Add Event
                  </Typography>
                </Typography>
      </Box>

      <Grid container spacing={4} mt={4}>
                 <Grid size={{ xs: 12, sm: 12, md: 2, lg: 2 }}>
                   <Typography>Event Title</Typography>
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
                             <Typography>Date</Typography>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 12, md: 10, lg: 10 }}>
                      <Box display="flex" alignItems="center" gap={3}>
                            <GreenTextField
                             
                              type="date"
                              InputLabelProps={{
                                shrink: true,
                              }}
                              size="small"
                            />
                     </Box>
                    </Grid>
                <Grid size={{ xs: 12, sm: 12, md: 2, lg: 2 }}>
                   <Typography>Event Venue</Typography>
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
                   <Typography>Event Description</Typography>
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
</Grid>

 <Grid size={{ xs: 12, sm: 12, md: 10, lg: 10 }}>
   <Box sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
   <Submit variant="contained" size="large">Submit</Submit>

   </Box>
   </Grid>                      
                 
                         
               
 </Grid>
   
   </Box>

  )
}

export default Addevent
