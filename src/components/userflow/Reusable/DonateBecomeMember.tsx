import { Box, Button, Typography, useMediaQuery } from '@mui/material'
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import PaidIcon from '@mui/icons-material/Paid';
import { useNavigate } from 'react-router-dom';
import { useStyles } from '../Styles/makeStyles';

type IProps={
    classes:{
      [type:string]:string
    }
  }
export default function DonateBecomeMember() {
    const navigate=useNavigate()
     const {classes}:IProps=useStyles()
     const display=useMediaQuery((theme)=>theme.breakpoints.down('lg'))
   
  return (
    <Box className={display?classes.mobilebuttons:classes.buttons}>
    <Button startIcon={<PersonAddAltIcon />} onClick={()=>navigate('/member')}>BECOME A MEMBER</Button>
    <Box display="flex" justifyContent="center" pt={1} sx={{mb:{xs:2}}}>
    <Typography color='#3DB80C' sx={{textDecoration:'underline',cursor:'pointer',fontWeight:600}} 
     >Already a Member</Typography>
    </Box>
    <Button startIcon={<PaidIcon/>}  onClick={()=>navigate('/donate')}>DONATE NOW</Button>
    </Box>
  )
}
