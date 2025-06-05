import { Box, Button, Card, CardContent, CardHeader, CardMedia, Grid, Typography } from "@mui/material"
import { Custombutton } from "../../adminstyles/MembershiptableStyles"
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from "react-router-dom";
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useState } from "react";
import Deletepopup from "./Deletepopup";
import Paginationcomponent from "./Pagination";

const EventsandCalender = () => {
  
const navigate=useNavigate();

  
const [open, setOpen] = useState(false);

const handleClickOpen = () => {
    setOpen(true);
};

const handleClose = () => {
    setOpen(false);
};

const carddata=[
  {id:1,title:"TOM Womens'Day",day:'Saturday',eveimg:'eventImg1',date:'04/19/2025',address1:'HTGC Temple,10915', address2:'Lemont Rd Lemont IL 60439'},
  {id:2,title:'TOM Dusssehra',day:'Saturday',eveimg:'eventImg1',date:'04/19/2025',address1:'HTGC Temple,10915', address2:'Lemont Rd Lemont IL 60439'},
  {id:3,title:'TOM Bhatukamma',day:'Saturday',eveimg:'eventImg1',date:'04/19/2025',address1:'HTGC Temple,10915', address2:'Lemont Rd Lemont IL 60439'}
]
 return (
    <Box>
     {open && <Deletepopup open={open} handleClose={handleClose} />}

     <Grid container>
      <Grid size={{md:6,sm:7,xs:7}}>
        <Typography color="#3DB80C" variant="h5">
            Events & Calender
        </Typography>
      </Grid>  
        <Grid size={{lg:6,md:6,sm:5,xs:5}}>
         <Box display="flex" justifyContent="flex-end">
         <Button  variant="outlined" startIcon={<AddIcon/>} 
         sx={{background:'#3DB80C',color:'white'}} onClick={()=>navigate('addevent')}>Add Event</Button>
        </Box>
      </Grid>

      <Grid size={{lg:12,md:12,sm:6}}>
       <Box display="flex" gap={2} mt={2}>
         <Button  variant="contained" 
         sx={{background:'#3DB80C'}}>Upcomming Events</Button>
          
         <Button  variant="outlined" 
         sx={{background:'#ffff',color:'#3DB80C',borderColor:'#3DB80C'}}>Past Events</Button>
        </Box>
        </Grid>

        <Grid container mt={2} width="100%">
        <Grid size={{lg:12,md:12,sm:12,xs:12}} >
          <Box gap={4} sx={{
            display:'flex',
            width:'100%',
            flexDirection:{xs:'column',sm:"column",md:'row'},
            justifyContent:'start'}}>  
            {
              carddata.map((card)=>(
               <Card  variant="outlined" sx={{p:1,background:'transparent'}}>
            <CardHeader title={card.title} sx={{color:'#3DB80C'}}
            titleTypographyProps={{ fontSize: '20px', color: '#3DB80C' }} />
              <CardMedia
                       component="img"
                       
                       sx={{ height:250, maxWidth:'300px',objectFit: 'cover',margin:'auto' }}
                     />
              <CardContent>
               <Typography gutterBottom variant="h6" component="div">
                {card.day}&nbsp;{card.date}
              </Typography>
              </CardContent>
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                 {card.address1}
                 <Box component="br" />
                  {card.address2}
                 </Typography>
              </CardContent>
               <Box display="flex" sx={{gap:"30px",justifyContent:"center",mt:'5px'}}>
       <Custombutton variant="contained" startIcon={<EditIcon />}>
         Edit
       </Custombutton>
       <Custombutton variant="outlined" startIcon={<DeleteOutlineIcon />} sx={{background:'white',borderColor:'red',color:'red'}}
       onClick={handleClickOpen}
       >
         Delete
       </Custombutton>
      </Box>
          </Card>
))  
}
        </Box>
        </Grid>
        </Grid>    
    </Grid>   

    <Box mt={5}>
      <Paginationcomponent />
    </Box>
    </Box>

  )
}

export default EventsandCalender
