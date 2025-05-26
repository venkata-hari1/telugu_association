import { Box, Button, Grid, InputAdornment, TextField, Typography } from "@mui/material"
import { Subscriptionbutton } from "../../adminstyles/MembershiptableStyles"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from "react-router-dom";

const Editsubscription = () => {
  
  const navigate=useNavigate()
  return (
  <Box>
   <Grid container spacing={2}>
   <Grid size={{lg:6,md:6,sm:12,xs:12}}>
   <Typography variant="h5" color="#3DB80C">
          <ArrowBackIcon onClick={()=>navigate('/admin/sponsorship/subscriptionplans')} sx={{cursor:'pointer'}}/>&nbsp;Membership Management/
          <Typography component="span" fontSize={22} fontWeight="300">
            Subscription plans
          </Typography>
        </Typography>
   </Grid >

    <Grid size={{lg:6,md:6,sm:6,xs:6}}>
       <Box display="flex" justifyContent="flex-end" gap="10px">
         <Subscriptionbutton variant="outlined" sx={{background:"none",color:"#3DB80C",borderColor:"#3DB80C"}}>Subscription Plans</Subscriptionbutton>   
       </Box>
    </Grid>

    <Grid size={{ xs: 12, sm: 12, md: 2, lg: 2 }}>
             <Typography>First Name</Typography>
    </Grid>
    <Grid size={{ xs: 12, sm: 12, md: 10, lg: 10 }}>
             <TextField
               fullWidth
               value="Team Membership 2025"
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
             <Typography>Amount</Typography>
    </Grid>
    <Grid size={{ xs: 12, sm: 12, md: 10, lg: 10 }}>
    <TextField
        size="small"
        variant="outlined"
        type="number"
        defaultValue={45}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start" sx={{ color: '#3DB80C' }}>
              $
            </InputAdornment>
          ),
        }}
        sx={{
          '& .MuiOutlinedInput-root': {
            color: '#4caf50',
            '& fieldset': {
              borderColor: '#4caf50',
            },
            '&:hover fieldset': {
              borderColor: '#388e3c',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#4caf50',
            },
          },
          '& input': {
            color: '#4caf50',
            textAlign: 'center',
          },
          width:'100px'
        }}
      />
    </Grid>
     {/* benefits */}
     <Grid size={{ xs: 12, sm: 12, md: 2, lg: 2 }}>
             <Typography>Benefits</Typography>
    </Grid>
    <Grid size={{ xs: 12, sm: 12, md: 10, lg: 10 }}>
             <TextField
               multiline
               rows={10}
               fullWidth
               value="To celebrate Telugu festivals and perpetuate our culture from one generation to another, the Telugu Association of Minnesota (TEAM) offers a one-year family membership. This enables families to participate in events such as Sankranti, Ugadi, Deepawali, summer picnic, and more.
Members also get access to:
Telugu language competitions for children
Junior Tennis and Volleyball Tournaments
Cultural programs like Balavinodham (for kids under 10)
Volunteer opportunities such as FMSC (Feed My Starving Children)
While this membership does not include voting privileges, it offers full participation in TEAM's cultural and volunteer events for the year.
Note: After June, prorated membership fees apply."
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
    <Grid size={{ xs: 6, sm: 6, md: 8, lg: 8 }}>
       <Box display="flex" justifyContent="center" gap={6}>
           <Button variant="outlined" sx={{borderColor:'gray',color:"gray"}}>Discard</Button>
           <Button  variant="outlined" sx={{background:"#3DB80C",color:"white",border:'none'}}>Save</Button>
           </Box>
    </Grid>

    </Grid>
</Box>
  )
}

export default Editsubscription
