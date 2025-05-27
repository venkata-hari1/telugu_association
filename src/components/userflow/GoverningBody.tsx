import { Box, Card, CardContent, CardMedia, Grid, Typography } from "@mui/material"
import Ramachandra from '../../assets/ram peteti.jpg'
import Ramuthodapunuri from '../../assets/ramu todupunoori.jpg'
import Maheswar from '../../assets/maheshwar.jpg'
import Updendra from '../../assets/upendra.jpg'
import Chithamreddy from '../../assets/chitham.jpg'
import Haritha from '../../assets/haritha.jpg'
import Laxman from '../../assets/laxman.jpg'
import Durgaprasad from '../../assets/durgaprasad.jpg'
import Surya from '../../assets/suriya.jpg'
import Sudhir from '../../assets/Sudhir.jpg'
import Hari from '../../assets/hari.jpg'
import Vasanth from '../../assets/vasanth.jpg'
import Kiran from '../../assets/kiran.jpg'
import Ramtallapaka from '../../assets/ramtallapaka.jpg'
import Venkat from '../../assets/venkat.jpg'
function GoverningBody() {

  const boardmembers=[
        {id:1,name:'Ramachandra Peteti',image:Ramachandra, position:'2021 President'},
        {id:2,name:'Ramu Thodupunoori',image:Ramuthodapunuri, position:'2020 President'},
        {id:3,name:'Maheswar Avilala',image:Maheswar, position:'2019 President'},  
        {id:4,name:'Upendra Mikkilineni',image:Updendra, position:'2018 President'},  
        {id:5,name:'Chitham Reddy Purushotham',image:Chithamreddy, position:'2017 President'},  
        {id:6,name:'Haritha Chimata',image:Haritha, position:'2016 President'},  
        {id:7,name:'Laxman Sunkam',image:Laxman, position:'2015 President'},  
        {id:8,name:'Durgaprasad Kunapareddy',image:Durgaprasad, position:'2014 President'},
        {id:9,name:'Surya Dugiralla',image:Surya, position:'2013 President'},
        {id:10,name:'Sudhir Nandamuru',image:Sudhir, position:'2012 President'},
        {id:11,name:'Hari Pallempati',image:Hari, position:'2011 President'},
        {id:12,name:'Vasanth Chaganti',image:Vasanth, position:'2010 President'},
        {id:13,name:'Kiran',image:Kiran, position:'2009 President'},
        {id:14,name:'Ram Tallapaka',image:Ramtallapaka, position:'2008 President'},
        {id:15,name:'Venkata Akurati',image:Venkat, position:'2007 President'},  
    ]



  return (
   <Box width="100%" height="auto" p={2}>
     <Typography variant="h6" color="#3DB80C">TEAM Honors and Recognizes our Past Presidents!</Typography>
   
      <Grid container spacing={1} mt={3}>
           {boardmembers.map((member)=>{
    
            return <Grid size={{lg:4,md:4,sm:6,xs:6}} mt={2} mb={2}>
            <Box sx={{display:'flex',wrap:'nowrap',
                flexDirection:{lg:'row',md:'row',sm:'column',xs:'column',
                gap:{sm:'50px',xs:'50px'}},
                justifyContent:'center'}}>    
                 <Card sx={{ maxWidth: 160,gap:'30px',background:'transparent' }}>
                 <CardMedia
                    sx={{ height: 150,width:160 }}
                    image={member.image}
                    title="green iguana"
              />
              <CardContent>
             <Typography gutterBottom  component="div" sx={{color:'black',textAlign:'center',fontWeight:700}}>
              {member.name}
             </Typography>
            <Typography component="p" sx={{color:'#3DB80C',textAlign:'center',fontWeight:700}}>
              {member.position}
            </Typography>
            </CardContent>
          
              </Card>
             
            </Box> 
            
            </Grid> 
           })}
           
               
        </Grid>   
    
   
   </Box> 
    
  )
}

export default GoverningBody
