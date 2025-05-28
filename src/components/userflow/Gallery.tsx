import { Box, Card, CardMedia, FormControl, Grid, MenuItem, Paper, Select, Typography } from "@mui/material"
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import sankranthi from '../../assets/sankranthi.jpg'

function Gallery() {

const gallerysumdata=[
  {id:1,text:'TAM Deepavali'},
  {id:2,text:'TAM Sankranti'},
  
]

  const galldata=[
    {id:1,img:sankranthi},
     {id:2,img:sankranthi},
      {id:3,img:sankranthi},
  ]
  return (
  <Box width="100%" p={2}>
  <Box display="flex" justifyContent="space-between" alignItems="center">
  <Typography color="#3DB80C" fontWeight="700">Photo Gallery</Typography>        
  <FormControl size="small">
                 <Select
                   
                   value="2025"
                   variant="outlined"
                   displayEmpty
                   IconComponent={() => (
                     <ArrowDropDownIcon sx={{ color: "white", cursor: "pointer" }} />
                   )}
                   MenuProps={{
                     PaperProps: {
                       sx: {
                        
                         backgroundColor: "#FDF7E1",
                         marginTop: "4px",
                         "& .MuiMenuItem-root": {
                           backgroundColor: "#FDF7E1",
                           color: "#3DB80C",
                           "&:hover": {
                             backgroundColor: "#3DB80C",
                             color: "white",
                           },
                         },
                       },
                     },
                   }}
                   sx={{
                     color:'white',
                     backgroundColor: "#3DB80C",
                     border: "1px solid #3DB80C",
                     borderRadius: "2px",
                     width: "120px",
                     padding: "1px 1px",
                     "& .MuiSelect-outlined": {
                       padding: "8px 10px",
                       
                       background: "transparent",
                     },
                     "& fieldset": {
                       border: "none",
                     },
                    
                   }}
                 >
                   <MenuItem value="2025">2025</MenuItem>
                   <MenuItem value="2024">2024</MenuItem>
                 </Select>
               </FormControl>
   </Box> 
     
        
     {gallerysumdata.map(gdata=>(
       <Box key={gdata.id}>
         <Paper sx={{display:'flex',justifyContent:'center', alignItems:'center',p:1,margin:'auto',marginTop:'10px', width:'95%'}}>
              <Typography sx={{color:'#3DB80C',fontSize:14,fontWeight:600}}>{gdata.text}</Typography>
      </Paper> 
      <Box mt={3} display="flex" 
      justifyContent="center" 
      alignItems="center" flexDirection={{ lg:'row',md:'row',sm:'column',xs:'column'}} gap={3}>
        {galldata.map(gallery=>(
        <Card key={gallery.id} sx={{background:'transparent', width:{sm:'100%',xs:'100%',lg:'250px'},height:'150px'}}>
          <CardMedia component="img" src={gallery.img} sx={{width:'100%',height:'150px'}}/>
        </Card>
        ))}
        
        
          </Box>
       </Box>
     ))}

   </Box>
  )
}

export default Gallery
