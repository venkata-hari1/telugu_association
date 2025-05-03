import {styled} from '@mui/material/styles';
import Button from '@mui/material/Button';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import theme from '../theme';

export const CustomPagination = styled(Pagination)(({ theme }) => ({
    '& .MuiPaginationItem-root': {
      borderRadius: '8px',
      border: '1px solid #c1c1c1',
      color: '#000',
      fontWeight: 500,
      minWidth: '36px',
      height: '36px',
    },
    '& .Mui-selected': {
      backgroundColor: '#fff',
      border: '2px solid #3DB80C',
      color: '#3DB80C',
      fontWeight: 600,
    },
    '& .MuiPaginationItem-icon': {
      color: '#3DB80C',
    },
  }));
  


export const Custombutton=styled(Button)({
    backgroundColor:'#3DB80C',
    fontSize:'14px',
  textTransform:'capitalize',
  color:'#ffffff'
});
export const Filterbutton=styled(Button)({
  borderColor:'#3DB80C',
  color:"#3DB80C",
  fontSize:'14px',
  textTransform:'capitalize'
})