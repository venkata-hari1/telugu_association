import { Box, Button, Grid, Typography } from "@mui/material"
import { Custombutton } from "../adminstyles/MembershiptableStyles"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Murthy from '../assets/murthy.jpg'
import Kishore from '../assets/kishore.jpg'
import Deepthi from '../assets/deepthi.jpg'
import Ram from '../assets/ram.jpg'
import Sai from '../assets/sai.jpg'
import Santhosh from '../assets/santhosh.jpg'
import Srikanth from '../assets/srikanth.jpg'
import Vijaya from '../assets/vijaya.jpg'
import { useState } from "react";
import Deletepopup from "./Deletepopup";
import { useNavigate } from "react-router-dom";

const BoardandLeadership = () => {

    const[openpop,setOpenpop]=useState(false)

    const deleteBoardmemmber=()=>{
       
        setOpenpop(true)
    }

    const handleClose=()=>{
        setOpenpop(false)
    }

    const navigate=useNavigate()

    const boardmembers=[
        {id:1,name:'Murthy Ivaturi',image:Murthy, position:'President'},
        {id:2,name:'Kishore Guttala',image:Kishore, position:'Vice President'},
        {id:3,name:'Ram Kutala',image:Deepthi, position:'Marketing Secretary'},  
        {id:4,name:'Srikanth Lanka',image:Ram, position:'Food Secretary'},  
        {id:5,name:'Santosh Yatam',image:Sai, position:'Cultural Secretary'},  
        {id:6,name:'Saichand Goud Pujari',image:Santhosh, position:'Volunteer Secretary'},  
        {id:7,name:'Vijaya Musumuru',image:Srikanth, position:'Event Secretary'},  
        {id:8,name:'Deepthi Gadiyaram',image:Vijaya, position:'Language/Media Secretary'},  
    ]

const mememberbutton=[
    2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025
]

  return (
     <Box>
      {openpop&&<Deletepopup open={openpop} handleClose={handleClose}/>}
      <Grid container>
        <Grid size={{lg:6,md:6,sm:12,xs:12}} >
          <Typography variant="h5" color="#3DB80C">
              Board and Leadership</Typography>
        </Grid>
          <Grid size={{lg:6,md:6,sm:12,xs:12}} display="flex" justifyContent="flex-end">
            <Custombutton variant='contained' onClick={()=>navigate('addboard')}>Add Board</Custombutton>
           </Grid>
      </Grid>
      
      <Box display="flex" gap={1} flexWrap="wrap" mt={2}>
        {mememberbutton.map((member)=>(
         <Button variant="contained" sx={{background:'#3DB80C',color:'#fff'}}>{member}</Button>
        ))
        
        }
        
         </Box>
 

       <Grid container spacing={1} mt={3}>
       {boardmembers.map((member)=>{

        return <Grid size={{lg:3,md:3,sm:6,xs:6}} mt={2} mb={2}>
        <Box sx={{display:'flex',
            flexDirection:{lg:'row',md:'row',sm:'column',xs:'column',
            gap:{sm:'50px',xs:'50px'}},
            justifyContent:'center'}}>    
             <Card sx={{ maxWidth: 200,gap:'30px' }}>
             <CardMedia
                sx={{ height: 200 }}
                image={member.image}
                title="green iguana"
          />
          <CardContent>
         <Typography gutterBottom variant="h6" component="div">
          {member.name}
         </Typography>
        <Typography component="p">
          {member.position}
        </Typography>
        </CardContent>
         <CardActions>
          <Custombutton variant="contained" startIcon={<EditIcon />}>
            Edit
           </Custombutton>
           <Custombutton variant="outlined" startIcon={<DeleteOutlineIcon />} 
           sx={{background:'white',borderColor:'red',color:'red'}}
           onClick={deleteBoardmemmber}>
            Delete
          </Custombutton>
         </CardActions>
          </Card>
         
        </Box> 
        
        </Grid> 
       })}
       
           
    </Grid>   



    </Box>
  )
}

export default BoardandLeadership