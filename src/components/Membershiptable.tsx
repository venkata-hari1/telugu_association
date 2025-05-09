import { Box, Button, Grid, InputAdornment, TextField,Typography,Stack} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
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
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import {Custombutton,Filterbutton} from '../adminstyles/MembershiptableStyles';
import { useNavigate } from 'react-router-dom';
import Commonheader from './Commonheader';
import Paginationcomponent from './Pagination';
import CircleIcon from '@mui/icons-material/Circle';

const Membershiptable = () => {

const navigate=useNavigate()

const tabledata=[
  {sno:1,name:'Tanuja Abhilash',email:'hwestiii@outlook.com',phone:'+18143008184',membertype:'One Year',date:'From Mar 15 to Apr 15 2025',status:'active'},
  {sno:2,name:'Vignesh',email:'ianbuck@icloud.com',phone:'+14842634655',membertype:'One Year',date:'From Mar 15 to Apr 15 2025',status:'active'},
  {sno:3,name:'Hema Chaudhari',email:'tkrotchko@yahoo.ca',phone:'+15852826353',membertype:'One Year',date:'From Mar 15 to Apr 15 2025',status:'active'},
  {sno:4,name:'Ayush Dhyan',email:'mugwump@verizon.net',phone:'+16102448965',membertype:'One Year',date:'From Mar 15 to Apr 15 2025',status:'active'},
  {sno:5,name:'Param N',email:'larry@verizon.net',phone:'+18143008346',membertype:'One Year',date:'From Mar 15 to Apr 15 2025',status:'active'},
  {sno:6,name:'Pratyush Solanki',email:'oevans@icloud.com',phone:'+18143008346',membertype:'One Year',date:'From Mar 15 to Apr 15 2025',status:'active'},
]

return (
   <Box gap={2}>   
 
   <Grid container>
    <Grid size={{lg:6,md:6,sm:6,xs:6}}>
      <Typography variant="h5" color='#3DB80C'>Membership Management</Typography>   
      </Grid >
      <Grid size={{lg:6,md:6,sm:6,xs:6}}>
       <Box display="flex" justifyContent="flex-end" gap="10px" sx={{marginTop:"5px"}}>
        <Custombutton onClick={()=>navigate('/admin/membership/volunteermgmt')} >Volunteer Management</Custombutton>
        <Custombutton onClick={()=>navigate('')}>Subscription plans </Custombutton>   
        </Box>
      </Grid>

     <Grid size={{lg:6,md:6,sm:12}}>
     <TextField 
      type='search'
      placeholder='Search'
      size="small"
      
      slotProps={{
        input: {
          startAdornment: <InputAdornment position="start">
            <SearchIcon sx={{color:"#3DB80C"}}/>
          </InputAdornment>,
        }
       }}  
       sx={{
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: '#3DB80C', 
            borderRadius:'10px'
          },
          '&:hover fieldset': {
            borderColor: '#3DB80C', 
          },
          '&.Mui-focused fieldset': {
            borderColor: '#3DB80C', 
          },
        },
        '& input::placeholder': {
          color: '#3DB80C',
          opacity: 1,
        },
        width:{lg:'500px',md:'500px'},
        borderRadius:'10px',
        background:"white",
        marginTop:"20px"
      }}
     />
   </Grid>
<Grid size={{lg:6,md:6,sm:12}}>
<Box display="flex" justifyContent="flex-end" gap="10px" sx={{marginTop:{xs:2}}}>  
<Custombutton startIcon={<AddIcon/>} onClick={()=>navigate('/admin/membership/addmember')}>
  Add Member
</Custombutton>

<Custombutton variant="contained" startIcon={<UploadIcon />} >
  Bulk Upload
</Custombutton>

<Custombutton startIcon={<UploadIcon />}>
  Export
</Custombutton>

 <Filterbutton variant="outlined" startIcon={<FilterListIcon />}>
  Filter
 </Filterbutton>
</Box>
</Grid>


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
            <TableCell align="left">Name</TableCell>
            <TableCell align="left">Email</TableCell>
            <TableCell align="left">Phone Number</TableCell>
            <TableCell align="left">Membership Type</TableCell>
            <TableCell align="left">Date</TableCell>
            <TableCell align="left">Status</TableCell>
            <TableCell align="left">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody >
          {
            tabledata.map(data=>(
             <TableRow key={data.sno}
             
             >
              <TableCell>{data.sno}</TableCell>
              <TableCell>{data.name}</TableCell>
              <TableCell>{data.email}</TableCell>
              <TableCell>{data.phone}</TableCell>
              <TableCell>{data.membertype}</TableCell>
              <TableCell>{data.date}</TableCell>
             
              <TableCell sx={{color:"#3DB80C"}}>
                 {data.status&&(<CircleIcon  sx={{fontSize:"11px"}}/>)}
                 {data.status}</TableCell>
              <TableCell><Button
        variant="text"
        startIcon={<EditIcon />}
        endIcon={<ArrowDropDownIcon />}
        sx={{ textTransform: 'none', color: '#555555'}} 
      >
        Edit
      </Button></TableCell>
              
             </TableRow>


            ))
          }
        </TableBody>
</Table>
</TableContainer>

{/* pagination */}
</Grid>
<Paginationcomponent />
 </Box>
   
  )
}

export default Membershiptable
