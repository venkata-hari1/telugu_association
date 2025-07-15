// Commonheader.tsx
import { TextField, Box, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';

const Commonheader = ({ onToggleSidebar}:{onToggleSidebar: () => void }) => {
 return (
    <Box
      sx={{
        display:'flex',justifyContent:'center',alignItems:'center',alignContent:'center',flexDirection:'column',
        gap: 2,
        width:'100%',
        boxShadow: 1,
        pt: 1,
        pb: 1,
        pr: 2,
        pl: 2
      }}
    >
      <Box sx={{width:'96%'}}>
      {/* Mobile toggle icon */}
      <Box sx={{ display: { xs: "block", md: "none" }, cursor: 'pointer' }} onClick={onToggleSidebar}>
        <FormatAlignJustifyIcon />
      </Box>
        <TextField
          fullWidth
          type='search'
          placeholder='Search'
          size='small'
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: "#3DB80C" }} />
                </InputAdornment>
              ),
            }
          }}
          sx={{
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: '#3DB80C',
                borderRadius: '20px'
              },
              '&:hover fieldset': {
                borderColor: '#3DB80C',
              },
              '&.Mui-focused fieldset': {
                borderColor: '#3DB80C',
              },
            },
            '& input::placeholder': {
              color: '#3DB80C',
              opacity: 1,
            },
            width: { lg: '500px', md: '500px' },
            background: "white",
            borderRadius: '20px'
          }}
        />
      
</Box>
    </Box>
  );
};

export default Commonheader;
