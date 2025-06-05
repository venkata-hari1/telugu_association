import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  Button,
  Grid,
  Divider,
  Box,
} from '@mui/material';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../Redux/Store';
import { setMessage, setPopUp } from '../Redux/UserFlow';
type IProps={
    display:boolean
    handleDisplay:(data:{value:boolean,message:string})=>void
}
const MembershipConfirmationDialog = ({display,handleDisplay}:IProps) => {
 
const dispatch=useDispatch<AppDispatch>()
  const handleClose1 = () => {
    const data={
        message:'close',
        value:false
    }
    handleDisplay(data)
  };
 const handleConfirm=()=>{
    dispatch(setPopUp(true));
    const data={
        message:'confirm',
        value:false
    }
    handleDisplay(data)
    dispatch(setMessage('Member Registration Submitted Successfully'));
 }
  return (
    <Dialog open={true} onClose={handleClose1} maxWidth="sm" fullWidth>
      <DialogTitle>Membership Confirmation</DialogTitle>
      <DialogContent dividers>
        <Box>
          <Typography variant="h6" gutterBottom>
            Personal Information
          </Typography>
          <Grid container spacing={1}>
            <Grid size={{xs:6}}><strong>Name:</strong></Grid>
            <Grid size={{xs:6}}>Sandeep Reddy</Grid>
            <Grid size={{xs:6}}><strong>Email ID:</strong></Grid>
            <Grid size={{xs:6}}>sandeep.reddy@gmail.com</Grid>
            <Grid size={{xs:6}}><strong>Mobile Phone:</strong></Grid>
            <Grid size={{xs:6}}>+1 651-987-6543</Grid>
          </Grid>

          <Divider sx={{ my: 2 }} />

          <Typography variant="h6" gutterBottom>
            Location Details
          </Typography>
          <Grid container spacing={1}>
            <Grid size={{xs:6}}><strong>State:</strong></Grid>
            <Grid size={{xs:6}}>Minnesota</Grid>
            <Grid size={{xs:6}}><strong>City:</strong></Grid>
            <Grid size={{xs:6}}>Maple Grove</Grid>
            <Grid size={{xs:6}}><strong>Country:</strong></Grid>
            <Grid size={{xs:6}}>USA</Grid>
            <Grid size={{xs:6}}><strong>Zip Code:</strong></Grid>
            <Grid size={{xs:6}}>55369</Grid>
            <Grid size={{xs:6}}><strong>Address:</strong></Grid>
            <Grid size={{xs:6}}>7890 Elm Creek Blvd</Grid>
          </Grid>

          <Divider sx={{ my: 2 }} />

          <Typography variant="h6" gutterBottom>
            Membership Information
          </Typography>
          <Grid container spacing={1}>
            <Grid size={{xs:6}}><strong>Membership Type:</strong></Grid>
            <Grid size={{xs:6}}>One Year - $45</Grid>
            <Grid size={{xs:6}}><strong>Payment Method:</strong></Grid>
            <Grid size={{xs:6}}>PayPal</Grid>
          </Grid>

          <Divider sx={{ my: 2 }} />

          <Typography variant="h6" gutterBottom>
            Payment Summary
          </Typography>
          <Grid container spacing={1}>
            <Grid size={{xs:6}}><strong>Subtotal:</strong></Grid>
            <Grid size={{xs:6}}>$45.00</Grid>
            <Grid size={{xs:6}}><strong>Tax:</strong></Grid>
            <Grid size={{xs:6}}>$0.00</Grid>
            <Grid size={{xs:6}}><strong>Total:</strong></Grid>
            <Grid size={{xs:6}}><strong>$45.00</strong></Grid>
          </Grid>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button variant="contained" onClick={handleClose1}>Close</Button>
        <Button variant="outlined" color="success" onClick={handleConfirm}>Confirm</Button>
      </DialogActions>
    </Dialog>
  );
};

export default MembershipConfirmationDialog;
