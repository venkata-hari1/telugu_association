import {
  Dialog,
  DialogContent,
  DialogActions,
  Typography,
  Button,
  Grid,
  Box,
} from '@mui/material';

import { useState } from 'react';
import Regsuccess from './Regsuccess';

type IProps={
    display:boolean
    handleDisplay:(data:{value:boolean,message:string})=>void
}
const MembershipConfirmationDialog = ({display,handleDisplay}:IProps) => {
 
  const handleClose1 = () => {
    const data={
        message:'close',
        value:false
    }
    handleDisplay(data)
  };

 //handle confirm
 const [open,setOpen] = useState(false);
  
 const handleConfirm=()=>{
  setOpen(true)
   /*  const data={
        message:'confirm',
         value:false
    }
    handleDisplay(data)
    showToast(true,'Member Registration Submitted Successfully') */
  
   
  }

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog open={display} onClose={handleClose1} maxWidth="sm" fullWidth
    PaperProps={{
           sx:{width:'450px',
            margin:'auto',
            maxHeight:'95vh',
            overflowY: 'auto', 
            borderRadius:'20px',
          }
       }}>
      {/* <DialogTitle>Membership Confirmation</DialogTitle>*/}
       <DialogContent dividers>
        <Box>
          <Typography variant="h6" gutterBottom color='#3DB80C' fontSize={14}>
            <strong>Personal Information</strong>
          </Typography>
          <Grid container spacing={1}>
            <Grid size={{xs:6}}><strong>Name:</strong></Grid>
            <Grid size={{xs:6}}><strong>Sandeep Reddy</strong></Grid>
            <Grid size={{xs:6}}><strong>Email ID:</strong></Grid>
            <Grid size={{xs:6}}><strong>sandeep.reddy@gmail.com</strong></Grid>
            <Grid size={{xs:6}}><strong>Mobile Phone:</strong></Grid>
            <Grid size={{xs:6}}><strong>+1651-987-6543</strong></Grid>
            <Grid size={{xs:6}}><strong>Password</strong></Grid>
            <Grid size={{xs:6}}><strong>*******</strong></Grid>
            <Grid size={{xs:6}}><strong>Confirm Password</strong></Grid>
            <Grid size={{xs:6}}><strong>*******</strong></Grid>
          </Grid>

          {/* <Divider sx={{ my: 2 }} /> */}

          <Typography variant="h6" gutterBottom color='#3DB80C' fontSize={14} mt={2}>
           <strong>Location Details</strong>
          </Typography>
          <Grid container spacing={1}>
            <Grid size={{xs:6}}><strong>State:</strong></Grid>
            <Grid size={{xs:6}}><strong>Minnesota</strong></Grid>
            <Grid size={{xs:6}}><strong>City:</strong></Grid>
            <Grid size={{xs:6}}><strong>Maple Grove</strong></Grid>
            <Grid size={{xs:6}}><strong>Country:</strong></Grid>
            <Grid size={{xs:6}}><strong>USA</strong></Grid>
            <Grid size={{xs:6}}><strong>Zip Code:</strong></Grid>
            <Grid size={{xs:6}}><strong>55369</strong></Grid>
            <Grid size={{xs:6}}><strong>Address:</strong></Grid>
            <Grid size={{xs:6}}><strong>7890 Elm Creek Blvd</strong></Grid>
          </Grid>

          {/* <Divider sx={{ my: 2 }} /> */}

          <Typography variant="h6" gutterBottom color='#3DB80C' mt={2} fontSize={14}>
           <strong> Membership Information</strong>
          </Typography>
          <Grid container spacing={1}>
            <Grid size={{xs:6}}><strong>Membership Type:</strong></Grid>
            <Grid size={{xs:6}}><strong>One Year - $45</strong></Grid>
            <Grid size={{xs:6}}><strong>Payment Method:</strong></Grid>
            <Grid size={{xs:6}}><strong>PayPal</strong></Grid>
          </Grid>

          {/* <Divider sx={{ my: 2 }} /> */}

          <Typography variant="h6" gutterBottom color='#3DB80C' fontSize={14} mt={2}>
           <strong>Payment Summary</strong> 
          </Typography>
          <Grid container spacing={1}>
            <Grid size={{xs:6}}><strong>Subtotal:</strong></Grid>
            <Grid size={{xs:6}}><strong>$45.00</strong></Grid>
            <Grid size={{xs:6}}><strong>Tax:</strong></Grid>
            <Grid size={{xs:6}}><strong>$0.00</strong></Grid>
            <Grid size={{xs:6}}><strong>Total:</strong></Grid>
            <Grid size={{xs:6}}><strong>$45.00</strong></Grid>
          </Grid>
        </Box>
      </DialogContent>
      <DialogActions sx={{display:'flex',justifyContent:'center',flexDirection:'column'}}>
        <Button variant="contained" sx={{background:'#3DB80C',padding:'5px 40px'}} onClick={handleConfirm}>Confirm</Button>
        {open&&<Regsuccess open={open} handleclose={handleClose}/>}
        <Button onClick={handleClose1} sx={{color:'#3DB80C',textDecoration:'underline'}}>Edit Details</Button>

      </DialogActions>
    </Dialog>
  );
};

export default MembershipConfirmationDialog;
