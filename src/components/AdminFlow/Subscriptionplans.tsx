import { Custombutton } from '../../adminstyles/MembershiptableStyles';
import {
  Badge,
  Box,
  Button,
  Card,
  CardContent,
  Typography,
  Grid,
} from '@mui/material';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Subscriptionplans = () => {

 const navigate=useNavigate() 
  const allplans = [
    {
      cardid: 1,
      badge: 'One Year',
      title: 'TEAM MEMBERSHIP 2025',
      price: 45,
      features: [
        'Access to TEAM events in 2025 (free or discounted)',
        'Priority for Telugu classes & Youth programs',
        'Eligibility to participate in cultural shows',
        'Receive TEAM newsletter & updates',
        'Valid till 12-31-2025',
      ],
    },
    {
      cardid: 2,
      badge: 'Two Years',
      title: 'TEAM MEMBERSHIP 2025-2026',
      price: 85,
      features: [
        'All One Year Membership benefits',
        'Guaranteed entry to all 2025–2026 TEAM events',
        'Special discounts on workshops & sports events',
        'Early access to event registrations',
        'Valid till 12-31-2026',
      ],
    },
    {
      cardid: 3,
      badge: 'Lifetime',
      title: 'TEAM MEMBERSHIP LIFETIME',
      price: 500,
      features: [
        'All benefits of Two Year plan – for life!',
        'Free entry to all future TEAM cultural events',
        'VIP seating & recognition at select events',
        'Lifetime access to language classes & community resources',
        'Support Telugu culture for generations',
      ],
    },
  ];

const subscriptionyears=[
    2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025
]
const[state,setState]=useState(false)

function subscriptionHandler(){
  setState((prev)=>!prev)
}
  return (
    <Box>
    <Grid container>
    <Grid size={{lg:6,md:6,sm:12,xs:12}} >
      <Typography variant="h5" color="#3DB80C">
       <ArrowBackIcon onClick={()=>navigate('/admin/membership')} sx={{cursor:'pointer'}}/>    Membership Management / Subscription Plans</Typography>
    </Grid>
      <Grid size={{lg:6,md:6,sm:12,xs:12}} 
      sx={{display:'flex',justifyContent:'flex-end',marginTop:{xs:2},marginBottom:{xs:2}}} >
       {
        state?(<Custombutton variant='outlined' sx={{background:'white',color:'green'}} >Subscription Plans</Custombutton>):(<Custombutton variant='outlined'  onClick={subscriptionHandler}>Subscription Plans</Custombutton>)
       }
        
       </Grid>
    </Grid> 
    
    {
     state&&(
        <Box display="flex" gap={1} flexWrap="wrap" mt={1}>
        {subscriptionyears.map((subyear,index)=>(
         <Button key={index}variant="contained" sx={{background:'#3DB80C',color:'#fff'}}>{subyear}</Button>
        ))
        
        }
     </Box>

     ) 
    }
    
   <Grid container spacing={5} mt={2}>
        {allplans.map((plans) => (
          <Grid size={{xs:12 ,sm:6,md:4}} key={plans.cardid}>
            {state?(<Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                width:"300px",
               }}
            >
              <CardContent
                sx={{
                  background: '#b5b5b5',
                  color: '#ffffff',
                  height: '150px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'column',
                  position: 'relative',
                  
                }}
              >
                <Badge
                  sx={{
                    color: '#000000',
                    background: 'white',
                    position: 'absolute',
                    top: 0,
                    right:0,
                    px: 1,
                    py: 0.5,
                    borderBottomLeftRadius:8,
                    fontWeight: 600,
                  }}
                >
                  {plans.badge}
                </Badge>

                <Typography variant="body1" sx={{ textAlign: 'center', mt: 3, mb:2, fontSize:'20px',wordWrap: 'break-word' }}>
                  {plans.title}
                </Typography>

                <Button 
                  startIcon={<AttachMoneyIcon sx={{ color: '#000000' }}  />}
                  sx={{
                    background: '#ffffff',
                    color: '#000000',
                    fontSize: '18px',
                    fontWeight: 800,
                    '&:hover': {
                      background: '#f0f0f0',
                      
                    },
                  }}
                >
                  {plans.price}
                </Button>
              </CardContent>

              <CardContent>
              <Typography>  
                <ul style={{ paddingLeft: '20px', margin: 0,fontSize:"14px",fontFamily:'roboto',lineHeight:'1.8' }}>
                  {plans.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                </Typography> 
              </CardContent>
              <Box display="flex"  justifyContent="center" p={2}>
               <Button startIcon={<EditIcon />} 
               sx={{width:"100px",background:'#3DB80C',color:'#ffffff'}}
               onClick={()=>navigate('/admin/sponsorship/subscriptionplans/editsubscription')}>Edit</Button>
               </Box>
            </Card>):(<Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                width:"300px",
               }}
            >
              <CardContent
                sx={{
                  background: '#3DB80C',
                  color: '#ffffff',
                  height: '150px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'column',
                  position: 'relative',
                  
                }}
              >
                <Badge
                  sx={{
                    color: '#000000',
                    background: 'white',
                    position: 'absolute',
                    top: 0,
                    right:0,
                    px: 1,
                    py: 0.5,
                    borderBottomLeftRadius:8,
                    fontWeight: 600,
                  }}
                >
                  {plans.badge}
                </Badge>

                <Typography variant="body1" sx={{ textAlign: 'center', mt: 3, mb:2, fontSize:'20px',wordWrap: 'break-word' }}>
                  {plans.title}
                </Typography>

                <Button 
                  startIcon={<AttachMoneyIcon sx={{ color: '#000000' }}  />}
                  sx={{
                    background: '#ffffff',
                    color: '#000000',
                    fontSize: '18px',
                    fontWeight: 800,
                    '&:hover': {
                      background: '#f0f0f0',
                      
                    },
                  }}
                >
                  {plans.price}
                </Button>
              </CardContent>

              <CardContent>
              <Typography>  
                <ul style={{ paddingLeft: '20px', margin: 0,fontSize:"14px",fontFamily:'roboto',lineHeight:'1.8' }}>
                  {plans.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                </Typography> 
              </CardContent>
              <Box display="flex"  justifyContent="center" p={2}>
               <Button startIcon={<EditIcon />} 
               sx={{width:"100px",background:'#3DB80C',color:'#ffffff'}}
               onClick={()=>navigate('/admin/sponsorship/subscriptionplans/editsubscription')}>Edit</Button>
               </Box>
            </Card>)}
          </Grid> 
        ))}
        
      </Grid>
    </Box>
  );
};

export default Subscriptionplans;
