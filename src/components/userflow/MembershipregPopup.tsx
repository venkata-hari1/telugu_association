import { Box, Stack, Typography } from "@mui/material"

const MembershipregPopup = () => {
  
const personaldata=[
  {
   sectionId:1,
   sectiontitle:"Personal Information",
   fields:[
    {label:'Name',value:'Sandeep Reddy'},
    {label:'Email ID',value:'sandeep@gmail.com'},
    {label:'Mobile Phone',value:'+1 651-987-6546'},
    {label:'Password',value:'*******'},
    {label:'Confirm Password',value:'*******'},
   ],
},
{
  sectionId:2,
  sectiontitle:'Location Details',
  fields:[
    {label:'Name',value:'Sandeep Reddy'},
    {label:'Email ID',value:'sandeep@gmail.com'},
    {label:'Mobile Phone',value:'+1 651-987-6546'},
    {label:'Name',value:'*******'},
  ]
},
{
  sectionId:3,
  sectiontitle:'Membership Information',
  fields:[
    {label:'Membership Type',value:'One Year-$45'},
    {label:'Payment Method',value:'PayPal'},
  ]
},
{
  sectionId:4,
  sectiontitle:'Payment Summary',
  fields:[
    {label:'Subtotal',value:`${45.00}`},
    {label:'Tax',value:`${0.00}`},
    {label:'Total',value:`${45.00}`},
  ]
}
]


  
  return (
   <Box width="100%">
   {personaldata.map((person)=>(
    <Stack spacing={5} direction="column">
      <Typography>{person.sectiontitle}</Typography>
      {
        person.fields.map((field)=>(
         <Stack spacing={6} direction="row">
   
    <Typography>    
    <Typography>{field.label}</Typography>
    </Typography>

    <Typography>
       <Typography>{field.value}</Typography>
    </Typography>
    </Stack>

      ))
    }  
    </Stack>
))}    

   </Box>
  )
}

export default MembershipregPopup
