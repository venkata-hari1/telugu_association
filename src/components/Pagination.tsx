import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack'; 
import { CustomPagination } from '../adminstyles/MembershiptableStyles';

const Paginationcomponent = () => {
  return (
  
    <Stack spacing={2} alignItems="center" sx={{  padding: '20px' }}>
          <CustomPagination count={10}   shape="rounded" />
    </Stack>

  )
}

export default Paginationcomponent