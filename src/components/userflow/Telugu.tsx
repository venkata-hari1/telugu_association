import { Box, Button, Grid, Typography } from "@mui/material"

function Telugu() {

  const telugudata=[
    {id:1,title:'తెలుగు నక్షత్రాలు'},
    {id:2,title:'తెలుగు సంవత్సరాలు'},
    {id:3,title:'తెలుగు తిధులు'},
    {id:4,title:'తెలుగు గుణింతములు'},
    {id:5,title:'వేమన పద్యాలు'},
    {id:6,title:'తెలుగు భాషకి అక్షరాలు'},
    {id:7,title:'తెలుగు భాష'},
    

  ]

  return (
   <Box sx={{width:'100%',p:2}}>
    <Typography color='#3DB80C' fontWeight="700">Telugu Vyakaranam</Typography>
     <Grid container spacing={4} display="flex" justifyContent='flex-start' mt={4}>
    { 
      telugudata.map(telugu=>(
      <Grid size={{xs:12,md:4}} >
      <Button variant="outlined" fullWidth sx={{background:'white',color:"#3DB80C",borderColor:'#3DB80C',fontWeight:700}}>{telugu.title}</Button>
      </Grid>
      ))
    }
    

         

     </Grid>
   </Box>
  )
}

export default Telugu
