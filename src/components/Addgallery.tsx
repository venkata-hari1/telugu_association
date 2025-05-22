import { Box, Button, Card, CardMedia, FormControl, FormControlLabel, Grid,  Radio, RadioGroup, Select, TextField, Typography } from '@mui/material'
 import MenuItem from '@mui/material/MenuItem';
 import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Submit, VisuallyHiddenInput } from '../adminstyles/MembershiptableStyles';
import UploadFileIcon from '@mui/icons-material/UploadFile'; 
import CloseIcon from '@mui/icons-material/Close';
import galimage1 from '../assets/gal-1.jpg'

const Addgallery = () => {

return (
    <Box sx={{overflowX:{sm:'hidden'}}}>
       
         {/*     <Box display="flex" justifyContent="space-between" >
                <Typography variant="h5" color="#3DB80C">
                  Gallery and Media/
                  <Typography component="span" fontSize={22} fontWeight="300">
                  Add Gallery
                  </Typography>
                </Typography>
              </Box>
              */}
             
                <Box>
                   <FormControl size="small">
                        <Select
                          value="Year"
                          variant="outlined"
                          displayEmpty
                          IconComponent={() => (
                            <ArrowDropDownIcon sx={{ color: '#3DB80C', cursor: 'pointer' }} />
                          )}
                          MenuProps={{
                            PaperProps: {
                              sx: {
                                backgroundColor: '#FDF7E1',
                                marginTop: '4px',
                                '& .MuiMenuItem-root': {
                                  backgroundColor: '#FDF7E1',
                                  color: '#3DB80C',
                                  '&:hover': {
                                    backgroundColor: '#3DB80C',
                                    color: 'white',
                                  },
                                },
                              },
                            },
                          }}
                          sx={{
                            color: '#3DB80C',
                            backgroundColor: 'white',
                            border: '1px solid #3DB80C',
                            borderRadius: '2px',
                            width: '120px',
                            padding: '1px 1px',
                            '& .MuiSelect-outlined': {
                              padding: '8px 10px',
                              color:"#3DB80C",
                              background:'transparent'
                            },
                            '& fieldset': {
                              border: 'none',
                            },
                            marginTop:'5px'
                          }}
                        >
                          <MenuItem value="Year">2025</MenuItem>
                          
                          </Select>
                      </FormControl>
                </Box>
              <Grid container spacing={2} mt={1}>
                        <Grid size={{ xs: 12, sm: 12, md: 2, lg: 2 }}>
                          <Typography>Title</Typography>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 12, md: 10, lg: 10 }}>
                          <TextField
                            fullWidth
                            size="small"
                            sx={{
                              "& .MuiOutlinedInput-root": {
                                "& fieldset": {
                                  borderColor: "#3DB80C",
                                },
                                "&:hover fieldset": {
                                  borderColor: "#3DB80C",
                                },
                                "&.Mui-focused fieldset": {
                                  borderColor: "#3DB80C",
                                },
                                borderRadius: "8px",
                                width: { md: "600px", lg: "600px", xs: "100%", sm: "600px" },
                              },
                            }}
                          />
                        </Grid>

                        <Grid size={{ xs: 12, sm: 12, md: 2, lg: 2 }}>
                          <Typography>Media Type</Typography>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 12, md: 10, lg: 10 }}>
                         
                        <FormControl>
     
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                            
                        >
                            <FormControlLabel value="photos" control={<Radio 
                             sx={{
                                color: "#3DB80C",
                                '&.Mui-checked': {
                                  color: "#3DB80C",
                                },
                              }}/>} label="Photos" />
                            <FormControlLabel value="videos" control={<Radio 
                             sx={{
                                color: "#3DB80C",
                                '&.Mui-checked': {
                                  color: "#3DB80C",
                                },
                              }}/>} label="Videos" />
                        
                        </RadioGroup>
                        </FormControl>
                   </Grid>

                    <Grid size={{ xs: 12, sm: 12, md: 2, lg: 2 }}>
                                <Typography>Images</Typography>
                       </Grid>
                       <Grid size={{ xs: 12, sm: 12, md: 10, lg: 10 }}>
                       <Button
                     component="label"
                     variant="outlined"
                     tabIndex={-1}
                     endIcon={<UploadFileIcon />}
                     sx={{borderColor:'#3DB80C',color:'#3DB80C',paddingTop:"7px",paddingBottom:'7px'}}
                   >
                     Upload
                     <VisuallyHiddenInput
                       type="file"
                       
                       multiple
                     />
                   </Button>
                   </Grid>

                     <Grid size={{ xs: 12, sm: 12, md: 2, lg: 2 }}>
                          <Typography>Youtube Link</Typography>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 12, md: 10, lg: 10 }}>
                          <TextField
                            fullWidth
                            size="small"
                            sx={{
                              "& .MuiOutlinedInput-root": {
                                "& fieldset": {
                                  borderColor: "#3DB80C",
                                },
                                "&:hover fieldset": {
                                  borderColor: "#3DB80C",
                                },
                                "&.Mui-focused fieldset": {
                                  borderColor: "#3DB80C",
                                },
                                borderRadius: "8px",
                                width: { md: "600px", lg: "600px", xs: "100%", sm: "600px" },
                              },
                            }}
                          />
                        </Grid>
                   
                       <Grid size={{ xs: 12, sm: 12, md: 2, lg: 2 }}>
                          <Typography>Preview</Typography>
                        </Grid>
                        <Grid size={{xs:12,sm:12,md:6,lg:6}} gap={3}
                        sx={{
                          display:'flex',
                          flexDirection:{md:'row',sm:'column',xs:'column'}}}>
                          
                          <Card sx={{ maxWidth: 345,position:"relative" }}>
                              <CardMedia
                                component="img"
                                height="194"
                                // image={galimage1}
                                alt="Paella dish"/>
                               <CloseIcon
                               sx={{
                              position: 'absolute',
                              top: 8,
                              right: 8,
                              backgroundColor: '#3DB80C',
                              color:'white',
                              '&:hover': {
                                backgroundColor: '#3DB80C',
                                cursor:'pointer'
                              },
                            }}
                           /> 
                          </Card>
                            <Card sx={{ maxWidth: 345,position:"relative" }}>
                              <CardMedia
                                component="img"
                                height="194"
                                // image={galimage1}
                                alt="Paella dish"/>
                               <CloseIcon
                               sx={{
                              position: 'absolute',
                              top: 8,
                              right: 8,
                              backgroundColor: '#3DB80C',
                              color:'white',
                              '&:hover': {
                                backgroundColor: '#3DB80C',
                                cursor:'pointer'
                              },
                            }}
                         /> 
                          </Card>
                        </Grid>
                     

                      <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
                        <Box sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                        <Submit variant="contained" size="large">Submit</Submit>
                        </Box>
                        </Grid> 


</Grid>                
</Box>

  )
}

export default Addgallery
