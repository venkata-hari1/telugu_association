import {
  Badge,
  Box,
  Button,
  Card,
  CardContent,
  Typography,
  Paper
} from '@mui/material';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import PopUp1 from '../../Utils/PopUp1';
import {  useEffect, useState } from 'react';

import {showToast} from '../../Utils/ShowToast';
import { useNavigate } from 'react-router-dom';

const Usermembership = () => {
 const value=localStorage.getItem('member')
 const[open,setOpen]=useState(false)
const[badge,setBadge]=useState('')
const[plan,setPlan]=useState('')
const navigate=useNavigate()
const Plandetails=(t:string)=>{

   setBadge(t)
   setOpen(true)
}
useEffect(()=>{
  const plan=localStorage.getItem('plan') || ''
  setPlan(plan)
},[plan])

  const allplans = [
      {
        cardid: 1,
        badge: 'One Year',
        title: 'TEAM MEMBERSHIP 2025',
        price: 45,
        feature: 'Enroll for 2025 TEAM Family Membership that is valid until 12-31-1025',
        details:'Details'
      },
      {
        cardid: 2,
        badge: 'Two Years',
        title: 'TEAM MEMBERSHIP 2025',
        price: 85,
        feature: "Enroll for 2025 TEAM Family Membership that is valid until 12-31-1025",
        details:'Details',

      },
      {
        cardid: 3,
        badge: 'Lifetime',
        title: 'TEAM MEMBERSHIP 2025',
        price: 500,
        feature:'Enroll for 2025 TEAM Family Membership that is valid until 12-31-1025',
        details:'Details'
      },
    ];

const handleClose=(t:boolean)=>{
  setOpen(t)
}
  const handlePlan=(t:string)=>{
    if(value==="member"){
    localStorage.setItem('plan',t)
    setPlan(t);

    showToast(true,'Plan Changed Successfully')
    }
    else{
   navigate('/member')
    }
  }
  return (
 <Box sx={{ width: '100%', mx: 'auto', py: 2 }}>
  <PopUp1 badge={badge} open={open} handleClose={handleClose}/>
   <Typography color="#3DB80C" fontWeight="600" pl={3}>Membership Plans</Typography>
   <Paper
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  p: 1,
                  margin: "auto",
                  marginTop: "10px",
                  marginBottom: "15px",
                  width: "95%",
                }}
              >
                <Typography sx={{ color: "#3DB80C", fontSize: 14, fontWeight: 600 }}>
                  Membership Registration
                  </Typography>
      </Paper>

      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="center"
        gap={2}
      >
        {allplans.map((plans) => (
          <Card
            key={plans.cardid}
            sx={{
              width: { xs: '90%', sm: '45%', md: '30%' },
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              boxShadow: 3,
            }}
          >
            <CardContent
              sx={{
                background: value==="member" && plan===plans.badge?'#808080bd':'#3DB80C',
                color: '#ffffff',
                height: { xs: '140px', md: '150px' },
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                position: 'relative',
                fontFamily:'Lato',
                fontSize:'14px'
              }}
            >
              <Badge
                sx={{
                  color: '#000',
                  background: 'white',
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  px: 1,
                  py: 0.5,
                  borderBottomLeftRadius: 8,
                  fontWeight: 600,
                }}
              >
                {plans.badge}
              </Badge>

              <Typography
                variant="body1"
                sx={{
                  textAlign: 'center',
                  mt: 5,
                  mb: 2,
                  fontSize: { xs: '14px', sm: '16px', md: '16px' },
                  wordWrap: 'break-word',
                }}
              >
                {plans.title}
              </Typography>

              <Button
                startIcon={<AttachMoneyIcon sx={{ color: '#000' }} />}
                sx={{
                  background: '#fff',
                  color: '#000',
                  fontSize: { xs: '14px', sm: '15px', md: '16px' },
                  fontWeight: 800,
                  '&:hover': { background: '#f0f0f0' },
                  
                  

                }}
              >
                {plans.price}
              </Button>
            </CardContent>

            <CardContent>
              <Typography variant="body1"
                sx={{
                  textAlign: 'center',
                  mt: 3,
                  mb: 2,
                  fontSize: { xs: '14px', sm: '16px', md: '14px' },
                  wordWrap: 'break-word',
                  fontFamily:'Lato'
                }}>
                {plans.feature}
              </Typography>
            </CardContent>
            <CardContent>
              <Typography variant="body1"
               onClick={()=>Plandetails(plans.badge)}
                sx={{
                  textAlign: 'center',
                  mt: 3,
                  mb: 2,
                  fontSize: { xs: '14px', sm: '16px', md: '13px' },
                  wordWrap: 'break-word',
                  fontFamily:'Lato,',
                  cursor:'pointer',
                  color:'#3DB80C',
                  fontWeight:600,
                  textDecoration:'underline'
                }}>
                {plans.details}
              </Typography>
            </CardContent>

            <Box display="flex" justifyContent="center" p={2}>
              <Button
                variant='contained'
                disabled={value==="member" && plan===plans.badge}
                sx={{
                   whiteSpace:'nowrap',
                  width: '100px',
                  
                  background:'#3DB80C',
                  color: '#fff',
                  '&:hover': { background: '#339c0a' },
                  
                }}
                onClick={()=>handlePlan(plans.badge)}
              >
                {value==="member"?"Change Plan":"SignUp"}
              </Button>
            </Box>
          </Card>
        ))}
      </Box>
  </Box>
  )
}

export default Usermembership
