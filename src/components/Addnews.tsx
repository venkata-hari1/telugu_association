import { Box, Button, Grid, TextField, Typography } from "@mui/material"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from "react-router-dom";

const Addnews = () => {
  const navigate=useNavigate()
  
  return (
   <Box>
    <Grid container spacing={4}>
     <Grid size={{lg:12,md:12,sm:12,xs:12}}>
        <Typography variant="h5" color="#3DB80C">
            <ArrowBackIcon onClick={()=>navigate('/admin/dashboard')} sx={{cursor:'pointer'}}/>&nbsp;&nbsp;Add News
        </Typography>
      </Grid >
        <Grid size={{ xs: 12, sm: 12, md: 2, lg: 2 }}>
                   <Typography>Benefits</Typography>
          </Grid>
          <Grid size={{ xs: 12, sm: 12, md: 10, lg: 10 }}>
                   <TextField
                     multiline
                     rows={16}
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
                 <Box display="flex" justifyContent="center" gap={6} sx={{marginLeft:{xs:"180px"}}}>
                     <Button variant="outlined" sx={{borderColor:'gray',color:"gray"}}>Discard</Button>
                     <Button  variant="outlined" sx={{background:"#3DB80C",color:"white",border:'none'}}>Save</Button>
                     </Box>
              </Grid>
          
      </Grid>
      
       
   </Box>
  )
}

export default Addnews