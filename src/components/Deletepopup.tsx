import { Box, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

const Deletepopup = ({open,handleClose}:{ open: boolean; handleClose: () => void }) => {

return (
  <Box>
       <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        
      >
        <DialogTitle id="alert-dialog-title">
          <Typography variant='h6' color='#3DB80C'>Are You sure you want to delete this event?</Typography>
        </DialogTitle>
        <DialogContent >
          
           <DialogActions sx={{display:"flex", justifyContent:"space-between",paddingTop:'40px'}}>
          <Button variant="outlined" size="large" sx={{borderColor:"#3DB80C",color:"#3DB80C"}} onClick={handleClose}>Cancel</Button>
          <Button variant="contained" size="large" sx={{background:"#3DB80C",color:"#fff"}} onClick={handleClose} autoFocus>
            Delete
          </Button>
        </DialogActions>
        </DialogContent>
       
      </Dialog>  
  </Box>    
)
}

export default Deletepopup
