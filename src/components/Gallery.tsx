import { Box, Card, CardContent, CardMedia, Grid, Paper, Typography } from "@mui/material"
import { Custombutton } from "../adminstyles/MembershiptableStyles"
import AddIcon from '@mui/icons-material/Add';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import galimage1 from '../assets/gal-1.JPG'
import { useNavigate } from "react-router-dom";

const Gallery = () => {
 
      
   
   const gallerydata=[
    {id:1,text:' Had a great time at recent event with #Associations'},
    {id:2,text:' Had a great time at recent event with #Associations'},
    
   ] 
 const navigate=useNavigate()      

 return (
  <Box>
   <Grid container>
   <Grid size={{lg:6,md:6,sm:6,xs:6}}>
     <Typography variant='h5' color='#3DB80C' fontWeight="500">
        Gallery & Media
     </Typography>
    </Grid>
    <Grid size={{lg:6,md:6,sm:6,xs:6}} >
      <Box display="flex" sx={{gap:"20px",justifyContent:"flex-end"}}>
       <Custombutton startIcon={<AddIcon/>} onClick={()=>navigate('addgallery')}>
         Add Gallery
       </Custombutton>
      </Box>
    </Grid>

    <Grid>
    <Box display="flex" sx={{gap:"30px",justifyContent:"flex-start",mt:'5px'}}>
       <Custombutton >
         Photo Gallery
       </Custombutton>
       <Custombutton >
         Video Gallery
       </Custombutton>
      </Box>
    
     <Box component={Paper} sx={{width:{lg:'100%'},p:3,mt:2}}>

       <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h6" color="#3DB80C">Homepage Highlights</Typography>
        <Custombutton startIcon={<BorderColorIcon />}>Edit</Custombutton>
       </Box>
      
       <Grid container spacing={4} sx={{ mt: 2 }}>
       {gallerydata.map((data) => (
        <Grid size={{xs:12 ,sm:6 ,md:6}} key={data.id}>
         <Card sx={{ maxWidth: '100%' }} component={Paper}>
         <CardMedia
          component="img"
          image={galimage1}
          alt={data.text}
          sx={{ height: 200, objectFit: 'cover' }}
        />
        <CardContent>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {data.text}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  ))}
  </Grid>

    </Box>
    </Grid>

   </Grid>
  </Box>
  )
}

export default Gallery
