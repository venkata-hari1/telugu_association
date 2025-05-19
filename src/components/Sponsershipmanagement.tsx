import { Box, Grid, Typography } from "@mui/material"
import {Custombutton, Filterbutton, Subscriptionbutton} from '../adminstyles/MembershiptableStyles'
import AddIcon from '@mui/icons-material/Add';
import UploadIcon from '@mui/icons-material/Upload';
import FilterListIcon from '@mui/icons-material/FilterList';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import EditIcon from '@mui/icons-material/Edit';
import CircleIcon from '@mui/icons-material/Circle';
import { useNavigate } from "react-router-dom";
import Paginationcomponent from "./Pagination";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useState } from "react";
import Filtersponser from "./Filtersponser";


const Sponsershipmanagement = () => {

  const navigate=useNavigate()

    const tabledata=[
      {sno:1,companyname:'Pizza Hut',sponsorcontact:'Srikanth',logo:'img',contactemail:'mastinfo@gmail.com',website:"One Year",sponserplan:'Gold',date:'From Mar15th to April15th 2025',status:'Active',action:''},
      {sno:2,companyname:'Pizza Hut',sponsorcontact:'Srikanth',logo:'img',contactemail:'mastinfo@gmail.com',website:"One Year",sponserplan:'Gold',date:'From Mar15th to April15th 2025',status:'Active',action:''},
      {sno:3,companyname:'Pizza Hut',sponsorcontact:'Srikanth',logo:'img',contactemail:'mastinfo@gmail.com',website:"One Year",sponserplan:'Gold',date:'From Mar15th to April15th 2025',status:'Active',action:''},
      {sno:4,companyname:'Pizza Hut',sponsorcontact:'Srikanth',logo:'img',contactemail:'mastinfo@gmail.com',website:"One Year",sponserplan:'Gold',date:'From Mar15th to April15th 2025',status:'Active',action:''},
      {sno:5,companyname:'Pizza Hut',sponsorcontact:'Srikanth',logo:'img',contactemail:'mastinfo@gmail.com',website:"One Year",sponserplan:'Gold',date:'From Mar15th to April15th 2025',status:'Active',action:''},
      {sno:6,companyname:'Pizza Hut',sponsorcontact:'Srikanth',logo:'img',contactemail:'mastinfo@gmail.com',website:"One Year",sponserplan:'Gold',date:'From Mar15th to April15th 2025',status:'Active',action:''},  
    
    ]
    const[state,setState]=useState(false)
    function openActivemembers(){
       setState(prev=>!prev)
    }
  return (
   <Box>
   
   <Grid container>
    <Grid size={{lg:6,md:6,sm:6,xs:6}}>
     <Typography variant="h5" color='#3DB80C'>Sponsership Management</Typography>   
   </Grid >
   <Grid size={{lg:6,md:6,sm:6,xs:6}}>
    <Box display="flex" justifyContent="flex-end" gap={3}>
     <Subscriptionbutton variant="contained" onClick={()=>navigate('subscriptionplans')}>Subscription Plans</Subscriptionbutton>
     <Subscriptionbutton variant="contained" onClick={()=>navigate('donations')}>Donations</Subscriptionbutton>   
     </Box>
   </Grid>

    {/* search line */}
    <Grid size={{lg:6,md:6,sm:12,xs:12}}>
     
    </Grid>
    <Grid size={{lg:6,md:6,sm:12,xs:12}}>
    <Box display="flex" 
         
         gap={4}
         sx={{marginTop:{xs:2}, justifyContent:{lg:'flex-end',md:'flex-end',sm:'flex-start',
    }}}>
      <Custombutton variant="contained" startIcon={<AddIcon/>} onClick={()=>navigate('/admin/sponsorship/addsponsor')}>
        Add Sponsor
      </Custombutton>
      <Custombutton variant="contained" startIcon={<UploadIcon />}>
        Export
      </Custombutton>
      <Box sx={{ position:'relative'}}>
      <Filterbutton 
        variant="outlined" 
        fullWidth
        startIcon={<FilterListIcon />} 
        onClick={openActivemembers}>
        Filters
        </Filterbutton>
        {state&&
  
        <Filtersponser opensponsor={openActivemembers}/>
        }
        </Box>
       </Box>
   </Grid>

   {/* table line */}
   <Grid size={{lg:12,md:12,sm:12,xs:12}}>
   <TableContainer component={Paper} sx={{marginTop:"10px",background:"white"}}>
<Table sx={{ minWidth: 650 }} size='small'>
<TableHead   sx={{
        border: '2px solid #3DB80C',         
                 
      }}>
          <TableRow 
           sx={{
            fontWeight: 'bold',                
            '& .MuiTableCell-head': {
              fontWeight: 'bold',              
              color: '#3DB80C',                
              borderBottom: 'none', 
                         
            },
          }}>
            <TableCell>S.No</TableCell>
            <TableCell align="left">Company Name</TableCell>
            <TableCell align="left">Sponsor Name</TableCell>
            <TableCell align="left">Logo</TableCell>
            <TableCell align="left">Contact Details</TableCell>
            <TableCell align="left">Website</TableCell>
            <TableCell align="left">Sponsership Plan</TableCell>
            <TableCell align="left">Date</TableCell>
            <TableCell align="left" >Status</TableCell>
            <TableCell align="left">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody >
          {
            tabledata.map(data=>(
             <TableRow key={data.sno}
             
             >
              <TableCell>{data.sno}</TableCell>
              <TableCell>{data.companyname}</TableCell>
              <TableCell>{data.sponsorcontact}</TableCell>
              <TableCell>{data.logo}</TableCell>
              <TableCell>{data.contactemail}</TableCell>
              <TableCell>{data.website}</TableCell>
              <TableCell>{data.sponserplan}</TableCell>
              <TableCell>{data.date}</TableCell>
              
              <TableCell sx={{color:"#3DB80C",padding: "6px 10px"}}>
              {data.status&& ( <CircleIcon  sx={{fontSize:"11px"}}/>)}
                {data.status}</TableCell>
              <TableCell>
                 <Select
                                       value="Edit"
                                      size="small" 
                                       renderValue={() => (
                              <Box display="flex" alignItems="center">
                              <EditIcon fontSize="small" style={{ marginRight: 4 }} />
                              Edit
                             </Box>
                             )}>
                              
                              <MenuItem value="Delete"><DeleteOutlineIcon fontSize="small" style={{ marginRight: 8,color:"red" }} />Delete</MenuItem>
                  
                              </Select>
              </TableCell>
             </TableRow>


            ))
          }
        </TableBody>
</Table>
</TableContainer>

   </Grid>
  </Grid>

  <Paginationcomponent />
   </Box>

  )
}

export default Sponsershipmanagement
