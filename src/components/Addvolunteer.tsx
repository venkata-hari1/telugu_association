import { Box, Button, FormControl, Grid, MenuItem, Select, TextField, Typography } from "@mui/material"
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Commonheader from "./Commonheader";

const Addvolunteer = () => {

    return (
    <Box sx={{overflowX:{sm:'hidden'}}}>
 
        <Box display="flex" justifyContent="space-between" sx={{marginTop:"10px",marginBottom:"20px"}}>
           <Typography variant="h5" color="#3DB80C">
             Volunteer Management/
             <Typography component="span" fontSize={22} fontWeight="300">
               Add Volunteer
             </Typography>
           </Typography>
         </Box>
         <Grid container spacing={3}>
          <Grid size={{ xs: 12, sm: 12, md: 2, lg: 2 }}>
                       <Typography>First Name</Typography>
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
                       <Typography>Last Name</Typography>
                     </Grid>
                     <Grid size={{ xs: 12, sm: 12, md: 10, lg: 10 }}>
                       <TextField
                         type="text"
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
                       <Typography>Email Address</Typography>
                     </Grid>
                     <Grid size={{ xs: 12, sm: 12, md: 10, lg: 10 }}>
                       <TextField
                         fullWidth
                         type="email"
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
                       <Typography>Phone</Typography>
                     </Grid>
                     <Grid size={{ xs: 12, sm: 12, md: 10, lg: 10 }}>
                       <TextField
                         fullWidth
                         type="number"
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
                       <Typography>Hours /Month</Typography>
                     </Grid>
                     <Grid size={{ xs: 12, sm: 12, md: 10, lg: 10 }}>
                     <FormControl size="small">
               <Select
                 value="10hrs/Month"
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
                   borderRadius: '8px',
                   width: '180px',
                   padding: '2px 2px',
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
                 <MenuItem value="10hrs/Month">10hrs/Month</MenuItem>
                 <MenuItem value="5hrs/Month">5hrs/Month</MenuItem>
                 <MenuItem value="15hrs/Month">15hrs/Month</MenuItem>
               </Select>
             </FormControl>
             </Grid>
             <Grid size={{ xs: 12, sm: 12, md: 10, lg: 10 }}>
                <Box sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                 <Button size="large" sx={{background:"green",padding:"10px 10px",color:"white"}}>Submit</Button>
                </Box>
            </Grid>
  
   </Grid>   
  </Box>

  )
}

export default Addvolunteer
