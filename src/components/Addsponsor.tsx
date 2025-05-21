import {
  Box,
  Grid,
  TextField,
  Typography,
  FormControl,
  Button
  } from "@mui/material";
  import MenuItem from '@mui/material/MenuItem';
  import Select from '@mui/material/Select';
  import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
  import UploadFileIcon from '@mui/icons-material/UploadFile';
  import { GreenTextField, Submit, VisuallyHiddenInput } from "../adminstyles/MembershiptableStyles";
  
  
  const Addsponsor = () => {
  return (
    <Box sx={{overflowX:{sm:'hidden'}}}>
       
       {/*  <Box display="flex" justifyContent="space-between">
           <Typography variant="h5" color="#3DB80C">
             Sponser Management/
             <Typography component="span" fontSize={22} fontWeight="300">
               Add Sponsor
             </Typography>
           </Typography>
         </Box> */}
   
         <Grid container spacing={2}>
           <Grid size={{ xs: 12, sm: 12, md: 2, lg: 2 }}>
             <Typography>Company Name</Typography>
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
             <Typography>Sponsor Name</Typography>
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
             <Typography>Website</Typography>
           </Grid>
           <Grid size={{ xs: 12, sm: 12, md: 10, lg: 10 }}>
             <TextField
               fullWidth
               type="text"
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
             <Typography>Sponsorship Plan</Typography>
           </Grid>
           <Grid size={{ xs: 12, sm: 12, md: 10, lg: 10 }}>
           <FormControl size="small">
     <Select
       value="Platinum"
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
         width: '140px',
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
       <MenuItem value="Platinum">Platinum</MenuItem>
       <MenuItem value="Gold">Gold</MenuItem>
       <MenuItem value="Silver">Silver</MenuItem>
     </Select>
   </FormControl>
   </Grid>

          
           <Grid size={{ xs: 12, sm: 12, md: 2, lg: 2 }}>
             <Typography>Membership Duration</Typography>
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
               color: 'green',
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
         width: '140px',
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
       <MenuItem value="One Month">One Month</MenuItem>
       <MenuItem value="Six Months">Six Months</MenuItem>
       <MenuItem value="One Year">One Year</MenuItem>
     </Select>
   </FormControl>
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
            <Typography>To</Typography>
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

export default Addsponsor
