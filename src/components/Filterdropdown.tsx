import { Paper,Box, MenuItem } from '@mui/material'

const Filterdropdown = () => {
  return (
   
      <Paper
      elevation={3}
      sx={{
        position: "absolute",
        top: {lg:"38px",md:"38px",sm:"260px",sx:"250px"},
        right: "1px",
        zIndex: 10,
        width: 95,
      }}
    >
      <Box display="flex" flexDirection="column">
        <MenuItem >One Year</MenuItem>
        <MenuItem >Two Year</MenuItem>
        <MenuItem >Life Time</MenuItem>
      </Box>
    </Paper>
  )
}

export default Filterdropdown