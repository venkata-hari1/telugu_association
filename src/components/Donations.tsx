import { Box, Grid, Typography,Button} from "@mui/material"
import { Custombutton, Filterbutton } from "../adminstyles/MembershiptableStyles"
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
import CircleIcon from '@mui/icons-material/Circle';
import Commonheader from "./Commonheader";

const Donations = () => {
 
    const tabledata=[
        {transactionid:'IT59598',name:'Tanuja Abhishek',email:'abishek@gmail.com',phone:'+1-8828282828',amount:'$244.07',paymentmode:"PayPal",date:'24-May-2020',status:'Received'},
        {transactionid:'IT69598',name:'Tanuja Abhishek',email:'abishek@gmail.com',phone:'+1-8828282828',amount:'$244.07',paymentmode:"PayPal",date:'24-May-2020',status:'Received'},
        {transactionid:'IT79598',name:'Tanuja Abhishek',email:'abishek@gmail.com',phone:'+1-8828282828',amount:'$244.07',paymentmode:"PayPal",date:'24-May-2020',status:'Received'},
        {transactionid:'IT99598',name:'Tanuja Abhishek',email:'abishek@gmail.com',phone:'+1-8828282828',amount:'$244.07',paymentmode:"PayPal",date:'24-May-2020',status:'Received'},
        {transactionid:'IT59566',name:'Tanuja Abhishek',email:'abishek@gmail.com',phone:'+1-8828282828',amount:'$244.07',paymentmode:"PayPal",date:'24-May-2020',status:'Received'},
        {transactionid:'IT59577',name:'Tanuja Abhishek',email:'abishek@gmail.com',phone:'+1-8828282828',amount:'$244.07',paymentmode:"PayPal",date:'24-May-2020',status:'Received'},
         
      ]

  return (
   <Box>
    <Commonheader />
    <Grid container>
    <Grid size={{lg:6,md:6,sm:6,xs:6}}>
     <Typography variant='h5' color='#3DB80C'>
        Donations
     </Typography>
    </Grid>
    
     <Grid size={{lg:6,md:6,sm:6,xs:6}}>
      <Box display="flex" sx={{gap:"20px",justifyContent:"flex-end"}}>
       <Custombutton startIcon={<UploadIcon />}>
         Export
       </Custombutton>
        <Filterbutton variant="outlined" startIcon={<FilterListIcon />}>
         Filter
        </Filterbutton>
     </Box>
    </Grid>
    {/* tableline */}
     <Grid size={{lg:12,md:12,sm:12,xs:12}}>
       <TableContainer component={Paper} sx={{marginTop:"10px",background:"white"}}>
    <Table sx={{ minWidth: 650 }} >
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
                
                <TableCell align="left">Transaction ID</TableCell>
                <TableCell align="left">Name</TableCell>
                <TableCell align="left">Email</TableCell>
                <TableCell align="left">Phone Number</TableCell>
                <TableCell align="left">Amount</TableCell>
                <TableCell align="left">Payment Mode</TableCell>
                <TableCell align="left">Date</TableCell>
                <TableCell align="left">Status</TableCell>
                
              </TableRow>
            </TableHead>
            <TableBody >
              {
                tabledata.map(data=>(
                 <TableRow key={data.transactionid}
                 
                 >
                  <TableCell>{data.name}</TableCell>
                  <TableCell>{data.email}</TableCell>
                  <TableCell>{data.phone}</TableCell>
                  <TableCell>{data.amount}</TableCell>
                  <TableCell>{data.paymentmode}</TableCell>
                  <TableCell>{data.date}</TableCell>
                  
                  <TableCell sx={{color:"#3DB80C"}}>
                  {data.status&& ( <CircleIcon  sx={{fontSize:"11px"}}/>)}
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
    
       </Grid>

    </Grid>
   </Box>
  )
}

export default Donations