import { Box, Button, Card, CardContent, CardMedia, Grid, Paper, Typography } from "@mui/material"
import { Custombutton } from "../../adminstyles/MembershiptableStyles"
import AddIcon from '@mui/icons-material/Add';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import sankranthi from '../../assets/sankranthi.jpg'

const AdminGallery = () => {
 
  const location= useLocation()
  const pathname=location.pathname
  console.log(pathname)
  
  const gallerydata=[
    {id:1,img:sankranthi,text:' Had a great time at recent event with #Associations'},
    {id:2,img:sankranthi,text:' Had a great time at recent event with #Associations'},
    
   ] 
 const navigate=useNavigate()      

const[highlights,setHighlights]=useState(false)
 function homeHighlights(){
   setHighlights(prev=>!prev)
}

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
       <Custombutton onClick={()=>navigate('photogallery')}>
         Photo Gallery
       </Custombutton>
       <Custombutton onClick={()=>navigate('video')}>
         Video Gallery
       </Custombutton>
      </Box>
    
     <Box component={Paper} sx={{width:"100%",p:3,mt:2}} >
      {highlights?(
          <Grid container spacing={5} width={{xs:'100%',md:"900px"}}>
        <Grid size={{md:6, xs:12}} >
        <Typography variant="h6" color="#3DB80C">Homepage Highlights</Typography>
       </Grid>
       <Grid size={{md:6,xs:12}}>
         <Box sx={{display:'flex',justifyContent:{md:'flex-end',sm:'flex-start',gap:10}}} >
         <Button variant="outlined" startIcon={<BorderColorIcon />} sx={{background:' #3DB80C',border:'none',color:'white'}}
         onClick={homeHighlights}>Add Highlights</Button>
         </Box>
        </Grid> 
      
        </Grid>
      ):(<Grid container>
        <Grid size={{md:6, xs:12}}>
        <Typography variant="h6" color="#3DB80C">Homepage Highlights</Typography>
       </Grid>
        <Grid size={{md:6,xs:12}}>
         <Box sx={{display:'flex',justifyContent:{md:'flex-end',sm:'flex-start',gap:10}}} >
         <Button variant="outlined" startIcon={<BorderColorIcon />} sx={{background:' #3DB80C',border:'none',color:'white'}}
        onClick={homeHighlights} >Add Highlights</Button>
        <Button variant="outlined" startIcon={<BorderColorIcon />} sx={{background:' #3DB80C',border:'none',color:'white'}}
            >Edit</Button>
         </Box>
        </Grid>
      
        </Grid> )}
       
       

{!highlights&&
 <Grid container spacing={4} sx={{ mt: 2 }}>
       {gallerydata.map((data) => (
        <Grid size={{xs:12 ,sm:6 ,md:6}} key={data.id}>
         <Card sx={{ maxWidth: '100%' }} component={Paper}>
         <CardMedia
          component="img"
           image={data.img}
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
  </Grid> }
   
   

    </Box>
    
    </Grid>

   </Grid>
  </Box>
  )
}

export default AdminGallery
