import { Paper,Box, MenuItem } from '@mui/material'

const Filtersponser = ({opensponsor}:{opensponsor:()=>void}) => {
  return (
       <Paper
      elevation={3}
      sx={{
        position: "absolute",
        top: "170px",
        right: "30px",
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