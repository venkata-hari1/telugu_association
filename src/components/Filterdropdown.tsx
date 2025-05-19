import { Paper,Box, MenuItem } from '@mui/material'

const Filterdropdown = ({openfilter}:{openfilter:()=>void}) => {
  return (
   
      <Paper
      elevation={3}
      sx={{
        position: "absolute",
        top: "160px",
        right: "15px",
        zIndex: 10,
        width: 100,
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