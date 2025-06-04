import { Box, Button, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"

function Mebershipbenfits() {

const memberbenefits=[
{id:1,heading:'Sankranti event',descriptin:'Sankranti is one of the prominent festivals of Telugu speaking people.'},
{id:2,heading:'',descriptin:'This event will promote Telugu speaking people living in Greater Minnesota to celebrate this festival as a part of Telugu culture.'},
{id:3,heading:'Telugu Language competitions:',descriptin:'This event is to encourage Telugu speaking families to encourage their children to learn Telugu and participate in the companions. Non-members as well can participate with a nominal fee decided by TEAM.'},
{id:4,heading:'Ugadi event:',descriptin:'This event will promote Telugu speaking people living in Greater Minnesota to celebrate Telugu New Year.'},
{id:5,heading:'Junior Tennis Tournament',descriptin:'This tournament is to promote families to encourage their children to participate in this sport activity with a nominal entry fee decided by TEAM.'},
{id:6,heading:'Summer picnic',descriptin:'This event will hosted by TEAM to campaign about the organization. It includes free lunch to all Telugu speaking people living in Minnesota. TEAM encourages Telugu families to bring their visiting parents and friends to participate in several games and fun activities'},
{id:7,heading:'Volleyball tournament',descriptin:'This is a fund raising event for charity promoted by TEAM. Anyone can participate with a nominal entry fee decided by TEAM. Funds left after the expenses will be donated for the benefit of the community decided by board.'},
{id:8,heading:'FMSC (Feed My Starving Children):',descriptin:'This event is to encourage families to volunteer for a good cause.'},
{id:9,heading:'Balavinodham event:',descriptin:'This event will promote Telugu speaking people living in Greater Minnesota for their kids under the age of 10 years to participate in cultural activities on the stage.'},
{id:10,heading:'Deepawali event:',descriptin:'Deepawali is one of the prominent festivals of India. This event will promote Telugu speaking people living in Greater Minnesota to celebrate Deepawali.'},
{id:11,heading:'Volunteer appreciation:',descriptin:'TEAM celebrates this event to recognize the services extended by the volunteers.'},

]
const navigate=useNavigate()

return (
    <Box width="100%" p={2}>
     <Box display="flex" justifyContent="space-between" color="#3DB80C">
      <Typography fontWeight="700">Membership Benefits</Typography>
      <Button variant="contained" sx={{color:'white',background:'#3DB80C'}}
      onClick={()=>navigate('/usermembership')}>Membership Plans</Button>
     </Box>
     <Box color="#3DB80C">
      <Typography variant="body1" mt={2} >
        To celebrate Telugu festivals to perpetuate culture from one generation to another. Telugu Association of Minnesota is facilitating a venue to promote Telugu culture and heritage among the Telugu speaking people living in Greater Minnesota area. TEAM events create stage for members to showcase and present Telugu cultural talent. Any family / person can be enrolled as member of Telugu association of Minnesota by paying annual membership fee during the year that elapses on 31st December.  These members will not have voting privilege. TEAM extends opportunities to the members to volunteer and participate in any of the following:<br />
        <br />
       </Typography>
      {memberbenefits.map((member)=>(
       <Typography>
       <Typography component="span" sx={{ fontWeight: 'bold' }} lineHeight={2}>
       {member.id}.{' '} {member.heading}
       </Typography >{' '}
        {member.descriptin}
       </Typography > 
       ))}
     <Typography>
      <Typography component="span" sx={{fontWeight:700}}>Note:{''}</Typography> 
      TEAM encourages to become a member by paying prorated membership fee after June
    </Typography>
   
  

     </Box>
    </Box>
  )
}

export default Mebershipbenfits
