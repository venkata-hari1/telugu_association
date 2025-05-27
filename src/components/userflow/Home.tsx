import { Box, Card, CardContent, CardMedia, Divider, Grid, Paper, Typography } from "@mui/material"
import teluguassociation from '../../assets/teluguassociation.png'
import teamBg from '../../assets/teambg.png'
import bathukamma from '../../assets/bathukamma.jpg'
import tennis from '../../assets/tennis.jpg'
import sankranthi from '../../assets/sankranthi.jpg'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import V6 from '../../assets/V6.jpg'
import tv5 from '../../assets/TV5.jpg'
function Home() {

const eventdata=[
  {id:1,name:'bathukamma',img:bathukamma},
  {id:2,name:'bathukamma',img:bathukamma},
  {id:3,name:'bathukamma',img:bathukamma}
]
const gallerydata=[
    {id:1,img:tennis,text:' Had a great time at recent event with #Associations'},
    {id:2,img:sankranthi,text:' Had a great time at recent event with #Associations'},
]
const sponserdata=[
  {id:1,img:tv5},
  {id:2,img:V6},
   {id:3,img:tv5},
]

  return (
  <Box>
    <Box sx={{ width:"100%",
      backgroundImage:`url(${teluguassociation})`,
      height: '150px',
      backgroundSize:'cover',
      backgroundPosition:'center',
      backgroundRepeat:'no-repeat',
      objectFit:'contain'
    }} />

    <Box sx={{ width:"100%",
      backgroundImage:`url(${teamBg})`,
      height: '300px',
      backgroundSize:'cover',
      backgroundPosition:'center',
      backgroundRepeat:'no-repeat',
      objectFit:'contain'
    }} /> 
    <Box sx={{
      display:'flex',
      alignItems:'center',
      width:'100%',
      border:'1px solid #3DB80C',
      padding:'8px 8px',
      background:'white'
    }}>
     
    <Typography
    variant="h6"

    sx={{
      color:'#3DB80C',
      fontWeight:'600',
      whiteSpace:'nowrap',
      marginRight:'8px'
    }}>
      NEWS &UPDATES
    </Typography>
   
   
   <Divider orientation="vertical"
   flexItem
   sx={{borderColor:'#4caf50', marginRight: '8px' }}/>

   <Box sx={{
    overflow:'hidden',
    whiteSpace:'nowrap',
    flex:1,
    position:'relative',

   }}>
     <Typography
          component="div"
          sx={{
            display: 'inline-block',
            paddingLeft: '100%',
            animation: 'marquee 15s linear infinite',
            '@keyframes marquee': {
              '0%': { transform: 'translateX(0%)' },
              '100%': { transform: 'translateX(-100%)' },
            },
          }}
        >
          Stay informed with the latest events, announcements, and opportunities shaping Minnesota's community!
        </Typography>
        
   </Box>
   
    </Box>

    <Box>
      <Typography component="div" variant="h6" color="#3DB80C" padding={2}>
         UPCOMING EVENTS
      </Typography>
     <Box display="flex" justifyContent="center" alignItems="center"
     flexDirection={{md:'row',xs:'column'}} gap={8} p={2}>
     { 
      eventdata.map(event=>(
          <Card sx={{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        flexDirection:{sm:'column', xs:'column'}
      }}>
        <CardMedia image={event.img}  sx={{ height: 200,width:150}}/>
     </Card>
        
      ))
     }
     <NavigateNextIcon sx={{color:"green",background:'white',width:30,height:30,borderRadius:5,cursor:'pointer'}}/>
     </Box>
       
    </Box>


    <Box  sx={{width:{lg:'100%'},p:3,mt:2}}>
    
  <Box display="flex" justifyContent="space-between" alignItems="center">
  <Typography variant="h6" color="#3DB80C">EVENT GALLERY</Typography>

  </Box>
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
      </Grid>
    </Box>

   <Box sx={{p:4,mt:2}}>
    <Typography variant="h6" color="#3DB80C">
      OUR SPONSORS
    </Typography>
    <Box component={Paper} p={3} display="flex" gap={5} alignItems="center" 
    justifyContent="center" flexDirection={{lg:'row',xs:'column', sm:'column'}}>
      {
        sponserdata.map(sponser=>(
           <Card sx={{height:"150px",display:'flex',justifyContent:'center',alignItems:'center'}}>
      <CardMedia image={sponser.img}  sx={{ height: 100,width:160 }}/>
     </Card>
        ))
      }
    </Box>
   </Box>
  
  
  </Box>

  )
}

export default Home
