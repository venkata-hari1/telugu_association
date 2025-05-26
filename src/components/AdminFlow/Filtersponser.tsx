import { Paper,Box, MenuItem } from '@mui/material'

const Filtersponser = () => {
  return (
       
       <Paper
      elevation={3}
      sx={{
        position: "absolute",
        top: {lg:"38px",md:"38px",sm:"100px",sx:"100px"},
        right: "3px",
        zIndex: 10,
        width: 150,
      }}
    >
      <Box display="flex" flexDirection="column">
        <MenuItem >Active Members</MenuItem>
        <MenuItem >Inactive Members</MenuItem>
       
      </Box>
    </Paper>
   
  )
}

export default Filtersponser