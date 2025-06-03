import { Custombutton } from '../../adminstyles/MembershiptableStyles';
import {
 
  Box,
  Button,
 Typography,
  Grid,
} from '@mui/material';

import { useNavigate } from 'react-router-dom';
import { Fragment, useState } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Membershipplans from './Membershipplans';

const Subscriptionplans = () => {

 const navigate=useNavigate() 
  
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
    <Fragment>
    <Membershipplans />
    </Fragment> 
    
    </Box>
  );
};

export default Subscriptionplans;