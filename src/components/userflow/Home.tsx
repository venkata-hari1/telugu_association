import { Box,Card,CardContent,CardMedia,Divider,Grid,Paper,Typography, useMediaQuery} from "@mui/material"
import teluguassociation from '../../assets/teluguassociation.png'
import teamBg from '../../assets/teambg.png'

import tennis from '../../assets/tennis.jpg'
import sankranthi from '../../assets/sankranthi.jpg'
import V6 from '../../assets/V6.jpg'
import tv5 from '../../assets/TV5.jpg'
import MyCalendar from "./Calender"
import UpcomingEvents from "./UpcomingEvents"


function Home() {
const display=useMediaQuery((theme)=>theme.breakpoints.down('lg'))

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
    {display&&
    <Box sx={{padding:'10px'}}>
      <Typography sx={{fontWeight:'bold',fontSize:'15px',color:'#3DB80C',mb:1}}>Panchangam</Typography>
    <MyCalendar/>
    </Box>
  }
   {!display&&<Box component="img" src={teluguassociation} 
   sx={{ objectFit: 'contain',height:'100%',width:'100%',display: 'block' }}/> }
   {!display&&<Box component="img" src={teamBg} sx={{height:'100%',width:'100%',
    objectFit:'contain',display: 'block'}}/> }
   {!display&&<Box sx={{
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
      marginRight:'8px',
      fontSize:'16px',
      padding:'3px'
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
            fontSize:'13px',
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
  </Box>}

<UpcomingEvents/>

   {!display&&<Box  sx={{width:'100%',p:3,mt:2}}>
    
 <Box display="flex" justifyContent="space-between" alignItems="center">
  <Typography variant="h6" color="#3DB80C" sx={{fontWeight:'bold',fontSize:'15px'}}>EVENT GALLERY</Typography>
  </Box>
      <Grid container spacing={2} sx={{ mt: 1 }}>
           {gallerydata.map((data) => (
            <Grid size={{xs:12 ,sm:6 ,md:6}} key={data.id}>
             <Card sx={{ width: '100%',background:'transparent' }} variant="outlined" component={Paper}>
             <Box sx={{width:'100%',height:180,overflow:'hidden'}}>
             <CardMedia
              component="img"
              image={data.img}
              alt={data.text}
              sx={{ height:"100%",width:'100%', objectFit: 'cover',display:'block',p:'0px 12px', }}
            />
            </Box>
            <CardContent>
              <Typography variant="body2" sx={{ color: 'text.secondary',fontSize:'14px',fontWeight:600 }}>
                {data.text}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
       </Grid>
    </Box>}
   
   {!display&&<Box sx={{ mb: 1 }}>
  <Typography variant="h6" color="#3DB80C" mb={1} sx={{marginLeft:"30px",fontWeight:'bold',fontSize:'16px'}}>
    OUR SPONSORS
  </Typography>
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
  </Box>}
  
  </Box>

  )
}

export default Home
