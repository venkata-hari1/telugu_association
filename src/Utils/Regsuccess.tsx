import {Dialog, DialogContent,Box, Grid, Typography, Button} from "@mui/material";
import Success from '../assets/success.png'

const Regsuccess = ({open,handleclose}:{open:boolean,handleclose:()=>void}) => {

return (
   <Dialog open={open} onClose={handleclose}>
        <DialogContent>
            <Box display="flex" justifyContent="center" alignItems="center">
              <Grid container
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            padding:"40px",
                            width:"320px",
                            borderRadius: "15px",
                            gap: 2,}}>
                  <Box component="img" src={Success} width="60px" height="60px" />      
                 
                 <Typography color="#3DB80C" variant="h6">Registration Successful!</Typography>  
                 
                 <Box display="flex" justifyContent="center" alignItems="center">
                  <Typography >Your membership registration has been successfully completed.</Typography>
                 </Box>
                   <Button variant="contained" sx={{background:'#3DB80C',marginTop:'30px'}}
                  onClick={()=>console.log("Loginpage")}>Continue</Button> 
                </Grid>
              </Box>
        </DialogContent>
    </Dialog>
  )
}

export default Regsuccess
