import { Box,  Typography } from '@mui/material'
import { useStyles } from './Styles/makeStyles'
import Calender from './Calender';
import DonateBecomeMember from './Reusable/DonateBecomeMember';
import ProudSponers from './Reusable/ProudSponers';
type IProps={
  classes:{
    [type:string]:string
  }
}
export default function Sidebar() {
 const {classes}:IProps=useStyles()
  return (
    <Box className={classes.sidebarstyle} sx={{display:{xs:'none',md:'none',lg:'grid'}}}>
      <DonateBecomeMember/>
      <Box>
        <Typography className={classes.commontext} sx={{mt:2,textTransform:'uppercase'}}>Panchangam</Typography>
        <Calender/>
      </Box>
      <ProudSponers/>
    </Box>
  )
}
