import { Circle } from '@mui/icons-material'
import { Box, Dialog, DialogContent, DialogTitle, List, ListItem, Typography } from '@mui/material'
type IProps={
    badge:string
    open:boolean
    handleClose:(t:boolean)=>void
}
export default function PopUp1({badge,open,handleClose}:IProps) {
    const oneyear = {
        title:'One Year TEAM Membership (Valid until 12-31-2025)',
          membershipType: "TEAM One-Year Membership",
          description:
            "To celebrate Telugu festivals and perpetuate our culture from one generation to another, the Telugu Association of Minnesota (TEAM) offers a one-year family membership. This enables families to participate in events such as Sankranti, Ugadi, Deepawali, summer picnic, and more.",
          eventsTitle: "Members also get access to:",
          eventsIncluded: [
            "Telugu language competitions for children",
            "Junior Tennis and Volleyball Tournaments",
            "Cultural programs like Balavinodham (for kids under 10)",
            "Volunteer opportunities such as FMSC (Feed My Starving Children)",
          ],
          b_description:"While this membership does not include voting privileges, it offers full participation in TEAM's cultural and volunteer events for the year.",
          note: "After June, prorated membership fees apply"
        }
      
    const Twoyears ={
            title:'Two Year TEAM Membership (Valid until 12-31-2026)',
          membershipType: "TEAM Two-Year Membership",
          description:
            "Enroll for a two-year TEAM membership and stay connected with the Telugu-speaking community of Greater Minnesota. This membership helps your family participate in a wide range of cultural, educational, and sports activities while promoting Telugu heritage.",
            b_description:
            "A great option to stay engaged for a longer period at a discounted rate. Voting privileges are not included.",
          eventsTitle: "Events include:",
          eventsIncluded: [
            "Major festivals like Sankranti, Ugadi, and Deepawali",
            "Educational events like Telugu language competitions",
            "Sports events like Tennis and Volleyball Tournaments",
            "Community activities like FMSC volunteering",
            "Family-friendly events like the Summer Picnic and Balavinodham",
          ],
          note:''
        }
      

      const lifetime = 
        {
            title:'Lifetime TEAM Membership',
          membershipType: "TEAM Lifetime Membership",
          description:
            "Become a lifelong supporter of Telugu culture and heritage in Minnesota with the Lifetime TEAM Family Membership. This one-time contribution ensures your family has continuous access to all TEAM activities and events without yearly renewals.",
          eventsTitle: "Lifetime members can participate in:",
          eventsIncluded: [
            "Annual cultural festivals (Sankranti, Ugadi, Deepawali)",
            "Talent showcases and cultural competitions",
            "Sports and charity events like the Volleyball Tournament & FMSC",
            "Fun family events including the Summer Picnic and Balavinodham",
           
          ],
          note:'',
          b_description:
            "TEAM also appreciates and recognizes its volunteers every year in a dedicated Volunteer Appreciation event. While this membership does not include voting privileges, it signifies strong support for promoting Telugu identity and community service."
        }
   let plandetails=badge==='One Year'?oneyear:badge==='Two Years'?Twoyears:lifetime
   const handleClose1=()=>{
    handleClose(false)
   }
  return (
    <Dialog open={open} onClose={handleClose1}>
      <DialogContent>
        <DialogTitle sx={{textAlign:'center',fontSize:'16px',color: '#3DB80C',fontWeight:'700'}}>{plandetails?.title}</DialogTitle>
        <Box sx={{fontSize:'14px',fontWeight:550,lineHeight:'25px'}}>{plandetails?.description}</Box>
        <Typography sx={{fontWeight:550,mt:1,fontSize:'14px'}}>{plandetails?.eventsTitle}</Typography>
        <List>
            {plandetails?.eventsIncluded?.map((x)=>
            <ListItem>
              <Typography sx={{fontWeight:550}}><Circle sx={{fontSize:'8px',marginRight:'10px'}}/>{x}</Typography>
            </ListItem>
            )}
        </List>
        <Box sx={{fontSize:'14px',fontWeight:550,lineHeight:'28px'}}>{plandetails?.b_description}</Box>
        <Box sx={{fontSize:'14px',fontWeight:550,lineHeight:'28px'}}>{"Note:"+plandetails?.note}</Box>
      </DialogContent>
    </Dialog>
  )
}
