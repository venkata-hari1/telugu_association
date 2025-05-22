import { Box, Button, Card, CardContent, CardMedia, Divider, Grid, Paper, Typography } from "@mui/material"
import GroupIcon from '@mui/icons-material/Group';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AddIcon from "@mui/icons-material/Add";
import event111 from '../assets/event11.jpg'
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from 'recharts';
import { useNavigate } from "react-router-dom";



const Dashboard = () => {

 const navigate= useNavigate()
  const boarddata=[
    {id:1,icon:<GroupIcon />,title:'Active Members',number:50},
    {id:2,icon:<CalendarTodayIcon />, title:'Total Upcomming Events',number:5},
    {id:3,icon:<AttachMoneyIcon />,title:'Total Sponsers', number:50}
  ]

 const newsdata=[
  {id:1,news:'Become a Member of TAM through online payment'},
  {id:2,news:'Membership Drive 2025 Now Open'},
  {id:3,news:'Team recognized by Minnesota Cultural Association'},
  {id:4,news:'TEAM Sports Day 2025-Registrations Open'},
 ]  
 const newsimages=[
  {id:1,img:event111},
  {id:2,img:event111},
  {id:3,img:event111},
  {id:4,img:event111},
  {id:5,img:event111}
]

const data = [
  { year: '2015', value: 0 },
  { year: '2016', value: 10 },
  { year: '2017', value: 20 },
  { year: '2018', value: 30 },
  { year: '2019', value: 30 },
  { year: '2020', value: 80 },
  { year: '2021', value: 60 },
  { year: '2022', value: 10 },
  { year: '2023', value: 20 },
  { year: '2024', value: 50 },
  { year: '2025', value: 30 },
];
return (
    <Box>
      <Box>
          <Typography variant="h5" color="#3DB80C">
            Dashboard Data
          </Typography>
     </Box>
      <Grid container spacing={2}>
        <Grid size={{ lg: 8, md: 8, sm: 12, xs: 12 }}>
          <Box sx={{display:'flex', flexDirection:'row',gap:2}}>
          { boarddata.map((board)=>{
          return <Card sx={{ width:209,height:140,border:'1px solid #3DB80C' }}>
          <CardContent 
          sx={{display:'flex',
          gap:'5px'}}>
          <Box sx={{color:"#3DB80C"}} >{board.icon}</Box>
          <Typography  sx={{fontWeight:500,color:'#3DB80C',fontSize:13}}>
          {board.title}
          </Typography>
          </CardContent>
          <Divider sx={{ borderColor: '#3DB80C'}}/>
            <CardContent sx={{display:'flex',gap:'12px',justifyContent:'center'}}>
            
            <Typography variant="h6">
             {board.number}
        </Typography>
          </CardContent>
          </Card>
          })
          
          }
         
          </Box>
          
          <Grid>
         <Box sx={{border:'1px solid #3DB80C',
          width:{lg:"93%",md:"92%",sm:"100%",xs:'100%'},pt:1,pb:2,mt:2,
          borderRadius:'5px',
          background:'white'}}>
         <Box sx={{display:'flex',justifyContent:'space-between',p:1}}>
         <Typography variant="h6" color='#3DB80C'>
          News
         </Typography>
            <Button
              size="small"
              variant="contained"
              startIcon={<AddIcon />}
              sx={{marginRight:'10px',backgroundColor:'#3DB80C'}}
              onClick={()=>navigate('addnews')}>
              Edit News
            </Button>
         </Box>
         {newsdata.map(news=>(
          <Box component="ul" sx={{ pl: 4, m: 0,lineHeight:3 }}>
          <li>
          <Typography variant="body1" fontSize={13}>{news.news}</Typography>
          </li>
          </Box>
         ))}
          

         </Box>
          </Grid>

           <Grid>
         <Box sx={{border:'1px solid #3DB80C',
          width:{lg:"93%",md:"93%",sm:"100%",xs:'100%'},pt:1,pb:2,mt:2,
          borderRadius:'5px',
          background:'white'}}>
         <Box sx={{display:'flex',justifyContent:'space-between',p:1}}>
         <Typography variant="h6" color='#3DB80C'>
          Upcomming Events
         </Typography>
            <Button
              size="small"
              variant="contained"
              startIcon={<AddIcon />}
              sx={{marginRight:'10px',backgroundColor:'#3DB80C'}}
              onClick={()=>navigate('/admin/events/addevent')}>
              Add Events
            </Button>
         </Box>
         
          <Box sx={{ pl: 4, m: 0,lineHeight:3,display:'flex',gap:3 }}>
           {newsimages.map(image=>(
                        <Card variant="outlined" sx={{maxWidth:100}}>
            <CardMedia
            component="img"
            alt="#3DB80C iguana"
            sx={{width:"100%",height:150}}
            image={image.img}
          />
          </Card>
           ))}


          </Box>
        
          

         </Box>
          </Grid>
        </Grid>
        
       <Grid size={{ lg: 4, md: 4, sm: 12, xs: 12 }}>
        <Paper
      elevation={3}
      sx={{
        borderRadius: '12px',
        border: '1px solid #3DB80C',
        p: 2,
        overflow: 'hidden',
        
      }}
    >
      {/* Header */}
      <Box display="flex" alignItems="center" mb={2}>
        <GroupIcon sx={{ color: '#3DB80C', mr: 1 }} />
        <Typography variant="h6" sx={{ color: '#3DB80C', fontWeight: 500 }}>
          Active Membership Trend
        </Typography>
      </Box>

      {/* Chart */}
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={data}>
          <CartesianGrid stroke="#3DB80C" horizontal={true} vertical={false} />
          <XAxis dataKey="year" tick={{ fontSize: 12 }} />
          <YAxis tick={{ fontSize: 12 }} domain={[0, 100]}
           ticks={[10, 20, 30, 40, 50, 60, 70, 80, 90, 100]} />
          <Tooltip />
          <Bar dataKey="value" fill="#3DB80C" barSize={30} radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </Paper>
              
        </Grid> 
      </Grid>  
      
     
    </Box>
  )
}

export default Dashboard
