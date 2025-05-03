import React from 'react';
import { Custombutton } from '../adminstyles/MembershiptableStyles';
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
const Subscriptionplans = () => {
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

  return (
    <Box>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={4}>
        <Typography variant="h5" color="#3DB80C">
          Membership Management /{' '}
          <Typography component="span" fontSize={20}>
            Subscription plans
          </Typography>
        </Typography>
        <Custombutton>Subscription Plans</Custombutton>
      </Box>

      <Grid container spacing={1}>
        {allplans.map((plans) => (
          <Grid size={{xs:12 ,sm:6,md:4}} key={plans.cardid}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                width:"350px",
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
                <ul style={{ paddingLeft: '20px', margin: 0,fontSize:"16px",lineHeight:'1.8' }}>
                  {plans.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                </Typography> 
              </CardContent>
              <Box display="flex"  justifyContent="center" p={2}>
               <Button startIcon={<EditIcon />} sx={{width:"100px",background:'#3DB80C',color:'#ffffff'}}>Edit</Button>
               </Box>
            </Card>
          </Grid>
        ))}
        
      </Grid>
    </Box>
  );
};

export default Subscriptionplans;
