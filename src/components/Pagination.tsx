import React from 'react'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack'; 
const Paginationcomponent = () => {
  return (
    <Stack spacing={2}>
        
    <Pagination count={2} variant="outlined" color="primary" />
          
    </Stack>

  )
}

export default Paginationcomponent