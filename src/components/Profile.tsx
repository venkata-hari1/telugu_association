import { Box, Button, Grid, Paper, Typography } from "@mui/material"
import EditNoteIcon from '@mui/icons-material/EditNote';
import { useNavigate } from "react-router-dom";

const Profile = () => {

   const profiledata=[
        {id:1,key:'Phone Number',value:'+91-9292929292'},
        {id:2,key:'Email',value:'srikanth@gmail.com'},
        {id:3,key:'Password',value:'******'}
    ]

   const navigate= useNavigate()

    
    return (
     <Box >
        
      <Box display="flex" justifyContent="space-between" sx={{ mb: 2 }}>
        <Typography variant="h5" color="#3DB80C">
          Profile
        </Typography>
      </Box>
         
       <Paper  sx={{
          maxWidth: "1000px",
          bgcolor: "#E4EFC585",
          p: 3}}>
       <Typography variant="h5" color="#3DB80C">
            Srikanth
         </Typography>
       { profiledata.map((profile)=>(
          <Grid container spacing={2} key={profile.id} mt={2}>
            
     
            <Grid size ={{xs:6,sm:6,lg:3,md:3}}>
            <Typography fontWeight="bold">{profile.key}</Typography>
             </Grid>
           <Grid size={{xs:6,sm:6,lg:9,md:9}} >
             <Box display="flex" alignItems="center" justifyContent="flex-start">
        
            <Typography>{profile.value}
           {profile.id==2&& <EditNoteIcon fontSize="small" sx={{color:'#3DB80C',marginLeft:'15px',cursor:'pointer'}} onClick={()=>navigate('change-email')}/>}
           {profile.id==3&& <Button size="small" variant="outlined" sx={{borderColor:'#3DB80C',color:'#000000',marginLeft:'15px',cursor:'pointer'}}  onClick={()=>navigate('change-password')}>Change Password</Button>}      
           </Typography>
           </Box>
            </Grid>   

                
             
           </Grid>    
      
       ))
    }
    </Paper>

     </Box>

  )
}
export default Profile