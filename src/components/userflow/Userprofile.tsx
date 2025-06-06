import { Box, Button, Paper, Stack, Typography } from '@mui/material'
import { Fragment } from 'react/jsx-runtime'
import CircleIcon from "@mui/icons-material/Circle";

const Userprofile = () => {

    const userprofile=[
    {id:1,key:"FirstName", value:'Srikanth'},
    {id:2,key:"Last Name", value:'Lanka'},
    {id:3,key:"Phone number", value:'+16302030300'},
    {id:4,key:"Email", value:'Srikanth@gmail.com'},
    {id:5,key:"Password", value:'*******'},
    {id:6,key:"State", value:'Minnesota'},
    {id:7,key:"City", value:'Eden Parle '},
    {id:8,key:"Membership Type", value:'One Year'},
    {id:9,key:"Start & End Dates", value:'From Jan01 to Dec 31 2025'},
    {id:10,key:"Address", value:'1234 Elm StreetEden Prairie, MN 55344United States'},
  ]
  return (
   <Box p={2}>
    <Typography fontWeight="700" mb={2} color='#3DB80C'>Profile</Typography>
    <Paper sx={{p:2}}>
      <Typography sx={{ml:3,fontWeight:700}}>Srikanth Lanka</Typography>
      {userprofile.map((user)=>(
         <Stack direction="row" spacing={{md:4,xs:2}} m={3}
         >
          <Typography sx={{ minWidth: 100}}>{user.key}</Typography>
          <Typography >{user.value}</Typography> 
          {user.key==='Password'&&(<Button variant='outlined'
          size='small' sx={{fontSize:{md:'14px',xs:'9px',borderColor:'#3DB80C',color:'#000000'}}}>Change Password</Button>)}
          {user.key==='Membership Type'&&(
          <Fragment><Typography><Typography component="span" color="#3DB80C"><CircleIcon sx={{ marginTop: '5px', marginRight: '2px', fontSize: "11px" }} />Active</Typography>/In Active</Typography><Button variant='contained'
          size='small' sx={{fontSize:{md:'14px',xs:'8px',background:'#3DB80C'}}}>Change Plan</Button></Fragment>)}
       </Stack>

      ))}
  </Paper>
   </Box>
  )
}

export default Userprofile
