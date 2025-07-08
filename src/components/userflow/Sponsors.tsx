import sponser1 from '../../assets/sponsor1.png'
import sponser2 from '../../assets/sponsor2.png'
import sponser3 from '../../assets/sponsor3.png'
import sponser4 from '../../assets/sponsor4.png'
import sponser5 from '../../assets/sponser5.jpg'
import sponser6 from '../../assets/sponser6.jpg'
import { Box, Card, CardContent, CardMedia, Grid, Theme, Typography, useMediaQuery } from '@mui/material'

const sponsers = [
  { id: 1, img: sponser1, name:'Gurram Tax 2019'},
  { id: 2, img: sponser2, name:'NVA Jewelers 25' },
  { id: 3, img: sponser3, name:'Symbiosis Consulting 25' },
  { id: 4, img: sponser4, name:'Dr Dash Foundation' },
  { id: 5, img: sponser5, name:'Bay Leaf'},
  { id: 6, img: sponser6, name:'Life Map'},
   
 ];


function Sponsors() {
  const display=useMediaQuery((theme:Theme)=>theme.breakpoints.down('lg'))
  return (
    <Box width="100%" p={2}>
     <Typography color="#3DB80C" fontWeight={600} fontSize={18}>Our sponsors</Typography>
     <Box p={3}>
      <Grid container spacing={4}>
      {
        sponsers.map(sponser=>(
         <Grid size={{xs:6,md:6,lg:6}} sx={{ display:'flex',justifyContent:'center',alignItems:'center'}} key={sponser.id}>
        <Card sx={{width:display?"100%":"250px",
          height:display?'130px':'230px',
          background:'transparent',
          p:2,
          boxShadow: 'none',
           }}>
         <CardMedia component="img" src={sponser.img} 
         sx={{width:'100%',
         height:'auto', 
         objectFit: 'contain',
         justifyContent:'center'}}/>
         <CardContent>
          <Typography textAlign="center" fontWeight={600} fontSize={17}>{sponser.name}</Typography>
         </CardContent>
        </Card>
       </Grid>
        ))
      }
    </Grid>
    </Box>
    
    <Box mt={3} display="flex" justifyContent="center" flexDirection="column" alignItems="center"> 
      <Typography>
      <Typography component="span" fontSize={16} fontWeight="700">
        For more information Click here for </Typography>
       <Typography component="span" color='#3DB80C' fontSize={16} fontWeight="700" sx={{textDecoration:'underline'}}>Marketing brochure</Typography>
      </Typography>
        <Typography fontSize={17} fontWeight="700">TEAM Marketing Executive(s):</Typography>
    <Typography fontSize={16} fontWeight="700">Surendra Kanneganti @ +1 (612) 212-9251</Typography>
    <Typography display="flex">
    <Typography component="span" fontSize={16} fontWeight="700">Email:</Typography>
    <Typography component="span" color='#3DB80C' fontSize={16} fontWeight="700">marketing@telugumn.org</Typography>
    </Typography>
</Box>
    
    </Box>
  
  );
}

export default Sponsors;