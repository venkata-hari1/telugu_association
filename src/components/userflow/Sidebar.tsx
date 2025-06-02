import { Box, Button, Typography } from '@mui/material'
import { useStyles } from './Styles/makeStyles'
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import PaidIcon from '@mui/icons-material/Paid';
import Calender from './Calender';
import Sponsor1 from '../../assets/sponsor1.png'
import Sponsor2 from '../../assets/sponsor2.png'
import Sponsor3 from '../../assets/sponsor3.png'
import Sponsor4 from '../../assets/sponsor4.png'
import { useNavigate } from 'react-router-dom';
type IProps={
  classes:{
    [type:string]:string
  }
}
export default function Sidebar() {
 const {classes}:IProps=useStyles()
 const navigate=useNavigate()
 const sponsor=[{id:1,img:Sponsor1},{id:2,img:Sponsor2},{id:3,img:Sponsor3},{id:4,img:Sponsor4}]
  return (
    <Box className={classes.sidebarstyle} sx={{display:{xs:'none',md:'none',lg:'grid'}}}>
      <Box className={classes.buttons}>
      <Button startIcon={<PersonAddAltIcon />} onClick={()=>navigate('/member')}>BECOME A MEMBER</Button>
      <Button startIcon={<PaidIcon/>}  onClick={()=>navigate('/donate')}>DONATE NOW</Button>
      </Box>
      <Box>
        <Typography className={classes.commontext}>Panchangam</Typography>
        <Calender/>
      </Box>

      <Box sx={{marginTop:'50px'}}>
      <Typography className={classes.commontext}>OUR PROUD SPONSERS</Typography>
      <Box sx={{display:'flex',flexDirection:'column'}}>
        {sponsor.map((x:{id:number,img:string})=>
        <Box key={x.id}>
          <Box component={'img'} src={x.img}  className={classes.sponsorimages}/>
        </Box>
        )}
        </Box>
      </Box>
    </Box>
  )
}
