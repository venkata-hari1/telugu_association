import { Box,Card,CardContent,CardMedia,Divider,Grid,Paper,Typography} from "@mui/material"
import teluguassociation from '../../assets/teluguassociation.png'
import teamBg from '../../assets/teambg.png'
import bathukamma from '../../assets/bathukamma.jpg'
import tennis from '../../assets/tennis.jpg'
import sankranthi from '../../assets/sankranthi.jpg'
import V6 from '../../assets/V6.jpg'
import tv5 from '../../assets/TV5.jpg'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

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
  <Box width="100%">
   <Box component="img" src={teluguassociation} 
   sx={{ objectFit: 'contain',height:'100%',width:'100%',display: 'block' }}/> 
   <Box component="img" src={teamBg} sx={{height:'100%',width:'100%',
    objectFit:'contain',display: 'block'}}/> 
   <Box sx={{
      display:'flex',
      alignItems:'center',
      width:'100%',
      border:'1px solid #3DB80C',
      background:'white',
      height:'auto'
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
     flexDirection={{md:'row',xs:'column'}} gap={10} p={2}>
     { 
      eventdata.map(event=>(
          <Card sx={{
            width:"100%",
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        flexDirection:{sm:'column', xs:'column'}
        
      }}>
        <CardMedia image={event.img}  sx={{ height: 200,width:'100%'}}/>
     </Card>
        
      ))
     }
     <NavigateNextIcon sx={{color:"green",background:'white',width:30,height:30,borderRadius:5,cursor:'pointer'}}/>
     </Box>
   </Box>

  <Box  sx={{width:'100%',p:3,mt:2}}>
    
  <Box display="flex" justifyContent="space-between" alignItems="center">
  <Typography variant="h6" color="#3DB80C">EVENT GALLERY</Typography>
  </Box>
      <Grid container spacing={2} sx={{ mt: 1 }}>
           {gallerydata.map((data) => (
            <Grid size={{xs:12 ,sm:6 ,md:6}} key={data.id}>
             <Card sx={{ width: '100%',background:'transparent' }} component={Paper}>
             <CardMedia
              component="img"
              image={data.img}
              alt={data.text}
              sx={{ height: 150,width:'100%', objectFit: 'contain',display:'block' }}
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
   
   <Box sx={{ mb: 1 }}>
  <Typography variant="h6" color="#3DB80C" sx={{marginLeft:"30px"}}> OUR SPONSERS</Typography>
  <Grid container>
  <Box component={Paper} 
  sx={{display:'flex',
    justifyContent:'center',
    alignItems:'center',
    marginLeft:"27px",
  marginRight:'26px',
  gap:"50px",
  width:"100%",
  flexDirection: { lg: 'row', md: 'row', sm: 'column', xs: 'column' }
  }}>
    {
      sponserdata.map(sponser=>(
        <Card sx={{display:'flex',justifyContent:'center',
    }}>
    <CardMedia component="img"src={sponser.img} sx={{height:"90px",width:'100%'}}/>
   </Card>

      ))
    }
    </Box>
  </Grid>
  </Box>
  
  </Box>

  )
}

export default Home
