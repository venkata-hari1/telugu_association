import {styled} from '@mui/material/styles';
import Button from '@mui/material/Button';
import Pagination from '@mui/material/Pagination';


export const CustomPagination = styled(Pagination)(() => ({
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
  

export const Custombutton = styled(Button)(({ theme }) => ({
  backgroundColor: '#3DB80C',
  fontSize: '14px',
  textTransform: 'capitalize',
  color: '#ffffff',
 

  [theme.breakpoints.down('sm')]: {
    fontSize: '12px',
    height: '36px',
    padding: '3px 4px',
    
  },
}));

export const Filterbutton=styled(Button)(({ theme }) => ({
  borderColor:'#3DB80C',
  color:"#3DB80C",
  fontSize:'14px',
  textTransform:'capitalize',

  [theme.breakpoints.down('sm')]: {
    fontSize: '12px',
    height: '36px',
    padding: '3px 4px',
    
  },
}));

export const Subscriptionbutton=styled(Button)(({theme})=>({
  backgroundColor: '#3DB80C',
  color: '#ffffff',
  textTransform: 'capitalize',
  fontSize: '14px',
  marginTop:'10px',
  fontWeight:400,
  [theme.breakpoints.down('sm')]: {
      fontSize: '11px',
      padding: '6px 12px',
      height:'40px'
    },

}))

export const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});
